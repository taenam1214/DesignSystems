import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { BookOpen, MessageSquare, Code, ExternalLink, FileText, Video, Users, Github } from 'lucide-react';

export function HelpSection() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Complete guides and API references',
      items: [
        'Getting Started Guide',
        'Component API Reference',
        'Design Token Documentation',
        'Migration Guides'
      ],
      link: '#docs'
    },
    {
      icon: Code,
      title: 'Developer Resources',
      description: 'Tools and resources for developers',
      items: [
        'Code Examples',
        'Figma Plugin',
        'VS Code Extension',
        'Design Tokens Package'
      ],
      link: '#dev'
    },
    {
      icon: Video,
      title: 'Tutorials',
      description: 'Step-by-step video guides',
      items: [
        'Getting Started (5 min)',
        'Building Your First Component',
        'Theming and Customization',
        'Advanced Patterns'
      ],
      link: '#tutorials'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other users and contributors',
      items: [
        'Discord Community',
        'GitHub Discussions',
        'Design System Showcase',
        'Monthly Office Hours'
      ],
      link: '#community'
    }
  ];

  const faq = [
    {
      question: 'How do I customize the theme colors?',
      answer: 'You can customize theme colors by modifying the CSS custom properties in your globals.css file. Update the color values in both light and dark mode sections to match your brand.'
    },
    {
      question: 'Can I use individual components without the full design system?',
      answer: 'Yes! All components are designed to work independently. You can import and use specific components without installing the entire design system.'
    },
    {
      question: 'How do I contribute to the design system?',
      answer: 'We welcome contributions! Check out our contribution guidelines on GitHub, join our Discord community, and feel free to submit issues and pull requests.'
    },
    {
      question: 'Is the design system accessible?',
      answer: 'Accessibility is a core principle of our design system. All components follow WCAG 2.1 AA guidelines and are tested with screen readers and keyboard navigation.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl mb-4">Help & Support</h1>
        <p className="text-xl text-muted-foreground">
          Find answers, get help, and connect with the community. We're here to help you succeed 
          with the DJ Design System.
        </p>
      </div>

      <Alert>
        <MessageSquare className="h-4 w-4" />
        <AlertDescription>
          Need immediate help? Join our Discord community for real-time support from the team and other users.
        </AlertDescription>
      </Alert>

      <section>
        <h2 className="text-2xl mb-6">Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.title} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {resource.items.map((item, index) => (
                    <li key={index} className="text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Explore {resource.title}
                </Button>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <Github className="w-5 h-5" />
              <h4>GitHub Repository</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Source code, issues, and contributions
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View on GitHub
            </Button>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-5 h-5" />
              <h4>Discord Community</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Chat with users and maintainers
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Join Discord
            </Button>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5" />
              <h4>Changelog</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Latest updates and releases
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Changes
            </Button>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <Card key={index} className="p-6">
              <h3 className="mb-3">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Contact Support</h2>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3">For Designers</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Questions about design tokens, patterns, or Figma resources?
              </p>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Design Team
              </Button>
            </div>
            <div>
              <h3 className="mb-3">For Developers</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Technical questions, bugs, or implementation help?
              </p>
              <Button variant="outline">
                <Code className="w-4 h-4 mr-2" />
                Contact Dev Team
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}