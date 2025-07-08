import { ReactNode } from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Copy, ExternalLink } from 'lucide-react';

interface ComponentPageProps {
  name: string;
  description: string;
  category?: string;
  examples: Array<{
    title: string;
    description?: string;
    component: ReactNode;
    code: string;
  }>;
  props?: Array<{
    name: string;
    type: string;
    description: string;
    default?: string;
    required?: boolean;
  }>;
  usage?: {
    import: string;
    basic: string;
  };
}

export function ComponentPage({ 
  name, 
  description, 
  category, 
  examples, 
  props = [], 
  usage 
}: ComponentPageProps) {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl">{name}</h1>
          {category && <Badge variant="secondary">{category}</Badge>}
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {description}
        </p>
      </div>

      <Tabs defaultValue="examples" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          {examples.map((example, index) => (
            <div key={index} className="space-y-4">
              <div>
                <h3 className="mb-2">{example.title}</h3>
                {example.description && (
                  <p className="text-muted-foreground">{example.description}</p>
                )}
              </div>
              
              <Card className="p-6">
                <div className="flex items-center justify-center min-h-[200px] border rounded-lg bg-background/50">
                  {example.component}
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm">Code</h4>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => copyCode(example.code)}
                  >
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

              {index < examples.length - 1 && <Separator />}
            </div>
          ))}
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          {props.length > 0 ? (
            <Card className="p-6">
              <h3 className="mb-6">Props</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Prop</th>
                      <th className="text-left p-2">Type</th>
                      <th className="text-left p-2">Default</th>
                      <th className="text-left p-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.map((prop, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">
                          <code className="bg-muted px-2 py-1 rounded text-xs">
                            {prop.name}
                            {prop.required && <span className="text-destructive">*</span>}
                          </code>
                        </td>
                        <td className="p-2">
                          <code className="text-xs text-muted-foreground">{prop.type}</code>
                        </td>
                        <td className="p-2">
                          {prop.default && (
                            <code className="text-xs text-muted-foreground">{prop.default}</code>
                          )}
                        </td>
                        <td className="p-2 text-muted-foreground">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ) : (
            <Card className="p-6">
              <p className="text-muted-foreground">No props available for this component.</p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          {usage && (
            <>
              <Card className="p-6">
                <h3 className="mb-4">Import</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">{usage.import}</code>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4">Basic Usage</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
                    <code>{usage.basic}</code>
                  </pre>
                </div>
              </Card>
            </>
          )}

          <Card className="p-6">
            <h3 className="mb-4">Best Practices</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Always provide meaningful labels for accessibility</li>
              <li>• Use consistent sizing and spacing</li>
              <li>• Test with keyboard navigation</li>
              <li>• Consider mobile and responsive behavior</li>
            </ul>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4">Accessibility Features</h3>
            <ul className="space-y-2 text-sm">
              <li>• ✅ Keyboard navigation support</li>
              <li>• ✅ Screen reader compatible</li>
              <li>• ✅ Focus management</li>
              <li>• ✅ ARIA labels and descriptions</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Keyboard Interactions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>
                <span className="text-sm text-muted-foreground">Move focus to next element</span>
              </div>
              <div className="flex justify-between items-center">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Shift + Tab</kbd>
                <span className="text-sm text-muted-foreground">Move focus to previous element</span>
              </div>
              <div className="flex justify-between items-center">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>
                <span className="text-sm text-muted-foreground">Activate element</span>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}