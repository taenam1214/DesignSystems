import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Palette, Type, Grid3X3, Copy, Check, Download, Code2, Layers, Zap, BarChart3, Monitor } from 'lucide-react';
import { useState } from 'react';

export function TokensSection() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(key);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const semanticColorTokens = [
    { name: 'Background', value: 'var(--background)', light: '#ffffff', dark: 'oklch(0.145 0 0)', description: '기본 배경색' },
    { name: 'Foreground', value: 'var(--foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: '기본 텍스트 색상' },
    { name: 'Primary', value: 'var(--primary)', light: '#030213', dark: 'oklch(0.985 0 0)', description: '주요 브랜드 색상 및 CTA 요소' },
    { name: 'Primary Foreground', value: 'var(--primary-foreground)', light: 'oklch(1 0 0)', dark: 'oklch(0.205 0 0)', description: 'Primary 위의 텍스트' },
    { name: 'Secondary', value: 'var(--secondary)', light: 'oklch(0.95 0.0058 264.53)', dark: 'oklch(0.269 0 0)', description: '보조 액션 및 배경' },
    { name: 'Secondary Foreground', value: 'var(--secondary-foreground)', light: '#030213', dark: 'oklch(0.985 0 0)', description: 'Secondary 위의 텍스트' },
    { name: 'Accent', value: 'var(--accent)', light: '#e9ebef', dark: 'oklch(0.269 0 0)', description: '강조 및 호버 상태' },
    { name: 'Accent Foreground', value: 'var(--accent-foreground)', light: '#030213', dark: 'oklch(0.985 0 0)', description: 'Accent 위의 텍스트' },
    { name: 'Muted', value: 'var(--muted)', light: '#ececf0', dark: 'oklch(0.269 0 0)', description: '비활성 요소 및 구분선' },
    { name: 'Muted Foreground', value: 'var(--muted-foreground)', light: '#717182', dark: 'oklch(0.708 0 0)', description: 'Muted 위의 텍스트' },
    { name: 'Destructive', value: 'var(--destructive)', light: '#d4183d', dark: 'oklch(0.396 0.141 25.723)', description: '오류 및 위험한 액션' },
    { name: 'Destructive Foreground', value: 'var(--destructive-foreground)', light: '#ffffff', dark: 'oklch(0.637 0.237 25.331)', description: 'Destructive 위의 텍스트' }
  ];

  const componentColorTokens = [
    { name: 'Card', value: 'var(--card)', light: '#ffffff', dark: 'oklch(0.145 0 0)', description: '카드 배경색' },
    { name: 'Card Foreground', value: 'var(--card-foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: '카드 내 텍스트' },
    { name: 'Popover', value: 'var(--popover)', light: 'oklch(1 0 0)', dark: 'oklch(0.145 0 0)', description: '팝오버 배경색' },
    { name: 'Popover Foreground', value: 'var(--popover-foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: '팝오버 내 텍스트' },
    { name: 'Border', value: 'var(--border)', light: 'rgba(0, 0, 0, 0.1)', dark: 'oklch(0.269 0 0)', description: '경계선 색상' },
    { name: 'Input', value: 'var(--input)', light: 'transparent', dark: 'oklch(0.269 0 0)', description: '입력 필드 경계선' },
    { name: 'Input Background', value: 'var(--input-background)', light: '#f3f3f5', dark: 'oklch(0.269 0 0)', description: '입력 필드 배경색' },
    { name: 'Switch Background', value: 'var(--switch-background)', light: '#cbced4', dark: 'oklch(0.269 0 0)', description: '스위치 배경색' },
    { name: 'Ring', value: 'var(--ring)', light: 'oklch(0.708 0 0)', dark: 'oklch(0.439 0 0)', description: '포커스 링 색상' }
  ];

  const sidebarColorTokens = [
    { name: 'Sidebar', value: 'var(--sidebar)', light: 'oklch(0.985 0 0)', dark: 'oklch(0.205 0 0)', description: '사이드바 배경색' },
    { name: 'Sidebar Foreground', value: 'var(--sidebar-foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: '사이드바 텍스트' },
    { name: 'Sidebar Primary', value: 'var(--sidebar-primary)', light: '#030213', dark: 'oklch(0.488 0.243 264.376)', description: '사이드바 주요 요소' },
    { name: 'Sidebar Primary Foreground', value: 'var(--sidebar-primary-foreground)', light: 'oklch(0.985 0 0)', dark: 'oklch(0.985 0 0)', description: '사이드바 주요 요소 텍스트' },
    { name: 'Sidebar Accent', value: 'var(--sidebar-accent)', light: 'oklch(0.97 0 0)', dark: 'oklch(0.269 0 0)', description: '사이드바 강조 요소' },
    { name: 'Sidebar Accent Foreground', value: 'var(--sidebar-accent-foreground)', light: 'oklch(0.205 0 0)', dark: 'oklch(0.985 0 0)', description: '사이드바 강조 요소 텍스트' },
    { name: 'Sidebar Border', value: 'var(--sidebar-border)', light: 'oklch(0.922 0 0)', dark: 'oklch(0.269 0 0)', description: '사이드바 경계선' },
    { name: 'Sidebar Ring', value: 'var(--sidebar-ring)', light: 'oklch(0.708 0 0)', dark: 'oklch(0.439 0 0)', description: '사이드바 포커스 링' }
  ];

  const chartColorTokens = [
    { name: 'Chart 1', value: 'var(--chart-1)', light: 'oklch(0.646 0.222 41.116)', dark: 'oklch(0.488 0.243 264.376)', description: '차트 첫 번째 색상' },
    { name: 'Chart 2', value: 'var(--chart-2)', light: 'oklch(0.6 0.118 184.704)', dark: 'oklch(0.696 0.17 162.48)', description: '차트 두 번째 색상' },
    { name: 'Chart 3', value: 'var(--chart-3)', light: 'oklch(0.398 0.07 227.392)', dark: 'oklch(0.769 0.188 70.08)', description: '차트 세 번째 색상' },
    { name: 'Chart 4', value: 'var(--chart-4)', light: 'oklch(0.828 0.189 84.429)', dark: 'oklch(0.627 0.265 303.9)', description: '차트 네 번째 색상' },
    { name: 'Chart 5', value: 'var(--chart-5)', light: 'oklch(0.769 0.188 70.08)', dark: 'oklch(0.645 0.246 16.439)', description: '차트 다섯 번째 색상' }
  ];

  const typographyTokens = [
    { name: 'Font Size', value: 'var(--font-size)', pixels: '14px', description: '기본 폰트 크기', element: 'html' },
    { name: 'Font Weight Normal', value: 'var(--font-weight-normal)', weight: '400', description: '기본 폰트 가중치', usage: '본문 텍스트, 입력 필드' },
    { name: 'Font Weight Medium', value: 'var(--font-weight-medium)', weight: '500', description: '중간 폰트 가중치', usage: '제목, 버튼, 라벨' }
  ];

  const elementTypography = [
    { element: 'h1', size: 'var(--text-2xl)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: '페이지 주요 제목' },
    { element: 'h2', size: 'var(--text-xl)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: '섹션 제목' },
    { element: 'h3', size: 'var(--text-lg)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: '부섹션 제목' },
    { element: 'h4', size: 'var(--text-base)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: '소제목' },
    { element: 'p', size: 'var(--text-base)', weight: 'var(--font-weight-normal)', lineHeight: '1.5', usage: '본문 텍스트' },
    { element: 'label', size: 'var(--text-base)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: '폼 라벨' },
    { element: 'button', size: 'var(--text-base)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: '버튼 텍스트' },
    { element: 'input', size: 'var(--text-base)', weight: 'var(--font-weight-normal)', lineHeight: '1.5', usage: '입력 필드' }
  ];

  const radiusTokens = [
    { name: 'Radius', value: 'var(--radius)', pixels: '0.625rem (10px)', description: '기본 둥근 모서리', usage: '카드, 버튼' },
    { name: 'Radius Small', value: 'var(--radius-sm)', calculation: 'calc(var(--radius) - 4px)', pixels: '6px', description: '작은 둥근 모서리', usage: '작은 컴포넌트' },
    { name: 'Radius Medium', value: 'var(--radius-md)', calculation: 'calc(var(--radius) - 2px)', pixels: '8px', description: '중간 둥근 모서리', usage: '일반 컴포넌트' },
    { name: 'Radius Large', value: 'var(--radius-lg)', calculation: 'var(--radius)', pixels: '10px', description: '큰 둥근 모서리', usage: '카드, 모달' },
    { name: 'Radius XL', value: 'var(--radius-xl)', calculation: 'calc(var(--radius) + 4px)', pixels: '14px', description: '매우 큰 둥근 모서리', usage: '큰 컨테이너' }
  ];

  const ColorSwatchGrid = ({ tokens, title }: { tokens: any[], title: string }) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {tokens.map((token) => (
            <div key={token.name} className="p-3 border rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">{token.name}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => copyToClipboard(token.value, token.name)}
                >
                  {copiedToken === token.name ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
              <div className="flex gap-2">
                <div 
                  className="w-8 h-8 rounded border border-border"
                  style={{ backgroundColor: token.light }}
                  title="Light theme"
                />
                <div 
                  className="w-8 h-8 rounded border border-border"
                  style={{ backgroundColor: token.dark }}
                  title="Dark theme"
                />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-muted-foreground">{token.value}</div>
                <div className="text-xs text-muted-foreground">{token.description}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">디자인 토큰</h1>
            <p className="text-muted-foreground">
              일관된 디자인을 위한 시각적 속성의 명명된 엔티티입니다. Tailwind v4와 CSS 변수를 기반으로 합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            시맨틱 색상
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Type className="w-3 h-3" />
            타이포그래피
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Grid3X3 className="w-3 h-3" />
            둥근 모서리
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3" />
            차트 색상
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Monitor className="w-3 h-3" />
            사이드바
          </Badge>
          <Badge variant="outline">CSS 변수</Badge>
          <Badge variant="outline">라이트/다크 테마</Badge>
        </div>
      </div>

      <Tabs defaultValue="semantic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="semantic">시맨틱 색상</TabsTrigger>
          <TabsTrigger value="component">컴포넌트</TabsTrigger>
          <TabsTrigger value="typography">타이포그래피</TabsTrigger>
          <TabsTrigger value="spacing">간격</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
        </TabsList>

        {/* Semantic Colors Tab */}
        <TabsContent value="semantic" className="space-y-8">
          <ColorSwatchGrid 
            tokens={semanticColorTokens} 
            title="시맨틱 색상 토큰" 
          />

          <ColorSwatchGrid 
            tokens={chartColorTokens} 
            title="차트 색상 토큰" 
          />

          <Card>
            <CardHeader>
              <CardTitle>색상 사용 지침</CardTitle>
              <CardDescription>
                각 색상 토큰의 적절한 사용 목적과 맥락입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h5 className="font-medium">기본 색상</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Primary:</strong> 주요 액션, 링크, 브랜드 요소</li>
                    <li>• <strong>Secondary:</strong> 보조 액션, 필터, 태그</li>
                    <li>• <strong>Accent:</strong> 호버 상태, 강조 영역</li>
                    <li>• <strong>Muted:</strong> 비활성 상태, 보조 정보</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">상태 색상</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Destructive:</strong> 삭제, 오류, 경고</li>
                    <li>• <strong>Chart Colors:</strong> 데이터 시각화 요소</li>
                    <li>• <strong>Border:</strong> 구분선, 테두리</li>
                    <li>• <strong>Ring:</strong> 포커스 표시, 접근성</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Component Colors Tab */}
        <TabsContent value="component" className="space-y-8">
          <ColorSwatchGrid 
            tokens={componentColorTokens} 
            title="컴포넌트 색상 토큰" 
          />

          <ColorSwatchGrid 
            tokens={sidebarColorTokens} 
            title="사이드바 색상 토큰" 
          />

          <Card>
            <CardHeader>
              <CardTitle>테마 변환</CardTitle>
              <CardDescription>
                모든 색상 토큰은 라이트 및 다크 테마에서 자동으로 적응됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg bg-background">
                  <h4 className="font-medium mb-3">라이트 테마</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ffffff' }} />
                      <span className="text-sm">Background: #ffffff</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: '#030213' }} />
                      <span className="text-sm">Primary: #030213</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ececf0' }} />
                      <span className="text-sm">Muted: #ececf0</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-slate-900 text-white">
                  <h4 className="font-medium mb-3">다크 테마</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-slate-900 border border-slate-700" />
                      <span className="text-sm">Background: oklch(0.145 0 0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-white" />
                      <span className="text-sm">Primary: oklch(0.985 0 0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-slate-700" />
                      <span className="text-sm">Muted: oklch(0.269 0 0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="w-5 h-5" />
                타이포그래피 토큰
              </CardTitle>
              <CardDescription>
                기본 폰트 크기와 가중치 시스템입니다. 14px 기준으로 설정되어 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {typographyTokens.map((token) => (
                  <div key={token.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium mb-1">{token.name}</div>
                      <div className="text-sm text-muted-foreground">{token.description}</div>
                      {token.usage && <div className="text-xs text-muted-foreground">{token.usage}</div>}
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm font-mono">{token.value}</div>
                      <div className="text-xs text-muted-foreground">
                        {token.pixels || token.weight}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(token.value, `typography-${token.name}`)}
                      >
                        {copiedToken === `typography-${token.name}` ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>HTML 요소 기본 스타일</CardTitle>
              <CardDescription>
                타이포그래피 시스템이 자동으로 적용되는 HTML 요소들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {elementTypography.map((element) => (
                  <div key={element.element} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium mb-1">&lt;{element.element}&gt;</div>
                      <div className="text-sm text-muted-foreground">{element.usage}</div>
                    </div>
                    <div className="text-right space-y-1 text-xs font-mono text-muted-foreground">
                      <div>size: {element.size}</div>
                      <div>weight: {element.weight}</div>
                      <div>line-height: {element.lineHeight}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Tab */}
        <TabsContent value="spacing" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid3X3 className="w-5 h-5" />
                둥근 모서리 토큰
              </CardTitle>
              <CardDescription>
                컴포넌트의 border-radius를 위한 토큰들입니다. 10px를 기준으로 계산됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {radiusTokens.map((token) => (
                  <div key={token.name} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-20">
                      <div className="text-sm font-medium">{token.name}</div>
                      <div className="text-xs text-muted-foreground">{token.pixels}</div>
                    </div>
                    <div 
                      className="w-12 h-12 bg-primary/20 border-2 border-primary/40"
                      style={{ borderRadius: token.pixels.split(' ')[0] }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-mono">{token.value}</div>
                      {token.calculation && (
                        <div className="text-xs text-muted-foreground">{token.calculation}</div>
                      )}
                      <div className="text-xs text-muted-foreground">{token.usage}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => copyToClipboard(token.value, `radius-${token.name}`)}
                    >
                      {copiedToken === `radius-${token.name}` ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind 간격 시스템</CardTitle>
              <CardDescription>
                Tailwind CSS의 표준 간격 시스템을 사용합니다. 4px(1rem = 16px의 1/4) 기준 단위입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-3">
                  <h5 className="font-medium">작은 간격</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><code>space-1</code> <span>4px</span></div>
                    <div className="flex justify-between"><code>space-2</code> <span>8px</span></div>
                    <div className="flex justify-between"><code>space-3</code> <span>12px</span></div>
                    <div className="flex justify-between"><code>space-4</code> <span>16px</span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">중간 간격</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><code>space-6</code> <span>24px</span></div>
                    <div className="flex justify-between"><code>space-8</code> <span>32px</span></div>
                    <div className="flex justify-between"><code>space-10</code> <span>40px</span></div>
                    <div className="flex justify-between"><code>space-12</code> <span>48px</span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">큰 간격</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><code>space-16</code> <span>64px</span></div>
                    <div className="flex justify-between"><code>space-20</code> <span>80px</span></div>
                    <div className="flex justify-between"><code>space-24</code> <span>96px</span></div>
                    <div className="flex justify-between"><code>space-32</code> <span>128px</span></div>
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
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                토큰 사용법
              </CardTitle>
              <CardDescription>
                CSS 변수와 Tailwind CSS에서 디자인 토큰을 사용하는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">CSS 변수로 직접 사용</h4>
                <div className="bg-muted/50 rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`.my-component {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: var(--font-size);
  font-weight: var(--font-weight-medium);
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Tailwind CSS 클래스</h4>
                <div className="bg-muted/50 rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`<div className="bg-background text-foreground border border-border rounded-lg">
  콘텐츠
</div>

<button className="bg-primary text-primary-foreground rounded-md">
  버튼
</button>

<div className="bg-card text-card-foreground p-6 rounded-xl">
  카드 콘텐츠
</div>`}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Tailwind v4 테마 확장</h4>
                <div className="bg-muted/50 rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`@theme inline {
  --color-success: #22c55e;
  --color-success-foreground: #ffffff;
  --color-warning: #f59e0b;
  --color-warning-foreground: #ffffff;
}`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CSS 변수 시스템</CardTitle>
              <CardDescription>
                프로젝트에서 사용되는 CSS 변수 구조와 네이밍 규칙입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">라이트 테마 (:root)</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-xs">
                      <code>{`:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --secondary: oklch(0.95 0.0058 264.53);
  --muted: #ececf0;
  --border: rgba(0, 0, 0, 0.1);
  --radius: 0.625rem;
  --font-size: 14px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
}`}</code>
                    </pre>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">다크 테마 (.dark)</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-xs">
                      <code>{`.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --secondary: oklch(0.269 0 0);
  --muted: oklch(0.269 0 0);
  --border: oklch(0.269 0 0);
  /* radius, typography 값은 동일 */
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>모범 사례</CardTitle>
              <CardDescription>
                디자인 토큰을 효과적으로 사용하기 위한 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium text-green-700">권장사항</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 시맨틱 토큰명 우선 사용 (primary vs #030213)</li>
                    <li>• Foreground 쌍을 항상 함께 고려</li>
                    <li>• 테마 전환 시 동작 확인</li>
                    <li>• OKLCH 색상 공간 활용</li>
                    <li>• 접근성 대비비 검증</li>
                    <li>• 디자인 시스템 규칙 준수</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium text-red-700">피해야 할 것</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 하드코딩된 색상값 사용</li>
                    <li>• 임의의 CSS 변수 생성</li>
                    <li>• Foreground 없이 배경색만 사용</li>
                    <li>• 토큰 네이밍 규칙 무시</li>
                    <li>• 다크 테마 대응 누락</li>
                    <li>• 차트 색상을 일반 UI에 사용</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}