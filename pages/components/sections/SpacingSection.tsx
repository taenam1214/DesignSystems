import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Check, Copy, Ruler, Layout, Move, Grid, Square, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

export function SpacingSection() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [selectedExample, setSelectedExample] = useState<string>('padding');

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  // Comprehensive spacing system based on 4px base unit
  const spacingScale = [
    { token: '--spacing-0', value: '0px', rem: '0rem', name: 'None', usage: 'Reset spacing, overlapping elements' },
    { token: '--spacing-1', value: '2px', rem: '0.125rem', name: 'XXS', usage: 'Minimal separation, fine adjustments' },
    { token: '--spacing-2', value: '4px', rem: '0.25rem', name: 'XS', usage: 'Very tight spacing, icons to text' },
    { token: '--spacing-3', value: '8px', rem: '0.5rem', name: 'SM', usage: 'Tight spacing, form elements' },
    { token: '--spacing-4', value: '12px', rem: '0.75rem', name: 'MD', usage: 'Standard spacing, buttons, inputs' },
    { token: '--spacing-5', value: '16px', rem: '1rem', name: 'LG', usage: 'Comfortable spacing, card padding' },
    { token: '--spacing-6', value: '20px', rem: '1.25rem', name: 'XL', usage: 'Generous spacing, section gaps' },
    { token: '--spacing-7', value: '24px', rem: '1.5rem', name: 'XXL', usage: 'Large spacing, component separation' },
    { token: '--spacing-8', value: '32px', rem: '2rem', name: '2XL', usage: 'Major spacing, layout sections' },
    { token: '--spacing-9', value: '40px', rem: '2.5rem', name: '3XL', usage: 'Very large spacing, page sections' },
    { token: '--spacing-10', value: '48px', rem: '3rem', name: '4XL', usage: 'Extra large spacing, hero sections' },
    { token: '--spacing-11', value: '64px', rem: '4rem', name: '5XL', usage: 'Maximum spacing, major layout gaps' },
    { token: '--spacing-12', value: '80px', rem: '5rem', name: '6XL', usage: 'Massive spacing, page-level separation' },
  ];

  const contextualSpacing = {
    components: {
      name: 'Component Spacing',
      description: 'Internal spacing within components',
      examples: [
        { name: 'Button Padding', horizontal: 'var(--spacing-5)', vertical: 'var(--spacing-3)', usage: 'Standard button internal spacing' },
        { name: 'Input Padding', horizontal: 'var(--spacing-4)', vertical: 'var(--spacing-3)', usage: 'Form input field padding' },
        { name: 'Card Padding', horizontal: 'var(--spacing-6)', vertical: 'var(--spacing-6)', usage: 'Card content area padding' },
        { name: 'Alert Padding', horizontal: 'var(--spacing-5)', vertical: 'var(--spacing-4)', usage: 'Alert message padding' },
      ]
    },
    layout: {
      name: 'Layout Spacing',
      description: 'Spacing between major layout elements',
      examples: [
        { name: 'Section Gap', value: 'var(--spacing-8)', usage: 'Between major page sections' },
        { name: 'Container Padding', value: 'var(--spacing-6)', usage: 'Page container side padding' },
        { name: 'Grid Gap', value: 'var(--spacing-5)', usage: 'Between grid items' },
        { name: 'Header Height', value: 'var(--spacing-10)', usage: 'Navigation header height' },
      ]
    },
    content: {
      name: 'Content Spacing',
      description: 'Spacing for text content and typography',
      examples: [
        { name: 'Paragraph Margin', value: 'var(--spacing-4)', usage: 'Space between paragraphs' },
        { name: 'Heading Margin', value: 'var(--spacing-6)', usage: 'Space after headings' },
        { name: 'List Item Gap', value: 'var(--spacing-2)', usage: 'Between list items' },
        { name: 'Form Field Gap', value: 'var(--spacing-5)', usage: 'Between form fields' },
      ]
    }
  };

  const usageGuidelines = [
    {
      title: 'Consistent Increments',
      description: 'Use the defined spacing scale rather than arbitrary values',
      example: 'Use var(--spacing-4) instead of 14px',
      type: 'do'
    },
    {
      title: 'Contextual Appropriateness',
      description: 'Choose spacing values that match the visual hierarchy',
      example: 'Larger spacing for major sections, smaller for related elements',
      type: 'do'
    },
    {
      title: 'Responsive Considerations',
      description: 'Reduce spacing on smaller screens when necessary',
      example: 'Use smaller padding on mobile devices',
      type: 'do'
    },
    {
      title: 'Avoid Random Values',
      description: 'Don\'t use spacing values outside the defined scale',
      example: 'Avoid arbitrary values like 13px or 27px',
      type: 'dont'
    }
  ];

  const SpacingVisualizer = ({ size, label, token }: { size: string, label: string, token: string }) => {
    const sizeValue = spacingScale.find(s => s.token === token)?.value || size;
    
    return (
      <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors group">
        <div className="flex items-center gap-3 min-w-32">
          <div 
            className="bg-primary rounded"
            style={{ width: sizeValue, height: '16px' }}
          />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="text-sm text-muted-foreground font-mono flex-1">
          {token}
        </div>
        <div className="text-sm text-muted-foreground">
          {sizeValue}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => copyToClipboard(`${token}: ${sizeValue}`, token)}
        >
          {copiedToken === token ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    );
  };

  const SpacingExample = ({ type }: { type: string }) => {
    const examples = {
      padding: (
        <div className="space-y-4">
          <div className="bg-primary/10 border-2 border-dashed border-primary/30 p-4 rounded-lg">
            <div className="bg-background border border-border rounded p-4">
              <h4 className="mb-2">Card with Standard Padding</h4>
              <p className="text-sm text-muted-foreground">
                This card uses var(--spacing-6) for padding, providing comfortable reading space.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-primary/10 border-2 border-dashed border-primary/30 p-2 rounded">
              <div className="bg-background border border-border rounded p-2 text-center text-sm">
                Small Padding<br/>
                <code className="text-xs">--spacing-3</code>
              </div>
            </div>
            <div className="bg-primary/10 border-2 border-dashed border-primary/30 p-4 rounded">
              <div className="bg-background border border-border rounded p-4 text-center text-sm">
                Medium Padding<br/>
                <code className="text-xs">--spacing-5</code>
              </div>
            </div>
            <div className="bg-primary/10 border-2 border-dashed border-primary/30 p-6 rounded">
              <div className="bg-background border border-border rounded p-6 text-center text-sm">
                Large Padding<br/>
                <code className="text-xs">--spacing-7</code>
              </div>
            </div>
          </div>
        </div>
      ),
      margin: (
        <div className="space-y-4">
          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="mb-4">Section Title</h4>
              <div className="space-y-4">
                <div className="bg-background p-4 rounded border">
                  <p className="text-sm">First paragraph with standard spacing below.</p>
                </div>
                <div className="bg-background p-4 rounded border">
                  <p className="text-sm">Second paragraph with consistent spacing.</p>
                </div>
                <div className="bg-background p-4 rounded border">
                  <p className="text-sm">Third paragraph maintaining rhythm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      gap: (
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm">
                Grid Item {i}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Grid using <code>gap: var(--spacing-5)</code>
          </p>
        </div>
      )
    };

    return examples[type as keyof typeof examples] || examples.padding;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Ruler className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Spacing System</h1>
            <p className="text-muted-foreground">
              4px 기본 단위를 기반으로 구축된 일관된 공간 관계
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Grid className="w-3 h-3" />
            4px Base Unit
          </Badge>
          <Badge variant="outline">13 Spacing Tokens</Badge>
          <Badge variant="outline">Responsive Ready</Badge>
          <Badge variant="outline">Context-Aware</Badge>
        </div>
      </div>

      <Tabs defaultValue="scale" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="scale">Spacing Scale</TabsTrigger>
          <TabsTrigger value="usage">Usage Context</TabsTrigger>
          <TabsTrigger value="examples">Live Examples</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
        </TabsList>

        {/* Spacing Scale Tab */}
        <TabsContent value="scale" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale Overview</CardTitle>
              <CardDescription>
                Our spacing system uses a 4px base unit with consistent increments for predictable layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {spacingScale.map((spacing) => (
                  <SpacingVisualizer 
                    key={spacing.token}
                    size={spacing.value}
                    label={spacing.name}
                    token={spacing.token}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Base Unit System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-primary rounded-sm"></div>
                  <div>
                    <div className="font-medium">4px Base Unit</div>
                    <div className="text-sm text-muted-foreground">Foundation for all spacing calculations</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>XXS (2px)</span>
                    <span>0.5 × base</span>
                  </div>
                  <div className="flex justify-between">
                    <span>XS (4px)</span>
                    <span>1 × base</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SM (8px)</span>
                    <span>2 × base</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MD (12px)</span>
                    <span>3 × base</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LG (16px)</span>
                    <span>4 × base</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spacing Hierarchy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Square className="w-3 h-3 text-blue-600" />
                    <span className="text-sm"><strong>Micro (2-8px):</strong> Fine details, icon spacing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-green-600" />
                    <span className="text-sm"><strong>Component (12-24px):</strong> Internal component spacing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-orange-600" />
                    <span className="text-sm"><strong>Layout (32-64px):</strong> Between major elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-6 h-6 text-purple-600" />
                    <span className="text-sm"><strong>Macro (80px+):</strong> Page sections, hero areas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Usage Context Tab */}
        <TabsContent value="usage" className="space-y-8">
          {Object.entries(contextualSpacing).map(([key, context]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{context.name}</CardTitle>
                <CardDescription>{context.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {context.examples.map((example, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">{example.name}</h4>
                      <div className="space-y-2 text-sm">
                        {'horizontal' in example ? (
                          <>
                            <div className="flex justify-between">
                              <span>Horizontal:</span>
                              <code className="font-mono text-xs">{example.horizontal}</code>
                            </div>
                            <div className="flex justify-between">
                              <span>Vertical:</span>
                              <code className="font-mono text-xs">{example.vertical}</code>
                            </div>
                          </>
                        ) : (
                          <div className="flex justify-between">
                            <span>Value:</span>
                            <code className="font-mono text-xs">{example.value}</code>
                          </div>
                        )}
                        <p className="text-muted-foreground text-xs mt-2">{example.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Live Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold">Interactive Examples</h2>
            <div className="flex gap-2">
              {['padding', 'margin', 'gap'].map((type) => (
                <Button
                  key={type}
                  variant={selectedExample === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedExample(type)}
                  className="capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{selectedExample} Examples</CardTitle>
              <CardDescription>
                See how {selectedExample} spacing works in real components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SpacingExample type={selectedExample} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Spacing Patterns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">Form Layouts</h4>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <div className="bg-background p-3 rounded border">
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <div className="h-8 bg-muted rounded"></div>
                    </div>
                    <div className="bg-background p-3 rounded border">
                      <label className="block text-sm font-medium mb-1">Password</label>
                      <div className="h-8 bg-muted rounded"></div>
                    </div>
                    <div className="bg-primary h-8 rounded"></div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Form fields with consistent var(--spacing-4) gaps
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Card Layouts</h4>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <div className="bg-background p-4 rounded border space-y-3">
                      <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-5/6"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-6 bg-primary/30 rounded flex-1"></div>
                        <div className="h-6 bg-muted rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Card content with var(--spacing-6) padding
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Guidelines Tab */}
        <TabsContent value="guidelines" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {usageGuidelines.map((guideline, index) => (
              <Card key={index} className={guideline.type === 'do' ? 'border-green-200' : 'border-red-200'}>
                <CardHeader className="pb-3">
                  <CardTitle className={`text-base flex items-center gap-2 ${
                    guideline.type === 'do' ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {guideline.type === 'do' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Move className="w-4 h-4" />
                    )}
                    {guideline.type === 'do' ? 'Do' : "Don't"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <h4 className="font-medium text-sm">{guideline.title}</h4>
                  <p className="text-sm text-muted-foreground">{guideline.description}</p>
                  <div className={`text-xs p-2 rounded ${
                    guideline.type === 'do' ? 'bg-green-50' : 'bg-red-50'
                  }`}>
                    <code>{guideline.example}</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Spacing Decision Tree</CardTitle>
              <CardDescription>
                Guidelines for choosing the right spacing values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-sm">Related Elements (2-8px)</h4>
                    <p className="text-xs text-muted-foreground">Use micro spacing for tightly related content like icon + text, form labels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-sm">Component Internal (12-24px)</h4>
                    <p className="text-xs text-muted-foreground">Use for padding inside components, between form fields, button content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-sm">Component Separation (32-48px)</h4>
                    <p className="text-xs text-muted-foreground">Use between different components, card grids, section boundaries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-sm">Layout Sections (64px+)</h4>
                    <p className="text-xs text-muted-foreground">Use for major page sections, hero areas, significant content breaks</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementation Tab */}
        <TabsContent value="implementation" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>CSS Custom Properties</CardTitle>
              <CardDescription>
                Design tokens for consistent spacing implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-3">CSS Token Definitions</h4>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm max-h-80 overflow-y-auto">
                    <div className="text-muted-foreground mb-2">/* Spacing Scale */</div>
                    {spacingScale.map((spacing) => (
                      <div key={spacing.token} className="flex items-center justify-between py-1 group">
                        <span>{spacing.token}: {spacing.value};</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                          onClick={() => copyToClipboard(`${spacing.token}: ${spacing.value};`, `css-${spacing.token}`)}
                        >
                          {copiedToken === `css-${spacing.token}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Usage Examples</h4>
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h5 className="text-sm font-medium mb-2">CSS Implementation</h5>
                      <div className="font-mono text-xs bg-background p-3 rounded">
                        <div>.card {`{`}</div>
                        <div className="ml-2">padding: var(--spacing-6);</div>
                        <div className="ml-2">margin-bottom: var(--spacing-8);</div>
                        <div>{`}`}</div>
                        <br />
                        <div>.form-field {`{`}</div>
                        <div className="ml-2">margin-bottom: var(--spacing-5);</div>
                        <div>{`}`}</div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h5 className="text-sm font-medium mb-2">Tailwind Classes</h5>
                      <div className="font-mono text-xs bg-background p-3 rounded">
                        <div>&lt;div className="p-6 mb-8"&gt;</div>
                        <div>&lt;div className="space-y-5"&gt;</div>
                        <div>&lt;div className="gap-4"&gt;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsive Spacing</CardTitle>
              <CardDescription>
                Adapting spacing for different screen sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-3">Responsive CSS Example</h4>
                <div className="font-mono text-sm bg-background p-4 rounded">
                  <div>.container {`{`}</div>
                  <div className="ml-2">padding: var(--spacing-4);</div>
                  <div>{`}`}</div>
                  <br />
                  <div>@media (min-width: 768px) {`{`}</div>
                  <div className="ml-2">.container {`{`}</div>
                  <div className="ml-4">padding: var(--spacing-6);</div>
                  <div className="ml-2">{`}`}</div>
                  <div>{`}`}</div>
                  <br />
                  <div>@media (min-width: 1024px) {`{`}</div>
                  <div className="ml-2">.container {`{`}</div>
                  <div className="ml-4">padding: var(--spacing-8);</div>
                  <div className="ml-2">{`}`}</div>
                  <div>{`}`}</div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Mobile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs space-y-1">
                      <div>Container: var(--spacing-4)</div>
                      <div>Sections: var(--spacing-6)</div>
                      <div>Components: var(--spacing-3)</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Tablet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs space-y-1">
                      <div>Container: var(--spacing-6)</div>
                      <div>Sections: var(--spacing-8)</div>
                      <div>Components: var(--spacing-5)</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Desktop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs space-y-1">
                      <div>Container: var(--spacing-8)</div>
                      <div>Sections: var(--spacing-10)</div>
                      <div>Components: var(--spacing-6)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}