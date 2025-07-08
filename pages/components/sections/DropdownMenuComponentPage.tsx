import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '../ui/dropdown-menu';
import { 
  ChevronDown,
  Settings,
  User,
  Bell,
  Search,
  Filter,
  Share,
  Download,
  Edit,
  Plus,
  Check,
  X,
  Menu,
  ShoppingCart,
  Star,
  Heart,
  Bookmark,
  MessageSquare,
  Image,
  Camera,
  Upload,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  Smartphone,
  Tablet,
  Monitor,
  Info,
  HelpCircle,
  Clipboard,
  LogOut,
  CreditCard,
  UserPlus,
  Cloud,
  Github,
  LifeBuoy,
  Mail,
  MessageCircle,
  PlusCircle,
  UserCheck,
  Users,
  Trash2,
  Archive,
  Eye,
  EyeOff,
  Play,
  Pause,
  Square,
  SkipForward,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Bluetooth
} from 'lucide-react';
import { useState } from 'react';

export function DropdownMenuComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showURLs, setShowURLs] = useState(false);
  const [person, setPerson] = useState("Pedro");
  const [theme, setTheme] = useState("light");

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

  const examples = [
    {
      title: '기본 Dropdown Menu',
      description: '일반적인 액션들이 포함된 기본 드롭다운 메뉴입니다.',
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              메뉴 열기
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>프로필</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>결제 정보</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>설정</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              <span>알림</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>로그아웃</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Button } from "./components/ui/button"
import { User, CreditCard, Settings, Bell, LogOut, ChevronDown } from "lucide-react"

export function BasicDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          메뉴 열기
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>프로필</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>결제 정보</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>설정</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell className="mr-2 h-4 w-4" />
          <span>알림</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`
    },
    {
      title: '체크박스 및 라디오 버튼',
      description: '선택 가능한 옵션들이 있는 드롭다운 메뉴입니다.',
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              표시 옵션
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>표시 설정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              북마크 표시
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showURLs}
              onCheckedChange={setShowURLs}
            >
              URL 표시
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>팀원</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenuRadioItem value="Pedro">Pedro</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Colm">Colm</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="연진">연진</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Button } from "./components/ui/button"
import { ChevronDown } from "lucide-react"

export function CheckboxRadioDropdownMenu() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showURLs, setShowURLs] = useState(false)
  const [person, setPerson] = useState("Pedro")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          표시 옵션
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>표시 설정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          북마크 표시
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showURLs}
          onCheckedChange={setShowURLs}
        >
          URL 표시
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>팀원</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="Pedro">Pedro</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Colm">Colm</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="연진">연진</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`
    },
    {
      title: '하위 메뉴가 있는 Dropdown',
      description: '중첩된 하위 메뉴가 포함된 복합 드롭다운 메뉴입니다.',
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              고급 설정
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>설정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>계정 설정</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <MonitorSpeaker className="mr-2 h-4 w-4" />
                <span>테마</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <span>라이트</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>다크</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>시스템</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Share className="mr-2 h-4 w-4" />
                <span>공유</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>이메일</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <span>메시지</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>더 보기...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>지원</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>로그아웃</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Button } from "./components/ui/button"
import { 
  Settings, User, MonitorSpeaker, Share, Mail, MessageCircle, 
  Plus, Github, LifeBuoy, LogOut 
} from "lucide-react"

