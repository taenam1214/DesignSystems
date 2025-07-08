import React, { useState } from 'react';
import { Slider } from '../ui/slider';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { 
  SlidersHorizontal,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  Settings,
  Volume2,
  VolumeX,
  Sun,
  Gauge,
  Thermometer,
  DollarSign,
  Clock,
  Zap,
  Camera,
  Monitor,
  Wifi,
  Battery,
  Target,
  Activity,
  TrendingUp,
  BarChart3,
  Sliders,
  Plus,
  Minus,
  Play,
  Pause
} from 'lucide-react';

export function SliderComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // State for various slider examples
  const [volume, setVolume] = useState([75]);
  const [brightness, setBrightness] = useState([60]);
  const [temperature, setTemperature] = useState([22]);
  const [priceRange, setPriceRange] = useState([25, 75]);
  const [qualitySettings, setQualitySettings] = useState([80]);
  const [speedSetting, setSpeedSetting] = useState([50]);
  const [progressValue, setProgressValue] = useState([33]);
  const [multiRange, setMultiRange] = useState([20, 40, 80]);
  const [verticalValue, setVerticalValue] = useState([40]);
  const [disabledValue] = useState([30]);

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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <SlidersHorizontal className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Slider</h1>
            <p className="text-muted-foreground">
              사용자가 범위 내에서 값을 선택할 수 있는 입력 컨트롤입니다. 단일 값 또는 범위 선택을 지원합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Sliders className="w-3 h-3" />
            범위 입력
          </Badge>
          <Badge variant="outline">값 선택</Badge>
          <Badge variant="outline">범위 설정</Badge>
          <Badge variant="outline">시각적 피드백</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="patterns">패턴</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          {/* Basic Sliders */}
          <Card>
            <CardHeader>
              <CardTitle>기본 슬라이더</CardTitle>
              <CardDescription>
                다양한 설정과 스타일의 기본 슬라이더 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">단일 값 슬라이더</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>기본 슬라이더</Label>
                        <span className="text-sm text-muted-foreground">50</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Volume2 className="w-4 h-4" />
                          <Label>볼륨</Label>
                        </div>
                        <span className="text-sm text-muted-foreground">{volume[0]}%</span>
                      </div>
                      <Slider 
                        value={volume} 
                        onValueChange={setVolume}
                        max={100} 
                        step={1} 
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sun className="w-4 h-4" />
                          <Label>밝기</Label>
                        </div>
                        <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
                      </div>
                      <Slider 
                        value={brightness} 
                        onValueChange={setBrightness}
                        max={100} 
                        step={5} 
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Thermometer className="w-4 h-4" />
                          <Label>온도</Label>
                        </div>
                        <span className="text-sm text-muted-foreground">{temperature[0]}°C</span>
                      </div>
                      <Slider 
                        value={temperature} 
                        onValueChange={setTemperature}
                        min={16}
                        max={30} 
                        step={1} 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">범위 슬라이더</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <Label>가격 범위</Label>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ${priceRange[0]} - ${priceRange[1]}
                        </span>
                      </div>
                      <Slider 
                        value={priceRange} 
                        onValueChange={setPriceRange}
                        max={100} 
                        step={1} 
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>다중 포인트</Label>
                        <span className="text-sm text-muted-foreground">
                          {multiRange.join(', ')}
                        </span>
                      </div>
                      <Slider 
                        value={multiRange} 
                        onValueChange={setMultiRange}
                        max={100} 
                        step={1} 
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>비활성화</Label>
                        <span className="text-sm text-muted-foreground">{disabledValue[0]}</span>
                      </div>
                      <Slider 
                        value={disabledValue} 
                        max={100} 
                        step={1} 
                        disabled
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>큰 단계</Label>
                        <span className="text-sm text-muted-foreground">{progressValue[0]}</span>
                      </div>
                      <Slider 
                        value={progressValue} 
                        onValueChange={setProgressValue}
                        max={100} 
                        step={10} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 슬라이더
<Slider defaultValue={[50]} max={100} step={1} />

// 제어된 슬라이더
const [volume, setVolume] = useState([75]);

<Slider 
  value={volume} 
  onValueChange={setVolume}
  max={100} 
  step={1} 
/>

// 범위 슬라이더
const [priceRange, setPriceRange] = useState([25, 75]);

<Slider 
  value={priceRange} 
  onValueChange={setPriceRange}
  max={100} 
  step={1} 
/>

// 다중 포인트 슬라이더
const [multiRange, setMultiRange] = useState([20, 40, 80]);

