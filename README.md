# DJ 디자인 시스템 (djdesign_private)

현대적이고 접근 가능한 UI 컴포넌트 라이브러리입니다. Tailwind v4와 OKLCH 색상 공간을 활용하여 일관되고 아름다운 사용자 경험을 제공합니다. 본 프로젝트는 shadcn/ui와 Radix UI를 기반으로 하며, 완전한 한국어 및 영어 문서화, WCAG 2.1 접근성, 실무 중심 예제, 그리고 커스터마이징이 용이한 구조를 갖추고 있습니다.

## 주요 특징

- **포괄적인 컴포넌트 라이브러리**: 46개의 완전히 문서화된 UI 컴포넌트 제공 (Button, Card, Dialog, Calendar, Chart, Table 등)
- **이중 언어 지원**: 한국어와 영어로 제공되는 문서화
- **Tailwind v4 & OKLCH**: 최신 CSS 기술과 색상 과학을 활용한 스타일링
- **완전한 접근성**: WCAG 2.1 가이드라인 준수, 키보드 네비게이션, 스크린 리더 지원, ARIA 속성 완비
- **shadcn/ui 기반**: Radix UI 프리미티브, TypeScript 완전 지원, 커스터마이징 가능
- **실무 중심 예제**: 각 컴포넌트별 실제 사용 사례와 코드 예제 제공

## 컴포넌트 분류

- **기본 컴포넌트**: Button, Card, Badge, Avatar, Separator 등 (8개)
- **폼 컴포넌트**: Input, Select, Checkbox, Switch, Slider 등 (13개)
- **네비게이션**: Sidebar, Breadcrumb, Pagination, MenuBar, Navigation Menu 등 (6개)
- **오버레이**: Dialog, Sheet, Popover, Tooltip, Alert Dialog 등 (9개)
- **데이터 표시**: Table, Chart, Progress, Skeleton, Accordion 등 (6개)
- **고급 컴포넌트**: Command, Resizable, Carousel, Toaster 등 (4개)

## 디자인 원칙

- **일관성**: 모든 컴포넌트에서 일관된 디자인 언어와 상호작용 패턴 유지
- **접근성 우선**: 모든 사용자가 접근할 수 있도록 설계
- **개발자 경험**: 직관적인 API와 포괄적인 문서 제공
- **확장성**: 프로젝트 요구사항에 맞게 쉽게 커스터마이징 및 확장 가능

## 기술 스택

- **Next.js** (React 기반)
- **TypeScript**
- **Tailwind CSS v4 (beta)**
- **OKLCH 색상 공간**
- **shadcn/ui, Radix UI**
- **React Hook Form, Zod** (폼 및 검증)
- **Lucide React** (아이콘)
- **기타**: Embla Carousel, Recharts, SWR 등

## 설치 및 실행

1. **의존성 설치**

   ```bash
   npm install
   ```

2. **개발 서버 실행**

   ```bash
   npm run dev
   ```

   브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

3. **빌드 및 배포**

   ```bash
   npm run build
   npm start
   ```

## 프로젝트 구조

- `pages/` - Next.js 페이지 및 섹션별 컴포넌트 문서
- `pages/components/ui/` - 실제 UI 컴포넌트 소스
- `pages/components/sections/` - 각 컴포넌트/가이드라인/패턴별 문서 및 예제
- `lib/` - 유틸리티, API, 마크다운 변환 등
- `styles/` - Tailwind 및 추가 CSS

## 개발/문서화 참고

- **Figma**: 디자인 시안 원본
- **Framelink Figma MCP 플러그인**: Figma와 Cursor AI 연동
- **Cursor AI**: 디자인 기반 코드 생성
- **QA**: UI 디자이너와 협업, 2~4주차에 걸친 검수 및 개선

## 크레딧

- 프론트엔드 개발: 2명
- UI 디자이너 (QA)
- 주요 도구: Figma, Cursor AI, Framelink Figma MCP

---

본 프로젝트는 실무에서 바로 사용할 수 있는 현대적 디자인 시스템 구축을 목표로 하며, 누구나 쉽게 확장/커스터마이즈할 수 있도록 설계되었습니다.