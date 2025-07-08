import React, { useState, useEffect } from 'react';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  BarChart3,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Download,
  Upload,
  Clock,
  Zap,
  TrendingUp,
  Activity,
  DollarSign,
  Users,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Wifi,
  Battery,
  HardDrive,
  Cpu,
  MemoryStick,
  Target,
  Star,
  Award,
  BookOpen,
  Calendar,
  Timer,
  Gauge
} from 'lucide-react';

export function ProgressComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // State for various progress examples
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [installProgress, setInstallProgress] = useState(0);
  const [skillProgress, setSkillProgress] = useState({
    react: 85,
    typescript: 92,
    design: 78,
    node: 73
  });
  const [customValue, setCustomValue] = useState(65);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Simulate file upload
  const simulateFileUpload = () => {
    setFileUploadProgress(0);
    const interval = setInterval(() => {
      setFileUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 150);
  };

  // Simulate download
  const simulateDownload = () => {
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 100);
  };

  // Simulate installation
  const simulateInstall = () => {
    setInstallProgress(0);
    const interval = setInterval(() => {
      setInstallProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 200);
  };

  // Animate progress
  const animateProgress = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimatedProgress(0);
    
    const interval = setInterval(() => {
      setAnimatedProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnimating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const resetProgress = () => {
    setAnimatedProgress(0);
    setFileUploadProgress(0);
    setDownloadProgress(0);
    setInstallProgress(0);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Progress</h1>
            <p className="text-muted-foreground">
              진행 상황을 시각적으로 표시하는 컴포넌트입니다. 파일 업로드, 데이터 로딩, 작업 완료율 등을 나타내는 데 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3" />
            진행률 표시
          </Badge>
          <Badge variant="outline">시각적 피드백</Badge>
          <Badge variant="outline">애니메이션</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">반응형</Badge>
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
          {/* Basic Progress */}
          <Card>
            <CardHeader>
              <CardTitle>기본 프로그레스</CardTitle>
              <CardDescription>
                다양한 값과 스타일의 기본 프로그레스 바 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">기본 형태</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>기본 프로그레스 (33%)</Label>
                      <Progress value={33} />
                    </div>
                    
                    <div className="space-y-3">
                      <Label>중간 진행률 (66%)</Label>
                      <Progress value={66} />
                    </div>

                    <div className="space-y-3">
                      <Label>완료 상태 (100%)</Label>
                      <Progress value={100} />
                    </div>

                    <div className="space-y-3">
                      <Label>값이 없는 상태</Label>
                      <Progress />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">사용자 정의 값</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>사용자 정의 진행률</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">값: {customValue}%</span>
                          <span className="text-sm text-muted-foreground">0-100</span>
                        </div>
                        <Progress value={customValue} />
                        <Input
                          type="range"
                          min="0"
                          max="100"
                          value={customValue}
                          onChange={(e) => setCustomValue(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>애니메이션 프로그레스</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">값: {Math.round(animatedProgress)}%</span>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              onClick={animateProgress}
                              disabled={isAnimating}
                            >
                              {isAnimating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                            </Button>
                            <Button size="sm" variant="outline" onClick={resetProgress}>
                              <RotateCcw className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <Progress value={animatedProgress} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 프로그레스
<Progress value={33} />

// 완료 상태
<Progress value={100} />

// 값이 없는 상태 (기본값 0)
<Progress />

// 사용자 정의 스타일
<Progress 
  value={75} 
  className="h-3 bg-blue-100" 
/>

// 애니메이션과 함께
const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500);
  return () => clearTimeout(timer);
}, []);

<Progress value={progress} />`}
                codeKey="basic-progress"
              />
            </CardContent>
          </Card>

          {/* Interactive Examples */}
          <Card>
            <CardHeader>
              <CardTitle>실용적인 예제</CardTitle>
              <CardDescription>
                실제 사용 환경에서 활용되는 프로그레스 바 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">파일 작업</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>파일 업로드</Label>
                      <Card className="p-4 bg-muted/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Upload className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">document.pdf</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {Math.round(fileUploadProgress)}%
                            </span>
                          </div>
                          <Progress value={fileUploadProgress} />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>2.4 MB / 3.1 MB</span>
                            <span>약 {fileUploadProgress < 100 ? Math.max(1, Math.round((100 - fileUploadProgress) / 10)) : 0}초 남음</span>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={simulateFileUpload}
                            disabled={fileUploadProgress > 0 && fileUploadProgress < 100}
                          >
                            {fileUploadProgress === 100 ? '완료' : fileUploadProgress > 0 ? '업로드 중...' : '업로드 시작'}
                          </Button>
                        </div>
                      </Card>
                    </div>

                    <div className="space-y-3">
                      <Label>파일 다운로드</Label>
                      <Card className="p-4 bg-muted/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Download className="w-4 h-4 text-green-500" />
                              <span className="text-sm">presentation.pptx</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {Math.round(downloadProgress)}%
                            </span>
                          </div>
                          <Progress value={downloadProgress} />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>15.2 MB / 18.7 MB</span>
                            <span>{downloadProgress < 100 ? '다운로드 중...' : '완료됨'}</span>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={simulateDownload}
                            disabled={downloadProgress > 0 && downloadProgress < 100}
                          >
                            {downloadProgress === 100 ? '완료' : downloadProgress > 0 ? '다운로드 중...' : '다운로드'}
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">시스템 작업</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>소프트웨어 설치</Label>
                      <Card className="p-4 bg-muted/20">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Settings className="w-4 h-4 text-purple-500" />
                              <span className="text-sm">Node.js 설치 중...</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {Math.round(installProgress)}%
                            </span>
                          </div>
                          <Progress value={installProgress} />
                          <div className="text-xs text-muted-foreground">
                            {installProgress === 0 ? '설치 준비 중...' :
                             installProgress < 30 ? '파일 다운로드 중...' :
                             installProgress < 70 ? '패키지 설치 중...' :
                             installProgress < 100 ? '설정 완료 중...' : '설치 완료!'}
                          </div>
                          <Button 
                            size="sm" 
                            onClick={simulateInstall}
                            disabled={installProgress > 0 && installProgress < 100}
                          >
                            {installProgress === 100 ? '완료' : installProgress > 0 ? '설치 중...' : '설치 시작'}
                          </Button>
                        </div>
                      </Card>
                    </div>

                    <div className="space-y-3">
                      <Label>시스템 상태</Label>
                      <Card className="p-4 bg-muted/20">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-orange-500" />
                                <span className="text-sm">CPU 사용률</span>
                              </div>
                              <span className="text-sm">45%</span>
                            </div>
                            <Progress value={45} />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <MemoryStick className="w-4 h-4 text-blue-500" />
                                <span className="text-sm">메모리 사용률</span>
                              </div>
                              <span className="text-sm">78%</span>
                            </div>
                            <Progress value={78} />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <HardDrive className="w-4 h-4 text-red-500" />
                                <span className="text-sm">디스크 사용률</span>
                              </div>
                              <span className="text-sm">92%</span>
                            </div>
                            <Progress value={92} />
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">스킬 및 평가</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-medium">기술 숙련도</h5>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">React</span>
                            </div>
                            <span className="text-sm">{skillProgress.react}%</span>
                          </div>
                          <Progress value={skillProgress.react} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Type className="w-4 h-4 text-blue-600" />
                              <span className="text-sm">TypeScript</span>
                            </div>
                            <span className="text-sm">{skillProgress.typescript}%</span>
                          </div>
                          <Progress value={skillProgress.typescript} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Palette className="w-4 h-4 text-purple-500" />
                              <span className="text-sm">Design</span>
                            </div>
                            <span className="text-sm">{skillProgress.design}%</span>
                          </div>
                          <Progress value={skillProgress.design} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-green-500" />
                              <span className="text-sm">Node.js</span>
                            </div>
                            <span className="text-sm">{skillProgress.node}%</span>
                          </div>
                          <Progress value={skillProgress.node} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-medium">목표 달성률</h5>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-green-500" />
                              <span className="text-sm">월간 매출 목표</span>
                            </div>
                            <span className="text-sm">87%</span>
                          </div>
                          <Progress value={87} />
                          <p className="text-xs text-muted-foreground">₩43.5M / ₩50M</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">신규 사용자</span>
                            </div>
                            <span className="text-sm">134%</span>
                          </div>
                          <Progress value={100} />
                          <p className="text-xs text-muted-foreground">1,340 / 1,000 명 (목표 초과!)</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-purple-500" />
                              <span className="text-sm">교육 과정 완료</span>
                            </div>
                            <span className="text-sm">62%</span>
                          </div>
                          <Progress value={62} />
                          <p className="text-xs text-muted-foreground">31 / 50 코스</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 파일 업로드 진행률
const [uploadProgress, setUploadProgress] = useState(0);

const simulateUpload = () => {
  const interval = setInterval(() => {
    setUploadProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }
      return prev + Math.random() * 10;
    });
  }, 150);
};

<div className="space-y-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Upload className="w-4 h-4" />
      <span className="text-sm">document.pdf</span>
    </div>
    <span className="text-sm">{Math.round(uploadProgress)}%</span>
  </div>
  <Progress value={uploadProgress} />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>2.4 MB / 3.1 MB</span>
    <span>약 {Math.max(1, Math.round((100 - uploadProgress) / 10))}초 남음</span>
  </div>
</div>

// 시스템 상태 모니터링
<div className="space-y-4">
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm">CPU 사용률</span>
      <span className="text-sm">45%</span>
    </div>
    <Progress value={45} />
  </div>
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm">메모리 사용률</span>
      <span className="text-sm">78%</span>
    </div>
    <Progress value={78} />
  </div>
</div>

// 스킬 레벨 표시
<div className="space-y-3">
  {skills.map((skill) => (
    <div key={skill.name} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm">{skill.name}</span>
        <span className="text-sm">{skill.level}%</span>
      </div>
      <Progress value={skill.level} />
    </div>
  ))}
</div>`}
                codeKey="interactive-examples"
              />
            </CardContent>
          </Card>

          {/* Advanced Examples */}
          <Card>
            <CardHeader>
              <CardTitle>고급 예제</CardTitle>
              <CardDescription>
                복잡한 상황과 특별한 요구사항을 위한 프로그레스 바 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">다단계 프로세스</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">주문 처리 단계</h5>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">전체 진행률</span>
                          <span className="text-sm">3/5 단계</span>
                        </div>
                        <Progress value={60} />
                        <div className="space-y-3 mt-4">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm">주문 확인</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm">결제 처리</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <Clock className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm">상품 준비 중</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                              <span className="text-xs">4</span>
                            </div>
                            <span className="text-sm text-muted-foreground">배송</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                              <span className="text-xs">5</span>
                            </div>
                            <span className="text-sm text-muted-foreground">완료</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">배터리 및 연결 상태</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Battery className="w-4 h-4 text-green-500" />
                            <span className="text-sm">배터리</span>
                          </div>
                          <span className="text-sm">78%</span>
                        </div>
                        <Progress value={78} className="h-3" />
                        <p className="text-xs text-muted-foreground">약 4시간 30분 남음</p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-blue-500" />
                            <span className="text-sm">신호 강도</span>
                          </div>
                          <span className="text-sm">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                        <p className="text-xs text-muted-foreground">강함 (5/5 바)</p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Archive className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">저장공간</span>
                          </div>
                          <span className="text-sm">84%</span>
                        </div>
                        <Progress value={84} className="h-2" />
                        <p className="text-xs text-muted-foreground">672 GB / 800 GB 사용됨</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">대시보드 메트릭스</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-medium">성과 지표</h5>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-green-500" />
                              <span className="text-sm">매출 성장</span>
                            </div>
                            <span className="text-sm">+23%</span>
                          </div>
                          <Progress value={76} />
                          <p className="text-xs text-muted-foreground">목표 대비 76% 달성</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Activity className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">사용자 활동</span>
                            </div>
                            <span className="text-sm">89%</span>
                          </div>
                          <Progress value={89} />
                          <p className="text-xs text-muted-foreground">일일 활성 사용자</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-medium">품질 점수</h5>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm">고객 만족도</span>
                            </div>
                            <span className="text-sm">4.7/5</span>
                          </div>
                          <Progress value={94} />
                          <p className="text-xs text-muted-foreground">1,247개 리뷰 기준</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-purple-500" />
                              <span className="text-sm">품질 점수</span>
                            </div>
                            <span className="text-sm">A+</span>
                          </div>
                          <Progress value={97} />
                          <p className="text-xs text-muted-foreground">업계 상위 3%</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-medium">실시간 상태</h5>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Gauge className="w-4 h-4 text-red-500" />
                              <span className="text-sm">서버 부하</span>
                            </div>
                            <span className="text-sm">높음</span>
                          </div>
                          <Progress value={87} />
                          <p className="text-xs text-muted-foreground">응답시간: 245ms</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Timer className="w-4 h-4 text-green-500" />
                              <span className="text-sm">가동시간</span>
                            </div>
                            <span className="text-sm">99.9%</span>
                          </div>
                          <Progress value={99.9} />
                          <p className="text-xs text-muted-foreground">30일 기준</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 다단계 프로세스
const steps = [
  { id: 1, name: '주문 확인', completed: true },
  { id: 2, name: '결제 처리', completed: true },
  { id: 3, name: '상품 준비', completed: false, current: true },
  { id: 4, name: '배송', completed: false },
  { id: 5, name: '완료', completed: false }
];

const completedSteps = steps.filter(step => step.completed).length;
const progress = (completedSteps / steps.length) * 100;

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <span className="text-sm">전체 진행률</span>
    <span className="text-sm">{completedSteps}/{steps.length} 단계</span>
  </div>
  <Progress value={progress} />
  <div className="space-y-3">
    {steps.map((step) => (
      <div key={step.id} className="flex items-center gap-3">
        <div className={
          step.completed 
            ? "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
            : step.current
            ? "w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
            : "w-6 h-6 bg-muted rounded-full flex items-center justify-center"
        }>
          {step.completed ? (
            <Check className="w-3 h-3 text-white" />
          ) : step.current ? (
            <Clock className="w-3 h-3 text-white" />
          ) : (
            <span className="text-xs">{step.id}</span>
          )}
        </div>
        <span className={
          step.completed || step.current 
            ? "text-sm" 
            : "text-sm text-muted-foreground"
        }>
          {step.name}
        </span>
      </div>
    ))}
  </div>
</div>

// 시스템 상태 모니터링
<div className="space-y-4">
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Battery className="w-4 h-4" />
        <span className="text-sm">배터리</span>
      </div>
      <span className="text-sm">78%</span>
    </div>
    <Progress value={78} className="h-3" />
    <p className="text-xs text-muted-foreground">약 4시간 30분 남음</p>
  </div>
</div>

// 메트릭스 대시보드
<div className="space-y-3">
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-green-500" />
        <span className="text-sm">매출 성장</span>
      </div>
      <span className="text-sm">+23%</span>
    </div>
    <Progress value={76} />
    <p className="text-xs text-muted-foreground">목표 대비 76% 달성</p>
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
              <CardTitle>프로그레스 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 프로그레스 바 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                          <span className="text-sm">파일 업로드 중...</span>
                          <span className="text-sm">67%</span>
                        </div>
                        <Progress value={67} />
                        <p className="text-xs text-muted-foreground">2.1 MB / 3.1 MB</p>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 명확한 라벨과 진행률 표시</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">데이터 로딩</span>
                          <span className="text-sm">3/5</span>
                        </div>
                        <Progress value={60} />
                        <p className="text-xs text-muted-foreground">단계별 진행 상황</p>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 단계별 진행 표시</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">설치 중...</span>
                          <span className="text-sm">완료까지 약 2분</span>
                        </div>
                        <Progress value={45} />
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 예상 완료 시간 제공</p>
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
                        <Progress value={30} />
                      </div>
                      <p className="text-xs text-red-600">✗ 컨텍스트나 라벨 없음</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <span className="text-sm">로딩 중...</span>
                        <Progress value={50} />
                        <Progress value={75} />
                        <Progress value={25} />
                      </div>
                      <p className="text-xs text-red-600">✗ 과도한 프로그레스 바</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <span className="text-sm">처리 중...</span>
                        <Progress value={0} />
                        <p className="text-xs">시간이 오래 걸릴 수 있습니다</p>
                      </div>
                      <p className="text-xs text-red-600">✗ 불명확한 진행 상황</p>
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
                다양한 사용 상황에 맞는 프로그레스 바 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">파일 작업</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">업로드</span>
                        <span className="text-sm">45%</span>
                      </div>
                      <Progress value={45} />
                      <p className="text-xs text-muted-foreground">1.4 MB / 3.1 MB</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 파일 크기 표시<br/>
                      • 전송 속도 정보<br/>
                      • 취소 옵션 제공
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">데이터 로딩</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">로딩</span>
                        <span className="text-sm">2/4</span>
                      </div>
                      <Progress value={50} />
                      <p className="text-xs text-muted-foreground">데이터 가져오는 중...</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 단계별 표시<br/>
                      • 현재 작업 설명<br/>
                      • 예측 가능한 진행
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">성과 지표</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">목표 달성</span>
                        <span className="text-sm">78%</span>
                      </div>
                      <Progress value={78} />
                      <p className="text-xs text-muted-foreground">₩7.8M / ₩10M</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 목표 대비 비율<br/>
                      • 절대값 표시<br/>
                      • 시각적 성취감
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>크기 및 스타일 패턴</CardTitle>
              <CardDescription>
                다양한 크기와 스타일의 프로그레스 바 사용 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">크기별 용도</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">소형 (h-1) - 상태 표시용</span>
                        <Progress value={65} className="h-1" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">기본 (h-2) - 일반적 용도</span>
                        <Progress value={65} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">중형 (h-3) - 중요한 진행률</span>
                        <Progress value={65} className="h-3" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">대형 (h-4) - 주요 프로세스</span>
                        <Progress value={65} className="h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">시각적 상태</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">시작 (0-25%)</span>
                        <Progress value={15} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">진행 중 (25-75%)</span>
                        <Progress value={45} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">거의 완료 (75-99%)</span>
                        <Progress value={85} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">완료 (100%)</span>
                        <Progress value={100} />
                      </div>
                    </div>
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
                효과적인 Progress 사용을 위한 모범 사례
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
                    <li>• 명확한 라벨과 진행률 표시</li>
                    <li>• 예상 완료 시간 제공</li>
                    <li>• 일관된 업데이트 간격</li>
                    <li>• 의미 있는 단계별 표시</li>
                    <li>• 취소/중단 옵션 제공</li>
                    <li>• 완료 시 명확한 피드백</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 컨텍스트 없는 프로그레스 바</li>
                    <li>• 너무 빈번한 업데이트</li>
                    <li>• 불정확한 시간 예측</li>
                    <li>• 과도한 프로그레스 바 사용</li>
                    <li>• 역행하는 진행률</li>
                    <li>• 오랜 시간 0% 상태 유지</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Progress를 효과적으로 인식할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">ARIA 속성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code>role="progressbar"</code> 진행률 표시 역할</li>
                    <li>• <code>aria-valuenow</code> 현재 값</li>
                    <li>• <code>aria-valuemin</code> 최소값 (기본 0)</li>
                    <li>• <code>aria-valuemax</code> 최대값 (기본 100)</li>
                    <li>• <code>aria-label</code> 또는 <code>aria-labelledby</code> 설명</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 (최소 3:1)</li>
                    <li>• 색상에만 의존하지 않는 정보 전달</li>
                    <li>• 명확한 시각적 경계</li>
                    <li>• 적절한 크기 (최소 높이 8px)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 진행률 변화 시 자동 알림</li>
                    <li>• 텍스트 기반 진행 상황 설명</li>
                    <li>• 단계별 진행 상황 안내</li>
                    <li>• 완료 시 명확한 알림</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Progress 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 파일 업로드/다운로드</li>
                    <li>• 데이터 로딩 진행률</li>
                    <li>• 설치/업데이트 과정</li>
                    <li>• 폼 작성 진행률</li>
                    <li>• 목표 달성률 표시</li>
                    <li>• 스킬/레벨 표시</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 표현</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Spinner:</strong> 시간 예측 불가능한 로딩</li>
                    <li>• <strong>Skeleton:</strong> 콘텐츠 로딩 중</li>
                    <li>• <strong>Badge:</strong> 단순 상태 표시</li>
                    <li>• <strong>Stepper:</strong> 다단계 프로세스</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 예측 불가능한 작업</li>
                    <li>• 즉시 완료되는 작업</li>
                    <li>• 복잡한 상태 표시</li>
                    <li>• 장식적 목적</li>
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
                Progress 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Progress 속성</h4>
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
                        <td className="p-2">number</td>
                        <td className="p-2">0</td>
                        <td className="p-2">진행률 값 (0-100)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">max</td>
                        <td className="p-2">number</td>
                        <td className="p-2">100</td>
                        <td className="p-2">최대값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">className</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">추가 CSS 클래스</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">getValueLabel</td>
                        <td className="p-2">(value: number, max: number) =&gt; string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">접근성을 위한 값 라벨</td>
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
                code={`import { Progress } from "./components/ui/progress"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 진행률
<Progress value={33} />

// 값이 없는 상태
<Progress />

// 사용자 정의 최대값
<Progress value={25} max={50} />

// 사용자 정의 스타일
<Progress 
  value={75} 
  className="h-3 bg-blue-100" 
/>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="동적 진행률"
                code={`const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        clearInterval(timer);
        return 100;
      }
      return prev + 10;
    });
  }, 500);
  
  return () => clearInterval(timer);
}, []);

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>로딩 중...</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} />
</div>`}
                codeKey="dynamic-progress"
              />

              <CodeBlock
                title="파일 업로드 진행률"
                code={`const [uploadProgress, setUploadProgress] = useState(0);
