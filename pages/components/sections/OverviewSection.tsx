import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  Palette,
  Layout,
  Accessibility,
  Zap,
  Globe,
  Code,
  Sparkles,
  Component,
  BookOpen,
  Users,
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Coffee,
  Lightbulb,
  Target,
  Shield,
  Layers,
  PenTool,
  Gauge,
  Package,
  FileText,
  Settings,
  HelpCircle,
  BarChart3,
  Brush,
  Type,
  Grid3X3,
  Eye,
  MousePointer,
  Keyboard,
  Volume2
} from 'lucide-react';

export function OverviewSection() {
  const stats = [
    { label: 'Total Components', value: '46', icon: Component, color: 'text-blue-600' },
    { label: 'Guideline Sections', value: '4', icon: BookOpen, color: 'text-green-600' },
    { label: 'Language Support', value: 'KR/EN', icon: Globe, color: 'text-purple-600' },
    { label: 'Accessibility Level', value: 'WCAG 2.1', icon: Accessibility, color: 'text-orange-600' }
  ];

  const features = [
    {
      title: 'Comprehensive Component Library',
      description: 'Covers all use cases with 46 fully documented UI components.',
      icon: Component,
      highlights: ['Base components like Button, Card, Dialog', 'Complex components like Calendar, Chart, Table', 'Pattern components like Form, Navigation']
    },
    {
      title: 'Bilingual Support',
      description: 'Fully documented in both Korean and English for global teams.',
      icon: Globe,
      highlights: ['Complete Korean translation', 'Original English maintained', 'Cultural context considered']
    },
    {
      title: 'Tailwind v4 & OKLCH',
      description: 'Modern styling system using the latest CSS technology and color science.',
      icon: Palette,
      highlights: ['Tailwind CSS v4 beta', 'OKLCH color space', 'Consistent visual expression']
    },
    {
      title: 'Full Accessibility',
      description: 'Components accessible to all users, compliant with WCAG 2.1 guidelines.',
      icon: Accessibility,
      highlights: ['Keyboard navigation', 'Screen reader support', 'Complete ARIA attributes']
    },
    {
      title: 'Based on shadcn/ui',
      description: 'Stable and extensible system based on proven shadcn/ui components.',
      icon: Layers,
      highlights: ['Radix UI primitives', 'Full TypeScript support', 'Customizable']
    },
    {
      title: 'Practical Examples',
      description: 'Real-world use cases and best practices for each component.',
      icon: Target,
      highlights: ['Real usage scenarios', 'Code examples', 'UX guidelines']
    }
  ];

  const componentCategories = [
    {
      category: 'Base Components',
      count: 8,
      examples: ['Button', 'Card', 'Badge', 'Avatar', 'Separator'],
      icon: Component
    },
    {
      category: 'Form Components',
      count: 13,
      examples: ['Input', 'Select', 'Checkbox', 'Switch', 'Slider'],
      icon: FileText
    },
    {
      category: 'Navigation',
      count: 6,
      examples: ['Sidebar', 'Breadcrumb', 'Pagination', 'MenuBar', 'Navigation Menu'],
      icon: Layout
    },
    {
      category: 'Overlay',
      count: 9,
      examples: ['Dialog', 'Sheet', 'Popover', 'Tooltip', 'Alert Dialog'],
      icon: Layers
    },
    {
      category: 'Data Display',
      count: 6,
      examples: ['Table', 'Chart', 'Progress', 'Skeleton', 'Accordion'],
      icon: BarChart3
    },
    {
      category: 'Advanced Components',
      count: 4,
      examples: ['Command', 'Resizable', 'Carousel', 'Toaster'],
      icon: Settings
    }
  ];

  const designPrinciples = [
    {
      title: 'Consistency',
      description: 'Maintain a consistent design language and interaction patterns across all components.',
      icon: CheckCircle
    },
    {
      title: 'Accessibility First',
      description: 'Inclusive design for all users.',
      icon: Accessibility
    },
    {
      title: 'Developer Experience',
      description: 'Boost developer productivity with intuitive APIs and comprehensive documentation.',
      icon: Code
    },
    {
      title: 'Scalability',
      description: 'Easily customizable and extendable to fit project requirements.',
      icon: Zap
    }
  ];

  const gettingStartedSteps = [
    {
      step: 1,
      title: 'Explore Components',
      description: 'Select the desired component from the sidebar to view documentation and examples.',
      action: 'View Components'
    },
    {
      step: 2,
      title: 'Learn Guidelines',
      description: 'Study design guidelines such as color, typography, and spacing.',
      action: 'View Guidelines'
    },
    {
      step: 3,
      title: 'Copy & Use Code',
      description: 'Copy example code and apply it directly to your project.',
      action: 'Get Started'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            v1.0.0 - Full Korean Support
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            DJ Design System
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern, accessible UI component library. Provides a consistent and beautiful user experience using Tailwind v4 and the OKLCH color space.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Component className="w-4 h-4" />
            Browse Components
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Read Guidelines
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

      {/* Key Features */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="text-muted-foreground">
            A comprehensive design system for modern web development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <feature.icon className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Component Categories */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Component Categories</h2>
          <p className="text-muted-foreground">
            Organized into 46 UI components.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <category.icon className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">{category.count} items</Badge>
                </div>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {category.examples.map((example, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Design Principles */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Design Principles</h2>
          <p className="text-muted-foreground">
            Core principles that form the foundation of all component designs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((principle, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <principle.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Technology Stack</h2>
          <p className="text-muted-foreground">
            Modern development environment leveraging the latest technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <Code className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold mb-1">React 18</h4>
              <p className="text-sm text-muted-foreground">Utilizes modern React features.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Brush className="w-8 h-8 mx-auto mb-3 text-cyan-600" />
              <h4 className="font-semibold mb-1">Tailwind v4</h4>
              <p className="text-sm text-muted-foreground">Next-generation utility CSS.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Palette className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h4 className="font-semibold mb-1">OKLCH Color Space</h4>
              <p className="text-sm text-muted-foreground">Perceptual uniformity.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Package className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h4 className="font-semibold mb-1">shadcn/ui</h4>
              <p className="text-sm text-muted-foreground">Verified components.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Getting Started</h2>
          <p className="text-muted-foreground">
            Experience the design system in three simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {gettingStartedSteps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full gap-2">
                  {step.action}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Accessibility Highlights */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Accessibility className="w-6 h-6" />
            Accessibility First Design
          </h2>
          <p className="text-muted-foreground">
            Inclusive design for all users.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center space-y-2">
            <Keyboard className="w-8 h-8 mx-auto text-blue-600" />
            <h4 className="font-semibold">Keyboard Navigation</h4>
            <p className="text-sm text-muted-foreground">Complete keyboard support.</p>
          </div>
          <div className="text-center space-y-2">
            <Volume2 className="w-8 h-8 mx-auto text-green-600" />
            <h4 className="font-semibold">Screen Reader</h4>
            <p className="text-sm text-muted-foreground">Complete ARIA attributes.</p>
          </div>
          <div className="text-center space-y-2">
            <Eye className="w-8 h-8 mx-auto text-purple-600" />
            <h4 className="font-semibold">Visual Accessibility</h4>
            <p className="text-sm text-muted-foreground">High contrast and color blindness support.</p>
          </div>
          <div className="text-center space-y-2">
            <MousePointer className="w-8 h-8 mx-auto text-orange-600" />
            <h4 className="font-semibold">Motor Accessibility</h4>
            <p className="text-sm text-muted-foreground">Sufficient clickable areas.</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <Component className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Explore 46 fully documented UI components.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                View Components →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Check design guidelines such as color, typography, and spacing.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                View Guidelines →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <Accessibility className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Learn about accessibility information compliant with WCAG 2.1 guidelines.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                View Accessibility →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              <CardTitle className="text-lg">Help</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Find frequently asked questions and solutions.
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                View Help →
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}