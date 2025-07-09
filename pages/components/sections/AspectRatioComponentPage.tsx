import React, { useState } from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  Layout,
  Copy,
  Check,
  CheckCircle,
  AlertTriangle,
  Info,
  Maximize,
  Image,
  Video,
  Monitor,
  Smartphone,
  Tablet,
  RectangleHorizontal,
  RectangleVertical,
  Square,
  Frame,
  Camera,
  Film,
  PlayCircle,
  FileImage,
  FileVideo,
  Images,
  Presentation,
  BookOpen,
  Map,
  CreditCard,
  Calendar,
  Clock,
  Globe,
  Target,
  Eye,
  Crop,
  Palette,
  Grid,
  Layers,
  Box,
  Package
} from 'lucide-react';

export function AspectRatioComponentPage() {
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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Layout className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Aspect Ratio</h1>
            <p className="text-muted-foreground">
              요소의 가로세로 비율을 일정하게 유지하는 컨테이너 컴포넌트입니다. 반응형 디자인에서 이미지, 비디오, 콘텐츠의 비율을 제어할 때 사용합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Layout className="w-3 h-3" />
            레이아웃
          </Badge>
          <Badge variant="outline">비율 제어</Badge>
          <Badge variant="outline">반응형</Badge>
          <Badge variant="outline">컨테이너</Badge>
          <Badge variant="outline">미디어</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="patterns">패턴</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          {/* Basic Aspect Ratios */}
          <Card>
            <CardHeader>
              <CardTitle>기본 가로세로 비율</CardTitle>
              <CardDescription>
                일반적으로 사용되는 다양한 가로세로 비율 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h4 className="font-medium">표준 비율</h4>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">1:1 (정사각형)</h5>
                    <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center space-y-2">
                          <Square className="w-8 h-8 mx-auto text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">1:1</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">4:3 (클래식)</h5>
                    <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center space-y-2">
                          <Monitor className="w-8 h-8 mx-auto text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">4:3</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">16:9 (와이드)</h5>
                    <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center space-y-2">
                          <RectangleHorizontal className="w-8 h-8 mx-auto text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">16:9</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">3:2 (사진)</h5>
                    <AspectRatio ratio={3/2} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center space-y-2">
                          <Camera className="w-8 h-8 mx-auto text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">3:2</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">21:9 (시네마)</h5>
                    <AspectRatio ratio={21/9} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center space-y-2">
                          <Film className="w-8 h-8 mx-auto text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">21:9</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">9:16 (세로형)</h5>
                    <AspectRatio ratio={9/16} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center space-y-2">
                          <Smartphone className="w-8 h-8 mx-auto text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">9:16</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 다양한 가로세로 비율
// 정사각형 (1:1)
<AspectRatio ratio={1}>
  <div className="w-full h-full bg-muted rounded-lg" />
</AspectRatio>

// 클래식 (4:3)
<AspectRatio ratio={4/3}>
  <div className="w-full h-full bg-muted rounded-lg" />
</AspectRatio>

// 와이드스크린 (16:9)
<AspectRatio ratio={16/9}>
  <div className="w-full h-full bg-muted rounded-lg" />
</AspectRatio>

// 사진 비율 (3:2)
<AspectRatio ratio={3/2}>
  <div className="w-full h-full bg-muted rounded-lg" />
</AspectRatio>

// 시네마 (21:9)
<AspectRatio ratio={21/9}>
  <div className="w-full h-full bg-muted rounded-lg" />
</AspectRatio>

// 세로형 모바일 (9:16)
<AspectRatio ratio={9/16}>
  <div className="w-full h-full bg-muted rounded-lg" />
</AspectRatio>`}
                codeKey="basic-ratios"
              />
            </CardContent>
          </Card>

          {/* Image Examples */}
          <Card>
            <CardHeader>
              <CardTitle>이미지와 미디어</CardTitle>
              <CardDescription>
                이미지, 비디오 등 미디어 콘텐츠에 가로세로 비율을 적용한 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h4 className="font-medium">이미지 갤러리</h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <Image className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400" />
                          <p className="text-sm font-medium">풍경 사진</p>
                          <p className="text-xs text-muted-foreground">1:1 정사각형</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-2">
                    <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <Images className="w-12 h-12 mx-auto text-green-600 dark:text-green-400" />
                          <p className="text-sm font-medium">제품 사진</p>
                          <p className="text-xs text-muted-foreground">4:3 클래식</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-2">
                    <AspectRatio ratio={3/2} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <Camera className="w-12 h-12 mx-auto text-purple-600 dark:text-purple-400" />
                          <p className="text-sm font-medium">포트레이트</p>
                          <p className="text-xs text-muted-foreground">3:2 사진</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">비디오 플레이어</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">YouTube 스타일 (16:9)</h5>
                    <AspectRatio ratio={16/9} className="bg-black rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                        <div className="text-center space-y-3">
                          <PlayCircle className="w-16 h-16 mx-auto text-white/80" />
                          <div className="text-white">
                            <p className="font-medium">비디오 제목</p>
                            <p className="text-sm text-white/60">16:9 와이드스크린</p>
                          </div>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">세로형 비디오 (9:16)</h5>
                    <div className="max-w-xs mx-auto">
                      <AspectRatio ratio={9/16} className="bg-black rounded-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-900 to-pink-900">
                          <div className="text-center space-y-3">
                            <Video className="w-12 h-12 mx-auto text-white/80" />
                            <div className="text-white">
                              <p className="font-medium">Short 비디오</p>
                              <p className="text-sm text-white/60">9:16 세로형</p>
                            </div>
                          </div>
                        </div>
                      </AspectRatio>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">카드 레이아웃</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9} className="bg-muted">
                        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900 dark:to-red-800 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <Presentation className="w-10 h-10 mx-auto text-orange-600 dark:text-orange-400" />
                            <p className="font-medium">프레젠테이션</p>
                          </div>
                        </div>
                      </AspectRatio>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">컨퍼런스 발표</h3>
                        <p className="text-sm text-muted-foreground">
                          새로운 제품 런칭에 대한 프레젠테이션 자료입니다.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <AspectRatio ratio={1} className="bg-muted">
                        <div className="w-full h-full bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-900 dark:to-cyan-800 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <BookOpen className="w-10 h-10 mx-auto text-teal-600 dark:text-teal-400" />
                            <p className="font-medium">아티클</p>
                          </div>
                        </div>
                      </AspectRatio>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">디자인 가이드</h3>
                        <p className="text-sm text-muted-foreground">
                          효과적인 UI/UX 디자인을 위한 가이드라인입니다.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <CodeBlock
                code={`// 이미지를 포함한 카드
<Card>
  <CardContent className="p-0">
    <AspectRatio ratio={16/9} className="bg-muted">
      <img 
        src="/image.jpg" 
        alt="설명"
        className="w-full h-full object-cover"
      />
    </AspectRatio>
    <div className="p-4">
      <h3 className="font-medium mb-2">카드 제목</h3>
      <p className="text-sm text-muted-foreground">
        카드 설명 내용입니다.
      </p>
    </div>
  </CardContent>
</Card>

// 비디오 플레이어
<AspectRatio ratio={16/9} className="bg-black rounded-lg overflow-hidden">
  <video 
    src="/video.mp4" 
    controls
    className="w-full h-full"
  />
</AspectRatio>

// 갤러리 그리드
<div className="grid gap-4 md:grid-cols-3">
  {images.map((image, index) => (
    <AspectRatio key={index} ratio={1}>
      <img 
        src={image.src} 
        alt={image.alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </AspectRatio>
  ))}
</div>`}
                codeKey="media-examples"
              />
            </CardContent>
          </Card>

          {/* Advanced Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>고급 사용 사례</CardTitle>
              <CardDescription>
                복잡한 레이아웃과 특별한 용도의 가로세로 비율 활용 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h4 className="font-medium">제품 카탈로그</h4>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "스마트폰", color: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800", icon: Smartphone },
                    { name: "태블릿", color: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800", icon: Tablet },
                    { name: "노트북", color: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800", icon: Monitor },
                    { name: "카메라", color: "from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800", icon: Camera }
                  ].map((item, index) => (
                    <div key={index} className="space-y-3">
                      <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                        <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          <item.icon className="w-12 h-12 text-current opacity-60" />
                        </div>
                      </AspectRatio>
                      <div className="text-center">
                        <h5 className="font-medium">{item.name}</h5>
                        <p className="text-sm text-muted-foreground">최신 모델</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">대시보드 위젯</h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-0">
                      <AspectRatio ratio={4/3} className="bg-muted">
                        <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900 dark:to-teal-800 p-6 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <Target className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">94%</span>
                          </div>
                          <div>
                            <h4 className="font-medium">목표 달성률</h4>
                            <p className="text-sm text-muted-foreground">이번 달 진행률</p>
                          </div>
                        </div>
                      </AspectRatio>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <AspectRatio ratio={4/3} className="bg-muted">
                        <div className="w-full h-full bg-gradient-to-br from-violet-100 to-purple-200 dark:from-violet-900 dark:to-purple-800 p-6 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <Eye className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                            <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">12.3K</span>
                          </div>
                          <div>
                            <h4 className="font-medium">페이지 뷰</h4>
                            <p className="text-sm text-muted-foreground">오늘 방문자 수</p>
                          </div>
                        </div>
                      </AspectRatio>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-0">
                      <AspectRatio ratio={4/3} className="bg-muted">
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-yellow-200 dark:from-amber-900 dark:to-yellow-800 p-6 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                            <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">2.5</span>
                          </div>
                          <div>
                            <h4 className="font-medium">평균 세션</h4>
                            <p className="text-sm text-muted-foreground">분 단위</p>
                          </div>
                        </div>
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">소셜 미디어 포스트</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Instagram 포스트 (1:1)</h5>
                    <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-900 dark:to-rose-800 p-6 flex flex-col justify-between">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                            <Camera className="w-4 h-4" />
                          </div>
                          <span className="font-medium">@username</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <Package className="w-16 h-16 mx-auto text-pink-600 dark:text-pink-400" />
                            <p className="font-medium">제품 소개</p>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">2시간 전</div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Twitter 카드 (2:1)</h5>
                    <AspectRatio ratio={2} className="bg-muted rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 p-6 flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium mb-2">뉴스 헤드라인</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            중요한 업데이트 소식을 확인하세요.
                          </p>
                          <div className="text-xs text-muted-foreground">news.example.com</div>
                        </div>
                        <div className="ml-4">
                          <Globe className="w-16 h-16 text-sky-600 dark:text-sky-400" />
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 제품 카탈로그 그리드
<div className="grid gap-6 md:grid-cols-4">
  {products.map((product) => (
    <div key={product.id} className="space-y-3">
      <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="text-center">
        <h5 className="font-medium">{product.name}</h5>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>
    </div>
  ))}
</div>

// 대시보드 위젯
<Card>
  <CardContent className="p-0">
    <AspectRatio ratio={4/3} className="bg-muted">
      <div className="w-full h-full p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <Target className="w-8 h-8" />
          <span className="text-2xl font-bold">94%</span>
        </div>
        <div>
          <h4 className="font-medium">목표 달성률</h4>
          <p className="text-sm text-muted-foreground">이번 달 진행률</p>
        </div>
      </div>
    </AspectRatio>
  </CardContent>
</Card>

// 소셜 미디어 포스트
<AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
  <div className="w-full h-full p-6 flex flex-col justify-between">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-white rounded-full" />
      <span className="font-medium">@username</span>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h3 className="font-medium">포스트 내용</h3>
      </div>
    </div>
    <div className="text-xs text-muted-foreground">2시간 전</div>
  </div>
</AspectRatio>`}
                codeKey="advanced-examples"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>가로세로 비율 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 Aspect Ratio 사용을 위한 디자인 패턴과 모범 사례입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장 패턴
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <AspectRatio ratio={16/9} className="bg-muted/50 rounded">
                          <div className="w-full h-full flex items-center justify-center">
                            <Video className="w-6 h-6 text-muted-foreground" />
                          </div>
                        </AspectRatio>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 일관된 비율로 콘텐츠 정렬</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <div className="grid gap-2 grid-cols-3">
                          <AspectRatio ratio={1} className="bg-muted/50 rounded">
                            <div className="w-full h-full flex items-center justify-center">
                              <Image className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </AspectRatio>
                          <AspectRatio ratio={1} className="bg-muted/50 rounded">
                            <div className="w-full h-full flex items-center justify-center">
                              <Image className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </AspectRatio>
                          <AspectRatio ratio={1} className="bg-muted/50 rounded">
                            <div className="w-full h-full flex items-center justify-center">
                              <Image className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </AspectRatio>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 그리드에서 균일한 비율 유지</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 패턴
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <div className="grid gap-2 grid-cols-3">
                          <AspectRatio ratio={1} className="bg-muted/50 rounded">
                            <div className="w-full h-full flex items-center justify-center">
                              <Image className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </AspectRatio>
                          <AspectRatio ratio={4/3} className="bg-muted/50 rounded">
                            <div className="w-full h-full flex items-center justify-center">
                              <Image className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </AspectRatio>
                          <AspectRatio ratio={16/9} className="bg-muted/50 rounded">
                            <div className="w-full h-full flex items-center justify-center">
                              <Image className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </AspectRatio>
                        </div>
                      </div>
                      <p className="text-xs text-red-600">✗ 같은 그리드에서 다른 비율 혼용</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>콘텐츠 유형별 권장 비율</CardTitle>
              <CardDescription>
                다양한 콘텐츠 유형에 적합한 가로세로 비율 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">이미지 콘텐츠</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4" />
                        <span className="text-sm">프로필 사진</span>
                      </div>
                      <Badge variant="outline">1:1</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <Image className="w-4 h-4" />
                        <span className="text-sm">제품 이미지</span>
                      </div>
                      <Badge variant="outline">4:3</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <Images className="w-4 h-4" />
                        <span className="text-sm">배너 이미지</span>
                      </div>
                      <Badge variant="outline">16:9</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        <span className="text-sm">카드 이미지</span>
                      </div>
                      <Badge variant="outline">3:2</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">비디오 콘텐츠</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        <span className="text-sm">데스크톱 비디오</span>
                      </div>
                      <Badge variant="outline">16:9</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <span className="text-sm">모바일 비디오</span>
                      </div>
                      <Badge variant="outline">9:16</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <Film className="w-4 h-4" />
                        <span className="text-sm">시네마 비디오</span>
                      </div>
                      <Badge variant="outline">21:9</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        <span className="text-sm">라이브 스트림</span>
                      </div>
                      <Badge variant="outline">16:9</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>플랫폼별 권장 비율</CardTitle>
              <CardDescription>
                주요 플랫폼과 디바이스에 최적화된 가로세로 비율입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">소셜 미디어</h4>
                  <div className="space-y-2">
                    <div className="p-2 border rounded text-sm">
                      <strong>Instagram:</strong> 1:1, 4:5
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>Facebook:</strong> 16:9, 1:1
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>Twitter:</strong> 16:9, 2:1
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>YouTube:</strong> 16:9
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>TikTok:</strong> 9:16
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">디바이스</h4>
                  <div className="space-y-2">
                    <div className="p-2 border rounded text-sm">
                      <strong>데스크톱:</strong> 16:9, 16:10
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>노트북:</strong> 16:9, 3:2
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>태블릿:</strong> 4:3, 3:2
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>스마트폰:</strong> 19:9, 18:9
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>TV:</strong> 16:9, 21:9
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">인쇄물</h4>
                  <div className="space-y-2">
                    <div className="p-2 border rounded text-sm">
                      <strong>A4:</strong> 1:1.414
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>명함:</strong> 1.75:1
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>포스터:</strong> 2:3, 3:4
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>브로셔:</strong> 8.5:11
                    </div>
                    <div className="p-2 border rounded text-sm">
                      <strong>배너:</strong> 3:1, 4:1
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
                효과적인 Aspect Ratio 사용을 위한 모범 사례
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
                    <li>• 콘텐츠 유형에 맞는 표준 비율 사용</li>
                    <li>• 같은 그리드에서 일관된 비율 유지</li>
                    <li>• 플랫폼별 최적화된 비율 적용</li>
                    <li>• 반응형 환경에서 비율 일관성 보장</li>
                    <li>• 미디어 콘텐츠의 왜곡 방지</li>
                    <li>• 로딩 중에도 레이아웃 안정성 유지</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 같은 컨텍스트에서 다른 비율 혼용</li>
                    <li>• 극단적인 비율 (너무 넓거나 좁은)</li>
                    <li>• 콘텐츠 특성과 맞지 않는 비율</li>
                    <li>• 이미지 왜곡을 일으키는 강제 비율</li>
                    <li>• 접근성을 고려하지 않은 비율</li>
                    <li>• 플랫폼 표준을 무시한 임의 비율</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 콘텐츠를 효과적으로 인식할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 콘텐츠가 잘릴 경우 대체 텍스트 제공</li>
                    <li>• 중요한 정보는 이미지 외부에도 표시</li>
                    <li>• 충분한 대비와 가독성 확보</li>
                    <li>• 확대 시에도 비율과 레이아웃 유지</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">모바일 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 세로 화면에서도 콘텐츠 가독성 보장</li>
                    <li>• 터치 영역 최소 44px × 44px 확보</li>
                    <li>• 스크롤 없이 핵심 내용 파악 가능</li>
                    <li>• 다양한 화면 크기에서 테스트</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">성능 고려사항</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 이미지 로딩 중 레이아웃 시프트 방지</li>
                    <li>• 적절한 이미지 해상도 사용</li>
                    <li>• lazy loading과 함께 사용 시 주의</li>
                    <li>• CSS aspect-ratio 속성 활용 고려</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>언제 사용하나요?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Aspect Ratio 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 이미지 갤러리</li>
                    <li>• 비디오 플레이어</li>
                    <li>• 제품 카탈로그</li>
                    <li>• 카드 레이아웃</li>
                    <li>• 소셜 미디어 포스트</li>
                    <li>• 대시보드 위젯</li>
                    <li>• 광고 배너</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 방법</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>고정 높이:</strong> 단순한 컨테이너</li>
                    <li>• <strong>자동 높이:</strong> 텍스트 콘텐츠</li>
                    <li>• <strong>Grid:</strong> 복잡한 레이아웃</li>
                    <li>• <strong>Flexbox:</strong> 동적 크기</li>
                    <li>• <strong>Container queries:</strong> 반응형</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 텍스트 위주 콘텐츠</li>
                    <li>• 가변 높이가 필요한 경우</li>
                    <li>• 복잡한 폼 레이아웃</li>
                    <li>• 스크롤 가능한 콘텐츠</li>
                    <li>• 인터랙티브 요소가 많은 경우</li>
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
                Aspect Ratio 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">AspectRatio 속성</h4>
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
                        <td className="p-2 font-mono">ratio</td>
                        <td className="p-2">number</td>
                        <td className="p-2">1</td>
                        <td className="p-2">가로세로 비율 (width/height)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">asChild</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">자식 요소로 렌더링</td>
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
                code={`import { AspectRatio } from "./components/ui/aspect-ratio"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 정사각형 (1:1)
<AspectRatio ratio={1}>
  <img 
    src="/image.jpg" 
    alt="설명"
    className="w-full h-full object-cover rounded-lg"
  />
</AspectRatio>

// 와이드스크린 (16:9)
<AspectRatio ratio={16/9}>
  <div className="w-full h-full bg-muted rounded-lg" />
</AspectRatio>

// 사진 비율 (3:2)
<AspectRatio ratio={3/2}>
  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
</AspectRatio>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="이미지와 함께 사용"
                code={`// 반응형 이미지
<AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
  <img
    src="/hero-image.jpg"
    alt="히어로 이미지"
    className="w-full h-full object-cover"
  />
</AspectRatio>

// 비디오 플레이어
<AspectRatio ratio={16/9} className="bg-black rounded-lg overflow-hidden">
  <video 
    src="/video.mp4" 
    controls
    className="w-full h-full"
    poster="/video-poster.jpg"
  />
</AspectRatio>

// 배경 이미지
<AspectRatio ratio={21/9} className="bg-muted rounded-lg overflow-hidden">
  <div 
    className="w-full h-full bg-cover bg-center"
    style={{ backgroundImage: 'url(/banner.jpg)' }}
  >
    <div className="w-full h-full bg-black/40 flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">배너 제목</h2>
    </div>
  </div>
</AspectRatio>`}
                codeKey="image-usage"
              />

              <CodeBlock
                title="갤러리 그리드"
                code={`// 이미지 갤러리
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {images.map((image, index) => (
    <AspectRatio key={index} ratio={1} className="bg-muted rounded-lg overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform"
      />
    </AspectRatio>
  ))}
</div>

// 제품 카탈로그
<div className="grid gap-6 md:grid-cols-4">
  {products.map((product) => (
    <div key={product.id} className="space-y-3">
      <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="text-center">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.price}</p>
      </div>
    </div>
  ))}
</div>`}
                codeKey="gallery-grid"
              />

              <CodeBlock
                title="카드 레이아웃"
                code={`// 이미지가 포함된 카드
<Card className="overflow-hidden">
  <AspectRatio ratio={16/9} className="bg-muted">
    <img
      src="/card-image.jpg"
      alt="카드 이미지"
      className="w-full h-full object-cover"
    />
  </AspectRatio>
  <CardContent className="p-4">
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>
      카드 설명 내용입니다.
    </CardDescription>
  </CardContent>
</Card>

// 대시보드 위젯
<Card>
  <CardContent className="p-0">
    <AspectRatio ratio={4/3} className="bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="w-full h-full p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <Target className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">94%</span>
        </div>
        <div>
          <h4 className="font-medium">목표 달성률</h4>
          <p className="text-sm text-muted-foreground">이번 달 진행률</p>
        </div>
      </div>
    </AspectRatio>
  </CardContent>
</Card>`}
                codeKey="card-layout"
              />

              <CodeBlock
                title="반응형 구현"
                code={`// 반응형 비율 (데스크톱 16:9, 모바일 1:1)
<AspectRatio 
  ratio={16/9} 
  className="md:aspect-ratio-16/9 aspect-ratio-1 bg-muted rounded-lg"
>
  <img
    src="/responsive-image.jpg"
    alt="반응형 이미지"
    className="w-full h-full object-cover"
  />
</AspectRatio>

// 컨테이너 쿼리와 함께
<div className="@container">
  <AspectRatio 
    ratio={16/9}
    className="@md:aspect-ratio-21/9 bg-muted rounded-lg"
  >
    <div className="w-full h-full flex items-center justify-center">
      <h3>반응형 콘텐츠</h3>
    </div>
  </AspectRatio>
</div>

// 중첩된 비율 컨테이너
<div className="max-w-md mx-auto">
  <AspectRatio ratio={9/16} className="bg-muted rounded-lg overflow-hidden">
    <div className="w-full h-full p-4 flex flex-col">
      <div className="flex-1">
        <AspectRatio ratio={1} className="bg-white rounded">
          <img 
            src="/profile.jpg" 
            alt="프로필"
            className="w-full h-full object-cover rounded"
          />
        </AspectRatio>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-medium">사용자 이름</h3>
        <p className="text-sm text-muted-foreground">프로필 설명</p>
      </div>
    </div>
  </AspectRatio>
</div>`}
                codeKey="responsive-implementation"
              />

              <CodeBlock
                title="성능 최적화"
                code={`// 이미지 로딩 최적화
<AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
  <img
    src="/image.jpg"
    alt="설명"
    className="w-full h-full object-cover"
    loading="lazy"
    decoding="async"
    onLoad={() => setImageLoaded(true)}
    onError={() => setImageError(true)}
  />
  {!imageLoaded && (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
    </div>
  )}
</AspectRatio>

// CSS aspect-ratio와 함께 사용
<div 
  className="aspect-[16/9] bg-muted rounded-lg overflow-hidden"
  style={{ aspectRatio: '16/9' }}
>
  <img
    src="/image.jpg"
    alt="설명"
    className="w-full h-full object-cover"
  />
</div>

// Intersection Observer로 지연 로딩
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

<AspectRatio 
  ref={ref}
  ratio={16/9} 
  className="bg-muted rounded-lg overflow-hidden"
>
  {inView && (
    <img
      src="/image.jpg"
      alt="설명"
      className="w-full h-full object-cover"
    />
  )}
</AspectRatio>`}
                codeKey="performance-optimization"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}