import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
  Box,
  Check,
  Clipboard,
  Info,
  Accessibility,
  MonitorSpeaker,
  Play,
  MoreHorizontal,
  FileText,
  Image as ImageIcon,
  ShoppingCart
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Label } from '../ui/label';

export function SkeletonComponentPage() {
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
        <Clipboard className="h-3 w-3" />
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

  // Example components
  const BasicSkeletonExample = () => {
    return (
      <div className="space-y-4">
        <h4 className="text-sm font-medium">다양한 크기의 스켈레톤</h4>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    );
  };

  const CardSkeletonExample = () => {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-[200px] w-full rounded-md" />
          <div className="flex space-x-2">
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-20" />
          </div>
        </CardContent>
      </Card>
    );
  };

  const TableSkeletonExample = () => {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-8 w-[100px]" />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 border-b bg-muted/50">
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="p-4 border-b last:border-b-0">
              <div className="flex space-x-4">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[80px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ProductListSkeletonExample = () => {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="p-4 space-y-3">
              <Skeleton className="h-[180px] w-full rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-9 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const LoadingDemoExample = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    const handleReload = () => {
      setIsLoading(true);
      setShowContent(false);
      setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 2000);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">로딩 상태 시뮬레이션</h4>
          <Button variant="outline" size="sm" onClick={handleReload}>
            다시 로드
          </Button>
        </div>
        
        <Card className="w-[400px]">
          <CardContent className="p-6">
            {isLoading ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex space-x-2">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-20" />
                </div>
              </div>
            ) : showContent ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Jane Doe</h4>
                    <p className="text-sm text-muted-foreground">Product Designer</p>
                  </div>
                </div>
                <p className="text-sm">
                  사용자 경험을 개선하고 직관적인 인터페이스를 설계하는 것을 
                  전문으로 하는 디자이너입니다. 10년 이상의 경험을 바탕으로 
                  다양한 프로젝트를 성공적으로 이끌어왔습니다.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm">팔로우</Button>
                  <Button variant="outline" size="sm">메시지</Button>
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    );
  };

  const examples = [
    {
      title: '기본 스켈레톤',
      description: '텍스트 로딩을 위한 기본적인 스켈레톤 컴포넌트입니다.',
      component: <BasicSkeletonExample />,
      code: `import { Skeleton } from "./components/ui/skeleton"

export function BasicSkeletonExample() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  )
}`
    },
    {
      title: '카드 스켈레톤',
      description: '사용자 프로필 카드의 로딩 상태를 보여주는 스켈레톤입니다.',
      component: <CardSkeletonExample />,
      code: `import { Skeleton } from "./components/ui/skeleton"
import { Card, CardContent, CardHeader } from "./components/ui/card"

export function CardSkeletonExample() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-[200px] w-full rounded-md" />
        <div className="flex space-x-2">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-20" />
        </div>
      </CardContent>
    </Card>
  )
}`
    },
    {
      title: '테이블 스켈레톤',
      description: '데이터 테이블의 로딩 상태를 표시하는 스켈레톤입니다.',
      component: <TableSkeletonExample />,
      code: `import { Skeleton } from "./components/ui/skeleton"

export function TableSkeletonExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-8 w-[100px]" />
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div className="p-4 border-b bg-muted/50">
          <div className="flex space-x-4">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[80px]" />
          </div>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="p-4 border-b last:border-b-0">
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}`
    },
    {
      title: '상품 목록 스켈레톤',
      description: '상품 그리드의 로딩 상태를 보여주는 스켈레톤입니다.',
      component: <ProductListSkeletonExample />,
      code: `import { Skeleton } from "./components/ui/skeleton"
import { Card, CardContent } from "./components/ui/card"

export function ProductListSkeletonExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index}>
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-[180px] w-full rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-9 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}`
    },
    {
      title: '로딩 상태 데모',
      description: '실제 로딩에서 콘텐츠로 전환되는 과정을 시뮬레이션합니다.',
      component: <LoadingDemoExample />,
      code: `import { Skeleton } from "./components/ui/skeleton"
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { useState, useEffect } from "react"

export function LoadingDemoExample() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowContent(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="w-[400px]">
      <CardContent className="p-6">
        {isLoading ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex space-x-2">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-20" />
            </div>
          </div>
        ) : showContent ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Jane Doe</h4>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
            </div>
            <p className="text-sm">
              사용자 경험을 개선하고 직관적인 인터페이스를 설계하는 것을 
              전문으로 하는 디자이너입니다.
            </p>
            <div className="flex space-x-2">
              <Button size="sm">팔로우</Button>
              <Button variant="outline" size="sm">메시지</Button>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}`
    }
  ];

  const shapes = [
    {
      name: '직사각형',
      description: '텍스트나 버튼 요소에 적합',
      component: <Skeleton className="h-4 w-32" />,
      className: 'h-4 w-32'
    },
    {
      name: '정사각형',
      description: '아이콘이나 작은 이미지에 적합',
      component: <Skeleton className="h-12 w-12" />,
      className: 'h-12 w-12'
    },
    {
      name: '원형',
      description: '프로필 이미지나 아바타에 적합',
      component: <Skeleton className="h-12 w-12 rounded-full" />,
      className: 'h-12 w-12 rounded-full'
    },
    {
      name: '긴 직사각형',
      description: '제목이나 긴 텍스트에 적합',
      component: <Skeleton className="h-6 w-64" />,
      className: 'h-6 w-64'
    },
    {
      name: '이미지 형태',
      description: '큰 이미지나 미디어에 적합',
      component: <Skeleton className="h-48 w-64 rounded-lg" />,
      className: 'h-48 w-64 rounded-lg'
    }
  ];

  const features = [
    {
      title: '부드러운 애니메이션',
      description: 'pulse 애니메이션으로 자연스러운 로딩 효과를 제공합니다.',
      icon: '✨'
    },
    {
      title: '유연한 크기 조정',
      description: '다양한 크기와 모양으로 모든 콘텐츠 타입에 맞게 조정할 수 있습니다.',
      icon: '📏'
    },
    {
      title: '접근성 친화적',
      description: '스크린 리더 사용자를 고려한 적절한 ARIA 속성을 제공합니다.',
      icon: '♿'
    },
    {
      title: '성능 최적화',
      description: '가벼운 구현으로 성능에 미치는 영향을 최소화합니다.',
      icon: '⚡'
    },
    {
      title: '테마 지원',
      description: '라이트/다크 테마에 자동으로 적응합니다.',
      icon: '🎨'
    },
    {
      title: '쉬운 사용법',
      description: '간단한 클래스 조합으로 원하는 모양을 쉽게 구현할 수 있습니다.',
      icon: '🎯'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Box className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Skeleton</h1>
            <p className="text-muted-foreground">
              콘텐츠가 로딩되는 동안 표시되는 플레이스홀더 컴포넌트입니다. 
              사용자에게 로딩 상태를 시각적으로 알려주어 더 나은 사용자 경험을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Box className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">로딩 상태</Badge>
          <Badge variant="outline">플레이스홀더</Badge>
          <Badge variant="outline">애니메이션</Badge>
          <Badge variant="outline">사용자 경험</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="shapes">형태</TabsTrigger>
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
                <div className="p-8 border rounded-lg bg-background min-h-[120px] flex items-center justify-center">
                  {example.component}
                </div>
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Shapes Tab */}
        <TabsContent value="shapes" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>다양한 형태</CardTitle>
              <CardDescription>
                Skeleton 컴포넌트로 만들 수 있는 다양한 형태들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {shapes.map((shape, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium">{shape.name}</h5>
                      <code className="text-xs bg-muted px-2 py-1 rounded">{shape.className}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{shape.description}</p>
                    <div className="flex items-center justify-center h-20 bg-muted/30 rounded border-2 border-dashed border-muted-foreground/25">
                      {shape.component}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>크기 가이드</CardTitle>
              <CardDescription>
                콘텐츠 타입별 권장 크기입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3 text-sm">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">텍스트 요소</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>제목 (h1-h3)</span>
                        <code>h-6 to h-8</code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>본문 텍스트</span>
                        <code>h-4</code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>작은 텍스트</span>
                        <code>h-3</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">UI 요소</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>버튼</span>
                        <code>h-9 to h-10</code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>입력 필드</span>
                        <code>h-9</code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>아바타</span>
                        <code>h-8 w-8</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">미디어 요소</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>썸네일</span>
                        <code>h-20 w-20</code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>배너 이미지</span>
                        <code>h-48</code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>아이콘</span>
                        <code>h-4 w-4</code>
                      </div>
                    </div>
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
                Skeleton 컴포넌트를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 데이터 로딩 중</li>
                      <li>• 이미지 로딩 대기</li>
                      <li>• API 응답 대기</li>
                      <li>• 페이지 초기 로딩</li>
                      <li>• 무한 스크롤 로딩</li>
                      <li>• 검색 결과 로딩</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 실제 콘텐츠와 유사한 크기</li>
                      <li>• 적절한 로딩시간</li>
                      <li>• 반응형 디자인 고려</li>
                      <li>• 접근성 고려사항</li>
                      <li>• 애니메이션 성능</li>
                      <li>• 다크 테마 호환성</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 즉시 로드되는 콘텐츠</li>
                      <li>• 너무 긴 로딩 시간</li>
                      <li>• 과도한 스켈레톤 수</li>
                      <li>• 부정확한 크기 예측</li>
                      <li>• 불필요한 애니메이션</li>
                      <li>• 접근성 무시</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">접근성</h4>
                <div className="space-y-4">
                  <h5 className="font-medium flex items-center gap-2">
                    <Accessibility className="w-4 h-4" />
                    스크린 리더 지원
                  </h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>aria-label:</strong> "콘텐츠 로딩 중" 등의 적절한 설명</li>
                    <li>• <strong>aria-busy:</strong> 로딩 상태를 명시적으로 표시</li>
                    <li>• <strong>aria-live:</strong> 콘텐츠 로딩 완료 시 알림</li>
                    <li>• <strong>role="status":</strong> 상태 변경을 스크린 리더에 알림</li>
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
              <CardTitle>설치 및 가져오기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="컴포넌트 가져오기"
                code={`import { Skeleton } from "./components/ui/skeleton"`}
                codeKey="import"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기본 사용법</CardTitle>
              <CardDescription>
                Skeleton 컴포넌트의 기본적인 사용 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="기본 구조"
                code={`// 기본 직사각형 스켈레톤
<Skeleton className="h-4 w-[250px]" />

// 원형 스켈레톤 (아바타용)
<Skeleton className="h-12 w-12 rounded-full" />

// 이미지 스켈레톤
<Skeleton className="h-[200px] w-full rounded-md" />`}
                codeKey="basic"
              />

              <CodeBlock
                title="조건부 렌더링"
                code={`function UserProfile({ isLoading, user }) {
  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{user.initials}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-medium">{user.name}</h4>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
    </div>
  )
}`}
                codeKey="conditional"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API 레퍼런스</CardTitle>
              <CardDescription>
                Skeleton 컴포넌트의 주요 속성들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Props</h5>
                  <div className="text-sm space-y-1">
                    <div><code>className?: string</code> - 추가 CSS 클래스</div>
                    <div><code>...props</code> - 기본 div 요소의 모든 속성</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">권장 클래스 조합</h5>
                  <div className="text-sm space-y-1">
                    <div><code>h-{"{size}"}</code> - 높이 설정</div>
                    <div><code>w-{"{size}"}</code> - 너비 설정</div>
                    <div><code>rounded-{"{size}"}</code> - 둥근 모서리</div>
                    <div><code>rounded-full</code> - 원형 (아바타용)</div>
                    <div><code>animate-pulse</code> - 기본 애니메이션 (자동 적용됨)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="w-5 h-5" />
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