import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { 
  Globe, 
  Users, 
  Settings, 
  Calendar, 
  ChevronDown,
  Copy,
  Check,
  Palette,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import { useState } from 'react';

export function SelectComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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

  const examples = [
    {
      title: '기본 선택 박스',
      description: '옵션 목록에서 선택할 수 있는 간단한 드롭다운 선택 박스입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="country">국가</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="국가를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kr">대한민국</SelectItem>
                <SelectItem value="us">미국</SelectItem>
                <SelectItem value="jp">일본</SelectItem>
                <SelectItem value="cn">중국</SelectItem>
                <SelectItem value="uk">영국</SelectItem>
                <SelectItem value="de">독일</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">선호 언어</Label>
            <Select defaultValue="ko">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
      code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Label } from "./components/ui/label"

<div className="space-y-2">
  <Label htmlFor="country">국가</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="국가를 선택하세요" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="kr">대한민국</SelectItem>
      <SelectItem value="us">미국</SelectItem>
      <SelectItem value="jp">일본</SelectItem>
    </SelectContent>
  </Select>
</div>`
    },
    {
      title: '아이콘이 있는 선택 박스',
      description: '더 나은 시각적 인식을 위해 아이콘이 포함된 향상된 선택 옵션입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label>팀 역할</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="역할을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    관리자
                  </div>
                </SelectItem>
                <SelectItem value="manager">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    매니저
                  </div>
                </SelectItem>
                <SelectItem value="member">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    팀 멤버
                  </div>
                </SelectItem>
                <SelectItem value="guest">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    게스트
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="역할을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="admin">
      <div className="flex items-center gap-2">
        <Settings className="w-4 h-4" />
        관리자
      </div>
    </SelectItem>
    <SelectItem value="manager">
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        매니저
      </div>
    </SelectItem>
  </SelectContent>
</Select>`
    },
    {
      title: '그룹화된 선택 옵션',
      description: '더 나은 탐색을 위해 관련 옵션들을 논리적 그룹으로 구성합니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label>시간대</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="시간대를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                  아시아
                </div>
                <SelectItem value="kst">한국 표준시 (KST)</SelectItem>
                <SelectItem value="jst">일본 표준시 (JST)</SelectItem>
                <SelectItem value="cst-china">중국 표준시 (CST)</SelectItem>
                
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t mt-2 pt-2">
                  북미
                </div>
                <SelectItem value="pst">태평양 표준시 (PST)</SelectItem>
                <SelectItem value="mst">산지 표준시 (MST)</SelectItem>
                <SelectItem value="cst">중부 표준시 (CST)</SelectItem>
                <SelectItem value="est">동부 표준시 (EST)</SelectItem>
                
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t mt-2 pt-2">
                  유럽
                </div>
                <SelectItem value="gmt">그리니치 표준시 (GMT)</SelectItem>
                <SelectItem value="cet">중앙유럽 시간 (CET)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="시간대를 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
      아시아
    </div>
    <SelectItem value="kst">한국 표준시 (KST)</SelectItem>
    <SelectItem value="jst">일본 표준시 (JST)</SelectItem>
    
    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t mt-2 pt-2">
      북미
    </div>
    <SelectItem value="pst">태평양 표준시 (PST)</SelectItem>
    <SelectItem value="est">동부 표준시 (EST)</SelectItem>
  </SelectContent>
</Select>`
    },
    {
      title: '상태 표시기가 있는 선택 박스',
      description: '배지, 색상, 상태 표시기로 추가적인 맥락을 제공합니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label>프로젝트 상태</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="상태를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="planning">
                  <div className="flex items-center justify-between w-full">
                    <span>기획 중</span>
                    <Badge variant="secondary">신규</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="progress">
                  <div className="flex items-center justify-between w-full">
                    <span>진행 중</span>
                    <Badge className="bg-blue-100 text-blue-800">진행</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="review">
                  <div className="flex items-center justify-between w-full">
                    <span>검토 중</span>
                    <Badge className="bg-yellow-100 text-yellow-800">대기</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="completed">
                  <div className="flex items-center justify-between w-full">
                    <span>완료됨</span>
                    <Badge className="bg-green-100 text-green-800">완료</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="archived">
                  <div className="flex items-center justify-between w-full">
                    <span>보관됨</span>
                    <Badge variant="outline">보관</Badge>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="상태를 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="planning">
      <div className="flex items-center justify-between w-full">
        <span>기획 중</span>
        <Badge variant="secondary">신규</Badge>
      </div>
    </SelectItem>
    <SelectItem value="progress">
      <div className="flex items-center justify-between w-full">
        <span>진행 중</span>
        <Badge className="bg-blue-100 text-blue-800">진행</Badge>
      </div>
    </SelectItem>
  </SelectContent>
</Select>`
    },
    {
      title: '폼 통합',
      description: '유효성 검사와 제출이 포함된 포괄적인 폼에 통합된 선택 박스 컴포넌트입니다.',
      component: (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>사용자 환경설정</CardTitle>
            <CardDescription>개인 설정을 업데이트하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>알림 빈도</Label>
              <Select defaultValue="daily">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">실시간</SelectItem>
                  <SelectItem value="hourly">매시간</SelectItem>
                  <SelectItem value="daily">매일</SelectItem>
                  <SelectItem value="weekly">매주</SelectItem>
                  <SelectItem value="never">받지 않음</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>날짜 형식</Label>
              <Select defaultValue="ymd">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                  <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="iso">ISO 8601</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>테마</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="테마를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">라이트</SelectItem>
                  <SelectItem value="dark">다크</SelectItem>
                  <SelectItem value="system">시스템</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full mt-6">환경설정 저장</Button>
          </CardContent>
        </Card>
      ),
      code: `<Card>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label>알림 빈도</Label>
      <Select defaultValue="daily">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="realtime">실시간</SelectItem>
          <SelectItem value="daily">매일</SelectItem>
          <SelectItem value="weekly">매주</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Button className="w-full">환경설정 저장</Button>
  </CardContent>
</Card>`
    },
    {
      title: '비활성화 상태',
      description: '다양한 비활성화 상태와 비활성화된 옵션이 있는 선택 박스 컴포넌트입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground">비활성화된 선택 박스</Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="이 선택 박스는 비활성화됨" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">옵션 1</SelectItem>
                <SelectItem value="option2">옵션 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>일부 옵션이 비활성화된 선택 박스</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="일부 옵션이 비활성화됨" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">사용 가능한 옵션</SelectItem>
                <SelectItem value="disabled" disabled>비활성화된 옵션</SelectItem>
                <SelectItem value="another">다른 사용 가능한 옵션</SelectItem>
                <SelectItem value="unavailable" disabled>사용 불가능한 옵션</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
      code: `// 비활성화된 선택 박스
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="이 선택 박스는 비활성화됨" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
  </SelectContent>
</Select>

// 비활성화된 옵션이 있는 선택 박스
<Select>
  <SelectTrigger>
    <SelectValue placeholder="일부 옵션이 비활성화됨" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="available">사용 가능한 옵션</SelectItem>
    <SelectItem value="disabled" disabled>비활성화된 옵션</SelectItem>
  </SelectContent>
</Select>`
    }
  ];

  const features = [
    {
      title: '키보드 네비게이션',
      description: '화살표 키, Enter, Escape로 완벽한 키보드 조작 지원',
      icon: '⌨️'
    },
    {
      title: '검색 기능',
      description: '옵션이 많을 때 타이핑으로 빠른 검색 및 필터링',
      icon: '🔍'
    },
    {
      title: '그룹화 지원',
      description: '관련 옵션들을 그룹으로 묶어 체계적인 구성',
      icon: '📂'
    },
    {
      title: '사용자 정의 콘텐츠',
      description: '아이콘, 배지, 복잡한 레이아웃 등 자유로운 옵션 구성',
      icon: '🎨'
    },
    {
      title: '접근성 완벽 지원',
      description: 'ARIA 속성과 스크린 리더 호환성으로 모든 사용자 지원',
      icon: '♿'
    },
    {
      title: '반응형 디자인',
      description: '모든 화면 크기에서 최적화된 드롭다운 표시',
      icon: '📱'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Select</h1>
            <p className="text-muted-foreground">
              사용자가 옵션 목록에서 하나를 선택할 수 있는 드롭다운 컴포넌트입니다. 화면 공간을 절약하면서 여러 선택지를 제공하는 컴팩트한 방법을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            6가지 예제
          </Badge>
          <Badge variant="outline">키보드 네비게이션</Badge>
          <Badge variant="outline">검색 기능</Badge>
          <Badge variant="outline">그룹화</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">기능 및 변형</TabsTrigger>
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

        {/* Features & Variants Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Select 기능</CardTitle>
              <CardDescription>
                Select 컴포넌트의 다양한 기능과 설정 옵션들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <ChevronDown className="w-4 h-4" />
                    기본 기능
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 단일 선택 지원</li>
                    <li>• 기본값 설정 가능</li>
                    <li>• 플레이스홀더 텍스트</li>
                    <li>• 필수 입력 검증</li>
                    <li>• 비활성화 상태</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    고급 기능
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 검색 및 필터링</li>
                    <li>• 옵션 그룹화</li>
                    <li>• 사용자 정의 렌더링</li>
                    <li>• 아이콘 및 배지 지원</li>
                    <li>• 동적 옵션 로딩</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>옵션 구성 방법</CardTitle>
              <CardDescription>
                다양한 방법으로 Select 옵션을 구성할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">텍스트만</h5>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="간단한 옵션" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">옵션 1</SelectItem>
                        <SelectItem value="option2">옵션 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">가장 기본적인 형태</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">아이콘 포함</h5>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="아이콘 옵션" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="settings">
                          <div className="flex items-center gap-2">
                            <Settings className="w-4 h-4" />
                            설정
                          </div>
                        </SelectItem>
                        <SelectItem value="users">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            사용자
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">시각적 향상</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">배지 포함</h5>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="상태 옵션" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">
                          <div className="flex items-center justify-between w-full">
                            <span>활성</span>
                            <Badge variant="default">ON</Badge>
                          </div>
                        </SelectItem>
                        <SelectItem value="inactive">
                          <div className="flex items-center justify-between w-full">
                            <span>비활성</span>
                            <Badge variant="secondary">OFF</Badge>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">추가 정보 표시</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상태별 스타일링</CardTitle>
              <CardDescription>
                다양한 상태에 따른 Select의 모양과 동작입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h5 className="font-medium">활성 상태</h5>
                  <div className="space-y-2">
                    <Label>일반 상태</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="정상적으로 사용 가능" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">옵션 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>포커스 상태</Label>
                    <Select>
                      <SelectTrigger className="ring-2 ring-ring">
                        <SelectValue placeholder="포커스된 상태" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">옵션 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">제한된 상태</h5>
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">비활성화</Label>
                    <Select disabled>
                      <SelectTrigger>
                        <SelectValue placeholder="비활성화된 상태" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">옵션 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>필수 입력</Label>
                    <Select required>
                      <SelectTrigger className="border-red-300">
                        <SelectValue placeholder="필수 선택 항목" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">옵션 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                효과적인 Select 사용을 위한 모범 사례입니다.
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
                    <li>• 명확하고 설명적인 라벨 사용</li>
                    <li>• 옵션은 논리적 순서로 정렬</li>
                    <li>• 관련 옵션들을 그룹화</li>
                    <li>• 적절한 기본값 제공</li>
                    <li>• 옵션 개수가 많을 때 검색 기능 활용</li>
                    <li>• 일관된 옵션 텍스트 길이</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 옵션으로 인한 혼란</li>
                    <li>• 모호하거나 유사한 옵션명</li>
                    <li>• 기본값 없이 필수 선택 요구</li>
                    <li>• 일관성 없는 옵션 형식</li>
                    <li>• 의미 없는 옵션 순서</li>
                    <li>• 너무 긴 옵션 텍스트</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>언제 사용하나요?</CardTitle>
              <CardDescription>
                Select와 다른 입력 컴포넌트를 언제 사용할지 결정하는 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Select 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 4개 이상의 옵션</li>
                    <li>• 국가, 언어 선택</li>
                    <li>• 카테고리 분류</li>
                    <li>• 상태 선택</li>
                    <li>• 드롭다운 메뉴</li>
                    <li>• 필터 옵션</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 고려</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Radio Group:</strong> 2-4개 옵션</li>
                    <li>• <strong>Checkbox:</strong> 다중 선택</li>
                    <li>• <strong>Toggle:</strong> 이진 선택</li>
                    <li>• <strong>Combobox:</strong> 검색 + 선택</li>
                    <li>• <strong>Input:</strong> 자유 입력</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 2개 이하의 옵션</li>
                    <li>• 주요 네비게이션</li>
                    <li>• 다중 선택이 필요한 경우</li>
                    <li>• 빈번한 변경이 필요한 설정</li>
                    <li>• 시간에 민감한 액션</li>
                    <li>• 복잡한 데이터 입력</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Select를 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>Select로 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space/Enter</kbd>
                      <span>드롭다운 열기</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">↑↓</kbd>
                      <span>옵션 간 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Esc</kbd>
                      <span>드롭다운 닫기</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 라벨과 Select 요소 연결 (htmlFor/id)</li>
                    <li>• aria-label이나 aria-labelledby 사용</li>
                    <li>• 현재 선택된 값 음성 안내</li>
                    <li>• 옵션 개수와 위치 정보 제공</li>
                    <li>• 필수 필드 여부 안내</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 확보</li>
                    <li>• 포커스 표시기 명확히 표시</li>
                    <li>• 터치하기 쉬운 크기 (최소 44px)</li>
                    <li>• 색상만으로 정보 전달 금지</li>
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
                Select 컴포넌트들의 속성과 사용법입니다.
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
                        <td className="p-2 font-mono">Select</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">SelectTrigger</td>
                        <td className="p-2">클릭 가능한 트리거</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">SelectValue</td>
                        <td className="p-2">선택된 값 표시</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">SelectContent</td>
                        <td className="p-2">드롭다운 콘텐츠</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">SelectItem</td>
                        <td className="p-2">개별 선택 옵션</td>
                        <td className="p-2">필수</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Select 속성</h4>
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
                        <td className="p-2 font-mono">value</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 선택 값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">비제어 컴포넌트의 기본값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">Select 컴포넌트 비활성화</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">required</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">폼 유효성 검사를 위한 필수 표시</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onValueChange</td>
                        <td className="p-2">(value: string) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">선택 변경 시 호출되는 함수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">name</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">폼 제출을 위한 name 속성</td>
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
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./components/ui/select";
import { Label } from "./components/ui/label";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 선택 박스
<div className="space-y-2">
  <Label>옵션을 선택하세요</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="옵션을 선택하세요" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">옵션 1</SelectItem>
      <SelectItem value="option2">옵션 2</SelectItem>
      <SelectItem value="option3">옵션 3</SelectItem>
    </SelectContent>
  </Select>
</div>

// 제어된 선택 박스
const [value, setValue] = useState('');

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="옵션을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
    <SelectItem value="option2">옵션 2</SelectItem>
  </SelectContent>
</Select>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="아이콘과 배지가 있는 선택 박스"
                code={`import { Settings, Users } from "lucide-react";
import { Badge } from "./components/ui/badge";

<Select>
  <SelectTrigger>
    <SelectValue placeholder="역할을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="admin">
      <div className="flex items-center gap-2">
        <Settings className="w-4 h-4" />
        관리자
      </div>
    </SelectItem>
    <SelectItem value="status">
      <div className="flex items-center justify-between w-full">
        <span>진행 중</span>
        <Badge className="bg-blue-100 text-blue-800">활성</Badge>
      </div>
    </SelectItem>
  </SelectContent>
</Select>`}
                codeKey="advanced-usage"
              />

              <CodeBlock
                title="그룹화된 옵션"
                code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="시간대를 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
      아시아
    </div>
    <SelectItem value="kst">한국 표준시 (KST)</SelectItem>
    <SelectItem value="jst">일본 표준시 (JST)</SelectItem>
    
    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t mt-2 pt-2">
      북미
    </div>
    <SelectItem value="pst">태평양 표준시 (PST)</SelectItem>
    <SelectItem value="est">동부 표준시 (EST)</SelectItem>
  </SelectContent>
</Select>`}
                codeKey="grouped-usage"
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