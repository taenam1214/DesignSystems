import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { 
  FileText, 
  MessageSquare, 
  Globe, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Target,
  Heart,
  Smile,
  Clock,
  Edit3,
  Volume2
} from 'lucide-react';

export function ContentSection() {
  const writingPrinciples = [
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Content is written with the user’s goals and needs as the top priority.',
      examples: [
        'Organize information to help users find what they want quickly',
        'Use everyday language instead of technical terms',
        'Consider user context and situation'
      ]
    },
    {
      icon: Target,
      title: 'Clarity',
      description: 'Deliver clear and specific information without ambiguity.',
      examples: [
        'Simple and direct sentence structure',
        'Specify concrete actions and results',
        'Remove unnecessary adjectives'
      ]
    },
    {
      icon: Heart,
      title: 'Empathy and Consideration',
      description: 'Maintain a warm tone that empathizes with user emotions and situations.',
      examples: [
        'Instead of criticism, provide solutions in error situations',
        'Acknowledge user effort and time',
        'Provide helpful advice and encouragement'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Utility',
      description: 'Only include valuable information that is actually helpful.',
      examples: [
        'Step-by-step guides that are executable',
        'Concrete examples and cases',
        'Expected problems and solutions'
      ]
    }
  ];

  const toneGuidelines = [
    {
      title: 'Friendly and Professional',
      description: 'A tone that is approachable but trustworthy.',
      dos: [
        'Instead of "Hello", use "Welcome"',
        'Polite and courteous expressions',
        'Accurate and specific information to show expertise'
      ],
      donts: [
        'Too casual expressions',
        'Unnecessary exclamations or emojis',
        'Stilted language'
      ]
    },
    {
      title: 'Supportive',
      description: 'A tone that helps users achieve success.',
      dos: [
        'Provide step-by-step guidance',
        'Express positivity and encouragement',
        'Suggest alternatives and options'
      ],
      donts: [
        'Imperative language or directive expressions',
        'Critical or negative language',
        'Pointing out problems without solutions'
      ]
    },
    {
      title: 'Concise and Clear',
      description: 'A tone that conveys only the essential information without unnecessary words.',
      dos: [
        'Short and clear sentences',
        'Prioritize core information',
        'Concrete and executable expressions'
      ],
      donts: [
        'Verbose and complex explanations',
        'Vague or abstract expressions',
        'Duplicate content'
      ]
    }
  ];

  const contentTypes = [
    {
      type: 'Button Text',
      guidelines: [
        'Clear and specific action expressions starting with verbs',
        'Write concisely (2-3 words)',
        'Specify the result the user will get'
      ],
      examples: {
        good: ['Save', 'Download', 'Continue', 'Save changes'],
        bad: ['OK', 'Click', 'Submit', 'Complete']
      }
    },
    {
      type: 'Error Message',
      guidelines: [
        'Clearly explain what the problem is',
        'Suggest a solution or next step',
        'Do not criticize the user'
      ],
      examples: {
        good: ['Please enter a valid email format', 'Password must be at least 8 characters'],
        bad: ['Incorrect input', 'Error occurred', 'Failed']
      }
    },
    {
      type: 'Success Message',
      guidelines: [
        'Acknowledge and congratulate the user’s achievement',
        'Suggest an action they can do next',
        'A positive and encouraging tone'
      ],
      examples: {
        good: ['Profile updated successfully', 'File saved safely'],
        bad: ['Completed', 'Success', 'Saved']
      }
    },
    {
      type: 'Empty State',
      guidelines: [
        'Clearly describe the current situation',
        'Suggest the first action',
        'Provide helpful tips or guidelines'
      ],
      examples: {
        good: ['No projects yet. Create your first project!', 'Your inbox is empty'],
        bad: ['No data', 'Empty', 'No results']
      }
    }
  ];

  const inclusiveLanguage = [
    {
      category: 'Gender-Inclusive Language',
      guidelines: [
        'Use expressions that do not assume gender',
        'Language that includes all genders',
        'Exclude gender stereotypes in job titles or roles'
      ],
      examples: {
        inclusive: ['Developer', 'User', 'Customer', 'Team member'],
        avoid: ['Developer/Developer', 'User', 'Customer']
      }
    },
    {
      category: 'Ability-Inclusive Language',
      guidelines: [
        'Avoid negative expressions related to disabilities or abilities',
        'Use people-first language',
        'Consider accessibility naturally'
      ],
      examples: {
        inclusive: ['User with visual impairment', 'User who navigates with keyboard'],
        avoid: ['Normal user', 'General user', 'Person with disability']
      }
    },
    {
      category: 'Cultural Inclusivity',
      guidelines: [
        'Consider various cultural backgrounds',
        'Expressions that do not assume a region or country',
        'Language that is universally understandable'
      ],
      examples: {
        inclusive: ['Today', 'Now', 'Now'],
        avoid: ['This weekend', 'Holiday', 'End of year']
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Content Guidelines</h1>
            <p className="text-muted-foreground">
              Guidelines for writing content to achieve consistent and effective user experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            Tone & Voice
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            Inclusive Language
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            User-Centered
          </Badge>
          <Badge variant="outline">Accessibility</Badge>
          <Badge variant="outline">Consistency</Badge>
        </div>
      </div>

      <Tabs defaultValue="principles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="tone">Tone & Voice</TabsTrigger>
          <TabsTrigger value="types">Content Types</TabsTrigger>
          <TabsTrigger value="inclusive">Inclusive Language</TabsTrigger>
        </TabsList>

        {/* Principles Tab */}
        <TabsContent value="principles" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Content Writing Principles
              </CardTitle>
              <CardDescription>
                Core principles to follow when writing all content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {writingPrinciples.map((principle) => {
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
                          <div className="space-y-1">
                            {principle.examples.map((example, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                                <span className="text-muted-foreground">{example}</span>
                              </div>
                            ))}
                          </div>
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
              <CardTitle>Content Checklists</CardTitle>
              <CardDescription>
                Checklists to verify before publishing content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Clarity Check</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-1" className="rounded" />
                      <label htmlFor="clear-1" className="text-sm">Is the purpose clear?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-2" className="rounded" />
                      <label htmlFor="clear-2" className="text-sm">Is it clear what the user needs to do?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-3" className="rounded" />
                      <label htmlFor="clear-3" className="text-sm">Can it be understood without technical terms?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-4" className="rounded" />
                      <label htmlFor="clear-4" className="text-sm">Are expected results specified?</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">User Experience</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-1" className="rounded" />
                      <label htmlFor="ux-1" className="text-sm">Is it written from the user’s perspective?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-2" className="rounded" />
                      <label htmlFor="ux-2" className="text-sm">Is it helpful and useful?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-3" className="rounded" />
                      <label htmlFor="ux-3" className="text-sm">Is the tone consistent?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-4" className="rounded" />
                      <label htmlFor="ux-4" className="text-sm">Is it inclusive and accessible?</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tone Tab */}
        <TabsContent value="tone" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                Tone & Voice Guidelines
              </CardTitle>
              <CardDescription>
                Tone and voice settings for brand consistency.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {toneGuidelines.map((tone, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">{tone.title}</h3>
                      <p className="text-sm text-muted-foreground">{tone.description}</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <h5 className="font-medium text-green-700 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Recommendations
                        </h5>
                        <ul className="space-y-2 text-sm">
                          {tone.dos.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium text-red-700 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Things to Avoid
                        </h5>
                        <ul className="space-y-2 text-sm">
                          {tone.donts.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < toneGuidelines.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tone Application by Situation</CardTitle>
              <CardDescription>
                How to use appropriate tones in various situations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smile className="w-5 h-5 text-green-600" />
                    <h5 className="font-medium">Success Situation</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <strong>Good Example:</strong><br />
                      "Congratulations! Your account has been successfully created. You can now use all features."
                    </div>
                    <div className="text-muted-foreground">
                      • Acknowledge achievement and congratulate<br />
                      • Guide to the next step<br />
                      • A positive and encouraging tone
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <h5 className="font-medium">Error Situation</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                      <strong>Good Example:</strong><br />
                      "Please check your email format. Correct format: user@example.com"
                    </div>
                    <div className="text-muted-foreground">
                      • Clearly explain the problem<br />
                      • Suggest a solution<br />
                      • A neutral tone without criticism
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h5 className="font-medium">Waiting Situation</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                      <strong>Good Example:</strong><br />
                      "Uploading file. Please wait a moment. (Approximately 30 seconds)"
                    </div>
                    <div className="text-muted-foreground">
                      • Clearly describe the current situation<br />
                      • Guide expected time<br />
                      • A reassuring tone
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Types Tab */}
        <TabsContent value="types" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                Content Type Guidelines
              </CardTitle>
              <CardDescription>
                Guidelines for writing content for various UI elements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {contentTypes.map((type, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold">{type.type}</h3>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium mb-2">Guidelines</h5>
                        <ul className="space-y-1 text-sm">
                          {type.guidelines.map((guideline, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h5 className="font-medium text-green-700">Good Examples</h5>
                          <div className="space-y-1">
                            {type.examples.good.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-green-50 border border-green-200 rounded text-sm">
                                "{example}"
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-red-700">Things to Avoid</h5>
                          <div className="space-y-1">
                            {type.examples.bad.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-red-50 border border-red-200 rounded text-sm">
                                "{example}"
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < contentTypes.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Microcopy Guidelines</CardTitle>
              <CardDescription>
                Guidelines considering the significant impact of small text elements on user experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Form-Related</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-sm">Placeholder</div>
                      <div className="text-xs text-muted-foreground mb-2">Provide examples or help text</div>
                      <div className="text-sm">
                        <span className="text-green-600">Good:</span> "name@company.com"<br />
                        <span className="text-red-600">Bad:</span> "Enter your email"
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Help Text</div>
                      <div className="text-xs text-muted-foreground mb-2">Additional explanation or constraints</div>
                      <div className="text-sm">
                        <span className="text-green-600">Good:</span> "8 characters or more, including numbers"<br />
                        <span className="text-red-600">Bad:</span> "Use a secure password"
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">Navigation</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-sm">Link Text</div>
                      <div className="text-xs text-muted-foreground mb-2">Clearly describe the destination</div>
                      <div className="text-sm">
                        <span className="text-green-600">Good:</span> "Edit Profile"<br />
                        <span className="text-red-600">Bad:</span> "Click here"
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Breadcrumb</div>
                      <div className="text-xs text-muted-foreground mb-2">Clearly show the current location</div>
                      <div className="text-sm">
                        <span className="text-green-600">Good:</span> "Home &gt; Settings &gt; Account"<br />
                        <span className="text-red-600">Bad:</span> "Page 1 &gt; Page 2"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Inclusive Language Tab */}
        <TabsContent value="inclusive" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Inclusive Language Guidelines
              </CardTitle>
              <CardDescription>
                How to use language that welcomes and includes all users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {inclusiveLanguage.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold">{category.category}</h3>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium mb-2">Guidelines</h5>
                        <ul className="space-y-1 text-sm">
                          {category.guidelines.map((guideline, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h5 className="font-medium text-green-700">Inclusive Expressions</h5>
                          <div className="space-y-1">
                            {category.examples.inclusive.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-green-50 border border-green-200 rounded text-sm">
                                {example}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-red-700">Things to Avoid</h5>
                          <div className="space-y-1">
                            {category.examples.avoid.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-red-50 border border-red-200 rounded text-sm">
                                {example}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < inclusiveLanguage.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Considered for Accessibility</CardTitle>
              <CardDescription>
                Guidelines for writing content for users who use screen readers or assistive technologies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Alt Text</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Decorative Images:</strong> Use empty alt attribute<br />
                      <code className="bg-muted px-1 rounded">alt=""</code>
                    </div>
                    <div>
                      <strong>Informational Images:</strong> Provide specific and concise descriptions<br />
                      <code className="bg-muted px-1 rounded">alt="Bar graph showing sales increase"</code>
                    </div>
                    <div>
                      <strong>Complex Images:</strong> Separate summary and detailed description<br />
                      <code className="bg-muted px-1 rounded">alt="Q4 2023 sales status" longdesc="..."</code>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">Link Text</h5>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <strong>Good Example:</strong><br />
                      "User Guide Download (PDF, 2MB)"
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                      <strong>Bad Example:</strong><br />
                      "Click here" or "More"
                    </div>
                    <div className="text-muted-foreground">
                      • Clearly describe the destination or function of the link<br />
                      • Include file format and size information<br />
                      • Text that can be understood without context
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}