const [isUploading, setIsUploading] = useState(false);

const simulateUpload = () => {
  setIsUploading(true);
  setUploadProgress(0);
  
  const interval = setInterval(() => {
    setUploadProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        return 100;
      }
      return prev + Math.random() * 10;
    });
  }, 200);
};

<div className="space-y-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Upload className="w-4 h-4" />
      <span className="text-sm">document.pdf</span>
    </div>
    <span className="text-sm">{Math.round(uploadProgress)}%</span>
  </div>
  <Progress value={uploadProgress} />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>2.4 MB / 3.1 MB</span>
    <span>
      {isUploading ? '업로드 중...' : uploadProgress === 100 ? '완료' : '대기 중'}
    </span>
  </div>
  <Button 
    onClick={simulateUpload} 
    disabled={isUploading}
    size="sm"
  >
    {isUploading ? '업로드 중...' : '업로드'}
  </Button>
</div>`}
                codeKey="upload-progress"
              />

              <CodeBlock
                title="다단계 프로세스"
                code={`const steps = [
  { id: 1, name: '주문 확인', completed: true },
  { id: 2, name: '결제 처리', completed: true },
  { id: 3, name: '상품 준비', completed: false, current: true },
  { id: 4, name: '배송', completed: false },
  { id: 5, name: '완료', completed: false }
];

