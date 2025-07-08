import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  RotateCcw,
  Copy,
  Check,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowLeft,
  ArrowRight,
  Image,
  Video,
  Star,
  ShoppingBag,
  Users,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Share2,
  Bookmark,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  Zap,
  TrendingUp,
  Award,
  Camera,
  Smartphone,
  Laptop,
  Headphones,
  Music,
  Film,
  Coffee,
  Gamepad2,
  BookOpen,
  Gift,
  Sparkles,
  Crown,
  ChevronDown,
  Dot,
  Monitor
} from 'lucide-react';

export function CarouselComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
            <RotateCcw className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Carousel</h1>
            <p className="text-muted-foreground">
              여러 아이템을 수평 또는 수직으로 슬라이드하여 표시하는 캐러셀 컴포넌트입니다. 이미지 갤러리, 제품 쇼케이스, 콘텐츠 슬라이더에 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <RotateCcw className="w-3 h-3" />
            네비게이션
          </Badge>
          <Badge variant="outline">슬라이더</Badge>
          <Badge variant="outline">이미지 갤러리</Badge>
          <Badge variant="outline">쇼케이스</Badge>
          <Badge variant="outline">멀티미디어</Badge>
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
          {/* Basic Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>기본 캐러셀</CardTitle>
              <CardDescription>
                기본적인 가로 스크롤 캐러셀입니다. 화살표 버튼이나 키보드로 탐색할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="w-full max-w-xs mx-auto">
                <Carousel setApi={setApi} className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Slide {current} of {count}
                </div>
              </div>

              <CodeBlock
                code={`import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"

// 기본 캐러셀
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="basic-carousel"
              />
            </CardContent>
          </Card>

          {/* Multiple Items Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>멀티 아이템 캐러셀</CardTitle>
              <CardDescription>
                한 번에 여러 아이템을 표시하는 캐러셀입니다. 반응형으로 디바이스별 표시 개수가 조정됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-center space-y-2">
                              <div className="text-2xl font-semibold">{index + 1}</div>
                              <div className="text-sm text-muted-foreground">아이템</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <CodeBlock
                code={`// 멀티 아이템 캐러셀 (반응형)
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  <CarouselContent className="-ml-2 md:-ml-4">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="p-6">
              {/* 콘텐츠 */}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="multi-item-carousel"
              />
            </CardContent>
          </Card>

          {/* Product Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>제품 쇼케이스 캐러셀</CardTitle>
              <CardDescription>
                제품이나 서비스를 소개하는데 적합한 캐러셀입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {[
                    { name: "스마트폰", icon: Smartphone, color: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800", price: "₩899,000" },
                    { name: "노트북", icon: Laptop, color: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800", price: "₩1,299,000" },
                    { name: "헤드폰", icon: Headphones, color: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800", price: "₩299,000" },
                    { name: "카메라", icon: Camera, color: "from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800", price: "₩1,599,000" },
                    { name: "게임 패드", icon: Gamepad2, color: "from-red-100 to-red-200 dark:from-red-900 dark:to-red-800", price: "₩89,000" }
                  ].map((product, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                              <product.icon className="w-16 h-16 text-current opacity-60" />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold mb-2">{product.name}</h3>
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">{product.price}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm text-muted-foreground">4.8</span>
                                </div>
                              </div>
                              <Button className="w-full mt-3" size="sm">
                                <ShoppingBag className="w-4 h-4 mr-2" />
                                장바구니 추가
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <CodeBlock
                code={`// 제품 쇼케이스 캐러셀
<Carousel className="w-full">
  <CarouselContent>
    {products.map((product, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <ProductIcon className="w-16 h-16" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
                <Button className="w-full mt-3" size="sm">
                  장바구니 추가
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="product-showcase"
              />
            </CardContent>
          </Card>

          {/* Media Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>미디어 캐러셀</CardTitle>
              <CardDescription>
                이미지, 비디오 등 미디어 콘텐츠를 위한 캐러셀입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {[
                    { type: "image", title: "풍경 사진", icon: Image, color: "from-emerald-100 to-teal-200 dark:from-emerald-900 dark:to-teal-800" },
                    { type: "video", title: "여행 비디오", icon: Video, color: "from-purple-100 to-violet-200 dark:from-purple-900 dark:to-violet-800" },
                    { type: "music", title: "음악 플레이리스트", icon: Music, color: "from-pink-100 to-rose-200 dark:from-pink-900 dark:to-rose-800" },
                    { type: "movie", title: "영화 트레일러", icon: Film, color: "from-amber-100 to-yellow-200 dark:from-amber-900 dark:to-yellow-800" }
                  ].map((media, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className={`aspect-video bg-gradient-to-br ${media.color} flex items-center justify-center relative`}>
                              <media.icon className="w-20 h-20 text-current opacity-60" />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <Button size="lg" className="rounded-full">
                                  <Play className="w-6 h-6" />
                                </Button>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold mb-2">{media.title}</h3>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Heart className="w-4 h-4" />
                                    1.2K
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Share2 className="w-4 h-4" />
                                    공유
                                  </span>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <Bookmark className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <CodeBlock
                code={`// 미디어 캐러셀
<Carousel className="w-full">
  <CarouselContent>
    {mediaItems.map((media, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                <MediaIcon className="w-20 h-20" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="lg" className="rounded-full">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{media.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      1.2K
                    </span>
                    <span>공유</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="media-carousel"
              />
            </CardContent>
          </Card>

          {/* Testimonials Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>고객 후기 캐러셀</CardTitle>
              <CardDescription>
                고객 리뷰나 추천사를 보여주는 캐러셀입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {[
                    { name: "김민수", role: "프로덕트 매니저", company: "테크 스타트업", rating: 5, review: "정말 훌륭한 제품입니다. 팀 전체가 만족하고 있어요!" },
                    { name: "이수진", role: "UX 디자이너", company: "디자인 에이전시", rating: 5, review: "사용자 경험이 뛰어나고 인터페이스가 직관적입니다." },
                    { name: "박철민", role: "개발자", company: "소프트웨어 회사", rating: 4, review: "개발 생산성이 크게 향상되었습니다. 추천합니다!" },
                    { name: "정미영", role: "마케팅 매니저", company: "온라인 커머스", rating: 5, review: "마케팅 캠페인 관리가 훨씬 쉬워졌어요." }
                  ].map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < testimonial.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground italic">
                                "{testimonial.review}"
                              </p>
                              <div className="space-y-1">
                                <div className="font-semibold">{testimonial.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {testimonial.role} · {testimonial.company}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <CodeBlock
                code={`// 고객 후기 캐러셀
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  <CarouselContent>
    {testimonials.map((testimonial, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
                    />
                  ))}
                </div>
                <p className="text-sm italic">"{testimonial.review}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="testimonials-carousel"
              />
            </CardContent>
          </Card>

          {/* Vertical Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>세로 캐러셀</CardTitle>
              <CardDescription>
                세로 방향으로 스크롤하는 캐러셀입니다. 공간이 제한적일 때 유용합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="-mt-1 h-[300px]">
                    {[
                      { icon: TrendingUp, title: "성장", description: "지속적인 성장과 발전" },
                      { icon: Award, title: "품질", description: "최고 품질의 서비스 제공" },
                      { icon: Users, title: "팀워크", description: "훌륭한 팀과 함께" },
                      { icon: Zap, title: "혁신", description: "끊임없는 혁신 추구" },
                      { icon: Crown, title: "리더십", description: "업계 선도적 위치" }
                    ].map((item, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-6">
                              <div className="text-center space-y-3">
                                <item.icon className="w-8 h-8 mx-auto text-primary" />
                                <div>
                                  <h3 className="font-semibold">{item.title}</h3>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <CodeBlock
                code={`// 세로 캐러셀
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  orientation="vertical"
  className="w-full max-w-xs"
>
  <CarouselContent className="-mt-1 h-[300px]">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pt-1 md:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <item.icon className="w-8 h-8 mx-auto text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="vertical-carousel"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>캐러셀 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 Carousel 사용을 위한 디자인 패턴과 모범 사례입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장 패턴
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 명확한 탐색 컨트롤 제공 (화살표, 점 표시기)</li>
                    <li>• 터치/스와이프 제스처 지원</li>
                    <li>• 자동 재생 시 일시정지 옵션 제공</li>
                    <li>• 현재 위치 표시 (페이지네이션)</li>
                    <li>• 적절한 애니메이션 속도 설정</li>
                    <li>• 키보드 탐색 지원</li>
                    <li>• 콘텐츠가 많을 때만 사용</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 패턴
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 콘텐츠가 적을 때 불필요한 캐러셀 사용</li>
                    <li>• 자동 재생으로 인한 사용자 혼란</li>
                    <li>• 탐색 컨트롤 없는 캐러셀</li>
                    <li>• 너무 빠르거나 느린 전환 속도</li>
                    <li>• 중요한 콘텐츠를 첫 번째 슬라이드 이외에 배치</li>
                    <li>• 접근성 고려하지 않은 구현</li>
                    <li>• 모바일에서 사용하기 어려운 컨트롤</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용 사례별 권장 패턴</CardTitle>
              <CardDescription>
                다양한 콘텐츠 유형에 적합한 캐러셀 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">히어로 배너 캐러셀</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="font-semibold">메인 배너</h3>
                        <p className="text-sm text-muted-foreground">자동 재생 + 점 표시기</p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <Dot className="w-4 h-4 text-primary" />
                      <Dot className="w-4 h-4 text-muted-foreground" />
                      <Dot className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 3-5초 자동 재생</li>
                      <li>• 호버 시 일시정지</li>
                      <li>• 점 표시기로 직접 탐색</li>
                      <li>• 무한 루프</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">제품 갤러리 캐러셀</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex gap-2">
                      <div className="h-24 w-24 bg-muted rounded flex items-center justify-center text-xs">제품 1</div>
                      <div className="h-24 w-24 bg-muted rounded flex items-center justify-center text-xs">제품 2</div>
                      <div className="h-24 w-24 bg-muted rounded flex items-center justify-center text-xs">제품 3</div>
                      <div className="h-24 w-24 bg-muted/50 rounded flex items-center justify-center text-xs">+2</div>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 수동 탐색 전용</li>
                      <li>• 썸네일 미리보기</li>
                      <li>• 스와이프 제스처 지원</li>
                      <li>• 확대/축소 기능</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">카드 컬렉션 캐러셀</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex gap-2 overflow-hidden">
                      <div className="h-20 w-32 bg-muted rounded flex items-center justify-center text-xs flex-shrink-0">카드 1</div>
                      <div className="h-20 w-32 bg-muted rounded flex items-center justify-center text-xs flex-shrink-0">카드 2</div>
                      <div className="h-20 w-32 bg-muted/50 rounded flex items-center justify-center text-xs flex-shrink-0">카드 3</div>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 멀티 아이템 표시</li>
                      <li>• 부분적 스크롤</li>
                      <li>• 화살표 탐색</li>
                      <li>• 반응형 아이템 수</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>반응형 고려사항</CardTitle>
              <CardDescription>
                다양한 디바이스에서 최적화된 캐러셀 경험 제공 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    모바일
                  </h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 스와이프 제스처 우선</li>
                    <li>• 큰 터치 영역</li>
                    <li>• 단일 아이템 표시</li>
                    <li>• 화살표 버튼 최소화</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Laptop className="w-4 h-4" />
                    태블릿
                  </h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 2-3개 아이템 표시</li>
                    <li>• 터치 + 화살표 지원</li>
                    <li>• 적절한 여백 설정</li>
                    <li>• 점 표시기 활용</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Monitor className="w-4 h-4" />
                    데스크톱
                  </h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 3-4개 아이템 표시</li>
                    <li>• 마우스 + 키보드 탐색</li>
                    <li>• 호버 효과 활용</li>
                    <li>• 자동 재생 옵션</li>
                  </ul>
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
                효과적인 Carousel 사용을 위한 모범 사례
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
                    <li>• 중요한 콘텐츠는 첫 번째 슬라이드에 배치</li>
                    <li>• 명확한 페이지네이션 또는 진행 표시기 제공</li>
                    <li>• 터치 디바이스에서 스와이프 제스처 지원</li>
                    <li>• 키보드 탐색 (화살표 키) 지원</li>
                    <li>• 자동 재생 시 사용자 컨트롤 제공</li>
                    <li>• 적절한 전환 애니메이션 속도 설정</li>
                    <li>• 콘텐츠가 잘리지 않도록 주의</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 콘텐츠가 3개 미만일 때 캐러셀 사용</li>
                    <li>• 자동 재생으로 인한 접근성 문제</li>
                    <li>• 탐색 방법이 명확하지 않은 캐러셀</li>
                    <li>• 너무 빠른 자동 전환 (3초 미만)</li>
                    <li>• 중요한 정보를 숨겨진 슬라이드에 배치</li>
                    <li>• 모바일에서 사용하기 어려운 컨트롤</li>
                    <li>• 무한 루프로 인한 사용자 혼란</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 캐러셀을 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tab 키로 캐러셀 컨트롤에 포커스 이동</li>
                    <li>• 화살표 키로 슬라이드 탐색</li>
                    <li>• Enter/Space 키로 버튼 활성화</li>
                    <li>• Escape 키로 자동 재생 중지</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• role="region" 및 aria-roledescription="carousel" 속성</li>
                    <li>• 슬라이드에 aria-roledescription="slide" 속성</li>
                    <li>• 현재 슬라이드 위치 정보 제공</li>
                    <li>• 의미있는 버튼 라벨 및 alt 텍스트</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">모션 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• prefers-reduced-motion 설정 고려</li>
                    <li>• 자동 재생 비활성화 옵션</li>
                    <li>• 애니메이션 지속 시간 최소화</li>
                    <li>• 깜빡임이나 번쩍임 효과 방지</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Carousel 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 이미지 갤러리</li>
                    <li>• 제품 쇼케이스</li>
                    <li>• 프로모션 배너</li>
                    <li>• 고객 후기</li>
                    <li>• 뉴스/블로그 포스트</li>
                    <li>• 미디어 콘텐츠</li>
                    <li>• 단계별 가이드</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 방법</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Grid:</strong> 많은 아이템 한 번에 표시</li>
                    <li>• <strong>Tabs:</strong> 카테고리별 콘텐츠</li>
                    <li>• <strong>Accordion:</strong> 중요도별 콘텐츠</li>
                    <li>• <strong>Modal:</strong> 상세 보기</li>
                    <li>• <strong>Infinite Scroll:</strong> 연속 콘텐츠</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 중요한 네비게이션</li>
                    <li>• 필수 정보 전달</li>
                    <li>• 적은 수의 아이템 (3개 미만)</li>
                    <li>• 텍스트 위주 콘텐츠</li>
                    <li>• 시간에 민감한 정보</li>
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
                Carousel 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Carousel 속성</h4>
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
                        <td className="p-2">캐러셀 방향</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">opts</td>
                        <td className="p-2">CarouselOptions</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Embla 캐러셀 옵션</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">plugins</td>
                        <td className="p-2">CarouselPlugin[]</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Embla 플러그인</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">setApi</td>
                        <td className="p-2">(api: CarouselApi) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">API 인스턴스 콜백</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">주요 Embla 옵션</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">옵션</th>
                        <th className="text-left p-2 font-medium">타입</th>
                        <th className="text-left p-2 font-medium">설명</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">align</td>
                        <td className="p-2">"start" | "center" | "end"</td>
                        <td className="p-2">슬라이드 정렬 방식</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">loop</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">무한 루프 여부</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">slidesToScroll</td>
                        <td className="p-2">number</td>
                        <td className="p-2">한 번에 스크롤할 슬라이드 수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">containScroll</td>
                        <td className="p-2">"trimSnaps" | "keepSnaps"</td>
                        <td className="p-2">스크롤 제한 방식</td>
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "./components/ui/carousel"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 캐러셀
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="옵션 설정"
                code={`// 루프 및 정렬 설정
<Carousel
  opts={{
    align: "start",
    loop: true,
    slidesToScroll: 1,
  }}
  className="w-full"
>
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="p-6">
              {/* 콘텐츠 */}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="options-usage"
              />

              <CodeBlock
                title="API 사용하기"
                code={`import { useState, useEffect } from "react"
import { type CarouselApi } from "./components/ui/carousel"

function MyCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {/* 슬라이드 아이템들 */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}`}
                codeKey="api-usage"
              />

              <CodeBlock
                title="세로 캐러셀"
                code={`// 세로 방향 캐러셀
<Carousel
  orientation="vertical"
  opts={{
    align: "start",
  }}
  className="w-full max-w-xs"
>
  <CarouselContent className="-mt-1 h-[300px]">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pt-1 md:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              {/* 콘텐츠 */}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="vertical-usage"
              />

              <CodeBlock
                title="반응형 아이템 수"
                code={`// 반응형 그리드에서 다른 수의 아이템 표시
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  <CarouselContent className="-ml-2 md:-ml-4">
    {items.map((item, index) => (
      <CarouselItem 
        key={index} 
        className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div className="p-1">
          <Card>
            <CardContent className="p-6">
              {/* 콘텐츠 */}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
                codeKey="responsive-usage"
              />

              <CodeBlock
                title="커스텀 컨트롤"
                code={`// 커스텀 네비게이션 버튼
function CustomCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!api) return

    const updateButtons = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    updateButtons()
    api.on("select", updateButtons)

    return () => {
      api.off("select", updateButtons)
    }
  }, [api])

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {/* 슬라이드 아이템들 */}
        </CarouselContent>
      </Carousel>
      
      {/* 커스텀 컨트롤 */}
      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}`}
                codeKey="custom-controls"
              />

              <CodeBlock
                title="자동 재생"
                code={`import { useCallback, useEffect } from "react"

function AutoplayCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [isPlaying, setIsPlaying] = useState(true)

  const scrollNext = useCallback(() => {
    if (!api) return
    
    if (api.canScrollNext()) {
      api.scrollNext()
    } else {
      api.scrollTo(0) // 첫 번째 슬라이드로 이동
    }
  }, [api])

  useEffect(() => {
    if (!api || !isPlaying) return

    const interval = setInterval(scrollNext, 3000)
    return () => clearInterval(interval)
  }, [api, isPlaying, scrollNext])

  return (
    <div
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {/* 슬라이드 아이템들 */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <div className="text-center mt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  )
}`}
                codeKey="autoplay-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}