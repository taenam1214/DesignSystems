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
    { month: 'Jan', sales: 4000, users: 2400, revenue: 2400 },
    { month: 'Feb', sales: 3000, users: 1398, revenue: 2210 },
    { month: 'Mar', sales: 2000, users: 9800, revenue: 2290 },
    { month: 'Apr', sales: 2780, users: 3908, revenue: 2000 },
    { month: 'May', sales: 1890, users: 4800, revenue: 2181 },
    { month: 'Jun', sales: 2390, users: 3800, revenue: 2500 },
  ];

  const categoryData = [
    { name: 'Mobile', value: 400, color: 'var(--chart-1)' },
    { name: 'Desktop', value: 300, color: 'var(--chart-2)' },
    { name: 'Tablet', value: 200, color: 'var(--chart-3)' },
    { name: 'Other', value: 100, color: 'var(--chart-4)' },
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
      title: 'Bar Chart',
      icon: BarChart3,
      description: 'Compare data across categories',
      usage: 'Compare sales, user numbers, scores, etc.',
      bestFor: ['Category comparison', 'Ranking display', 'Time-based changes'],
      avoid: ['Continuous data', 'Partial-whole relationship', 'Correlation'],
      example: 'monthlyData'
    },
    {
      id: 'line',
      title: 'Line Chart',
      icon: LineChart,
      description: 'Display trends over time',
      usage: 'Stock fluctuations, website traffic, temperature changes',
      bestFor: ['Time-based trends', 'Continuous data', 'Comparing multiple metrics'],
      avoid: ['Category comparison', 'Accurate value reading', 'Many categories'],
      example: 'performanceData'
    },
    {
      id: 'pie',
      title: 'Pie Chart (Donut)',
      icon: PieChart,
      description: 'Display the proportion and composition of each part in relation to the whole',
      usage: 'Market share, budget allocation, survey results, category distribution',
      bestFor: ['Partial-whole relationship', 'Ratio display', '5 or fewer categories', 'Highlighting composition ratio'],
      avoid: ['Accurate numerical comparison', 'Time-based changes', '7 or more categories'],
      example: 'categoryData'
    },
    {
      id: 'area',
      title: 'Area Chart',
      icon: Activity,
      description: 'Display cumulative data or volume',
      usage: 'Cumulative sales, stacked charts, filled areas',
      bestFor: ['Cumulative values', 'Volume emphasis', 'Cumulative across multiple categories'],
      avoid: ['Negative values', 'Accurate comparison', 'Complex patterns'],
      example: 'monthlyData'
    }
  ];

  const colorGuidelines = [
    {
      title: 'Sequential Colors',
      description: 'Use for continuous numerical data',
      colors: ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)'],
      usage: 'Temperature, density, progress, etc.',
      example: 'Low → Normal → High'
    },
    {
      title: 'Category Colors',
      description: 'Distinguish different categories',
      colors: ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'],
      usage: 'Product families, regions, departments, etc.',
      example: 'Mobile, Desktop, Tablet'
    },
    {
      title: 'Diverging Colors',
      description: 'Diverge from the center value to the extremes',
      colors: ['var(--chart-1)', 'var(--muted)', 'var(--chart-5)'],
      usage: 'Temperature changes, growth rates, satisfaction',
      example: 'Decrease ← No change → Increase'
    }
  ];

  const accessibilityChecklist = [
    { item: 'Sufficient color contrast (4.5:1 or higher)', status: 'good' },
    { item: 'Information conveyed without relying solely on color', status: 'good' },
    { item: 'Alternative text and data tables provided', status: 'warning' },
    { item: 'Keyboard navigation supported', status: 'good' },
    { item: 'Screen reader compatibility', status: 'warning' },
    { item: 'Selective use of animation', status: 'good' }
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
        <h1 className="text-4xl mb-4">Data Visualization</h1>
        <p className="text-xl text-muted-foreground">
          Charts, graphs, and visualization patterns for effective data storytelling.
          Help users understand and discover insights from data.
        </p>
      </div>

      <Tabs defaultValue="types" className="space-y-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="types">Chart Types</TabsTrigger>
          <TabsTrigger value="colors">Color Usage</TabsTrigger>
          <TabsTrigger value="interaction">Interaction</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
        </TabsList>

        {/* Chart Types Tab */}
        <TabsContent value="types" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">Chart Type Guide</h2>
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
                            <h4 className="font-medium mb-2">When to use</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {chart.bestFor.map((item, index) => (
                                <li key={index}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Things to avoid</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {chart.avoid.map((item, index) => (
                                <li key={index}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Usage example</h4>
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
            <h2 className="text-2xl mb-6">Advanced Chart Types</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Donut Chart</CardTitle>
                  <CardDescription>A circular chart that displays additional information in the center</CardDescription>
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
                          Total 1,000
                        </text>
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Usage:</strong> Overall proportion + central summary information</p>
                    <p><strong>Example:</strong> Total visitors, total revenue, total users</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scatter Plot</CardTitle>
                  <CardDescription>Display correlation between two variables</CardDescription>
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
                    <p><strong>Usage:</strong> Correlation between variables, clustering, anomaly detection</p>
                    <p><strong>Example:</strong> Advertising cost vs revenue, age vs income, temperature vs sales</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Composite Chart</CardTitle>
                  <CardDescription>Combine multiple chart types</CardDescription>
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
                    <p><strong>Usage:</strong> Display metrics with different units together</p>
                    <p><strong>Example:</strong> Sales (bar) + Revenue (line), Users + Conversion rate</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Semi-Circle Chart</CardTitle>
                  <CardDescription>A gauge-like pie chart for space efficiency</CardDescription>
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
                    <p><strong>Usage:</strong> Space saving in dashboards, progress display</p>
                    <p><strong>Example:</strong> Goal achievement rate, completion progress, score distribution</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">Chart Color System</h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Design System Chart Colors
                </CardTitle>
                <CardDescription>
                  A dedicated color palette for charts supporting light/dark themes.
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
                          <h4 className="font-medium mb-2">Usage</h4>
                          <p className="text-sm text-muted-foreground">{guideline.usage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Example</h4>
                          <p className="text-sm text-muted-foreground">{guideline.example}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Color Order</h4>
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
            <h2 className="text-2xl mb-6">Color Usage Guidelines</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Use meaningful color order (e.g., Good → Bad, Time-based)</li>
                    <li>• Use color differentiation for 5 or fewer categories</li>
                    <li>• Utilize patterns or shapes for color-blind users</li>
                    <li>• Maintain consistent color meanings regardless of theme</li>
                    <li>• Ensure high contrast for readability</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">Things to Avoid</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Excessive use of colors (7 or more)</li>
                    <li>• Distinguishing important data with similar colors</li>
                    <li>• Combination of culturally negative colors</li>
                    <li>• Information conveyed solely through color</li>
                    <li>• Arbitrary color changes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Interaction Tab */}
        <TabsContent value="interaction" className="space-y-8">
          <section>
            <h2 className="text-2xl mb-6">Interaction Patterns</h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hover and Focus</CardTitle>
                  <CardDescription>Mouse and keyboard interaction patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Hover Effects</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Highlight:</strong> Highlight data points</li>
                        <li>• <strong>Tooltip:</strong> Display accurate values and additional information</li>
                        <li>• <strong>Crosshair:</strong> Interlink with other charts</li>
                        <li>• <strong>Opacity:</strong> Handle inactive elements</li>
                      </ul>
                      
                      <h4 className="font-medium mt-4">Keyboard Navigation</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> Move through data points in order</li>
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Enter</kbd> Open detail modal</li>
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">↑↓</kbd> Adjust value range</li>
                        <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Esc</kbd> Deselect</li>
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
                            formatter={(value, name) => [value, name === 'sales' ? 'Sales' : name]}
                          />
                          <Bar dataKey="sales" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Try hovering over the bars to see interactions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Zooming and Panning</CardTitle>
                  <CardDescription>Patterns for exploring large datasets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Zoom In/Out</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Scroll wheel support</li>
                        <li>• Pinch gestures (mobile)</li>
                        <li>• Zoom button provided</li>
                        <li>• Mini-map display</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Panning</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Drag to move</li>
                        <li>• Keyboard arrows</li>
                        <li>• Scrollbar provided</li>
                        <li>• Inertial scrolling</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Reset</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• 'View All' button</li>
                        <li>• Double-click reset</li>
                        <li>• Auto-fit</li>
                        <li>• Breadcrumb navigation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Filtering and Sorting</CardTitle>
                  <CardDescription>Interaction for data exploration and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Filter Controls</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">All</Button>
                            <Button variant="outline" size="sm">Q1</Button>
                            <Button variant="secondary" size="sm">Q2</Button>
                            <Button variant="outline" size="sm">Q3</Button>
                            <Button variant="outline" size="sm">Q4</Button>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Filter data by quarter
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Legend Interaction</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: 'var(--chart-1)' }} />
                            <span className="text-sm">Sales (click to hide)</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-50">
                            <div className="w-3 h-3 rounded border-2" style={{ borderColor: 'var(--chart-2)' }} />
                            <span className="text-sm line-through">Users (hidden)</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Toggle data series via legend click
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
            <h2 className="text-2xl mb-6">Accessibility Guidelines</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Accessibility Checklist
                </CardTitle>
                <CardDescription>
                  WCAG 2.1 AA requirements for chart accessibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {accessibilityChecklist.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <StatusIcon status={item.status} />
                      <span className="flex-1 text-sm">{item.item}</span>
                      <Badge variant={item.status === 'good' ? 'default' : item.status === 'warning' ? 'secondary' : 'destructive'}>
                        {item.status === 'good' ? 'Completed' : item.status === 'warning' ? 'Needs improvement' : 'Incomplete'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Color Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Contrast Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>General text:</strong> 4.5:1 or higher</li>
                      <li>• <strong>Large text:</strong> 3:1 or higher</li>
                      <li>• <strong>Chart elements:</strong> 3:1 or higher (background contrast)</li>
                      <li>• <strong>Status indicators:</strong> Color + Pattern/Icon</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Color-Blind Adaptation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Consider red-green color blindness (8% male)</li>
                      <li>• Distinguish via patterns, textures, shapes</li>
                      <li>• Test with color simulators</li>
                      <li>• Use intuitive color order</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Screen Reader Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">ARIA Attributes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <code>role="img"</code> Chart container</li>
                      <li>• <code>aria-label</code> Chart description</li>
                      <li>• <code>aria-describedby</code> Detailed description</li>
                      <li>• <code>aria-live</code> Dynamic updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Alternative Text</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Chart type and purpose description</li>
                      <li>• Key trends and insights</li>
                      <li>• Max/min values and anomalies</li>
                      <li>• Table-like data provided</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Accessible Chart Examples</CardTitle>
                <CardDescription>
                  Example implementations of accessible charts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    role="img" 
                    aria-label="Bar chart showing monthly sales trend from January to June. Sales reached a low of 2,000 in March and a high of 4,000 in January."
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
                    <p><strong>Chart Description:</strong> Shows monthly sales from January to June. January recorded the highest sales of 4,000, while March recorded the lowest sales of 2,000. A U-shaped pattern can be observed overall.</p>
                  </div>

                  <details className="border rounded-lg p-4">
                    <summary className="font-medium cursor-pointer">View Data Table</summary>
                    <table className="w-full mt-4 text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Month</th>
                          <th className="text-right p-2">Sales</th>
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
            <h2 className="text-2xl mb-6">Best Practices</h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Accuracy</CardTitle>
                  <CardDescription>Principles for reliable visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-green-700">Correct Approach</h4>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Start from 0:</strong> Bar charts always start from 0</li>
                        <li>• <strong>Appropriate axis range:</strong> Use appropriate scale for data</li>
                        <li>• <strong>Consistent intervals:</strong> Even time/category intervals</li>
                        <li>• <strong>Clear labels:</strong> All axis, legend, title are specified</li>
                        <li>• <strong>Decimal point handling:</strong> Display only significant digits</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-red-700">Things to Avoid</h4>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Exaggerated differences:</strong> Inflating differences via axis range manipulation</li>
                        <li>• <strong>3D effects:</strong> Unnecessary visual distortion</li>
                        <li>• <strong>Double axis misuse:</strong> Intentional relationship manipulation</li>
                        <li>• <strong>Too much information:</strong> Excessive data in one chart</li>
                        <li>• <strong>Incorrect chart type:</strong> Shape not matching data</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Experience</CardTitle>
                  <CardDescription>UX principles for effective communication</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Clarity</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Understandable within 5 seconds</li>
                          <li>• Prioritize core message</li>
                          <li>• Remove unnecessary elements</li>
                          <li>• Intuitive design</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Consistency</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Consistent color meanings</li>
                          <li>• Standard chart patterns</li>
                          <li>• Consistent axis units</li>
                          <li>• Repeatable design</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Context</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Provide comparison basis</li>
                          <li>• Temporal context</li>
                          <li>• Meaningful title</li>
                          <li>• Source and updates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                  <CardDescription>Technical considerations for large datasets and responsive charts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Data Processing</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Sampling:</strong> Apply for 1000 or more data points</li>
                        <li>• <strong>Pagination:</strong> Load data by time range</li>
                        <li>• <strong>Aggregation:</strong> Summarize data based on zoom level</li>
                        <li>• <strong>Caching:</strong> Store pre-calculated results in memory</li>
                        <li>• <strong>Asynchronous loading:</strong> Display chart skeleton first</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Rendering Optimization</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Virtualization:</strong> Only render visible areas</li>
                        <li>• <strong>Debouncing:</strong> Optimize resize events</li>
                        <li>• <strong>SVG vs Canvas:</strong> Selection based on data amount</li>
                        <li>• <strong>Animation restrictions:</strong> Consider performance and accessibility</li>
                        <li>• <strong>Responsive design:</strong> Mobile optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Storytelling</CardTitle>
                  <CardDescription>Strategies for effective insight communication</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Structured Access</h4>
                        <ol className="text-sm text-muted-foreground space-y-2">
                          <li><strong>1. Context setting:</strong> Explain background and goal</li>
                          <li><strong>2. Core discovery:</strong> Highlight key insights</li>
                          <li><strong>3. Supporting evidence:</strong> Back up with detailed data</li>
                          <li><strong>4. Actionable instructions:</strong> Suggest next steps</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Visual Emphasis</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>Annotations:</strong> Highlight important points</li>
                          <li>• <strong>Color emphasis:</strong> Highlight core data</li>
                          <li>• <strong>Reference lines:</strong> Display target values, average values</li>
                          <li>• <strong>Progressive disclosure:</strong> Provide information step by step</li>
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
              <strong>Additional Resources:</strong> Refer to Material Design's Data Visualization guide and Carbon Design System's Data Vis patterns for 
              more detailed implementation examples and design principles.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
}