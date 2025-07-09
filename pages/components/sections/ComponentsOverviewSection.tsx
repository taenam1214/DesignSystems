import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Component,
  Layers,
  Palette,
  Accessibility,
  Code,
  BookOpen,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Search,
  Grid3X3,
  MousePointer,
  Keyboard,
  Eye,
  Volume2,
  Smartphone,
  Monitor,
  Globe,
  Package,
  Gauge,
  Target,
  Users,
  FileText,
  Layout,
  BarChart3,
  Settings,
  Navigation,
  PanelLeft,
  Bell,
  Calendar,
  Table,
  ToggleLeft,
  RadioIcon,
  Type,
  Image,
  Square,
  Circle,
  Maximize2,
  Menu,
  ChevronDown,
  Plus,
  X,
  AlertTriangle,
  Info,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  Loader,
  RotateCcw,
  Download,
  Upload,
  Play,
  Pause,
  Timer,
  Activity,
  TrendingUp
} from 'lucide-react';

interface ComponentsOverviewSectionProps {
  onSectionChange: (section: string) => void;
}

export function ComponentsOverviewSection({ onSectionChange }: ComponentsOverviewSectionProps) {
  // Function to convert component names to route identifiers
  const getComponentRoute = (componentName: string): string => {
    const routeMap: { [key: string]: string } = {
      // Basic Components
      'Button': 'component-button',
      'Badge': 'component-badge',
      'Avatar': 'component-avatar',
      'Separator': 'component-separator',
      'Skeleton': 'component-skeleton',
      'Aspect Ratio': 'component-aspect-ratio',
      'Card': 'component-card',
      'Alert': 'component-alert',
      
      // Form Components
      'Input': 'component-input',
      'Textarea': 'component-textarea',
      'Select': 'component-select',
      'Checkbox': 'component-checkbox',
      'Radio Group': 'component-radio-group',
      'Switch': 'component-switch',
      'Slider': 'component-slider',
      'Label': 'component-label',
      'Form': 'component-form',
      'Input OTP': 'component-input-otp',
      'Toggle': 'component-toggle',
      'Toggle Group': 'component-toggle-group',
      'Calendar': 'component-calendar',
      
      // Navigation Components
      'Breadcrumb': 'component-breadcrumb',
      'Pagination': 'component-pagination',
      'Tabs': 'component-tabs',
      'Navigation Menu': 'component-navigation-menu',
      'Menubar': 'component-menubar',
      'Sidebar': 'component-sidebar',
      
      // Overlay Components
      'Dialog': 'component-dialog',
      'Alert Dialog': 'component-alert-dialog',
      'Sheet': 'component-sheet',
      'Popover': 'component-popover',
      'Tooltip': 'component-tooltip',
      'Hover Card': 'component-hover-card',
      'Context Menu': 'component-context-menu',
      'Dropdown Menu': 'component-dropdown-menu',
      'Drawer': 'component-drawer',
      
      // Data Display Components
      'Table': 'component-table',
      'Chart': 'component-chart',
      'Progress': 'component-progress',
      'Accordion': 'component-accordion',
      'Collapsible': 'component-collapsible',
      'Scroll Area': 'component-scroll-area',
      
      // Advanced Components
      'Command': 'component-command',
      'Carousel': 'component-carousel',
      'Resizable': 'component-resizable',
      'Toaster': 'component-sonner', // Updated to match the actual Toaster component route
    };
    
    return routeMap[componentName] || 'components-overview';
  };

  const handleComponentNavigation = (componentName: string) => {
    const route = getComponentRoute(componentName);
    onSectionChange(route);
  };

  const stats = [
    { label: 'Total Components', value: '46', icon: Component, color: 'text-blue-600' },
    { label: 'Categories', value: '6', icon: Grid3X3, color: 'text-green-600' },
    { label: 'Documentation Complete', value: '100%', icon: BookOpen, color: 'text-purple-600' },
    { label: 'Accessibility', value: 'WCAG 2.1', icon: Accessibility, color: 'text-orange-600' }
  ];

  const componentCategories = [
    {
      category: 'Basic Components',
      description: 'Essential UI elements',
      count: 8,
      icon: Component,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      components: [
        { name: 'Button', description: 'Clickable button', status: 'complete' },
        { name: 'Badge', description: 'Status or category indicator', status: 'complete' },
        { name: 'Avatar', description: 'User profile image', status: 'complete' },
        { name: 'Separator', description: 'Content divider', status: 'complete' },
        { name: 'Skeleton', description: 'Loading placeholder', status: 'complete' },
        { name: 'Aspect Ratio', description: 'Aspect ratio container', status: 'complete' },
        { name: 'Card', description: 'Content card', status: 'complete' },
        { name: 'Alert', description: 'Alert message', status: 'complete' }
      ]
    },
    {
      category: 'Form Components',
      description: 'Form elements for user input',
      count: 13,
      icon: FileText,
      color: 'bg-green-50 text-green-700 border-green-200',
      components: [
        { name: 'Input', description: 'Text input field', status: 'complete' },
        { name: 'Textarea', description: 'Multi-line text input', status: 'complete' },
        { name: 'Select', description: 'Dropdown select', status: 'complete' },
        { name: 'Checkbox', description: 'Checkbox selection', status: 'complete' },
        { name: 'Radio Group', description: 'Radio button group', status: 'complete' },
        { name: 'Switch', description: 'Toggle switch', status: 'complete' },
        { name: 'Slider', description: 'Range slider', status: 'complete' },
        { name: 'Label', description: 'Form field label', status: 'complete' },
        { name: 'Form', description: 'Form structure and validation', status: 'complete' },
        { name: 'Input OTP', description: 'One-time password input', status: 'complete' },
        { name: 'Toggle', description: 'Single toggle button', status: 'complete' },
        { name: 'Toggle Group', description: 'Toggle button group', status: 'complete' },
        { name: 'Calendar', description: 'Date picker calendar', status: 'complete' }
      ]
    },
    {
      category: 'Navigation',
      description: 'Page and content navigation',
      count: 6,
      icon: Navigation,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      components: [
        { name: 'Breadcrumb', description: 'Page path indicator', status: 'complete' },
        { name: 'Pagination', description: 'Page navigation', status: 'complete' },
        { name: 'Tabs', description: 'Tab navigation', status: 'complete' },
        { name: 'Navigation Menu', description: 'Navigation menu', status: 'complete' },
        { name: 'Menubar', description: 'Menu bar', status: 'complete' },
        { name: 'Sidebar', description: 'Sidebar layout', status: 'complete' }
      ]
    },
    {
      category: 'Overlay',
      description: 'Modals, popovers, dropdowns',
      count: 9,
      icon: Layers,
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      components: [
        { name: 'Dialog', description: 'Modal dialog', status: 'complete' },
        { name: 'Alert Dialog', description: 'Confirm/cancel dialog', status: 'complete' },
        { name: 'Sheet', description: 'Slide panel', status: 'complete' },
        { name: 'Popover', description: 'Contextual popover', status: 'complete' },
        { name: 'Tooltip', description: 'Tooltip help', status: 'complete' },
        { name: 'Hover Card', description: 'Hover card', status: 'complete' },
        { name: 'Context Menu', description: 'Right-click menu', status: 'complete' },
        { name: 'Dropdown Menu', description: 'Dropdown menu', status: 'complete' },
        { name: 'Drawer', description: 'Drawer panel', status: 'complete' }
      ]
    },
    {
      category: 'Data Display',
      description: 'Data visualization and display',
      count: 6,
      icon: BarChart3,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      components: [
        { name: 'Table', description: 'Data table', status: 'complete' },
        { name: 'Chart', description: 'Charts and graphs', status: 'complete' },
        { name: 'Progress', description: 'Progress indicator', status: 'complete' },
        { name: 'Accordion', description: 'Collapsible content', status: 'complete' },
        { name: 'Collapsible', description: 'Expand/collapse', status: 'complete' },
        { name: 'Scroll Area', description: 'Scroll area', status: 'complete' }
      ]
    },
    {
      category: 'Advanced Components',
      description: 'Components with complex functionality',
      count: 4,
      icon: Settings,
      color: 'bg-pink-50 text-pink-700 border-pink-200',
      components: [
        { name: 'Command', description: 'Command palette', status: 'complete' },
        { name: 'Carousel', description: 'Image carousel', status: 'complete' },
        { name: 'Resizable', description: 'Resizable panel', status: 'complete' },
        { name: 'Toaster', description: 'Toast notification', status: 'complete' }
      ]
    }
  ];

  const designPrinciples = [
    {
      title: 'shadcn/ui based',
      description: 'A stable system based on proven shadcn/ui components',
      icon: Shield,
      benefits: ['Radix UI primitives', 'Full TypeScript support', 'Easy customization']
    },
    {
      title: 'Tailwind v4 & OKLCH',
      description: 'Modern styling using modern CSS techniques and color science',
      icon: Palette,
      benefits: ['OKLCH color space', 'Consistent visual representation', 'Accessibility optimized']
    },
    {
      title: 'Complete Accessibility',
      description: 'Inclusive design following WCAG 2.1 guidelines',
      icon: Accessibility,
      benefits: ['Keyboard navigation', 'Screen reader support', 'Complete ARIA attributes']
    },
    {
      title: 'Developer Experience',
      description: 'Improved productivity with intuitive APIs and comprehensive documentation',
      icon: Code,
      benefits: ['TypeScript support', 'Practical examples', 'Copyable code']
    }
  ];

  const keyFeatures = [
    {
      title: 'Dual Language Support',
      description: 'Fully documented in Korean and English',
      icon: Globe,
      stats: '100% Korean translation'
    },
    {
      title: 'Practical Examples',
      description: 'Provides actual usage examples for each component',
      icon: Target,
      stats: '200+ example codes'
    },
    {
      title: 'Responsive Design',
      description: 'Perfect behavior on all devices',
      icon: Smartphone,
      stats: 'Optimized for desktop/mobile'
    },
    {
      title: 'Performance Optimization',
      description: 'Fast loading and smooth animations',
      icon: Zap,
      stats: 'Optimized bundle size'
    }
  ];

  const usageGuide = [
    {
      step: 1,
      title: 'Select Component',
      description: 'Select the component you need from the categorized components.',
      icon: Search
    },
    {
      step: 2,
      title: 'Check Documentation',
      description: 'Check the detailed documentation and examples of each component.',
      icon: BookOpen
    },
    {
      step: 3,
      title: 'Copy Code',
      description: 'Copy the example code and apply it directly to your project.',
      icon: Code
    },
    {
      step: 4,
      title: 'Customization',
      description: 'Adjust the style to match your project requirements.',
      icon: Palette
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-4">
            <Component className="w-3 h-3 mr-1" />
            46 components fully documented
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Component Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A 46 fully documented React components built on shadcn/ui. 
            Utilizing Tailwind v4 and the OKLCH color space for modern and accessible UI.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2" onClick={() => onSectionChange('components')}>
            <Grid3X3 className="w-4 h-4" />
            View All Components
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Usage Guide
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Component Categories */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Component Categories</h2>
          <p className="text-muted-foreground">
            Organized into 6 categories for 46 UI components
          </p>
        </div>
        
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="form">Form</TabsTrigger>
            <TabsTrigger value="nav">Navigation</TabsTrigger>
            <TabsTrigger value="overlay">Overlay</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <category.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="secondary">{category.count} items</Badge>
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.components.slice(0, 4).map((component, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span>{component.name}</span>
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                      ))}
                      {category.components.length > 4 && (
                        <div className="text-xs text-muted-foreground pt-1">
                          +{category.components.length - 4} more
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {componentCategories.map((category, categoryIndex) => (
            <TabsContent 
              key={categoryIndex}
              value={category.category === 'Basic Components' ? 'basic' : 
                     category.category === 'Form Components' ? 'form' :
                     category.category === 'Navigation' ? 'nav' :
                     category.category === 'Overlay' ? 'overlay' :
                     category.category === 'Data Display' ? 'data' :
                     category.category === 'Advanced Components' ? 'advanced' : ''}
              className="space-y-4"
            >
              <Card className={`border-l-4 ${category.color.includes('blue') ? 'border-l-blue-500' :
                                              category.color.includes('green') ? 'border-l-green-500' :
                                              category.color.includes('purple') ? 'border-l-purple-500' :
                                              category.color.includes('orange') ? 'border-l-orange-500' :
                                              category.color.includes('cyan') ? 'border-l-cyan-500' :
                                              category.color.includes('pink') ? 'border-l-pink-500' : 'border-l-gray-500'}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="w-6 h-6" />
                    <div>
                      <CardTitle>{category.category}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.components.map((component, i) => (
                      <Card key={i} className="hover:shadow-sm transition-shadow">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium">{component.name}</h4>
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full p-0 h-auto text-primary hover:text-primary/80"
                            onClick={() => handleComponentNavigation(component.name)}
                          >
                            View Documentation →
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Design Principles */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Design Principles</h2>
          <p className="text-muted-foreground">
            Core design principles followed by all components
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((principle, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <principle.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <CardTitle className="text-lg">{principle.title}</CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {principle.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="text-muted-foreground">
            Special features for developers and users
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                <Badge variant="secondary" className="text-xs">{feature.stats}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Usage Guide */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Usage Guide</h2>
          <p className="text-muted-foreground">
            Four-step process for effectively utilizing components
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usageGuide.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader className="text-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <step.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              {index < usageGuide.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-muted-foreground" />
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Accessibility Highlight */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Accessibility className="w-6 h-6" />
            Accessibility Priority Design
          </h2>
          <p className="text-muted-foreground">
            All components adhere to WCAG 2.1 guidelines
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <Keyboard className="w-8 h-8 mx-auto text-blue-600" />
            <h4 className="font-semibold">Keyboard Navigation</h4>
            <p className="text-sm text-muted-foreground">All interactions are possible via keyboard</p>
          </div>
          <div className="text-center space-y-3">
            <Volume2 className="w-8 h-8 mx-auto text-green-600" />
            <h4 className="font-semibold">Screen Reader</h4>
            <p className="text-sm text-muted-foreground">ARIA attributes and semantic HTML</p>
          </div>
          <div className="text-center space-y-3">
            <Eye className="w-8 h-8 mx-auto text-purple-600" />
            <h4 className="font-semibold">Visual Accessibility</h4>
            <p className="text-sm text-muted-foreground">High contrast and color blindness support</p>
          </div>
          <div className="text-center space-y-3">
            <MousePointer className="w-8 h-8 mx-auto text-orange-600" />
            <h4 className="font-semibold">Motor Accessibility</h4>
            <p className="text-sm text-muted-foreground">Sufficient clickable areas</p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="border-t pt-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Quick Access</h2>
          <p className="text-muted-foreground">Frequently used components</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Button', icon: MousePointer, category: 'Basic', usage: 'Most commonly used' },
            { name: 'Input', icon: Type, category: 'Form', usage: 'Text input' },
            { name: 'Dialog', icon: Square, category: 'Overlay', usage: 'Modal window' },
            { name: 'Table', icon: Grid3X3, category: 'Data', usage: 'Data display' }
          ].map((component, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleComponentNavigation(component.name)}
            >
              <CardContent className="pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <component.icon className="w-5 h-5 text-primary" />
                  <h4 className="font-medium">{component.name}</h4>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">{component.category}</Badge>
                  <span className="text-xs text-muted-foreground">{component.usage}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}