export function SubMenuDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          고급 설정
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>설정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>계정 설정</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <MonitorSpeaker className="mr-2 h-4 w-4" />
            <span>테마</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <span>라이트</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>다크</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>시스템</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Share className="mr-2 h-4 w-4" />
            <span>공유</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              <span>이메일</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>메시지</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`
    },
    {
      title: '액션 그룹화',
      description: '관련된 액션들을 그룹으로 묶은 드롭다운 메뉴입니다.',
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Menu className="mr-2 h-4 w-4" />
              파일 작업
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>파일</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>새 파일</span>
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                <span>다운로드</span>
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Upload className="mr-2 h-4 w-4" />
                <span>업로드</span>
                <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>편집</span>
                <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Clipboard className="mr-2 h-4 w-4" />
                <span>복사</span>
                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Archive className="mr-2 h-4 w-4" />
                <span>보관</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              <span>삭제</span>
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Button } from "./components/ui/button"
import { 
  Menu, Plus, Download, Upload, Edit, Clipboard, Archive, Trash2 
} from "lucide-react"

export function GroupedDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu className="mr-2 h-4 w-4" />
          파일 작업
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>파일</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>새 파일</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Download className="mr-2 h-4 w-4" />
            <span>다운로드</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Upload className="mr-2 h-4 w-4" />
            <span>업로드</span>
            <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>편집</span>
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clipboard className="mr-2 h-4 w-4" />
            <span>복사</span>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>삭제</span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`
    },
    {
      title: '미디어 컨트롤',
      description: '미디어 플레이어용 컨트롤이 포함된 드롭다운 메뉴입니다.',
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Play className="mr-2 h-4 w-4" />
              플레이어
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>재생 컨트롤</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Play className="mr-2 h-4 w-4" />
              <span>재생</span>
              <DropdownMenuShortcut>Space</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pause className="mr-2 h-4 w-4" />
              <span>일시정지</span>
              <DropdownMenuShortcut>Space</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Square className="mr-2 h-4 w-4" />
              <span>정지</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SkipForward className="mr-2 h-4 w-4" />
              <span>다음</span>
              <DropdownMenuShortcut>→</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={true}>
              <Volume2 className="mr-2 h-4 w-4" />
              <span>음성</span>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={false}>
              <VolumeX className="mr-2 h-4 w-4" />
              <span>음소거</span>
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Settings className="mr-2 h-4 w-4" />
                <span>품질</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value="1080p" onValueChange={() => {}}>
                  <DropdownMenuRadioItem value="480p">480p</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="720p">720p</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="1080p">1080p</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="4k">4K</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Button } from "./components/ui/button"
import { 
  Play, Pause, Square, SkipForward, Volume2, VolumeX, Settings 
} from "lucide-react"

