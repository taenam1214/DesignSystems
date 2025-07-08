import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Separator } from '../ui/separator';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  Clock, 
  FileText, 
  Monitor, 
  Palette, 
  Code, 
  Eye, 
  Layers,
  ArrowRight,
  ExternalLink,
  Target,
  GitBranch,
  Settings,
  Zap,
  BookOpen,
  Bug
} from 'lucide-react';

export function UiStyleReflectionSection() {
  const projectOverview = {
    duration: '4 weeks',
    teamSize: 'Frontend developer 2, UI designer (QA)',
    components: '46 components',
    qaStart: 'Week 2',
    tools: ['Figma', 'Framelink Figma MCP plugin', 'Cursor AI']
  };

  const phases = [
    {
      phase: 1,
      title: 'Planning and Analysis',
      duration: '1 week',
      tasks: [
        'Analyze and organize Figma design specifications',
        'Identify current status of 46 components',
        'Set up Framelink Figma MCP plugin',
        'Determine work priority',
        'Build development environment'
      ],
      deliverables: ['Development environment setup', 'Work plan'],
      icon: FileText
    },
    {
      phase: 2,
      title: 'Component Style Reflection',
      duration: '2-3 weeks',
      tasks: [
        'Generate code from Figma design using Cursor AI',
        'Apply styles to basic components (8)',
        'Apply styles to form components (13)',
        'Apply styles to navigation components (6)',
        'Apply styles to overlay components (9)',
        'Apply styles to advanced components (4)',
        'Compare and verify results with web browser design'
      ],
      deliverables: ['Updated component library', 'QA checklist'],
      icon: Palette
    },
    {
      phase: 3,
      title: 'Project Reflection and QA',
      duration: '3-4 weeks',
      tasks: [
        'Update internal UI components in the project',
        'Conduct QA with UI designer',
        'Reflect modification requests',
        'Cross-browser testing',
        'Verify responsive design'
      ],
      deliverables: ['Final UI library', 'QA report'],
      icon: Eye
    },
    {
      phase: 4,
      title: 'Completion and Documentation',
      duration: '4 weeks',
      tasks: [
        'Final review and bug fixes',
        'Update component documentation',
        'Write user guide',
        'Deployment and release',
        'Project retrospective'
      ],
      deliverables: ['Completed design system', 'User guide'],
      icon: CheckCircle
    }
  ];

  const componentCategories = [
    { name: 'Basic Components', count: 8, color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'Form Components', count: 13, color: 'bg-green-50 text-green-700 border-green-200' },
    { name: 'Navigation', count: 6, color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Overlay', count: 9, color: 'bg-orange-50 text-orange-700 border-orange-200' },
    { name: 'Data Display', count: 6, color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
    { name: 'Advanced Components', count: 4, color: 'bg-indigo-50 text-indigo-700 border-indigo-200' }
  ];

  const tools = [
    {
      name: 'Figma',
      description: 'Design specification source',
      purpose: 'Check design specifications and extract assets'
    },
    {
      name: 'Framelink Figma MCP plugin',
      description: 'Tool for Figma and Cursor AI integration',
      purpose: 'Convert Figma design to be readable by AI'
    },
    {
      name: 'Cursor AI',
      description: 'Code generation tool based on AI',
      purpose: 'Automatic code generation based on design'
    },
    {
      name: 'Web Browser',
      description: 'Check actual rendering results',
      purpose: 'Compare and verify design with implementation'
    }
  ];

  const qaProcess = [
    {
      week: 'Week 2',
      activity: 'QA process start',
      description: 'Basic component QA start',
      responsible: 'UI designer'
    },
    {
      week: 'Week 3',
      activity: 'Mid-review',
      description: 'Form and navigation component review',
      responsible: 'UI designer + Development team'
    },
    {
      week: 'Week 4',
      activity: 'Final review',
      description: 'Final approval of all components',
      responsible: 'UI designer + Project manager'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl mb-4">UI Style Reflection</h1>
        <p className="text-xl text-muted-foreground">
          Project to reflect 46 UI components based on Figma design specifications
        </p>
      </div>

      {/* Project Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl">Project Overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h4>Project Duration</h4>
            </div>
            <p className="text-2xl font-semibold">{projectOverview.duration}</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-green-600" />
              <h4>Team Composition</h4>
            </div>
            <p className="text-lg">{projectOverview.teamSize}</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-purple-600" />
              <h4>Target Components</h4>
            </div>
            <p className="text-2xl font-semibold">{projectOverview.components}</p>
          </Card>
        </div>
      </section>

      {/* Component Categories */}
      <section className="space-y-6">
        <h2 className="text-2xl">Component Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentCategories.map((category, index) => (
            <Card key={index} className={`p-4 border-2 ${category.color}`}>
              <div className="flex items-center justify-between mb-2">
                <h4>{category.name}</h4>
                <Badge variant="secondary">{category.count} items</Badge>
              </div>
              <p className="text-sm opacity-80">Style reflection target</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Phases */}
      <section className="space-y-6">
        <h2 className="text-2xl">Project Phases</h2>
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <phase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-primary">{phase.duration}</Badge>
                    <h3>Phase {phase.phase}: {phase.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Key Tasks
                      </h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-sm flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 mt-1 text-muted-foreground flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="text-sm flex items-center gap-2">
                            <Target className="w-3 h-3 text-green-600" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools and Technology */}
      <section className="space-y-6">
        <h2 className="text-2xl">Tools and Technology</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{tool.description}</p>
                  <p className="text-sm font-medium">{tool.purpose}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* QA Process */}
      <section className="space-y-6">
        <h2 className="text-2xl">Design QA Process</h2>
        <Card className="p-6">
          <div className="space-y-4">
            {qaProcess.map((qa, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                <Badge variant="outline">{qa.week}</Badge>
                <div className="flex-1">
                  <h4 className="mb-1">{qa.activity}</h4>
                  <p className="text-sm text-muted-foreground">{qa.description}</p>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Responsible:</span> {qa.responsible}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Workflow */}
      <section className="space-y-6">
        <h2 className="text-2xl">Workflow</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Monitor className="w-6 h-6 text-blue-600" />
              <div>
                <h4>1. Figma Design Analysis</h4>
                <p className="text-sm text-muted-foreground">Read design using Framelink Figma MCP plugin</p>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 mx-auto text-muted-foreground" />
            
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Zap className="w-6 h-6 text-green-600" />
              <div>
                <h4>2. Cursor AI Code Generation</h4>
                <p className="text-sm text-muted-foreground">Automatic code generation and style application based on AI</p>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 mx-auto text-muted-foreground" />
            
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
              <div>
                <h4>3. Browser Verification</h4>
                <p className="text-sm text-muted-foreground">Compare actual web browser results with design</p>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 mx-auto text-muted-foreground" />
            
            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
              <Bug className="w-6 h-6 text-orange-600" />
              <div>
                <h4>4. QA and Correction</h4>
                <p className="text-sm text-muted-foreground">UI designer review and feedback reflection</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Reference */}
      <section className="space-y-6">
        <h2 className="text-2xl">References</h2>
        <Alert>
          <BookOpen className="h-4 w-4" />
          <AlertDescription>
            The work process follows the design system construction guide from SK DevOcean's technical blog.
          </AlertDescription>
        </Alert>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="mb-2">SK DevOcean - Design System Construction Guide</h3>
              <p className="text-sm text-muted-foreground">
                Methodology and best practices for building a design system that can be used in practice
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              View Reference Document
            </Button>
          </div>
        </Card>
      </section>

      {/* Success Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl">Success Metrics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="mb-4">Quality Metrics</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">100% Figma design reflection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Cross-browser compatibility ensured</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Responsive design completion</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Accessibility guidelines followed</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="mb-4">Project Metrics</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Project completion within 4 weeks</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Improved team collaboration efficiency</span>
              </li>
              <li className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Increased code reusability</span>
              </li>
              <li className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Improved maintainability</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}