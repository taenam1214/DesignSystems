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
    { name: 'Background', value: 'var(--background)', light: '#ffffff', dark: 'oklch(0.145 0 0)', description: 'Default background color' },
    { name: 'Foreground', value: 'var(--foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: 'Default text color' },
    { name: 'Primary', value: 'var(--primary)', light: '#030213', dark: 'oklch(0.985 0 0)', description: 'Main brand color and CTA elements' },
    { name: 'Primary Foreground', value: 'var(--primary-foreground)', light: 'oklch(1 0 0)', dark: 'oklch(0.205 0 0)', description: 'Text on Primary' },
    { name: 'Secondary', value: 'var(--secondary)', light: 'oklch(0.95 0.0058 264.53)', dark: 'oklch(0.269 0 0)', description: 'Secondary actions and background' },
    { name: 'Secondary Foreground', value: 'var(--secondary-foreground)', light: '#030213', dark: 'oklch(0.985 0 0)', description: 'Text on Secondary' },
    { name: 'Accent', value: 'var(--accent)', light: '#e9ebef', dark: 'oklch(0.269 0 0)', description: 'Highlight and hover states' },
    { name: 'Accent Foreground', value: 'var(--accent-foreground)', light: '#030213', dark: 'oklch(0.985 0 0)', description: 'Text on Accent' },
    { name: 'Muted', value: 'var(--muted)', light: '#ececf0', dark: 'oklch(0.269 0 0)', description: 'Inactive elements and separators' },
    { name: 'Muted Foreground', value: 'var(--muted-foreground)', light: '#717182', dark: 'oklch(0.708 0 0)', description: 'Text on Muted' },
    { name: 'Destructive', value: 'var(--destructive)', light: '#d4183d', dark: 'oklch(0.396 0.141 25.723)', description: 'Errors and dangerous actions' },
    { name: 'Destructive Foreground', value: 'var(--destructive-foreground)', light: '#ffffff', dark: 'oklch(0.637 0.237 25.331)', description: 'Text on Destructive' }
  ];

  const componentColorTokens = [
    { name: 'Card', value: 'var(--card)', light: '#ffffff', dark: 'oklch(0.145 0 0)', description: 'Card background color' },
    { name: 'Card Foreground', value: 'var(--card-foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: 'Text inside card' },
    { name: 'Popover', value: 'var(--popover)', light: 'oklch(1 0 0)', dark: 'oklch(0.145 0 0)', description: 'Popover background color' },
    { name: 'Popover Foreground', value: 'var(--popover-foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: 'Text inside popover' },
    { name: 'Border', value: 'var(--border)', light: 'rgba(0, 0, 0, 0.1)', dark: 'oklch(0.269 0 0)', description: 'Border color' },
    { name: 'Input', value: 'var(--input)', light: 'transparent', dark: 'oklch(0.269 0 0)', description: 'Input field border' },
    { name: 'Input Background', value: 'var(--input-background)', light: '#f3f3f5', dark: 'oklch(0.269 0 0)', description: 'Input field background' },
    { name: 'Switch Background', value: 'var(--switch-background)', light: '#cbced4', dark: 'oklch(0.269 0 0)', description: 'Switch background' },
    { name: 'Ring', value: 'var(--ring)', light: 'oklch(0.708 0 0)', dark: 'oklch(0.439 0 0)', description: 'Focus ring color' }
  ];

  const sidebarColorTokens = [
    { name: 'Sidebar', value: 'var(--sidebar)', light: 'oklch(0.985 0 0)', dark: 'oklch(0.205 0 0)', description: 'Sidebar background' },
    { name: 'Sidebar Foreground', value: 'var(--sidebar-foreground)', light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)', description: 'Text in sidebar' },
    { name: 'Sidebar Primary', value: 'var(--sidebar-primary)', light: '#030213', dark: 'oklch(0.488 0.243 264.376)', description: 'Main elements in sidebar' },
    { name: 'Sidebar Primary Foreground', value: 'var(--sidebar-primary-foreground)', light: 'oklch(0.985 0 0)', dark: 'oklch(0.985 0 0)', description: 'Text in main sidebar elements' },
    { name: 'Sidebar Accent', value: 'var(--sidebar-accent)', light: 'oklch(0.97 0 0)', dark: 'oklch(0.269 0 0)', description: 'Highlighted elements in sidebar' },
    { name: 'Sidebar Accent Foreground', value: 'var(--sidebar-accent-foreground)', light: 'oklch(0.205 0 0)', dark: 'oklch(0.985 0 0)', description: 'Text in highlighted sidebar elements' },
    { name: 'Sidebar Border', value: 'var(--sidebar-border)', light: 'oklch(0.922 0 0)', dark: 'oklch(0.269 0 0)', description: 'Sidebar border' },
    { name: 'Sidebar Ring', value: 'var(--sidebar-ring)', light: 'oklch(0.708 0 0)', dark: 'oklch(0.439 0 0)', description: 'Focus ring in sidebar' }
  ];

  const chartColorTokens = [
    { name: 'Chart 1', value: 'var(--chart-1)', light: 'oklch(0.646 0.222 41.116)', dark: 'oklch(0.488 0.243 264.376)', description: 'First chart color' },
    { name: 'Chart 2', value: 'var(--chart-2)', light: 'oklch(0.6 0.118 184.704)', dark: 'oklch(0.696 0.17 162.48)', description: 'Second chart color' },
    { name: 'Chart 3', value: 'var(--chart-3)', light: 'oklch(0.398 0.07 227.392)', dark: 'oklch(0.769 0.188 70.08)', description: 'Third chart color' },
    { name: 'Chart 4', value: 'var(--chart-4)', light: 'oklch(0.828 0.189 84.429)', dark: 'oklch(0.627 0.265 303.9)', description: 'Fourth chart color' },
    { name: 'Chart 5', value: 'var(--chart-5)', light: 'oklch(0.769 0.188 70.08)', dark: 'oklch(0.645 0.246 16.439)', description: 'Fifth chart color' }
  ];

  const typographyTokens = [
    { name: 'Font Size', value: 'var(--font-size)', pixels: '14px', description: 'Default font size', element: 'html' },
    { name: 'Font Weight Normal', value: 'var(--font-weight-normal)', weight: '400', description: 'Default font weight', usage: 'Body text, input fields' },
    { name: 'Font Weight Medium', value: 'var(--font-weight-medium)', weight: '500', description: 'Medium font weight', usage: 'Titles, buttons, labels' }
  ];

  const elementTypography = [
    { element: 'h1', size: 'var(--text-2xl)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: 'Main page title' },
    { element: 'h2', size: 'var(--text-xl)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: 'Section title' },
    { element: 'h3', size: 'var(--text-lg)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: 'Sub-section title' },
    { element: 'h4', size: 'var(--text-base)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: 'Subtitle' },
    { element: 'p', size: 'var(--text-base)', weight: 'var(--font-weight-normal)', lineHeight: '1.5', usage: 'Body text' },
    { element: 'label', size: 'var(--text-base)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: 'Form label' },
    { element: 'button', size: 'var(--text-base)', weight: 'var(--font-weight-medium)', lineHeight: '1.5', usage: 'Button text' },
    { element: 'input', size: 'var(--text-base)', weight: 'var(--font-weight-normal)', lineHeight: '1.5', usage: 'Input field' }
  ];

  const radiusTokens = [
    { name: 'Radius', value: 'var(--radius)', pixels: '0.625rem (10px)', description: 'Default border-radius', usage: 'Cards, buttons' },
    { name: 'Radius Small', value: 'var(--radius-sm)', calculation: 'calc(var(--radius) - 4px)', pixels: '6px', description: 'Small border-radius', usage: 'Small components' },
    { name: 'Radius Medium', value: 'var(--radius-md)', calculation: 'calc(var(--radius) - 2px)', pixels: '8px', description: 'Medium border-radius', usage: 'General components' },
    { name: 'Radius Large', value: 'var(--radius-lg)', calculation: 'var(--radius)', pixels: '10px', description: 'Large border-radius', usage: 'Cards, modals' },
    { name: 'Radius XL', value: 'var(--radius-xl)', calculation: 'calc(var(--radius) + 4px)', pixels: '14px', description: 'Very large border-radius', usage: 'Large containers' }
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
            <h1 className="text-3xl font-semibold">Design Tokens</h1>
            <p className="text-muted-foreground">
              Named entities for visual properties to achieve consistent design, based on Tailwind v4 and CSS variables.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            Semantic Colors
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Type className="w-3 h-3" />
            Typography
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Grid3X3 className="w-3 h-3" />
            Border Radius
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3" />
            Chart Colors
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Monitor className="w-3 h-3" />
            Sidebar
          </Badge>
          <Badge variant="outline">CSS Variables</Badge>
          <Badge variant="outline">Light/Dark Theme</Badge>
        </div>
      </div>

      <Tabs defaultValue="semantic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="semantic">Semantic Colors</TabsTrigger>
          <TabsTrigger value="component">Component</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        {/* Semantic Colors Tab */}
        <TabsContent value="semantic" className="space-y-8">
          <ColorSwatchGrid 
            tokens={semanticColorTokens} 
            title="Semantic Color Tokens" 
          />

          <ColorSwatchGrid 
            tokens={chartColorTokens} 
            title="Chart Color Tokens" 
          />

          <Card>
            <CardHeader>
              <CardTitle>Color Usage Guidelines</CardTitle>
              <CardDescription>
                The appropriate usage and context for each color token.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h5 className="font-medium">Basic Colors</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Primary:</strong> Main actions, links, brand elements</li>
                    <li>• <strong>Secondary:</strong> Secondary actions, filters, tags</li>
                    <li>• <strong>Accent:</strong> Hover states, highlighted areas</li>
                    <li>• <strong>Muted:</strong> Inactive states, secondary information</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">Status Colors</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Destructive:</strong> Deletion, errors, dangerous actions</li>
                    <li>• <strong>Chart Colors:</strong> Data visualization elements</li>
                    <li>• <strong>Border:</strong> Separators, borders</li>
                    <li>• <strong>Ring:</strong> Focus indication, accessibility</li>
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
            title="Component Color Tokens" 
          />

          <ColorSwatchGrid 
            tokens={sidebarColorTokens} 
            title="Sidebar Color Tokens" 
          />

          <Card>
            <CardHeader>
              <CardTitle>Theme Conversion</CardTitle>
              <CardDescription>
                All color tokens automatically adapt to light and dark themes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg bg-background">
                  <h4 className="font-medium mb-3">Light Theme</h4>
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
                  <h4 className="font-medium mb-3">Dark Theme</h4>
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
                Typography Tokens
              </CardTitle>
              <CardDescription>
                A font size and weight system based on 14px.
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
              <CardTitle>HTML Element Default Styles</CardTitle>
              <CardDescription>
                HTML elements that automatically apply the typography system.
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
                Border Radius Tokens
              </CardTitle>
              <CardDescription>
                Tokens for border-radius of components, calculated based on 10px.
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
              <CardTitle>Tailwind Spacing System</CardTitle>
              <CardDescription>
                Uses the standard Tailwind CSS spacing system. 4px (1rem = 1/4 of 16px) unit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-3">
                  <h5 className="font-medium">Small Spacing</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><code>space-1</code> <span>4px</span></div>
                    <div className="flex justify-between"><code>space-2</code> <span>8px</span></div>
                    <div className="flex justify-between"><code>space-3</code> <span>12px</span></div>
                    <div className="flex justify-between"><code>space-4</code> <span>16px</span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">Medium Spacing</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><code>space-6</code> <span>24px</span></div>
                    <div className="flex justify-between"><code>space-8</code> <span>32px</span></div>
                    <div className="flex justify-between"><code>space-10</code> <span>40px</span></div>
                    <div className="flex justify-between"><code>space-12</code> <span>48px</span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">Large Spacing</h5>
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
                Token Usage
              </CardTitle>
              <CardDescription>
                How to use design tokens in CSS variables and Tailwind CSS.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Direct Usage with CSS Variables</h4>
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
                <h4 className="font-medium">Tailwind CSS Classes</h4>
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
                <h4 className="font-medium">Tailwind v4 Theme Extension</h4>
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
              <CardTitle>CSS Variable System</CardTitle>
              <CardDescription>
                The CSS variable structure and naming convention used in your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Light Theme (:root)</h5>
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
                  <h5 className="font-medium">Dark Theme (.dark)</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-xs">
                      <code>{`.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --secondary: oklch(0.269 0 0);
  --muted: oklch(0.269 0 0);
  --border: oklch(0.269 0 0);
  /* radius, typography values are the same */
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>
                Guidelines for effectively using design tokens.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium text-green-700">Recommendations</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Prioritize semantic token names (primary vs #030213)</li>
                    <li>• Always consider Foreground pairs</li>
                    <li>• Check behavior during theme switch</li>
                    <li>• Utilize OKLCH color space</li>
                    <li>• Accessibility verification</li>
                    <li>• Adherence to design system rules</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium text-red-700">Things to Avoid</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Hardcoding color values</li>
                    <li>• Arbitrary CSS variable generation</li>
                    <li>• Using only background colors without Foreground</li>
                    <li>• Ignoring token naming conventions</li>
                    <li>• Missing dark theme adaptation</li>
                    <li>• Using chart colors for general UI</li>
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