const completedSteps = steps.filter(step => step.completed).length;
const progress = (completedSteps / steps.length) * 100;

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <span className="text-sm">주문 진행률</span>
    <span className="text-sm">{completedSteps}/{steps.length} 단계</span>
  </div>
  <Progress value={progress} />
  <div className="space-y-2">
    {steps.map((step) => (
      <div key={step.id} className="flex items-center gap-3">
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center text-xs",
          step.completed ? "bg-green-500 text-white" :
          step.current ? "bg-blue-500 text-white" :
          "bg-muted text-muted-foreground"
        )}>
          {step.completed ? <Check className="w-3 h-3" /> : step.id}
        </div>
        <span className={cn(
          "text-sm",
          step.completed || step.current ? "" : "text-muted-foreground"
        )}>
          {step.name}
        </span>
      </div>
    ))}
  </div>
</div>`}
                codeKey="multi-step"
              />

              <CodeBlock
                title="스킬 레벨 표시"
                code={`const skills = [
  { name: 'React', level: 85, icon: '⚛️' },
  { name: 'TypeScript', level: 92, icon: '📘' },
  { name: 'Design', level: 78, icon: '🎨' },
  { name: 'Node.js', level: 73, icon: '🟢' }
];

<div className="space-y-4">
  <h3 className="font-medium">기술 숙련도</h3>
  <div className="space-y-3">
    {skills.map((skill) => (
      <div key={skill.name} className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{skill.icon}</span>
            <span className="text-sm">{skill.name}</span>
          </div>
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
        <Progress value={skill.level} />
      </div>
    ))}
  </div>
