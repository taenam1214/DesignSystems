import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  Palette,
  Layout,
  Accessibility,
  Zap,
  Globe,
  Code,
  Sparkles,
  Component,
  BookOpen,
  Users,
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Coffee,
  Lightbulb,
  Target,
  Shield,
  Layers,
  PenTool,
  Gauge,
  Package,
  FileText,
  Settings,
  HelpCircle,
  BarChart3,
  Brush,
  Type,
  Grid3X3,
  Eye,
  MousePointer,
  Keyboard,
  Volume2
} from 'lucide-react';

export function OverviewSection() {
  const stats = [
    { label: '총 컴포넌트', value: '46개', icon: Component, color: 'text-blue-600' },
    { label: '가이드라인 섹션', value: '4개', icon: BookOpen, color: 'text-green-600' },
    { label: '언어 지원', value: '한/영', icon: Globe, color: 'text-purple-600' },
    { label: '접근성 레벨', value: 'WCAG 2.1', icon: Accessibility, color: 'text-orange-600' }
  ];

  const features = [
    {
      title: '포괄적인 컴포넌트 라이브러리',
      description: '46개의 완전히 문서화된 UI 컴포넌트로 모든 사용 사례를 다룹니다.',
      icon: Component,
      highlights: ['Button, Card, Dialog 등 기본 컴포넌트', 'Calendar, Chart, Table 등 복합 컴포넌트', 'Form, Navigation 등 패턴 컴포넌트']
    },
    {
      title: '이중 언어 지원',
      description: '한국어와 영어로 제공되는 완전한 문서화로 글로벌 팀에서 사용할 수 있습니다.',
      icon: Globe,
      highlights: ['완전한 한국어 번역', '영어 원문 유지', '문화적 맥락 고려']
    },
    {
      title: 'Tailwind v4 & OKLCH',
      description: '최신 CSS 기술과 색상 과학을 활용한 현대적인 스타일링 시스템입니다.',
      icon: Palette,
      highlights: ['Tailwind CSS v4 베타', 'OKLCH 색상 공간', '일관된 시각적 표현']
    },
    {
      title: '완전한 접근성',
      description: 'WCAG 2.1 가이드라인을 준수하여 모든 사용자가 접근할 수 있는 컴포넌트입니다.',
      icon: Accessibility,
      highlights: ['키보드 네비게이션', '스크린 리더 지원', 'ARIA 속성 완비']
    },
    {
      title: 'shadcn/ui 기반',
      description: '검증된 shadcn/ui 컴포넌트를 기반으로 한 안정적이고 확장 가능한 시스템입니다.',
      icon: Layers,
      highlights: ['Radix UI 프리미티브', 'TypeScript 완전 지원', '커스터마이징 가능']
    },
    {
      title: '실무 중심 예제',
      description: '각 컴포넌트마다 실제 사용 사례와 모범 사례를 제공합니다.',
      icon: Target,
      highlights: ['실전 사용 시나리오', '코드 예제 제공', 'UX 가이드라인']
    }
  ];

  const componentCategories = [
    {
      category: '기본 컴포넌트',
      count: 8,
      examples: ['Button', 'Card', 'Badge', 'Avatar', 'Separator'],
      icon: Component
    },
    {
      category: '폼 컴포넌트',
      count: 13,
      examples: ['Input', 'Select', 'Checkbox', 'Switch', 'Slider'],
      icon: FileText
    },
    {
      category: '네비게이션',
      count: 6,
      examples: ['Sidebar', 'Breadcrumb', 'Pagination', 'MenuBar', 'Navigation Menu'],
      icon: Layout
    },
    {
      category: '오버레이',
      count: 9,
      examples: ['Dialog', 'Sheet', 'Popover', 'Tooltip', 'Alert Dialog'],
      icon: Layers
    },
    {
      category: '데이터 표시',
      count: 6,
      examples: ['Table', 'Chart', 'Progress', 'Skeleton', 'Accordion'],
      icon: BarChart3
    },
    {
      category: '고급 컴포넌트',
      count: 4,
      examples: ['Command', 'Resizable', 'Carousel', 'Toaster'],
      icon: Settings
    }
  ];

  const designPrinciples = [
    {
      title: '일관성',
      description: '모든 컴포넌트에서 일관된 디자인 언어와 상호작용 패턴을 유지합니다.',
      icon: CheckCircle
    },
    {
      title: '접근성 우선',
      description: '모든 사용자가 접근할 수 있도록 설계된 포용적인 디자인입니다.',
      icon: Accessibility
    },
    {
      title: '개발자 경험',
      description: '직관적인 API와 포괄적인 문서로 개발자의 생산성을 높입니다.',
      icon: Code
    },
    {
      title: '확장성',
      description: '프로젝트 요구사항에 맞게 쉽게 커스터마이징하고 확장할 수 있습니다.',
      icon: Zap
    }
  ];

  const gettingStartedSteps = [
    {
      step: 1,
      title: '컴포넌트 탐색',
      description: '사이드바에서 원하는 컴포넌트를 선택하여 문서와 예제를 확인하세요.',
      action: '컴포넌트 보기'
    },
    {
      step: 2,
      title: '가이드라인 학습',
      description: '색상, 타이포그래피, 간격 등의 디자인 가이드라인을 학습하세요.',
      action: '가이드라인 보기'
    },
    {
      step: 3,
      title: '코드 복사 & 사용',
      description: '예제 코드를 복사하여 프로젝트에 바로 적용할 수 있습니다.',
      action: '시작하기'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            v1.0.0 - 완전한 한국어 지원
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            DJ 디자인 시스템
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            현대적이고 접근 가능한 UI 컴포넌트 라이브러리입니다. 
            Tailwind v4와 OKLCH 색상 공간을 활용하여 일관되고 아름다운 사용자 경험을 제공합니다.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Component className="w-4 h-4" />
            컴포넌트 둘러보기
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <BookOpen className="w-4 h-4" />
            가이드라인 읽기
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

      {/* Key Features */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">주요 특징</h2>
          <p className="text-muted-foreground">
            현대적인 웹 개발을 위한 모든 것을 갖춘 포괄적인 디자인 시스템
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <feature.icon className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Component Categories */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">컴포넌트 카테고리</h2>
          <p className="text-muted-foreground">
            체계적으로 분류된 46개의 UI 컴포넌트
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <category.icon className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">{category.count}개</Badge>
                </div>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {category.examples.map((example, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Design Principles */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">디자인 원칙</h2>
          <p className="text-muted-foreground">
            모든 컴포넌트 설계의 기반이 되는 핵심 원칙들
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((principle, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <principle.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">기술 스택</h2>
          <p className="text-muted-foreground">
            최신 기술을 활용한 현대적인 개발 환경
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <Code className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold mb-1">React 18</h4>
              <p className="text-sm text-muted-foreground">최신 React 기능 활용</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Brush className="w-8 h-8 mx-auto mb-3 text-cyan-600" />
              <h4 className="font-semibold mb-1">Tailwind v4</h4>
              <p className="text-sm text-muted-foreground">차세대 유틸리티 CSS</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Palette className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h4 className="font-semibold mb-1">OKLCH 색상</h4>
              <p className="text-sm text-muted-foreground">지각적 균일성</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Package className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h4 className="font-semibold mb-1">shadcn/ui</h4>
              <p className="text-sm text-muted-foreground">검증된 컴포넌트</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">시작하기</h2>
          <p className="text-muted-foreground">
            세 단계로 디자인 시스템을 활용해보세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {gettingStartedSteps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full gap-2">
                  {step.action}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Accessibility Highlights */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Accessibility className="w-6 h-6" />
            접근성 우선 설계
          </h2>
          <p className="text-muted-foreground">
            모든 사용자를 위한 포용적인 디자인
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center space-y-2">
            <Keyboard className="w-8 h-8 mx-auto text-blue-600" />
            <h4 className="font-semibold">키보드 네비게이션</h4>
            <p className="text-sm text-muted-foreground">완전한 키보드 지원</p>
          </div>
          <div className="text-center space-y-2">
            <Volume2 className="w-8 h-8 mx-auto text-green-600" />
            <h4 className="font-semibold">스크린 리더</h4>
            <p className="text-sm text-muted-foreground">ARIA 속성 완비</p>
          </div>
          <div className="text-center space-y-2">
            <Eye className="w-8 h-8 mx-auto text-purple-600" />
            <h4 className="font-semibold">시각적 접근성</h4>
            <p className="text-sm text-muted-foreground">고대비 및 색각 지원</p>
          </div>
          <div className="text-center space-y-2">
            <MousePointer className="w-8 h-8 mx-auto text-orange-600" />
            <h4 className="font-semibold">모터 접근성</h4>
            <p className="text-sm text-muted-foreground">충분한 클릭 영역</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <Component className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">컴포넌트</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                46개의 완전히 문서화된 UI 컴포넌트를 탐색하세요.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                컴포넌트 보기 →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">가이드라인</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                색상, 타이포그래피, 간격 등의 디자인 가이드라인을 확인하세요.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                가이드라인 보기 →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <Accessibility className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">접근성</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                WCAG 2.1 가이드라인을 준수한 접근성 정보를 학습하세요.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                접근성 보기 →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">도움말</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                자주 묻는 질문과 문제 해결 방법을 찾아보세요.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                도움말 보기 →
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}