<Slider 
  value={multiRange} 
  onValueChange={setMultiRange}
  max={100} 
  step={1} 
/>

// 비활성화된 슬라이더
<Slider value={[30]} max={100} disabled />`}
                codeKey="basic-sliders"
              />
            </CardContent>
          </Card>

          {/* Interactive Controls */}
          <Card>
            <CardHeader>
              <CardTitle>인터랙티브 컨트롤</CardTitle>
              <CardDescription>
                슬라이더와 다른 컨트롤을 조합한 실용적인 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">미디어 컨트롤</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {volume[0] === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          <Label>볼륨</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setVolume([Math.max(0, volume[0] - 10)])}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-sm text-muted-foreground w-8 text-center">
                            {volume[0]}
                          </span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setVolume([Math.min(100, volume[0] + 10)])}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <Slider 
                        value={volume} 
                        onValueChange={setVolume}
                        max={100} 
                        step={1} 
                      />
                      <div className="flex items-center justify-center gap-2">
                        <Button size="sm" variant="outline">
                          <Play className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Pause className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">설정 컨트롤</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Camera className="w-4 h-4" />
                            <Label>품질</Label>
                          </div>
                          <Input 
                            type="number" 
                            value={qualitySettings[0]} 
                            onChange={(e) => setQualitySettings([parseInt(e.target.value) || 0])}
                            className="w-16 h-7 text-xs"
                            min={0}
                            max={100}
                          />
                        </div>
                        <Slider 
                          value={qualitySettings} 
                          onValueChange={setQualitySettings}
                          max={100} 
                          step={1} 
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Gauge className="w-4 h-4" />
                            <Label>속도</Label>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {speedSetting[0] < 30 ? '느림' : 
                             speedSetting[0] < 70 ? '보통' : '빠름'}
                          </span>
                        </div>
                        <Slider 
                          value={speedSetting} 
                          onValueChange={setSpeedSetting}
                          max={100} 
                          step={1} 
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">수직 슬라이더</h4>
                <div className="flex items-center justify-center gap-8 h-48">
                  <div className="flex flex-col items-center gap-2">
                    <Label className="text-sm">수직</Label>
                    <Slider 
                      orientation="vertical"
                      value={verticalValue}
                      onValueChange={setVerticalValue}
                      max={100}
                      step={1}
                      className="h-32"
                    />
                    <span className="text-xs text-muted-foreground">{verticalValue[0]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Label className="text-sm">볼륨</Label>
                    <Slider 
                      orientation="vertical"
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      className="h-32"
                    />
                    <span className="text-xs text-muted-foreground">{volume[0]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Label className="text-sm">밝기</Label>
                    <Slider 
                      orientation="vertical"
                      value={brightness}
                      onValueChange={setBrightness}
                      max={100}
                      step={1}
                      className="h-32"
                    />
                    <span className="text-xs text-muted-foreground">{brightness[0]}</span>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 미디어 컨트롤 예제
const [volume, setVolume] = useState([75]);

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      {volume[0] === 0 ? <VolumeX /> : <Volume2 />}
      <Label>볼륨</Label>
    </div>
    <div className="flex items-center gap-2">
      <Button onClick={() => setVolume([Math.max(0, volume[0] - 10)])}>
        <Minus />
      </Button>
      <span>{volume[0]}</span>
      <Button onClick={() => setVolume([Math.min(100, volume[0] + 10)])}>
        <Plus />
      </Button>
    </div>
  </div>
  <Slider value={volume} onValueChange={setVolume} max={100} />
</div>

// 수직 슬라이더
<Slider 
  orientation="vertical"
  value={[50]}
  max={100}
  step={1}
  className="h-32"
/>

// 입력 필드와 연동
<div className="flex items-center gap-2">
  <Slider 
    value={[value]} 
    onValueChange={(val) => setValue(val[0])}
    max={100} 
  />
  <Input 
    type="number" 
    value={value} 
    onChange={(e) => setValue(parseInt(e.target.value) || 0)}
    className="w-16"
  />
</div>`}
                codeKey="interactive-controls"
              />
            </CardContent>
          </Card>

          {/* Advanced Examples */}
          <Card>
            <CardHeader>
              <CardTitle>고급 예제</CardTitle>
              <CardDescription>
                복잡한 사용 사례와 커스터마이징 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">성능 모니터링</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            <Label>CPU 사용량</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">45%</span>
                        </div>
                        <Slider defaultValue={[45]} max={100} disabled />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            <Label>메모리 사용량</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">72%</span>
                        </div>
                        <Slider defaultValue={[72]} max={100} disabled />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4" />
                            <Label>네트워크</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">28%</span>
                        </div>
                        <Slider defaultValue={[28]} max={100} disabled />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">게임 설정</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Monitor className="w-4 h-4" />
                            <Label>그래픽 품질</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {qualitySettings[0] < 30 ? '낮음' : 
                             qualitySettings[0] < 70 ? '중간' : '높음'}
                          </span>
                        </div>
                        <Slider 
                          value={qualitySettings} 
                          onValueChange={setQualitySettings}
                          max={100} 
                          step={25} 
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Volume2 className="w-4 h-4" />
                            <Label>마스터 볼륨</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">{volume[0]}%</span>
                        </div>
                        <Slider 
                          value={volume} 
                          onValueChange={setVolume}
                          max={100} 
                          step={5} 
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            <Label>마우스 감도</Label>
                          </div>
                          <span className="text-sm text-muted-foreground">{speedSetting[0]}</span>
                        </div>
                        <Slider 
                          value={speedSetting} 
                          onValueChange={setSpeedSetting}
                          min={1}
                          max={100} 
                          step={1} 
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">필터 컨트롤</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>가격 범위</Label>
                          <span className="text-sm text-muted-foreground">
                            ${priceRange[0]} - ${priceRange[1]}
                          </span>
                        </div>
                        <Slider 
                          value={priceRange} 
                          onValueChange={setPriceRange}
                          max={100} 
                          step={1} 
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>$0</span>
                          <span>$100</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>평점</Label>
                          <span className="text-sm text-muted-foreground">
                            {multiRange[0]}/100 이상
                          </span>
                        </div>
                        <Slider 
                          value={[multiRange[0]]} 
                          onValueChange={(val) => setMultiRange([val[0], multiRange[1], multiRange[2]])}
                          max={100} 
                          step={1} 
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>0점</span>
                          <span>100점</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 성능 모니터링 (읽기 전용)
