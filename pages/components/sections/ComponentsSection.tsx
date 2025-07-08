import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Zap, 
  FileText, 
  Layout, 
  MousePointer, 
  Database,
  MessageSquare,
  Layers,
  CheckCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  Star,
  Bookmark,
  Tag
} from 'lucide-react';
import { useState } from 'react';

export function ComponentsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: '전체', icon: Grid3X3, count: 65 },
    { id: 'form', label: '폼 컨트롤', icon: FileText, count: 13 },
    { id: 'layout', label: '레이아웃', icon: Layout, count: 10 },
    { id: 'navigation', label: '네비게이션', icon: MousePointer, count: 5 },
    { id: 'feedback', label: '피드백', icon: MessageSquare, count: 5 },
    { id: 'overlay', label: '오버레이', icon: Layers, count: 8 },
    { id: 'data', label: '데이터 표시', icon: Database, count: 5 }
  ];

  const components = [
    // Form Controls
    { 
      id: 'button', 
      name: 'Button', 
      category: 'form',
      description: '사용자 액션을 트리거하는 클릭 가능한 요소',
      documented: true,
      featured: true,
      status: 'stable',
      tags: ['interactive', 'primary']
    },
    { 
      id: 'input', 
      name: 'Input', 
      category: 'form',
      description: '텍스트 입력을 위한 필드',
      documented: true,
      featured: true,
      status: 'stable',
      tags: ['form', 'text']
    },
    { 
      id: 'checkbox', 
      name: 'Checkbox', 
      category: 'form',
      description: '다중 선택을 위한 체크박스',
      documented: true,
      featured: false,
      status: 'stable',
      tags: ['form', 'selection']
    },
    { 
      id: 'select', 
      name: 'Select', 
      category: 'form',
      description: '옵션 선택을 위한 드롭다운',
      documented: true,
      featured: false,
      status: 'stable',
      tags: ['form', 'dropdown']
    },
    { 
      id: 'toggle', 
      name: 'Toggle', 
      category: 'form',
      description: '이진 상태 토글 컨트롤',
      documented: true,
      featured: false,
      status: 'stable',
      tags: ['form', 'toggle']
    },
    { 
      id: 'toggle-group', 
      name: 'Toggle Group', 
      category: 'form',
      description: '그룹화된 토글 컨트롤',
      documented: true,
      featured: false,
      status: 'stable',
      tags: ['form', 'group']
    },
    { 
      id: 'textarea', 
      name: 'Textarea', 
      category: 'form',
      description: '여러 줄 텍스트 입력',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['form', 'text']
    },
    { 
      id: 'radio-group', 
      name: 'Radio Group', 
      category: 'form',
      description: '단일 선택 라디오 버튼 그룹',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['form', 'selection']
    },
    { 
      id: 'switch', 
      name: 'Switch', 
      category: 'form',
      description: '온/오프 스위치 컨트롤',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['form', 'toggle']
    },
    { 
      id: 'slider', 
      name: 'Slider', 
      category: 'form',
      description: '범위 값 선택 슬라이더',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['form', 'range']
    },
    { 
      id: 'form', 
      name: 'Form', 
      category: 'form',
      description: '폼 검증 및 레이아웃',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['form', 'validation']
    },
    { 
      id: 'label', 
      name: 'Label', 
      category: 'form',
      description: '폼 필드 라벨',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['form', 'accessibility']
    },
    { 
      id: 'input-otp', 
      name: 'Input OTP', 
      category: 'form',
      description: '일회용 비밀번호 입력',
      documented: false,
      featured: false,
      status: 'beta',
      tags: ['form', 'security']
    },

    // Layout
    { 
      id: 'card', 
      name: 'Card', 
      category: 'layout',
      description: '콘텐츠를 위한 유연한 컨테이너',
      documented: true,
      featured: true,
      status: 'stable',
      tags: ['container', 'content']
    },
    { 
      id: 'tabs', 
      name: 'Tabs', 
      category: 'layout',
      description: '탭으로 구성된 콘텐츠 섹션',
      documented: true,
      featured: true,
      status: 'stable',
      tags: ['navigation', 'content']
    },
    { 
      id: 'separator', 
      name: 'Separator', 
      category: 'layout',
      description: '콘텐츠 구분을 위한 구분선',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['divider', 'spacing']
    },
    { 
      id: 'accordion', 
      name: 'Accordion', 
      category: 'layout',
      description: '접을 수 있는 콘텐츠 섹션',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['collapsible', 'content']
    },
    { 
      id: 'collapsible', 
      name: 'Collapsible', 
      category: 'layout',
      description: '확장 가능한 콘텐츠 영역',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['collapsible', 'content']
    },
    { 
      id: 'resizable', 
      name: 'Resizable', 
      category: 'layout',
      description: '크기 조정 가능한 패널',
      documented: false,
      featured: false,
      status: 'beta',
      tags: ['resizable', 'panel']
    },
    { 
      id: 'scroll-area', 
      name: 'Scroll Area', 
      category: 'layout',
      description: '사용자 정의 스크롤 컨테이너',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['scroll', 'container']
    },
    { 
      id: 'sidebar', 
      name: 'Sidebar', 
      category: 'layout',
      description: '네비게이션 사이드바',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['navigation', 'layout']
    },
    { 
      id: 'aspect-ratio', 
      name: 'Aspect Ratio', 
      category: 'layout',
      description: '비율 유지 컨테이너',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['ratio', 'responsive']
    },
    { 
      id: 'carousel', 
      name: 'Carousel', 
      category: 'layout',
      description: '이미지 및 콘텐츠 슬라이더',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['slider', 'media']
    },

    // Navigation
    { 
      id: 'breadcrumb', 
      name: 'Breadcrumb', 
      category: 'navigation',
      description: '계층적 네비게이션 경로',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['navigation', 'hierarchy']
    },
    { 
      id: 'navigation-menu', 
      name: 'Navigation Menu', 
      category: 'navigation',
      description: '사이트 네비게이션 메뉴',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['navigation', 'menu']
    },
    { 
      id: 'menubar', 
      name: 'Menubar', 
      category: 'navigation',
      description: '애플리케이션 메뉴바',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['navigation', 'menu']
    },
    { 
      id: 'pagination', 
      name: 'Pagination', 
      category: 'navigation',
      description: '페이지 네비게이션 컨트롤',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['navigation', 'paging']
    },
    { 
      id: 'command', 
      name: 'Command', 
      category: 'navigation',
      description: '명령 팔레트 인터페이스',
      documented: false,
      featured: false,
      status: 'beta',
      tags: ['search', 'command']
    },

    // Feedback
    { 
      id: 'badge', 
      name: 'Badge', 
      category: 'feedback',
      description: '상태 및 라벨링 배지',
      documented: true,
      featured: false,
      status: 'stable',
      tags: ['status', 'label']
    },
    { 
      id: 'alert', 
      name: 'Alert', 
      category: 'feedback',
      description: '상황별 피드백 메시지',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['feedback', 'message']
    },
    { 
      id: 'progress', 
      name: 'Progress', 
      category: 'feedback',
      description: '진행률 표시기',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['progress', 'loading']
    },
    { 
      id: 'skeleton', 
      name: 'Skeleton', 
      category: 'feedback',
      description: '로딩 상태 플레이스홀더',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['loading', 'placeholder']
    },
    { 
      id: 'tooltip', 
      name: 'Tooltip', 
      category: 'feedback',
      description: '상황별 도움말 툴팁',
      documented: true,
      featured: false,
      status: 'stable',
      tags: ['help', 'overlay']
    },

    // Overlay
    { 
      id: 'dialog', 
      name: 'Dialog', 
      category: 'overlay',
      description: '모달 다이얼로그 창',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['modal', 'overlay']
    },
    { 
      id: 'alert-dialog', 
      name: 'Alert Dialog', 
      category: 'overlay',
      description: '알림 확인 다이얼로그',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['modal', 'confirmation']
    },
    { 
      id: 'sheet', 
      name: 'Sheet', 
      category: 'overlay',
      description: '슬라이드 아웃 패널',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['overlay', 'panel']
    },
    { 
      id: 'drawer', 
      name: 'Drawer', 
      category: 'overlay',
      description: '모바일 친화적 슬라이드 패널',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['mobile', 'overlay']
    },
    { 
      id: 'popover', 
      name: 'Popover', 
      category: 'overlay',
      description: '상황별 팝업 콘텐츠',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['popup', 'overlay']
    },
    { 
      id: 'hover-card', 
      name: 'Hover Card', 
      category: 'overlay',
      description: '호버로 트리거되는 콘텐츠 카드',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['hover', 'card']
    },
    { 
      id: 'dropdown-menu', 
      name: 'Dropdown Menu', 
      category: 'overlay',
      description: '상황별 액션 메뉴',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['menu', 'dropdown']
    },
    { 
      id: 'context-menu', 
      name: 'Context Menu', 
      category: 'overlay',
      description: '우클릭 컨텍스트 메뉴',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['context', 'menu']
    },

    // Data Display
    { 
      id: 'table', 
      name: 'Table', 
      category: 'data',
      description: '데이터 테이블 및 그리드',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['table', 'data']
    },
    { 
      id: 'data-table', 
      name: 'Data Table', 
      category: 'data',
      description: '정렬 및 필터링 기능이 있는 고급 데이터 테이블',
      documented: true,
      featured: true,
      status: 'stable',
      tags: ['table', 'sorting', 'filtering']
    },
    { 
      id: 'chart', 
      name: 'Chart', 
      category: 'data',
      description: '데이터 시각화 차트',
      documented: true,
      featured: true,
      status: 'stable',
      tags: ['chart', 'visualization']
    },
    { 
      id: 'calendar', 
      name: 'Calendar', 
      category: 'data',
      description: '날짜 선택 캘린더',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['date', 'picker']
    },
    { 
      id: 'avatar', 
      name: 'Avatar', 
      category: 'data',
      description: '사용자 프로필 이미지',
      documented: false,
      featured: false,
      status: 'stable',
      tags: ['user', 'image']
    }
  ];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredComponents = components.filter(comp => comp.featured);
  const documentedCount = components.filter(comp => comp.documented).length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'stable':
        return <Badge variant="outline" className="text-green-600">안정</Badge>;
      case 'beta':
        return <Badge variant="outline" className="text-orange-600">베타</Badge>;
      case 'alpha':
        return <Badge variant="outline" className="text-red-600">알파</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">컴포넌트</h1>
            <p className="text-muted-foreground">
              현대적인 웹 애플리케이션 구축을 위한 재사용 가능한 UI 컴포넌트 라이브러리입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            {components.length}개 컴포넌트
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            {documentedCount}개 문서화
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            {featuredComponents.length}개 주요 기능
          </Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      {/* Featured Components */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            주요 컴포넌트
          </CardTitle>
          <CardDescription>
            완전한 문서와 예제가 준비된 추천 컴포넌트입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredComponents.map((component) => (
              <Card key={component.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{component.name}</h4>
                      <div className="text-xs text-muted-foreground capitalize">
                        {categories.find(cat => cat.id === component.category)?.label}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {getStatusBadge(component.status)}
                      {component.documented && (
                        <Badge variant="outline" className="text-xs">
                          문서
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {component.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    문서 보기
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">탐색</TabsTrigger>
          <TabsTrigger value="categories">카테고리</TabsTrigger>
          <TabsTrigger value="status">상태</TabsTrigger>
        </TabsList>

        {/* Browse Tab */}
        <TabsContent value="browse" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="컴포넌트 검색..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border rounded-md text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label} ({category.count})
                      </option>
                    ))}
                  </select>
                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              {searchTerm && (
                <div className="mt-2 text-sm text-muted-foreground">
                  "{searchTerm}"에 대한 {filteredComponents.length}개 결과
                </div>
              )}
            </CardContent>
          </Card>

          {/* Components Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredComponents.map((component) => (
                <Card key={component.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{component.name}</h4>
                        <div className="text-xs text-muted-foreground capitalize">
                          {categories.find(cat => cat.id === component.category)?.label}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {getStatusBadge(component.status)}
                        {component.documented && (
                          <Badge variant="outline" className="text-xs">
                            문서
                          </Badge>
                        )}
                        {component.featured && (
                          <Star className="w-3 h-3 text-yellow-500" />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {component.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {component.documented ? (
                        <Button size="sm" variant="outline" className="flex-1">
                          문서 보기
                        </Button>
                      ) : (
                        <Button size="sm" variant="ghost" className="flex-1" disabled>
                          <Clock className="w-3 h-3 mr-1" />
                          준비 중
                        </Button>
                      )}
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredComponents.map((component) => (
                <Card key={component.id} className="group hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{component.name}</h4>
                            {component.featured && <Star className="w-3 h-3 text-yellow-500" />}
                            {getStatusBadge(component.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">{component.description}</p>
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {categories.find(cat => cat.id === component.category)?.label}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-wrap gap-1">
                          {component.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {component.documented ? (
                          <Button size="sm" variant="outline">
                            문서 보기
                          </Button>
                        ) : (
                          <Button size="sm" variant="ghost" disabled>
                            <Clock className="w-3 h-3 mr-1" />
                            준비 중
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredComponents.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-muted-foreground">
                  검색 조건에 맞는 컴포넌트가 없습니다.
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4"
                >
                  필터 초기화
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.filter(cat => cat.id !== 'all').map((category) => {
              const CategoryIcon = category.icon;
              const categoryComponents = components.filter(comp => comp.category === category.id);
              const documentedInCategory = categoryComponents.filter(comp => comp.documented).length;
              
              return (
                <Card key={category.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <CategoryIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{category.label}</CardTitle>
                        <div className="text-xs text-muted-foreground">
                          {category.count}개 컴포넌트 · {documentedInCategory}개 문서화
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {categoryComponents.slice(0, 4).map((component) => (
                        <div key={component.id} className="flex items-center justify-between text-sm">
                          <span>{component.name}</span>
                          {component.documented ? (
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          ) : (
                            <Clock className="w-3 h-3 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                      {categoryComponents.length > 4 && (
                        <div className="text-xs text-muted-foreground">
                          +{categoryComponents.length - 4}개 더
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Status Tab */}
        <TabsContent value="status" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-700">안정 ({components.filter(c => c.status === 'stable').length})</CardTitle>
                <CardDescription>
                  프로덕션에서 사용할 준비가 된 컴포넌트
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {components.filter(c => c.status === 'stable').slice(0, 8).map((component) => (
                    <div key={component.id} className="flex items-center justify-between text-sm">
                      <span>{component.name}</span>
                      {component.documented ? (
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      ) : (
                        <Clock className="w-3 h-3 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                  {components.filter(c => c.status === 'stable').length > 8 && (
                    <div className="text-xs text-muted-foreground mt-2">
                      +{components.filter(c => c.status === 'stable').length - 8}개 더
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-700">베타 ({components.filter(c => c.status === 'beta').length})</CardTitle>
                <CardDescription>
                  테스트 중인 컴포넌트, API 변경 가능
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {components.filter(c => c.status === 'beta').map((component) => (
                    <div key={component.id} className="flex items-center justify-between text-sm">
                      <span>{component.name}</span>
                      {component.documented ? (
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      ) : (
                        <Clock className="w-3 h-3 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-700">문서화 진행률</CardTitle>
                <CardDescription>
                  컴포넌트별 문서 작성 상태
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>전체 진행률</span>
                      <span>{Math.round((documentedCount / components.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(documentedCount / components.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>문서화 완료</span>
                      <span className="text-green-600">{documentedCount}개</span>
                    </div>
                    <div className="flex justify-between">
                      <span>문서 작성 중</span>
                      <span className="text-orange-600">{components.length - documentedCount}개</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}