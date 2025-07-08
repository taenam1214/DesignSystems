import React, { useState } from 'react';
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartConfig,
} from '../ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  BarChart3,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
  Users,
  DollarSign,
  Target,
  PieChart,
  LineChart,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Calendar,
  Clock,
  Star,
  Heart,
  Eye,
  MousePointer,
  ShoppingCart,
  Download,
  Upload,
  Database,
  Server,
  Cloud,
  Zap,
  Settings,
  Filter,
  RefreshCw
} from 'lucide-react';
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  Line, 
  LineChart as RechartsLineChart, 
  Pie, 
  PieChart as RechartsPieChart, 
  Cell, 
  RadialBar, 
  RadialBarChart, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Tooltip,
  Legend
} from 'recharts';

export function ChartComponentPage() {
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
        <Copy className="h-3 w-3" />
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

  // Sample data aligned with DataVisualizationSection
  const monthlyData = [
    { month: '1월', sales: 4000, users: 2400, revenue: 2400 },
    { month: '2월', sales: 3000, users: 1398, revenue: 2210 },
    { month: '3월', sales: 2000, users: 9800, revenue: 2290 },
    { month: '4월', sales: 2780, users: 3908, revenue: 2000 },
    { month: '5월', sales: 1890, users: 4800, revenue: 2181 },
    { month: '6월', sales: 2390, users: 3800, revenue: 2500 },
  ];

  const categoryData = [
    { name: '모바일', value: 400, color: 'var(--chart-1)' },
    { name: '데스크톱', value: 300, color: 'var(--chart-2)' },
    { name: '태블릿', value: 200, color: 'var(--chart-3)' },
    { name: '기타', value: 100, color: 'var(--chart-4)' },
  ];

  const performanceData = [
    { time: '00:00', cpu: 20, memory: 30, network: 10 },
    { time: '04:00', cpu: 25, memory: 35, network: 15 },
    { time: '08:00', cpu: 45, memory: 60, network: 40 },
    { time: '12:00', cpu: 70, memory: 80, network: 65 },
    { time: '16:00', cpu: 55, memory: 70, network: 50 },
    { time: '20:00', cpu: 35, memory: 45, network: 25 },
  ];

  const scatterData = [
    { x: 100, y: 200, size: 400 },
    { x: 120, y: 100, size: 300 },
    { x: 170, y: 300, size: 500 },
    { x: 140, y: 250, size: 450 },
    { x: 150, y: 400, size: 600 },
    { x: 110, y: 280, size: 350 },
  ];

  const chartConfig: ChartConfig = {
    sales: {
      label: "판매량",
      color: "var(--chart-1)",
    },
    users: {
      label: "사용자", 
      color: "var(--chart-2)",
    },
    revenue: {
      label: "매출",
      color: "var(--chart-3)",
    },
    cpu: {
      label: "CPU",
      color: "var(--chart-1)",
    },
    memory: {
      label: "메모리",
      color: "var(--chart-2)",
    },
    network: {
      label: "네트워크",
      color: "var(--chart-3)",
    },
    mobile: {
      label: "모바일",
      color: "var(--chart-1)",
    },
    desktop: {
      label: "데스크톱",
      color: "var(--chart-2)",
    },
    tablet: {
      label: "태블릿",
      color: "var(--chart-3)",
    },
    other: {
      label: "기타",
      color: "var(--chart-4)",
    },
  };

  // Chart types aligned with DataVisualizationSection
  const chartTypes = [
    {
      id: 'bar',
      title: '막대 차트',
      icon: BarChart3,
      description: '카테고리별 데이터 비교',
      usage: '판매량, 사용자 수, 점수 비교 등',
      bestFor: ['카테고리 비교', '랭킹 표시', '시간별 변화'],
      avoid: ['연속 데이터', '부분-전체 관계', '상관관계']
    },
    {
      id: 'line',
      title: '선 차트',
      icon: LineChart,
      description: '시간에 따른 추세 표시',
      usage: '주가 변동, 웹사이트 트래픽, 온도 변화',
      bestFor: ['시간별 추세', '연속 데이터', '여러 지표 비교'],
      avoid: ['카테고리 비교', '정확한 값 읽기', '많은 카테고리']
    },
    {
      id: 'pie',
      title: '원형 차트 (파이/도넛)',
      icon: PieChart,
      description: '전체에서 각 부분의 비율과 구성',
      usage: '시장 점유율, 예산 분배, 설문 결과, 카테고리별 분포',
      bestFor: ['부분-전체 관계', '비율 표시', '5개 이하 카테고리', '구성 비율 강조'],
      avoid: ['정확한 수치 비교', '시간별 변화', '7개 이상 카테고리']
    },
    {
      id: 'area',
      title: '영역 차트',
      icon: Activity,
      description: '누적 데이터나 볼륨 표시',
      usage: '누적 판매량, 스택 차트, 채움 영역',
      bestFor: ['누적 값', '볼륨 강조', '여러 카테고리 누적'],
      avoid: ['음수 값', '정확한 비교', '복잡한 패턴']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Chart</h1>
            <p className="text-muted-foreground">
              Recharts 기반의 아름답고 인터랙티브한 차트 컴포넌트입니다. 효과적인 데이터 시각화를 위한 완전한 솔루션을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            데이터 시각화
          </Badge>
          <Badge variant="outline">반응형</Badge>
          <Badge variant="outline">인터랙티브</Badge>
          <Badge variant="outline">커스터마이징</Badge>
          <Badge variant="outline">애니메이션</Badge>
        </div>
      </div>

      <Tabs defaultValue="types" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="types">차트 유형</TabsTrigger>
          <TabsTrigger value="advanced">고급 차트</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Chart Types Tab */}
        <TabsContent value="types" className="space-y-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl mb-6">기본 차트 유형</h2>
              <p className="text-muted-foreground mb-6">
                데이터 시각화 가이드에서 정의한 주요 차트 유형들입니다. 각 차트는 특정 데이터 패턴과 목적에 최적화되어 있습니다.
              </p>
            </div>

            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>막대 차트</CardTitle>
                    <CardDescription>카테고리별 데이터 비교</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">언제 사용하나요</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 카테고리 비교</li>
                        <li>• 랭킹 표시</li>
                        <li>• 시간별 변화</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">피해야 할 경우</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 연속 데이터</li>
                        <li>• 부분-전체 관계</li>
                        <li>• 상관관계</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">사용 예시</h4>
                      <p className="text-sm text-muted-foreground">판매량, 사용자 수, 점수 비교 등</p>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <ChartContainer config={chartConfig} className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                          <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock
                    code={`const chartConfig = {
  sales: {
    label: "판매량",
    color: "var(--chart-1)",
  },
}

const data = [
  { month: "1월", sales: 4000 },
  { month: "2월", sales: 3000 },
  { month: "3월", sales: 2000 },
]

<ChartContainer config={chartConfig} className="h-[250px]">
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
    <XAxis dataKey="month" fontSize={12} />
    <YAxis fontSize={12} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
  </BarChart>
</ChartContainer>`}
                    codeKey="bar-chart-example"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Line Chart */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <LineChart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>선 차트</CardTitle>
                    <CardDescription>시간에 따른 추세 표시</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">언제 사용하나요</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 시간별 추세</li>
                        <li>• 연속 데이터</li>
                        <li>• 여러 지표 비교</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">피해야 할 경우</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 카테고리 비교</li>
                        <li>• 정확한 값 읽기</li>
                        <li>• 많은 카테고리</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">사용 예시</h4>
                      <p className="text-sm text-muted-foreground">주가 변동, 웹사이트 트래픽, 온도 변화</p>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <ChartContainer config={chartConfig} className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="time" fontSize={12} stroke="var(--muted-foreground)" />
                          <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="cpu" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 4 }} />
                          <Line type="monotone" dataKey="memory" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 4 }} />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock
                    code={`const chartConfig = {
  cpu: {
    label: "CPU",
    color: "var(--chart-1)",
  },
  memory: {
    label: "메모리",
    color: "var(--chart-2)",
  },
}

const data = [
  { time: "00:00", cpu: 20, memory: 30 },
  { time: "04:00", cpu: 25, memory: 35 },
  { time: "08:00", cpu: 45, memory: 60 },
]

<ChartContainer config={chartConfig} className="h-[250px]">
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
    <XAxis dataKey="time" fontSize={12} />
    <YAxis fontSize={12} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line 
      type="monotone" 
      dataKey="cpu" 
      stroke="var(--chart-1)" 
      strokeWidth={2} 
      dot={{ r: 4 }} 
    />
    <Line 
      type="monotone" 
      dataKey="memory" 
      stroke="var(--chart-2)" 
      strokeWidth={2} 
      dot={{ r: 4 }} 
    />
  </LineChart>
</ChartContainer>`}
                    codeKey="line-chart-example"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PieChart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>원형 차트 (파이/도넛)</CardTitle>
                    <CardDescription>전체에서 각 부분의 비율과 구성</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">언제 사용하나요</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 부분-전체 관계</li>
                        <li>• 비율 표시</li>
                        <li>• 5개 이하 카테고리</li>
                        <li>• 구성 비율 강조</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">피해야 할 경우</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 정확한 수치 비교</li>
                        <li>• 시간별 변화</li>
                        <li>• 7개 이상 카테고리</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">사용 예시</h4>
                      <p className="text-sm text-muted-foreground">시장 점유율, 예산 분배, 설문 결과, 카테고리별 분포</p>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <ChartContainer config={chartConfig} className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Pie 
                            data={categoryData} 
                            cx="50%" 
                            cy="50%" 
                            outerRadius={80} 
                            fill="var(--chart-1)" 
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock
                    code={`import { Cell } from "recharts"

const categoryData = [
  { name: "모바일", value: 400, color: "var(--chart-1)" },
  { name: "데스크톱", value: 300, color: "var(--chart-2)" },
  { name: "태블릿", value: 200, color: "var(--chart-3)" },
  { name: "기타", value: 100, color: "var(--chart-4)" },
]

<ChartContainer config={chartConfig} className="h-[250px]">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Pie 
      data={categoryData} 
      cx="50%" 
      cy="50%" 
      outerRadius={80} 
      dataKey="value"
      label={({ name, percent }) => \`\${name} \${(percent * 100).toFixed(0)}%\`}
      labelLine={false}
    >
      {categoryData.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={entry.color} />
      ))}
    </Pie>
  </PieChart>
</ChartContainer>`}
                    codeKey="pie-chart-example"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Area Chart */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>영역 차트</CardTitle>
                    <CardDescription>누적 데이터나 볼륨 표시</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">언제 사용하나요</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 누적 값</li>
                        <li>• 볼륨 강조</li>
                        <li>• 여러 카테고리 누적</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">피해야 할 경우</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 음수 값</li>
                        <li>• 정확한 비교</li>
                        <li>• 복잡한 패턴</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">사용 예시</h4>
                      <p className="text-sm text-muted-foreground">누적 판매량, 스택 차트, 채움 영역</p>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <ChartContainer config={chartConfig} className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                          <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area type="monotone" dataKey="sales" stackId="1" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.6} />
                          <Area type="monotone" dataKey="users" stackId="1" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.6} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
                <div className="mt-6">
                  <CodeBlock
                    code={`const chartConfig = {
  sales: {
    label: "판매량",
    color: "var(--chart-1)",
  },
  users: {
    label: "사용자",
    color: "var(--chart-2)",
  },
}

const data = [
  { month: "1월", sales: 4000, users: 2400 },
  { month: "2월", sales: 3000, users: 1398 },
  { month: "3월", sales: 2000, users: 9800 },
]

<ChartContainer config={chartConfig} className="h-[250px]">
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
    <XAxis dataKey="month" fontSize={12} />
    <YAxis fontSize={12} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area 
      type="monotone" 
      dataKey="sales" 
      stackId="1"
      stroke="var(--chart-1)" 
      fill="var(--chart-1)" 
      fillOpacity={0.6}
    />
    <Area 
      type="monotone" 
      dataKey="users" 
      stackId="1"
      stroke="var(--chart-2)" 
      fill="var(--chart-2)" 
      fillOpacity={0.6}
    />
  </AreaChart>
</ChartContainer>`}
                    codeKey="area-chart-example"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Advanced Charts Tab */}
        <TabsContent value="advanced" className="space-y-8">
          <div>
            <h2 className="text-2xl mb-6">고급 차트 유형</h2>
            <p className="text-muted-foreground mb-6">
              특수한 용도와 복합적인 데이터 표현을 위한 고급 차트 유형들입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>도넛 차트</CardTitle>
                <CardDescription>중앙에 추가 정보를 표시하는 원형 차트</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ChartContainer config={chartConfig} className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Pie 
                          data={categoryData} 
                          cx="50%" 
                          cy="50%" 
                          innerRadius={60}
                          outerRadius={100} 
                          fill="var(--chart-1)" 
                          dataKey="value"
                          stroke="var(--background)"
                          strokeWidth={2}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-foreground text-lg font-medium">
                          총 1,000
                        </text>
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <p><strong>사용 목적:</strong> 전체 대비 비율 + 중앙 요약 정보</p>
                  <p><strong>예시:</strong> 총 방문자 수, 전체 매출, 총 사용자 수</p>
                </div>
                <CodeBlock
                  code={`<ChartContainer config={chartConfig} className="h-[300px]">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Pie 
      data={data} 
      cx="50%" 
      cy="50%" 
      innerRadius={60}
      outerRadius={100} 
      dataKey="value"
      stroke="var(--background)"
      strokeWidth={2}
    >
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={entry.color} />
      ))}
    </Pie>
    <text 
      x="50%" 
      y="50%" 
      textAnchor="middle" 
      dominantBaseline="middle" 
      className="fill-foreground text-lg font-medium"
    >
      총 1,000
    </text>
  </PieChart>
</ChartContainer>`}
                  codeKey="donut-chart-advanced"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>산점도 차트</CardTitle>
                <CardDescription>두 변수 간의 상관관계 표시</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ChartContainer config={chartConfig} className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart data={scatterData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis type="number" dataKey="x" fontSize={12} stroke="var(--muted-foreground)" />
                        <YAxis type="number" dataKey="y" fontSize={12} stroke="var(--muted-foreground)" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Scatter dataKey="size" fill="var(--chart-1)" fillOpacity={0.6} />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <p><strong>사용 목적:</strong> 변수 간 상관관계, 클러스터링, 이상치 탐지</p>
                  <p><strong>예시:</strong> 광고비 vs 매출, 연령 vs 소득, 온도 vs 판매량</p>
                </div>
                <CodeBlock
                  code={`const scatterData = [
  { x: 100, y: 200, size: 400 },
  { x: 120, y: 100, size: 300 },
  { x: 170, y: 300, size: 500 },
]

<ChartContainer config={chartConfig} className="h-[300px]">
  <ScatterChart data={scatterData}>
    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
    <XAxis type="number" dataKey="x" fontSize={12} />
    <YAxis type="number" dataKey="y" fontSize={12} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Scatter dataKey="size" fill="var(--chart-1)" fillOpacity={0.6} />
  </ScatterChart>
</ChartContainer>`}
                  codeKey="scatter-chart-advanced"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>복합 차트</CardTitle>
                <CardDescription>여러 차트 유형을 조합</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ChartContainer config={chartConfig} className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                        <YAxis yAxisId="left" fontSize={12} stroke="var(--muted-foreground)" />
                        <YAxis yAxisId="right" orientation="right" fontSize={12} stroke="var(--muted-foreground)" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar yAxisId="left" dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--chart-3)" strokeWidth={2} dot={{ r: 4 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <p><strong>사용 목적:</strong> 서로 다른 단위의 지표를 함께 표시</p>
                  <p><strong>예시:</strong> 판매량(막대) + 수익률(선), 사용자수 + 전환율</p>
                </div>
                <CodeBlock
                  code={`<ChartContainer config={chartConfig} className="h-[300px]">
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
    <XAxis dataKey="month" fontSize={12} />
    <YAxis yAxisId="left" fontSize={12} />
    <YAxis yAxisId="right" orientation="right" fontSize={12} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar 
      yAxisId="left" 
      dataKey="sales" 
      fill="var(--chart-1)" 
      radius={[4, 4, 0, 0]} 
    />
    <Line 
      yAxisId="right" 
      type="monotone" 
      dataKey="revenue" 
      stroke="var(--chart-3)" 
      strokeWidth={2} 
      dot={{ r: 4 }} 
    />
  </BarChart>
</ChartContainer>`}
                  codeKey="combination-chart-advanced"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>반원형 차트</CardTitle>
                <CardDescription>공간 효율적인 게이지 형태의 파이 차트</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ChartContainer config={chartConfig} className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Pie 
                          data={categoryData} 
                          cx="50%" 
                          cy="80%" 
                          startAngle={180}
                          endAngle={0}
                          innerRadius={50}
                          outerRadius={80} 
                          fill="var(--chart-1)" 
                          dataKey="value"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <p><strong>사용 목적:</strong> 대시보드에서 공간 절약, 진행률 표시</p>
                  <p><strong>예시:</strong> 목표 달성률, 완료 진행률, 점수 분포</p>
                </div>
                <CodeBlock
                  code={`<ChartContainer config={chartConfig} className="h-[300px]">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Pie 
      data={data} 
      cx="50%" 
      cy="80%" 
      startAngle={180}
      endAngle={0}
      innerRadius={50}
      outerRadius={80} 
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={entry.color} />
      ))}
    </Pie>
  </PieChart>
</ChartContainer>`}
                  codeKey="semicircle-chart-advanced"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>차트 선택 가이드</CardTitle>
              <CardDescription>
                데이터와 목적에 따른 적절한 차트 유형 선택 방법
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장사항
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 데이터 유형에 맞는 차트 종류 선택</li>
                    <li>• 의미가 있는 색상 순서 사용</li>
                    <li>• 5개 이하의 카테고리에 대해서만 색상 구분</li>
                    <li>• 명확한 축 레이블과 단위 표시</li>
                    <li>• 적절한 툴팁과 범례 제공</li>
                    <li>• 색맹 사용자를 위한 패턴 활용</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 색상 사용 (7개 이상)</li>
                    <li>• 비슷한 색상으로 중요한 데이터 구분</li>
                    <li>• 잘못된 차트 유형 선택</li>
                    <li>• 색상에만 의존하는 정보 전달</li>
                    <li>• 불명확한 축 스케일</li>
                    <li>• 과도한 애니메이션 효과</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>색상 시스템</CardTitle>
              <CardDescription>
                디자인 시스템의 차트 전용 색상 팔레트
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-5 mb-6">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="space-y-2">
                    <div 
                      className="h-16 rounded-lg border"
                      style={{ backgroundColor: `var(--chart-${num})` }}
                    />
                    <div className="text-center">
                      <div className="text-sm font-medium">Chart {num}</div>
                      <div className="text-xs text-muted-foreground font-mono">
                        var(--chart-{num})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>라이트/다크 테마를 지원하는 차트 전용 색상 팔레트입니다. 카테고리 구분, 순차적 데이터, 발산 데이터에 최적화되어 있습니다.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Chart를 이해할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">색상 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 대비율 확보 (최소 4.5:1)</li>
                    <li>• 색상만으로 정보 전달 금지</li>
                    <li>• 색각 이상자를 위한 패턴 사용</li>
                    <li>• 의미 있는 색상 선택</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 포커스 가능한 차트 요소</li>
                    <li>• 키보드로 데이터 포인트 탐색</li>
                    <li>• 적절한 탭 순서 구성</li>
                    <li>• 스크린 리더 호환성</li>
                  </ul>
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
                title="가져오기"
                code={`import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent, 
  ChartLegend, 
  ChartLegendContent 
} from "./components/ui/chart"
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from "recharts"`}
                codeKey="import-setup"
              />
              
              <CodeBlock
                title="ChartConfig 설정"
                code={`const chartConfig = {
  sales: {
    label: "판매량",
    color: "var(--chart-1)",
  },
  users: {
    label: "사용자",
    color: "var(--chart-2)",
  },
  revenue: {
    label: "매출",
    color: "var(--chart-3)",
  },
}`}
                codeKey="chart-config-setup"
              />

              <CodeBlock
                title="기본 템플릿"
                code={`const data = [
  { month: "1월", sales: 4000, users: 2400 },
  { month: "2월", sales: 3000, users: 1398 },
  { month: "3월", sales: 2000, users: 9800 },
]

<ChartContainer config={chartConfig} className="h-[300px]">
  {/* 여기에 Recharts 차트 컴포넌트 */}
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="sales" fill="var(--chart-1)" />
  </BarChart>
</ChartContainer>`}
                codeKey="basic-template"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}