export function MediaControlDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Play className="mr-2 h-4 w-4" />
          플레이어
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>재생 컨트롤</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Play className="mr-2 h-4 w-4" />
          <span>재생</span>
          <DropdownMenuShortcut>Space</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pause className="mr-2 h-4 w-4" />
          <span>일시정지</span>
          <DropdownMenuShortcut>Space</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          <Volume2 className="mr-2 h-4 w-4" />
          <span>음성</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Settings className="mr-2 h-4 w-4" />
            <span>품질</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value="1080p">
              <DropdownMenuRadioItem value="480p">480p</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="720p">720p</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="1080p">1080p</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="4k">4K</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`
    }
  ];

  const variants = [
    {
      title: '기본 아이템',
      description: '클릭 가능한 기본 메뉴 아이템입니다.',
      example: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">기본</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>아이템 1</DropdownMenuItem>
            <DropdownMenuItem>아이템 2</DropdownMenuItem>
            <DropdownMenuItem>아이템 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    {
      title: '체크박스 아이템',
      description: '체크 상태를 가질 수 있는 메뉴 아이템입니다.',
      example: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">체크박스</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={true}>
              옵션 1
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={false}>
              옵션 2
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    {
      title: '라디오 아이템',
      description: '그룹 내에서 하나만 선택 가능한 메뉴 아이템입니다.',
      example: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">라디오</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="option1">
              <DropdownMenuRadioItem value="option1">옵션 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">옵션 2</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    {
      title: '위험한 액션',
      description: '삭제와 같은 위험한 액션을 나타내는 아이템입니다.',
      example: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">위험</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>편집</DropdownMenuItem>
            <DropdownMenuItem>복사</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  ];

  const features = [
    {
      title: '키보드 네비게이션',
      description: '키보드만으로 완전한 네비게이션이 가능합니다.',
      icon: '⌨️'
    },
    {
      title: '부드러운 애니메이션',
      description: '자연스러운 페이드와 스케일 애니메이션을 제공합니다.',
      icon: '✨'
    },
    {
      title: '다양한 트리거',
      description: '버튼, 아이콘, 텍스트 등 다양한 요소를 트리거로 사용할 수 있습니다.',
      icon: '🎯'
    },
    {
      title: '중첩 서브메뉴',
      description: '무제한 깊이의 중첩된 서브메뉴를 지원합니다.',
      icon: '📁'
    },
    {
      title: '컨텍스트 인식',
      description: '화면 경계를 인식하여 자동으로 위치를 조정합니다.',
      icon: '🧭'
    },
    {
      title: '접근성 지원',
      description: 'ARIA 속성과 스크린 리더를 완전히 지원합니다.',
      icon: '♿'
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
            <h1 className="text-3xl font-semibold">Dropdown Menu</h1>
            <p className="text-muted-foreground">
              트리거 요소를 클릭했을 때 나타나는 컨텍스트 메뉴입니다. 
              다양한 액션과 옵션을 제공하며, 키보드 네비게이션과 중첩 메뉴를 지원합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <ChevronDown className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">키보드 네비게이션</Badge>
          <Badge variant="outline">중첩 메뉴</Badge>
          <Badge variant="outline">체크박스/라디오</Badge>
          <Badge variant="outline">접근성 지원</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">변형 및 구성요소</TabsTrigger>
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
                <div className="flex items-center justify-center p-8 border rounded-lg bg-background">
                  {example.component}
                </div>
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Variants Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>메뉴 아이템 유형</CardTitle>
              <CardDescription>
                다양한 유형의 메뉴 아이템들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {variants.map((variant, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div>
                      <h4 className="font-medium">{variant.title}</h4>
                      <p className="text-sm text-muted-foreground">{variant.description}</p>
                    </div>
                    <div className="flex justify-center">
                      {variant.example}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>구조적 요소</CardTitle>
              <CardDescription>
                Dropdown Menu를 구성하는 주요 요소들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DropdownMenuTrigger
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    메뉴를 열기 위한 트리거 요소입니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    asChild prop으로 요소 래핑
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DropdownMenuContent
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    메뉴 항목들을 포함하는 컨테이너입니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    자동 포지셔닝과 애니메이션 포함
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DropdownMenuItem
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    클릭 가능한 개별 메뉴 항목입니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    onSelect 이벤트 지원
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DropdownMenuSub
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    중첩된 서브메뉴를 생성합니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    SubTrigger + SubContent 조합
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
                Dropdown Menu를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 사용자 계정 메뉴</li>
                      <li>• 컨텍스트별 액션 메뉴</li>
                      <li>• 설정 및 환경설정</li>
                      <li>• 빠른 액션 그룹</li>
                      <li>• 분류 및 필터링</li>
                      <li>• 공유 옵션</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 메뉴 항목의 수와 깊이</li>
                      <li>• 화면 크기와 포지셔닝</li>
                      <li>• 키보드 네비게이션 패턴</li>
                      <li>• 액션의 그룹화와 우선순위</li>
                      <li>• 모바일 터치 인터페이스</li>
                      <li>• 로딩 상태와 비동기 액션</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 주요 네비게이션 대체</li>
                      <li>• 너무 깊은 중첩 구조</li>
                      <li>• 많은 항목의 일렬 나열</li>
                      <li>• 복잡한 폼 요소 포함</li>
                      <li>• 자주 사용하는 기능 숨김</li>
                      <li>• 불명확한 액션 레이블</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">디자인 원칙</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 디자인</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">명확한 구조</div>
                        <div>• 논리적 그룹화</div>
                        <div>• 적절한 구분선 사용</div>
                        <div>• 일관된 아이콘과 레이블</div>
                        <div className="font-medium mt-3">사용자 친화적</div>
                        <div>• 예상 가능한 액션</div>
                        <div>• 키보드 단축키 표시</div>
                        <div>• 위험한 액션 강조</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 피해야 할 디자인</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">혼란스러운 구조</div>
                        <div>• 무작위 항목 배치</div>
                        <div>• 불필요한 중첩</div>
                        <div>• 일관성 없는 스타일</div>
                        <div className="font-medium mt-3">사용성 문제</div>
                        <div>• 모호한 액션 레이블</div>
                        <div>• 너무 작은 클릭 영역</div>
                        <div>• 위험한 액션 강조 부족</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                Dropdown Menu의 접근성 기능과 고려사항입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  키보드 네비게이션
                </h4>
                <div className="grid gap-2 md:grid-cols-2 text-sm">
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Space/Enter</kbd>
                    <span>메뉴 열기/항목 선택</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                    <span>메뉴 닫기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">↑/↓</kbd>
                    <span>항목 간 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">→</kbd>
                    <span>서브메뉴 열기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">←</kbd>
                    <span>서브메뉴 닫기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Home/End</kbd>
                    <span>첫/마지막 항목으로</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>role="menu":</strong> 메뉴로 인식되어 적절한 네비게이션 제공</li>
                  <li>• <strong>aria-haspopup:</strong> 트리거가 메뉴를 여는 것임을 알림</li>
                  <li>• <strong>aria-expanded:</strong> 메뉴 열림/닫힘 상태 표시</li>
                  <li>• <strong>aria-labelledby:</strong> 메뉴 레이블과 연결</li>
                  <li>• <strong>aria-checked:</strong> 체크박스/라디오 항목의 상태 표시</li>
                  <li>• <strong>포커스 관리:</strong> 메뉴 열릴 때 첫 항목으로, 닫힐 때 트리거로 이동</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <MonitorSpeaker className="w-4 h-4" />
                  시각적 피드백
                </h4>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">포커스 표시</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 명확한 포커스 링</li>
                      <li>• 호버와 포커스 상태 구분</li>
                      <li>• 충분한 대비율 보장</li>
                    </ul>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">상태 표시</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 체크 상태 시각적 표시</li>
                      <li>• 비활성화 항목 구분</li>
                      <li>• 위험한 액션 색상 강조</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">모바일 고려사항</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 터치 영역 최소 44x44px 보장</li>
                  <li>• 화면 경계 인식한 포지셔닝</li>
                  <li>• 스크롤 가능한 긴 메뉴 지원</li>
                  <li>• 스와이프 제스처와의 충돌 방지</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementation Tab */}
        <TabsContent value="code" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>컴포넌트 구조</CardTitle>
              <CardDescription>
                Dropdown Menu의 주요 컴포넌트와 사용법입니다.
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
                        <td className="p-2 font-mono">DropdownMenu</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuTrigger</td>
                        <td className="p-2">메뉴를 여는 트리거</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuContent</td>
                        <td className="p-2">메뉴 항목 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuItem</td>
                        <td className="p-2">클릭 가능한 메뉴 항목</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuLabel</td>
                        <td className="p-2">메뉴 섹션 레이블</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuSeparator</td>
                        <td className="p-2">항목 간 구분선</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuCheckboxItem</td>
                        <td className="p-2">체크 가능한 항목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuRadioItem</td>
                        <td className="p-2">라디오 버튼 항목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DropdownMenuSub</td>
                        <td className="p-2">서브메뉴 컨테이너</td>
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">메뉴 열기</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>프로필</DropdownMenuItem>
        <DropdownMenuItem>설정</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="체크박스와 라디오 버튼"
                code={`function CheckboxRadioDropdown() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("option1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">옵션</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={checked}
          onCheckedChange={setChecked}
        >
          알림 받기
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="option1">옵션 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2">옵션 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
                codeKey="checkbox-radio-usage"
              />

              <CodeBlock
                title="서브메뉴 사용법"
                code={`function SubMenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">설정</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>일반 설정</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>테마</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>라이트</DropdownMenuItem>
            <DropdownMenuItem>다크</DropdownMenuItem>
            <DropdownMenuItem>시스템</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>도움말</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
                codeKey="submenu-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronDown className="w-5 h-5" />
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