import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Component,
  Layers,
  Palette,
  Accessibility,
  Code,
  BookOpen,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Search,
  Grid3X3,
  MousePointer,
  Keyboard,
  Eye,
  Volume2,
  Smartphone,
  Monitor,
  Globe,
  Package,
  Gauge,
  Target,
  Users,
  FileText,
  Layout,
  BarChart3,
  Settings,
  Navigation,
  PanelLeft,
  Bell,
  Calendar,
  Table,
  Form,
  ToggleLeft,
  Slider,
  RadioIcon,
  Type,
  Image,
  Square,
  Circle,
  Maximize2,
  Menu,
  ChevronDown,
  Plus,
  X,
  AlertTriangle,
  Info,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  Loader,
  RotateCcw,
  Download,
  Upload,
  Play,
  Pause,
  Timer,
  Activity,
  TrendingUp
} from 'lucide-react';

interface ComponentsOverviewSectionProps {
  onSectionChange: (section: string) => void;
}

export function ComponentsOverviewSection({ onSectionChange }: ComponentsOverviewSectionProps) {
  // Function to convert component names to route identifiers
  const getComponentRoute = (componentName: string): string => {
    const routeMap: { [key: string]: string } = {
      // Basic Components
      'Button': 'component-button',
      'Badge': 'component-badge',
      'Avatar': 'component-avatar',
      'Separator': 'component-separator',
      'Skeleton': 'component-skeleton',
      'Aspect Ratio': 'component-aspect-ratio',
      'Card': 'component-card',
      'Alert': 'component-alert',
      
      // Form Components
      'Input': 'component-input',
      'Textarea': 'component-textarea',
      'Select': 'component-select',
      'Checkbox': 'component-checkbox',
      'Radio Group': 'component-radio-group',
      'Switch': 'component-switch',
      'Slider': 'component-slider',
      'Label': 'component-label',
      'Form': 'component-form',
      'Input OTP': 'component-input-otp',
      'Toggle': 'component-toggle',
      'Toggle Group': 'component-toggle-group',
      'Calendar': 'component-calendar',
      
      // Navigation Components
      'Breadcrumb': 'component-breadcrumb',
      'Pagination': 'component-pagination',
      'Tabs': 'component-tabs',
      'Navigation Menu': 'component-navigation-menu',
      'Menubar': 'component-menubar',
      'Sidebar': 'component-sidebar',
      
      // Overlay Components
      'Dialog': 'component-dialog',
      'Alert Dialog': 'component-alert-dialog',
      'Sheet': 'component-sheet',
      'Popover': 'component-popover',
      'Tooltip': 'component-tooltip',
      'Hover Card': 'component-hover-card',
      'Context Menu': 'component-context-menu',
      'Dropdown Menu': 'component-dropdown-menu',
      'Drawer': 'component-drawer',
      
      // Data Display Components
      'Table': 'component-table',
      'Chart': 'component-chart',
      'Progress': 'component-progress',
      'Accordion': 'component-accordion',
      'Collapsible': 'component-collapsible',
      'Scroll Area': 'component-scroll-area',
      
      // Advanced Components
      'Command': 'component-command',
      'Carousel': 'component-carousel',
      'Resizable': 'component-resizable',
      'Toaster': 'component-sonner', // Updated to match the actual Toaster component route
    };
    
    return routeMap[componentName] || 'components-overview';
  };

  const handleComponentNavigation = (componentName: string) => {
    const route = getComponentRoute(componentName);
    onSectionChange(route);
  };

  const stats = [
    { label: '총 컴포넌트', value: '46개', icon: Component, color: 'text-blue-600' },
    { label: '카테고리', value: '6개', icon: Grid3X3, color: 'text-green-600' },
    { label: '문서화 완료', value: '100%', icon: BookOpen, color: 'text-purple-600' },
    { label: '접근성 준수', value: 'WCAG 2.1', icon: Accessibility, color: 'text-orange-600' }
  ];

  const componentCategories = [
    {
      category: '기본 컴포넌트',
      description: '기본적인 UI 요소들',
      count: 8,
      icon: Component,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      components: [
        { name: 'Button', description: '클릭 가능한 버튼', status: 'complete' },
        { name: 'Badge', description: '상태나 카테고리 표시', status: 'complete' },
        { name: 'Avatar', description: '사용자 프로필 이미지', status: 'complete' },
        { name: 'Separator', description: '콘텐츠 구분선', status: 'complete' },
        { name: 'Skeleton', description: '로딩 플레이스홀더', status: 'complete' },
        { name: 'Aspect Ratio', description: '비율 유지 컨테이너', status: 'complete' },
        { name: 'Card', description: '콘텐츠 카드', status: 'complete' },
        { name: 'Alert', description: '알림 메시지', status: 'complete' }
      ]
    },
    {
      category: '폼 컴포넌트',
      description: '사용자 입력을 위한 폼 요소들',
      count: 13,
      icon: FileText,
      color: 'bg-green-50 text-green-700 border-green-200',
      components: [
        { name: 'Input', description: '텍스트 입력 필드', status: 'complete' },
        { name: 'Textarea', description: '다중 행 텍스트 입력', status: 'complete' },
        { name: 'Select', description: '드롭다운 선택', status: 'complete' },
        { name: 'Checkbox', description: '체크박스 선택', status: 'complete' },
        { name: 'Radio Group', description: '라디오 버튼 그룹', status: 'complete' },
        { name: 'Switch', description: '토글 스위치', status: 'complete' },
        { name: 'Slider', description: '범위 선택 슬라이더', status: 'complete' },
        { name: 'Label', description: '폼 필드 라벨', status: 'complete' },
        { name: 'Form', description: '폼 구조와 검증', status: 'complete' },
        { name: 'Input OTP', description: '일회용 비밀번호 입력', status: 'complete' },
        { name: 'Toggle', description: '단일 토글 버튼', status: 'complete' },
        { name: 'Toggle Group', description: '토글 버튼 그룹', status: 'complete' },
        { name: 'Calendar', description: '날짜 선택 달력', status: 'complete' }
      ]
    },
    {
      category: '네비게이션',
      description: '페이지 및 콘텐츠 탐색',
      count: 6,
      icon: Navigation,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      components: [
        { name: 'Breadcrumb', description: '페이지 경로 표시', status: 'complete' },
        { name: 'Pagination', description: '페이지 네비게이션', status: 'complete' },
        { name: 'Tabs', description: '탭 네비게이션', status: 'complete' },
        { name: 'Navigation Menu', description: '네비게이션 메뉴', status: 'complete' },
        { name: 'Menubar', description: '메뉴 바', status: 'complete' },
        { name: 'Sidebar', description: '사이드바 레이아웃', status: 'complete' }
      ]
    },
    {
      category: '오버레이',
      description: '모달, 팝오버, 드롭다운',
      count: 9,
      icon: Layers,
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      components: [
        { name: 'Dialog', description: '모달 다이얼로그', status: 'complete' },
        { name: 'Alert Dialog', description: '확인/취소 다이얼로그', status: 'complete' },
        { name: 'Sheet', description: '슬라이드 패널', status: 'complete' },
        { name: 'Popover', description: '컨텍스트 팝오버', status: 'complete' },
        { name: 'Tooltip', description: '도움말 툴팁', status: 'complete' },
        { name: 'Hover Card', description: '호버 카드', status: 'complete' },
        { name: 'Context Menu', description: '우클릭 메뉴', status: 'complete' },
        { name: 'Dropdown Menu', description: '드롭다운 메뉴', status: 'complete' },
        { name: 'Drawer', description: '서랍 형태 패널', status: 'complete' }
      ]
    },
    {
      category: '데이터 표시',
      description: '데이터 시각화 및 표시',
      count: 6,
      icon: BarChart3,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      components: [
        { name: 'Table', description: '데이터 테이블', status: 'complete' },
        { name: 'Chart', description: '차트 및 그래프', status: 'complete' },
        { name: 'Progress', description: '진행률 표시', status: 'complete' },
        { name: 'Accordion', description: '접이식 콘텐츠', status: 'complete' },
        { name: 'Collapsible', description: '접기/펼치기', status: 'complete' },
        { name: 'Scroll Area', description: '스크롤 영역', status: 'complete' }
      ]
    },
    {
      category: '고급 컴포넌트',
      description: '복합적인 기능의 컴포넌트',
      count: 4,
      icon: Settings,
      color: 'bg-pink-50 text-pink-700 border-pink-200',
      components: [
        { name: 'Command', description: '커맨드 팔레트', status: 'complete' },
        { name: 'Carousel', description: '이미지 캐러셀', status: 'complete' },
        { name: 'Resizable', description: '크기 조정 가능한 패널', status: 'complete' },
        { name: 'Toaster', description: '토스트 알림', status: 'complete' }
      ]
    }
  ];

  const designPrinciples = [
    {
      title: 'shadcn/ui 기반',
      description: '검증된 shadcn/ui 컴포넌트를 기반으로 한 안정적인 시스템',
      icon: Shield,
      benefits: ['Radix UI 프리미티브', 'TypeScript 완전 지원', '커스터마이징 용이']
    },
    {
      title: 'Tailwind v4 & OKLCH',
      description: '최신 CSS 기술과 색상 과학을 활용한 현대적 스타일링',
      icon: Palette,
      benefits: ['OKLCH 색상 공간', '일관된 시각적 표현', '접근성 최적화']
    },
    {
      title: '완전한 접근성',
      description: 'WCAG 2.1 가이드라인을 준수한 포용적 디자인',
      icon: Accessibility,
      benefits: ['키보드 네비게이션', '스크린 리더 지원', 'ARIA 속성 완비']
    },
    {
      title: '개발자 경험',
      description: '직관적인 API와 포괄적인 문서로 생산성 향상',
      icon: Code,
      benefits: ['TypeScript 지원', '실전 예제 제공', '복사 가능한 코드']
    }
  ];

  const keyFeatures = [
    {
      title: '이중 언어 지원',
      description: '한국어와 영어로 제공되는 완전한 문서',
      icon: Globe,
      stats: '100% 한국어 번역'
    },
    {
      title: '실무 중심 예제',
      description: '각 컴포넌트마다 실제 사용 사례 제공',
      icon: Target,
      stats: '200+ 예제 코드'
    },
    {
      title: '반응형 디자인',
      description: '모든 디바이스에서 완벽한 동작',
      icon: Smartphone,
      stats: '데스크탑/모바일 최적화'
    },
    {
      title: '성능 최적화',
      description: '빠른 로딩과 부드러운 애니메이션',
      icon: Zap,
      stats: '최적화된 번들 크기'
    }
  ];

  const usageGuide = [
    {
      step: 1,
      title: '컴포넌트 선택',
      description: '카테고리별로 분류된 컴포넌트 중에서 필요한 것을 선택하세요.',
      icon: Search
    },
    {
      step: 2,
      title: '문서 확인',
      description: '각 컴포넌트의 상세 문서와 예제를 확인하세요.',
      icon: BookOpen
    },
    {
      step: 3,
      title: '코드 복사',
      description: '예제 코드를 복사하여 프로젝트에 바로 적용하세요.',
      icon: Code
    },
    {
      step: 4,
      title: '커스터마이징',
      description: '프로젝트 요구사항에 맞게 스타일을 조정하세요.',
      icon: Palette
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-4">
            <Component className="w-3 h-3 mr-1" />
            46개 컴포넌트 완전 문서화
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            컴포넌트 라이브러리
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            shadcn/ui를 기반으로 구축된 46개의 완전히 문서화된 React 컴포넌트입니다. 
            Tailwind v4와 OKLCH 색상 공간을 활용하여 현대적이고 접근 가능한 UI를 제공합니다.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2" onClick={() => onSectionChange('components')}>
            <Grid3X3 className="w-4 h-4" />
            전체 컴포넌트 보기
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <BookOpen className="w-4 h-4" />
            사용법 가이드
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Component Categories */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">컴포넌트 카테고리</h2>
          <p className="text-muted-foreground">
            체계적으로 분류된 46개의 UI 컴포넌트를 6개 카테고리로 구성
          </p>
        </div>
        
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="basic">기본</TabsTrigger>
            <TabsTrigger value="form">폼</TabsTrigger>
            <TabsTrigger value="nav">네비게이션</TabsTrigger>
            <TabsTrigger value="overlay">오버레이</TabsTrigger>
            <TabsTrigger value="data">데이터</TabsTrigger>
            <TabsTrigger value="advanced">고급</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="secondary">{category.count}개</Badge>
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.components.slice(0, 4).map((component, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span>{component.name}</span>
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                      ))}
                      {category.components.length > 4 && (
                        <div className="text-xs text-muted-foreground pt-1">
                          +{category.components.length - 4}개 더
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {componentCategories.map((category, categoryIndex) => (
            <TabsContent 
              key={categoryIndex}
              value={category.category === '기본 컴포넌트' ? 'basic' : 
                     category.category === '폼 컴포넌트' ? 'form' :
                     category.category === '네비게이션' ? 'nav' :
                     category.category === '오버레이' ? 'overlay' :
                     category.category === '데이터 표시' ? 'data' :
                     category.category === '고급 컴포넌트' ? 'advanced' : ''}
              className="space-y-4"
            >
              <Card className={`border-l-4 ${category.color.includes('blue') ? 'border-l-blue-500' :
                                              category.color.includes('green') ? 'border-l-green-500' :
                                              category.color.includes('purple') ? 'border-l-purple-500' :
                                              category.color.includes('orange') ? 'border-l-orange-500' :
                                              category.color.includes('cyan') ? 'border-l-cyan-500' :
                                              category.color.includes('pink') ? 'border-l-pink-500' : 'border-l-gray-500'}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="w-6 h-6" />
                    <div>
                      <CardTitle>{category.category}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.components.map((component, i) => (
                      <Card key={i} className="hover:shadow-sm transition-shadow">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium">{component.name}</h4>
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full p-0 h-auto text-primary hover:text-primary/80"
                            onClick={() => handleComponentNavigation(component.name)}
                          >
                            문서 보기 →
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Design Principles */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">설계 원칙</h2>
          <p className="text-muted-foreground">
            모든 컴포넌트가 따르는 핵심 설계 원칙들
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((principle, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <principle.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <CardTitle className="text-lg">{principle.title}</CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {principle.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">주요 특징</h2>
          <p className="text-muted-foreground">
            개발자와 사용자 모두를 위한 특별한 기능들
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                <Badge variant="secondary" className="text-xs">{feature.stats}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Usage Guide */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">사용 가이드</h2>
          <p className="text-muted-foreground">
            컴포넌트를 효과적으로 활용하는 4단계 과정
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usageGuide.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader className="text-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <step.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              {index < usageGuide.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-muted-foreground" />
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Accessibility Highlight */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Accessibility className="w-6 h-6" />
            접근성 우선 설계
          </h2>
          <p className="text-muted-foreground">
            모든 컴포넌트가 WCAG 2.1 가이드라인을 준수합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <Keyboard className="w-8 h-8 mx-auto text-blue-600" />
            <h4 className="font-semibold">키보드 네비게이션</h4>
            <p className="text-sm text-muted-foreground">모든 상호작용이 키보드로 가능</p>
          </div>
          <div className="text-center space-y-3">
            <Volume2 className="w-8 h-8 mx-auto text-green-600" />
            <h4 className="font-semibold">스크린 리더</h4>
            <p className="text-sm text-muted-foreground">ARIA 속성과 시맨틱 HTML</p>
          </div>
          <div className="text-center space-y-3">
            <Eye className="w-8 h-8 mx-auto text-purple-600" />
            <h4 className="font-semibold">시각적 접근성</h4>
            <p className="text-sm text-muted-foreground">고대비와 색각 지원</p>
          </div>
          <div className="text-center space-y-3">
            <MousePointer className="w-8 h-8 mx-auto text-orange-600" />
            <h4 className="font-semibold">모터 접근성</h4>
            <p className="text-sm text-muted-foreground">충분한 클릭 영역</p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="border-t pt-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">빠른 접근</h2>
          <p className="text-muted-foreground">자주 사용하는 컴포넌트들</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Button', icon: MousePointer, category: '기본', usage: '가장 많이 사용' },
            { name: 'Input', icon: Type, category: '폼', usage: '텍스트 입력' },
            { name: 'Dialog', icon: Square, category: '오버레이', usage: '모달 창' },
            { name: 'Table', icon: Grid3X3, category: '데이터', usage: '데이터 표시' }
          ].map((component, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleComponentNavigation(component.name)}
            >
              <CardContent className="pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <component.icon className="w-5 h-5 text-primary" />
                  <h4 className="font-medium">{component.name}</h4>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">{component.category}</Badge>
                  <span className="text-xs text-muted-foreground">{component.usage}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}