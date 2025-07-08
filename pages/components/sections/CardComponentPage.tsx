import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  MoreHorizontal, 
  Heart, 
  Share, 
  MessageCircle, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Clock, 
  Star,
  ShoppingCart,
  CreditCard,
  Settings,
  Bell,
  Eye,
  Download,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Target,
  Zap,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Copy,
  Check,
  Palette,
  Accessibility,
  Square
} from 'lucide-react';
import { useState } from 'react';

export function CardComponentPage() {
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
      title: '기본 카드',
      description: '가장 기본적인 카드 구조입니다. 헤더, 콘텐츠, 푸터로 구성됩니다.',
      component: (
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                카드에 대한 간단한 설명이 여기에 표시됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>주요 콘텐츠가 이 영역에 배치됩니다. 텍스트, 이미지, 기타 UI 요소들을 포함할 수 있습니다.</p>
            </CardContent>
            <CardFooter>
              <Button>액션 버튼</Button>
            </CardFooter>
          </Card>
        </div>
      ),
      code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      카드에 대한 간단한 설명이 여기에 표시됩니다.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>주요 콘텐츠가 이 영역에 배치됩니다.</p>
  </CardContent>
  <CardFooter>
    <Button>액션 버튼</Button>
  </CardFooter>
</Card>`
    },
    {
      title: '대시보드 카드',
      description: '메트릭, KPI, 대시보드 콘텐츠를 위한 카드입니다.',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">총 매출</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">₩45,231,890</div>
              <p className="text-xs text-muted-foreground">
                지난 달 대비 +20.1%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">활성 사용자</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">2,350</div>
              <p className="text-xs text-muted-foreground">
                이번 주 신규 사용자 +180명
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">완료율</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">94%</div>
              <Progress value={94} className="mt-2" />
            </CardContent>
          </Card>
        </div>
      ),
      code: `<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm">총 매출</CardTitle>
    <TrendingUp className="h-4 w-4 text-muted-foreground" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl">₩45,231,890</div>
    <p className="text-xs text-muted-foreground">
      지난 달 대비 +20.1%
    </p>
  </CardContent>
</Card>`
    }
  ];

  const features = [
    {
      title: '구조화된 레이아웃',
      description: 'Header, Content, Footer로 명확하게 구분된 구조',
      icon: '📋'
    },
    {
      title: '유연한 콘텐츠',
      description: '텍스트, 이미지, 폼, 차트 등 다양한 콘텐츠 지원',
      icon: '🎨'
    },
    {
      title: '반응형 디자인',
      description: '모든 화면 크기에 적응하는 반응형 레이아웃',
      icon: '📱'
    },
    {
      title: '접근성 내장',
      description: 'ARIA 속성과 키보드 네비게이션 자동 지원',
      icon: '♿'
    },
    {
      title: '테마 지원',
      description: '라이트/다크 테마 자동 전환',
      icon: '🌓'
    },
    {
      title: '쉬운 커스터마이징',
      description: 'Tailwind 클래스로 간편한 스타일 조정',
      icon: '⚙️'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Square className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Card</h1>
            <p className="text-muted-foreground">
              콘텐츠를 구조화된 형태로 표시하는 컨테이너 컴포넌트입니다. 헤더, 콘텐츠, 푸터 영역을 통해 정보를 명확하게 조직화하고 시각적으로 구분합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            8가지 예제
          </Badge>
          <Badge variant="outline">구조화</Badge>
          <Badge variant="outline">반응형</Badge>
          <Badge variant="outline">유연성</Badge>
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
              <CardTitle>카드 변형</CardTitle>
              <CardDescription>
                다양한 용도에 맞는 카드 스타일과 레이아웃입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">그림자 변형</h4>
                  <div className="space-y-3">
                    <Card className="shadow-none">
                      <CardContent className="p-4">
                        <p className="text-sm">그림자 없음</p>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                      <CardContent className="p-4">
                        <p className="text-sm">기본 그림자</p>
                      </CardContent>
                    </Card>
                    <Card className="shadow-lg">
                      <CardContent className="p-4">
                        <p className="text-sm">진한 그림자</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">테두리 변형</h4>
                  <div className="space-y-3">
                    <Card className="border-0">
                      <CardContent className="p-4">
                        <p className="text-sm">테두리 없음</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <p className="text-sm">두꺼운 테두리</p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <p className="text-sm">좌측 강조 테두리</p>
                      </CardContent>
                    </Card>
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
                효과적인 Card 사용을 위한 모범 사례입니다.
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
                    <li>• 관련된 정보를 논리적으로 그룹화</li>
                    <li>• 일관된 패딩과 간격 사용</li>
                    <li>• 명확한 제목과 설명 제공</li>
                    <li>• 적절한 액션 버튼 배치</li>
                    <li>• 접근성을 고려한 구조 설계</li>
                    <li>• 반응형 레이아웃 적용</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 정보를 한 카드에 배치</li>
                    <li>• 불필요한 중첩 카드 구조</li>
                    <li>• 일관성 없는 스타일링</li>
                    <li>• 모호한 액션 버튼</li>
                    <li>• 접근성을 해치는 색상 조합</li>
                    <li>• 과도한 애니메이션이나 효과</li>
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
                Card 컴포넌트들의 구조와 사용법입니다.
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
                        <td className="p-2 font-mono">Card</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CardHeader</td>
                        <td className="p-2">제목과 설명 영역</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CardTitle</td>
                        <td className="p-2">카드 제목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CardDescription</td>
                        <td className="p-2">카드 설명</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CardContent</td>
                        <td className="p-2">주요 콘텐츠 영역</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CardFooter</td>
                        <td className="p-2">액션 버튼 영역</td>
                        <td className="p-2">선택</td>
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>
      카드에 대한 설명입니다.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>주요 콘텐츠가 여기에 들어갑니다.</p>
  </CardContent>
  <CardFooter>
    <Button>액션 버튼</Button>
  </CardFooter>
</Card>`}
                codeKey="basic-usage"
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