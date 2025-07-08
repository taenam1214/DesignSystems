import { AppProps } from 'next/app'
import '../styles/index.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config';
import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { OverviewSection } from './components/sections/OverviewSection';
import { TokensSection } from './components/sections/TokensSection';
import { TypographySection } from './components/sections/TypographySection';
import { ComponentsSection } from './components/sections/ComponentsSection';
import { ComponentsOverviewSection } from './components/sections/ComponentsOverviewSection';
import { AccessibilitySection } from './components/sections/AccessibilitySection';
import { ContentSection } from './components/sections/ContentSection';
import { PatternsSection } from './components/sections/PatternsSection';
import { DataVisualizationSection } from './components/sections/DataVisualizationSection';
import { HelpSection } from './components/sections/HelpSection';
import { DeveloperSection } from './components/sections/DeveloperSection';
import { ButtonComponentPage } from './components/sections/ButtonComponentPage';
import { CardComponentPage } from './components/sections/CardComponentPage';
import { CalendarComponentPage } from './components/sections/CalendarComponentPage';
import { BreadcrumbComponentPage } from './components/sections/BreadcrumbComponentPage';
import { DialogComponentPage } from './components/sections/DialogComponentPage';
import { InputComponentPage } from './components/sections/InputComponentPage';
import { BadgeComponentPage } from './components/sections/BadgeComponentPage';
import { CheckboxComponentPage } from './components/sections/CheckboxComponentPage';
import { SelectComponentPage } from './components/sections/SelectComponentPage';
import { TabsComponentPage } from './components/sections/TabsComponentPage';
import { ChartComponentPage } from './components/sections/ChartComponentPage';
import { TooltipComponentPage } from './components/sections/TooltipComponentPage';
import { DataTableComponentPage } from './components/sections/DataTableComponentPage';
import { ToggleComponentPage } from './components/sections/ToggleComponentPage';
import { ToggleGroupComponentPage } from './components/sections/ToggleGroupComponentPage';
import { SeparatorComponentPage } from './components/sections/SeparatorComponentPage';
import { PaginationComponentPage } from './components/sections/PaginationComponentPage';
import { AccordionComponentPage } from './components/sections/AccordionComponentPage';
import { AvatarComponentPage } from './components/sections/AvatarComponentPage';
import { MenubarComponentPage } from './components/sections/MenubarComponentPage';
import { ScrollAreaComponentPage } from './components/sections/ScrollAreaComponentPage';
import { RadioGroupComponentPage } from './components/sections/RadioGroupComponentPage';
import { LabelComponentPage } from './components/sections/LabelComponentPage';
import { SwitchComponentPage } from './components/sections/SwitchComponentPage';
import { SliderComponentPage } from './components/sections/SliderComponentPage';
import { TextareaComponentPage } from './components/sections/TextareaComponentPage';
import { PopoverComponentPage } from './components/sections/PopoverComponentPage';
import { SheetComponentPage } from './components/sections/SheetComponentPage';
import { ProgressComponentPage } from './components/sections/ProgressComponentPage';
import { NavigationMenuComponentPage } from './components/sections/NavigationMenuComponentPage';
import { AlertComponentPage } from './components/sections/AlertComponentPage';
import { AspectRatioComponentPage } from './components/sections/AspectRatioComponentPage';
import { CarouselComponentPage } from './components/sections/CarouselComponentPage';
import { CollapsibleComponentPage } from './components/sections/CollapsibleComponentPage';
import { CommandComponentPage } from './components/sections/CommandComponentPage';
import { TableComponentPage } from './components/sections/TableComponentPage';
import { AlertDialogComponentPage } from './components/sections/AlertDialogComponentPage';
import { ContextMenuComponentPage } from './components/sections/ContextMenuComponentPage';
import { DrawerComponentPage } from './components/sections/DrawerComponentPage';
import { DropdownMenuComponentPage } from './components/sections/DropdownMenuComponentPage';
import { FormComponentPage } from './components/sections/FormComponentPage';
import { HoverCardComponentPage } from './components/sections/HoverCardComponentPage';
import { InputOtpComponentPage } from './components/sections/InputOtpComponentPage';
import { SkeletonComponentPage } from './components/sections/SkeletonComponentPage';
import { ResizableComponentPage } from './components/sections/ResizableComponentPage';
import { SidebarComponentPage } from './components/sections/SidebarComponentPage';
import { SonnerComponentPage } from './components/sections/SonnerComponentPage';
import { ColorSection } from './components/sections/ColorSection';
import { SpacingSection } from './components/sections/SpacingSection';
import { UiStyleReflectionSection } from './components/sections/UiStyleReflectionSection';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { Menu } from 'lucide-react';

