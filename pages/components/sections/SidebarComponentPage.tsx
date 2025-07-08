import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { 
  PanelLeft,
  Check,
  Clipboard,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  Home,
  FileText,
  Settings,
  Users,
  Mail,
  Calendar,
  Search,
  Star,
  Bookmark,
  Archive,
  Trash,
  Edit,
  Share,
  Download,
  Upload,
  Plus,
  ChevronDown,
  User,
  Bell,
  HelpCircle,
  LogOut,
  Building,
  Shield,
  Activity,
  BarChart3,
  Database,
  Folder,
  FolderOpen,
  File,
  Image,
  Video,
  Music,
  Code,
  Terminal,
  Package,
  Layers,
  Grid3X3,
  Layout,
  Palette,
  Type,
  Zap,
  Globe,
  Wifi,
  Server,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  FastForward,
  Rewind,
  MoreHorizontal
} from 'lucide-react';
import { useState } from 'react';

export function SidebarComponentPage() {
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

  // Mock sidebar examples using regular divs instead of actual Sidebar components
  const BasicSidebarDemo = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    return (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden flex bg-background">
        <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-sidebar border-r border-sidebar-border transition-all duration-200 flex flex-col`}>
          {/* Header */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Building className="w-4 h-4 text-primary-foreground" />
              </div>
              {!isCollapsed && <h2 className="font-semibold text-sidebar-foreground">애플리케이션</h2>}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-2 space-y-1">
            <div className="text-xs font-medium text-sidebar-foreground/70 px-2 py-1">
              {!isCollapsed && "메인 메뉴"}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                <Home className="w-4 h-4 text-sidebar-foreground" />
                {!isCollapsed && <span className="text-sidebar-foreground">홈</span>}
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                <FileText className="w-4 h-4 text-sidebar-foreground" />
                {!isCollapsed && <span className="text-sidebar-foreground">문서</span>}
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                <Settings className="w-4 h-4 text-sidebar-foreground" />
                {!isCollapsed && <span className="text-sidebar-foreground">설정</span>}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-2 border-t border-sidebar-border">
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
              <User className="w-4 h-4 text-sidebar-foreground" />
              {!isCollapsed && <span className="text-sidebar-foreground">사용자 계정</span>}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <PanelLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-semibold">메인 콘텐츠</h1>
          </div>
          <p className="text-muted-foreground">
            이것은 기본 사이드바의 데모입니다. 왼쪽의 토글 버튼을 클릭하여 사이드바를 접고 펼칠 수 있습니다.
          </p>
        </div>
      </div>
    );
  };

  const CollapsibleSidebarDemo = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    
    return (
      <div className="h-[400px] w-full border rounded-lg overflow-hidden flex bg-background">
        <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-sidebar border-r border-sidebar-border transition-all duration-200 flex flex-col`}>
          {/* Header */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Building className="w-5 h-5 text-primary-foreground" />
              </div>
              {!isCollapsed && <span className="font-semibold text-sidebar-foreground">회사명</span>}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-2 space-y-1">
            <div className="text-xs font-medium text-sidebar-foreground/70 px-2 py-1">
              {!isCollapsed && "도구"}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer" title={isCollapsed ? "대시보드" : ""}>
                <BarChart3 className="w-4 h-4 text-sidebar-foreground" />
                {!isCollapsed && <span className="text-sidebar-foreground">대시보드</span>}
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer" title={isCollapsed ? "프로젝트" : ""}>
                <Folder className="w-4 h-4 text-sidebar-foreground" />
                {!isCollapsed && <span className="text-sidebar-foreground">프로젝트</span>}
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer" title={isCollapsed ? "팀" : ""}>
                <Users className="w-4 h-4 text-sidebar-foreground" />
                {!isCollapsed && <span className="text-sidebar-foreground">팀</span>}
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer" title={isCollapsed ? "설정" : ""}>
                <Settings className="w-4 h-4 text-sidebar-foreground" />
                {!isCollapsed && <span className="text-sidebar-foreground">설정</span>}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <PanelLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-semibold">아이콘 모드 사이드바</h1>
          </div>
          <p className="text-muted-foreground">
            이 사이드바는 접혔을 때 아이콘만 표시됩니다. 각 아이콘에 마우스를 올리면 툴팁이 나타납니다.
          </p>
        </div>
      </div>
    );
  };

  const NestedMenuDemo = () => {
    const [projectExpanded, setProjectExpanded] = useState(true);
    
    return (
      <div className="h-[450px] w-full border rounded-lg overflow-hidden flex bg-background">
        <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-sidebar-foreground" />
              <span className="font-semibold text-sidebar-foreground">개발 도구</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-2 space-y-2">
            <div className="space-y-1">
              <div className="text-xs font-medium text-sidebar-foreground/70 px-2 py-1">파일</div>
              <div className="space-y-1">
                <div 
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer"
                  onClick={() => setProjectExpanded(!projectExpanded)}
                >
                  <FolderOpen className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sidebar-foreground flex-1">프로젝트</span>
                  <ChevronDown className={`w-4 h-4 text-sidebar-foreground transition-transform ${projectExpanded ? '' : '-rotate-90'}`} />
                </div>
                {projectExpanded && (
                  <div className="ml-6 space-y-1">
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-sidebar-accent cursor-pointer">
                      <File className="w-3 h-3 text-sidebar-foreground" />
                      <span className="text-sm text-sidebar-foreground">index.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-sidebar-accent cursor-pointer">
                      <File className="w-3 h-3 text-sidebar-foreground" />
                      <span className="text-sm text-sidebar-foreground">App.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-sidebar-accent cursor-pointer">
                      <Folder className="w-3 h-3 text-sidebar-foreground" />
                      <span className="text-sm text-sidebar-foreground">components</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                  <Database className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sidebar-foreground">데이터베이스</span>
                </div>
              </div>
            </div>
            
            <Separator className="bg-sidebar-border" />
            
            <div className="space-y-1">
              <div className="text-xs font-medium text-sidebar-foreground/70 px-2 py-1">도구</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                  <Terminal className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sidebar-foreground">터미널</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sidebar-foreground">패키지</span>
                  </div>
                  <div className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm">
              <PanelLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-semibold">중첩 메뉴</h1>
          </div>
          <p className="text-muted-foreground">
            중첩된 메뉴 구조와 배지를 포함한 복잡한 사이드바 예제입니다.
          </p>
        </div>
      </div>
    );
  };

  const SearchableSidebarDemo = () => {
    return (
      <div className="h-[450px] w-full border rounded-lg overflow-hidden flex bg-background">
        <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-sidebar-border space-y-3">
            <h2 className="font-semibold text-sidebar-foreground">미디어 라이브러리</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-foreground/50" />
              <input 
                type="text" 
                placeholder="검색..." 
                className="w-full pl-9 pr-3 py-2 bg-background border border-sidebar-border rounded-md text-sm"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-2 space-y-2 overflow-y-auto">
            <div className="space-y-1">
              <div className="flex items-center justify-between px-2 py-1">
                <div className="text-xs font-medium text-sidebar-foreground/70">미디어 타입</div>
                <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between p-2 rounded-md hover:bg-sidebar-accent cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <Image className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sidebar-foreground">이미지</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">24</div>
                    <Button variant="ghost" size="sm" className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 rounded-md hover:bg-sidebar-accent cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sidebar-foreground">비디오</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">8</div>
                    <Button variant="ghost" size="sm" className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 rounded-md hover:bg-sidebar-accent cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-sidebar-foreground" />
                    <span className="text-sidebar-foreground">오디오</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">15</div>
                    <Button variant="ghost" size="sm" className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="bg-sidebar-border" />
            
            <div className="space-y-1">
              <div className="text-xs font-medium text-sidebar-foreground/70 px-2 py-1">즐겨찾기</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                  <Star className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sidebar-foreground">즐겨찾기</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                  <Bookmark className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sidebar-foreground">북마크</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
                  <Archive className="w-4 h-4 text-sidebar-foreground" />
                  <span className="text-sidebar-foreground">보관함</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-2 border-t border-sidebar-border">
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer">
              <Upload className="w-4 h-4 text-sidebar-foreground" />
              <span className="text-sidebar-foreground">파일 업로드</span>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm">
              <PanelLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-semibold">검색 가능한 사이드바</h1>
          </div>
          <p className="text-muted-foreground">
            검색 기능, 그룹 액션, 메뉴 액션을 포함한 고급 사이드바 예제입니다.
          </p>
        </div>
      </div>
    );
  };

  const LoadingSidebarDemo = () => {
    return (
      <div className="h-[350px] w-full border rounded-lg overflow-hidden flex bg-background">
        <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-sidebar-border">
            <h2 className="font-semibold text-sidebar-foreground">로딩 중...</h2>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-2 space-y-1">
            <div className="text-xs font-medium text-sidebar-foreground/70 px-2 py-1">메뉴</div>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 p-2">
                  {i < 3 && <div className="w-4 h-4 bg-muted animate-pulse rounded" />}
                  <div className={`h-4 bg-muted animate-pulse rounded ${i === 0 ? 'w-20' : i === 1 ? 'w-16' : i === 2 ? 'w-24' : i === 3 ? 'w-18' : 'w-22'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm">
              <PanelLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-semibold">로딩 상태</h1>
          </div>
          <p className="text-muted-foreground">
            데이터 로딩 중에 표시되는 스켈레톤 상태의 사이드바입니다.
          </p>
        </div>
      </div>
    );
  };

  const examples = [
    {
      title: '기본 사이드바',
      description: '헤더, 콘텐츠, 푸터가 있는 기본적인 사이드바 레이아웃입니다.',
      component: <BasicSidebarDemo />,
      code: `import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "./components/ui/sidebar"
import { Home, FileText, Settings, User } from "lucide-react"

export function BasicSidebarExample() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-semibold px-2">애플리케이션</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home className="w-4 h-4" />
                    <span>홈</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FileText className="w-4 h-4" />
                    <span>문서</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings className="w-4 h-4" />
                    <span>설정</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="w-4 h-4" />
                <span>사용자 계정</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">메인 콘텐츠</h1>
          </div>
          <p>사이드바 옆에 표시되는 메인 콘텐츠입니다.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`
    },
    {
      title: '아이콘 모드 사이드바',
      description: '접혔을 때 아이콘만 표시하고 툴팁을 제공하는 사이드바입니다.',
      component: <CollapsibleSidebarDemo />,
      code: `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "./components/ui/sidebar"
import { Building, BarChart3, Folder, Users, Settings } from "lucide-react"

export function CollapsibleSidebarExample() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenuButton size="lg">
            <Building className="w-6 h-6" />
            <span>회사명</span>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>도구</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="대시보드">
                    <BarChart3 className="w-4 h-4" />
                    <span>대시보드</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="프로젝트">
                    <Folder className="w-4 h-4" />
                    <span>프로젝트</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="팀">
                    <Users className="w-4 h-4" />
                    <span>팀</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="설정">
                    <Settings className="w-4 h-4" />
                    <span>설정</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold">아이콘 모드 사이드바</h1>
          </div>
          <p>접혔을 때 아이콘만 표시되는 사이드바입니다.</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`
    },
    {
      title: '중첩 메뉴',
      description: '서브메뉴와 배지를 포함한 계층적 메뉴 구조입니다.',
      component: <NestedMenuDemo />,
      code: `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "./components/ui/sidebar"
import { 
  Code, 
  FolderOpen, 
  File, 
  Folder, 
  Database, 
  Terminal, 
  Package,
  ChevronDown 
} from "lucide-react"

export function NestedMenuExample() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenuButton size="lg">
            <Code className="w-6 h-6" />
            <span>개발 도구</span>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>파일</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FolderOpen className="w-4 h-4" />
                    <span>프로젝트</span>
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <File className="w-4 h-4" />
                        <span>index.tsx</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <File className="w-4 h-4" />
                        <span>App.tsx</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <Folder className="w-4 h-4" />
                        <span>components</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Database className="w-4 h-4" />
                    <span>데이터베이스</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarSeparator />
          
          <SidebarGroup>
            <SidebarGroupLabel>도구</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Terminal className="w-4 h-4" />
                    <span>터미널</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Package className="w-4 h-4" />
                    <span>패키지</span>
                    <SidebarMenuBadge>12</SidebarMenuBadge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="p-6">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">중첩 메뉴</h1>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`
    },
    {
      title: '검색 가능한 사이드바',
      description: '검색 입력창과 그룹/메뉴 액션이 포함된 고급 사이드바입니다.',
      component: <SearchableSidebarDemo />,
      code: `import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "./components/ui/sidebar"
import { 
  Image, 
  Video, 
  Music, 
  Star, 
  Bookmark, 
  Archive, 
  Upload,
  Plus,
  MoreHorizontal 
} from "lucide-react"

export function SearchableSidebarExample() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-semibold px-2">미디어 라이브러리</h2>
          <SidebarInput placeholder="검색..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              미디어 타입
              <SidebarGroupAction>
                <Plus className="w-4 h-4" />
              </SidebarGroupAction>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Image className="w-4 h-4" />
                    <span>이미지</span>
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  </SidebarMenuButton>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal className="w-4 h-4" />
                  </SidebarMenuAction>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Video className="w-4 h-4" />
                    <span>비디오</span>
                    <SidebarMenuBadge>8</SidebarMenuBadge>
                  </SidebarMenuButton>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal className="w-4 h-4" />
                  </SidebarMenuAction>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Music className="w-4 h-4" />
                    <span>오디오</span>
                    <SidebarMenuBadge>15</SidebarMenuBadge>
                  </SidebarMenuButton>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal className="w-4 h-4" />
                  </SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarSeparator />
          
          <SidebarGroup>
            <SidebarGroupLabel>즐겨찾기</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Star className="w-4 h-4" />
                    <span>즐겨찾기</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Bookmark className="w-4 h-4" />
                    <span>북마크</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Archive className="w-4 h-4" />
                    <span>보관함</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Upload className="w-4 h-4" />
                <span>파일 업로드</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="p-6">
          <SidebarTrigger />
          <h1>검색 가능한 사이드바</h1>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`
    },
    {
      title: '로딩 상태',
      description: '데이터 로딩 중에 표시되는 스켈레톤 상태의 사이드바입니다.',
      component: <LoadingSidebarDemo />,
      code: `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "./components/ui/sidebar"

export function LoadingSidebarExample() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-semibold px-2">로딩 중...</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>메뉴</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="p-6">
          <SidebarTrigger />
          <h1>로딩 상태</h1>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`
    }
  ];

  const components = [
    {
      name: 'SidebarProvider',
      description: '사이드바 상태와 컨텍스트를 관리하는 최상위 컴포넌트',
      usage: '전체 사이드바 레이아웃을 감싸는 래퍼'
    },
    {
      name: 'Sidebar',
      description: '메인 사이드바 컨테이너',
      usage: '사이드바의 기본 구조와 동작을 정의'
    },
    {
      name: 'SidebarHeader',
      description: '사이드바 상단 영역',
      usage: '제목, 로고, 검색바 등을 배치'
    },
    {
      name: 'SidebarContent',
      description: '사이드바 메인 콘텐츠 영역',
      usage: '메뉴 그룹들이 들어가는 스크롤 가능한 영역'
    },
    {
      name: 'SidebarFooter',
      description: '사이드바 하단 영역',
      usage: '사용자 정보, 설정 등을 배치'
    },
    {
      name: 'SidebarGroup',
      description: '메뉴 항목들을 그룹화하는 컨테이너',
      usage: '관련된 메뉴들을 논리적으로 묶음'
    },
    {
      name: 'SidebarMenu',
      description: '메뉴 항목들의 목록',
      usage: '네비게이션 메뉴를 구성'
    },
    {
      name: 'SidebarMenuButton',
      description: '클릭 가능한 메뉴 버튼',
      usage: '개별 메뉴 항목의 버튼'
    },
    {
      name: 'SidebarTrigger',
      description: '사이드바 토글 버튼',
      usage: '사이드바 열기/닫기 제어'
    },
    {
      name: 'SidebarInset',
      description: '메인 콘텐츠 영역',
      usage: '사이드바 옆에 표시되는 페이지 콘텐츠'
    }
  ];

  const features = [
    {
      title: '반응형 디자인',
      description: '데스크탑에서는 접이식, 모바일에서는 오버레이로 자동 전환됩니다.',
      icon: '📱'
    },
    {
      title: '키보드 단축키',
      description: 'Cmd/Ctrl + B로 사이드바를 빠르게 토글할 수 있습니다.',
      icon: '⌨️'
    },
    {
      title: '상태 저장',
      description: '사이드바의 열림/닫힘 상태를 쿠키에 자동으로 저장합니다.',
      icon: '💾'
    },
    {
      title: '아이콘 모드',
      description: '접혔을 때 아이콘만 표시하고 툴팁으로 정보를 제공합니다.',
      icon: '🎯'
    },
    {
      title: '중첩 메뉴',
      description: '계층적 메뉴 구조와 서브메뉴를 지원합니다.',
      icon: '📂'
    },
    {
      title: '접근성 지원',
      description: '스크린 리더와 키보드 네비게이션을 완전히 지원합니다.',
      icon: '♿'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <PanelLeft className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Sidebar</h1>
            <p className="text-muted-foreground">
              접이식 및 반응형 사이드바 네비게이션 컴포넌트입니다. 
              데스크탑에서는 접이식으로, 모바일에서는 오버레이로 동작하며 키보드 단축키와 상태 저장을 지원합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <PanelLeft className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">반응형</Badge>
          <Badge variant="outline">접이식</Badge>
          <Badge variant="outline">키보드 단축키</Badge>
          <Badge variant="outline">상태 저장</Badge>
          <Badge variant="outline">중첩 메뉴</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="components">구성요소</TabsTrigger>
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
                <div className="border rounded-lg bg-background overflow-hidden">
                  {example.component}
                </div>
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>컴포넌트 구조</CardTitle>
              <CardDescription>
                Sidebar를 구성하는 주요 컴포넌트들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {components.map((component, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      <h5 className="font-medium">{component.name}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                    <div className="text-xs font-mono bg-muted p-2 rounded">
                      {component.usage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사이드바 변형</CardTitle>
              <CardDescription>
                다양한 사이드바 변형과 설정 옵션들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">접이식 모드</h5>
                  <div className="text-sm space-y-1">
                    <div><code>collapsible="offcanvas"</code> - 완전히 숨김</div>
                    <div><code>collapsible="icon"</code> - 아이콘만 표시</div>
                    <div><code>collapsible="none"</code> - 접기 비활성화</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">변형 스타일</h5>
                  <div className="text-sm space-y-1">
                    <div><code>variant="sidebar"</code> - 기본 스타일</div>
                    <div><code>variant="floating"</code> - 떠있는 스타일</div>
                    <div><code>variant="inset"</code> - 내부 여백 스타일</div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">위치 설정</h5>
                  <div className="text-sm space-y-1">
                    <div><code>side="left"</code> - 왼쪽 배치 (기본값)</div>
                    <div><code>side="right"</code> - 오른쪽 배치</div>
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
                Sidebar 컴포넌트를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 대시보드 애플리케이션</li>
                      <li>• 관리자 패널</li>
                      <li>• 파일 탐색기</li>
                      <li>• 문서 편집기</li>
                      <li>• 복잡한 네비게이션</li>
                      <li>• 컨텐츠 관리 시스템</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 메뉴 구조의 계층성</li>
                      <li>• 모바일 사용성</li>
                      <li>• 콘텐츠와의 균형</li>
                      <li>• 로딩 상태 처리</li>
                      <li>• 키보드 접근성</li>
                      <li>• 상태 저장 필요성</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 단순한 웹사이트</li>
                      <li>• 메뉴 항목이 적은 경우</li>
                      <li>• 모바일 우선 앱</li>
                      <li>• 랜딩 페이지</li>
                      <li>• 마케팅 사이트</li>
                      <li>• 간단한 블로그</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">UX 모범 사례</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 UX</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">명확한 정보 구조</div>
                        <div>• 논리적인 메뉴 그룹화</div>
                        <div>• 직관적인 아이콘 사용</div>
                        <div>• 명확한 레이블</div>
                        <div className="font-medium mt-3">적응적 동작</div>
                        <div>• 데스크탑/모바일 최적화</div>
                        <div>• 키보드 단축키 제공</div>
                        <div>• 상태 저장</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 나쁜 UX</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">혼란스러운 구조</div>
                        <div>• 과도한 중첩</div>
                        <div>• 불명확한 아이콘</div>
                        <div>• 긴 메뉴 레이블</div>
                        <div className="font-medium mt-3">부적절한 동작</div>
                        <div>• 예측할 수 없는 접기/펴기</div>
                        <div>• 모바일에서 사용 어려움</div>
                        <div>• 상태 손실</div>
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
                Sidebar 컴포넌트의 접근성 기능과 고려사항입니다.
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
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Cmd/Ctrl + B</kbd>
                    <span>사이드바 토글</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                    <span>다음 메뉴로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift + Tab</kbd>
                    <span>이전 메뉴로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter/Space</kbd>
                    <span>메뉴 활성화</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">↑↓</kbd>
                    <span>메뉴 간 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Esc</kbd>
                    <span>모바일 사이드바 닫기</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>role="navigation":</strong> 사이드바의 네비게이션 역할 명시</li>
                  <li>• <strong>aria-label:</strong> 사이드바와 메뉴에 대한 설명적 레이블</li>
                  <li>• <strong>aria-expanded:</strong> 접이식 메뉴의 확장/축소 상태</li>
                  <li>• <strong>aria-current:</strong> 현재 활성화된 메뉴 항목 표시</li>
                  <li>• <strong>aria-hidden:</strong> 접힌 상태에서 텍스트 숨김</li>
                  <li>• <strong>포커스 관리:</strong> 키보드 네비게이션 시 명확한 포커스 표시</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <MonitorSpeaker className="w-4 h-4" />
                  반응형 고려사항
                </h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div>• <strong>자동 전환:</strong> 화면 크기에 따라 접이식/오버레이 모드 자동 전환</div>
                  <div>• <strong>터치 지원:</strong> 모바일에서 스와이프 제스처 지원</div>
                  <div>• <strong>적절한 크기:</strong> 터치 타겟 최소 44px 이상 유지</div>
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
                code={`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./components/ui/sidebar"`}
                codeKey="import"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기본 사용법</CardTitle>
              <CardDescription>
                Sidebar 컴포넌트의 기본적인 사용 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="기본 구조"
                code={`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <h2>애플리케이션</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="w-4 h-4" />
                <span>홈</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
  <SidebarInset>
    <div className="p-6">
      <SidebarTrigger />
      <h1>메인 콘텐츠</h1>
    </div>
  </SidebarInset>
</SidebarProvider>`}
                codeKey="basic"
              />

              <CodeBlock
                title="상태 제어"
                code={`import { useState } from "react"
import { SidebarProvider, useSidebar } from "./components/ui/sidebar"

function App() {
  const [open, setOpen] = useState(true)

  return (
    <SidebarProvider 
      open={open} 
      onOpenChange={setOpen}
      defaultOpen={false}
    >
      {/* 사이드바 컴포넌트들 */}
    </SidebarProvider>
  )
}

function SidebarControls() {
  const { state, toggleSidebar, open, setOpen } = useSidebar()
  
  return (
    <div>
      <p>현재 상태: {state}</p>
      <button onClick={toggleSidebar}>토글</button>
      <button onClick={() => setOpen(false)}>닫기</button>
    </div>
  )
}`}
                codeKey="state"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API 레퍼런스</CardTitle>
              <CardDescription>
                Sidebar 컴포넌트의 주요 속성들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">SidebarProvider</h5>
                  <div className="text-sm space-y-1">
                    <div><code>defaultOpen?: boolean</code> - 초기 열림 상태 (기본값: true)</div>
                    <div><code>open?: boolean</code> - 제어된 열림 상태</div>
                    <div><code>onOpenChange?: (open: boolean) =&gt; void</code> - 상태 변경 콜백</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Sidebar</h5>
                  <div className="text-sm space-y-1">
                    <div><code>side?: "left" | "right"</code> - 배치 위치 (기본값: "left")</div>
                    <div><code>variant?: "sidebar" | "floating" | "inset"</code> - 스타일 변형</div>
                    <div><code>collapsible?: "offcanvas" | "icon" | "none"</code> - 접기 모드</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">SidebarMenuButton</h5>
                  <div className="text-sm space-y-1">
                    <div><code>asChild?: boolean</code> - 자식 요소로 렌더링</div>
                    <div><code>isActive?: boolean</code> - 활성 상태</div>
                    <div><code>tooltip?: string | TooltipProps</code> - 툴팁 설정</div>
                    <div><code>variant?: "default" | "outline"</code> - 스타일 변형</div>
                    <div><code>size?: "default" | "sm" | "lg"</code> - 크기</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">useSidebar Hook</h5>
                  <div className="text-sm space-y-1">
                    <div><code>state: "expanded" | "collapsed"</code> - 현재 상태</div>
                    <div><code>open: boolean</code> - 열림 상태</div>
                    <div><code>setOpen: (open: boolean) =&gt; void</code> - 상태 설정</div>
                    <div><code>toggleSidebar: () =&gt; void</code> - 토글 함수</div>
                    <div><code>isMobile: boolean</code> - 모바일 여부</div>
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
            <PanelLeft className="w-5 h-5" />
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