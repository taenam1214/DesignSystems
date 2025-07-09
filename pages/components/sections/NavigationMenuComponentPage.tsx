import React, { useState } from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  Menu,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Settings,
  ChevronDown,
  Home,
  User,
  ShoppingCart,
  Search,
  Bell,
  Mail,
  Calendar,
  FileText,
  Folder,
  Code,
  Monitor,
  Smartphone,
  Globe,
  BarChart,
  Users,
  Star,
  Download,
  Upload,
  Image,
  Video,
  Music,
  Archive,
  BookOpen,
  HelpCircle,
  Zap,
  Heart,
  MessageSquare,
  Share,
  Gift,
  Truck,
  CreditCard,
  Shield,
  Clock,
  MapPin,
  Phone,
  Camera,
  Headphones,
  Award,
  Gamepad2,
  Compass,
  Target,
  Paintbrush,
  Building,
  Coffee,
  Car,
  Plane,
  Activity,
  TrendingUp,
  MousePointer,
  Layout,
  Tag
} from 'lucide-react';

export function NavigationMenuComponentPage() {
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
            <MousePointer className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Navigation Menu</h1>
            <p className="text-muted-foreground">
              웹사이트나 애플리케이션의 주요 네비게이션을 위한 접근 가능한 메뉴 컴포넌트입니다. 드롭다운과 중첩된 콘텐츠를 지원합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MousePointer className="w-3 h-3" />
            네비게이션
          </Badge>
          <Badge variant="outline">키보드 탐색</Badge>
          <Badge variant="outline">드롭다운</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">반응형</Badge>
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
          {/* Basic Navigation Menu */}
          <Card>
            <CardHeader>
              <CardTitle>기본 네비게이션 메뉴</CardTitle>
              <CardDescription>
                간단한 네비게이션 메뉴부터 드롭다운과 중첩된 콘텐츠가 있는 복잡한 메뉴까지 다양한 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h4 className="font-medium">기본 형태</h4>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">단순 네비게이션</h5>
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <Home className="w-4 h-4 mr-2" />
                              홈
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <User className="w-4 h-4 mr-2" />
                              소개
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <Mail className="w-4 h-4 mr-2" />
                              연락처
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-medium">드롭다운이 있는 네비게이션</h5>
                    <div className="border rounded-lg p-4 bg-muted/20">
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <Home className="w-4 h-4 mr-2" />
                              홈
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              제품
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <div className="row-span-3">
                                  <NavigationMenuLink asChild>
                                    <a
                                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                      href="/"
                                    >
                                      <Star className="h-6 w-6" />
                                      <div className="mb-2 mt-4 text-lg font-medium">
                                        추천 제품
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        가장 인기 있는 제품들을 확인해보세요.
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </div>
                                <NavigationMenuLink href="/docs" title="전자제품">
                                  최신 스마트폰, 노트북, 태블릿 등
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/docs/installation" title="패션">
                                  의류, 신발, 액세서리 컬렉션
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/docs/primitives/typography" title="생활용품">
                                  가정용품, 인테리어, 주방용품
                                </NavigationMenuLink>
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>
                              <Info className="w-4 h-4 mr-2" />
                              정보
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="w-[400px] p-4">
                                <div className="grid gap-2">
                                  <NavigationMenuLink href="/about" title="회사 소개">
                                    우리의 비전과 미션에 대해 알아보세요
                                  </NavigationMenuLink>
                                  <NavigationMenuLink href="/team" title="팀">
                                    전문가들로 구성된 우리 팀을 만나보세요
                                  </NavigationMenuLink>
                                  <NavigationMenuLink href="/careers" title="채용">
                                    함께 성장할 인재를 찾고 있습니다
                                  </NavigationMenuLink>
                                  <NavigationMenuLink href="/news" title="뉴스">
                                    최신 소식과 업데이트를 확인하세요
                                  </NavigationMenuLink>
                                </div>
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              <HelpCircle className="w-4 h-4 mr-2" />
                              지원
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 네비게이션 메뉴
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Home className="w-4 h-4 mr-2" />
        홈
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <User className="w-4 h-4 mr-2" />
        소개
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// 드롭다운이 있는 네비게이션
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        제품
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 md:w-[400px]">
          <NavigationMenuLink href="/electronics" title="전자제품">
            최신 스마트폰, 노트북, 태블릿 등
          </NavigationMenuLink>
          <NavigationMenuLink href="/fashion" title="패션">
            의류, 신발, 액세서리 컬렉션
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                codeKey="basic-navigation"
              />
            </CardContent>
          </Card>

          {/* Complex Navigation Examples */}
          <Card>
            <CardHeader>
              <CardTitle>복잡한 네비게이션 예제</CardTitle>
              <CardDescription>
                실제 웹사이트에서 사용되는 다양한 유형의 복잡한 네비게이션 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h4 className="font-medium">이커머스 네비게이션</h4>
                <div className="border rounded-lg p-4 bg-muted/20">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          카테고리
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-6 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                            <div className="space-y-4">
                              <h6 className="font-medium">전자제품</h6>
                              <div className="grid gap-2">
                                <NavigationMenuLink href="/electronics/phones" title="스마트폰">
                                  <Smartphone className="w-4 h-4" />
                                  최신 스마트폰 컬렉션
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/electronics/laptops" title="노트북">
                                  <Monitor className="w-4 h-4" />
                                  고성능 노트북 및 데스크톱
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/electronics/audio" title="오디오">
                                  <Headphones className="w-4 h-4" />
                                  헤드폰, 스피커, 이어폰
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/electronics/cameras" title="카메라">
                                  <Camera className="w-4 h-4" />
                                  DSLR, 미러리스, 액션캠
                                </NavigationMenuLink>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h6 className="font-medium">라이프스타일</h6>
                              <div className="grid gap-2">
                                <NavigationMenuLink href="/lifestyle/fashion" title="패션">
                                  <Heart className="w-4 h-4" />
                                  의류, 신발, 액세서리
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/lifestyle/home" title="홈 & 리빙">
                                  <Building className="w-4 h-4" />
                                  가구, 인테리어, 생활용품
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/lifestyle/sports" title="스포츠">
                                  <Activity className="w-4 h-4" />
                                  운동용품, 아웃도어 장비
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/lifestyle/beauty" title="뷰티">
                                  <Paintbrush className="w-4 h-4" />
                                  화장품, 스킨케어, 향수
                                </NavigationMenuLink>
                              </div>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <Tag className="w-4 h-4 mr-2" />
                          브랜드
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[400px] p-4">
                            <div className="grid gap-2">
                              <NavigationMenuLink href="/brands/premium" title="프리미엄 브랜드">
                                <Award className="w-4 h-4" />
                                고급 브랜드 컬렉션
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/brands/trending" title="트렌딩 브랜드">
                                <TrendingUp className="w-4 h-4" />
                                지금 뜨고 있는 브랜드
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/brands/local" title="로컬 브랜드">
                                <MapPin className="w-4 h-4" />
                                국내 우수 브랜드
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <Gift className="w-4 h-4 mr-2" />
                          세일
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <HelpCircle className="w-4 h-4 mr-2" />
                          고객지원
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[350px] p-4">
                            <div className="grid gap-2">
                              <NavigationMenuLink href="/support/faq" title="자주 묻는 질문">
                                <BookOpen className="w-4 h-4" />
                                빠른 답변을 찾아보세요
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/support/contact" title="문의하기">
                                <Phone className="w-4 h-4" />
                                전화, 이메일, 채팅 상담
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/support/shipping" title="배송 안내">
                                <Truck className="w-4 h-4" />
                                배송비, 배송기간, 교환반품
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/support/payment" title="결제 안내">
                                <CreditCard className="w-4 h-4" />
                                결제 방법 및 할부 안내
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">대시보드/관리자 네비게이션</h4>
                <div className="border rounded-lg p-4 bg-muted/20">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <BarChart className="w-4 h-4 mr-2" />
                          대시보드
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <Users className="w-4 h-4 mr-2" />
                          사용자 관리
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[300px] p-4">
                            <div className="grid gap-2">
                              <NavigationMenuLink href="/admin/users" title="사용자 목록">
                                전체 사용자 조회 및 관리
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/admin/roles" title="권한 관리">
                                사용자 역할 및 권한 설정
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/admin/groups" title="그룹 관리">
                                사용자 그룹 생성 및 관리
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <FileText className="w-4 h-4 mr-2" />
                          콘텐츠
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                            <div>
                              <h6 className="font-medium mb-3">게시물 관리</h6>
                              <div className="grid gap-2">
                                <NavigationMenuLink href="/admin/posts" title="게시물">
                                  <FileText className="w-4 h-4" />
                                  블로그, 뉴스, 공지사항
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/admin/categories" title="카테고리">
                                  <Folder className="w-4 h-4" />
                                  콘텐츠 분류 관리
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/admin/comments" title="댓글">
                                  <MessageSquare className="w-4 h-4" />
                                  댓글 관리 및 모더레이션
                                </NavigationMenuLink>
                              </div>
                            </div>
                            <div>
                              <h6 className="font-medium mb-3">미디어 관리</h6>
                              <div className="grid gap-2">
                                <NavigationMenuLink href="/admin/images" title="이미지">
                                  <Image className="w-4 h-4" />
                                  이미지 업로드 및 관리
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/admin/videos" title="동영상">
                                  <Video className="w-4 h-4" />
                                  동영상 콘텐츠 관리
                                </NavigationMenuLink>
                                <NavigationMenuLink href="/admin/files" title="파일">
                                  <Archive className="w-4 h-4" />
                                  문서 및 기타 파일
                                </NavigationMenuLink>
                              </div>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <Settings className="w-4 h-4 mr-2" />
                          설정
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[350px] p-4">
                            <div className="grid gap-2">
                              <NavigationMenuLink href="/admin/general" title="일반 설정">
                                <Settings className="w-4 h-4" />
                                사이트 기본 설정
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/admin/security" title="보안 설정">
                                <Shield className="w-4 h-4" />
                                보안 정책 및 인증 설정
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/admin/integrations" title="연동 설정">
                                <Zap className="w-4 h-4" />
                                외부 서비스 연동 관리
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/admin/backup" title="백업 관리">
                                <Download className="w-4 h-4" />
                                데이터 백업 및 복원
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>

              <CodeBlock
                code={`// 복잡한 이커머스 네비게이션
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <ShoppingCart className="w-4 h-4 mr-2" />
        카테고리
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-6 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
          <div className="space-y-4">
            <h6 className="font-medium">전자제품</h6>
            <div className="grid gap-2">
              <NavigationMenuLink href="/electronics/phones" title="스마트폰">
                <Smartphone className="w-4 h-4" />
                최신 스마트폰 컬렉션
              </NavigationMenuLink>
              <NavigationMenuLink href="/electronics/laptops" title="노트북">
                <Monitor className="w-4 h-4" />
                고성능 노트북 및 데스크톱
              </NavigationMenuLink>
            </div>
          </div>
          <div className="space-y-4">
            <h6 className="font-medium">라이프스타일</h6>
            <div className="grid gap-2">
              <NavigationMenuLink href="/lifestyle/fashion" title="패션">
                <Heart className="w-4 h-4" />
                의류, 신발, 액세서리
              </NavigationMenuLink>
              <NavigationMenuLink href="/lifestyle/home" title="홈 & 리빙">
                <Building className="w-4 h-4" />
                가구, 인테리어, 생활용품
              </NavigationMenuLink>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// 관리자 대시보드 네비게이션
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Users className="w-4 h-4 mr-2" />
        사용자 관리
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[300px] p-4">
          <div className="grid gap-2">
            <NavigationMenuLink href="/admin/users" title="사용자 목록">
              전체 사용자 조회 및 관리
            </NavigationMenuLink>
            <NavigationMenuLink href="/admin/roles" title="권한 관리">
              사용자 역할 및 권한 설정
            </NavigationMenuLink>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                codeKey="complex-navigation"
              />
            </CardContent>
          </Card>

          {/* Mobile Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>모바일 친화적 네비게이션</CardTitle>
              <CardDescription>
                모바일 환경에 최적화된 네비게이션 패턴과 반응형 구성 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h4 className="font-medium">반응형 네비게이션</h4>
                <div className="border rounded-lg p-4 bg-muted/20">
                  <NavigationMenu className="max-w-full">
                    <NavigationMenuList className="flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <Home className="w-4 h-4 md:mr-2" />
                          <span className="hidden md:inline">홈</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="w-full md:w-auto">
                          <Menu className="w-4 h-4 md:mr-2" />
                          <span className="hidden md:inline">메뉴</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-full p-4 md:w-[300px]">
                            <div className="grid gap-2">
                              <NavigationMenuLink href="/menu1" title="메뉴 1">
                                첫 번째 메뉴 항목
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/menu2" title="메뉴 2">
                                두 번째 메뉴 항목
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/menu3" title="메뉴 3">
                                세 번째 메뉴 항목
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <Search className="w-4 h-4 md:mr-2" />
                          <span className="hidden md:inline">검색</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <User className="w-4 h-4 md:mr-2" />
                          <span className="hidden md:inline">계정</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">아이콘 기반 네비게이션</h4>
                <div className="border rounded-lg p-4 bg-muted/20">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <Home className="w-5 h-5" />
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <Search className="w-5 h-5" />
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <Bell className="w-5 h-5" />
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="px-2">
                          <Menu className="w-5 h-5" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[200px] p-3">
                            <div className="grid gap-1">
                              <NavigationMenuLink href="/profile" className="flex items-center gap-2 p-2">
                                <User className="w-4 h-4" />
                                프로필
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/settings" className="flex items-center gap-2 p-2">
                                <Settings className="w-4 h-4" />
                                설정
                              </NavigationMenuLink>
                              <NavigationMenuLink href="/logout" className="flex items-center gap-2 p-2">
                                <Clock className="w-4 h-4" />
                                로그아웃
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>

              <CodeBlock
                code={`// 반응형 네비게이션
<NavigationMenu className="max-w-full">
  <NavigationMenuList className="flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Home className="w-4 h-4 md:mr-2" />
        <span className="hidden md:inline">홈</span>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="w-full md:w-auto">
        <Menu className="w-4 h-4 md:mr-2" />
        <span className="hidden md:inline">메뉴</span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-full p-4 md:w-[300px]">
          // 메뉴 콘텐츠
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// 아이콘 기반 네비게이션
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Home className="w-5 h-5" />
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="px-2">
        <Menu className="w-5 h-5" />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[200px] p-3">
          <NavigationMenuLink href="/profile" className="flex items-center gap-2 p-2">
            <User className="w-4 h-4" />
            프로필
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                codeKey="mobile-navigation"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>네비게이션 메뉴 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 네비게이션 메뉴 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <Home className="w-4 h-4 mr-2" />
                                홈
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>
                                제품
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <div className="w-[200px] p-2">
                                  <NavigationMenuLink href="/products/new" title="신제품">
                                    최신 출시 제품
                                  </NavigationMenuLink>
                                </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 명확한 라벨과 적절한 아이콘 사용</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>
                                서비스
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <div className="w-[250px] p-3">
                                  <NavigationMenuLink href="/service1" title="컨설팅">
                                    전문가 컨설팅 서비스
                                  </NavigationMenuLink>
                                  <NavigationMenuLink href="/service2" title="개발">
                                    맞춤형 개발 솔루션
                                  </NavigationMenuLink>
                                </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 논리적인 그룹화와 계층 구조</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                문의하기
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 중요한 액션을 위한 직접 링크</p>
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
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>
                                메뉴1
                              </NavigationMenuTrigger>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>
                                메뉴2
                              </NavigationMenuTrigger>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>
                                메뉴3
                              </NavigationMenuTrigger>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                      <p className="text-xs text-red-600">✗ 모호한 라벨과 과도한 드롭다운</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <NavigationMenu>
                          <NavigationMenuList className="gap-8">
                            <NavigationMenuItem>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                매우긴메뉴이름입니다
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                또다른긴메뉴이름
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                      <p className="text-xs text-red-600">✗ 너무 긴 메뉴 라벨</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <NavigationMenu>
                          <NavigationMenuList className="flex-wrap">
                            {Array.from({ length: 8 }, (_, i) => (
                              <NavigationMenuItem key={i}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                  메뉴{i + 1}
                                </NavigationMenuLink>
                              </NavigationMenuItem>
                            ))}
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                      <p className="text-xs text-red-600">✗ 너무 많은 최상위 메뉴 항목</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>웹사이트 유형별 패턴</CardTitle>
              <CardDescription>
                다양한 웹사이트 유형에 맞는 네비게이션 메뉴 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">회사/기업 웹사이트</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <NavigationMenu>
                      <NavigationMenuList className="flex-col space-y-1">
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            회사소개
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            서비스
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            포트폴리오
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            문의하기
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <p className="text-xs text-muted-foreground">
                      • 간단하고 직관적<br/>
                      • 명확한 CTA<br/>
                      • 비즈니스 목표 중심
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">이커머스</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <NavigationMenu>
                      <NavigationMenuList className="flex-col space-y-1">
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            카테고리 ▼
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            신상품
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            베스트
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            세일
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <p className="text-xs text-muted-foreground">
                      • 제품 중심 구성<br/>
                      • 카테고리 세분화<br/>
                      • 검색과 필터 강조
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">블로그/미디어</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <NavigationMenu>
                      <NavigationMenuList className="flex-col space-y-1">
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            홈
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            카테고리 ▼
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            저자
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start text-xs`}>
                            소개
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <p className="text-xs text-muted-foreground">
                      • 콘텐츠 탐색 중심<br/>
                      • 카테고리와 태그<br/>
                      • 검색 기능 강조
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용자 경험 패턴</CardTitle>
              <CardDescription>
                사용자 경험을 향상시키는 네비게이션 메뉴 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">정보 구조</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">계층 구조 예시</div>
                      <div className="pl-4 text-xs text-muted-foreground">
                        <div>• 제품 (최상위)</div>
                        <div className="pl-4">• 전자제품 (카테고리)</div>
                        <div className="pl-8">• 스마트폰 (세부 카테고리)</div>
                        <div className="pl-12">• iPhone (브랜드)</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 7±2 법칙 준수<br/>
                      • 3-클릭 규칙<br/>
                      • 논리적 그룹화
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">시각적 구성</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded"></div>
                        <span>중요도에 따른 크기</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-muted-foreground rounded"></div>
                        <span>일관된 간격</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded"></div>
                        <span>명확한 시각적 피드백</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • F-패턴 레이아웃<br/>
                      • 충분한 터치 영역<br/>
                      • 명확한 현재 위치 표시
                    </p>
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
                효과적인 Navigation Menu 사용을 위한 모범 사례
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
                    <li>• 명확하고 직관적인 메뉴 라벨 사용</li>
                    <li>• 일관된 메뉴 구조와 네이밍 규칙</li>
                    <li>• 현재 페이지 위치를 명확히 표시</li>
                    <li>• 키보드 네비게이션 완전 지원</li>
                    <li>• 모바일에서도 쉽게 사용 가능</li>
                    <li>• 적절한 메뉴 깊이 유지 (최대 3-4레벨)</li>
                    <li>• 로딩 상태와 에러 상태 처리</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 깊은 메뉴 구조 (4레벨 이상)</li>
                    <li>• 모호하거나 기술적인 용어 사용</li>
                    <li>• 최상위 메뉴 항목이 너무 많음 (7개 초과)</li>
                    <li>• 일관성 없는 메뉴 동작</li>
                    <li>• 모바일에서 사용하기 어려운 크기</li>
                    <li>• 접근성 고려 없는 구현</li>
                    <li>• 시각적 피드백 부족</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Navigation Menu를 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 내비게이션</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code>Tab</code> 메뉴 항목간 이동</li>
                    <li>• <code>Enter</code> 또는 <code>Space</code> 메뉴 활성화</li>
                    <li>• <code>Arrow Keys</code> 드롭다운 내 항목 탐색</li>
                    <li>• <code>Escape</code> 드롭다운 닫기</li>
                    <li>• <code>Home/End</code> 첫/마지막 항목으로 이동</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">ARIA 속성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code>role="navigation"</code> 네비게이션 영역 정의</li>
                    <li>• <code>aria-expanded</code> 드롭다운 상태</li>
                    <li>• <code>aria-current="page"</code> 현재 페이지 표시</li>
                    <li>• <code>aria-label</code> 메뉴 설명</li>
                    <li>• <code>aria-describedby</code> 추가 설명 연결</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 (최소 4.5:1)</li>
                    <li>• 포커스 상태 명확히 표시</li>
                    <li>• 터치 영역 최소 44px × 44px</li>
                    <li>• 색상에만 의존하지 않는 정보 전달</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 메뉴 구조와 항목 수 안내</li>
                    <li>• 드롭다운 열림/닫힘 상태 알림</li>
                    <li>• 현재 위치와 탐색 경로 제공</li>
                    <li>• 의미 있는 링크 텍스트</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Navigation Menu 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 웹사이트 주 네비게이션</li>
                    <li>• 복잡한 메뉴 구조</li>
                    <li>• 드롭다운이 필요한 경우</li>
                    <li>• 계층적 정보 구조</li>
                    <li>• 데스크톱 중심 인터페이스</li>
                    <li>• 풍부한 메뉴 콘텐츠</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Menubar:</strong> 애플리케이션 메뉴바</li>
                    <li>• <strong>Breadcrumb:</strong> 경로 표시</li>
                    <li>• <strong>Tabs:</strong> 콘텐츠 영역 내 탐색</li>
                    <li>• <strong>Sidebar:</strong> 세로형 네비게이션</li>
                    <li>• <strong>Drawer:</strong> 모바일 메뉴</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 단순한 탭 네비게이션</li>
                    <li>• 페이지 내 섹션 이동</li>
                    <li>• 단일 액션 트리거</li>
                    <li>• 모바일 우선 인터페이스</li>
                    <li>• 선형적 프로세스</li>
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
                Navigation Menu 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">NavigationMenu 속성</h4>
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
                        <td className="p-2 font-mono">viewport</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">true</td>
                        <td className="p-2">드롭다운 뷰포트 표시 여부</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">orientation</td>
                        <td className="p-2">'horizontal' | 'vertical'</td>
                        <td className="p-2">'horizontal'</td>
                        <td className="p-2">메뉴 방향</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">delayDuration</td>
                        <td className="p-2">number</td>
                        <td className="p-2">200</td>
                        <td className="p-2">호버 지연 시간(ms)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">skipDelayDuration</td>
                        <td className="p-2">number</td>
                        <td className="p-2">300</td>
                        <td className="p-2">연속 호버 시 지연 생략 시간</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">NavigationMenuTrigger 속성</h4>
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
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">비활성화 상태</td>
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

              <div className="space-y-4">
                <h4 className="font-medium">NavigationMenuLink 속성</h4>
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
                        <td className="p-2 font-mono">active</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">활성 상태 (현재 페이지)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">href</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">링크 URL</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">title</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">링크 제목</td>
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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 네비게이션 메뉴
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        홈
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        소개
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        연락처
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="드롭다운 메뉴"
                code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>제품</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
          <NavigationMenuLink href="/products/new" title="신제품">
            최신 출시된 제품들을 확인해보세요
          </NavigationMenuLink>
          <NavigationMenuLink href="/products/popular" title="인기제품">
            가장 많이 판매되는 제품들
          </NavigationMenuLink>
          <NavigationMenuLink href="/products/sale" title="할인제품">
            특가 할인 중인 제품들
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                codeKey="dropdown-menu"
              />

              <CodeBlock
                title="복잡한 메뉴 구조"
                code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>카테고리</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-6 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
          <div className="space-y-4">
            <h6 className="font-medium">전자제품</h6>
            <div className="grid gap-2">
              <NavigationMenuLink href="/electronics/phones" title="스마트폰">
                <Smartphone className="w-4 h-4" />
                최신 스마트폰 컬렉션
              </NavigationMenuLink>
              <NavigationMenuLink href="/electronics/laptops" title="노트북">
                <Monitor className="w-4 h-4" />
                고성능 노트북 및 데스크톱
              </NavigationMenuLink>
            </div>
          </div>
          <div className="space-y-4">
            <h6 className="font-medium">패션</h6>
            <div className="grid gap-2">
              <NavigationMenuLink href="/fashion/men" title="남성">
                <User className="w-4 h-4" />
                남성 의류 및 액세서리
              </NavigationMenuLink>
              <NavigationMenuLink href="/fashion/women" title="여성">
                <User className="w-4 h-4" />
                여성 의류 및 액세서리
              </NavigationMenuLink>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                codeKey="complex-menu"
              />

              <CodeBlock
                title="커스텀 링크 컴포넌트"
                code={`// Next.js Link와 함께 사용
import Link from 'next/link'

function CustomNavigationMenuLink({ href, children, ...props }) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} {...props}>
        {children}
      </Link>
    </NavigationMenuLink>
  )
}