<div className="space-y-3">
  <div className="flex items-center justify-between">
    <Label>CPU 사용량</Label>
    <span>45%</span>
  </div>
  <Slider defaultValue={[45]} max={100} disabled />
</div>

// 단계별 품질 설정
<Slider 
  value={qualitySettings} 
  onValueChange={setQualitySettings}
  max={100} 
  step={25}  // 0, 25, 50, 75, 100만 선택 가능
/>

// 필터 범위 설정
const [priceRange, setPriceRange] = useState([25, 75]);

<div className="space-y-3">
  <div className="flex items-center justify-between">
    <Label>가격 범위</Label>
    <span>${priceRange[0]} - ${priceRange[1]}</span>
  </div>
  <Slider 
    value={priceRange} 
    onValueChange={setPriceRange}
    max={100} 
  />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>$0</span>
    <span>$100</span>
  </div>
</div>`}
                codeKey="advanced-examples"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>슬라이더 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 슬라이더 사용을 위한 디자인 패턴과 모범 사례입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장 패턴
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between">
                          <Label>명확한 라벨과 값 표시</Label>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Slider defaultValue={[75]} max={100} />
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 현재 값을 명확히 표시</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between">
                          <Label>적절한 범위 표시</Label>
                          <span className="text-sm text-muted-foreground">$25 - $75</span>
                        </div>
                        <Slider defaultValue={[25, 75]} max={100} />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>$0</span>
                          <span>$100</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 최소/최대값과 단위 표시</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Volume2 className="w-4 h-4" />
                          <Label>의미 있는 아이콘</Label>
                        </div>
                        <Slider defaultValue={[60]} max={100} />
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 기능을 나타내는 아이콘 사용</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 패턴
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Label>설명 없는 슬라이더</Label>
                        <Slider defaultValue={[42]} max={100} />
                      </div>
                      <p className="text-xs text-red-600">✗ 무엇을 조정하는지 불분명</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Label>너무 민감한 조정</Label>
                        <Slider defaultValue={[50]} max={1000} step={1} />
                      </div>
                      <p className="text-xs text-red-600">✗ 너무 세밀한 조정으로 사용성 저하</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Label>불필요한 정밀도</Label>
                        <Slider defaultValue={[33.7456]} max={100} step={0.0001} />
                      </div>
                      <p className="text-xs text-red-600">✗ 과도한 소수점 표시</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용 컨텍스트별 패턴</CardTitle>
              <CardDescription>
                다양한 사용 상황에 맞는 슬라이더 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">설정 화면</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">볼륨</Label>
                        <span className="text-xs text-muted-foreground">75%</span>
                      </div>
                      <Slider defaultValue={[75]} max={100} step={5} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">밝기</Label>
                        <span className="text-xs text-muted-foreground">60%</span>
                      </div>
                      <Slider defaultValue={[60]} max={100} step={5} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      • 5% 단위로 조정<br/>
                      • 즉시 적용<br/>
                      • 현재 값 표시
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">필터링</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">가격</Label>
                        <span className="text-xs text-muted-foreground">$20-$80</span>
                      </div>
                      <Slider defaultValue={[20, 80]} max={100} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>$0</span>
                        <span>$100</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      • 범위 선택<br/>
                      • 최소/최대 표시<br/>
                      • 실시간 업데이트
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">진행률</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">완료율</Label>
                        <span className="text-xs text-muted-foreground">65%</span>
                      </div>
                      <Slider defaultValue={[65]} max={100} disabled />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      • 읽기 전용<br/>
                      • 진행 상태 표시<br/>
                      • 시각적 피드백
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>반응형 및 접근성 패턴</CardTitle>
              <CardDescription>
                다양한 기기와 사용자를 고려한 슬라이더 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">모바일 최적화</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">터치 친화적</Label>
                        <span className="text-xs text-muted-foreground">50</span>
                      </div>
                      <Slider defaultValue={[50]} max={100} step={10} className="h-6" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 큰 터치 영역<br/>
                      • 굵은 단계<br/>
                      • 명확한 피드백
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">키보드 지원</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <Label className="text-sm">키보드 탐색</Label>
                      <Slider defaultValue={[40]} max={100} step={1} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 방향키로 조정<br/>
                      • Home/End 키 지원<br/>
                      • 포커스 표시
                    </p>
                  </div>
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
                효과적인 Slider 사용을 위한 모범 사례
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
                    <li>• 명확한 라벨과 현재 값 표시</li>
                    <li>• 적절한 최소/최대값 설정</li>
                    <li>• 의미 있는 단계(step) 크기</li>
                    <li>• 범위의 경우 단위와 구간 표시</li>
                    <li>• 실시간 피드백 제공</li>
                    <li>• 아이콘으로 의미 강화</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 설명 없는 슬라이더</li>
                    <li>• 너무 민감하거나 둔감한 조정</li>
                    <li>• 불필요한 정밀도</li>
                    <li>• 값의 의미를 알 수 없는 경우</li>
                    <li>• 터치하기 어려운 크기</li>
                    <li>• 일관성 없는 동작</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Slider를 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">←→</kbd> 좌우 방향키로 값 조정</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">↑↓</kbd> 상하 방향키로 값 조정</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Home</kbd> 최소값으로 이동</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">End</kbd> 최대값으로 이동</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Page Up/Down</kbd> 큰 단위로 조정</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 적절한 role 속성 (slider)</li>
                    <li>• aria-valuemin, aria-valuemax 설정</li>
                    <li>• aria-valuenow로 현재 값 전달</li>
                    <li>• aria-label로 슬라이더 목적 설명</li>
                    <li>• aria-orientation으로 방향 명시</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 적절한 터치 타겟 크기 (최소 44px)</li>
                    <li>• 색상에 의존하지 않는 정보 전달</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>언제 사용하나요?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Slider 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 연속적인 값 선택</li>
                    <li>• 범위 설정</li>
                    <li>• 볼륨, 밝기 조정</li>
                    <li>• 필터 설정</li>
                    <li>• 진행률 표시</li>
                    <li>• 게임 설정</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 표현</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Input:</strong> 정확한 값 입력</li>
                    <li>• <strong>Select:</strong> 이산적 선택</li>
                    <li>• <strong>Radio:</strong> 단일 옵션</li>
                    <li>• <strong>Stepper:</strong> 단계별 조정</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 정확한 값이 중요한 경우</li>
                    <li>• 텍스트 입력</li>
                    <li>• 날짜/시간 선택</li>
                    <li>• 복잡한 데이터 구조</li>
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
              <CardTitle>컴포넌트 API</CardTitle>
              <CardDescription>
                Slider 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">기본 속성</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">속성</th>
                        <th className="text-left p-2 font-medium">타입</th>
                        <th className="text-left p-2 font-medium">기본값</th>
                        <th className="text-left p-2 font-medium">설명</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">value</td>
                        <td className="p-2">number[]</td>
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 값 배열</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">number[]</td>
                        <td className="p-2">[min, max]</td>
                        <td className="p-2">기본값 배열</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onValueChange</td>
                        <td className="p-2">(value: number[]) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">값 변경 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">min</td>
                        <td className="p-2">number</td>
                        <td className="p-2">0</td>
                        <td className="p-2">최소값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">max</td>
                        <td className="p-2">number</td>
                        <td className="p-2">100</td>
                        <td className="p-2">최대값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">step</td>
                        <td className="p-2">number</td>
                        <td className="p-2">1</td>
                        <td className="p-2">증감 단위</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">orientation</td>
                        <td className="p-2">"horizontal" | "vertical"</td>
                        <td className="p-2">"horizontal"</td>
                        <td className="p-2">슬라이더 방향</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">비활성화 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">className</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">추가 CSS 클래스</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>설치 및 가져오기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="가져오기"
                code={`import { Slider } from "./components/ui/slider"