</div>`}
                codeKey="skill-levels"
              />

              <CodeBlock
                title="시스템 모니터링"
                code={`const systemMetrics = [
  { name: 'CPU 사용률', value: 45, icon: Cpu, color: 'text-orange-500' },
  { name: '메모리 사용률', value: 78, icon: MemoryStick, color: 'text-blue-500' },
  { name: '디스크 사용률', value: 92, icon: HardDrive, color: 'text-red-500' },
  { name: '네트워크', value: 34, icon: Wifi, color: 'text-green-500' }
];

<div className="space-y-4">
  <h3 className="font-medium">시스템 상태</h3>
  <div className="space-y-4">
    {systemMetrics.map((metric) => (
      <div key={metric.name} className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <metric.icon className={cn("w-4 h-4", metric.color)} />
            <span className="text-sm">{metric.name}</span>
          </div>
          <span className="text-sm font-medium">{metric.value}%</span>
        </div>
        <Progress 
          value={metric.value} 
          className={cn(
            "h-2",
            metric.value > 80 && "bg-red-100",
            metric.value > 60 && metric.value <= 80 && "bg-yellow-100",
            metric.value <= 60 && "bg-green-100"
          )}
        />
      </div>
    ))}
  </div>
</div>`}
                codeKey="system-monitoring"
              />

              <CodeBlock
                title="접근성 고려사항"
                code={`// ARIA 속성을 포함한 완전한 예제
<div className="space-y-2">
  <label id="upload-label" className="text-sm font-medium">
    파일 업로드 진행률
  </label>
  <Progress 
    value={uploadProgress}
    aria-labelledby="upload-label"
    aria-describedby="upload-description"
    className="h-2"
  />
  <div id="upload-description" className="text-xs text-muted-foreground">
    {uploadProgress < 100 
      ? \`\${Math.round(uploadProgress)}% 완료 - 약 \${Math.max(1, Math.round((100 - uploadProgress) / 10))}초 남음\`
      : '업로드가 완료되었습니다'
    }
  </div>
</div>

// 실시간 업데이트를 위한 live region
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {uploadProgress === 100 && "파일 업로드가 완료되었습니다"}
</div>`}
                codeKey="accessibility"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}