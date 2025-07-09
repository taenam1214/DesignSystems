import React, { useState } from 'react';
import { 
  Command, 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandShortcut, 
  CommandSeparator 
} from '../ui/command';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { 
  Search,
  Copy,
  Check,
  CheckCircle,
  AlertTriangle,
  Info,
  Terminal,
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  Users,
  Mail,
  MessageSquare,
  File,
  FileText,
  Folder,
  FolderPlus,
  Home,
  Building,
  Briefcase,
  ShoppingCart,
  Package,
  Truck,
  MapPin,
  Clock,
  Bell,
  Star,
  Heart,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Link,
  Share2,
  Download,
  Upload,
  Save,
  Archive,
  Trash2,
  Edit,
  Plus,
  Minus,
  X,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Image,
  Video,
  Music,
  Camera,
  Mic,
  Phone,
  Globe,
  Wifi,
  Battery,
  Zap,
  Sun,
  Moon,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  Coffee,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Award,
  Trophy,
  Target,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Database,
  Server,
  Cloud,
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  HelpCircle,
  MoreHorizontal,
  Filter,
  Grid,
  List,
  Layout,
  Layers,
  Navigation,
  Compass,
  Map,
  Route,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Gift,
  Sparkles,
  Crown,
  Flame,
  Rainbow,
  Snowflake,
  Droplet,
  Wind,
  Sunrise,
  Sunset
} from 'lucide-react';

