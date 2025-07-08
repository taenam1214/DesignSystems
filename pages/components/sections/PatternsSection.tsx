import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { CheckCircle, AlertCircle, Search, Filter, MoreHorizontal, Plus, Upload, Download, Settings } from 'lucide-react';

export function PatternsSection() {
  const patterns = [
    {
      id: 'forms',
      title: 'Form Pattern',
      description: 'Best practices for creating accessible and user-friendly forms',
      category: 'Input'
    },
    {
      id: 'lists',
      title: 'List & Table',
      description: 'Methods for displaying data collections in a systematic format',
      category: 'Display'
    },
    {
      id: 'loading',
      title: 'Loading State',
      description: 'Methods for conveying progress and system status to users',
      category: 'Feedback'
    },
    {
      id: 'empty',
      title: 'Empty State',
      description: 'Methods for guiding users when there is no content to display',
      category: 'Guidance'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl mb-4">Common Patterns</h1>
        <p className="text-xl text-muted-foreground">
          Proven solutions for repeated design problems. These patterns ensure consistency and 
          improve user experience across various parts of the application.
        </p>
      </div>

      <section>
        <h2 className="text-2xl mb-6">Pattern Library</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {patterns.map((pattern) => (
            <Card key={pattern.id} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-2">{pattern.title}</h3>
                  <p className="text-sm text-muted-foreground">{pattern.description}</p>
                </div>
                <Badge variant="secondary">{pattern.category}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Pattern Examples</h2>
        <Tabs defaultValue="forms" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="lists">Lists</TabsTrigger>
            <TabsTrigger value="loading">Loading</TabsTrigger>
            <TabsTrigger value="empty">Empty States</TabsTrigger>
          </TabsList>

          <TabsContent value="forms" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Form Validation Pattern</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="mb-3 text-sm">✓ Good Example</h4>
                  <div className="space-y-4 p-4 border rounded-lg bg-green-50/50">
                    <div>
                      <Label htmlFor="email-good">Email Address *</Label>
                      <Input 
                        id="email-good" 
                        type="email" 
                        placeholder="Enter your email" 
                        className="border-green-500"
                      />
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <p className="text-sm text-green-600">Valid email format</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="password-good">Password *</Label>
                      <Input 
                        id="password-good" 
                        type="password" 
                        placeholder="Generate a password"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Must be at least 8 characters including numbers and symbols
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-sm">✗ Bad Example</h4>
                  <div className="space-y-4 p-4 border rounded-lg bg-red-50/50">
                    <div>
                      <Label htmlFor="email-bad">Email</Label>
                      <Input 
                        id="email-bad" 
                        type="email" 
                        className="border-red-500"
                      />
                      <div className="flex items-center gap-2 mt-1">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <p className="text-sm text-red-600">Error</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="password-bad">Password</Label>
                      <Input 
                        id="password-bad" 
                        type="password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="lists" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Data List with Actions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="Search users..." />
                    </div>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>사{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">User {i}</p>
                          <p className="text-xs text-muted-foreground">user{i}@example.com</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="loading" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Loading State Pattern</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3">Progress Indicator</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Uploading file...</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm">Processing request...</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3">Skeleton Loading</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="empty" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Empty State Example</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-8 border-2 border-dashed border-muted rounded-lg">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="mb-2">No files uploaded yet</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop files here or click to find them
                  </p>
                  <Button>Select File</Button>
                </div>
                <div className="text-center p-8 border rounded-lg bg-muted/20">
                  <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="mb-2">No projects yet</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    To get started, create your first project
                  </p>
                  <Button>Create Project</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Pattern Guidelines</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="mb-3">When to Use Patterns</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Similar functions across pages</li>
              <li>• Common user workflows</li>
              <li>• Established user expectations</li>
              <li>• Consistent brand experience</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3">Pattern Customization</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Adjust to specific contexts</li>
              <li>• Maintain core functionality</li>
              <li>• Consider accessibility implications</li>
              <li>• Test with actual users</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3">Generating New Patterns</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Document the problem being solved</li>
              <li>• Provide usage guidelines</li>
              <li>• Include code examples</li>
              <li>• Share with the team</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}