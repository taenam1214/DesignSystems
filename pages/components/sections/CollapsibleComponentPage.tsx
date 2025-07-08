import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  ChevronDown,
  Copy,
  Check,
  CheckCircle,
  AlertTriangle,
  Info,
  ChevronRight,
  ChevronUp,
  Plus,
  Minus,
  MoreHorizontal,
  Settings,
  Filter,
  Search,
  Bell,
  User,
  Users,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  Globe,
  Star,
  Heart,
  Bookmark,
  Tag,
  Folder,
  File,
  FileText,
  Image,
  Video,
  Music,
  Download,
  Upload,
  Share2,
  Link,
  Edit,
  Trash2,
  Save,
  Archive,
  Flag,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  Key,
  Database,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  Battery,
  Zap,
  Sun,
  Moon,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  Camera,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Home,
  Building,
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  Gift,
  Coffee,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Trophy,
  Target,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Menu,
  Navigation,
  Compass,
  Map,
  Route,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Walk,
  HelpCircle,
  MessageSquare,
  MessageCircle,
  Chat,
  Send,
  Inbox,
  Outbox,
  Paperclip,
  AtSign,
  Hash,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Banknote,
  Wallet,
  CreditCard as CreditCardIcon,
  Receipt,
  Calculator,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  AlarmClock,
  Hourglass,
  Watch,
  CalendarDays,
  CalendarClock,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Rainbow,
  Snowflake,
  Flame,
  Droplet,
  Wind,
  Thermometer
} from 'lucide-react';

export function CollapsibleComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Collapsible</h1>
            <p className="text-muted-foreground">
              콘텐츠 영역을 접거나 펼칠 수 있는 인터랙티브 컴포넌트입니다. 공간을 절약하면서 추가 정보를 표시하거나 숨기는데 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <ChevronDown className="w-3 h-3" />
            인터랙티브
          </Badge>
          <Badge variant="outline">공간 절약</Badge>
          <Badge variant="outline">콘텐츠 관리</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">상태 관리</Badge>
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
          {/* Basic Collapsible */}
          <Card>
            <CardHeader>
              <CardTitle>기본 접기/펼치기</CardTitle>
              <CardDescription>
                기본적인 접기/펼치기 기능을 제공하는 컴포넌트입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="flex items-center justify-between w-full">
                      추가 정보 보기
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 mt-4">
                    <div className="rounded-md border px-4 py-3 text-sm">
                      여기에 접었다 펼 수 있는 콘텐츠가 표시됩니다. 이 영역은 트리거를 클릭할 때마다 표시되거나 숨겨집니다.
                    </div>
                    <div className="rounded-md border px-4 py-3 text-sm">
                      추가적인 정보나 설정 옵션들을 여기에 배치할 수 있습니다.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <CodeBlock
                code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible"

// 기본 접기/펼치기
const [isOpen, setIsOpen] = useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="outline" className="flex items-center justify-between w-full">
      추가 정보 보기
      <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="space-y-2 mt-4">
    <div className="rounded-md border px-4 py-3 text-sm">
      접었다 펼 수 있는 콘텐츠가 여기에 표시됩니다.
    </div>
  </CollapsibleContent>
</Collapsible>`}
                codeKey="basic-collapsible"
              />
            </CardContent>
          </Card>

          {/* FAQ Style */}
          <Card>
            <CardHeader>
              <CardTitle>FAQ 스타일</CardTitle>
              <CardDescription>
                자주 묻는 질문이나 도움말 섹션에 적합한 스타일입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    question: "계정을 어떻게 생성하나요?",
                    answer: "회원가입 페이지에서 이메일 주소와 비밀번호를 입력하여 계정을 생성할 수 있습니다. 이메일 인증을 완료하면 모든 기능을 사용할 수 있습니다."
                  },
                  {
                    question: "비밀번호를 잊어버렸어요",
                    answer: "로그인 페이지의 '비밀번호 찾기' 링크를 클릭하세요. 등록된 이메일 주소로 비밀번호 재설정 링크를 보내드립니다."
                  },
                  {
                    question: "구독을 취소하려면 어떻게 해야 하나요?",
                    answer: "계정 설정 > 구독 관리에서 언제든지 구독을 취소할 수 있습니다. 취소 후에도 현재 결제 기간이 끝날 때까지는 서비스를 이용할 수 있습니다."
                  }
                ].map((faq, index) => {
                  const [isOpenFaq, setIsOpenFaq] = useState(false);
                  return (
                    <Collapsible key={index} open={isOpenFaq} onOpenChange={setIsOpenFaq}>
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="flex items-center justify-between w-full p-4 text-left border rounded-lg hover:bg-muted/50"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform ${isOpenFaq ? 'rotate-180' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4">
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </div>

              <CodeBlock
                code={`// FAQ 스타일 접기/펼치기