//export default function App() {
export default function MyApp({ Component, pageProps }: AppProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'tokens':
        return <TokensSection />;
      case 'typography':
        return <TypographySection />;
      case 'accessibility':
        return <AccessibilitySection />;
      case 'content':
        return <ContentSection />;
      case 'color':
        return <ColorSection />;
      case 'spacing':
        return <SpacingSection />;
      case 'components':
        return <ComponentsSection />;
      case 'components-overview':
        return <ComponentsOverviewSection onSectionChange={handleSectionChange} />;
      case 'form-components':
        return <ComponentsSection />; // Could filter to show only form components
      case 'patterns':
        return <PatternsSection />;
      case 'data-viz':
        return <DataVisualizationSection />;
      case 'help':
        return <HelpSection />;
      case 'developer':
        return <DeveloperSection />;
      
      // Individual Component Pages
      case 'component-button':
        return <ButtonComponentPage />;
      case 'component-card':
        return <CardComponentPage />;
      case 'component-calendar':
        return <CalendarComponentPage />;
      case 'component-breadcrumb':
        return <BreadcrumbComponentPage />;
      case 'component-dialog':
        return <DialogComponentPage />;
      case 'component-input':
        return <InputComponentPage />;
      case 'component-badge':
        return <BadgeComponentPage />;
      case 'component-checkbox':
        return <CheckboxComponentPage />;
      case 'component-select':
        return <SelectComponentPage />;
      case 'component-tabs':
        return <TabsComponentPage />;
      case 'component-chart':
        return <ChartComponentPage />;
      case 'component-tooltip':
        return <TooltipComponentPage />;
      case 'component-data-table':
        return <DataTableComponentPage />;
      case 'component-toggle':
        return <ToggleComponentPage />;
      case 'component-toggle-group':
        return <ToggleGroupComponentPage />;
      case 'component-separator':
        return <SeparatorComponentPage />;
      case 'component-pagination':
        return <PaginationComponentPage />;
      
      case 'component-accordion':
        return <AccordionComponentPage />;
      
      case 'component-avatar':
        return <AvatarComponentPage />;
      
      case 'component-menubar':
        return <MenubarComponentPage />;
      
      case 'component-scroll-area':
        return <ScrollAreaComponentPage />;
      
      case 'component-radio-group':
        return <RadioGroupComponentPage />;
      
      case 'component-label':
        return <LabelComponentPage />;
      
      case 'component-switch':
        return <SwitchComponentPage />;
      
      case 'component-slider':
        return <SliderComponentPage />;
      
      case 'component-textarea':
        return <TextareaComponentPage />;
      
      case 'component-popover':
        return <PopoverComponentPage />;
      
      case 'component-sheet':
        return <SheetComponentPage />;
      
      case 'component-progress':
        return <ProgressComponentPage />;
      
      case 'component-navigation-menu':
        return <NavigationMenuComponentPage />;
      
      case 'component-alert':
        return <AlertComponentPage />;
      
      case 'component-aspect-ratio':
        return <AspectRatioComponentPage />;
      
      case 'component-carousel':
        return <CarouselComponentPage />;
      
      case 'component-collapsible':
        return <CollapsibleComponentPage />;
      
      case 'component-command':
        return <CommandComponentPage />;
      
      case 'component-table':
        return <TableComponentPage />;
      
      case 'component-alert-dialog':
        return <AlertDialogComponentPage />;
      
      case 'component-context-menu':
        return <ContextMenuComponentPage />;
      
      case 'component-drawer':
        return <DrawerComponentPage />;

      case 'component-dropdown-menu':
        return <DropdownMenuComponentPage />;

      case 'component-form':
        return <FormComponentPage />;

      case 'component-hover-card':
        return <HoverCardComponentPage />;

      case 'component-input-otp':
        return <InputOtpComponentPage />;

      case 'component-skeleton':
        return <SkeletonComponentPage />;

      case 'component-resizable':
        return <ResizableComponentPage />;

      case 'component-sidebar':
        return <SidebarComponentPage />;

      case 'component-sonner':
        return <SonnerComponentPage />;

      case 'ui-style-reflection':
        return <UiStyleReflectionSection />;

      // Generic component fallback for components without dedicated pages
      
      default:
        return <OverviewSection />;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setMobileNavOpen(false);
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-background/80" onClick={() => setMobileNavOpen(false)} />
          <div className="fixed left-0 top-0 h-full">
            <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-lg">DJ 디자인 시스템</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8">
            {renderSection()}
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
}

// Generic component placeholder for components without dedicated pages
function GenericComponentPlaceholder({ componentName }: { componentName: string }) {
  const formattedName = componentName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl">{formattedName}</h1>
        <p className="text-xl text-muted-foreground">
          {formattedName} 컴포넌트 문서가 곧 제공될 예정입니다.
        </p>
      </div>
      
      <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
        <h3 className="mb-2">문서 작성 중</h3>
        <p className="text-muted-foreground mb-4">
          이 컴포넌트에 대한 포괄적인 문서를 준비하고 있습니다.
        </p>
        <Button variant="outline">
          컴포넌트 소스 보기
        </Button>
      </div>
    </div>
  );
}