// React Router Link와 함께 사용
import { Link } from 'react-router-dom'

function RouterNavigationMenuLink({ to, children, ...props }) {
  return (
    <NavigationMenuLink asChild>
      <Link to={to} {...props}>
        {children}
      </Link>
    </NavigationMenuLink>
  )
}`}
                codeKey="custom-link"
              />

              <CodeBlock
                title="반응형 네비게이션"
                code={`<NavigationMenu className="max-w-full">
  <NavigationMenuList className="flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Home className="w-4 h-4 md:mr-2" />
        <span className="hidden md:inline">홈</span>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="w-full md:w-auto">
        <Menu className="w-4 h-4 md:mr-2" />
        <span className="hidden md:inline">메뉴</span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-full p-4 md:w-[300px]">
          <div className="grid gap-2">
            <NavigationMenuLink href="/products" title="제품">
              제품 카탈로그 보기
            </NavigationMenuLink>
            <NavigationMenuLink href="/services" title="서비스">
              제공 서비스 안내
            </NavigationMenuLink>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                codeKey="responsive-navigation"
              />

              <CodeBlock
                title="접근성 개선"
                code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        aria-label="제품 카테고리 메뉴"
        aria-describedby="products-description"
      >
        제품
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div 
          id="products-description" 
          className="sr-only"
        >
          다양한 제품 카테고리를 탐색할 수 있습니다
        </div>
        <div className="w-[400px] p-4">
          <NavigationMenuLink 
            href="/electronics" 
            title="전자제품"
            aria-label="전자제품 카테고리로 이동"
          >
            스마트폰, 노트북, 태블릿 등
          </NavigationMenuLink>
          <NavigationMenuLink 
            href="/fashion" 
            title="패션"
            aria-current={currentPath === '/fashion' ? 'page' : undefined}
          >
            의류, 신발, 액세서리
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// 키보드 이벤트 핸들링
function NavigationWithKeyboard() {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      // 드롭다운 닫기 로직
    }
  }

  return (
    <NavigationMenu onKeyDown={handleKeyDown}>
      {/* 메뉴 내용 */}
    </NavigationMenu>
  )
}`}
                codeKey="accessibility"
              />

              <CodeBlock
                title="상태 관리"
                code={`import { useState } from 'react'

function StatefulNavigation() {
  const [currentPath, setCurrentPath] = useState('/home')

  const menuItems = [
    { href: '/home', label: '홈', icon: Home },
    { href: '/products', label: '제품', icon: ShoppingCart },
    { href: '/about', label: '소개', icon: User },
    { href: '/contact', label: '연락처', icon: Mail }
  ]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()}
              href={item.href}
              aria-current={currentPath === item.href ? 'page' : undefined}
              onClick={() => setCurrentPath(item.href)}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// 서버 상태와 연동
function DynamicNavigation() {
  const { data: menuItems, isLoading } = useQuery('menu', fetchMenuItems)

  if (isLoading) return <NavigationMenuSkeleton />

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems?.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.children ? (
              <>
                <NavigationMenuTrigger>
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    {item.children.map((child) => (
                      <NavigationMenuLink 
                        key={child.id}
                        href={child.href}
                        title={child.label}
                      >
                        {child.description}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink 
                className={navigationMenuTriggerStyle()}
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}`}
                codeKey="state-management"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}