import { Label } from "./components/ui/label"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 단일 값 슬라이더
<Slider defaultValue={[50]} max={100} step={1} />

// 범위 슬라이더
<Slider defaultValue={[25, 75]} max={100} step={1} />

// 라벨과 함께 사용
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>볼륨</Label>
    <span>{value}%</span>
  </div>
  <Slider value={[value]} onValueChange={(val) => setValue(val[0])} />
</div>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="제어된 슬라이더"
                code={`const [volume, setVolume] = useState([75]);

<Slider 
  value={volume} 
  onValueChange={setVolume}
  max={100} 
  step={1} 
/>`}
                codeKey="controlled-slider"
              />

              <CodeBlock
                title="범위 선택"
                code={`const [priceRange, setPriceRange] = useState([20, 80]);

<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>가격 범위</Label>
    <span>${priceRange[0]} - ${priceRange[1]}</span>
  </div>
  <Slider 
    value={priceRange} 
    onValueChange={setPriceRange}
    max={100} 
    step={1} 
  />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>$0</span>
    <span>$100</span>
  </div>
</div>`}
                codeKey="range-slider"
              />

              <CodeBlock
                title="수직 슬라이더"
                code={`<Slider 
  orientation="vertical"
  value={[50]}
  max={100}
  step={1}
  className="h-32"
/>`}
                codeKey="vertical-slider"
              />

              <CodeBlock
                title="아이콘과 함께 사용"
                code={`const [volume, setVolume] = useState([75]);

<div className="space-y-2">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      {volume[0] === 0 ? <VolumeX /> : <Volume2 />}
      <Label>볼륨</Label>
    </div>
    <span>{volume[0]}%</span>
  </div>
  <Slider 
    value={volume} 
    onValueChange={setVolume}
    max={100} 
    step={1} 
  />
</div>`}
                codeKey="icon-slider"
              />

              <CodeBlock
                title="단계별 슬라이더"
                code={`// 큰 단위로 조정 (품질 설정 등)
<Slider 
  value={[quality]} 
  onValueChange={(val) => setQuality(val[0])}
  max={100} 
  step={25}  // 0, 25, 50, 75, 100만 선택 가능
/>

// 온도 조정 (0.5도 단위)
<Slider 
  value={[temperature]} 
  onValueChange={(val) => setTemperature(val[0])}
  min={16}
  max={30}
  step={0.5}
/>`}
                codeKey="stepped-slider"
              />

              <CodeBlock
                title="다중 포인트 슬라이더"
                code={`const [multiValues, setMultiValues] = useState([20, 50, 80]);

<Slider 
  value={multiValues} 
  onValueChange={setMultiValues}
  max={100} 
  step={1} 
/>`}
                codeKey="multi-slider"
              />

              <CodeBlock
                title="입력 필드와 연동"
                code={`const [value, setValue] = useState(50);

<div className="flex items-center gap-4">
  <Slider 
    value={[value]} 
    onValueChange={(val) => setValue(val[0])}
    max={100} 
    className="flex-1"
  />
  <Input 
    type="number" 
    value={value} 
    onChange={(e) => setValue(parseInt(e.target.value) || 0)}
    className="w-16"
    min={0}
    max={100}
  />
</div>`}
                codeKey="input-connected"
              />

              <CodeBlock
                title="비활성화된 슬라이더 (진행률 표시)"
                code={`// 읽기 전용 진행률
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>다운로드 진행률</Label>
    <span>{progress}%</span>
  </div>
  <Slider value={[progress]} max={100} disabled />
</div>`}
                codeKey="disabled-progress"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}