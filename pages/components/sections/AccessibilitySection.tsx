import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Accessibility, 
  Eye, 
  Keyboard, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Monitor,
  Smartphone,
  Volume2,
  Contrast,
  MousePointer,
  Target,
  BookOpen,
  ExternalLink
} from 'lucide-react';

export function AccessibilitySection() {
  const wcagPrinciples = [
    {
      icon: Eye,
      title: 'Perceivable',
      description: 'Information and user interface components must be presented in ways users can perceive.',
      guidelines: [
        'Provide alternative text for non-text content',
        'Ensure sufficient color contrast',
        'Support text resizing',
        'Control for autoplay media'
      ]
    },
    {
      icon: Keyboard,
      title: 'Operable',
      description: 'User interface components and navigation must be operable.',
      guidelines: [
        'All functionality accessible by keyboard',
        'Control for time-limited content',
        'Avoid content that can cause seizures',
        'Help with navigation and finding content'
      ]
    },
    {
      icon: Users,
      title: 'Understandable',
      description: 'Information and the operation of the user interface must be understandable.',
      guidelines: [
        'Make text content easy to read and understand',
        'Make content display and operation predictable',
        'Help prevent and correct user input errors',
        'Use clear and consistent labels'
      ]
    },
    {
      icon: Target,
      title: 'Robust',
      description: 'Content must be robust enough to be interpreted by a wide variety of user agents.',
      guidelines: [
        'Maximize compatibility',
        'Compatibility with assistive technologies',
        'Use standard HTML and ARIA',
        'Consider future technologies'
      ]
    }
  ];

  const colorContrastExamples = [
    { bg: '#ffffff', fg: '#030213', ratio: '15.29:1', level: 'AAA', description: 'Default text - white background' },
    { bg: '#ececf0', fg: '#030213', ratio: '12.85:1', level: 'AAA', description: 'Secondary background text' },
    { bg: '#030213', fg: '#ffffff', ratio: '15.29:1', level: 'AAA', description: 'Dark background text' },
    { bg: '#d4183d', fg: '#ffffff', ratio: '5.72:1', level: 'AA', description: 'Error message' }
  ];

  const keyboardShortcuts = [
    { key: 'Tab', description: 'Move to the next focusable element' },
    { key: 'Shift + Tab', description: 'Move to the previous focusable element' },
    { key: 'Enter', description: 'Activate button or link' },
    { key: 'Space', description: 'Activate button, toggle checkbox' },
    { key: 'Arrow keys', description: 'Navigate radio buttons, menu items' },
    { key: 'Escape', description: 'Close modal or menu' },
    { key: 'Home/End', description: 'Go to the first/last item in a list' },
    { key: 'Page Up/Down', description: 'Page up/down in long lists' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Accessibility className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Accessibility</h1>
            <p className="text-muted-foreground">
              Guidelines for creating inclusive digital experiences for all users.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            WCAG 2.1 AA
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Keyboard className="w-3 h-3" />
            Keyboard Navigation
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Volume2 className="w-3 h-3" />
            Screen Reader Support
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Contrast className="w-3 h-3" />
            Color Contrast
          </Badge>
          <Badge variant="outline">ARIA Labels</Badge>
        </div>
      </div>

      <Tabs defaultValue="principles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* Principles Tab */}
        <TabsContent value="principles" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>WCAG 2.1 Core Principles</CardTitle>
              <CardDescription>
                Four core principles of the Web Content Accessibility Guidelines (WCAG).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {wcagPrinciples.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <Card key={principle.title} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="font-semibold">{principle.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {principle.description}
                          </p>
                          <ul className="text-sm space-y-1">
                            {principle.guidelines.map((guideline, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                                <span className="text-muted-foreground">{guideline}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Accessibility Goals</CardTitle>
              <CardDescription>
                Standards and goals DS Design System strives to achieve for accessibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-medium">WCAG 2.1 AA</h4>
                  <p className="text-sm text-muted-foreground">
                    All components adhere to AA level
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                    <Keyboard className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium">Keyboard Accessibility</h4>
                  <p className="text-sm text-muted-foreground">
                    All interactions are keyboard accessible
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                    <Volume2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium">Screen Reader Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Fully compatible with auxiliary technologies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Guidelines Tab */}
        <TabsContent value="guidelines" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Contrast className="w-5 h-5" />
                Color Contrast
              </CardTitle>
              <CardDescription>
                Sufficient contrast between text and background is essential for readability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {colorContrastExamples.map((example, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div 
                        className="p-4 rounded mb-3"
                        style={{ 
                          backgroundColor: example.bg,
                          color: example.fg
                        }}
                      >
                        <p className="font-medium">Sample Text</p>
                        <p className="text-sm opacity-80">This is a contrast test</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">{example.description}</span>
                          <Badge variant={example.level === 'AAA' ? 'default' : 'secondary'}>
                            {example.level}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Contrast Ratio: {example.ratio}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 mb-2">Contrast Requirements</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• <strong>AA Level:</strong> 4.5:1 for normal text, 3:1 for large text</li>
                    <li>• <strong>AAA Level:</strong> 7:1 for normal text, 4.5:1 for large text</li>
                    <li>• <strong>Non-text elements:</strong> 3:1 (icons, buttons, etc.)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="w-5 h-5" />
                Keyboard Navigation
              </CardTitle>
              <CardDescription>
                All users must be able to navigate the interface using only the keyboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-3 md:grid-cols-2">
                  {keyboardShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">
                        {shortcut.key}
                      </kbd>
                      <span className="text-sm">{shortcut.description}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h5 className="font-medium text-amber-900 mb-2">Keyboard Navigation Principles</h5>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• Logical and predictable tab order</li>
                    <li>• Clear indication of current focus</li>
                    <li>• Implement focus traps in modals and dropdowns</li>
                    <li>• Use skip links to directly navigate to major content</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                Screen Reader Support
              </CardTitle>
              <CardDescription>
                Guidelines for supporting auxiliary technologies for users with visual impairments.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Semantic HTML</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-sm">
                      <code>{`<button type="button">
  Click me
</button>

<nav aria-label="Main Navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>`}</code>
                    </pre>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">ARIA Labels</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-sm">
                      <code>{`<button 
  aria-label="Search"
  aria-describedby="search-help"
>
  <SearchIcon />
</button>

<div id="search-help">
  Enter keywords to search
</div>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-medium text-green-900 mb-2">Best Practices for Screen Readers</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Provide appropriate alt text for all images</li>
                  <li>• Link form fields to clear labels</li>
                  <li>• Link error messages programmatically</li>
                  <li>• Notify real-time updates with aria-live</li>
                  <li>• Use ARIA landmarks in complex UIs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="w-5 h-5" />
                Touch and Mobile
              </CardTitle>
              <CardDescription>
                Considerations for accessibility in mobile devices and touch interfaces.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Touch Target Size</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">44px × 44px</div>
                        <div className="text-xs text-muted-foreground">Recommended minimum size</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">32px × 32px</div>
                        <div className="text-xs text-muted-foreground">Too small</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">Spacing and Layout</h5>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>Sufficient spacing between touch targets (8px or more)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>Thumb easily accessible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>Access important actions without scrolling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>Support for horizontal and vertical orientation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testing Tab */}
        <TabsContent value="testing" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Testing Checklist</CardTitle>
              <CardDescription>
                Items that must be performed for each component and page for accessibility testing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Automated Tests</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="axe" className="rounded" />
                      <label htmlFor="axe" className="text-sm">Automated testing with axe-core</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="lighthouse" className="rounded" />
                      <label htmlFor="lighthouse" className="text-sm">Lighthouse accessibility audit</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="wave" className="rounded" />
                      <label htmlFor="wave" className="text-sm">WAVE web accessibility evaluation</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="color-oracle" className="rounded" />
                      <label htmlFor="color-oracle" className="text-sm">Color Oracle color blindness simulation</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">Manual Tests</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="keyboard" className="rounded" />
                      <label htmlFor="keyboard" className="text-sm">Keyboard-only navigation</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="screen-reader" className="rounded" />
                      <label htmlFor="screen-reader" className="text-sm">Screen reader testing</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="zoom" className="rounded" />
                      <label htmlFor="zoom" className="text-sm">200% zoom test</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="focus" className="rounded" />
                      <label htmlFor="focus" className="text-sm">Focus indicator check</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Testing Tools and Extensions</CardTitle>
              <CardDescription>
                Useful tools and browser extensions for accessibility testing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4">
                  <h5 className="font-medium mb-2">axe DevTools</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Chrome/Firefox extension for real-time accessibility testing
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Install
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">WAVE</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Visually displays accessibility issues on web pages
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Use
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">Colour Contrast Analyser</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tool for measuring and analyzing contrast
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Screen Reader Testing</CardTitle>
              <CardDescription>
                How to test with major screen reader software.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    <h5 className="font-medium">NVDA (Windows)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Free open-source screen reader. Most popular choice on Windows.
                  </p>
                  <div className="text-xs space-y-1">
                    <div><kbd className="bg-muted px-1 rounded">Ctrl + Alt + N</kbd> Start/Stop</div>
                    <div><kbd className="bg-muted px-1 rounded">Insert + Space</kbd> Browser mode</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    <h5 className="font-medium">VoiceOver (macOS/iOS)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built-in screen reader on Apple devices. Provided by default on macOS and iOS.
                  </p>
                  <div className="text-xs space-y-1">
                    <div><kbd className="bg-muted px-1 rounded">Cmd + F5</kbd> Start/Stop</div>
                    <div><kbd className="bg-muted px-1 rounded">Ctrl + Option + Arrow</kbd> Navigation</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    <h5 className="font-medium">TalkBack (Android)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built-in screen reader on Android devices. Developed by Google.
                  </p>
                  <div className="text-xs space-y-1">
                    <div>Settings &gt; Accessibility &gt; TalkBack</div>
                    <div>Swipe for navigation, double tap to select</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Learning Resources
              </CardTitle>
              <CardDescription>
                Recommended resources for learning more about accessibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Official Guidelines</h5>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">WCAG 2.1 Guidelines</div>
                        <div className="text-xs text-muted-foreground">W3C Web Accessibility Guidelines</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">ARIA Writing Examples</div>
                        <div className="text-xs text-muted-foreground">Practical ARIA patterns and examples</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">Web Accessibility Lab</div>
                        <div className="text-xs text-muted-foreground">Korean Web Accessibility Information</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">Practical Guidelines</h5>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">A11y Project</div>
                        <div className="text-xs text-muted-foreground">Checklists and resources for accessibility</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">Inclusive Design Patterns</div>
                        <div className="text-xs text-muted-foreground">Inclusive design patterns and examples</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">MDN Accessibility Guide</div>
                        <div className="text-xs text-muted-foreground">Documentation for developers on accessibility</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regulations and Standards</CardTitle>
              <CardDescription>
                Regulations and standards related to accessibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Korea</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Disability Discrimination Prevention and Remedies Act</li>
                      <li>• National Information Infrastructure Act</li>
                      <li>• Korean Web Content Accessibility Guidelines (K-WCAG)</li>
                      <li>• Web Accessibility Quality Certification</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">International</h5>
                    <ul className="text-sm space-y-1">
                      <li>• WCAG 2.1 (Web Content Accessibility Guidelines)</li>
                      <li>• Section 508 (USA)</li>
                      <li>• EN 301 549 (Europe)</li>
                      <li>• JIS X 8341 (Japan)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-medium text-yellow-900 mb-2">Compliance Level</h5>
                  <div className="text-sm text-yellow-800 space-y-1">
                    <p><strong>Level A:</strong> Minimum accessibility level</p>
                    <p><strong>Level AA:</strong> Standard compliance (recommended)</p>
                    <p><strong>Level AAA:</strong> Highest accessibility level</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community and Support</CardTitle>
              <CardDescription>
                Community for questions or assistance related to accessibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4">
                  <h5 className="font-medium mb-2">Web Accessibility Lab</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Korean web accessibility information and educational materials
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Visit
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">A11y Slack</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Global community of accessibility experts
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Join
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">WebAIM Forum</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Forum for questions and discussions about accessibility
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Browse
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}