import React, { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
  PanelRightOpen,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  Settings,
  User,
  Menu,
  Plus,
  Edit,
  Trash2,
  Share2,
  Download,
  Upload,
  Search,
  Filter,
  Bell,
  HelpCircle,
  BookOpen,
  Star,
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap,
  Target,
  TrendingUp,
  Activity,
  BarChart3,
  DollarSign,
  Users,
  Globe,
  Image,
  Link,
  Tag,
  Bookmark,
  Flag,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  MoreHorizontal,
  MoreVertical,
  X,
  Save,
  Send,
  Folder,
  FileText,
  Calendar,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  History,
  Archive,
  Camera,
  Mic,
  Video,
  Printer,
  Wifi,
  Battery,
  Volume2,
  Bluetooth,
  Navigation,
  Layers,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

export function SheetComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // State for various sheet examples
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [createItemOpen, setCreateItemOpen] = useState(false);

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
            <PanelRightOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Sheet</h1>
            <p className="text-muted-foreground">
              화면 가장자리에서 슬라이드되어 나타나는 오버레이 패널입니다. 모바일 친화적이며 추가 정보나 액션을 표시하는 데 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <PanelRightOpen className="w-3 h-3" />
            슬라이드 패널
          </Badge>
          <Badge variant="outline">오버레이</Badge>
          <Badge variant="outline">모바일 친화적</Badge>
          <Badge variant="outline">방향 지정</Badge>
          <Badge variant="outline">접근성</Badge>
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
          {/* Basic Sheets */}
          <Card>
            <CardHeader>
              <CardTitle>기본 시트</CardTitle>
              <CardDescription>
                다양한 방향과 스타일의 기본 시트 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">방향별 시트</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>오른쪽에서 슬라이드 (기본)</Label>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <PanelRightOpen className="w-4 h-4 mr-2" />
                            오른쪽 시트
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>오른쪽 시트</SheetTitle>
                            <SheetDescription>
                              오른쪽에서 슬라이드되는 시트입니다.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="py-4">
                            <p className="text-sm text-muted-foreground">
                              여기에 시트의 내용이 들어갑니다. 사용자 정보, 설정, 또는 추가 액션을 포함할 수 있습니다.
                            </p>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button variant="outline">닫기</Button>
                            </SheetClose>
                            <Button>확인</Button>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>왼쪽에서 슬라이드</Label>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Menu className="w-4 h-4 mr-2" />
                            왼쪽 시트
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                          <SheetHeader>
                            <SheetTitle>왼쪽 시트</SheetTitle>
                            <SheetDescription>
                              왼쪽에서 슬라이드되는 시트입니다.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="py-4">
                            <div className="space-y-2">
                              <Button variant="ghost" className="w-full justify-start">
                                <User className="w-4 h-4 mr-2" />
                                프로필
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <Settings className="w-4 h-4 mr-2" />
                                설정
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <HelpCircle className="w-4 h-4 mr-2" />
                                도움말
                              </Button>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>

                    <div className="space-y-3">
                      <Label>위에서 슬라이드</Label>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Bell className="w-4 h-4 mr-2" />
                            위쪽 시트
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="top">
                          <SheetHeader>
                            <SheetTitle>위쪽 시트</SheetTitle>
                            <SheetDescription>
                              위에서 슬라이드되는 시트입니다.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="py-4">
                            <p className="text-sm text-muted-foreground">
                              알림이나 간단한 정보를 표시하는 데 적합합니다.
                            </p>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>

                    <div className="space-y-3">
                      <Label>아래에서 슬라이드</Label>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <MoreHorizontal className="w-4 h-4 mr-2" />
                            아래쪽 시트
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom">
                          <SheetHeader>
                            <SheetTitle>아래쪽 시트</SheetTitle>
                            <SheetDescription>
                              아래에서 슬라이드되는 시트입니다.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="py-4">
                            <p className="text-sm text-muted-foreground">
                              모바일에서 액션 시트나 선택 옵션을 표시하는 데 적합합니다.
                            </p>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">폼이 포함된 시트</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>새 항목 생성</Label>
                      <Sheet open={createItemOpen} onOpenChange={setCreateItemOpen}>
                        <SheetTrigger asChild>
                          <Button className="w-full">
                            <Plus className="w-4 h-4 mr-2" />
                            새 항목 만들기
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>새 프로젝트 만들기</SheetTitle>
                            <SheetDescription>
                              새로운 프로젝트를 생성합니다. 필요한 정보를 입력해주세요.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="project-name">프로젝트 이름</Label>
                              <Input id="project-name" placeholder="프로젝트 이름을 입력하세요" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="project-description">설명</Label>
                              <Textarea 
                                id="project-description" 
                                placeholder="프로젝트에 대한 설명을 입력하세요"
                                className="min-h-20"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="project-category">카테고리</Label>
                              <div className="grid grid-cols-2 gap-2">
                                <Button variant="outline" size="sm">웹 개발</Button>
                                <Button variant="outline" size="sm">모바일</Button>
                                <Button variant="outline" size="sm">디자인</Button>
                                <Button variant="outline" size="sm">마케팅</Button>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="public-project" />
                              <Label htmlFor="public-project">공개 프로젝트</Label>
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button variant="outline">취소</Button>
                            </SheetClose>
                            <Button onClick={() => setCreateItemOpen(false)}>
                              프로젝트 만들기
                            </Button>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>

                    <div className="space-y-3">
                      <Label>사용자 프로필</Label>
                      <Sheet open={userProfileOpen} onOpenChange={setUserProfileOpen}>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <Avatar className="w-6 h-6 mr-2">
                              <AvatarFallback>홍</AvatarFallback>
                            </Avatar>
                            홍길동
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>사용자 프로필</SheetTitle>
                            <SheetDescription>
                              프로필 정보를 확인하고 편집할 수 있습니다.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-6 py-4">
                            <div className="flex items-center space-x-4">
                              <Avatar className="w-16 h-16">
                                <AvatarFallback>홍길동</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-medium">홍길동</h3>
                                <p className="text-sm text-muted-foreground">hong@company.com</p>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="display-name">표시 이름</Label>
                                <Input id="display-name" defaultValue="홍길동" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">이메일</Label>
                                <Input id="email" type="email" defaultValue="hong@company.com" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="bio">자기소개</Label>
                                <Textarea 
                                  id="bio" 
                                  placeholder="자신에 대해 간단히 소개해주세요"
                                  className="min-h-20"
                                />
                              </div>
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button variant="outline">취소</Button>
                            </SheetClose>
                            <Button>저장</Button>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 시트 (오른쪽)
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">시트 열기</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>시트 제목</SheetTitle>
      <SheetDescription>
        시트에 대한 설명입니다.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p>시트의 내용이 여기에 들어갑니다.</p>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">닫기</Button>
      </SheetClose>
      <Button>확인</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// 다른 방향의 시트
<Sheet>
  <SheetTrigger asChild>
    <Button>왼쪽 시트</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>왼쪽 시트</SheetTitle>
      <SheetDescription>왼쪽에서 슬라이드됩니다.</SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <Button variant="ghost" className="w-full justify-start">
        <User className="w-4 h-4 mr-2" />
        프로필
      </Button>
    </div>
  </SheetContent>
</Sheet>

// 제어된 시트
const [open, setOpen] = useState(false);

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button>제어된 시트</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>제어된 시트</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <Button onClick={() => setOpen(false)}>
        프로그래밍 방식으로 닫기
      </Button>
    </div>
  </SheetContent>
</Sheet>

// 폼이 포함된 시트
<Sheet>
  <SheetTrigger asChild>
    <Button>새 항목 만들기</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>새 프로젝트 만들기</SheetTitle>
      <SheetDescription>
        새로운 프로젝트를 생성합니다.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">프로젝트 이름</Label>
        <Input id="name" placeholder="이름을 입력하세요" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">설명</Label>
        <Textarea id="description" placeholder="설명을 입력하세요" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">취소</Button>
      </SheetClose>
      <Button>만들기</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="basic-sheets"
              />
            </CardContent>
          </Card>

          {/* Interactive Examples */}
          <Card>
            <CardHeader>
              <CardTitle>실용적인 예제</CardTitle>
              <CardDescription>
                실제 사용 환경에서 활용되는 시트 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">설정 패널</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">애플리케이션 설정</h5>
                      <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Settings className="w-4 h-4 mr-2" />
                            설정 열기
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>설정</SheetTitle>
                            <SheetDescription>
                              애플리케이션 설정을 관리하세요.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-6 py-4">
                            <div className="space-y-4">
                              <h4 className="font-medium">일반</h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="notifications">알림</Label>
                                  <Switch id="notifications" defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="auto-save">자동 저장</Label>
                                  <Switch id="auto-save" defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="dark-mode">다크 모드</Label>
                                  <Switch id="dark-mode" />
                                </div>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <h4 className="font-medium">프라이버시</h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="analytics">분석 데이터 수집</Label>
                                  <Switch id="analytics" />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="public-profile">공개 프로필</Label>
                                  <Switch id="public-profile" defaultChecked />
                                </div>
                              </div>
                            </div>
                          </div>
                          <SheetFooter>
                            <SheetClose asChild>
                              <Button variant="outline">취소</Button>
                            </SheetClose>
                            <Button>설정 저장</Button>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">장바구니</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">쇼핑 카트</h5>
                      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full relative">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            장바구니
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                              3
                            </span>
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>장바구니 (3개 항목)</SheetTitle>
                            <SheetDescription>
                              선택한 상품들을 확인하고 주문하세요.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-4 py-4">
                            {[
                              { name: '노트북', price: '₩1,200,000', qty: 1 },
                              { name: '마우스', price: '₩80,000', qty: 2 },
                              { name: '키보드', price: '₩150,000', qty: 1 }
                            ].map((item, index) => (
                              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="space-y-1">
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-sm text-muted-foreground">수량: {item.qty}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">{item.price}</p>
                                </div>
                              </div>
                            ))}
                            <Separator />
                            <div className="flex justify-between font-medium">
                              <span>총 합계</span>
                              <span>₩1,580,000</span>
                            </div>
                          </div>
                          <SheetFooter className="flex-col gap-2">
                            <Button className="w-full">
                              <CreditCard className="w-4 h-4 mr-2" />
                              결제하기
                            </Button>
                            <SheetClose asChild>
                              <Button variant="outline" className="w-full">계속 쇼핑</Button>
                            </SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">알림 센터</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium">알림</h5>
                      <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
                        <SheetTrigger asChild>
                          <Button variant="outline" size="sm" className="relative">
                            <Bell className="w-4 h-4 mr-2" />
                            알림 보기
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>알림</SheetTitle>
                            <SheetDescription>
                              최근 알림을 확인하세요.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-3">
                              {[
                                {
                                  title: '새 메시지가 도착했습니다',
                                  description: '김철수님이 메시지를 보냈습니다.',
                                  time: '2분 전',
                                  unread: true
                                },
                                {
                                  title: '프로젝트가 완료되었습니다',
                                  description: '웹사이트 리뉴얼 프로젝트가 성공적으로 완료되었습니다.',
                                  time: '1시간 전',
                                  unread: true
                                },
                                {
                                  title: '시스템 업데이트',
                                  description: '새로운 기능이 추가되었습니다.',
                                  time: '1일 전',
                                  unread: false
                                }
                              ].map((notification, index) => (
                                <div key={index} className={`p-3 border rounded-lg ${notification.unread ? 'bg-blue-50 dark:bg-blue-950/20' : ''}`}>
                                  <div className="flex items-start justify-between">
                                    <div className="space-y-1 flex-1">
                                      <div className="flex items-center gap-2">
                                        <p className="font-medium text-sm">{notification.title}</p>
                                        {notification.unread && (
                                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        )}
                                      </div>
                                      <p className="text-xs text-muted-foreground">{notification.description}</p>
                                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <SheetFooter>
                            <Button variant="outline" className="w-full">
                              모든 알림 읽음 표시
                            </Button>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 설정 패널
<Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Settings className="w-4 h-4 mr-2" />
      설정 열기
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>설정</SheetTitle>
      <SheetDescription>
        애플리케이션 설정을 관리하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-6 py-4">
      <div className="space-y-4">
        <h4 className="font-medium">일반</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">알림</Label>
            <Switch id="notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-save">자동 저장</Label>
            <Switch id="auto-save" defaultChecked />
          </div>
        </div>
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">취소</Button>
      </SheetClose>
      <Button>설정 저장</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// 장바구니
<Sheet open={cartOpen} onOpenChange={setCartOpen}>
  <SheetTrigger asChild>
    <Button variant="outline" className="relative">
      <ShoppingCart className="w-4 h-4 mr-2" />
      장바구니
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
        3
      </span>
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>장바구니 (3개 항목)</SheetTitle>
      <SheetDescription>
        선택한 상품들을 확인하고 주문하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-4 py-4">
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="space-y-1">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">수량: {item.qty}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
    <SheetFooter className="flex-col gap-2">
      <Button className="w-full">
        <CreditCard className="w-4 h-4 mr-2" />
        결제하기
      </Button>
      <SheetClose asChild>
        <Button variant="outline" className="w-full">계속 쇼핑</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>

// 알림 센터
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" className="relative">
      <Bell className="w-4 h-4 mr-2" />
      알림 보기
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>알림</SheetTitle>
      <SheetDescription>
        최근 알림을 확인하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-4 py-4">
      {notifications.map((notification, index) => (
        <div key={index} className="p-3 border rounded-lg">
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm">{notification.title}</p>
            {notification.unread && (
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{notification.description}</p>
        </div>
      ))}
    </div>
    <SheetFooter>
      <Button variant="outline" className="w-full">
        모든 알림 읽음 표시
      </Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="interactive-examples"
              />
            </CardContent>
          </Card>

          {/* Advanced Examples */}
          <Card>
            <CardHeader>
              <CardTitle>고급 예제</CardTitle>
              <CardDescription>
                복잡한 레이아웃과 인터랙션이 포함된 시트 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">필터 패널</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">고급 필터</h5>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Filter className="w-4 h-4 mr-2" />
                            필터 열기
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>고급 필터</SheetTitle>
                            <SheetDescription>
                              상세한 필터 조건을 설정하세요.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-6 py-4">
                            <div className="space-y-4">
                              <h4 className="font-medium">카테고리</h4>
                              <div className="space-y-2">
                                {['전자제품', '의류', '도서', '스포츠', '뷰티'].map((category) => (
                                  <div key={category} className="flex items-center space-x-2">
                                    <input type="checkbox" id={category} className="rounded" />
                                    <Label htmlFor={category}>{category}</Label>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <h4 className="font-medium">가격 범위</h4>
                              <div className="space-y-2">
                                <div className="flex gap-2">
                                  <Input placeholder="최소 금액" />
                                  <Input placeholder="최대 금액" />
                                </div>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <h4 className="font-medium">평점</h4>
                              <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                  <div key={rating} className="flex items-center space-x-2">
                                    <input type="radio" name="rating" id={`rating-${rating}`} />
                                    <Label htmlFor={`rating-${rating}`}>
                                      {rating}점 이상 
                                      <span className="ml-1">
                                        {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
                                      </span>
                                    </Label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <SheetFooter className="flex-col gap-2">
                            <Button className="w-full">필터 적용</Button>
                            <Button variant="outline" className="w-full">초기화</Button>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">대시보드 위젯</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">분석 데이터</h5>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            상세 분석
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>상세 분석 데이터</SheetTitle>
                            <SheetDescription>
                              전체 분석 데이터를 확인하세요.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="space-y-6 py-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-3 border rounded-lg text-center">
                                <div className="text-2xl font-bold">2.4K</div>
                                <div className="text-sm text-muted-foreground">총 사용자</div>
                              </div>
                              <div className="p-3 border rounded-lg text-center">
                                <div className="text-2xl font-bold">₩1.2M</div>
                                <div className="text-sm text-muted-foreground">총 매출</div>
                              </div>
                              <div className="p-3 border rounded-lg text-center">
                                <div className="text-2xl font-bold">89%</div>
                                <div className="text-sm text-muted-foreground">만족도</div>
                              </div>
                              <div className="p-3 border rounded-lg text-center">
                                <div className="text-2xl font-bold">567</div>
                                <div className="text-sm text-muted-foreground">주문 수</div>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <h4 className="font-medium">최근 활동</h4>
                              <div className="space-y-2">
                                {[
                                  '새 사용자 10명 가입',
                                  '주문 15건 접수',
                                  '리뷰 8개 등록',
                                  '문의 3건 접수'
                                ].map((activity, index) => (
                                  <div key={index} className="flex items-center gap-2 p-2 text-sm">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>{activity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <SheetFooter>
                            <Button className="w-full">
                              <Download className="w-4 h-4 mr-2" />
                              보고서 다운로드
                            </Button>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">모바일 네비게이션</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="space-y-4">
                    <h5 className="font-medium">모바일 메뉴</h5>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <Menu className="w-4 h-4 mr-2" />
                          메뉴 열기
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-80">
                        <SheetHeader>
                          <SheetTitle>메뉴</SheetTitle>
                          <SheetDescription>
                            애플리케이션의 모든 기능에 접근하세요.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="space-y-6 py-4">
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                              주요 메뉴
                            </h4>
                            <div className="space-y-1">
                              <Button variant="ghost" className="w-full justify-start">
                                <User className="w-4 h-4 mr-2" />
                                대시보드
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <Folder className="w-4 h-4 mr-2" />
                                프로젝트
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <Users className="w-4 h-4 mr-2" />
                                팀
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <BarChart3 className="w-4 h-4 mr-2" />
                                분석
                              </Button>
                            </div>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                              도구
                            </h4>
                            <div className="space-y-1">
                              <Button variant="ghost" className="w-full justify-start">
                                <Calendar className="w-4 h-4 mr-2" />
                                캘린더
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <FileText className="w-4 h-4 mr-2" />
                                문서
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                메시지
                              </Button>
                            </div>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                              계정
                            </h4>
                            <div className="space-y-1">
                              <Button variant="ghost" className="w-full justify-start">
                                <Settings className="w-4 h-4 mr-2" />
                                설정
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <HelpCircle className="w-4 h-4 mr-2" />
                                도움말
                              </Button>
                            </div>
                          </div>
                        </div>
                        <SheetFooter>
                          <div className="w-full space-y-2">
                            <div className="flex items-center gap-3 p-3 border rounded-lg">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback>홍</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <p className="text-sm font-medium">홍길동</p>
                                <p className="text-xs text-muted-foreground">hong@company.com</p>
                              </div>
                            </div>
                            <Button variant="outline" className="w-full">
                              로그아웃
                            </Button>
                          </div>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 필터 패널
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Filter className="w-4 h-4 mr-2" />
      필터 열기
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>고급 필터</SheetTitle>
      <SheetDescription>
        상세한 필터 조건을 설정하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-6 py-4">
      <div className="space-y-4">
        <h4 className="font-medium">카테고리</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <input type="checkbox" id={category} />
              <Label htmlFor={category}>{category}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div className="space-y-4">
        <h4 className="font-medium">가격 범위</h4>
        <div className="flex gap-2">
          <Input placeholder="최소 금액" />
          <Input placeholder="최대 금액" />
        </div>
      </div>
    </div>
    <SheetFooter className="flex-col gap-2">
      <Button className="w-full">필터 적용</Button>
      <Button variant="outline" className="w-full">초기화</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// 모바일 네비게이션
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Menu className="w-4 h-4 mr-2" />
      메뉴 열기
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="w-80">
    <SheetHeader>
      <SheetTitle>메뉴</SheetTitle>
      <SheetDescription>
        애플리케이션의 모든 기능에 접근하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <h4 className="font-medium text-sm text-muted-foreground">
          주요 메뉴
        </h4>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <User className="w-4 h-4 mr-2" />
            대시보드
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Folder className="w-4 h-4 mr-2" />
            프로젝트
          </Button>
        </div>
      </div>
    </div>
    <SheetFooter>
      <Button variant="outline" className="w-full">로그아웃</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// 대시보드 분석
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <BarChart3 className="w-4 h-4 mr-2" />
      상세 분석
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>상세 분석 데이터</SheetTitle>
      <SheetDescription>
        전체 분석 데이터를 확인하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-3 border rounded-lg text-center">
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
    <SheetFooter>
      <Button className="w-full">
        <Download className="w-4 h-4 mr-2" />
        보고서 다운로드
      </Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="advanced-examples"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>시트 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 시트 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Settings className="w-4 h-4 mr-2" />
                              명확한 트리거
                            </Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>설정</SheetTitle>
                              <SheetDescription>
                                명확한 제목과 설명을 제공합니다.
                              </SheetDescription>
                            </SheetHeader>
                            <div className="py-4">
                              <p className="text-sm text-muted-foreground">
                                내용에 대한 명확한 설명이 있습니다.
                              </p>
                            </div>
                          </SheetContent>
                        </Sheet>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 명확한 트리거와 제목/설명</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">적절한 폭</Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>적절한 크기</SheetTitle>
                            </SheetHeader>
                            <div className="py-4">
                              <p className="text-sm text-muted-foreground">
                                내용에 맞는 적절한 크기입니다.
                              </p>
                            </div>
                          </SheetContent>
                        </Sheet>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 내용에 맞는 적절한 크기</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">명확한 액션</Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>작업 완료</SheetTitle>
                            </SheetHeader>
                            <div className="py-4">
                              <p className="text-sm">작업을 수행하세요.</p>
                            </div>
                            <SheetFooter>
                              <Button variant="outline">취소</Button>
                              <Button>확인</Button>
                            </SheetFooter>
                          </SheetContent>
                        </Sheet>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 명확한 액션 버튼</p>
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
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">열기</Button>
                          </SheetTrigger>
                          <SheetContent>
                            <div className="py-4">
                              <p className="text-sm">
                                이 시트는 제목도 설명도 없어서 무엇을 하는지 알 수 없습니다.
                              </p>
                            </div>
                          </SheetContent>
                        </Sheet>
                      </div>
                      <p className="text-xs text-red-600">✗ 제목과 설명 없음</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">너무 많은 내용</Button>
                          </SheetTrigger>
                          <SheetContent>
                            <div className="py-4 space-y-2">
                              <p className="text-xs">
                                이 시트는 너무 많은 정보를 포함하고 있어서 사용자가 혼란스러워할 수 있습니다. 
                                시트는 간결하고 집중된 작업을 위해 사용해야 합니다.
                              </p>
                            </div>
                          </SheetContent>
                        </Sheet>
                      </div>
                      <p className="text-xs text-red-600">✗ 과도한 정보</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">닫기 어려움</Button>
                          </SheetTrigger>
                          <SheetContent>
                            <div className="py-4">
                              <p className="text-sm">닫기 방법이 명확하지 않습니다.</p>
                            </div>
                          </SheetContent>
                        </Sheet>
                      </div>
                      <p className="text-xs text-red-600">✗ 불명확한 닫기 방법</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용 컨텍스트별 패턴</CardTitle>
              <CardDescription>
                다양한 사용 상황에 맞는 시트 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">네비게이션</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full">
                          <Menu className="w-4 h-4 mr-2" />
                          메뉴
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                        <SheetHeader>
                          <SheetTitle>네비게이션</SheetTitle>
                        </SheetHeader>
                        <div className="py-4 space-y-2">
                          <Button variant="ghost" className="w-full justify-start" size="sm">
                            <User className="w-3 h-3 mr-2" />
                            대시보드
                          </Button>
                          <Button variant="ghost" className="w-full justify-start" size="sm">
                            <Settings className="w-3 h-3 mr-2" />
                            설정
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                    <p className="text-xs text-muted-foreground">
                      • 왼쪽에서 슬라이드<br/>
                      • 모바일 친화적<br/>
                      • 계층 구조 표시
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">폼 입력</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full">
                          <Plus className="w-4 h-4 mr-2" />
                          생성
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>새 항목</SheetTitle>
                        </SheetHeader>
                        <div className="py-4 space-y-2">
                          <Label className="text-xs">이름</Label>
                          <Input size={null} className="h-7 text-xs" />
                        </div>
                        <SheetFooter>
                          <Button size="sm">생성</Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                    <p className="text-xs text-muted-foreground">
                      • 오른쪽에서 슬라이드<br/>
                      • 폼 요소 포함<br/>
                      • 명확한 액션
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">정보 표시</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full">
                          <Info className="w-4 h-4 mr-2" />
                          상세보기
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>상세 정보</SheetTitle>
                        </SheetHeader>
                        <div className="py-4">
                          <p className="text-xs text-muted-foreground">
                            상세한 정보를 표시합니다.
                          </p>
                        </div>
                      </SheetContent>
                    </Sheet>
                    <p className="text-xs text-muted-foreground">
                      • 읽기 전용<br/>
                      • 구조화된 정보<br/>
                      • 스크롤 가능
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>방향별 사용 패턴</CardTitle>
              <CardDescription>
                시트의 방향에 따른 최적 사용 사례입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">수평 시트 (좌/우)</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" size="sm">왼쪽</Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                          <SheetHeader>
                            <SheetTitle>왼쪽 시트</SheetTitle>
                          </SheetHeader>
                          <div className="py-4">
                            <p className="text-sm">네비게이션에 적합</p>
                          </div>
                        </SheetContent>
                      </Sheet>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" size="sm">오른쪽</Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                          <SheetHeader>
                            <SheetTitle>오른쪽 시트</SheetTitle>
                          </SheetHeader>
                          <div className="py-4">
                            <p className="text-sm">상세 정보에 적합</p>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 왼쪽: 메뉴, 네비게이션<br/>
                      • 오른쪽: 상세 정보, 폼<br/>
                      • 세로 공간 최대 활용
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">수직 시트 (상/하)</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" size="sm">위쪽</Button>
                        </SheetTrigger>
                        <SheetContent side="top">
                          <SheetHeader>
                            <SheetTitle>위쪽 시트</SheetTitle>
                          </SheetHeader>
                          <div className="py-4">
                            <p className="text-sm">알림에 적합</p>
                          </div>
                        </SheetContent>
                      </Sheet>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" size="sm">아래쪽</Button>
                        </SheetTrigger>
                        <SheetContent side="bottom">
                          <SheetHeader>
                            <SheetTitle>아래쪽 시트</SheetTitle>
                          </SheetHeader>
                          <div className="py-4">
                            <p className="text-sm">액션 시트에 적합</p>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 위쪽: 알림, 간단한 정보<br/>
                      • 아래쪽: 액션 시트, 선택 옵션<br/>
                      • 가로 공간 최대 활용
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
                효과적인 Sheet 사용을 위한 모범 사례
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
                    <li>• 명확한 제목과 설명 제공</li>
                    <li>• 내용에 맞는 적절한 방향 선택</li>
                    <li>• 간결하고 집중된 작업 수행</li>
                    <li>• 명확한 닫기 방법 제공</li>
                    <li>• 모바일 친화적 디자인</li>
                    <li>• 키보드 및 터치 지원</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 과도한 정보나 복잡한 레이아웃</li>
                    <li>• 애매한 트리거나 제목</li>
                    <li>• 시트 안에 시트 중첩</li>
                    <li>• 너무 작거나 큰 크기</li>
                    <li>• 중요한 정보를 시트에만 배치</li>
                    <li>• 데스크톱에서 부적절한 사용</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Sheet를 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Space/Enter</kbd> 시트 열기</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Escape</kbd> 시트 닫기</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> 시트 내 요소 간 이동</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Shift+Tab</kbd> 역방향 이동</li>
                    <li>• 오버레이 클릭 시 자동 닫기</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 적절한 role 속성 설정</li>
                    <li>• aria-labelledby로 제목 연결</li>
                    <li>• aria-describedby로 설명 연결</li>
                    <li>• 포커스 관리 및 트랩</li>
                    <li>• 열림/닫힘 상태 알림</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 적절한 오버레이 투명도</li>
                    <li>• 터치 친화적 크기</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Sheet 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 모바일 네비게이션</li>
                    <li>• 간단한 폼 입력</li>
                    <li>• 상세 정보 표시</li>
                    <li>• 설정 패널</li>
                    <li>• 필터링 옵션</li>
                    <li>• 알림 목록</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 표현</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Dialog:</strong> 중요한 액션이나 확인</li>
                    <li>• <strong>Popover:</strong> 간단한 정보나 메뉴</li>
                    <li>• <strong>Drawer:</strong> 유사하지만 다른 스타일</li>
                    <li>• <strong>Sidebar:</strong> 고정된 사이드 패널</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 복잡한 다단계 폼</li>
                    <li>• 중요한 경고나 확인</li>
                    <li>• 주요 콘텐츠 영역</li>
                    <li>• 긴 문서나 글</li>
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
                Sheet 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Sheet 속성</h4>
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
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 열림 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultOpen</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">기본 열림 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onOpenChange</td>
                        <td className="p-2">(open: boolean) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">상태 변경 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">modal</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">true</td>
                        <td className="p-2">모달 모드</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">SheetContent 속성</h4>
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
                        <td className="p-2 font-mono">side</td>
                        <td className="p-2">"top" | "right" | "bottom" | "left"</td>
                        <td className="p-2">"right"</td>
                        <td className="p-2">시트가 나타나는 방향</td>
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
                code={`import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "./components/ui/sheet"
import { Button } from "./components/ui/button"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 시트
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">시트 열기</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>시트 제목</SheetTitle>
      <SheetDescription>
        시트에 대한 설명입니다.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p>시트의 내용이 여기에 들어갑니다.</p>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">닫기</Button>
      </SheetClose>
      <Button>확인</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="제어된 시트"
                code={`const [open, setOpen] = useState(false);

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button>제어된 시트</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>제어된 시트</SheetTitle>
      <SheetDescription>
        프로그래밍 방식으로 제어됩니다.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <Button onClick={() => setOpen(false)}>
        프로그래밍 방식으로 닫기
      </Button>
    </div>
  </SheetContent>
</Sheet>`}
                codeKey="controlled-sheet"
              />

              <CodeBlock
                title="방향별 시트"
                code={`// 왼쪽에서 슬라이드
<Sheet>
  <SheetTrigger asChild>
    <Button>왼쪽 시트</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>왼쪽 시트</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <Button variant="ghost" className="w-full justify-start">
        <User className="w-4 h-4 mr-2" />
        프로필
      </Button>
    </div>
  </SheetContent>
</Sheet>

// 위에서 슬라이드
<Sheet>
  <SheetTrigger asChild>
    <Button>위쪽 시트</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>위쪽 시트</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <p>알림이나 간단한 정보 표시</p>
    </div>
  </SheetContent>
</Sheet>

// 아래에서 슬라이드
<Sheet>
  <SheetTrigger asChild>
    <Button>아래쪽 시트</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>아래쪽 시트</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <p>액션 시트나 선택 옵션</p>
    </div>
  </SheetContent>
</Sheet>`}
                codeKey="directional-sheets"
              />

              <CodeBlock
                title="폼이 포함된 시트"
                code={`<Sheet>
  <SheetTrigger asChild>
    <Button>새 항목 만들기</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>새 프로젝트 만들기</SheetTitle>
      <SheetDescription>
        새로운 프로젝트를 생성합니다.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">프로젝트 이름</Label>
        <Input id="name" placeholder="이름을 입력하세요" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">설명</Label>
        <Textarea 
          id="description" 
          placeholder="설명을 입력하세요"
          className="min-h-20"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="public" />
        <Label htmlFor="public">공개 프로젝트</Label>
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">취소</Button>
      </SheetClose>
      <Button>프로젝트 만들기</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="form-sheet"
              />

              <CodeBlock
                title="설정 패널"
                code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Settings className="w-4 h-4 mr-2" />
      설정
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>설정</SheetTitle>
      <SheetDescription>
        애플리케이션 설정을 관리하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-6 py-4">
      <div className="space-y-4">
        <h4 className="font-medium">일반</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">알림</Label>
            <Switch id="notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-save">자동 저장</Label>
            <Switch id="auto-save" defaultChecked />
          </div>
        </div>
      </div>
      <Separator />
      <div className="space-y-4">
        <h4 className="font-medium">프라이버시</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="analytics">분석 데이터 수집</Label>
            <Switch id="analytics" />
          </div>
        </div>
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">취소</Button>
      </SheetClose>
      <Button>설정 저장</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="settings-sheet"
              />

              <CodeBlock
                title="모바일 네비게이션"
                code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Menu className="w-4 h-4 mr-2" />
      메뉴
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="w-80">
    <SheetHeader>
      <SheetTitle>메뉴</SheetTitle>
      <SheetDescription>
        애플리케이션의 모든 기능에 접근하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <h4 className="font-medium text-sm text-muted-foreground">
          주요 메뉴
        </h4>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <User className="w-4 h-4 mr-2" />
            대시보드
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Folder className="w-4 h-4 mr-2" />
            프로젝트
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="w-4 h-4 mr-2" />
            팀
          </Button>
        </div>
      </div>
    </div>
    <SheetFooter>
      <div className="w-full">
        <Button variant="outline" className="w-full">로그아웃</Button>
      </div>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="mobile-nav"
              />

              <CodeBlock
                title="장바구니"
                code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" className="relative">
      <ShoppingCart className="w-4 h-4 mr-2" />
      장바구니
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
        3
      </span>
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>장바구니 (3개 항목)</SheetTitle>
      <SheetDescription>
        선택한 상품들을 확인하고 주문하세요.
      </SheetDescription>
    </SheetHeader>
    <div className="space-y-4 py-4">
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="space-y-1">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">수량: {item.qty}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{item.price}</p>
          </div>
        </div>
      ))}
      <Separator />
      <div className="flex justify-between font-medium">
        <span>총 합계</span>
        <span>₩1,580,000</span>
      </div>
    </div>
    <SheetFooter className="flex-col gap-2">
      <Button className="w-full">
        <CreditCard className="w-4 h-4 mr-2" />
        결제하기
      </Button>
      <SheetClose asChild>
        <Button variant="outline" className="w-full">계속 쇼핑</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
                codeKey="cart-sheet"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}