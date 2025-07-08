import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { 
  MousePointer2,
  Users,
  Check,
  Clipboard,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  Eye,
  EyeOff,
  User,
  MapPin,
  Building,
  Calendar,
  ExternalLink,
  Star,
  MessageSquare,
  Heart,
  GitBranch,
  Clock,
  Mail,
  Phone,
  Globe,
  Settings,
  BookOpen,
  Camera,
  Bookmark,
  Award,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

export function HoverCardComponentPage() {
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
  const BasicHoverCardExample = () => (
    <div className="flex justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@홍길동</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>홍길동</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@홍길동</h4>
              <p className="text-sm">
                프론트엔드 개발자이자 디자인 시스템 전문가입니다. React와 TypeScript를 사용하여 사용자 경험을 개선하는 일을 합니다.
              </p>
              <div className="flex items-center pt-2">
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  2022년 3월에 가입
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );

  const ProjectHoverCardExample = () => (
    <div className="flex justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className="w-72 cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">디자인 시스템 v2.0</CardTitle>
              <CardDescription>
                새롭게 개편된 컴포넌트 라이브러리
              </CardDescription>
            </CardHeader>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-96">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h4 className="font-semibold">디자인 시스템 v2.0</h4>
              <Badge variant="secondary">Beta</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              차세대 디자인 시스템으로, 46개의 새로운 컴포넌트와 개선된 접근성 기능, 다크 모드 지원을 포함합니다. React 18과 TypeScript 5.0을 기반으로 구축되었습니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">React 18</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Radix UI</Badge>
            </div>
            <Separator />
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>1.2k Stars</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-blue-500" />
                <span>45 Forks</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span>Active</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );

  const ProfileHoverCardExample = () => (
    <div className="flex justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b6b2fd02?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>김민수</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">김민수</span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b6b2fd02?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>김민수</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="font-semibold">김민수</h4>
                <p className="text-sm text-muted-foreground">UX/UI 디자이너</p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>서울, 대한민국</span>
                </div>
              </div>
            </div>
            <p className="text-sm">
              사용자 중심의 디자인으로 복잡한 문제를 해결하는 것을 좋아합니다. 5년 이상의 경험을 바탕으로 모바일과 웹 인터페이스를 설계합니다.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="h-8">
                <Mail className="mr-1 h-3 w-3" />
                이메일
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                <MessageSquare className="mr-1 h-3 w-3" />
                메시지
              </Button>
            </div>
            <div className="pt-2 text-xs text-muted-foreground flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              지난 30일간 15개 프로젝트 완료
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );

  const ProductHoverCardExample = () => (
    <div className="flex justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=150&fit=crop" 
              alt="무선 헤드폰"
              className="w-48 h-32 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">프리미엄 무선 헤드폰</h4>
                <p className="text-sm text-muted-foreground">노이즈 캔슬링 기능</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">₩299,000</div>
                <div className="text-sm text-muted-foreground line-through">₩399,000</div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.8 (234 리뷰)</span>
            </div>
            <p className="text-sm">
              최고급 사운드 품질과 최대 30시간 배터리 지속시간을 제공하는 프리미엄 무선 헤드폰입니다. 
              지능형 노이즈 캔슬링 기술로 완벽한 음악 감상을 경험하세요.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">무료배송</Badge>
              <Badge variant="secondary" className="text-xs">30일 무료체험</Badge>
              <Badge variant="secondary" className="text-xs">1년 보증</Badge>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1">
                <Heart className="mr-1 h-3 w-3" />
                찜하기
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Bookmark className="mr-1 h-3 w-3" />
                저장
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );

  const LinkPreviewExample = () => (
    <div className="flex justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
          >
            React 공식 문서
            <ExternalLink className="h-3 w-3" />
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-96">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">React - A JavaScript library for building user interfaces</h4>
                <p className="text-sm text-muted-foreground">react.dev</p>
              </div>
            </div>
            <p className="text-sm">
              React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 
              컴포넌트 기반 아키텍처를 통해 복잡한 UI를 효율적으로 개발할 수 있습니다.
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>react.dev</span>
              <span>공식 문서</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );

  const examples = [
    {
      title: '기본 사용자 프로필',
      description: '사용자의 기본 정보를 보여주는 호버 카드입니다.',
      component: <BasicHoverCardExample />,
      code: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { Calendar } from "lucide-react"

export function BasicHoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@홍길동</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/avatars/01.png" />
            <AvatarFallback>홍길동</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@홍길동</h4>
            <p className="text-sm">
              프론트엔드 개발자이자 디자인 시스템 전문가입니다.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                2022년 3월에 가입
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`
    },
    {
      title: '프로젝트 정보 카드',
      description: '프로젝트의 상세 정보를 표시하는 호버 카드입니다.',
      component: <ProjectHoverCardExample />,
      code: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"
import { Card, CardHeader, CardTitle, CardDescription } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Separator } from "./components/ui/separator"
import { BookOpen, Star, GitBranch, Clock } from "lucide-react"

export function ProjectHoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="w-72 cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">디자인 시스템 v2.0</CardTitle>
            <CardDescription>
              새롭게 개편된 컴포넌트 라이브러리
            </CardDescription>
          </CardHeader>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">디자인 시스템 v2.0</h4>
            <Badge variant="secondary">Beta</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            차세대 디자인 시스템으로, 46개의 새로운 컴포넌트와 
            개선된 접근성 기능을 포함합니다.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React 18</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>1.2k Stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-blue-500" />
              <span>45 Forks</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-500" />
              <span>Active</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`
    },
    {
      title: '상세 프로필 카드',
      description: '더 자세한 사용자 정보와 액션 버튼을 포함한 호버 카드입니다.',
      component: <ProfileHoverCardExample />,
      code: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { MapPin, Mail, MessageSquare, TrendingUp } from "lucide-react"

export function ProfileHoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center space-x-2 cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/02.png" />
            <AvatarFallback>김민수</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">김민수</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatars/02.png" />
              <AvatarFallback>김민수</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="font-semibold">김민수</h4>
              <p className="text-sm text-muted-foreground">UX/UI 디자이너</p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>서울, 대한민국</span>
              </div>
            </div>
          </div>
          <p className="text-sm">
            사용자 중심의 디자인으로 복잡한 문제를 해결하는 것을 좋아합니다.
          </p>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="h-8">
              <Mail className="mr-1 h-3 w-3" />
              이메일
            </Button>
            <Button size="sm" variant="outline" className="h-8">
              <MessageSquare className="mr-1 h-3 w-3" />
              메시지
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`
    },
    {
      title: '제품 미리보기',
      description: '제품 이미지에 마우스를 올렸을 때 상세 정보를 보여주는 호버 카드입니다.',
      component: <ProductHoverCardExample />,
      code: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import { Star, Heart, Bookmark } from "lucide-react"

export function ProductHoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer">
          <img 
            src="/product-image.jpg" 
            alt="무선 헤드폰"
            className="w-48 h-32 object-cover rounded-lg hover:opacity-90 transition-opacity"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">프리미엄 무선 헤드폰</h4>
              <p className="text-sm text-muted-foreground">노이즈 캔슬링 기능</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">₩299,000</div>
              <div className="text-sm text-muted-foreground line-through">₩399,000</div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={\`h-4 w-4 \${i < 4 ? 'text-yellow-500 fill-current' : 'text-gray-300'}\`} />
            ))}
            <span className="text-sm text-muted-foreground ml-2">4.8 (234 리뷰)</span>
          </div>
          <p className="text-sm">
            최고급 사운드 품질과 최대 30시간 배터리 지속시간을 제공합니다.
          </p>
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1">
              <Heart className="mr-1 h-3 w-3" />
              찜하기
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Bookmark className="mr-1 h-3 w-3" />
              저장
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`
    },
    {
      title: '링크 미리보기',
      description: '외부 링크에 마우스를 올렸을 때 페이지 정보를 미리 보여주는 호버 카드입니다.',
      component: <LinkPreviewExample />,
      code: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"
import { ExternalLink, Globe } from "lucide-react"

export function LinkPreviewExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
        >
          React 공식 문서
          <ExternalLink className="h-3 w-3" />
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">React - A JavaScript library for building user interfaces</h4>
              <p className="text-sm text-muted-foreground">react.dev</p>
            </div>
          </div>
          <p className="text-sm">
            React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>react.dev</span>
            <span>공식 문서</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`
    }
  ];

  const components = [
    {
      name: 'HoverCard',
      description: 'Radix UI HoverCard의 루트 컨테이너',
      usage: '호버 카드의 상태와 로직을 관리하는 컨테이너'
    },
    {
      name: 'HoverCardTrigger',
      description: '호버 이벤트를 감지하는 트리거 요소',
      usage: '마우스 호버 시 콘텐츠를 표시할 요소를 감쌈'
    },
    {
      name: 'HoverCardContent',
      description: '호버 시 표시되는 실제 콘텐츠',
      usage: '호버 카드의 내용을 담는 팝오버 콘텐츠'
    }
  ];

  const features = [
    {
      title: '접근성 우선',
      description: 'ARIA 속성과 키보드 네비게이션을 완벽하게 지원합니다.',
      icon: '♿'
    },
    {
      title: '부드러운 애니메이션',
      description: '자연스러운 등장과 사라짐 애니메이션을 제공합니다.',
      icon: '✨'
    },
    {
      title: '유연한 위치 조정',
      description: '화면 경계에 따라 자동으로 위치를 조정합니다.',
      icon: '📍'
    },
    {
      title: '커스터마이징 가능',
      description: '다양한 스타일과 레이아웃으로 커스터마이징할 수 있습니다.',
      icon: '🎨'
    },
    {
      title: '성능 최적화',
      description: '지연 로딩과 포털을 사용하여 성능을 최적화했습니다.',
      icon: '⚡'
    },
    {
      title: '반응형 지원',
      description: '모든 화면 크기에서 완벽하게 작동합니다.',
      icon: '📱'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MousePointer2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Hover Card</h1>
            <p className="text-muted-foreground">
              마우스 호버 시 추가 정보나 미리보기 콘텐츠를 표시하는 카드 컴포넌트입니다. 
              사용자 프로필, 링크 미리보기, 제품 정보 등 다양한 용도로 활용할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MousePointer2 className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">애니메이션</Badge>
          <Badge variant="outline">반응형</Badge>
          <Badge variant="outline">Radix UI</Badge>
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
                <div className="p-8 border rounded-lg bg-background min-h-[120px] flex items-center">
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
                Hover Card를 구성하는 주요 컴포넌트들입니다.
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
              <CardTitle>호버 상태</CardTitle>
              <CardDescription>
                Hover Card의 다양한 상태를 보여주는 시각적 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    기본 상태
                  </h5>
                  <div className="space-y-2">
                    <div className="p-3 bg-muted rounded border-dashed border-2">
                      <span className="text-sm">마우스를 올려보세요</span>
                    </div>
                    <p className="text-sm text-muted-foreground">트리거 요소에 마우스를 올리면 호버 카드가 나타납니다.</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-600" />
                    활성 상태
                  </h5>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded relative">
                      <span className="text-sm">호버 카드 표시됨</span>
                      <div className="absolute -top-2 left-4 w-3 h-3 bg-blue-50 border-l border-t border-blue-200 rotate-45"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">호버 카드가 표시된 상태입니다.</p>
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
                Hover Card를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 사용자 프로필 미리보기</li>
                      <li>• 링크 및 콘텐츠 프리뷰</li>
                      <li>• 제품 정보 미리보기</li>
                      <li>• 추가 설명 또는 도움말</li>
                      <li>• 미디어 콘텐츠 미리보기</li>
                      <li>• 상태 정보 표시</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 콘텐츠의 중요도</li>
                      <li>• 호버 지연 시간</li>
                      <li>• 모바일 대응 방안</li>
                      <li>• 접근성 고려사항</li>
                      <li>• 콘텐츠 로딩 시간</li>
                      <li>• 화면 경계 처리</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 중요한 핵심 정보</li>
                      <li>• 필수 액션 버튼</li>
                      <li>• 너무 복잡한 인터랙션</li>
                      <li>• 모바일에서만 사용</li>
                      <li>• 자동 재생 미디어</li>
                      <li>• 과도한 애니메이션</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">디자인 원칙</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 호버 카드</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">명확한 정보 제공</div>
                        <div>• 관련성 높은 추가 정보</div>
                        <div>• 적절한 콘텐츠 양</div>
                        <div>• 빠른 로딩 속도</div>
                        <div className="font-medium mt-3">사용자 친화적</div>
                        <div>• 자연스러운 애니메이션</div>
                        <div>• 적절한 지연 시간</div>
                        <div>• 키보드 접근성</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 피해야 할 디자인</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">혼란스러운 정보</div>
                        <div>• 관련 없는 콘텐츠</div>
                        <div>• 너무 많은 정보</div>
                        <div>• 느린 로딩</div>
                        <div className="font-medium mt-3">사용성 문제</div>
                        <div>• 갑작스러운 등장</div>
                        <div>• 즉시 사라짐</div>
                        <div>• 접근성 무시</div>
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
                Hover Card의 접근성 기능과 고려사항입니다.
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
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                    <span>트리거로 포커스 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                    <span>호버 카드 표시</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                    <span>호버 카드 숨김</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                    <span>링크 활성화</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>aria-expanded:</strong> 호버 카드 열림/닫힘 상태</li>
                  <li>• <strong>aria-haspopup:</strong> 팝업 콘텐츠 존재 알림</li>
                  <li>• <strong>aria-describedby:</strong> 호버 카드와 트리거 연결</li>
                  <li>• <strong>role 속성:</strong> 적절한 역할 정의</li>
                  <li>• <strong>포커스 관리:</strong> 논리적인 포커스 순서</li>
                  <li>• <strong>키보드 지원:</strong> 마우스 없이도 완전한 접근</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <MonitorSpeaker className="w-4 h-4" />
                  시각적 및 모션 고려사항
                </h4>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">모션 및 애니메이션</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 부드럽고 자연스러운 전환</li>
                      <li>• 적절한 지속 시간 (200-300ms)</li>
                      <li>• prefers-reduced-motion 지원</li>
                    </ul>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">시각적 피드백</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 명확한 트리거 표시</li>
                      <li>• 충분한 색상 대비</li>
                      <li>• 포커스 상태 표시</li>
                    </ul>
                  </div>
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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"`}
                codeKey="import"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기본 사용법</CardTitle>
              <CardDescription>
                Hover Card의 기본적인 사용 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="기본 구조"
                code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">호버해보세요</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>여기에 호버 카드 내용이 표시됩니다.</p>
  </HoverCardContent>
</HoverCard>`}
                codeKey="basic"
              />

              <CodeBlock
                title="커스텀 지연시간과 위치"
                code={`<HoverCard openDelay={300} closeDelay={100}>
  <HoverCardTrigger asChild>
    <span className="cursor-pointer underline">
      정보 더보기
    </span>
  </HoverCardTrigger>
  <HoverCardContent 
    side="top" 
    align="start" 
    sideOffset={8}
    className="w-96"
  >
    <div className="space-y-2">
      <h4 className="font-semibold">상세 정보</h4>
      <p className="text-sm text-muted-foreground">
        여기에 상세한 설명이 표시됩니다.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
                codeKey="custom"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>고급 사용법</CardTitle>
              <CardDescription>
                복잡한 레이아웃과 인터랙션을 위한 고급 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="조건부 렌더링"
                code={`function ConditionalHoverCard({ user, children }) {
  if (!user) {
    return children;
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent>
        <UserProfile user={user} />
      </HoverCardContent>
    </HoverCard>
  );
}`}
                codeKey="conditional"
              />

              <CodeBlock
                title="동적 콘텐츠 로딩"
                code={`function DynamicHoverCard({ userId, children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpenChange = async (open) => {
    if (open && !userData) {
      setLoading(true);
      try {
        const data = await fetchUserData(userId);
        setUserData(data);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <HoverCard onOpenChange={handleOpenChange}>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent>
        {loading ? (
          <div className="flex items-center space-x-2">
            <Spinner />
            <span>로딩 중...</span>
          </div>
        ) : userData ? (
          <UserProfile user={userData} />
        ) : (
          <p>사용자 정보를 불러올 수 없습니다.</p>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}`}
                codeKey="dynamic"
              />

              <CodeBlock
                title="중첩된 호버 카드"
                code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="ghost">프로젝트 정보</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-3">
      <h4 className="font-semibold">React 프로젝트</h4>
      <p className="text-sm">
        팀원: 
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="mx-1 cursor-pointer text-blue-600">
              @김개발
            </span>
          </HoverCardTrigger>
          <HoverCardContent>
            <UserMiniProfile userId="kim" />
          </HoverCardContent>
        </HoverCard>
        외 3명
      </p>
      <div className="flex space-x-2">
        <Button size="sm">보기</Button>
        <Button size="sm" variant="outline">편집</Button>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
                codeKey="nested"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API 레퍼런스</CardTitle>
              <CardDescription>
                Hover Card 컴포넌트의 주요 속성들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">HoverCard</h5>
                  <div className="text-sm space-y-1">
                    <div><code>openDelay?: number</code> - 열리는 지연 시간 (기본값: 700ms)</div>
                    <div><code>closeDelay?: number</code> - 닫히는 지연 시간 (기본값: 300ms)</div>
                    <div><code>onOpenChange?: (open: boolean) =&gt; void</code> - 열림/닫힘 상태 변경 콜백</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">HoverCardContent</h5>
                  <div className="text-sm space-y-1">
                    <div><code>side?: "top" | "bottom" | "left" | "right"</code> - 표시 위치</div>
                    <div><code>align?: "start" | "center" | "end"</code> - 정렬 방식</div>
                    <div><code>sideOffset?: number</code> - 트리거와의 거리 (기본값: 4px)</div>
                    <div><code>alignOffset?: number</code> - 정렬 오프셋</div>
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
            <MousePointer2 className="w-5 h-5" />
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