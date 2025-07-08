import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../ui/resizable';
import { 
  LayoutPanelTop,
  Check,
  Clipboard,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  Code,
  FileText,
  Image as ImageIcon,
  Layers,
  Split,
  Move,
  Maximize2,
  Minimize2,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  RotateCcw,
  Settings
} from 'lucide-react';
import { useState } from 'react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export function ResizableComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CopyButton = ({ text, codeKey }: { text: string; codeKey: string }) => (
    <Button
      variant="ghost"
      size="sm"
      className="h-6 w-6 p-0"
      onClick={() => copyToClipboard(text, codeKey)}
    >
      {copiedCode === codeKey ? (
        <Check className="h-3 w-3" />
      ) : (
        <Clipboard className="h-3 w-3" />
      )}
    </Button>
  );

  const CodeBlock = ({ code, title, codeKey }: { code: string; title?: string; codeKey: string }) => (
    <div className="relative">
      {title && <h4 className="text-sm font-medium mb-2">{title}</h4>}
      <div className="bg-muted/50 rounded-lg p-4 relative group">
        <pre className="text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyButton text={code} codeKey={codeKey} />
        </div>
      </div>
    </div>
  );

  // Example components
  const BasicResizableExample = () => {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="h-[200px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">왼쪽 패널</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">오른쪽 패널</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  };

  const VerticalResizableExample = () => {
    return (
      <ResizablePanelGroup
        direction="vertical"
        className="h-[300px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">상단 패널</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">하단 패널</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  };

  const HandleVisibleExample = () => {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="h-[200px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">패널 A</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">패널 B</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  };

  const TripleLayoutExample = () => {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="h-[300px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6 bg-muted/30">
            <div className="text-center">
              <PanelLeft className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">사이드바</span>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <FileText className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">메인 콘텐츠</span>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6 bg-muted/30">
            <div className="text-center">
              <Settings className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">속성 패널</span>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  };

  const NestedLayoutExample = () => {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="h-[400px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6 bg-muted/30">
            <div className="text-center">
              <Layers className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">탐색기</span>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <Code className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-semibold">코드 에디터</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <div className="flex h-full items-center justify-center p-6 bg-muted/30">
                <div className="text-center">
                  <MonitorSpeaker className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-semibold">터미널</span>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  };

  const DashboardLayoutExample = () => {
    return (
      <ResizablePanelGroup
        direction="vertical"
        className="h-[500px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <div className="flex h-full items-center justify-center p-4 bg-primary/5">
            <div className="text-center">
              <PanelTop className="w-6 h-6 mx-auto mb-2" />
              <span className="font-semibold">헤더 & 네비게이션</span>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
              <div className="flex h-full items-center justify-center p-4 bg-muted/30">
                <div className="text-center">
                  <PanelLeft className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-semibold">메뉴</span>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={55}>
              <div className="flex h-full items-center justify-center p-4">
                <div className="text-center">
                  <Layers className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-semibold">대시보드 콘텐츠</span>
                  <p className="text-sm text-muted-foreground mt-2">
                    차트, 위젯, 테이블 등
                  </p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <div className="flex h-full items-center justify-center p-4 bg-muted/30">
                <div className="text-center">
                  <PanelRight className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-semibold">위젯</span>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  };

  const examples = [
    {
      title: '기본 수평 레이아웃',
      description: '두 개의 패널을 수평으로 나누는 기본적인 레이아웃입니다.',
      component: <BasicResizableExample />,
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

export function BasicResizableExample() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[200px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">왼쪽 패널</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">오른쪽 패널</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`
    },
    {
      title: '수직 레이아웃',
      description: '패널을 수직으로 나누어 상하로 배치하는 레이아웃입니다.',
      component: <VerticalResizableExample />,
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

export function VerticalResizableExample() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="h-[300px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">상단 패널</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">하단 패널</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`
    },
    {
      title: '핸들 표시',
      description: '크기 조정 핸들을 시각적으로 표시하는 예제입니다.',
      component: <HandleVisibleExample />,
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

export function HandleVisibleExample() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[200px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">패널 A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">패널 B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`
    },
    {
      title: '3분할 레이아웃',
      description: '사이드바, 메인 콘텐츠, 속성 패널로 구성된 3분할 레이아웃입니다.',
      component: <TripleLayoutExample />,
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

export function TripleLayoutExample() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[300px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6 bg-muted/30">
          <span className="font-semibold">사이드바</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">메인 콘텐츠</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6 bg-muted/30">
          <span className="font-semibold">속성 패널</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`
    },
    {
      title: '중첩 레이아웃',
      description: '수평과 수직 레이아웃을 중첩하여 복잡한 구조를 만드는 예제입니다.',
      component: <NestedLayoutExample />,
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

export function NestedLayoutExample() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[400px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6 bg-muted/30">
          <span className="font-semibold">탐색기</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">코드 에디터</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/30">
              <span className="font-semibold">터미널</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`
    },
    {
      title: '대시보드 레이아웃',
      description: '실제 대시보드에서 사용할 수 있는 복합 레이아웃 예제입니다.',
      component: <DashboardLayoutExample />,
      code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

export function DashboardLayoutExample() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="h-[500px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <div className="flex h-full items-center justify-center p-4 bg-primary/5">
          <span className="font-semibold">헤더 & 네비게이션</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
            <div className="flex h-full items-center justify-center p-4 bg-muted/30">
              <span className="font-semibold">메뉴</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={55}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold">대시보드 콘텐츠</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <div className="flex h-full items-center justify-center p-4 bg-muted/30">
              <span className="font-semibold">위젯</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`
    }
  ];

  const components = [
    {
      name: 'ResizablePanelGroup',
      description: '크기 조정 가능한 패널들의 컨테이너',
      usage: '패널 그룹의 방향과 전체 크기를 관리'
    },
    {
      name: 'ResizablePanel',
      description: '크기 조정 가능한 개별 패널',
      usage: '콘텐츠를 담는 개별 영역'
    },
    {
      name: 'ResizableHandle',
      description: '패널 간 크기 조정을 위한 핸들',
      usage: '사용자가 드래그하여 패널 크기를 조정'
    }
  ];

  const features = [
    {
      title: '직관적인 크기 조정',
      description: '드래그 앤 드롭으로 간편하게 패널 크기를 조정할 수 있습니다.',
      icon: '🖱️'
    },
    {
      title: '유연한 레이아웃',
      description: '수평, 수직, 중첩 레이아웃을 자유롭게 구성할 수 있습니다.',
      icon: '📐'
    },
    {
      title: '접근성 지원',
      description: '키보드 네비게이션과 스크린 리더를 완전히 지원합니다.',
      icon: '♿'
    },
    {
      title: '반응형 디자인',
      description: '다양한 화면 크기에서 적응적으로 작동합니다.',
      icon: '📱'
    },
    {
      title: '최소/최대 크기 제한',
      description: '패널의 최소 및 최대 크기를 설정할 수 있습니다.',
      icon: '📏'
    },
    {
      title: '상태 저장',
      description: '패널 크기를 로컬 스토리지에 저장하여 유지할 수 있습니다.',
      icon: '💾'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <LayoutPanelTop className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Resizable</h1>
            <p className="text-muted-foreground">
              사용자가 드래그하여 크기를 조정할 수 있는 패널 레이아웃 컴포넌트입니다. 
              복잡한 대시보드, 에디터, 분할 뷰 등에서 유연한 인터페이스를 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <LayoutPanelTop className="w-3 h-3" />
            6가지 예제
          </Badge>
          <Badge variant="outline">크기 조정</Badge>
          <Badge variant="outline">중첩 레이아웃</Badge>
          <Badge variant="outline">키보드 지원</Badge>
          <Badge variant="outline">react-resizable-panels</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="components">구성요소</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          {examples.map((example, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg bg-background overflow-hidden">
                  {example.component}
                </div>
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>컴포넌트 구조</CardTitle>
              <CardDescription>
                Resizable을 구성하는 주요 컴포넌트들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {components.map((component, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      <h5 className="font-medium">{component.name}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                    <div className="text-xs font-mono bg-muted p-2 rounded">
                      {component.usage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>패널 방향</CardTitle>
              <CardDescription>
                ResizablePanelGroup의 다양한 방향 설정을 보여주는 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <Split className="w-4 h-4" />
                    수평 방향 (horizontal)
                  </h5>
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="h-[120px] w-full rounded-lg border"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center bg-primary/5">
                        <span className="text-sm">왼쪽</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center bg-muted/30">
                        <span className="text-sm">오른쪽</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                  <p className="text-sm text-muted-foreground">좌우로 분할된 레이아웃</p>
                </div>
                
                <div className="space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    수직 방향 (vertical)
                  </h5>
                  <ResizablePanelGroup
                    direction="vertical"
                    className="h-[120px] w-full rounded-lg border"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center bg-primary/5">
                        <span className="text-sm">상단</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center bg-muted/30">
                        <span className="text-sm">하단</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                  <p className="text-sm text-muted-foreground">상하로 분할된 레이아웃</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>사용 가이드라인</CardTitle>
              <CardDescription>
                Resizable 컴포넌트를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 대시보드 레이아웃</li>
                      <li>• 코드 에디터 인터페이스</li>
                      <li>• 파일 탐색기</li>
                      <li>• 이메일 클라이언트</li>
                      <li>• 분할 뷰 인터페이스</li>
                      <li>• 설정 패널</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 최소/최대 크기 설정</li>
                      <li>• 모바일 반응성</li>
                      <li>• 초기 레이아웃 크기</li>
                      <li>• 상태 저장 여부</li>
                      <li>• 핸들 가시성</li>
                      <li>• 키보드 접근성</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 단순한 그리드 레이아웃</li>
                      <li>• 고정 크기 콘텐츠</li>
                      <li>• 모바일 우선 디자인</li>
                      <li>• 과도한 중첩</li>
                      <li>• 너무 작은 패널</li>
                      <li>• 접근성 무시</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">UX 모범 사례</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 UX</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">명확한 시각적 피드백</div>
                        <div>• 핸들을 시각적으로 구분</div>
                        <div>• 호버 상태 표시</div>
                        <div>• 드래그 중 피드백</div>
                        <div className="font-medium mt-3">적절한 크기 제한</div>
                        <div>• 최소 크기 설정</div>
                        <div>• 최대 크기 제한</div>
                        <div>• 의미 있는 기본 크기</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 나쁜 UX</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">혼란스러운 인터페이스</div>
                        <div>• 보이지 않는 핸들</div>
                        <div>• 예측할 수 없는 동작</div>
                        <div>• 불명확한 경계</div>
                        <div className="font-medium mt-3">부적절한 크기</div>
                        <div>• 너무 작은 패널</div>
                        <div>• 제한 없는 크기 조정</div>
                        <div>• 불합리한 기본값</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                Resizable 컴포넌트의 접근성 기능과 고려사항입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  키보드 네비게이션
                </h4>
                <div className="grid gap-2 md:grid-cols-2 text-sm">
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                    <span>다음 핸들로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift + Tab</kbd>
                    <span>이전 핸들로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">←→</kbd>
                    <span>수평 크기 조정</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">↑↓</kbd>
                    <span>수직 크기 조정</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Home</kbd>
                    <span>최소 크기로 설정</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">End</kbd>
                    <span>최대 크기로 설정</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>role="separator":</strong> 핸들의 역할을 명시적으로 표시</li>
                  <li>• <strong>aria-orientation:</strong> 수평/수직 방향 정보 제공</li>
                  <li>• <strong>aria-valuemin/max:</strong> 크기 조정 범위 정보</li>
                  <li>• <strong>aria-valuenow:</strong> 현재 패널 크기 정보</li>
                  <li>• <strong>aria-label:</strong> 핸들에 대한 설명적 레이블</li>
                  <li>• <strong>포커스 관리:</strong> 키보드 네비게이션 시 명확한 포커스 표시</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <MonitorSpeaker className="w-4 h-4" />
                  모션 및 시각적 고려사항
                </h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div>• <strong>부드러운 전환:</strong> 크기 조정 시 자연스러운 애니메이션</div>
                  <div>• <strong>고대비 지원:</strong> 핸들과 패널 경계의 명확한 구분</div>
                  <div>• <strong>확대/축소:</strong> 브라우저 확대 시에도 정상 작동</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementation Tab */}
        <TabsContent value="code" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>설치 및 가져오기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="컴포넌트 가져오기"
                code={`import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"`}
                codeKey="import"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기본 사용법</CardTitle>
              <CardDescription>
                Resizable 컴포넌트의 기본적인 사용 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="기본 구조"
                code={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    <div>첫 번째 패널</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div>두 번째 패널</div>
  </ResizablePanel>
</ResizablePanelGroup>`}
                codeKey="basic"
              />

              <CodeBlock
                title="크기 제한 설정"
                code={`<ResizablePanelGroup direction="horizontal">
  <ResizablePanel 
    defaultSize={25} 
    minSize={20} 
    maxSize={40}
  >
    <div>제한된 크기의 패널</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={75}>
    <div>나머지 공간을 차지하는 패널</div>
  </ResizablePanel>
</ResizablePanelGroup>`}
                codeKey="constraints"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>고급 사용법</CardTitle>
              <CardDescription>
                상태 관리와 이벤트 처리를 포함한 고급 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="상태 저장 및 복원"
                code={`import { useState, useEffect } from "react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

function PersistentLayout() {
  const [sizes, setSizes] = useState([25, 75])

  // 로컬 스토리지에서 크기 복원
  useEffect(() => {
    const saved = localStorage.getItem("panel-sizes")
    if (saved) {
      setSizes(JSON.parse(saved))
    }
  }, [])

  // 크기 변경 시 저장
  const handleResize = (sizes: number[]) => {
    setSizes(sizes)
    localStorage.setItem("panel-sizes", JSON.stringify(sizes))
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={handleResize}
    >
      <ResizablePanel defaultSize={sizes[0]}>
        <div>사이드바</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={sizes[1]}>
        <div>메인 콘텐츠</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
                codeKey="persistent"
              />

              <CodeBlock
                title="동적 패널 관리"
                code={`import { useState } from "react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable"

function DynamicPanels() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [showProperties, setShowProperties] = useState(true)

  return (
    <ResizablePanelGroup direction="horizontal">
      {showSidebar && (
        <>
          <ResizablePanel defaultSize={20} minSize={15}>
            <div className="p-4">
              <h3>사이드바</h3>
              <button onClick={() => setShowSidebar(false)}>
                닫기
              </button>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
        </>
      )}
      
      <ResizablePanel>
        <div className="p-4">
          <h3>메인 콘텐츠</h3>
          {!showSidebar && (
            <button onClick={() => setShowSidebar(true)}>
              사이드바 열기
            </button>
          )}
        </div>
      </ResizablePanel>
      
      {showProperties && (
        <>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20} minSize={15}>
            <div className="p-4">
              <h3>속성</h3>
              <button onClick={() => setShowProperties(false)}>
                닫기
              </button>
            </div>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  )
}`}
                codeKey="dynamic"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API 레퍼런스</CardTitle>
              <CardDescription>
                Resizable 컴포넌트의 주요 속성들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">ResizablePanelGroup</h5>
                  <div className="text-sm space-y-1">
                    <div><code>direction: "horizontal" | "vertical"</code> - 패널 배치 방향</div>
                    <div><code>onLayout?: (sizes: number[]) =&gt; void</code> - 크기 변경 콜백</div>
                    <div><code>className?: string</code> - 추가 CSS 클래스</div>
                    <div><code>autoSaveId?: string</code> - 자동 저장 ID</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">ResizablePanel</h5>
                  <div className="text-sm space-y-1">
                    <div><code>defaultSize?: number</code> - 기본 크기 (퍼센트)</div>
                    <div><code>minSize?: number</code> - 최소 크기 (퍼센트)</div>
                    <div><code>maxSize?: number</code> - 최대 크기 (퍼센트)</div>
                    <div><code>collapsible?: boolean</code> - 접기 가능 여부</div>
                    <div><code>collapsedSize?: number</code> - 접힌 상태 크기</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">ResizableHandle</h5>
                  <div className="text-sm space-y-1">
                    <div><code>withHandle?: boolean</code> - 시각적 핸들 표시</div>
                    <div><code>className?: string</code> - 추가 CSS 클래스</div>
                    <div><code>disabled?: boolean</code> - 크기 조정 비활성화</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LayoutPanelTop className="w-5 h-5" />
            주요 기능
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h4 className="font-medium">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}