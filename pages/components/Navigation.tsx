import { useState } from 'react';
import { ChevronRight, ChevronDown, Palette, Layout, Type, Zap, BookOpen, Grid3X3, HelpCircle, BarChart3, PenTool, Accessibility, FileText, Lightbulb, Code2, Layers, Brush } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['get-started', 'components']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const components = [
    { id: 'accordion', label: 'Accordion' },
    { id: 'alert-dialog', label: 'Alert Dialog' },
    { id: 'alert', label: 'Alert' },
    { id: 'aspect-ratio', label: 'Aspect Ratio' },
    { id: 'avatar', label: 'Avatar' },
    { id: 'badge', label: 'Badge' },
    { id: 'breadcrumb', label: 'Breadcrumb' },
    { id: 'button', label: 'Button' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'card', label: 'Card' },
    { id: 'carousel', label: 'Carousel' },
    { id: 'chart', label: 'Chart' },
    { id: 'checkbox', label: 'Checkbox' },
    { id: 'collapsible', label: 'Collapsible' },
    { id: 'command', label: 'Command' },
    { id: 'context-menu', label: 'Context Menu' },
    { id: 'data-table', label: 'Data Table' },
    { id: 'dialog', label: 'Dialog' },
    { id: 'drawer', label: 'Drawer' },
    { id: 'dropdown-menu', label: 'Dropdown Menu' },
    { id: 'form', label: 'Form' },
    { id: 'hover-card', label: 'Hover Card' },
    { id: 'input', label: 'Input' },
    { id: 'input-otp', label: 'Input OTP' },
    { id: 'label', label: 'Label' },
    { id: 'menubar', label: 'Menubar' },
    { id: 'navigation-menu', label: 'Navigation Menu' },
    { id: 'pagination', label: 'Pagination' },
    { id: 'popover', label: 'Popover' },
    { id: 'progress', label: 'Progress' },
    { id: 'radio-group', label: 'Radio Group' },
    { id: 'resizable', label: 'Resizable' },
    { id: 'scroll-area', label: 'Scroll Area' },
    { id: 'select', label: 'Select' },
    { id: 'separator', label: 'Separator' },
    { id: 'sheet', label: 'Sheet' },
    { id: 'sidebar', label: 'Sidebar' },
    { id: 'skeleton', label: 'Skeleton' },
    { id: 'slider', label: 'Slider' },
    { id: 'switch', label: 'Switch' },
    { id: 'table', label: 'Table' },
    { id: 'tabs', label: 'Tabs' },
    { id: 'textarea', label: 'Textarea' },
    { id: 'sonner', label: 'Toaster' },
    { id: 'toggle', label: 'Toggle' },
    { id: 'toggle-group', label: 'Toggle Group' },
    { id: 'tooltip', label: 'Tooltip' }
  ];

  const sections = [
    {
      id: 'get-started',
      label: 'Get Started',
      icon: Lightbulb,
      items: [
        { id: 'overview', label: 'Overview', icon: Layout },
        { id: 'tokens', label: 'Design Tokens', icon: Palette },
        { id: 'typography', label: 'Typography', icon: Type },
      ]
    },
    {
      id: 'guidelines',
      label: 'Guidelines',
      icon: BookOpen,
      items: [
        { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
        { id: 'content', label: 'Content', icon: FileText },
        { id: 'color', label: 'Color', icon: Palette },
        { id: 'spacing', label: 'Spacing', icon: Grid3X3 },
      ]
    },
    {
      id: 'components',
      label: 'Components',
      icon: Zap,
      items: [
        { id: 'components-overview', label: 'Overview', icon: Layout },
        ...components.map(comp => ({ id: `component-${comp.id}`, label: comp.label, icon: Layers }))
      ]
    },
    {
      id: 'patterns',
      label: 'Patterns',
      icon: Grid3X3,
      items: [
        { id: 'patterns', label: 'Common Patterns', icon: Grid3X3 },
        { id: 'data-viz', label: 'Data Visualization', icon: BarChart3 },
      ]
    },
    {
      id: 'help',
      label: 'Help',
      icon: HelpCircle,
      items: [
        { id: 'help', label: 'Support', icon: HelpCircle },
        { id: 'developer', label: 'Developer Resources', icon: Code2 },
        { id: 'ui-style-reflection', label: 'UI Style Reflection', icon: Brush },
      ]
    }
  ];

  return (
    <nav className="w-64 bg-card border-r border-border h-full overflow-y-auto">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl text-primary">DJ Design System</h1>
        <p className="text-sm text-muted-foreground mt-1">Component Library</p>
      </div>
      
      <div className="p-4">
        {sections.map((section) => {
          const SectionIcon = section.icon;
          const isExpanded = expandedSections.has(section.id);
          
          return (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-accent text-foreground mb-1"
              >
                <SectionIcon className="w-4 h-4" />
                <span className="flex-1 text-sm">{section.label}</span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {isExpanded && (
                <div className="ml-6 space-y-1 max-h-64 overflow-y-auto">
                  {section.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onSectionChange(item.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-sm
                          ${activeSection === item.id 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                          }
                        `}
                      >
                        <ItemIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1 truncate">{item.label}</span>
                        {activeSection === item.id && <ChevronRight className="w-4 h-4" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}