const faqs = [
  {
    question: "계정을 어떻게 생성하나요?",
    answer: "회원가입 페이지에서 이메일 주소와 비밀번호를 입력하여..."
  },
  // 더 많은 FAQ 항목들
]

{faqs.map((faq, index) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center justify-between w-full p-4 text-left border rounded-lg"
        >
          <span className="font-medium">{faq.question}</span>
          <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        <div className="text-sm text-muted-foreground">
          {faq.answer}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
})}`}
                codeKey="faq-collapsible"
              />
            </CardContent>
          </Card>

          {/* Settings Panel */}
          <Card>
            <CardHeader>
              <CardTitle>설정 패널</CardTitle>
              <CardDescription>
                설정이나 옵션을 카테고리별로 정리한 접기/펼치기 패널입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "계정 설정",
                    icon: User,
                    items: [
                      { label: "프로필 정보", icon: User },
                      { label: "이메일 주소", icon: Mail },
                      { label: "비밀번호 변경", icon: Lock },
                      { label: "2단계 인증", icon: Shield }
                    ]
                  },
                  {
                    title: "알림 설정",
                    icon: Bell,
                    items: [
                      { label: "이메일 알림", icon: Mail },
                      { label: "푸시 알림", icon: Bell },
                      { label: "SMS 알림", icon: Phone },
                      { label: "알림 시간 설정", icon: Clock }
                    ]
                  },
                  {
                    title: "개인정보 보호",
                    icon: Shield,
                    items: [
                      { label: "프로필 공개 설정", icon: Eye },
                      { label: "데이터 다운로드", icon: Download },
                      { label: "계정 삭제", icon: Trash2 },
                      { label: "개인정보 처리방침", icon: FileText }
                    ]
                  }
                ].map((section, index) => {
                  const [isOpenSection, setIsOpenSection] = useState(index === 0);
                  return (
                    <Collapsible key={index} open={isOpenSection} onOpenChange={setIsOpenSection}>
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="flex items-center justify-between w-full p-4 text-left border rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <section.icon className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">{section.title}</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 transition-transform ${isOpenSection ? 'rotate-180' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4">
                        <div className="space-y-2 ml-8">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer">
                              <item.icon className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </div>

              <CodeBlock
                code={`// 설정 패널 스타일
const sections = [
  {
    title: "계정 설정",
    icon: User,
    items: [
      { label: "프로필 정보", icon: User },
      { label: "이메일 주소", icon: Mail },
      // 더 많은 설정 항목들
    ]
  },
  // 더 많은 섹션들
]

