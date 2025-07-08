import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Code, Package, Download, ExternalLink, Terminal, FileText, Zap, Copy, Palette } from 'lucide-react';

export function DeveloperSection() {
  const installCommands = {
    npm: 'npm install @dj/design-system',
    yarn: 'yarn add @dj/design-system',
    pnpm: 'pnpm add @dj/design-system'
  };

  const codeExamples = [
    {
      title: 'Basic Button Usage',
      code: `import { Button } from '@dj/design-system'

export function MyComponent() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  )
}`
    },
    {
      title: 'Custom Theme Setup',
      code: `// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      }
    }
  },
  plugins: [require('@dj/design-system/plugin')]
}`
    },
    {
      title: 'Design Token Usage',
      code: `// Using CSS custom properties
.my-component {
  background: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
}

// Using Tailwind classes
<div className="bg-primary p-4 rounded-lg">
  Content here
</div>`
    }
  ];

  const tools = [
    {
      icon: Package,
      name: 'NPM Package',
      description: 'Complete component library with TypeScript support',
      version: 'v2.1.0',
      action: 'Install Package'
    },
    {
      icon: FileText,
      name: 'Figma Plugin',
      description: 'Sync design tokens between Figma and code',
      version: 'v1.3.2',
      action: 'Install Plugin'
    },
    {
      icon: Terminal,
      name: 'CLI Tool',
      description: 'Generate components and manage design tokens',
      version: 'v0.8.1',
      action: 'Install CLI'
    },
    {
      icon: Code,
      name: 'VS Code Extension',
      description: 'Autocomplete and snippets for faster development',
      version: 'v1.1.0',
      action: 'Install Extension'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl mb-4">Developer Resources</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to implement and extend the DJ Design System in your projects.
        </p>
      </div>

      <Alert>
        <Zap className="h-4 w-4" />
        <AlertDescription>
          New to the design system? Start with our Quick Start Guide to get up and running in minutes.
        </AlertDescription>
      </Alert>

      <section>
        <h2 className="text-2xl mb-6">Quick Start</h2>
        <Card className="p-6">
          <h3 className="mb-4">Installation</h3>
          <Tabs defaultValue="npm" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            </TabsList>
            {Object.entries(installCommands).map(([key, command]) => (
              <TabsContent key={key} value={key}>
                <div className="bg-muted p-4 rounded-lg flex items-center justify-between">
                  <code className="text-sm">{command}</code>
                  <Button size="sm" variant="ghost">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-6">
            <h4 className="mb-3">Basic Setup</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm whitespace-pre-line">
{`// Import CSS in your main file
import '@dj/design-system/styles.css'

// Import components
import { Button, Card } from '@dj/design-system'

// Start using components
<Button>Hello World</Button>`}
              </code>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Developer Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.name} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3>{tool.name}</h3>
                      <Badge variant="secondary">{tool.version}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{tool.description}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  {tool.action}
                </Button>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Code Examples</h2>
        <div className="space-y-6">
          {codeExamples.map((example, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3>{example.title}</h3>
                <Button size="sm" variant="ghost">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{example.code}</code>
                </pre>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">API Reference</h2>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3">Component Props</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed documentation for all component properties and their types.
              </p>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                View Props Reference
              </Button>
            </div>
            <div>
              <h3 className="mb-3">Design Tokens</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete list of design tokens and their values in different formats.
              </p>
              <Button variant="outline">
                <Palette className="w-4 h-4 mr-2" />
                View Token Reference
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Migration Guides</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-2">Migrating from v1.x to v2.x</h3>
                <p className="text-sm text-muted-foreground">
                  Breaking changes, new features, and step-by-step migration instructions.
                </p>
              </div>
              <Button variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Guide
              </Button>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-2">Upgrading from Material-UI</h3>
                <p className="text-sm text-muted-foreground">
                  Component mapping and best practices for switching design systems.
                </p>
              </div>
              <Button variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Guide
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Contributing</h2>
        <Card className="p-6">
          <h3 className="mb-4">Help Improve the Design System</h3>
          <p className="text-muted-foreground mb-6">
            We welcome contributions from the community. Whether it&apos;s bug fixes, new components, 
            or documentation improvements, your help makes the design system better for everyone.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline">
              <Code className="w-4 h-4 mr-2" />
              Contribution Guide
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Code of Conduct
            </Button>
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              GitHub Repository
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}