import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Target,
  Eye,
  Palette,
  Users,
  Calendar,
  Clock,
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart as RechartsLineChart, 
  Line, 
  AreaChart, 
  Area,
  PieChart as RechartsPieChart, 
  Pie,
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ScatterChart,
  Scatter
} from 'recharts';

export function DataVisualizationSection() {
  // Sample data for charts
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

  const chartTypes = [
    {
      id: 'bar',
      title: '막대 차트',
      icon: BarChart3,
      description: '카테고리별 데이터 비교',
      usage: '판매량, 사용자 수, 점수 비교 등',
      bestFor: ['카테고리 비교', '랭킹 표시', '시간별 변화'],
      avoid: ['연속 데이터', '부분-전체 관계', '상관관계'],
      example: 'monthlyData'
    },
    {
      id: 'line',
      title: '선 차트',
      icon: LineChart,
      description: '시간에 따른 추세 표시',
      usage: '주가 변동, 웹사이트 트래픽, 온도 변화',
      bestFor: ['시간별 추세', '연속 데이터', '여러 지표 비교'],
      avoid: ['카테고리 비교', '정확한 값 읽기', '많은 카테고리'],
      example: 'performanceData'
    },
    {
      id: 'pie',
      title: '원형 차트 (파이/도넛)',
      icon: PieChart,
      description: '전체에서 각 부분의 비율과 구성',
      usage: '시장 점유율, 예산 분배, 설문 결과, 카테고리별 분포',
      bestFor: ['부분-전체 관계', '비율 표시', '5개 이하 카테고리', '구성 비율 강조'],
      avoid: ['정확한 수치 비교', '시간별 변화', '7개 이상 카테고리'],
      example: 'categoryData'
    },
    {
      id: 'area',
      title: '영역 차트',
      icon: Activity,
      description: '누적 데이터나 볼륨 표시',
      usage: '누적 판매량, 스택 차트, 채움 영역',
      bestFor: ['누적 값', '볼륨 강조', '여러 카테고리 누적'],
      avoid: ['음수 값', '정확한 비교', '복잡한 패턴'],
      example: 'monthlyData'
    }
  ];

  const colorGuidelines = [
    {
      title: '순차적 색상',
      description: '연속된 수치 데이터에 사용',
      colors: ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)'],
      usage: '온도, 밀도, 진행률 등',
      example: '낮음 → 보통 → 높음'
    },
    {
      title: '카테고리 색상',
      description: '서로 다른 카테고리를 구분',
      colors: ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'],
      usage: '제품군, 지역, 부서 등',
      example: '모바일, 데스크톱, 태블릿'
    },
    {
      title: '발산 색상',
      description: '중심값에서 양극단으로 발산',
      colors: ['var(--chart-1)', 'var(--muted)', 'var(--chart-5)'],
      usage: '온도 변화, 증감률, 만족도',
      example: '감소 ← 변화없음 → 증가'
    }
  ];

  const accessibilityChecklist = [
    { item: '충분한 색상 대비비 (4.5:1 이상)', status: 'good' },
    { item: '색상에만 의존하지 않는 정보 전달', status: 'good' },
    { item: '대체 텍스트 및 데이터 테이블 제공', status: 'warning' },
    { item: '키보드 네비게이션 지원', status: 'good' },
    { item: '스크린 리더 호환성', status: 'warning' },
    { item: '애니메이션 선택적 사용', status: 'good' }
  ];

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl mb-4">데이터 시각화</h1>
        <p className="text-xl text-muted-foreground">
          효과적인 데이터 스토리텔링을 위한 차트, 그래프, 시각화 패턴입니다. 
          사용자가 데이터를 이해하고 인사이트를 발견할 수 있도록 돕습니다.
        </p>
      </div>

      <Tabs defaultValue="types" className="space-y-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="types">차트 유형</TabsTrigger>
          <TabsTrigger value="colors">색상 사용</TabsTrigger>
          <TabsTrigger value="interaction">상호작용</TabsTrigger>
          <TabsTrigger value="accessibility">접근성</TabsTrigger>
          <TabsTrigger value="best-practices">모범 사례</TabsTrigger>
        </TabsList>

        {/* Chart Types Tab */}
        <TabsContent value="types" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">차트 유형 가이드</h2>
            <div className="grid gap-6">
              {chartTypes.map((chart) => {
                const IconComponent = chart.icon;
                return (
                  <Card key={chart.id}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{chart.title}</CardTitle>
                          <CardDescription>{chart.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">언제 사용하나요</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {chart.bestFor.map((item, index) => (
                                <li key={index}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">피해야 할 경우</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {chart.avoid.map((item, index) => (
                                <li key={index}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">사용 예시</h4>
                            <p className="text-sm text-muted-foreground">{chart.usage}</p>
                          </div>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <ResponsiveContainer width="100%" height={200}>
                            {chart.id === 'bar' && (
                              <BarChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                                <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'var(--popover)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)'
                                  }}
                                />
                                <Bar dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            )}
                            {chart.id === 'line' && (
                              <RechartsLineChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="time" fontSize={12} stroke="var(--muted-foreground)" />
                                <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'var(--popover)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)'
                                  }}
                                />
                                <Line type="monotone" dataKey="cpu" stroke="var(--chart-1)" strokeWidth={2} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="memory" stroke="var(--chart-2)" strokeWidth={2} dot={{ r: 4 }} />
                              </RechartsLineChart>
                            )}
                            {chart.id === 'pie' && (
                              <RechartsPieChart>
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'var(--popover)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)'
                                  }}
                                />
                                <Pie 
                                  data={categoryData} 
                                  cx="50%" 
                                  cy="50%" 
                                  outerRadius={60} 
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
                            )}
                            {chart.id === 'area' && (
                              <AreaChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                                <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'var(--popover)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)'
                                  }}
                                />
                                <Area type="monotone" dataKey="sales" stackId="1" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.6} />
                                <Area type="monotone" dataKey="users" stackId="1" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.6} />
                              </AreaChart>
                            )}
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-6">고급 차트 유형</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>도넛 차트</CardTitle>
                  <CardDescription>중앙에 추가 정보를 표시하는 원형 차트</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--popover)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)'
                          }}
                          formatter={(value, name) => [`${value}`, name]}
                        />
                        <Pie 
                          data={categoryData} 
                          cx="50%" 
                          cy="50%" 
                          innerRadius={40}
                          outerRadius={70} 
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
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>사용 목적:</strong> 전체 대비 비율 + 중앙 요약 정보</p>
                    <p><strong>예시:</strong> 총 방문자 수, 전체 매출, 총 사용자 수</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>산점도 차트</CardTitle>
                  <CardDescription>두 변수 간의 상관관계 표시</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart data={scatterData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis type="number" dataKey="x" fontSize={12} stroke="var(--muted-foreground)" />
                        <YAxis type="number" dataKey="y" fontSize={12} stroke="var(--muted-foreground)" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--popover)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)'
                          }}
                        />
                        <Scatter dataKey="size" fill="var(--chart-1)" fillOpacity={0.6} />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>사용 목적:</strong> 변수 간 상관관계, 클러스터링, 이상치 탐지</p>
                    <p><strong>예시:</strong> 광고비 vs 매출, 연령 vs 소득, 온도 vs 판매량</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>복합 차트</CardTitle>
                  <CardDescription>여러 차트 유형을 조합</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                        <YAxis yAxisId="left" fontSize={12} stroke="var(--muted-foreground)" />
                        <YAxis yAxisId="right" orientation="right" fontSize={12} stroke="var(--muted-foreground)" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--popover)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)'
                          }}
                        />
                        <Bar yAxisId="left" dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--chart-3)" strokeWidth={2} dot={{ r: 4 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>사용 목적:</strong> 서로 다른 단위의 지표를 함께 표시</p>
                    <p><strong>예시:</strong> 판매량(막대) + 수익률(선), 사용자수 + 전환율</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>반원형 차트</CardTitle>
                  <CardDescription>공간 효율적인 게이지 형태의 파이 차트</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--popover)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)'
                          }}
                          formatter={(value, name) => [`${value}`, name]}
                        />
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
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>사용 목적:</strong> 대시보드에서 공간 절약, 진행률 표시</p>
                    <p><strong>예시:</strong> 목표 달성률, 완료 진행률, 점수 분포</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">차트 색상 시스템</h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  디자인 시스템 차트 색상
                </CardTitle>
                <CardDescription>
                  라이트/다크 테마를 지원하는 차트 전용 색상 팔레트입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-5">
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
              </CardContent>
            </Card>

            <div className="grid gap-6">
              {colorGuidelines.map((guideline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{guideline.title}</CardTitle>
                    <CardDescription>{guideline.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">사용 목적</h4>
                          <p className="text-sm text-muted-foreground">{guideline.usage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">예시</h4>
                          <p className="text-sm text-muted-foreground">{guideline.example}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">색상 순서</h4>
                          <div className="flex gap-2">
                            {guideline.colors.map((color, colorIndex) => (
                              <div
                                key={colorIndex}
                                className="w-8 h-8 rounded border"
                                style={{ backgroundColor: color }}
                                title={color}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <ResponsiveContainer width="100%" height={180}>
                          <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                            <XAxis dataKey="month" fontSize={10} stroke="var(--muted-foreground)" />
                            <YAxis fontSize={10} stroke="var(--muted-foreground)" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'var(--popover)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius)'
                              }}
                            />
                            <Bar dataKey="sales" fill={guideline.colors[0]} radius={[2, 2, 0, 0]} />
                            {guideline.colors.length > 1 && (
                              <Bar dataKey="users" fill={guideline.colors[1]} radius={[2, 2, 0, 0]} />
                            )}
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-6">색상 사용 지침</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">권장사항</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 의미가 있는 색상 순서 사용 (예: 좋음→나쁨, 시간순)</li>
                    <li>• 5개 이하의 카테고리에 대해서만 색상 구분</li>
                    <li>• 색맹 사용자를 위한 패턴이나 형태 활용</li>
                    <li>• 테마에 관계없이 일관된 색상 의미</li>
                    <li>• 높은 대비비로 가독성 확보</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">피해야 할 것</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 너무 많은 색상 사용 (7개 이상)</li>
                    <li>• 비슷한 색상으로 중요한 데이터 구분</li>
                    <li>• 문화적으로 부정적인 색상 조합</li>
                    <li>• 색상에만 의존하는 정보 전달</li>
                    <li>• 임의의 색상 변경</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Interaction Tab */}
        <TabsContent value="interaction" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">상호작용 패턴</h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>호버 및 포커스</CardTitle>
                  <CardDescription>마우스와 키보드 상호작용 패턴</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">호버 효과</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>하이라이트:</strong> 데이터 포인트 강조 표시</li>
                        <li>• <strong>툴팁:</strong> 정확한 값과 추가 정보 표시</li>
                        <li>• <strong>크로스헤어:</strong> 다른 차트와 연동</li>
                        <li>• <strong>투명도:</strong> 비활성 요소 흐리게 처리</li>
                      </ul>
                      
                      <h4 className="font-medium mt-4">키보드 네비게이션</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> 데이터 포인트 순서대로 이동</li>
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Enter</kbd> 상세 정보 모달 열기</li>
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">↑↓</kbd> 값 범위 조정</li>
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Esc</kbd> 선택 해제</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                          <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'var(--popover)',
                              border: '1px solid var(--border)',
                              borderRadius: 'var(--radius)',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}
                            formatter={(value, name) => [value, name === 'sales' ? '판매량' : name]}
                          />
                          <Bar dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 막대에 마우스를 올려 상호작용을 확인하세요
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>줌과 패닝</CardTitle>
                  <CardDescription>대용량 데이터셋 탐색을 위한 패턴</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">줌 인/아웃</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 스크롤 휠 지원</li>
                        <li>• 핀치 제스처 (모바일)</li>
                        <li>• 줌 버튼 제공</li>
                        <li>• 미니맵 표시</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">패닝</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 드래그로 이동</li>
                        <li>• 키보드 화살표</li>
                        <li>• 스크롤바 제공</li>
                        <li>• 관성 스크롤</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">리셋</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• '전체 보기' 버튼</li>
                        <li>• 더블클릭 리셋</li>
                        <li>• 자동 피팅</li>
                        <li>• 브레드크럼 네비게이션</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>필터링과 정렬</CardTitle>
                  <CardDescription>데이터 탐색과 분석을 위한 상호작용</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">필터 컨트롤</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">전체</Button>
                            <Button variant="outline" size="sm">Q1</Button>
                            <Button variant="secondary" size="sm">Q2</Button>
                            <Button variant="outline" size="sm">Q3</Button>
                            <Button variant="outline" size="sm">Q4</Button>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            분기별 데이터 필터링
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">범례 상호작용</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: 'var(--chart-1)' }} />
                            <span className="text-sm">매출 (클릭하여 숨기기)</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-50">
                            <div className="w-3 h-3 rounded border-2" style={{ borderColor: 'var(--chart-2)' }} />
                            <span className="text-sm line-through">사용자 (숨김)</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            범례 클릭으로 데이터 시리즈 토글
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Accessibility Tab */}
        <TabsContent value="accessibility" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">접근성 가이드라인</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  접근성 체크리스트
                </CardTitle>
                <CardDescription>
                  WCAG 2.1 AA 기준을 충족하는 차트 접근성 요구사항입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {accessibilityChecklist.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <StatusIcon status={item.status} />
                      <span className="flex-1 text-sm">{item.item}</span>
                      <Badge variant={item.status === 'good' ? 'default' : item.status === 'warning' ? 'secondary' : 'destructive'}>
                        {item.status === 'good' ? '완료' : item.status === 'warning' ? '개선 필요' : '미완성'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>색상 접근성</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">대비비 요구사항</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>일반 텍스트:</strong> 4.5:1 이상</li>
                      <li>• <strong>큰 텍스트:</strong> 3:1 이상</li>
                      <li>• <strong>차트 요소:</strong> 3:1 이상 (배경 대비)</li>
                      <li>• <strong>상태 표시:</strong> 색상 + 패턴/아이콘</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">색맹 대응</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 빨강-초록 색맹 고려 (8% 남성)</li>
                      <li>• 패턴, 텍스처, 형태로 구분</li>
                      <li>• 색상 시뮬레이터로 테스트</li>
                      <li>• 직관적인 색상 순서 사용</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>스크린 리더 지원</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">ARIA 속성</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <code>role="img"</code> 차트 컨테이너</li>
                      <li>• <code>aria-label</code> 차트 설명</li>
                      <li>• <code>aria-describedby</code> 상세 설명</li>
                      <li>• <code>aria-live</code> 동적 업데이트</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">대체 텍스트</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 차트 유형과 목적 설명</li>
                      <li>• 주요 트렌드와 인사이트</li>
                      <li>• 최대/최소값과 특이점</li>
                      <li>• 테이블 형태 데이터 제공</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>접근 가능한 차트 예시</CardTitle>
                <CardDescription>
                  접근성을 고려한 차트 구현 예시입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    role="img" 
                    aria-label="2024년 상반기 월별 매출 추이를 보여주는 막대 차트. 3월에 최저값 2,000을 기록했고, 1월에 최고값 4,000을 기록했습니다."
                    aria-describedby="chart-description"
                  >
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="month" fontSize={12} stroke="var(--muted-foreground)" />
                        <YAxis fontSize={12} stroke="var(--muted-foreground)" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'var(--popover)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)'
                          }}
                        />
                        <Bar dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div id="chart-description" className="text-sm text-muted-foreground">
                    <p><strong>차트 설명:</strong> 1월부터 6월까지의 월별 매출을 보여줍니다. 1월이 가장 높은 4,000의 매출을 기록했으며, 3월이 가장 낮은 2,000을 기록했습니다. 전반적으로 감소 후 증가하는 U자 형태의 패턴을 보입니다.</p>
                  </div>

                  <details className="border rounded-lg p-4">
                    <summary className="font-medium cursor-pointer">데이터 테이블 보기</summary>
                    <table className="w-full mt-4 text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">월</th>
                          <th className="text-right p-2">매출</th>
                        </tr>
                      </thead>
                      <tbody>
                        {monthlyData.map((row, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-2">{row.month}</td>
                            <td className="text-right p-2">{row.sales.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </details>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        {/* Best Practices Tab */}
        <TabsContent value="best-practices" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">모범 사례</h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>데이터 정확성</CardTitle>
                  <CardDescription>신뢰할 수 있는 시각화를 위한 원칙</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-green-700">올바른 방법</h4>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>0부터 시작:</strong> 막대차트는 항상 0부터 시작</li>
                        <li>• <strong>적절한 축 범위:</strong> 데이터에 맞는 스케일 사용</li>
                        <li>• <strong>일관된 간격:</strong> 균등한 시간/카테고리 간격</li>
                        <li>• <strong>명확한 라벨:</strong> 축, 범례, 제목 모두 명시</li>
                        <li>• <strong>소수점 처리:</strong> 의미 있는 자릿수만 표시</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-red-700">피해야 할 방법</h4>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>과장된 차이:</strong> 축 범위 조작으로 차이 부풀리기</li>
                        <li>• <strong>3D 효과:</strong> 불필요한 시각적 왜곡</li>
                        <li>• <strong>이중 축 남용:</strong> 의도적 관계 조작</li>
                        <li>• <strong>너무 많은 정보:</strong> 한 차트에 과도한 데이터</li>
                        <li>• <strong>잘못된 차트 유형:</strong> 데이터에 맞지 않는 형태</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>사용자 경험</CardTitle>
                  <CardDescription>효과적인 커뮤니케이션을 위한 UX 원칙</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">명확성</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 5초 안에 이해 가능</li>
                          <li>• 핵심 메시지 우선</li>
                          <li>• 불필요한 요소 제거</li>
                          <li>• 직관적인 디자인</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">일관성</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 동일한 색상 의미</li>
                          <li>• 표준 차트 패턴</li>
                          <li>• 일관된 축 단위</li>
                          <li>• 반복 가능한 디자인</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">맥락</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 비교 기준 제공</li>
                          <li>• 시간적 맥락</li>
                          <li>• 의미 있는 제목</li>
                          <li>• 출처와 업데이트</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>성능 최적화</CardTitle>
                  <CardDescription>대용량 데이터와 반응형 차트를 위한 기술적 고려사항</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">데이터 처리</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>샘플링:</strong> 1000개 이상 데이터포인트 시 적용</li>
                        <li>• <strong>페이지네이션:</strong> 시간 범위별 데이터 로딩</li>
                        <li>• <strong>집계:</strong> 줌 레벨에 따른 데이터 요약</li>
                        <li>• <strong>캐싱:</strong> 계산된 결과 메모리 저장</li>
                        <li>• <strong>비동기 로딩:</strong> 차트 골격 먼저 표시</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">렌더링 최적화</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>가상화:</strong> 보이는 영역만 렌더링</li>
                        <li>• <strong>디바운싱:</strong> 리사이즈 이벤트 최적화</li>
                        <li>• <strong>SVG vs Canvas:</strong> 데이터량에 따른 선택</li>
                        <li>• <strong>애니메이션 제한:</strong> 성능과 접근성 고려</li>
                        <li>• <strong>반응형 디자인:</strong> 모바일 최적화</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>데이터 스토리텔링</CardTitle>
                  <CardDescription>효과적인 인사이트 전달을 위한 전략</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">구조화된 접근</h4>
                        <ol className="text-sm text-muted-foreground space-y-2">
                          <li><strong>1. 맥락 설정:</strong> 배경과 목표 설명</li>
                          <li><strong>2. 핵심 발견:</strong> 주요 인사이트 강조</li>
                          <li><strong>3. 지원 증거:</strong> 세부 데이터로 뒷받침</li>
                          <li><strong>4. 행동 지침:</strong> 다음 단계 제시</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">시각적 강조</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>어노테이션:</strong> 중요한 포인트 표시</li>
                          <li>• <strong>색상 강조:</strong> 핵심 데이터 하이라이트</li>
                          <li>• <strong>참조선:</strong> 목표값, 평균값 표시</li>
                          <li>• <strong>점진적 공개:</strong> 단계별 정보 제공</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>추가 리소스:</strong> Material Design의 Data Visualization 가이드와 Carbon Design System의 Data Vis 패턴을 참조하여 
              더 자세한 구현 예시와 디자인 원칙을 확인할 수 있습니다.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
}