export function CommandComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
            <Search className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Command</h1>
            <p className="text-muted-foreground">
              키보드로 탐색할 수 있는 명령 팔레트 컴포넌트입니다. 검색, 필터링, 액션 실행을 위한 빠르고 접근 가능한 인터페이스를 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Search className="w-3 h-3" />
            검색
          </Badge>
          <Badge variant="outline">키보드 네비게이션</Badge>
          <Badge variant="outline">명령 팔레트</Badge>
          <Badge variant="outline">필터링</Badge>
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
          {/* Basic Command */}
          <Card>
            <CardHeader>
              <CardTitle>기본 명령 팔레트</CardTitle>
              <CardDescription>
                기본적인 명령 팔레트 컴포넌트입니다. 검색과 키보드 네비게이션을 지원합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-md">
                <Command>
                  <CommandInput placeholder="명령어를 검색하세요..." />
                  <CommandList>
                    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
                    <CommandGroup heading="제안">
                      <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>캘린더</span>
                      </CommandItem>
                      <CommandItem>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>계산기</span>
                      </CommandItem>
                      <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>카드 관리</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="설정">
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>프로필</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>설정</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>

              <CodeBlock
                code={`import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandShortcut, 
  CommandSeparator 
} from "./components/ui/command"

// 기본 명령 팔레트
<Command>
  <CommandInput placeholder="명령어를 검색하세요..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="제안">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>캘린더</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>계산기</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="설정">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>프로필</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>설정</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="basic-command"
              />
            </CardContent>
          </Card>

          {/* Command Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>명령 다이얼로그</CardTitle>
              <CardDescription>
                모달 형태의 명령 팔레트입니다. 키보드 단축키로 열고 닫을 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Button onClick={() => setOpen(true)}>
                  명령 팔레트 열기
                </Button>
                <p className="text-sm text-muted-foreground">
                  또는 <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </p>
              </div>

              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="명령어나 검색어를 입력하세요..." />
                <CommandList>
                  <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
                  <CommandGroup heading="제안">
                    <CommandItem>
                      <File className="mr-2 h-4 w-4" />
                      <span>새 파일</span>
                      <CommandShortcut>⌘N</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <FolderPlus className="mr-2 h-4 w-4" />
                      <span>새 폴더</span>
                      <CommandShortcut>⌘⇧N</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Search className="mr-2 h-4 w-4" />
                      <span>파일 검색</span>
                      <CommandShortcut>⌘F</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="빠른 액션">
                    <CommandItem>
                      <Save className="mr-2 h-4 w-4" />
                      <span>저장</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Download className="mr-2 h-4 w-4" />
                      <span>다운로드</span>
                      <CommandShortcut>⌘D</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Share2 className="mr-2 h-4 w-4" />
                      <span>공유</span>
                      <CommandShortcut>⌘⇧S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="팀">
                    <CommandItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>팀 멤버</span>
                    </CommandItem>
                    <CommandItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>채팅</span>
                    </CommandItem>
                    <CommandItem>
                      <Bell className="mr-2 h-4 w-4" />
                      <span>알림</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>

              <CodeBlock
                code={`import { CommandDialog } from "./components/ui/command"

// 명령 다이얼로그
const [open, setOpen] = useState(false)

// 키보드 이벤트 리스너 추가
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="명령어나 검색어를 입력하세요..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="제안">
      <CommandItem>
        <File className="mr-2 h-4 w-4" />
        <span>새 파일</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
                codeKey="command-dialog"
              />
            </CardContent>
          </Card>

          {/* Search Interface */}
          <Card>
            <CardHeader>
              <CardTitle>검색 인터페이스</CardTitle>
              <CardDescription>
                다양한 콘텐츠 유형을 검색할 수 있는 인터페이스입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-md">
                <Command>
                  <CommandInput placeholder="파일, 사용자, 프로젝트 검색..." />
                  <CommandList>
                    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
                    <CommandGroup heading="파일">
                      <CommandItem>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>프로젝트 계획서.docx</span>
                        <CommandShortcut>문서</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Image className="mr-2 h-4 w-4" />
                        <span>디자인_mockup.png</span>
                        <CommandShortcut>이미지</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Video className="mr-2 h-4 w-4" />
                        <span>프레젠테이션_비디오.mp4</span>
                        <CommandShortcut>비디오</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="사용자">
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>김민수</span>
                        <CommandShortcut>개발자</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>이수진</span>
                        <CommandShortcut>디자이너</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>박철민</span>
                        <CommandShortcut>PM</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="프로젝트">
                      <CommandItem>
                        <Folder className="mr-2 h-4 w-4" />
                        <span>웹사이트 리뉴얼</span>
                        <CommandShortcut>진행 중</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Folder className="mr-2 h-4 w-4" />
                        <span>모바일 앱 개발</span>
                        <CommandShortcut>계획</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Folder className="mr-2 h-4 w-4" />
                        <span>브랜딩 가이드</span>
                        <CommandShortcut>완료</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>

              <CodeBlock
                code={`// 검색 인터페이스
<Command>
  <CommandInput placeholder="파일, 사용자, 프로젝트 검색..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="파일">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>프로젝트 계획서.docx</span>
        <CommandShortcut>문서</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="사용자">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>김민수</span>
        <CommandShortcut>개발자</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="프로젝트">
      <CommandItem>
        <Folder className="mr-2 h-4 w-4" />
        <span>웹사이트 리뉴얼</span>
        <CommandShortcut>진행 중</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="search-interface"
              />
            </CardContent>
          </Card>

          {/* Application Launcher */}
          <Card>
            <CardHeader>
              <CardTitle>애플리케이션 런처</CardTitle>
              <CardDescription>
                다양한 앱과 도구를 빠르게 실행할 수 있는 런처입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-md">
                <Command>
                  <CommandInput placeholder="앱 이름을 입력하세요..." />
                  <CommandList>
                    <CommandEmpty>해당하는 앱이 없습니다.</CommandEmpty>
                    <CommandGroup heading="자주 사용하는 앱">
                      <CommandItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>메일</span>
                        <CommandShortcut>⌘M</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>캘린더</span>
                        <CommandShortcut>⌘C</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>메신저</span>
                        <CommandShortcut>⌘T</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>문서</span>
                        <CommandShortcut>⌘D</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="생산성 도구">
                      <CommandItem>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>계산기</span>
                      </CommandItem>
                      <CommandItem>
                        <Terminal className="mr-2 h-4 w-4" />
                        <span>터미널</span>
                      </CommandItem>
                      <CommandItem>
                        <BarChart3 className="mr-2 h-4 w-4" />
                        <span>분석 도구</span>
                      </CommandItem>
                      <CommandItem>
                        <Database className="mr-2 h-4 w-4" />
                        <span>데이터베이스</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="미디어">
                      <CommandItem>
                        <Camera className="mr-2 h-4 w-4" />
                        <span>카메라</span>
                      </CommandItem>
                      <CommandItem>
                        <Music className="mr-2 h-4 w-4" />
                        <span>음악</span>
                      </CommandItem>
                      <CommandItem>
                        <Video className="mr-2 h-4 w-4" />
                        <span>비디오</span>
                      </CommandItem>
                      <CommandItem>
                        <Image className="mr-2 h-4 w-4" />
                        <span>이미지 편집</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>

              <CodeBlock
                code={`// 애플리케이션 런처
<Command>
  <CommandInput placeholder="앱 이름을 입력하세요..." />
  <CommandList>
    <CommandEmpty>해당하는 앱이 없습니다.</CommandEmpty>
    <CommandGroup heading="자주 사용하는 앱">
      <CommandItem>
        <Mail className="mr-2 h-4 w-4" />
        <span>메일</span>
        <CommandShortcut>⌘M</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>캘린더</span>
        <CommandShortcut>⌘C</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="생산성 도구">
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>계산기</span>
      </CommandItem>
      <CommandItem>
        <Terminal className="mr-2 h-4 w-4" />
        <span>터미널</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="app-launcher"
              />
            </CardContent>
          </Card>

          {/* Navigation Menu */}
          <Card>
            <CardHeader>
              <CardTitle>네비게이션 메뉴</CardTitle>
              <CardDescription>
                복잡한 앱의 네비게이션을 위한 명령 팔레트입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border rounded-md">
                <Command>
                  <CommandInput placeholder="페이지나 기능을 검색하세요..." />
                  <CommandList>
                    <CommandEmpty>해당하는 페이지가 없습니다.</CommandEmpty>
                    <CommandGroup heading="대시보드">
                      <CommandItem>
                        <Home className="mr-2 h-4 w-4" />
                        <span>홈 대시보드</span>
                        <CommandShortcut>⌘H</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <BarChart3 className="mr-2 h-4 w-4" />
                        <span>분석</span>
                        <CommandShortcut>⌘A</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <TrendingUp className="mr-2 h-4 w-4" />
                        <span>성과 리포트</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="프로젝트 관리">
                      <CommandItem>
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>프로젝트 목록</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>팀 관리</span>
                        <CommandShortcut>⌘T</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Clock className="mr-2 h-4 w-4" />
                        <span>시간 추적</span>
                      </CommandItem>
                      <CommandItem>
                        <Target className="mr-2 h-4 w-4" />
                        <span>목표 설정</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="고객 관리">
                      <CommandItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>고객 목록</span>
                        <CommandShortcut>⌘U</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>이메일 캠페인</span>
                      </CommandItem>
                      <CommandItem>
                        <Phone className="mr-2 h-4 w-4" />
                        <span>통화 기록</span>
                      </CommandItem>
                      <CommandItem>
                        <Star className="mr-2 h-4 w-4" />
                        <span>리뷰 관리</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="설정">
                      <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>일반 설정</span>
                        <CommandShortcut>⌘,</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Shield className="mr-2 h-4 w-4" />
                        <span>보안 설정</span>
                      </CommandItem>
                      <CommandItem>
                        <Bell className="mr-2 h-4 w-4" />
                        <span>알림 설정</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>

              <CodeBlock
                code={`// 네비게이션 메뉴
<Command>
  <CommandInput placeholder="페이지나 기능을 검색하세요..." />
  <CommandList>
    <CommandEmpty>해당하는 페이지가 없습니다.</CommandEmpty>
    <CommandGroup heading="대시보드">
      <CommandItem>
        <Home className="mr-2 h-4 w-4" />
        <span>홈 대시보드</span>
        <CommandShortcut>⌘H</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <BarChart3 className="mr-2 h-4 w-4" />
        <span>분석</span>
        <CommandShortcut>⌘A</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="프로젝트 관리">
      <CommandItem>
        <Briefcase className="mr-2 h-4 w-4" />
        <span>프로젝트 목록</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Users className="mr-2 h-4 w-4" />
        <span>팀 관리</span>
        <CommandShortcut>⌘T</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="navigation-menu"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>명령 팔레트 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 Command 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                      <div className="flex items-center gap-2 mb-2">
                        <Search className="h-4 w-4" />
                        <span className="text-sm font-medium">명확한 검색 플레이스홀더</span>
                      </div>
                      <p className="text-xs text-muted-foreground">사용자가 무엇을 검색할 수 있는지 명확히 안내</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal className="h-4 w-4" />
                        <span className="text-sm font-medium">키보드 단축키 표시</span>
                      </div>
                      <p className="text-xs text-muted-foreground">자주 사용하는 기능에 단축키 제공</p>
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
                      <div className="flex items-center gap-2 mb-2">
                        <X className="h-4 w-4" />
                        <span className="text-sm font-medium">모호한 검색 결과</span>
                      </div>
                      <p className="text-xs text-red-600">무엇을 할 수 있는지 명확하지 않은 항목들</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">과도한 중첩 그룹</span>
                      </div>
                      <p className="text-xs text-red-600">너무 많은 카테고리로 인한 혼란</p>
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
                다양한 상황에 적합한 명령 팔레트 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">글로벌 검색 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      <h5 className="font-medium">모든 것을 검색</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 파일, 사용자, 프로젝트, 메시지 등 모든 콘텐츠 검색</div>
                      <div>• 타입별로 그룹화하여 결과 표시</div>
                      <div>• 최근 검색어 및 자주 검색하는 항목 우선 표시</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">액션 중심 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-5 w-5" />
                      <h5 className="font-medium">빠른 액션 실행</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 자주 사용하는 기능을 명령어로 실행</div>
                      <div>• 키보드 단축키와 함께 제공</div>
                      <div>• 컨텍스트에 따른 동적 액션 목록</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">네비게이션 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Navigation className="h-5 w-5" />
                      <h5 className="font-medium">빠른 페이지 이동</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 복잡한 앱의 페이지 간 빠른 이동</div>
                      <div>• 브레드크럼과 연동된 경로 표시</div>
                      <div>• 권한에 따른 접근 가능한 페이지만 표시</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">도구 런처 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Grid className="h-5 w-5" />
                      <h5 className="font-medium">앱 및 도구 실행</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 통합 환경에서 다양한 도구 접근</div>
                      <div>• 사용 빈도에 따른 추천 도구 표시</div>
                      <div>• 카테고리별 도구 분류</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>키보드 상호작용 가이드</CardTitle>
              <CardDescription>
                효율적인 키보드 탐색을 위한 상호작용 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">기본 키보드 탐색</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd>↑</kbd> <kbd>↓</kbd> 항목 간 이동</li>
                    <li>• <kbd>Enter</kbd> 선택된 항목 실행</li>
                    <li>• <kbd>Escape</kbd> 팔레트 닫기</li>
                    <li>• <kbd>Tab</kbd> 그룹 간 이동</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">고급 키보드 기능</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd>⌘K</kbd> 팔레트 열기/닫기</li>
                    <li>• <kbd>⌘⇧P</kbd> 액션 팔레트</li>
                    <li>• <kbd>⌘/</kbd> 도움말 표시</li>
                    <li>• <kbd>⌘⌫</kbd> 검색어 전체 삭제</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">검색 최적화</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 퍼지 검색 지원</li>
                    <li>• 키워드 하이라이팅</li>
                    <li>• 동의어 및 별칭 지원</li>
                    <li>• 검색 히스토리 보존</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">성능 고려사항</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 지연 로딩 구현</li>
                    <li>• 디바운스 검색</li>
                    <li>• 가상화된 목록</li>
                    <li>• 검색 결과 캐싱</li>
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
                효과적인 Command 사용을 위한 모범 사례
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
                    <li>• 직관적이고 설명적인 플레이스홀더 텍스트 사용</li>
                    <li>• 논리적으로 그룹화된 명령어 구성</li>
                    <li>• 자주 사용하는 기능에 키보드 단축키 제공</li>
                    <li>• 빠른 응답을 위한 퍼지 검색 구현</li>
                    <li>• 명확한 아이콘과 설명으로 가독성 향상</li>
                    <li>• 컨텍스트에 맞는 동적 명령어 제공</li>
                    <li>• 접근성을 위한 ARIA 라벨 추가</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 명령어로 사용자 혼란 유발</li>
                    <li>• 모호하거나 기술적인 용어 사용</li>
                    <li>• 일관성 없는 명령어 구조</li>
                    <li>• 키보드 탐색을 방해하는 요소</li>
                    <li>• 느린 검색 응답 시간</li>
                    <li>• 컨텍스트와 무관한 명령어 표시</li>
                    <li>• 단축키 충돌이나 복잡한 조합</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Command를 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 모든 기능이 키보드로 접근 가능</li>
                    <li>• 논리적인 탭 순서 제공</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 표준 키보드 단축키 지원</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code>role="combobox"</code> 입력 필드에 적용</li>
                    <li>• <code>aria-expanded</code> 목록 확장 상태 표시</li>
                    <li>• <code>aria-activedescendant</code> 현재 선택 항목 표시</li>
                    <li>• 의미있는 라벨과 설명 제공</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 (최소 4.5:1)</li>
                    <li>• 명확한 시각적 계층 구조</li>
                    <li>• 색상에만 의존하지 않는 정보 전달</li>
                    <li>• 확대 시에도 사용 가능한 인터페이스</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">모바일 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 터치 친화적인 충분한 크기 (44px 이상)</li>
                    <li>• 스와이프 제스처 지원</li>
                    <li>• 음성 입력 지원</li>
                    <li>• 모바일 키보드 최적화</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Command 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 복잡한 앱의 빠른 네비게이션</li>
                    <li>• 글로벌 검색 기능</li>
                    <li>• 키보드 중심 워크플로</li>
                    <li>• 파워 유저 기능</li>
                    <li>• 액션 및 명령어 실행</li>
                    <li>• 도구 및 앱 런처</li>
                    <li>• 설정 및 기능 접근</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 방법</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Select:</strong> 옵션 선택</li>
                    <li>• <strong>Autocomplete:</strong> 텍스트 완성</li>
                    <li>• <strong>DropdownMenu:</strong> 컨텍스트 액션</li>
                    <li>• <strong>Navigation:</strong> 기본 네비게이션</li>
                    <li>• <strong>Dialog:</strong> 복잡한 폼</li>
                    <li>• <strong>Menubar:</strong> 앱 메뉴</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 단순한 폼 입력</li>
                    <li>• 기본 페이지 네비게이션</li>
                    <li>• 복잡한 데이터 입력</li>
                    <li>• 시각적 브라우징이 중요한 경우</li>
                    <li>• 터치 우선 인터페이스</li>
                    <li>• 초보자 대상 앱</li>
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
                Command 컴포넌트의 속성과 설정 옵션
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
                        <td className="p-2 font-mono">Command</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CommandInput</td>
                        <td className="p-2">검색 입력 필드</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CommandList</td>
                        <td className="p-2">명령어 목록 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CommandGroup</td>
                        <td className="p-2">명령어 그룹</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CommandItem</td>
                        <td className="p-2">개별 명령어</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CommandShortcut</td>
                        <td className="p-2">키보드 단축키 표시</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CommandEmpty</td>
                        <td className="p-2">검색 결과 없음 표시</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">CommandSeparator</td>
                        <td className="p-2">그룹 구분선</td>
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
  Command, 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandShortcut, 
  CommandSeparator 
} from "./components/ui/command"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 명령 팔레트
<Command>
  <CommandInput placeholder="명령어를 검색하세요..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="제안">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>캘린더</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>계산기</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="설정">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>프로필</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="다이얼로그 형태"
                code={`// 모달 다이얼로그 형태
const [open, setOpen] = useState(false)

// 키보드 단축키 설정
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="명령어나 검색어를 입력하세요..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="제안">
      <CommandItem>
        <File className="mr-2 h-4 w-4" />
        <span>새 파일</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
                codeKey="dialog-usage"
              />

              <CodeBlock
                title="상태 관리"
                code={`// 선택된 명령어와 상태 관리
const [value, setValue] = useState("")
const [selectedCommand, setSelectedCommand] = useState("")

<Command value={value} onValueChange={setValue}>
  <CommandInput placeholder="명령어를 검색하세요..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="액션">
      <CommandItem 
        value="create-file"
        onSelect={(value) => {
          setSelectedCommand(value)
          console.log("Selected:", value)
        }}
      >
        <File className="mr-2 h-4 w-4" />
        <span>새 파일 생성</span>
      </CommandItem>
      <CommandItem 
        value="open-settings"
        onSelect={(value) => {
          setSelectedCommand(value)
          // 설정 페이지로 이동
        }}
      >
        <Settings className="mr-2 h-4 w-4" />
        <span>설정 열기</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="state-management"
              />

              <CodeBlock
                title="동적 검색"
                code={`// 동적 검색 결과
const [searchTerm, setSearchTerm] = useState("")
const [results, setResults] = useState([])

// 디바운스된 검색
useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (searchTerm) {
      // API 호출 또는 로컬 검색
      searchItems(searchTerm).then(setResults)
    } else {
      setResults([])
    }
  }, 300)

  return () => clearTimeout(timeoutId)
}, [searchTerm])

