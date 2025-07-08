import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  Type,
  Palette,
  Zap,
  Copy,
  Check,
  Grid,
  Layout,
  Settings,
  Filter,
  SortAsc,
  SortDesc,
  Eye,
  EyeOff,
  Calendar,
  Clock,
  Star,
  Heart,
  Bookmark,
  ArrowRight,
  Info,
  CheckCircle,
  XCircle
} from 'lucide-react';

export function ToggleGroupComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [demoState, setDemoState] = useState({
    textFormatting: ['bold'],
    textAlignment: 'left',
    listType: '',
    viewMode: 'grid',
    sortOrder: '',
    filters: [],
    favorites: []
  });

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

  const examples = [
    {
      title: '텍스트 에디터 도구모음',
      description: '텍스트 서식 옵션을 위한 다중 선택 토글 그룹입니다.',
      component: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">텍스트 서식 (다중 선택)</h4>
              <ToggleGroup
                type="multiple"
                value={demoState.textFormatting}
                onValueChange={(value) => setDemoState(prev => ({ ...prev, textFormatting: value }))}
                className="border rounded-lg p-1 bg-muted/20"
              >
                <ToggleGroupItem value="bold" aria-label="굵게 토글">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="기울임 토글">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="밑줄 토글">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-3">텍스트 정렬 (단일 선택)</h4>
              <ToggleGroup
                type="single"
                value={demoState.textAlignment}
                onValueChange={(value) => setDemoState(prev => ({ ...prev, textAlignment: value || 'left' }))}
                className="border rounded-lg p-1 bg-muted/20"
              >
                <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="중앙 정렬">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="양쪽 정렬">
                  <AlignJustify className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-3">목록 옵션 (단일 선택)</h4>
              <ToggleGroup
                type="single"
                value={demoState.listType}
                onValueChange={(value) => setDemoState(prev => ({ ...prev, listType: value || '' }))}
                className="border rounded-lg p-1 bg-muted/20"
              >
                <ToggleGroupItem value="bullet" aria-label="불릿 목록">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="numbered" aria-label="번호 목록">
                  <ListOrdered className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="quote" aria-label="인용">
                  <Quote className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="code" aria-label="코드 블록">
                  <Code className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-background">
            <div 
              className={`transition-all ${
                demoState.textAlignment === 'center' ? 'text-center' : 
                demoState.textAlignment === 'right' ? 'text-right' : 
                demoState.textAlignment === 'justify' ? 'text-justify' : 'text-left'
              }`}
              style={{
                fontWeight: demoState.textFormatting.includes('bold') ? 'bold' : 'normal',
                fontStyle: demoState.textFormatting.includes('italic') ? 'italic' : 'normal',
                textDecoration: demoState.textFormatting.includes('underline') ? 'underline' : 'none'
              }}
            >
              <h4 className="mb-2">미리보기 텍스트</h4>
              <p className="text-sm text-muted-foreground">
                이 텍스트는 위의 토글 그룹으로 제어되는 서식과 정렬 옵션을 보여줍니다. 
                선택된 서식: {demoState.textFormatting.join(', ') || '없음'} | 
                정렬: {demoState.textAlignment} | 
                목록 유형: {demoState.listType || '없음'}
              </p>
            </div>
          </div>
        </div>
      ),
      code: `import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export function TextEditor() {
  const [formatting, setFormatting] = useState(['bold'])
  const [alignment, setAlignment] = useState('left')

  return (
    <div className="space-y-4">
      {/* 다중 선택 - 텍스트 서식 */}
      <ToggleGroup
        type="multiple"
        value={formatting}
        onValueChange={setFormatting}
      >
        <ToggleGroupItem value="bold" aria-label="굵게">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="기울임">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="밑줄">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      {/* 단일 선택 - 텍스트 정렬 */}
      <ToggleGroup
        type="single"
        value={alignment}
        onValueChange={setAlignment}
      >
        <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="중앙 정렬">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`
    },
    {
      title: '데이터 보기 컨트롤',
      description: '데이터 표시 및 필터링 옵션을 제어하기 위한 토글 그룹입니다.',
      component: (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">보기 모드</h4>
              <ToggleGroup
                type="single"
                value={demoState.viewMode}
                onValueChange={(value) => setDemoState(prev => ({ ...prev, viewMode: value || 'grid' }))}
                variant="outline"
              >
                <ToggleGroupItem value="grid" aria-label="그리드 보기">
                  <Grid className="h-4 w-4" />
                  그리드
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="목록 보기">
                  <Layout className="h-4 w-4" />
                  목록
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <h4 className="font-medium mb-3">정렬 순서</h4>
              <ToggleGroup
                type="single"
                value={demoState.sortOrder}
                onValueChange={(value) => setDemoState(prev => ({ ...prev, sortOrder: value || '' }))}
                variant="outline"
                size="sm"
              >
                <ToggleGroupItem value="asc" aria-label="오름차순 정렬">
                  <SortAsc className="h-3 w-3" />
                </ToggleGroupItem>
                <ToggleGroupItem value="desc" aria-label="내림차순 정렬">
                  <SortDesc className="h-3 w-3" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">필터 (다중)</h4>
              <ToggleGroup
                type="multiple"
                value={demoState.filters}
                onValueChange={(value) => setDemoState(prev => ({ ...prev, filters: value }))}
                variant="outline"
              >
                <ToggleGroupItem value="starred" aria-label="즐겨찾기 표시">
                  <Star className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="recent" aria-label="최근 항목 표시">
                  <Clock className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="shared" aria-label="공유된 항목 표시">
                  <Calendar className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <h4 className="font-medium mb-3">빠른 액션</h4>
              <ToggleGroup
                type="multiple"
                value={demoState.favorites}
                onValueChange={(value) => setDemoState(prev => ({ ...prev, favorites: value }))}
                size="lg"
              >
                <ToggleGroupItem value="favorite" aria-label="즐겨찾기에 추가">
                  <Heart className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="bookmark" aria-label="북마크">
                  <Bookmark className="h-5 w-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      ),
      code: `// 보기 모드 선택 (단일)
<ToggleGroup type="single" value={viewMode} onValueChange={setViewMode}>
  <ToggleGroupItem value="grid">
    <Grid className="h-4 w-4" />
    그리드
  </ToggleGroupItem>
  <ToggleGroupItem value="list">
    <Layout className="h-4 w-4" />
    목록
  </ToggleGroupItem>
</ToggleGroup>

// 필터 선택 (다중)
<ToggleGroup type="multiple" value={filters} onValueChange={setFilters}>
  <ToggleGroupItem value="starred">
    <Star className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="recent">
    <Clock className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`
    },
    {
      title: 'Variant 및 크기',
      description: 'ToggleGroup 컴포넌트의 다양한 스타일과 크기 옵션입니다.',
      component: (
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-4">기본 Variant</h4>
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="중앙 정렬">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <h4 className="font-medium mb-4">Outline Variant</h4>
            <ToggleGroup type="multiple" variant="outline" defaultValue={['bold', 'italic']}>
              <ToggleGroupItem value="bold" aria-label="굵게">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="기울임">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="밑줄">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">크기 옵션</h4>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-muted-foreground mb-2 block">Small (sm)</span>
                <ToggleGroup type="single" size="sm" defaultValue="grid">
                  <ToggleGroupItem value="grid" aria-label="그리드 보기">
                    <Grid className="h-3 w-3" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" aria-label="목록 보기">
                    <Layout className="h-3 w-3" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <span className="text-sm text-muted-foreground mb-2 block">기본</span>
                <ToggleGroup type="single" defaultValue="grid">
                  <ToggleGroupItem value="grid" aria-label="그리드 보기">
                    <Grid className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" aria-label="목록 보기">
                    <Layout className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <span className="text-sm text-muted-foreground mb-2 block">Large (lg)</span>
                <ToggleGroup type="single" size="lg" defaultValue="grid">
                  <ToggleGroupItem value="grid" aria-label="그리드 보기">
                    <Grid className="h-5 w-5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" aria-label="목록 보기">
                    <Layout className="h-5 w-5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">텍스트 라벨 포함</h4>
            <div className="space-y-3">
              <ToggleGroup type="single" variant="outline" defaultValue="grid">
                <ToggleGroupItem value="grid">
                  <Grid className="h-4 w-4 mr-2" />
                  그리드 보기
                </ToggleGroupItem>
                <ToggleGroupItem value="list">
                  <Layout className="h-4 w-4 mr-2" />
                  목록 보기
                </ToggleGroupItem>
              </ToggleGroup>
              
              <ToggleGroup type="multiple" size="sm">
                <ToggleGroupItem value="visible">
                  <Eye className="h-3 w-3 mr-1" />
                  보임
                </ToggleGroupItem>
                <ToggleGroupItem value="hidden">
                  <EyeOff className="h-3 w-3 mr-1" />
                  숨김
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      ),
      code: `// Variant 옵션
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">왼쪽</ToggleGroupItem>
  <ToggleGroupItem value="center">중앙</ToggleGroupItem>
  <ToggleGroupItem value="right">오른쪽</ToggleGroupItem>
</ToggleGroup>

// 크기 옵션
<ToggleGroup type="single" size="lg">
  <ToggleGroupItem value="grid">
    <Grid className="h-5 w-5" />
  </ToggleGroupItem>
</ToggleGroup>

// 텍스트와 아이콘
<ToggleGroup type="single">
  <ToggleGroupItem value="grid">
    <Grid className="h-4 w-4 mr-2" />
    그리드 보기
  </ToggleGroupItem>
</ToggleGroup>`
    }
  ];

  const features = [
    {
      title: '단일/다중 선택',
      description: 'type="single" 또는 type="multiple"로 선택 모드 제어',
      icon: '🎯'
    },
    {
      title: '관련 컨트롤 그룹화',
      description: '논리적으로 연관된 토글 버튼들을 하나의 그룹으로 구성',
      icon: '🔗'
    },
    {
      title: '일관된 스타일링',
      description: '그룹 내 모든 토글이 동일한 스타일과 크기 유지',
      icon: '🎨'
    },
    {
      title: '키보드 네비게이션',
      description: '화살표 키로 그룹 내 이동, Space/Enter로 선택',
      icon: '⌨️'
    },
    {
      title: '접근성 완벽 지원',
      description: 'ARIA 속성과 역할로 스크린 리더 완벽 지원',
      icon: '♿'
    },
    {
      title: '유연한 구성',
      description: '아이콘, 텍스트, 또는 둘 다 포함 가능한 flexible 레이아웃',
      icon: '🧩'
    }
  ];

  const usageGuidelines = [
    {
      title: '언제 사용하나요',
      items: [
        '논리적으로 그룹화할 수 있는 관련 옵션들',
        '텍스트 서식 도구 (굵게, 기울임, 밑줄)',
        '보기 모드 선택 (그리드, 목록, 타일)',
        '데이터 필터링 옵션',
        '정렬 및 표시 옵션',
        '상호 배타적이거나 독립적인 기능 토글',
        '도구모음이나 컨트롤 패널의 관련 액션'
      ]
    },
    {
      title: '언제 사용하지 않나요',
      items: [
        '관련 없는 액션이나 네비게이션',
        '너무 많은 옵션 (7개 초과)',
        '같은 그룹에서 다른 선택 유형 혼합',
        '적절한 접근성 속성 없이 사용',
        '활성/비활성 상태가 너무 비슷한 경우',
        '주요 네비게이션이나 주요 페이지 액션',
        '파괴적인 액션을 토글 그룹에 배치'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Toggle Group</h1>
            <p className="text-muted-foreground">
              단일 선택 또는 다중 선택을 제어할 수 있는 둘 이상의 토글 버튼 세트로, 텍스트 서식과 같은 관련 컨트롤에 일반적으로 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            2가지 Variant
          </Badge>
          <Badge variant="outline">3가지 크기</Badge>
          <Badge variant="outline">단일 및 다중 선택</Badge>
          <Badge variant="outline">접근성 완벽 지원</Badge>
          <Badge variant="outline">키보드 네비게이션</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">사용 예시</TabsTrigger>
          <TabsTrigger value="variants">Variant 및 크기</TabsTrigger>
          <TabsTrigger value="usage">사용 가이드</TabsTrigger>
          <TabsTrigger value="code">구현 방법</TabsTrigger>
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
                {example.component}
                {index < 2 && (
                  <div className="mt-6 p-4 border rounded-lg bg-muted/20">
                    <h5 className="font-medium mb-2">현재 설정</h5>
                    <div className="grid gap-2 text-sm text-muted-foreground">
                      <div><strong>보기:</strong> {demoState.viewMode}</div>
                      <div><strong>정렬:</strong> {demoState.sortOrder || '없음'}</div>
                      <div><strong>필터:</strong> {demoState.filters.join(', ') || '없음'}</div>
                      <div><strong>액션:</strong> {demoState.favorites.join(', ') || '없음'}</div>
                    </div>
                  </div>
                )}
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Variants & Sizes Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Variant</CardTitle>
              <CardDescription>다양한 인터페이스 컨텍스트에 맞는 시각적 스타일입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">기본 Variant</h4>
                  <div className="space-y-4">
                    <ToggleGroup type="single" defaultValue="center">
                      <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
                        <AlignLeft className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="center" aria-label="중앙 정렬">
                        <AlignCenter className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
                        <AlignRight className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                    <CodeBlock
                      code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="중앙 정렬">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                      codeKey="default-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Outline Variant</h4>
                  <div className="space-y-4">
                    <ToggleGroup type="multiple" variant="outline" defaultValue={['bold', 'italic']}>
                      <ToggleGroupItem value="bold" aria-label="굵게">
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic" aria-label="기울임">
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="underline" aria-label="밑줄">
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                    <CodeBlock
                      code={`<ToggleGroup type="multiple" variant="outline" defaultValue={['bold', 'italic']}>
  <ToggleGroupItem value="bold" aria-label="굵게">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="기울임">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="밑줄">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                      codeKey="outline-variant"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>크기</CardTitle>
              <CardDescription>서로 다른 인터페이스 밀도에 맞는 3가지 크기 옵션입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Small (sm)</h4>
                  <ToggleGroup type="single" size="sm" defaultValue="grid">
                    <ToggleGroupItem value="grid" aria-label="그리드 보기">
                      <Grid className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="목록 보기">
                      <Layout className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="settings" aria-label="설정">
                      <Settings className="h-3 w-3" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <CodeBlock
                    code={`<ToggleGroup type="single" size="sm" defaultValue="grid">
  <ToggleGroupItem value="grid" aria-label="그리드 보기">
    <Grid className="h-3 w-3" />
  </ToggleGroupItem>
  <ToggleGroupItem value="list" aria-label="목록 보기">
    <Layout className="h-3 w-3" />
  </ToggleGroupItem>
</ToggleGroup>`}
                    codeKey="small-size"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-4">기본 크기</h4>
                  <ToggleGroup type="single" defaultValue="grid">
                    <ToggleGroupItem value="grid" aria-label="그리드 보기">
                      <Grid className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="목록 보기">
                      <Layout className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="settings" aria-label="설정">
                      <Settings className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <CodeBlock
                    code={`<ToggleGroup type="single" defaultValue="grid">
  <ToggleGroupItem value="grid" aria-label="그리드 보기">
    <Grid className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="list" aria-label="목록 보기">
    <Layout className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                    codeKey="default-size"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-4">Large (lg)</h4>
                  <ToggleGroup type="single" size="lg" defaultValue="grid">
                    <ToggleGroupItem value="grid" aria-label="그리드 보기">
                      <Grid className="h-5 w-5" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="목록 보기">
                      <Layout className="h-5 w-5" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="settings" aria-label="설정">
                      <Settings className="h-5 w-5" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <CodeBlock
                    code={`<ToggleGroup type="single" size="lg" defaultValue="grid">
  <ToggleGroupItem value="grid" aria-label="그리드 보기">
    <Grid className="h-5 w-5" />
  </ToggleGroupItem>
  <ToggleGroupItem value="list" aria-label="목록 보기">
    <Layout className="h-5 w-5" />
  </ToggleGroupItem>
</ToggleGroup>`}
                    codeKey="large-size"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>텍스트 라벨 포함</CardTitle>
              <CardDescription>토글 그룹은 아이콘 대신 또는 함께 텍스트 라벨을 포함할 수 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleGroup type="single" variant="outline" defaultValue="grid">
                <ToggleGroupItem value="grid">
                  <Grid className="h-4 w-4 mr-2" />
                  그리드 보기
                </ToggleGroupItem>
                <ToggleGroupItem value="list">
                  <Layout className="h-4 w-4 mr-2" />
                  목록 보기
                </ToggleGroupItem>
              </ToggleGroup>
              
              <ToggleGroup type="multiple" size="sm">
                <ToggleGroupItem value="visible">
                  <Eye className="h-3 w-3 mr-1" />
                  보임
                </ToggleGroupItem>
                <ToggleGroupItem value="hidden">
                  <EyeOff className="h-3 w-3 mr-1" />
                  숨김
                </ToggleGroupItem>
              </ToggleGroup>

              <CodeBlock
                code={`<ToggleGroup type="single" variant="outline" defaultValue="grid">
  <ToggleGroupItem value="grid">
    <Grid className="h-4 w-4 mr-2" />
    그리드 보기
  </ToggleGroupItem>
  <ToggleGroupItem value="list">
    <Layout className="h-4 w-4 mr-2" />
    목록 보기
  </ToggleGroupItem>
</ToggleGroup>`}
                codeKey="with-text"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>사용 가이드라인</CardTitle>
              <CardDescription>인터페이스에서 토글 그룹을 구현하기 위한 모범 사례입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장사항
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 논리적으로 그룹화할 수 있는 관련 옵션에 사용</li>
                    <li>• 활성 상태에 대한 명확한 시각적 피드백 제공</li>
                    <li>• 의미 있는 aria-label 속성 포함</li>
                    <li>• 최적의 사용성을 위해 그룹을 2-7개 항목으로 유지</li>
                    <li>• 같은 인터페이스 내에서 일관된 크기 사용</li>
                    <li>• 사용 사례에 따라 단일 vs 다중 선택 고려</li>
                    <li>• 관련 기능을 시각적으로 그룹화</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 관련 없는 액션이나 네비게이션에 사용</li>
                    <li>• 너무 많은 옵션으로 그룹 생성 (7개 초과)</li>
                    <li>• 같은 그룹에서 다른 선택 유형 혼합</li>
                    <li>• 적절한 접근성 속성 없이 사용</li>
                    <li>• 활성/비활성 상태가 너무 비슷하게 만들기</li>
                    <li>• 주요 네비게이션이나 주요 페이지 액션에 사용</li>
                    <li>• 토글 그룹에 파괴적인 액션 배치</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>단일 vs 다중 선택</CardTitle>
              <CardDescription>사용 사례에 맞는 올바른 선택 모드 선택하기</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">단일 선택 (type="single")</h4>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <ToggleGroup type="single" defaultValue="center" variant="outline">
                      <ToggleGroupItem value="left">왼쪽</ToggleGroupItem>
                      <ToggleGroupItem value="center">중앙</ToggleGroupItem>
                      <ToggleGroupItem value="right">오른쪽</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 한 번에 하나의 옵션만 선택 가능</li>
                    <li>• 상호 배타적인 선택에 이상적</li>
                    <li>• 예시: 정렬, 보기 모드, 정렬 순서</li>
                    <li>• 라디오 버튼처럼 동작</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">다중 선택 (type="multiple")</h4>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <ToggleGroup type="multiple" defaultValue={['bold', 'italic']} variant="outline">
                      <ToggleGroupItem value="bold">굵게</ToggleGroupItem>
                      <ToggleGroupItem value="italic">기울임</ToggleGroupItem>
                      <ToggleGroupItem value="underline">밑줄</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 여러 옵션을 동시에 선택 가능</li>
                    <li>• 독립적인 토글 가능한 기능에 이상적</li>
                    <li>• 예시: 텍스트 서식, 필터, 기능</li>
                    <li>• 그룹화된 체크박스처럼 동작</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>토글 그룹 사용 시기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">좋은 사용 사례</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 텍스트 서식 도구</li>
                    <li>• 보기 모드 선택</li>
                    <li>• 데이터 필터링 옵션</li>
                    <li>• 정렬 및 표시 설정</li>
                    <li>• 도구모음 컨트롤</li>
                    <li>• 관련 기능 그룹</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-yellow-600">주의할 사용 사례</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 설정 페이지 (Switch 고려)</li>
                    <li>• 폼 입력 (Checkbox/Radio 고려)</li>
                    <li>• 복잡한 필터 (Dropdown 고려)</li>
                    <li>• 많은 옵션 (Menu 고려)</li>
                    <li>• 네비게이션 링크</li>
                    <li>• 일회성 액션</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 사용 사례</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 주요 네비게이션</li>
                    <li>• 파괴적인 액션</li>
                    <li>• 관련 없는 기능</li>
                    <li>• 단일 토글 (Toggle 사용)</li>
                    <li>• 텍스트가 많은 옵션</li>
                    <li>• 계층적 선택</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>모든 사용자가 토글 그룹에 접근할 수 있도록 보장하기</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">필수 속성</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <code className="text-sm">
                      {`<ToggleGroup type="single" aria-label="텍스트 정렬">
  <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                    </code>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">←→</kbd>
                      <span>그룹 내 항목 간 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                      <span>선택/선택 해제</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>그룹으로/에서 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Home/End</kbd>
                      <span>첫 번째/마지막 항목으로</span>
                    </div>
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
              <CardTitle>컴포넌트 API</CardTitle>
              <CardDescription>ToggleGroup 컴포넌트의 속성과 구성 옵션입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">ToggleGroup Props</h4>
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
                        <td className="p-2 font-mono">type</td>
                        <td className="p-2">"single" | "multiple"</td>
                        <td className="p-2">-</td>
                        <td className="p-2">선택 모드 (필수)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">variant</td>
                        <td className="p-2">"default" | "outline"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">시각적 스타일 variant</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">"sm" | "default" | "lg"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">그룹 내 모든 항목의 크기</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">value</td>
                        <td className="p-2">string | string[]</td>
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 선택 값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">string | string[]</td>
                        <td className="p-2">-</td>
                        <td className="p-2">기본 선택 값 (비제어)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onValueChange</td>
                        <td className="p-2">(value: string | string[]) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">값 변경 시 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">전체 그룹 비활성화 여부</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">ToggleGroupItem Props</h4>
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
                        <td className="p-2 font-mono">value</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">항목의 고유 값 (필수)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">개별 항목 비활성화 여부</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">aria-label</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">스크린 리더용 접근 가능한 라벨</td>
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
                code={`import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법 (단일 선택)"
                code={`import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { useState } from "react";

export function Example() {
  const [alignment, setAlignment] = useState('left');

  return (
    <ToggleGroup
      type="single"
      value={alignment}
      onValueChange={setAlignment}
    >
      <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="중앙 정렬">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`}
                codeKey="basic-usage-single"
              />

              <CodeBlock
                title="기본 사용법 (다중 선택)"
                code={`import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";
import { useState } from "react";

export function Example() {
  const [formatting, setFormatting] = useState([]);

  return (
    <ToggleGroup
      type="multiple"
      value={formatting}
      onValueChange={setFormatting}
    >
      <ToggleGroupItem value="bold" aria-label="굵게">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="기울임">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="밑줄">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`}
                codeKey="basic-usage-multiple"
              />

              <CodeBlock
                title="텍스트와 아이콘"
                code={`<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="grid">
    <Grid className="h-4 w-4 mr-2" />
    그리드 보기
  </ToggleGroupItem>
  <ToggleGroupItem value="list">
    <Layout className="h-4 w-4 mr-2" />
    목록 보기
  </ToggleGroupItem>
</ToggleGroup>`}
                codeKey="with-text-icon"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
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

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>사용 가이드라인</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {usageGuidelines.map((guideline, index) => (
              <div key={index}>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  {index === 0 ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                  {guideline.title}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}