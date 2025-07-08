import { useState } from 'react';
import { Toggle } from '../ui/toggle';
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
  Heart,
  Star,
  Bookmark,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Eye,
  EyeOff,
  Copy,
  Check,
  Code,
  Palette,
  Zap,
  ArrowRight,
  Info,
  CheckCircle,
  XCircle
} from 'lucide-react';

export function ToggleComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [demoState, setDemoState] = useState({
    bold: false,
    italic: false,
    underline: false,
    alignment: 'left',
    liked: false,
    bookmarked: false,
    volume: false,
    wifi: true,
    visibility: true
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
      title: '텍스트 서식 도구모음',
      description: '텍스트 편집 인터페이스에서 토글 버튼의 일반적인 사용 사례입니다.',
      component: (
        <div className="space-y-6">
          <div className="flex items-center gap-1 p-2 border rounded-lg bg-muted/20">
            <Toggle
              pressed={demoState.bold}
              onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, bold: pressed }))}
              aria-label="굵게 토글"
            >
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={demoState.italic}
              onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, italic: pressed }))}
              aria-label="기울임 토글"
            >
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={demoState.underline}
              onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, underline: pressed }))}
              aria-label="밑줄 토글"
            >
              <Underline className="h-4 w-4" />
            </Toggle>
            <Separator orientation="vertical" className="h-6 mx-1" />
            <Toggle
              pressed={demoState.alignment === 'left'}
              onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, alignment: pressed ? 'left' : prev.alignment }))}
              aria-label="왼쪽 정렬"
            >
              <AlignLeft className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={demoState.alignment === 'center'}
              onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, alignment: pressed ? 'center' : prev.alignment }))}
              aria-label="중앙 정렬"
            >
              <AlignCenter className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={demoState.alignment === 'right'}
              onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, alignment: pressed ? 'right' : prev.alignment }))}
              aria-label="오른쪽 정렬"
            >
              <AlignRight className="h-4 w-4" />
            </Toggle>
          </div>
          
          <div className="p-4 border rounded-lg bg-background">
            <p 
              className={`transition-all ${
                demoState.alignment === 'center' ? 'text-center' : 
                demoState.alignment === 'right' ? 'text-right' : 'text-left'
              }`}
              style={{
                fontWeight: demoState.bold ? 'bold' : 'normal',
                fontStyle: demoState.italic ? 'italic' : 'normal',
                textDecoration: demoState.underline ? 'underline' : 'none'
              }}
            >
              이 텍스트는 위의 토글 버튼으로 제어되는 서식 옵션을 보여줍니다.
            </p>
          </div>
        </div>
      ),
      code: `import { Toggle } from "./components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

export function TextFormatting() {
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false
  })

  return (
    <div className="flex items-center gap-1 p-2 border rounded-lg">
      <Toggle
        pressed={formatting.bold}
        onPressedChange={(pressed) => 
          setFormatting(prev => ({ ...prev, bold: pressed }))
        }
        aria-label="굵게 토글"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={formatting.italic}
        onPressedChange={(pressed) => 
          setFormatting(prev => ({ ...prev, italic: pressed }))
        }
        aria-label="기울임 토글"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  )
}`
    },
    {
      title: '상호작용 컨트롤',
      description: '다양한 인터페이스 요소를 위한 여러 토글 상태입니다.',
      component: (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="font-medium">액션 및 선호도</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">이 게시물 좋아요</span>
                <Toggle
                  pressed={demoState.liked}
                  onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, liked: pressed }))}
                  aria-label="게시물 좋아요"
                  className={demoState.liked ? "text-red-500" : ""}
                >
                  <Heart className="h-4 w-4" fill={demoState.liked ? "currentColor" : "none"} />
                </Toggle>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">북마크</span>
                <Toggle
                  pressed={demoState.bookmarked}
                  onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, bookmarked: pressed }))}
                  aria-label="북마크"
                  className={demoState.bookmarked ? "text-yellow-500" : ""}
                >
                  <Bookmark className="h-4 w-4" fill={demoState.bookmarked ? "currentColor" : "none"} />
                </Toggle>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">시스템 컨트롤</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">소리 {demoState.volume ? '켜짐' : '꺼짐'}</span>
                <Toggle
                  pressed={demoState.volume}
                  onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, volume: pressed }))}
                  aria-label="소리 토글"
                >
                  {demoState.volume ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Toggle>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">WiFi {demoState.wifi ? '연결됨' : '연결 끊김'}</span>
                <Toggle
                  pressed={demoState.wifi}
                  onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, wifi: pressed }))}
                  aria-label="WiFi 토글"
                >
                  {demoState.wifi ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
                </Toggle>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">표시 {demoState.visibility ? '보임' : '숨김'}</span>
                <Toggle
                  pressed={demoState.visibility}
                  onPressedChange={(pressed) => setDemoState(prev => ({ ...prev, visibility: pressed }))}
                  aria-label="표시 토글"
                >
                  {demoState.visibility ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Toggle>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `// 좋아요/북마크 토글
<Toggle
  pressed={liked}
  onPressedChange={setLiked}
  aria-label="게시물 좋아요"
  className={liked ? "text-red-500" : ""}
>
  <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
</Toggle>

// 시스템 상태 토글
<Toggle
  pressed={volume}
  onPressedChange={setVolume}
  aria-label="소리 토글"
>
  {volume ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
</Toggle>`
    },
    {
      title: 'Variant 및 크기',
      description: 'Toggle 컴포넌트의 다양한 스타일과 크기 옵션입니다.',
      component: (
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">기본 Variant</h4>
            <div className="flex items-center gap-2">
              <Toggle aria-label="굵게 토글">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle pressed aria-label="기울임 토글">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle disabled aria-label="밑줄 토글">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Outline Variant</h4>
            <div className="flex items-center gap-2">
              <Toggle variant="outline" aria-label="굵게 토글">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" pressed aria-label="기울임 토글">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" disabled aria-label="밑줄 토글">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">크기 옵션</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm w-20">Small:</span>
                  <Toggle size="sm" aria-label="작은 토글">
                    <Star className="h-3 w-3" />
                  </Toggle>
                  <Toggle size="sm" pressed aria-label="작은 토글 눌림">
                    <Heart className="h-3 w-3" />
                  </Toggle>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm w-20">Default:</span>
                  <Toggle aria-label="기본 토글">
                    <Star className="h-4 w-4" />
                  </Toggle>
                  <Toggle pressed aria-label="기본 토글 눌림">
                    <Heart className="h-4 w-4" />
                  </Toggle>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm w-20">Large:</span>
                  <Toggle size="lg" aria-label="큰 토글">
                    <Star className="h-5 w-5" />
                  </Toggle>
                  <Toggle size="lg" pressed aria-label="큰 토글 눌림">
                    <Heart className="h-5 w-5" />
                  </Toggle>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `// Variant 옵션
<Toggle variant="outline" aria-label="굵게 토글">
  <Bold className="h-4 w-4" />
</Toggle>

// 크기 옵션
<Toggle size="sm" aria-label="작은 토글">
  <Star className="h-3 w-3" />
</Toggle>
<Toggle size="lg" aria-label="큰 토글">
  <Star className="h-5 w-5" />
</Toggle>`
    }
  ];

  const features = [
    {
      title: '두 가지 상태',
      description: '켜짐/꺼짐, 활성화/비활성화 등 이진 상태 간 전환',
      icon: '🔄'
    },
    {
      title: '시각적 피드백',
      description: '현재 상태를 명확하게 보여주는 시각적 표시',
      icon: '👁️'
    },
    {
      title: '키보드 접근성',
      description: 'Space, Enter 키로 상태 변경 및 Tab 네비게이션 지원',
      icon: '⌨️'
    },
    {
      title: '유연한 스타일링',
      description: '2가지 variant와 3가지 크기로 다양한 상황에 맞춤',
      icon: '🎨'
    },
    {
      title: 'ARIA 지원',
      description: '스크린 리더를 위한 완벽한 접근성 속성 지원',
      icon: '♿'
    },
    {
      title: '제어/비제어 모드',
      description: 'controlled와 uncontrolled 컴포넌트 패턴 모두 지원',
      icon: '⚙️'
    }
  ];

  const usageGuidelines = [
    {
      title: '언제 사용하나요',
      items: [
        '이진 상태 변경 (켜짐/꺼짐, 활성화/비활성화)',
        '텍스트 서식 옵션 (굵게, 기울임, 밑줄)',
        '보기 옵션 토글 (표시/숨김, 그리드/리스트)',
        '기능 활성화/비활성화',
        '사용자 선호도 설정',
        '도구모음의 상태 기반 액션'
      ]
    },
    {
      title: '언제 사용하지 않나요',
      items: [
        '명확한 상태가 없는 네비게이션이나 액션',
        '눌린/안 눌린 상태가 너무 비슷한 경우',
        '확인 없이 파괴적인 액션을 수행하는 경우',
        '복잡한 옵션 - 다른 컨트롤 고려',
        '여러 옵션 중 하나를 선택하는 경우 (라디오 버튼 사용)',
        '설정이나 환경설정 (Switch 컴포넌트 사용)'
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
            <h1 className="text-3xl font-semibold">Toggle</h1>
            <p className="text-muted-foreground">
              켜짐과 꺼짐 사이를 전환할 수 있는 두 상태 버튼으로, 상태 전환이나 옵션 토글에 일반적으로 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            2가지 Variant
          </Badge>
          <Badge variant="outline">3가지 크기</Badge>
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
              <CardDescription>다양한 사용 상황에 맞는 시각적 스타일입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3">기본 Variant</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Toggle aria-label="굵게 토글">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle pressed aria-label="기울임 토글">
                      <Italic className="h-4 w-4" />
                    </Toggle>
                    <Toggle disabled aria-label="밑줄 토글">
                      <Underline className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <CodeBlock
                    code={`<Toggle aria-label="굵게 토글">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle pressed aria-label="기울임 토글">
  <Italic className="h-4 w-4" />
</Toggle>
<Toggle disabled aria-label="밑줄 토글">
  <Underline className="h-4 w-4" />
</Toggle>`}
                    codeKey="default-variant"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-3">Outline Variant</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Toggle variant="outline" aria-label="굵게 토글">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle variant="outline" pressed aria-label="기울임 토글">
                      <Italic className="h-4 w-4" />
                    </Toggle>
                    <Toggle variant="outline" disabled aria-label="밑줄 토글">
                      <Underline className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <CodeBlock
                    code={`<Toggle variant="outline" aria-label="굵게 토글">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle variant="outline" pressed aria-label="기울임 토글">
  <Italic className="h-4 w-4" />
</Toggle>
<Toggle variant="outline" disabled aria-label="밑줄 토글">
  <Underline className="h-4 w-4" />
</Toggle>`}
                    codeKey="outline-variant"
                  />
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Small (sm)</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Toggle size="sm" aria-label="작은 토글">
                      <Star className="h-3 w-3" />
                    </Toggle>
                    <Toggle size="sm" pressed aria-label="작은 토글 눌림">
                      <Heart className="h-3 w-3" />
                    </Toggle>
                    <Toggle size="sm" variant="outline" aria-label="작은 아웃라인 토글">
                      <Bookmark className="h-3 w-3" />
                    </Toggle>
                  </div>
                  <CodeBlock
                    code={`<Toggle size="sm" aria-label="작은 토글">
  <Star className="h-3 w-3" />
</Toggle>`}
                    codeKey="small-size"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-3">기본 크기</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Toggle aria-label="기본 토글">
                      <Star className="h-4 w-4" />
                    </Toggle>
                    <Toggle pressed aria-label="기본 토글 눌림">
                      <Heart className="h-4 w-4" />
                    </Toggle>
                    <Toggle variant="outline" aria-label="기본 아웃라인 토글">
                      <Bookmark className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <CodeBlock
                    code={`<Toggle aria-label="기본 토글">
  <Star className="h-4 w-4" />
</Toggle>`}
                    codeKey="default-size"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-3">Large (lg)</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Toggle size="lg" aria-label="큰 토글">
                      <Star className="h-5 w-5" />
                    </Toggle>
                    <Toggle size="lg" pressed aria-label="큰 토글 눌림">
                      <Heart className="h-5 w-5" />
                    </Toggle>
                    <Toggle size="lg" variant="outline" aria-label="큰 아웃라인 토글">
                      <Bookmark className="h-5 w-5" />
                    </Toggle>
                  </div>
                  <CodeBlock
                    code={`<Toggle size="lg" aria-label="큰 토글">
  <Star className="h-5 w-5" />
</Toggle>`}
                    codeKey="large-size"
                  />
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
              <CardDescription>인터페이스에서 토글 버튼을 구현하기 위한 모범 사례입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장사항
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 이진 상태 변경에 사용 (켜짐/꺼짐, 활성화/비활성화)</li>
                    <li>• 현재 상태에 대한 명확한 시각적 피드백 제공</li>
                    <li>• 접근 가능한 라벨과 aria 속성 포함</li>
                    <li>• 관련된 토글들을 논리적으로 그룹화</li>
                    <li>• 같은 인터페이스 내에서 일관된 크기 사용</li>
                    <li>• 컨텍스트를 고려하여 상태 변경을 명확하게 만들기</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 명확한 상태가 없는 네비게이션이나 액션에 사용</li>
                    <li>• 눌린/안 눌린 상태가 너무 비슷하게 만들기</li>
                    <li>• 적절한 접근성 속성 없이 사용</li>
                    <li>• 같은 그룹에서 다른 크기들을 무작위로 섞기</li>
                    <li>• 확인 없이 파괴적인 액션에 사용</li>
                    <li>• 과도한 사용 - 복잡한 옵션에는 다른 컨트롤 고려</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toggle vs 다른 컨트롤 사용 시기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Toggle Button</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    시각적 피드백과 함께 즉각적인 상태 변경에 가장 적합
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 텍스트 서식</li>
                    <li>• 보기 옵션</li>
                    <li>• 기능 토글</li>
                    <li>• 도구모음 액션</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Switch</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    설정과 환경설정에 가장 적합
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 기능 활성화/비활성화</li>
                    <li>• 시스템 설정</li>
                    <li>• 알림 환경설정</li>
                    <li>• 개인정보 제어</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Checkbox</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    폼과 다중 선택에 가장 적합
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 폼 입력</li>
                    <li>• 다중 선택</li>
                    <li>• 동의 확인</li>
                    <li>• 작업 완료</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>모든 사용자가 토글 버튼에 접근할 수 있도록 보장하기</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">필수 속성</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <code className="text-sm">
                      {`<Toggle aria-label="굵게 서식 토글" aria-pressed={isPressed}>
  <Bold className="h-4 w-4" />
</Toggle>`}
                    </code>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                      <span>상태 토글</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>상태 토글</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>다음으로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift+Tab</kbd>
                      <span>이전으로 이동</span>
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
              <CardDescription>Toggle 컴포넌트의 속성과 구성 옵션입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Props</h4>
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
                        <td className="p-2 font-mono">variant</td>
                        <td className="p-2">"default" | "outline"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">시각적 스타일 variant</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">"sm" | "default" | "lg"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">토글 버튼의 크기</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">pressed</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">제어된 눌림 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultPressed</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">기본 눌림 상태 (비제어)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onPressedChange</td>
                        <td className="p-2">(pressed: boolean) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">눌림 상태 변경 시 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">토글 비활성화 여부</td>
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
                code={`import { Toggle } from "./components/ui/toggle";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`import { Toggle } from "./components/ui/toggle";
import { Bold } from "lucide-react";
import { useState } from "react";

export function Example() {
  const [isBold, setIsBold] = useState(false);

  return (
    <Toggle
      pressed={isBold}
      onPressedChange={setIsBold}
      aria-label="굵게 토글"
    >
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="텍스트와 아이콘 함께 사용"
                code={`<Toggle aria-label="북마크 토글">
  <Bookmark className="h-4 w-4 mr-2" />
  북마크
</Toggle>`}
                codeKey="with-text"
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