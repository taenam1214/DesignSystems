import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Type, Copy, Check, Download, Palette, AlignLeft, Bold, Italic } from 'lucide-react';
import { useState } from 'react';

export function TypographySection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const typeScale = [
    {
      name: 'H1',
      size: 'text-4xl',
      pixels: '36px',
      usage: 'Main page title',
      sample: 'Main Page Title'
    },
    {
      name: 'H2',
      size: 'text-3xl',
      pixels: '30px',
      usage: 'Section title',
      sample: 'Section title'
    },
    {
      name: 'H3',
      size: 'text-2xl',
      pixels: '24px',
      usage: 'Sub-section title',
      sample: 'Sub-section title'
    },
    {
      name: 'H4',
      size: 'text-xl',
      pixels: '20px',
      usage: 'Component title',
      sample: 'Component title'
    },
    {
      name: 'H5',
      size: 'text-lg',
      pixels: '18px',
      usage: 'Card title',
      sample: 'Card title'
    },
    {
      name: 'H6',
      size: 'text-base',
      pixels: '16px',
      usage: 'Subtitle',
      sample: 'Subtitle'
    },
    {
      name: 'Body Large',
      size: 'text-lg',
      pixels: '18px',
      usage: 'Large body text',
      sample: 'This is an example of large body text. It is used for important information or introductory text.'
    },
    {
      name: 'Body',
      size: 'text-base',
      pixels: '16px',
      usage: 'Normal body text',
      sample: 'This is a normal body text. It is the default size used for most content.'
    },
    {
      name: 'Body Small',
      size: 'text-sm',
      pixels: '14px',
      usage: 'Secondary text, caption',
      sample: 'This is a small body text. It is used for captions or secondary information.'
    },
    {
      name: 'Caption',
      size: 'text-xs',
      pixels: '12px',
      usage: 'Metadata, label',
      sample: 'Small caption text'
    }
  ];

  const fontWeights = [
    { name: 'Normal', class: 'font-normal', weight: '400', usage: 'Body text, general content' },
    { name: 'Medium', class: 'font-medium', weight: '500', usage: 'Titles, emphasized text' },
    { name: 'Semibold', class: 'font-semibold', weight: '600', usage: 'Important titles' },
    { name: 'Bold', class: 'font-bold', weight: '700', usage: 'Very important text' }
  ];

  const lineHeights = [
    { name: 'Tight', class: 'leading-tight', value: '1.25', usage: 'Large titles' },
    { name: 'Normal', class: 'leading-normal', value: '1.5', usage: 'Normal text' },
    { name: 'Relaxed', class: 'leading-relaxed', value: '1.625', usage: 'Long text' },
    { name: 'Loose', class: 'leading-loose', value: '2', usage: 'Quotes' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Type className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Typography</h1>
            <p className="text-muted-foreground">
              A typography system for consistent text hierarchy and readability.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Type className="w-3 h-3" />
            10 size steps
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Bold className="w-3 h-3" />
            4 font weights
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <AlignLeft className="w-3 h-3" />
            4 line heights
          </Badge>
          <Badge variant="outline">Responsive</Badge>
          <Badge variant="outline">Web fonts</Badge>
        </div>
      </div>

      <Tabs defaultValue="scale" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="scale">Size</TabsTrigger>
          <TabsTrigger value="weights">Weights</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        {/* Scale Tab */}
        <TabsContent value="scale" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="w-5 h-5" />
                Typography Scale
              </CardTitle>
              <CardDescription>
                A consistent size system for creating visual hierarchy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {typeScale.map((scale) => (
                  <div key={scale.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{scale.name}</div>
                        <div className="text-xs text-muted-foreground">{scale.pixels}</div>
                        <div className="text-xs font-mono text-muted-foreground">{scale.size}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(scale.size, scale.name)}
                      >
                        {copiedText === scale.name ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className={`${scale.size} leading-normal`}>
                      {scale.sample}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {scale.usage}
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsive Typography</CardTitle>
              <CardDescription>
                Responsive size adjustments for optimal readability across different screen sizes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">Mobile (&lt; 768px)</h4>
                  <div className="space-y-2 text-sm">
                    <div>H1: 28px (text-3xl)</div>
                    <div>H2: 24px (text-2xl)</div>
                    <div>H3: 20px (text-xl)</div>
                    <div>Body: 16px (text-base)</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Tablet (768px+)</h4>
                  <div className="space-y-2 text-sm">
                    <div>H1: 32px (md:text-4xl)</div>
                    <div>H2: 28px (md:text-3xl)</div>
                    <div>H3: 24px (md:text-2xl)</div>
                    <div>Body: 16px (text-base)</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Desktop (1024px+)</h4>
                  <div className="space-y-2 text-sm">
                    <div>H1: 36px (lg:text-4xl)</div>
                    <div>H2: 30px (lg:text-3xl)</div>
                    <div>H3: 24px (lg:text-2xl)</div>
                    <div>Body: 16px (text-base)</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <h5 className="font-medium mb-2">Example of responsive classes</h5>
                <pre className="text-sm">
                  <code>{`<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive title
</h1>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Weights Tab */}
        <TabsContent value="weights" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bold className="w-5 h-5" />
                Font Weights
              </CardTitle>
              <CardDescription>
                Font weight options for emphasizing text and hierarchy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {fontWeights.map((weight) => (
                  <div key={weight.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{weight.name}</div>
                        <div className="text-xs text-muted-foreground">{weight.weight}</div>
                        <div className="text-xs font-mono text-muted-foreground">{weight.class}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(weight.class, `weight-${weight.name}`)}
                      >
                        {copiedText === `weight-${weight.name}` ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className={`text-lg ${weight.class}`}>
                      The quick brown fox jumps over the lazy dog
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {weight.usage}
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weight Combinations</CardTitle>
              <CardDescription>
                Common patterns for combining size and weight.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Title Styles</h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-semibold">Main page title (H1)</div>
                    <div className="text-2xl font-semibold">Section title (H2)</div>
                    <div className="text-xl font-medium">Sub-section title (H3)</div>
                    <div className="text-lg font-medium">Component title (H4)</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">Body Styles</h4>
                  <div className="space-y-2">
                    <div className="text-lg font-normal">
                      Large body text - used for introductions or important information.
                    </div>
                    <div className="text-base font-normal">
                      Normal body text - the default style used for most content.
                    </div>
                    <div className="text-sm font-normal">
                      Small body text - used for secondary information or captions.
                    </div>
                    <div className="text-xs font-medium">
                      Label text - used for form fields or metadata.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Tab */}
        <TabsContent value="spacing" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlignLeft className="w-5 h-5" />
                Line Height and Spacing
              </CardTitle>
              <CardDescription>
                Text spacing settings for improved readability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {lineHeights.map((lineHeight) => (
                  <div key={lineHeight.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{lineHeight.name}</div>
                        <div className="text-xs text-muted-foreground">{lineHeight.value}</div>
                        <div className="text-xs font-mono text-muted-foreground">{lineHeight.class}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(lineHeight.class, `lineheight-${lineHeight.name}`)}
                      >
                        {copiedText === `lineheight-${lineHeight.name}` ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className={`text-base ${lineHeight.class} max-w-2xl`}>
                      Typography is a very important element in design. 
                      Proper line height significantly improves text readability and helps users easily read and understand content. 
                      This example demonstrates the impact of different line height settings on text.
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {lineHeight.usage}
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text Spacing</CardTitle>
              <CardDescription>
                Appropriate spacing settings for paragraphs, lists, and titles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Vertical Spacing</h5>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-medium mb-1">Title Spacing</div>
                      <div className="text-muted-foreground">H1 bottom: space-y-6 (24px)</div>
                      <div className="text-muted-foreground">H2 bottom: space-y-4 (16px)</div>
                      <div className="text-muted-foreground">H3 bottom: space-y-3 (12px)</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Paragraph Spacing</div>
                      <div className="text-muted-foreground">Paragraph spacing: space-y-4 (16px)</div>
                      <div className="text-muted-foreground">List items: space-y-2 (8px)</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">Example</h5>
                  <div className="border rounded-lg p-4 space-y-4">
                    <h3 className="text-xl font-semibold">Section Title</h3>
                    <p className="text-base">
                      This paragraph is positioned with appropriate spacing below the title.
                    </p>
                    <p className="text-base">
                      This paragraph demonstrates improved readability through paragraph spacing.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>List item 1</li>
                      <li>List item 2</li>
                      <li>List item 3</li>
                    </ul>
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
              <CardTitle>Typography Guidelines</CardTitle>
              <CardDescription>
                Best practices for effective typography usage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium text-green-700">Recommendations</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Consistent typography scale usage</li>
                    <li>• Clear visual hierarchy</li>
                    <li>• Sufficient color contrast</li>
                    <li>• Improved readability with proper line height</li>
                    <li>• Consider responsive size adjustments</li>
                    <li>• Adherence to accessibility standards</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium text-red-700">Things to Avoid</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Excessive font size usage</li>
                    <li>• Overuse of font weight</li>
                    <li>• Too narrow line height</li>
                    <li>• Low color contrast</li>
                    <li>• Inconsistent spacing</li>
                    <li>• Too small text on mobile</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Real-world Usage Examples</CardTitle>
              <CardDescription>
                Examples of applying typography in a real UI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-4">Card Component</h5>
                  <div className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="text-muted-foreground">
                      This is a card description text. Use secondary colors to create hierarchy.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Metadata</div>
                      <div className="text-xs text-muted-foreground">Written on: January 15, 2024</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-4">Form Component</h5>
                  <div className="border rounded-lg p-6 space-y-4">
                    <div className="space-y-2">
                      <label className="text-base font-medium">Email Address</label>
                      <div className="text-sm text-muted-foreground">
                        Please enter your email address for login.
                      </div>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border rounded-md text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="text-xs text-red-600">
                      Please enter a valid email address.
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-4">Navigation</h5>
                  <div className="border rounded-lg p-4">
                    <nav className="flex space-x-6">
                      <a href="#" className="text-base font-medium text-primary">Home</a>
                      <a href="#" className="text-base text-muted-foreground hover:text-foreground">Products</a>
                      <a href="#" className="text-base text-muted-foreground hover:text-foreground">About Us</a>
                      <a href="#" className="text-base text-muted-foreground hover:text-foreground">Contact</a>
                    </nav>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Considerations</CardTitle>
              <CardDescription>
                Guidelines to ensure content is readable for all users.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Minimum Requirements</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>Minimum body text 16px (text-base)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>Sufficient color contrast (4.5:1 minimum)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>Minimum touch target 44px</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>200% zoom support</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">Recommendations</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Use line height of 1.5 or more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Ensure sufficient paragraph spacing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Use semantic HTML elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>Do not rely solely on color for information</span>
                    </li>
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