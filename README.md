# DJ Design System (djdesign_private)

A modern, accessible UI component library leveraging Tailwind v4 and the OKLCH color space for a consistent and beautiful user experience. This project is based on shadcn/ui and Radix UI, featuring full Korean and English documentation, WCAG 2.1 accessibility, real-world examples, and a highly customizable structure.

## Key Features

- **Comprehensive Component Library**: 46 fully documented UI components (Button, Card, Dialog, Calendar, Chart, Table, and more)
- **Bilingual Support**: Documentation available in both Korean and English
- **Tailwind v4 & OKLCH**: Modern styling using the latest CSS technology and color science
- **Full Accessibility**: WCAG 2.1 compliant, keyboard navigation, screen reader support, complete ARIA attributes
- **shadcn/ui Based**: Built on Radix UI primitives, full TypeScript support, highly customizable
- **Practical Examples**: Real-world use cases and code samples for each component

## Component Categories

- **Base Components**: Button, Card, Badge, Avatar, Separator, etc. (8)
- **Form Components**: Input, Select, Checkbox, Switch, Slider, etc. (13)
- **Navigation**: Sidebar, Breadcrumb, Pagination, MenuBar, Navigation Menu, etc. (6)
- **Overlay**: Dialog, Sheet, Popover, Tooltip, Alert Dialog, etc. (9)
- **Data Display**: Table, Chart, Progress, Skeleton, Accordion, etc. (6)
- **Advanced Components**: Command, Resizable, Carousel, Toaster, etc. (4)

## Design Principles

- **Consistency**: Unified design language and interaction patterns across all components
- **Accessibility First**: Inclusive design for all users
- **Developer Experience**: Intuitive API and comprehensive documentation
- **Scalability**: Easily customizable and extendable to fit project requirements

## Tech Stack

- **Next.js** (React-based)
- **TypeScript**
- **Tailwind CSS v4 (beta)**
- **OKLCH color space**
- **shadcn/ui, Radix UI**
- **React Hook Form, Zod** (forms and validation)
- **Lucide React** (icons)
- **Others**: Embla Carousel, Recharts, SWR, etc.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build and start for production**

   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `pages/` - Next.js pages and section-based component documentation
- `pages/components/ui/` - Actual UI component source code
- `pages/components/sections/` - Documentation and examples for each component/guideline/pattern
- `lib/` - Utilities, API, markdown conversion, etc.
- `styles/` - Tailwind and additional CSS

## Development & Documentation Notes

- **Figma**: Original design source
- **Framelink Figma MCP Plugin**: Figma to Cursor AI integration
- **Cursor AI**: AI-based code generation from design
- **QA**: Collaboration with UI designer, review and improvement over weeks 2–4

## Credits

- Frontend Development: 2 people
- UI Designer (QA)
- Main Tools: Figma, Cursor AI, Framelink Figma MCP

---

This project aims to provide a modern design system ready for real-world use, designed for easy extension and customization by anyone.