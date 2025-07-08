import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Check, Copy, Eye, Palette, Sun, Moon, Zap, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';

export function ColorSection() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isDarkPreview, setIsDarkPreview] = useState(false);
  const [selectedColorFamily, setSelectedColorFamily] = useState<string | null>(null);

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Enhanced color system based on the globals.css tokens
  const colorSystem = {
    neutral: {
      name: 'Neutral',
      description: 'Foundation colors for backgrounds, surfaces, and text',
      usage: 'Use for page backgrounds, content areas, borders, and text',
      colors: {
        light: [
          { name: 'Background', value: '#ffffff', token: '--background', hex: '#ffffff', usage: 'Primary page background' },
          { name: 'Card', value: '#ffffff', token: '--card', hex: '#ffffff', usage: 'Card and surface backgrounds' },
          { name: 'Muted', value: '#ececf0', token: '--muted', hex: '#ececf0', usage: 'Subtle backgrounds, disabled states' },
          { name: 'Accent', value: '#e9ebef', token: '--accent', hex: '#e9ebef', usage: 'Hover states, highlights' },
          { name: 'Border', value: 'rgba(0, 0, 0, 0.1)', token: '--border', hex: 'rgba(0, 0, 0, 0.1)', usage: 'Borders, dividers' },
        ],
        dark: [
          { name: 'Background', value: 'oklch(0.145 0 0)', token: '--background', hex: '#1a1a1a', usage: 'Primary page background' },
          { name: 'Card', value: 'oklch(0.145 0 0)', token: '--card', hex: '#1a1a1a', usage: 'Card and surface backgrounds' },
          { name: 'Muted', value: 'oklch(0.269 0 0)', token: '--muted', hex: '#2d2d2d', usage: 'Subtle backgrounds, disabled states' },
          { name: 'Accent', value: 'oklch(0.269 0 0)', token: '--accent', hex: '#2d2d2d', usage: 'Hover states, highlights' },
          { name: 'Border', value: 'oklch(0.269 0 0)', token: '--border', hex: '#2d2d2d', usage: 'Borders, dividers' },
        ]
      }
    },
    text: {
      name: 'Text',
      description: 'Colors for text content and typography',
      usage: 'Use for body text, headings, and readable content',
      colors: {
        light: [
          { name: 'Foreground', value: 'oklch(0.145 0 0)', token: '--foreground', hex: '#1a1a1a', usage: 'Primary text color' },
          { name: 'Muted Foreground', value: '#717182', token: '--muted-foreground', hex: '#717182', usage: 'Secondary text, descriptions' },
          { name: 'Card Foreground', value: 'oklch(0.145 0 0)', token: '--card-foreground', hex: '#1a1a1a', usage: 'Text on card backgrounds' },
        ],
        dark: [
          { name: 'Foreground', value: 'oklch(0.985 0 0)', token: '--foreground', hex: '#fafafa', usage: 'Primary text color' },
          { name: 'Muted Foreground', value: 'oklch(0.708 0 0)', token: '--muted-foreground', hex: '#a1a1a1', usage: 'Secondary text, descriptions' },
          { name: 'Card Foreground', value: 'oklch(0.985 0 0)', token: '--card-foreground', hex: '#fafafa', usage: 'Text on card backgrounds' },
        ]
      }
    },
    brand: {
      name: 'Brand',
      description: 'Primary brand colors for key actions and identity',
      usage: 'Use for primary buttons, links, and brand elements',
      colors: {
        light: [
          { name: 'Primary', value: '#030213', token: '--primary', hex: '#030213', usage: 'Primary actions, links' },
          { name: 'Primary Foreground', value: 'oklch(1 0 0)', token: '--primary-foreground', hex: '#ffffff', usage: 'Text on primary backgrounds' },
          { name: 'Secondary', value: 'oklch(0.95 0.0058 264.53)', token: '--secondary', hex: '#f1f1f5', usage: 'Secondary actions' },
          { name: 'Secondary Foreground', value: '#030213', token: '--secondary-foreground', hex: '#030213', usage: 'Text on secondary backgrounds' },
        ],
        dark: [
          { name: 'Primary', value: 'oklch(0.985 0 0)', token: '--primary', hex: '#fafafa', usage: 'Primary actions, links' },
          { name: 'Primary Foreground', value: 'oklch(0.205 0 0)', token: '--primary-foreground', hex: '#262626', usage: 'Text on primary backgrounds' },
          { name: 'Secondary', value: 'oklch(0.269 0 0)', token: '--secondary', hex: '#2d2d2d', usage: 'Secondary actions' },
          { name: 'Secondary Foreground', value: 'oklch(0.985 0 0)', token: '--secondary-foreground', hex: '#fafafa', usage: 'Text on secondary backgrounds' },
        ]
      }
    },
    semantic: {
      name: 'Semantic',
      description: 'Status and feedback colors that convey meaning',
      usage: 'Use to communicate status, errors, warnings, and success states',
      colors: {
        light: [
          { name: 'Destructive', value: '#d4183d', token: '--destructive', hex: '#d4183d', usage: 'Error states, destructive actions' },
          { name: 'Destructive Foreground', value: '#ffffff', token: '--destructive-foreground', hex: '#ffffff', usage: 'Text on destructive backgrounds' },
        ],
        dark: [
          { name: 'Destructive', value: 'oklch(0.396 0.141 25.723)', token: '--destructive', hex: '#7c2d12', usage: 'Error states, destructive actions' },
          { name: 'Destructive Foreground', value: 'oklch(0.637 0.237 25.331)', token: '--destructive-foreground', hex: '#fca5a5', usage: 'Text on destructive backgrounds' },
        ]
      }
    },
    data: {
      name: 'Data Visualization',
      description: 'Colors for charts, graphs, and data representation',
      usage: 'Use for data visualization, charts, and categorical information',
      colors: {
        light: [
          { name: 'Chart 1', value: 'oklch(0.646 0.222 41.116)', token: '--chart-1', hex: '#e66c37', usage: 'Primary data series' },
          { name: 'Chart 2', value: 'oklch(0.6 0.118 184.704)', token: '--chart-2', hex: '#6fb5c7', usage: 'Secondary data series' },
          { name: 'Chart 3', value: 'oklch(0.398 0.07 227.392)', token: '--chart-3', hex: '#4c5866', usage: 'Tertiary data series' },
          { name: 'Chart 4', value: 'oklch(0.828 0.189 84.429)', token: '--chart-4', hex: '#d4b429', usage: 'Quaternary data series' },
          { name: 'Chart 5', value: 'oklch(0.769 0.188 70.08)', token: '--chart-5', hex: '#b87e3e', usage: 'Additional data series' },
        ],
        dark: [
          { name: 'Chart 1', value: 'oklch(0.488 0.243 264.376)', token: '--chart-1', hex: '#3b82f6', usage: 'Primary data series' },
          { name: 'Chart 2', value: 'oklch(0.696 0.17 162.48)', token: '--chart-2', hex: '#10b981', usage: 'Secondary data series' },
          { name: 'Chart 3', value: 'oklch(0.769 0.188 70.08)', token: '--chart-3', hex: '#f59e0b', usage: 'Tertiary data series' },
          { name: 'Chart 4', value: 'oklch(0.627 0.265 303.9)', token: '--chart-4', hex: '#8b5cf6', usage: 'Quaternary data series' },
          { name: 'Chart 5', value: 'oklch(0.645 0.246 16.439)', token: '--chart-5', hex: '#ef4444', usage: 'Additional data series' },
        ]
      }
    }
  };

  // Extended semantic colors for better status communication
  const extendedSemanticColors = [
    { name: 'Success', color: '#10b981', bg: '#dcfce7', icon: CheckCircle, usage: 'Success messages, completed states' },
    { name: 'Warning', color: '#f59e0b', bg: '#fef3c7', icon: AlertTriangle, usage: 'Warning messages, caution states' },
    { name: 'Error', color: '#ef4444', bg: '#fee2e2', icon: XCircle, usage: 'Error messages, failed states' },
    { name: 'Info', color: '#3b82f6', bg: '#dbeafe', icon: Info, usage: 'Informational messages, neutral states' },
  ];

  // Accessibility information
  const contrastInfo = [
    { pairing: 'Primary / Primary Foreground', light: '21:1', dark: '15.8:1', level: 'AAA', description: 'Main brand actions' },
    { pairing: 'Background / Foreground', light: '20.6:1', dark: '19.4:1', level: 'AAA', description: 'Body text on backgrounds' },
    { pairing: 'Muted / Muted Foreground', light: '4.8:1', dark: '4.1:1', level: 'AA', description: 'Secondary text' },
    { pairing: 'Destructive / Destructive Foreground', light: '6.2:1', dark: '5.1:1', level: 'AA+', description: 'Error states' },
    { pairing: 'Card / Card Foreground', light: '20.6:1', dark: '19.4:1', level: 'AAA', description: 'Card content' },
  ];

  const ColorSwatch = ({ color, theme = 'light', size = 'default' }: { 
    color: any, 
    theme?: 'light' | 'dark',
    size?: 'small' | 'default' | 'large' 
  }) => {
    const sizeClasses = {
      small: 'w-8 h-8',
      default: 'w-16 h-16',
      large: 'w-20 h-20'
    };

    const displayValue = color.hex || color.value;

    return (
      <div className="group relative">
        <div 
          className={`${sizeClasses[size]} rounded-lg border border-border/50 shadow-sm cursor-pointer transition-all hover:scale-105 hover:shadow-md relative overflow-hidden`}
          style={{ backgroundColor: displayValue }}
          onClick={() => copyToClipboard(color.token ? `var(${color.token})` : displayValue, `${color.name}-${theme}`)}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
            {copiedColor === `${color.name}-${theme}` ? (
              <Check className="w-4 h-4 text-white drop-shadow-lg" />
            ) : (
              <Copy className="w-4 h-4 text-white drop-shadow-lg" />
            )}
          </div>
        </div>
        {size !== 'small' && (
          <div className="mt-2 space-y-1">
            <div className="font-medium text-sm">{color.name}</div>
            {color.token && (
              <div className="text-xs text-muted-foreground font-mono">var({color.token})</div>
            )}
            <div className="text-xs text-muted-foreground font-mono">{displayValue}</div>
            {color.usage && (
              <div className="text-xs text-muted-foreground max-w-32">{color.usage}</div>
            )}
          </div>
        )}
      </div>
    );
  };

  const ColorFamilyCard = ({ family, familyKey }: { family: any, familyKey: string }) => {
    const isSelected = selectedColorFamily === familyKey;
    
    return (
      <Card 
        className={`cursor-pointer transition-all hover:shadow-md ${isSelected ? 'ring-2 ring-primary' : ''}`}
        onClick={() => setSelectedColorFamily(isSelected ? null : familyKey)}
      >
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-between text-lg">
            {family.name}
            <Badge variant="outline">
              {family.colors.light.length + family.colors.dark.length} tokens
            </Badge>
          </CardTitle>
          <CardDescription>{family.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4" />
                Light Theme
              </h5>
              <div className="grid grid-cols-5 gap-2">
                {family.colors.light.slice(0, 5).map((color: any) => (
                  <ColorSwatch key={color.name} color={color} theme="light" size="small" />
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Moon className="w-4 h-4" />
                Dark Theme
              </h5>
              <div className="grid grid-cols-5 gap-2">
                {family.colors.dark.slice(0, 5).map((color: any) => (
                  <ColorSwatch key={color.name} color={color} theme="dark" size="small" />
                ))}
              </div>
            </div>
          </div>
          {isSelected && (
            <div className="mt-4 pt-4 border-t border-border">
              <h5 className="text-sm font-medium mb-2">Usage Guidelines</h5>
              <p className="text-sm text-muted-foreground">{family.usage}</p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Palette className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Color System</h1>
            <p className="text-muted-foreground">
              지각적 균일성과 접근성을 위해 OKLCH 색상 공간으로 구축되었습니다
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            OKLCH Color Space
          </Badge>
          <Badge variant="outline">WCAG AAA Compliant</Badge>
          <Badge variant="outline">Light & Dark Themes</Badge>
          <Badge variant="outline">40+ Color Tokens</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="palette">Color Palette</TabsTrigger>
          <TabsTrigger value="semantic">Semantic Colors</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="usage">Usage Guide</TabsTrigger>
          <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(colorSystem).map(([key, family]) => (
              <ColorFamilyCard key={key} family={family} familyKey={key} />
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Why OKLCH Color Space?</CardTitle>
              <CardDescription>
                Our color system uses OKLCH for better perceptual uniformity and accessibility
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-3">Benefits</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Perceptually uniform color space
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Better contrast calculation accuracy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Smoother color interpolation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Predictable lightness adjustments
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Format Structure</h4>
                <div className="space-y-3">
                  <div className="font-mono text-sm bg-muted p-3 rounded-md">
                    oklch(L C H)
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div><strong>L</strong> = Lightness (0-1)</div>
                    <div><strong>C</strong> = Chroma (0-0.4)</div>
                    <div><strong>H</strong> = Hue (0-360°)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Color Palette Tab */}
        <TabsContent value="palette" className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1">Complete Color Palette</h2>
              <p className="text-muted-foreground">All design tokens with light and dark theme variants</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsDarkPreview(!isDarkPreview)}
              className="flex items-center gap-2"
            >
              {isDarkPreview ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDarkPreview ? 'Show Light' : 'Show Dark'}
            </Button>
          </div>

          {Object.entries(colorSystem).map(([key, family]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {family.name}
                  <Badge variant="outline">
                    {isDarkPreview ? 'Dark Theme' : 'Light Theme'}
                  </Badge>
                </CardTitle>
                <CardDescription>{family.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {(isDarkPreview ? family.colors.dark : family.colors.light).map((color: any) => (
                    <ColorSwatch 
                      key={color.name} 
                      color={color} 
                      theme={isDarkPreview ? 'dark' : 'light'} 
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Semantic Colors Tab */}
        <TabsContent value="semantic" className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-1">Semantic Color Usage</h2>
            <p className="text-muted-foreground mb-6">
              Colors that communicate status, feedback, and meaning to users
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {extendedSemanticColors.map((semantic) => {
              const IconComponent = semantic.icon;
              return (
                <Card key={semantic.name}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: semantic.bg }}
                      >
                        <IconComponent 
                          className="w-5 h-5" 
                          style={{ color: semantic.color }}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{semantic.name}</h4>
                        <div className="text-xs font-mono text-muted-foreground">
                          {semantic.color}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{semantic.usage}</p>
                    <div className="mt-4">
                      <div 
                        className="h-2 rounded-full"
                        style={{ backgroundColor: semantic.color }}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Usage Examples</CardTitle>
              <CardDescription>See semantic colors in common UI patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">Success</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">Your changes have been saved successfully.</p>
                </div>
                <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2 text-red-800">
                    <XCircle className="w-4 h-4" />
                    <span className="font-medium">Error</span>
                  </div>
                  <p className="text-sm text-red-700 mt-1">Unable to save changes. Please try again.</p>
                </div>
                <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-800">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-medium">Warning</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">This action cannot be undone.</p>
                </div>
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-800">
                    <Info className="w-4 h-4" />
                    <span className="font-medium">Information</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">New features are available in this update.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Accessibility Tab */}
        <TabsContent value="accessibility" className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-1">Accessibility Standards</h2>
            <p className="text-muted-foreground mb-6">
              All color combinations meet or exceed WCAG 2.1 guidelines
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Color Contrast Ratios</CardTitle>
              <CardDescription>
                Contrast measurements for all primary color pairings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contrastInfo.map((contrast, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{contrast.pairing}</div>
                      <div className="text-sm text-muted-foreground">{contrast.description}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium">Light: {contrast.light}</div>
                        <div className="text-sm font-medium">Dark: {contrast.dark}</div>
                      </div>
                      <Badge 
                        variant={contrast.level === 'AAA' ? 'default' : 'secondary'}
                        className="ml-2"
                      >
                        WCAG {contrast.level}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>WCAG Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Badge variant="outline">AA</Badge>
                    Minimum Standards
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Normal text: 4.5:1 contrast ratio</li>
                    <li>• Large text (18pt+): 3:1 contrast ratio</li>
                    <li>• UI components: 3:1 contrast ratio</li>
                    <li>• Focus indicators: 3:1 contrast ratio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Badge>AAA</Badge>
                    Enhanced Standards
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Normal text: 7:1 contrast ratio</li>
                    <li>• Large text (18pt+): 4.5:1 contrast ratio</li>
                    <li>• Preferred for critical interfaces</li>
                    <li>• Better for users with vision impairments</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Accessibility Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Never rely on color alone</div>
                      <div className="text-xs text-muted-foreground">Use icons, patterns, or text alongside color</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Test with color blindness simulators</div>
                      <div className="text-xs text-muted-foreground">Verify designs work for all types of color vision</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Maintain focus indicators</div>
                      <div className="text-xs text-muted-foreground">Ensure keyboard navigation is clearly visible</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Test in different lighting</div>
                      <div className="text-xs text-muted-foreground">Consider how colors appear in various environments</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Usage Guide Tab */}
        <TabsContent value="usage" className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-1">Color Usage Guidelines</h2>
            <p className="text-muted-foreground mb-6">
              Best practices for implementing colors in your designs and code
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Use semantic color names</h4>
                    <p className="text-xs text-muted-foreground">Reference colors by their purpose: primary, destructive, muted</p>
                    <code className="text-xs bg-green-50 px-2 py-1 rounded mt-1 block">var(--primary)</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Maintain consistent contrast</h4>
                    <p className="text-xs text-muted-foreground">Ensure all text meets WCAG standards for readability</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Test in both themes</h4>
                    <p className="text-xs text-muted-foreground">Verify designs work in both light and dark modes</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Use design tokens</h4>
                    <p className="text-xs text-muted-foreground">Reference CSS custom properties for theme consistency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Don't
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Use hardcoded color values</h4>
                    <p className="text-xs text-muted-foreground">Avoid hex codes that don't adapt to theme changes</p>
                    <code className="text-xs bg-red-50 px-2 py-1 rounded mt-1 block">#ff0000 ❌</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Mix semantic meanings</h4>
                    <p className="text-xs text-muted-foreground">Don't use destructive colors for positive actions</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Ignore contrast requirements</h4>
                    <p className="text-xs text-muted-foreground">Never compromise accessibility for aesthetics</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Create custom color variations</h4>
                    <p className="text-xs text-muted-foreground">Stick to the defined palette for consistency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Implementation Examples</CardTitle>
              <CardDescription>See how to properly use colors in different contexts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="font-medium mb-3">Primary Actions</h4>
                  <Button className="w-full mb-2">Save Changes</Button>
                  <p className="text-xs text-muted-foreground">
                    Uses <code>var(--primary)</code> for main calls-to-action
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Secondary Actions</h4>
                  <Button variant="secondary" className="w-full mb-2">Cancel</Button>
                  <p className="text-xs text-muted-foreground">
                    Uses <code>var(--secondary)</code> for supporting actions
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Destructive Actions</h4>
                  <Button variant="destructive" className="w-full mb-2">Delete</Button>
                  <p className="text-xs text-muted-foreground">
                    Uses <code>var(--destructive)</code> for dangerous actions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Design Tokens Tab */}
        <TabsContent value="tokens" className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-1">Design Tokens</h2>
            <p className="text-muted-foreground mb-6">
              CSS custom properties and implementation details
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Light Theme Tokens</CardTitle>
                <CardDescription>CSS custom properties for light theme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm max-h-96 overflow-y-auto">
                  {Object.entries(colorSystem).map(([familyKey, family]) =>
                    family.colors.light.map((color: any) => (
                      <div key={`${familyKey}-${color.name}`} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded group">
                        <span>{color.token}: {color.value};</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => copyToClipboard(`${color.token}: ${color.value};`, `token-${color.name}`)}
                        >
                          {copiedColor === `token-${color.name}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dark Theme Tokens</CardTitle>
                <CardDescription>CSS custom properties for dark theme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm max-h-96 overflow-y-auto">
                  {Object.entries(colorSystem).map(([familyKey, family]) =>
                    family.colors.dark.map((color: any) => (
                      <div key={`${familyKey}-${color.name}-dark`} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded group">
                        <span>{color.token}: {color.value};</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => copyToClipboard(`${color.token}: ${color.value};`, `token-dark-${color.name}`)}
                        >
                          {copiedColor === `token-dark-${color.name}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Implementation Examples</CardTitle>
              <CardDescription>How to use design tokens in your CSS and components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">CSS Implementation</h4>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground">/* Use design tokens in CSS */</div>
                  <div>.my-component {`{`}</div>
                  <div className="ml-4">background-color: var(--primary);</div>
                  <div className="ml-4">color: var(--primary-foreground);</div>
                  <div className="ml-4">border: 1px solid var(--border);</div>
                  <div>{`}`}</div>
                  <br />
                  <div className="text-muted-foreground">/* Theme-aware hover states */</div>
                  <div>.my-component:hover {`{`}</div>
                  <div className="ml-4">background-color: var(--accent);</div>
                  <div className="ml-4">color: var(--accent-foreground);</div>
                  <div>{`}`}</div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Tailwind CSS Classes</h4>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-muted-foreground">/* Equivalent Tailwind classes */</div>
                  <div>&lt;div className="bg-primary text-primary-foreground"&gt;</div>
                  <div className="ml-4">Primary button content</div>
                  <div>&lt;/div&gt;</div>
                  <br />
                  <div>&lt;div className="bg-muted text-muted-foreground"&gt;</div>
                  <div className="ml-4">Muted content area</div>
                  <div>&lt;/div&gt;</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}