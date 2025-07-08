import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
  Minus,
  Copy,
  Check,
  Palette,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info,
  User,
  Settings,
  Bell,
  Calendar,
  Mail,
  Home,
  FileText,
  Image,
  Video,
  Music
} from 'lucide-react';
import { useState } from 'react';

export function SeparatorComponentPage() {
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
      title: '기본 수평 구분선',
      description: '콘텐츠 영역을 구분하는 가장 기본적인 수평 구분선입니다.',
      component: (
        <div className="space-y-4 max-w-md">
          <div>
            <h4 className="font-medium">섹션 1</h4>
            <p className="text-sm text-muted-foreground">첫 번째 섹션의 내용입니다.</p>
          </div>
          <Separator />
          <div>
            <h4 className="font-medium">섹션 2</h4>
            <p className="text-sm text-muted-foreground">두 번째 섹션의 내용입니다.</p>
          </div>
          <Separator />
          <div>
            <h4 className="font-medium">섹션 3</h4>
            <p className="text-sm text-muted-foreground">세 번째 섹션의 내용입니다.</p>
          </div>
        </div>
      ),
      code: `import { Separator } from "./components/ui/separator"

<div className="space-y-4">
  <div>
    <h4 className="font-medium">섹션 1</h4>
    <p className="text-sm text-muted-foreground">첫 번째 섹션의 내용입니다.</p>
  </div>
  <Separator />
  <div>
    <h4 className="font-medium">섹션 2</h4>
    <p className="text-sm text-muted-foreground">두 번째 섹션의 내용입니다.</p>
  </div>
</div>`
    },
    {
      title: '수직 구분선',
      description: '나란히 배치된 요소들을 수직으로 구분하는 구분선입니다.',
      component: (
        <div className="flex items-center space-x-4 max-w-md">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span className="text-sm">프로필</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span className="text-sm">설정</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4" />
            <span className="text-sm">알림</span>
          </div>
        </div>
      ),
      code: `<div className="flex items-center space-x-4">
  <div className="flex items-center space-x-2">
    <User className="w-4 h-4" />
    <span className="text-sm">프로필</span>
  </div>
  <Separator orientation="vertical" className="h-4" />
  <div className="flex items-center space-x-2">
    <Settings className="w-4 h-4" />
    <span className="text-sm">설정</span>
  </div>
  <Separator orientation="vertical" className="h-4" />
  <div className="flex items-center space-x-2">
    <Bell className="w-4 h-4" />
    <span className="text-sm">알림</span>
  </div>
</div>`
    },
    {
      title: '메뉴 구분선',
      description: '드롭다운 메뉴나 네비게이션에서 관련 항목들을 그룹화하는 구분선입니다.',
      component: (
        <Card className="w-full max-w-xs">
          <CardContent className="p-0">
            <div className="py-2">
              <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span className="text-sm">홈</span>
              </div>
              <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">프로필</span>
              </div>
              <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">일정</span>
              </div>
              
              <Separator className="my-1" />
              
              <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="text-sm">설정</span>
              </div>
              <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                <Bell className="w-4 h-4" />
                <span className="text-sm">알림</span>
              </div>
              
              <Separator className="my-1" />
              
              <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                <span className="text-sm text-destructive">로그아웃</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
      code: `<div className="py-2">
  <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
    <Home className="w-4 h-4" />
    <span className="text-sm">홈</span>
  </div>
  <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
    <User className="w-4 h-4" />
    <span className="text-sm">프로필</span>
  </div>
  
  <Separator className="my-1" />
  
  <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
    <Settings className="w-4 h-4" />
    <span className="text-sm">설정</span>
  </div>
  <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
    <Bell className="w-4 h-4" />
    <span className="text-sm">알림</span>
  </div>
</div>`
    },
    {
      title: '사용자 목록 구분선',
      description: '사용자 목록이나 연락처에서 각 항목을 구분하는 구분선입니다.',
      component: (
        <Card className="w-full max-w-md">
          <CardContent className="p-0">
            <div className="space-y-0">
              {[
                { name: '김민수', email: 'minsu@example.com', avatar: '김민수' },
                { name: '이영희', email: 'younghee@example.com', avatar: '이영희' },
                { name: '박철수', email: 'cheolsu@example.com', avatar: '박철수' },
                { name: '정수진', email: 'sujin@example.com', avatar: '정수진' }
              ].map((user, index, array) => (
                <div key={user.email}>
                  <div className="flex items-center space-x-3 p-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="text-xs">
                        {user.avatar.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{user.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      연결
                    </Button>
                  </div>
                  {index < array.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ),
      code: `const users = [
  { name: '김민수', email: 'minsu@example.com' },
  { name: '이영희', email: 'younghee@example.com' },
  { name: '박철수', email: 'cheolsu@example.com' }
];

<div className="space-y-0">
  {users.map((user, index, array) => (
    <div key={user.email}>
      <div className="flex items-center space-x-3 p-4">
        <Avatar className="w-10 h-10">
          <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
        <Button variant="outline" size="sm">연결</Button>
      </div>
      {index < array.length - 1 && <Separator />}
    </div>
  ))}
</div>`
    },
    {
      title: '텍스트가 있는 구분선',
      description: '구분선에 텍스트나 라벨을 포함하여 섹션의 의미를 명확히 합니다.',
      component: (
        <div className="space-y-6 max-w-md">
          <div>
            <h4 className="font-medium">개인 정보</h4>
            <p className="text-sm text-muted-foreground">이름, 이메일, 전화번호</p>
          </div>
          
          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background px-2 text-xs text-muted-foreground">또는</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium">계정 설정</h4>
            <p className="text-sm text-muted-foreground">비밀번호, 보안, 알림</p>
          </div>
          
          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background px-2 text-xs text-muted-foreground">고급 설정</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium">개발자 옵션</h4>
            <p className="text-sm text-muted-foreground">API 키, 웹훅, 통합</p>
          </div>
        </div>
      ),
      code: `<div className="space-y-6">
  <div>
    <h4 className="font-medium">개인 정보</h4>
    <p className="text-sm text-muted-foreground">이름, 이메일, 전화번호</p>
  </div>
  
  <div className="relative">
    <Separator />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="bg-background px-2 text-xs text-muted-foreground">또는</span>
    </div>
  </div>
  
  <div>
    <h4 className="font-medium">계정 설정</h4>
    <p className="text-sm text-muted-foreground">비밀번호, 보안, 알림</p>
  </div>
</div>`
    },
    {
      title: '콘텐츠 유형별 구분선',
      description: '다양한 콘텐츠 유형을 구분하는 구조화된 레이아웃에서의 구분선 사용법입니다.',
      component: (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>미디어 라이브러리</CardTitle>
            <CardDescription>파일 유형별로 구분된 미디어 파일들</CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            <div className="py-3">
              <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                문서
              </h5>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground pl-6">프로젝트 계획서.pdf</div>
                <div className="text-sm text-muted-foreground pl-6">회의록.docx</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="py-3">
              <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Image className="w-4 h-4" />
                이미지
              </h5>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground pl-6">로고_최종.png</div>
                <div className="text-sm text-muted-foreground pl-6">배너_이미지.jpg</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="py-3">
              <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Video className="w-4 h-4" />
                비디오
              </h5>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground pl-6">제품_소개.mp4</div>
                <div className="text-sm text-muted-foreground pl-6">튜토리얼.mov</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
      code: `<Card>
  <CardHeader>
    <CardTitle>미디어 라이브러리</CardTitle>
  </CardHeader>
  <CardContent className="space-y-0">
    <div className="py-3">
      <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
        <FileText className="w-4 h-4" />
        문서
      </h5>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground pl-6">프로젝트 계획서.pdf</div>
        <div className="text-sm text-muted-foreground pl-6">회의록.docx</div>
      </div>
    </div>
    
    <Separator />
    
    <div className="py-3">
      <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
        <Image className="w-4 h-4" />
        이미지
      </h5>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground pl-6">로고_최종.png</div>
        <div className="text-sm text-muted-foreground pl-6">배너_이미지.jpg</div>
      </div>
    </div>
  </CardContent>
</Card>`
    }
  ];

  const features = [
    {
      title: '두 가지 방향',
      description: '수평과 수직 방향으로 유연한 레이아웃 구성',
      icon: '↔️'
    },
    {
      title: '장식적 요소',
      description: '스크린 리더에서 무시되는 시각적 구분 요소',
      icon: '🎨'
    },
    {
      title: '의미적 구분',
      description: '콘텐츠의 논리적 구분을 명확하게 표현',
      icon: '📝'
    },
    {
      title: '완전한 사용자 정의',
      description: '색상, 두께, 스타일을 자유롭게 조정 가능',
      icon: '🛠️'
    },
    {
      title: '접근성 완벽 지원',
      description: 'WAI-ARIA 표준을 준수한 접근성 기능',
      icon: '♿'
    },
    {
      title: '반응형 디자인',
      description: '모든 화면 크기에서 일관된 구분선 표시',
      icon: '📱'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Minus className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Separator</h1>
            <p className="text-muted-foreground">
              콘텐츠 영역을 시각적으로 구분하는 구분선 컴포넌트입니다. 페이지나 인터페이스에서 서로 다른 섹션을 명확하게 나누어 가독성과 구조를 개선합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            6가지 예제
          </Badge>
          <Badge variant="outline">수평/수직</Badge>
          <Badge variant="outline">텍스트 라벨</Badge>
          <Badge variant="outline">메뉴 구분</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">스타일 및 변형</TabsTrigger>
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

        {/* Variants & Styling Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>방향 및 크기</CardTitle>
              <CardDescription>
                다양한 방향과 크기의 구분선을 사용할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">수평 구분선</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">기본 두께</p>
                      <Separator />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">두꺼운 구분선</p>
                      <Separator className="h-0.5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">더 두꺼운 구분선</p>
                      <Separator className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">수직 구분선</h4>
                  <div className="flex items-center space-x-4 h-20">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">기본</p>
                      <Separator orientation="vertical" className="h-full" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">두께</p>
                      <Separator orientation="vertical" className="h-full w-0.5" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">더 두께</p>
                      <Separator orientation="vertical" className="h-full w-1" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>색상 및 스타일</CardTitle>
              <CardDescription>
                다양한 색상과 스타일로 구분선을 사용자 정의할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">기본 구분선</p>
                  <Separator />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">밝은 구분선</p>
                  <Separator className="bg-muted" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">어두운 구분선</p>
                  <Separator className="bg-muted-foreground/20" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">포인트 색상 구분선</p>
                  <Separator className="bg-primary/20" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">점선 구분선</p>
                  <div className="w-full h-px border-t border-dashed border-border"></div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">점점이 구분선</p>
                  <div className="w-full h-px border-t border-dotted border-border"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>간격 조정</CardTitle>
              <CardDescription>
                구분선 주변의 간격을 조정하여 다양한 레이아웃에 맞게 사용할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">밀착 간격</h5>
                  <div className="space-y-1">
                    <p className="text-sm">첫 번째 내용</p>
                    <Separator />
                    <p className="text-sm">두 번째 내용</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">보통 간격</h5>
                  <div className="space-y-4">
                    <p className="text-sm">첫 번째 내용</p>
                    <Separator />
                    <p className="text-sm">두 번째 내용</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">넓은 간격</h5>
                  <div className="space-y-8">
                    <p className="text-sm">첫 번째 내용</p>
                    <Separator />
                    <p className="text-sm">두 번째 내용</p>
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
                효과적인 Separator 사용을 위한 모범 사례입니다.
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
                    <li>• 의미적으로 구분되는 콘텐츠 사이에 사용</li>
                    <li>• 일관된 간격으로 시각적 리듬 유지</li>
                    <li>• 메뉴나 목록에서 그룹 구분에 활용</li>
                    <li>• 폼에서 섹션 구분에 적절히 사용</li>
                    <li>• 카드나 패널 내부 구조화에 활용</li>
                    <li>• 텍스트와 함께 사용할 때 적절한 대비 확보</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 과도한 구분선으로 인한 시각적 혼란</li>
                    <li>• 의미 없는 장식적 목적만의 사용</li>
                    <li>• 너무 굵거나 진한 색상의 구분선</li>
                    <li>• 접근성을 해치는 색상만으로 정보 전달</li>
                    <li>• 모바일에서 불필요한 수직 구분선</li>
                    <li>• 텍스트와 구분하기 어려운 스타일</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>언제 사용하나요?</CardTitle>
              <CardDescription>
                Separator와 다른 구분 방법을 언제 사용할지 결정하는 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Separator 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 폼 내 섹션 구분</li>
                    <li>• 메뉴 항목 그룹화</li>
                    <li>• 목록 항목 구분</li>
                    <li>• 사이드바 메뉴 구조화</li>
                    <li>• 카드 내부 콘텐츠 구분</li>
                    <li>• 설정 페이지 그룹 구분</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 고려</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>여백:</strong> 자연스러운 구분</li>
                    <li>• <strong>배경색:</strong> 영역 구분</li>
                    <li>• <strong>테두리:</strong> 완전한 경계</li>
                    <li>• <strong>타이포그래피:</strong> 계층 구조</li>
                    <li>• <strong>그리드:</strong> 레이아웃 구분</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 단순한 장식적 목적</li>
                    <li>• 텍스트 줄 간격 조정</li>
                    <li>• 페이지 레이아웃 구조</li>
                    <li>• 이미지나 미디어 경계</li>
                    <li>• 테이블 셀 구분</li>
                    <li>• 네비게이션 바 구분</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Separator를 올바르게 인식할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">장식적 요소 처리</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• decorative="true" 속성으로 스크린 리더에서 무시</li>
                    <li>• 순수하게 시각적 구분 목적으로 사용</li>
                    <li>• 대체 텍스트나 라벨 불필요</li>
                    <li>• 키보드 포커스 받지 않음</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">의미적 구분이 필요한 경우</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• decorative="false"로 설정</li>
                    <li>• aria-label이나 aria-labelledby 제공</li>
                    <li>• role="separator" 자동 적용</li>
                    <li>• 논리적 섹션 구분 의미 전달</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 확보 (3:1 이상)</li>
                    <li>• 색상만으로 구분 정보 전달 금지</li>
                    <li>• 고대비 모드에서도 잘 보이는 스타일</li>
                    <li>• 확대 시에도 선명한 표시</li>
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
                Separator 컴포넌트의 속성과 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">속성</h4>
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
                        <td className="p-2 font-mono">orientation</td>
                        <td className="p-2">"horizontal" | "vertical"</td>
                        <td className="p-2">"horizontal"</td>
                        <td className="p-2">구분선의 방향</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">decorative</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">true</td>
                        <td className="p-2">장식적 요소 여부 (접근성)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">className</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">추가 CSS 클래스</td>
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
                code={`import { Separator } from "./components/ui/separator";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 수평 구분선 (기본)
<Separator />

// 수직 구분선
<Separator orientation="vertical" />

// 사용자 정의 스타일
<Separator className="my-4" />
<Separator className="bg-red-200 h-0.5" />

// 높이나 너비 조정
<Separator orientation="vertical" className="h-8" />
<Separator className="w-1/2" />`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="의미적 구분선"
                code={`// 의미적 구분이 필요한 경우
<Separator 
  decorative={false} 
  aria-label="연락처 정보와 계정 설정 구분" 
/>

// 장식적 구분선 (기본)
<Separator decorative={true} />`}
                codeKey="semantic-usage"
              />

              <CodeBlock
                title="텍스트가 있는 구분선"
                code={`// 상대 위치 지정으로 텍스트 추가
<div className="relative">
  <Separator />
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="bg-background px-2 text-xs text-muted-foreground">
      또는
    </span>
  </div>
</div>

// 다른 라벨 예시
<div className="relative">
  <Separator />
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="bg-background px-3 text-sm font-medium">
      고급 설정
    </span>
  </div>
</div>`}
                codeKey="text-separator"
              />

              <CodeBlock
                title="메뉴에서 사용법"
                code={`// 드롭다운 메뉴에서 그룹 구분
<div className="py-1">
  <MenuItem>프로필</MenuItem>
  <MenuItem>설정</MenuItem>
  
  <Separator className="my-1" />
  
  <MenuItem>도움말</MenuItem>
  <MenuItem>정보</MenuItem>
  
  <Separator className="my-1" />
  
  <MenuItem className="text-destructive">로그아웃</MenuItem>
</div>`}
                codeKey="menu-usage"
              />

              <CodeBlock
                title="목록에서 사용법"
                code={`// 목록 항목 간 구분
<div>
  {items.map((item, index, array) => (
    <div key={item.id}>
      <div className="p-4">
        {/* 항목 내용 */}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      {index < array.length - 1 && <Separator />}
    </div>
  ))}
</div>`}
                codeKey="list-usage"
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