{sections.map((section, index) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  return (
    <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="flex items-center justify-between w-full p-4">
          <div className="flex items-center gap-3">
            <section.icon className="h-5 w-5" />
            <span className="font-medium">{section.title}</span>
          </div>
          <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        <div className="space-y-2 ml-8">
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50">
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
})}`}
                codeKey="settings-collapsible"
              />
            </CardContent>
          </Card>

          {/* Navigation Menu */}
          <Card>
            <CardHeader>
              <CardTitle>네비게이션 메뉴</CardTitle>
              <CardDescription>
                계층적 네비게이션이나 메뉴 구조에 사용되는 접기/펼치기입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                {[
                  {
                    title: "대시보드",
                    icon: Home,
                    items: [
                      { label: "홈", icon: Home },
                      { label: "분석", icon: BarChart3 },
                      { label: "리포트", icon: FileText }
                    ]
                  },
                  {
                    title: "사용자 관리",
                    icon: Users,
                    items: [
                      { label: "사용자 목록", icon: Users },
                      { label: "역할 관리", icon: Shield },
                      { label: "권한 설정", icon: Key }
                    ]
                  },
                  {
                    title: "콘텐츠",
                    icon: FileText,
                    items: [
                      { label: "게시물 관리", icon: Edit },
                      { label: "미디어 라이브러리", icon: Image },
                      { label: "카테고리", icon: Tag }
                    ]
                  },
                  {
                    title: "설정",
                    icon: Settings,
                    items: [
                      { label: "일반 설정", icon: Settings },
                      { label: "보안 설정", icon: Lock },
                      { label: "알림 설정", icon: Bell }
                    ]
                  }
                ].map((menu, index) => {
                  const [isOpenMenu, setIsOpenMenu] = useState(false);
                  return (
                    <Collapsible key={index} open={isOpenMenu} onOpenChange={setIsOpenMenu}>
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="flex items-center justify-between w-full p-3 text-left hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <menu.icon className="h-4 w-4" />
                            <span>{menu.title}</span>
                          </div>
                          <ChevronRight className={`h-4 w-4 transition-transform ${isOpenMenu ? 'rotate-90' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6">
                        <div className="space-y-1 border-l pl-4">
                          {menu.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer">
                              <item.icon className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </div>

              <CodeBlock
                code={`// 네비게이션 메뉴 스타일
const menuItems = [
  {
    title: "대시보드",
    icon: Home,
    items: [
      { label: "홈", icon: Home },
      { label: "분석", icon: BarChart3 },
      // 더 많은 서브 메뉴들
    ]
  },
  // 더 많은 메뉴들
]

{menuItems.map((menu, index) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="flex items-center justify-between w-full p-3">
          <div className="flex items-center gap-3">
            <menu.icon className="h-4 w-4" />
            <span>{menu.title}</span>
          </div>
          <ChevronRight className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-90' : ''}\`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-6">
        <div className="space-y-1 border-l pl-4">
          {menu.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50">
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
})}`}
                codeKey="navigation-collapsible"
              />
            </CardContent>
          </Card>

          {/* Data List */}
          <Card>
            <CardHeader>
              <CardTitle>데이터 목록</CardTitle>
              <CardDescription>
                항목별 상세 정보를 표시하는 접기/펼치기 목록입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "주문 #12345",
                    status: "배송 중",
                    date: "2024년 6월 20일",
                    total: "₩45,000",
                    items: [
                      { name: "노트북 파우치", quantity: 1, price: "₩25,000" },
                      { name: "무선 마우스", quantity: 1, price: "₩15,000" },
                      { name: "배송비", quantity: 1, price: "₩5,000" }
                    ]
                  },
                  {
                    title: "주문 #12344",
                    status: "배송 완료",
                    date: "2024년 6월 18일",
                    total: "₩32,000",
                    items: [
                      { name: "키보드", quantity: 1, price: "₩30,000" },
                      { name: "배송비", quantity: 1, price: "₩2,000" }
                    ]
                  }
                ].map((order, index) => {
                  const [isOpenOrder, setIsOpenOrder] = useState(false);
                  return (
                    <Collapsible key={index} open={isOpenOrder} onOpenChange={setIsOpenOrder}>
                      <CollapsibleTrigger asChild>
                        <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{order.title}</h4>
                              <div className="flex items-center gap-4">
                                <span className="text-sm text-muted-foreground">{order.date}</span>
                                <Badge variant={order.status === "배송 완료" ? "default" : "secondary"}>
                                  {order.status}
                                </Badge>
                                <span className="font-medium">{order.total}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${isOpenOrder ? 'rotate-180' : ''}`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4">
                        <div className="space-y-3 border-t pt-4">
                          <h5 className="font-medium text-sm">주문 상세</h5>
                          <div className="space-y-2">
                            {order.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center justify-between text-sm">
                                <span>{item.name}</span>
                                <div className="flex items-center gap-4">
                                  <span className="text-muted-foreground">수량: {item.quantity}</span>
                                  <span className="font-medium">{item.price}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Separator />
                          <div className="flex justify-between items-center">
                            <span className="font-medium">총 합계</span>
                            <span className="font-bold text-lg">{order.total}</span>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </div>

              <CodeBlock
                code={`// 데이터 목록 스타일
const orders = [
  {
    title: "주문 #12345",
    status: "배송 중",
    date: "2024년 6월 20일",
    total: "₩45,000",
    items: [
      { name: "노트북 파우치", quantity: 1, price: "₩25,000" },
      // 더 많은 아이템들
    ]
  },
  // 더 많은 주문들
]

{orders.map((order, index) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{order.title}</h4>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{order.date}</span>
                <Badge>{order.status}</Badge>
                <span className="font-medium">{order.total}</span>
                <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
              </div>
            </div>
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        <div className="space-y-3 border-t pt-4">
          {/* 상세 내용 */}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
})}`}
                codeKey="data-list-collapsible"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>접기/펼치기 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 Collapsible 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="flex items-center justify-between w-full p-2">
                            <span>명확한 라벨과 아이콘</span>
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-2">
                          <div className="text-sm">직관적인 컨트롤 제공</div>
                        </CollapsibleContent>
                      </Collapsible>
                      <p className="text-xs text-muted-foreground mt-2">✓ 명확한 상태 표시</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="text-sm text-muted-foreground">
                        <div>• 적절한 애니메이션 제공</div>
                        <div>• 일관된 인터랙션 패턴</div>
                        <div>• 키보드 접근성 지원</div>
                      </div>
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
                      <div className="text-sm">
                        <div className="font-medium">상태 표시 없는 트리거</div>
                        <div className="text-muted-foreground text-xs mt-1">사용자가 열려 있는지 닫혀 있는지 알 수 없음</div>
                      </div>
                      <p className="text-xs text-red-600 mt-2">✗ 모호한 상태</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="text-sm text-muted-foreground">
                        <div>• 너무 빠르거나 느린 애니메이션</div>
                        <div>• 중요한 정보를 기본적으로 숨김</div>
                        <div>• 너무 많은 중첩된 접기/펼치기</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용 사례별 패턴</CardTitle>
              <CardDescription>
                다양한 상황에 적합한 접기/펼치기 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">FAQ 및 도움말 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium">질문: 이 기능은 어떻게 사용하나요?</h5>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-muted-foreground pl-4 border-l-2 border-muted">
                      답변: 단계별 설명을 여기에 제공합니다.
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 질문은 명확하고 구체적으로</li>
                      <li>• 답변은 단계별로 구조화</li>
                      <li>• 관련 링크나 추가 자료 제공</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">설정 및 옵션 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5" />
                      <h5 className="font-medium">고급 설정</h5>
                      <ChevronDown className="h-4 w-4 ml-auto" />
                    </div>
                    <div className="pl-8 space-y-2">
                      <div className="text-sm">각종 설정 옵션들...</div>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 카테고리별로 그룹화</li>
                      <li>• 위험한 설정은 별도 확인</li>
                      <li>• 기본값으로 되돌리기 옵션</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">네비게이션 메뉴 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <Folder className="h-5 w-5" />
                      <h5 className="font-medium">메인 메뉴</h5>
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </div>
                    <div className="pl-8 border-l space-y-1">
                      <div className="text-sm">• 서브 메뉴 1</div>
                      <div className="text-sm">• 서브 메뉴 2</div>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 계층 구조가 명확해야 함</li>
                      <li>• 현재 위치 표시</li>
                      <li>• 최대 3단계 깊이 권장</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">데이터 상세 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium">주문 #12345</h5>
                        <div className="text-sm text-muted-foreground">2024년 6월 20일</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>처리 중</Badge>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="text-sm space-y-1 pl-4 border-l">
                      <div>상세 정보들...</div>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 요약 정보는 항상 표시</li>
                      <li>• 상태 정보 명확히 표시</li>
                      <li>• 관련 액션 버튼 제공</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성 및 상호작용 가이드</CardTitle>
              <CardDescription>
                모든 사용자가 접기/펼치기를 효과적으로 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">키보드 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Space/Enter로 토글</li>
                    <li>• Tab으로 네비게이션</li>
                    <li>• 화살표 키로 그룹 탐색</li>
                    <li>• Escape로 모든 접기</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">시각적 피드백</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 명확한 상태 표시 아이콘</li>
                    <li>• 부드러운 전환 애니메이션</li>
                    <li>• 호버 및 포커스 상태</li>
                    <li>• 일관된 스타일링</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• aria-expanded 속성</li>
                    <li>• 의미있는 라벨</li>
                    <li>• 상태 변경 알림</li>
                    <li>• 구조적 마크업</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">터치 디바이스</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 터치 영역 (44px+)</li>
                    <li>• 스와이프 제스처 지원</li>
                    <li>• 명확한 시각적 피드백</li>
                    <li>• 실수 방지 디자인</li>
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
                효과적인 Collapsible 사용을 위한 모범 사례
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
                    <li>• 명확하고 설명적인 트리거 라벨 사용</li>
                    <li>• 일관된 아이콘과 애니메이션 적용</li>
                    <li>• 적절한 기본 상태 설정 (주요 정보는 펼쳐짐)</li>
                    <li>• 키보드와 스크린 리더 접근성 보장</li>
                    <li>• 중첩 깊이를 3단계 이하로 제한</li>
                    <li>• 관련 콘텐츠끼리 논리적으로 그룹화</li>
                    <li>• 로딩 상태와 오류 상태 고려</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 중요한 정보를 기본적으로 숨기기</li>
                    <li>• 너무 많은 중첩된 접기/펼치기 구조</li>
                    <li>• 모호하거나 기술적인 라벨 사용</li>
                    <li>• 일관성 없는 상호작용 패턴</li>
                    <li>• 너무 빠르거나 느린 애니메이션</li>
                    <li>• 상태 표시 없는 트리거</li>
                    <li>• 접근성 속성 누락</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Collapsible을 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">ARIA 속성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code>aria-expanded</code> - 현재 펼쳐짐/접힘 상태</li>
                    <li>• <code>aria-controls</code> - 제어하는 콘텐츠 영역 연결</li>
                    <li>• <code>aria-labelledby</code> - 트리거와 콘텐츠 연결</li>
                    <li>• <code>role="button"</code> - 트리거 요소의 역할 명시</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd>Tab</kbd> - 다음 콜랩시블로 이동</li>
                    <li>• <kbd>Shift + Tab</kbd> - 이전 콜랩시블로 이동</li>
                    <li>• <kbd>Space</kbd> / <kbd>Enter</kbd> - 펼치기/접기 토글</li>
                    <li>• <kbd>Arrow Keys</kbd> - 그룹 내 탐색 (선택사항)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 의미있는 제목과 설명 제공</li>
                    <li>• 상태 변경 시 적절한 알림</li>
                    <li>• 구조적 마크업으로 계층 관계 표현</li>
                    <li>• 콘텐츠가 숨겨진 이유 설명</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 (최소 4.5:1)</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 상태를 나타내는 시각적 아이콘</li>
                    <li>• 애니메이션 감소 옵션 존중</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Collapsible 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• FAQ 및 도움말 섹션</li>
                    <li>• 설정 및 옵션 패널</li>
                    <li>• 네비게이션 메뉴</li>
                    <li>• 상세 정보 토글</li>
                    <li>• 필터 및 검색 옵션</li>
                    <li>• 데이터 상세 보기</li>
                    <li>• 단계별 가이드</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 방법</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Accordion:</strong> 여러 패널 중 하나만</li>
                    <li>• <strong>Tabs:</strong> 관련 콘텐츠 그룹</li>
                    <li>• <strong>Dialog:</strong> 모달 상세 정보</li>
                    <li>• <strong>Dropdown:</strong> 선택 옵션</li>
                    <li>• <strong>Popover:</strong> 간단한 추가 정보</li>
                    <li>• <strong>Sheet:</strong> 사이드 패널</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 중요한 주요 콘텐츠</li>
                    <li>• 단순한 표시/숨기기</li>
                    <li>• 복잡한 폼 입력</li>
                    <li>• 시간에 민감한 정보</li>
                    <li>• 과도하게 중첩된 구조</li>
                    <li>• 필수 네비게이션</li>
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
                Collapsible 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Collapsible 속성</h4>
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
                        <td className="p-2 font-mono">open</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">펼쳐짐/접힘 상태 제어</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultOpen</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">초기 상태 (비제어 모드)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onOpenChange</td>
                        <td className="p-2">(open: boolean) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">상태 변경 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">비활성화 상태</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">하위 컴포넌트</h4>
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
                        <td className="p-2 font-mono">CollapsibleTrigger</td>
                        <td className="p-2">펼치기/접기 트리거</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CollapsibleContent</td>
                        <td className="p-2">접히는 콘텐츠 영역</td>
                        <td className="p-2">필수</td>
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
                code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 접기/펼치기
const [isOpen, setIsOpen] = useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="outline" className="flex items-center justify-between w-full">
      추가 정보 보기
      <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-4">
    <div className="rounded-md border px-4 py-3 text-sm">
      여기에 접었다 펼 수 있는 콘텐츠가 표시됩니다.
    </div>
  </CollapsibleContent>
</Collapsible>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="비제어 컴포넌트"
                code={`// 기본 상태로 펼쳐져 있는 접기/펼치기
<Collapsible defaultOpen>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" className="flex items-center justify-between w-full">
      설정 옵션
      <ChevronDown className="h-4 w-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="space-y-2 mt-2">
      <div className="p-3 border rounded">옵션 1</div>
      <div className="p-3 border rounded">옵션 2</div>
    </div>
  </CollapsibleContent>
</Collapsible>`}
                codeKey="uncontrolled-usage"
              />

              <CodeBlock
                title="FAQ 스타일"
                code={`const faqs = [
  {
    question: "계정을 어떻게 생성하나요?",
    answer: "회원가입 페이지에서 이메일 주소와 비밀번호를 입력하여 계정을 생성할 수 있습니다."
  },
  // 더 많은 FAQ 항목들
]

{faqs.map((faq, index) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center justify-between w-full p-4 text-left border rounded-lg"
        >
          <span className="font-medium">{faq.question}</span>
          <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        <div className="text-sm text-muted-foreground">
          {faq.answer}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
})}`}
                codeKey="faq-implementation"
              />

              <CodeBlock
                title="네비게이션 메뉴"
                code={`const menuItems = [
  {
    title: "대시보드",
    icon: Home,
    items: [
      { label: "홈", icon: Home },
      { label: "분석", icon: BarChart3 },
      { label: "리포트", icon: FileText }
    ]
  },
  // 더 많은 메뉴 항목들
]

{menuItems.map((menu, index) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center justify-between w-full p-3 text-left"
        >
          <div className="flex items-center gap-3">
            <menu.icon className="h-4 w-4" />
            <span>{menu.title}</span>
          </div>
          <ChevronRight className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-90' : ''}\`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-6">
        <div className="space-y-1 border-l pl-4">
          {menu.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-center gap-3 p-2 rounded hover:bg-muted/50">
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
})}`}
                codeKey="navigation-implementation"
              />

              <CodeBlock
                title="접근성 향상"
                code={`// 완전한 접근성 지원
<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger 
    asChild
    aria-expanded={isOpen}
    aria-controls="collapsible-content"
  >
    <Button 
      variant="outline" 
      className="flex items-center justify-between w-full"
      id="collapsible-trigger"
    >
      <span>설정 옵션</span>
      <ChevronDown 
        className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`}
        aria-hidden="true" 
      />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent 
    id="collapsible-content"
    aria-labelledby="collapsible-trigger"
    role="region"
  >
    <div className="space-y-2 mt-4">
      <div className="p-3 border rounded">
        <label htmlFor="option1">옵션 1</label>
        <input id="option1" type="checkbox" className="ml-2" />
      </div>
      <div className="p-3 border rounded">
        <label htmlFor="option2">옵션 2</label>
        <input id="option2" type="checkbox" className="ml-2" />
      </div>
    </div>
  </CollapsibleContent>
</Collapsible>`}
                codeKey="accessibility-implementation"
              />

              <CodeBlock
                title="애니메이션 커스터마이징"
                code={`// CSS 변수를 사용한 애니메이션 커스터마이징
<Collapsible 
  open={isOpen} 
  onOpenChange={setIsOpen}
  className="[&[data-state=open]>div[data-slot=collapsible-content]]:animate-in [&[data-state=open]>div[data-slot=collapsible-content]]:slide-down-from-top-1 [&[data-state=closed]>div[data-slot=collapsible-content]]:animate-out [&[data-state=closed]>div[data-slot=collapsible-content]]:slide-up-to-top-1"
>
  <CollapsibleTrigger asChild>
    <Button variant="outline">
      커스텀 애니메이션
      <ChevronDown className={\`h-4 w-4 transition-transform duration-300 \${isOpen ? 'rotate-180' : ''}\`} />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="transition-all duration-300 ease-in-out">
    <div className="mt-4 p-4 border rounded-lg">
      부드러운 애니메이션과 함께 표시되는 콘텐츠입니다.
    </div>
  </CollapsibleContent>
</Collapsible>`}
                codeKey="animation-customization"
              />

              <CodeBlock
                title="다중 콜랩시블 관리"
                code={`// 여러 콜랩시블의 상태를 중앙에서 관리
function MultiCollapsibleManager() {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

  const toggleCollapsible = (id: string) => {
    setOpenStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const collapseAll = () => {
    setOpenStates({});
  };

  const expandAll = () => {
    const allOpen = sections.reduce((acc, section) => ({
      ...acc,
      [section.id]: true
    }), {});
    setOpenStates(allOpen);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button size="sm" onClick={expandAll}>모두 펼치기</Button>
        <Button size="sm" variant="outline" onClick={collapseAll}>모두 접기</Button>
      </div>
      
      {sections.map((section) => (
        <Collapsible 
          key={section.id}
          open={openStates[section.id] || false}
          onOpenChange={() => toggleCollapsible(section.id)}
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              {section.title}
              <ChevronDown className={\`h-4 w-4 transition-transform \${openStates[section.id] ? 'rotate-180' : ''}\`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-4 border rounded mt-2">
              {section.content}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}`}
                codeKey="multi-collapsible"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}