<Command shouldFilter={false}>
  <CommandInput 
    placeholder="검색어를 입력하세요..." 
    value={searchTerm}
    onValueChange={setSearchTerm}
  />
  <CommandList>
    <CommandEmpty>
      {searchTerm ? "검색 결과가 없습니다." : "검색어를 입력하세요."}
    </CommandEmpty>
    {results.map((group) => (
      <CommandGroup key={group.category} heading={group.category}>
        {group.items.map((item) => (
          <CommandItem key={item.id} value={item.name}>
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.name}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    ))}
  </CommandList>
</Command>`}
                codeKey="dynamic-search"
              />

              <CodeBlock
                title="커스텀 필터링"
                code={`// 커스텀 필터링 로직
<Command
  filter={(value, search) => {
    // 커스텀 검색 로직
    if (value.includes(search)) return 1
    
    // 퍼지 검색
    const fuzzyMatch = fuzzySearch(value, search)
    if (fuzzyMatch > 0.5) return fuzzyMatch
    
    return 0
  }}
>
  <CommandInput placeholder="커스텀 검색..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup>
      <CommandItem value="javascript-tutorial">
        JavaScript 튜토리얼
      </CommandItem>
      <CommandItem value="react-components">
        React 컴포넌트
      </CommandItem>
      <CommandItem value="typescript-types">
        TypeScript 타입
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="custom-filtering"
              />

              <CodeBlock
                title="접근성 향상"
                code={`// 완전한 접근성 지원
<Command 
  className="rounded-lg border shadow-md"
  aria-label="명령 팔레트"
>
  <CommandInput 
    placeholder="명령어를 검색하세요..." 
    aria-describedby="search-description"
  />
  <div id="search-description" className="sr-only">
    화살표 키로 탐색하고 Enter로 선택하세요
  </div>
  <CommandList role="listbox" aria-label="명령어 목록">
    <CommandEmpty role="status" aria-live="polite">
      검색 결과가 없습니다.
    </CommandEmpty>
    <CommandGroup heading="파일 작업">
      <CommandItem 
        role="option"
        aria-describedby="create-file-desc"
        onSelect={() => {
          announceToScreenReader("새 파일을 생성합니다")
          createFile()
        }}
      >
        <File className="mr-2 h-4 w-4" aria-hidden="true" />
        <span>새 파일</span>
        <CommandShortcut aria-label="키보드 단축키: Command N">
          ⌘N
        </CommandShortcut>
      </CommandItem>
      <div id="create-file-desc" className="sr-only">
        새로운 빈 파일을 생성합니다
      </div>
    </CommandGroup>
  </CommandList>
</Command>`}
                codeKey="accessibility-enhanced"
              />

              <CodeBlock
                title="성능 최적화"
                code={`// 대용량 데이터를 위한 가상화
import { FixedSizeList } from 'react-window'

function VirtualizedCommand({ items }) {
  const [filteredItems, setFilteredItems] = useState(items)

  const Row = ({ index, style }) => {
    const item = filteredItems[index]
    return (
      <div style={style}>
        <CommandItem key={item.id} value={item.value}>
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.label}</span>
        </CommandItem>
      </div>
    )
  }

  return (
    <Command
      onValueChange={(search) => {
        // 클라이언트 사이드 필터링
        const filtered = items.filter(item => 
          item.label.toLowerCase().includes(search.toLowerCase())
        )
        setFilteredItems(filtered)
      }}
    >
      <CommandInput placeholder="대용량 데이터 검색..." />
      <CommandList className="max-h-[300px]">
        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
        <FixedSizeList
          height={300}
          itemCount={filteredItems.length}
          itemSize={35}
        >
          {Row}
        </FixedSizeList>
      </CommandList>
    </Command>
  )
}`}
                codeKey="performance-optimization"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}