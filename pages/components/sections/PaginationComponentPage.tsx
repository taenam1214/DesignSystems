import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { 
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Palette,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info,
  MoreHorizontal,
  Search,
  Filter,
  RefreshCw
} from 'lucide-react';
import { useState } from 'react';

export function PaginationComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // States for different pagination examples
  const [basicCurrentPage, setBasicCurrentPage] = useState(1);
  const [tableCurrentPage, setTableCurrentPage] = useState(1);
  const [customCurrentPage, setCustomCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [jumpToPage, setJumpToPage] = useState('');

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CopyButton = ({ text, codeKey }: { text: string; codeKey: string }) => (
    <Button
      variant="ghost"
      size="sm"
      className="h-6 w-6 p-0"
      onClick={() => copyToClipboard(text, codeKey)}
    >
      {copiedCode === codeKey ? (
        <Check className="h-3 w-3" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  );

  const CodeBlock = ({ code, title, codeKey }: { code: string; title?: string; codeKey: string }) => (
    <div className="relative">
      {title && <h4 className="text-sm font-medium mb-2">{title}</h4>}
      <div className="bg-muted/50 rounded-lg p-4 relative group">
        <pre className="text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyButton text={code} codeKey={codeKey} />
        </div>
      </div>
    </div>
  );

  // Helper function to generate page numbers
  const generatePages = (currentPage: number, totalPages: number, maxVisible: number = 5) => {
    const pages = [];
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const examples = [
    {
      title: '기본 페이지네이션',
      description: '이전/다음 버튼과 페이지 번호가 있는 표준 페이지네이션입니다.',
      component: (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (basicCurrentPage > 1) setBasicCurrentPage(basicCurrentPage - 1);
                  }}
                />
              </PaginationItem>
              {generatePages(basicCurrentPage, 10).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    href="#" 
                    isActive={page === basicCurrentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      setBasicCurrentPage(page);
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (basicCurrentPage < 10) setBasicCurrentPage(basicCurrentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ),
      code: `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`
    },
    {
      title: '심플 페이지네이션',
      description: '이전/다음 버튼만 있는 간단한 페이지네이션입니다.',
      component: (
        <div className="space-y-4">
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <span className="flex items-center px-3 py-2 text-sm text-muted-foreground">
                    페이지 2 / 10
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    이전
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <span className="flex items-center px-4 py-2 text-sm">
                    1-10 / 총 247개
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <Button variant="outline" size="sm">
                    다음
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      ),
      code: `// 페이지 정보와 함께
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <span className="flex items-center px-3 py-2 text-sm text-muted-foreground">
        페이지 2 / 10
      </span>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

// 항목 개수와 함께
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <Button variant="outline" size="sm">
        <ChevronLeft className="h-4 w-4 mr-2" />
        이전
      </Button>
    </PaginationItem>
    <PaginationItem>
      <span className="flex items-center px-4 py-2 text-sm">
        1-10 / 총 247개
      </span>
    </PaginationItem>
    <PaginationItem>
      <Button variant="outline" size="sm">
        다음
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </PaginationItem>
  </PaginationContent>
</Pagination>`
    },
    {
      title: '테이블과 함께 사용',
      description: '데이터 테이블과 함께 사용하는 실제 사용 예시입니다.',
      component: (
        <Card>
          <CardHeader>
            <CardTitle>사용자 목록</CardTitle>
            <CardDescription>등록된 사용자들을 관리하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="사용자 검색..." className="w-[250px] pl-8" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
              </div>
              <Button size="sm">
                사용자 추가
              </Button>
            </div>
            
            <div className="border rounded-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="p-3 text-left font-medium">이름</th>
                      <th className="p-3 text-left font-medium">이메일</th>
                      <th className="p-3 text-left font-medium">역할</th>
                      <th className="p-3 text-left font-medium">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '김민수', email: 'minsu@example.com', role: '관리자', status: '활성' },
                      { name: '이영희', email: 'younghee@example.com', role: '편집자', status: '활성' },
                      { name: '박철수', email: 'cheolsu@example.com', role: '뷰어', status: '비활성' },
                      { name: '정수진', email: 'sujin@example.com', role: '편집자', status: '활성' },
                      { name: '최동호', email: 'dongho@example.com', role: '관리자', status: '대기' },
                    ].slice((tableCurrentPage - 1) * 3, tableCurrentPage * 3).map((user, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="p-3 font-medium">{user.name}</td>
                        <td className="p-3 text-muted-foreground">{user.email}</td>
                        <td className="p-3">
                          <Badge variant={user.role === '관리자' ? 'default' : 'secondary'}>
                            {user.role}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Badge variant={user.status === '활성' ? 'default' : user.status === '대기' ? 'secondary' : 'destructive'}>
                            {user.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                총 5명 중 {Math.min((tableCurrentPage - 1) * 3 + 1, 5)}-{Math.min(tableCurrentPage * 3, 5)}명 표시
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (tableCurrentPage > 1) setTableCurrentPage(tableCurrentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink 
                      href="#" 
                      isActive={tableCurrentPage === 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setTableCurrentPage(1);
                      }}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink 
                      href="#" 
                      isActive={tableCurrentPage === 2}
                      onClick={(e) => {
                        e.preventDefault();
                        setTableCurrentPage(2);
                      }}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (tableCurrentPage < 2) setTableCurrentPage(tableCurrentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      ),
      code: `<Card>
  <CardContent className="space-y-4">
    {/* 테이블 내용 */}
    <div className="border rounded-lg">
      <table className="w-full text-sm">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="p-3 text-left font-medium">이름</th>
            <th className="p-3 text-left font-medium">이메일</th>
            <th className="p-3 text-left font-medium">역할</th>
          </tr>
        </thead>
        <tbody>
          {/* 데이터 행들 */}
        </tbody>
      </table>
    </div>
    
    {/* 페이지네이션과 정보 */}
    <div className="flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        총 247명 중 1-10명 표시
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  </CardContent>
</Card>`
    },
    {
      title: '고급 페이지네이션',
      description: '페이지 당 항목 수 선택, 페이지 점프 등 고급 기능이 포함된 페이지네이션입니다.',
      component: (
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="items-per-page" className="text-sm">페이지당</Label>
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                    <SelectTrigger id="items-per-page" className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-muted-foreground">개씩 보기</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Label htmlFor="jump-to-page" className="text-sm">페이지</Label>
                  <Input
                    id="jump-to-page"
                    type="number"
                    min="1"
                    max="25"
                    className="w-16"
                    value={jumpToPage}
                    onChange={(e) => setJumpToPage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const page = Number(jumpToPage);
                        if (page >= 1 && page <= 25) {
                          setCustomCurrentPage(page);
                          setJumpToPage('');
                        }
                      }
                    }}
                  />
                  <span className="text-sm text-muted-foreground">/ 25로 이동</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                새로고침
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                총 {itemsPerPage * 25}개 항목 중 {((customCurrentPage - 1) * itemsPerPage) + 1}-{Math.min(customCurrentPage * itemsPerPage, itemsPerPage * 25)}개 표시
              </div>
              
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (customCurrentPage > 1) setCustomCurrentPage(customCurrentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  
                  {customCurrentPage > 3 && (
                    <>
                      <PaginationItem>
                        <PaginationLink 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCustomCurrentPage(1);
                          }}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      {customCurrentPage > 4 && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}
                    </>
                  )}
                  
                  {generatePages(customCurrentPage, 25, 5).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        href="#" 
                        isActive={page === customCurrentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          setCustomCurrentPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {customCurrentPage < 23 && (
                    <>
                      {customCurrentPage < 22 && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}
                      <PaginationItem>
                        <PaginationLink 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCustomCurrentPage(25);
                          }}
                        >
                          25
                        </PaginationLink>
                      </PaginationItem>
                    </>
                  )}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (customCurrentPage < 25) setCustomCurrentPage(customCurrentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      ),
      code: `// 페이지당 항목 수 선택
<div className="flex items-center space-x-2">
  <Label htmlFor="items-per-page">페이지당</Label>
  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
    <SelectTrigger className="w-20">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="10">10</SelectItem>
      <SelectItem value="20">20</SelectItem>
      <SelectItem value="50">50</SelectItem>
    </SelectContent>
  </Select>
  <span>개씩 보기</span>
</div>

// 페이지 점프
<div className="flex items-center space-x-2">
  <Label htmlFor="jump-to-page">페이지</Label>
  <Input
    type="number"
    min="1"
    max="25"
    className="w-16"
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        const page = Number(e.currentTarget.value);
        if (page >= 1 && page <= 25) {
          setCurrentPage(page);
        }
      }
    }}
  />
  <span>/ 25로 이동</span>
</div>

// 고급 페이지네이션
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    
    {/* 첫 페이지와 생략 부호 */}
    {currentPage > 3 && (
      <>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        {currentPage > 4 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
      </>
    )}
    
    {/* 현재 페이지 주변 페이지들 */}
    {generatePages(currentPage, totalPages).map((page) => (
      <PaginationItem key={page}>
        <PaginationLink href="#" isActive={page === currentPage}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ))}
    
    {/* 마지막 페이지와 생략 부호 */}
    {currentPage < totalPages - 2 && (
      <>
        {currentPage < totalPages - 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#">{totalPages}</PaginationLink>
        </PaginationItem>
      </>
    )}
    
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`
    }
  ];

  const features = [
    {
      title: '완전한 접근성',
      description: 'ARIA 속성과 키보드 네비게이션으로 모든 사용자 지원',
      icon: '♿'
    },
    {
      title: '유연한 스타일링',
      description: '다양한 크기와 스타일로 디자인에 맞게 사용자 정의',
      icon: '🎨'
    },
    {
      title: '반응형 디자인',
      description: '모바일과 데스크톱에서 최적화된 레이아웃 자동 조정',
      icon: '📱'
    },
    {
      title: '스마트 생략',
      description: '많은 페이지에서 자동으로 생략 부호(...) 표시',
      icon: '🔍'
    },
    {
      title: '사용자 정의 로직',
      description: '페이지 계산과 네비게이션 로직을 자유롭게 구현',
      icon: '⚙️'
    },
    {
      title: '다양한 패턴',
      description: '심플, 고급, 테이블 통합 등 다양한 사용 패턴 지원',
      icon: '📝'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MoreHorizontal className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Pagination</h1>
            <p className="text-muted-foreground">
              대용량 데이터를 여러 페이지로 나누어 표시하는 네비게이션 컴포넌트입니다. 사용자가 콘텐츠를 쉽게 탐색할 수 있도록 이전/다음 버튼과 페이지 번호를 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            4가지 예제
          </Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">반응형</Badge>
          <Badge variant="outline">스마트 생략</Badge>
          <Badge variant="outline">테이블 통합</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">패턴 및 변형</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          {examples.map((example, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {example.component}
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Patterns & Variants Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>페이지네이션 패턴</CardTitle>
              <CardDescription>
                다양한 상황에 맞는 페이지네이션 패턴들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">기본 패턴</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 이전/다음 버튼과 페이지 번호</li>
                    <li>• 현재 페이지 하이라이트</li>
                    <li>• 생략 부호(...) 자동 표시</li>
                    <li>• 첫/마지막 페이지 바로가기</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">심플 패턴</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 이전/다음 버튼만 표시</li>
                    <li>• 현재 페이지 정보 텍스트</li>
                    <li>• 전체 항목 수 표시</li>
                    <li>• 모바일 친화적 디자인</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>크기 및 스타일 변형</CardTitle>
              <CardDescription>
                다양한 크기와 스타일의 페이지네이션 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h5 className="font-medium">기본 크기</h5>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                <div className="space-y-3">
                  <h5 className="font-medium">작은 크기</h5>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <Button variant="outline" size="sm">
                          <ChevronLeft className="h-3 w-3" />
                        </Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button variant="ghost" size="sm">1</Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button variant="default" size="sm">2</Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button variant="ghost" size="sm">3</Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button variant="outline" size="sm">
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                <div className="space-y-3">
                  <h5 className="font-medium">컴팩트 스타일</h5>
                  <div className="flex items-center space-x-1">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <ChevronLeft className="h-3 w-3" />
                    </Button>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">1</Button>
                      <Button variant="default" size="sm" className="h-8 w-8 p-0">2</Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">3</Button>
                      <span className="px-2 text-sm text-muted-foreground">...</span>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">10</Button>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <ChevronRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>페이지 생략 로직</CardTitle>
              <CardDescription>
                많은 페이지가 있을 때 효과적으로 표시하는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-3">현재 페이지가 앞쪽인 경우</h5>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">50</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                <div>
                  <h5 className="font-medium mb-3">현재 페이지가 중간인 경우</h5>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">24</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>25</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">26</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">50</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                <div>
                  <h5 className="font-medium mb-3">현재 페이지가 뒤쪽인 경우</h5>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">47</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">48</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">49</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>50</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>사용 가이드라인</CardTitle>
              <CardDescription>
                효과적인 Pagination 사용을 위한 모범 사례입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장사항
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 현재 페이지를 명확하게 표시</li>
                    <li>• 적절한 페이지 수(5-7개) 표시</li>
                    <li>• 첫/마지막 페이지 바로가기 제공</li>
                    <li>• 전체 항목 수와 현재 범위 표시</li>
                    <li>• 로딩 상태와 에러 처리</li>
                    <li>• 모바일에서 간소화된 버전 사용</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 페이지 번호 표시</li>
                    <li>• 불명확한 현재 페이지 표시</li>
                    <li>• 비활성화된 버튼의 모호한 상태</li>
                    <li>• 일관성 없는 페이지 크기</li>
                    <li>• 페이지 정보 없이 번호만 표시</li>
                    <li>• 모바일에서 너무 작은 터치 영역</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>언제 사용하나요?</CardTitle>
              <CardDescription>
                Pagination과 다른 네비게이션 방법을 언제 사용할지 결정하는 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Pagination 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 대용량 데이터 목록</li>
                    <li>• 테이블 및 그리드 뷰</li>
                    <li>• 검색 결과 페이지</li>
                    <li>• 블로그 포스트 목록</li>
                    <li>• 사용자 관리 페이지</li>
                    <li>• 제품 카탈로그</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 고려</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>무한 스크롤:</strong> 소셜 피드</li>
                    <li>• <strong>Load More:</strong> 이미지 갤러리</li>
                    <li>• <strong>가상화:</strong> 매우 긴 목록</li>
                    <li>• <strong>필터링:</strong> 실시간 검색</li>
                    <li>• <strong>탭:</strong> 카테고리 구분</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 소량의 데이터 (20개 이하)</li>
                    <li>• 순차적 읽기가 중요한 콘텐츠</li>
                    <li>• 실시간 업데이트되는 데이터</li>
                    <li>• 단일 페이지 애플리케이션의 섹션</li>
                    <li>• 위치 기반 연속 탐색</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Pagination을 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>다음 페이지 버튼으로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift+Tab</kbd>
                      <span>이전 페이지 버튼으로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter/Space</kbd>
                      <span>페이지 이동 실행</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Home/End</kbd>
                      <span>첫/마지막 페이지 이동</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">ARIA 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• role="navigation" 및 aria-label="pagination" 설정</li>
                    <li>• 현재 페이지에 aria-current="page" 속성</li>
                    <li>• 비활성화된 버튼에 aria-disabled="true"</li>
                    <li>• 생략 부호에 aria-hidden="true" 및 설명 텍스트</li>
                    <li>• 페이지 정보를 스크린 리더에서 명확히 안내</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 확보 (4.5:1 이상)</li>
                    <li>• 터치하기 쉬운 크기 (최소 44px)</li>
                    <li>• 명확한 포커스 표시기</li>
                    <li>• 호버 및 활성 상태 피드백</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementation Tab */}
        <TabsContent value="code" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>컴포넌트 API</CardTitle>
              <CardDescription>
                Pagination 컴포넌트들의 구조와 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">주요 컴포넌트</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">컴포넌트</th>
                        <th className="text-left p-2 font-medium">역할</th>
                        <th className="text-left p-2 font-medium">필수 여부</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">Pagination</td>
                        <td className="p-2">루트 네비게이션 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">PaginationContent</td>
                        <td className="p-2">페이지네이션 아이템 리스트</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">PaginationItem</td>
                        <td className="p-2">개별 페이지 아이템 래퍼</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">PaginationLink</td>
                        <td className="p-2">페이지 번호 링크</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">PaginationPrevious</td>
                        <td className="p-2">이전 페이지 버튼</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">PaginationNext</td>
                        <td className="p-2">다음 페이지 버튼</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">PaginationEllipsis</td>
                        <td className="p-2">생략 부호 (...)</td>
                        <td className="p-2">선택</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">PaginationLink 속성</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">속성</th>
                        <th className="text-left p-2 font-medium">타입</th>
                        <th className="text-left p-2 font-medium">기본값</th>
                        <th className="text-left p-2 font-medium">설명</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">isActive</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">현재 페이지 여부</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">"default" | "sm" | "lg" | "icon"</td>
                        <td className="p-2">"icon"</td>
                        <td className="p-2">버튼 크기</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">href</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">링크 URL</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onClick</td>
                        <td className="p-2">() =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">클릭 핸들러</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>설치 및 가져오기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="가져오기"
                code={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="상태 관리가 있는 사용법"
                code={`const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      />
    </PaginationItem>
    
    {/* 페이지 번호들 */}
    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
      const page = i + 1;
      return (
        <PaginationItem key={page}>
          <PaginationLink 
            href="#" 
            isActive={page === currentPage}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(page);
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    })}
    
    <PaginationItem>
      <PaginationNext 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
                codeKey="stateful-usage"
              />

              <CodeBlock
                title="스마트 페이지 생략"
                code={`function generatePages(currentPage, totalPages, maxVisible = 5) {
  const pages = [];
  const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const end = Math.min(totalPages, start + maxVisible - 1);
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
}

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    
    {/* 첫 페이지와 생략 부호 */}
    {currentPage > 3 && (
      <>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => setCurrentPage(1)}>
            1
          </PaginationLink>
        </PaginationItem>
        {currentPage > 4 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
      </>
    )}
    
    {/* 현재 페이지 주변 페이지들 */}
    {generatePages(currentPage, totalPages).map((page) => (
      <PaginationItem key={page}>
        <PaginationLink 
          href="#" 
          isActive={page === currentPage}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ))}
    
    {/* 마지막 페이지와 생략 부호 */}
    {currentPage < totalPages - 2 && (
      <>
        {currentPage < totalPages - 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink 
            href="#" 
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      </>
    )}
    
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
                codeKey="smart-pagination"
              />

              <CodeBlock
                title="테이블과 함께 사용"
                code={`function DataTableWithPagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <div className="space-y-4">
      {/* 테이블 */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>역할</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* 페이지네이션과 정보 */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          총 {data.length}개 중 {startIndex + 1}-{Math.min(startIndex + itemsPerPage, data.length)}개 표시
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  isActive={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}`}
                codeKey="table-pagination"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            주요 기능
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h4 className="font-medium">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}