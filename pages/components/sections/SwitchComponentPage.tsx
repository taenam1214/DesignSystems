import React, { useState } from 'react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { 
  ToggleLeft,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  Settings,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Bluetooth,
  BluetoothOff,
  Plane,
  Smartphone,
  Monitor,
  Globe,
  Lock,
  Unlock,
  Star,
  Heart,
  Mail,
  MessageSquare,
  Download,
  Upload,
  Database,
  Server,
  Cloud,
  Zap
} from 'lucide-react';

export function SwitchComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // State for various switch examples
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [privacy, setPrivacy] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [sounds, setSounds] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [twoFA, setTwoFA] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [backup, setBackup] = useState(true);
  const [syncData, setSyncData] = useState(false);
  const [lowPowerMode, setLowPowerMode] = useState(false);

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
            <ToggleLeft className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Switch</h1>
            <p className="text-muted-foreground">
              사용자가 설정을 켜거나 끌 수 있는 토글 컨트롤입니다. 즉시 변경이 적용되는 바이너리 옵션에 적합합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Settings className="w-3 h-3" />
            토글 컨트롤
          </Badge>
          <Badge variant="outline">바이너리 상태</Badge>
          <Badge variant="outline">즉시 적용</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">키보드 지원</Badge>
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
          {/* Basic Switch */}
          <Card>
            <CardHeader>
              <CardTitle>기본 스위치</CardTitle>
              <CardDescription>
                레이블과 함께 사용하는 기본적인 스위치 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">단순 스위치</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="basic-switch-1">기본 스위치</Label>
                      <Switch id="basic-switch-1" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="basic-switch-2">비활성화된 스위치</Label>
                      <Switch id="basic-switch-2" disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="basic-switch-3">기본값 ON</Label>
                      <Switch id="basic-switch-3" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">설명이 있는 스위치</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications">알림</Label>
                        <Switch 
                          id="notifications" 
                          checked={notifications}
                          onCheckedChange={setNotifications}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        새로운 메시지와 업데이트에 대한 알림을 받습니다
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-alerts">이메일 알림</Label>
                        <Switch 
                          id="email-alerts" 
                          checked={emailAlerts}
                          onCheckedChange={setEmailAlerts}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        중요한 업데이트를 이메일로 받습니다
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">아이콘이 있는 스위치</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                        <Label htmlFor="dark-mode">다크 모드</Label>
                      </div>
                      <Switch 
                        id="dark-mode" 
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {sounds ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                        <Label htmlFor="sounds">소리</Label>
                      </div>
                      <Switch 
                        id="sounds" 
                        checked={sounds}
                        onCheckedChange={setSounds}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {privacy ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        <Label htmlFor="privacy">공개 프로필</Label>
                      </div>
                      <Switch 
                        id="privacy" 
                        checked={privacy}
                        onCheckedChange={setPrivacy}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 스위치
<div className="flex items-center justify-between">
  <Label htmlFor="basic-switch">기본 스위치</Label>
  <Switch id="basic-switch" />
</div>

// 제어된 스위치
const [enabled, setEnabled] = useState(false);

<div className="flex items-center justify-between">
  <Label htmlFor="controlled-switch">제어된 스위치</Label>
  <Switch 
    id="controlled-switch" 
    checked={enabled}
    onCheckedChange={setEnabled}
  />
</div>

// 비활성화된 스위치
<Switch disabled />

// 기본값이 ON인 스위치
<Switch defaultChecked />`}
                codeKey="basic-switches"
              />
            </CardContent>
          </Card>

          {/* Settings Panel */}
          <Card>
            <CardHeader>
              <CardTitle>설정 패널</CardTitle>
              <CardDescription>
                일반적인 애플리케이션 설정 화면에서 사용되는 스위치들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      일반 설정
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-save">자동 저장</Label>
                          <p className="text-xs text-muted-foreground">
                            변경사항을 자동으로 저장합니다
                          </p>
                        </div>
                        <Switch 
                          id="auto-save" 
                          checked={autoSave}
                          onCheckedChange={setAutoSave}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="backup">백업</Label>
                          <p className="text-xs text-muted-foreground">
                            클라우드에 데이터를 백업합니다
                          </p>
                        </div>
                        <Switch 
                          id="backup" 
                          checked={backup}
                          onCheckedChange={setBackup}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="sync-data">데이터 동기화</Label>
                          <p className="text-xs text-muted-foreground">
                            기기 간 데이터를 동기화합니다
                          </p>
                        </div>
                        <Switch 
                          id="sync-data" 
                          checked={syncData}
                          onCheckedChange={setSyncData}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      개인정보 및 보안
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="two-fa">2단계 인증</Label>
                          <p className="text-xs text-muted-foreground">
                            추가 보안을 위한 2단계 인증
                          </p>
                        </div>
                        <Switch 
                          id="two-fa" 
                          checked={twoFA}
                          onCheckedChange={setTwoFA}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="analytics">분석 데이터</Label>
                          <p className="text-xs text-muted-foreground">
                            서비스 개선을 위한 익명 데이터 수집
                          </p>
                        </div>
                        <Switch 
                          id="analytics" 
                          checked={analytics}
                          onCheckedChange={setAnalytics}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="marketing">마케팅 정보 수신</Label>
                          <p className="text-xs text-muted-foreground">
                            프로모션 및 마케팅 이메일 받기
                          </p>
                        </div>
                        <Switch 
                          id="marketing" 
                          checked={marketing}
                          onCheckedChange={setMarketing}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <Wifi className="w-4 h-4" />
                      연결 설정
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {wifi ? <Wifi className="w-4 h-4 text-blue-500" /> : <WifiOff className="w-4 h-4 text-muted-foreground" />}
                          <div>
                            <Label htmlFor="wifi">Wi-Fi</Label>
                            <p className="text-xs text-muted-foreground">
                              무선 네트워크 연결
                            </p>
                          </div>
                        </div>
                        <Switch 
                          id="wifi" 
                          checked={wifi}
                          onCheckedChange={setWifi}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {bluetooth ? <Bluetooth className="w-4 h-4 text-blue-500" /> : <BluetoothOff className="w-4 h-4 text-muted-foreground" />}
                          <div>
                            <Label htmlFor="bluetooth">Bluetooth</Label>
                            <p className="text-xs text-muted-foreground">
                              블루투스 기기 연결
                            </p>
                          </div>
                        </div>
                        <Switch 
                          id="bluetooth" 
                          checked={bluetooth}
                          onCheckedChange={setBluetooth}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Plane className={`w-4 h-4 ${airplaneMode ? 'text-orange-500' : 'text-muted-foreground'}`} />
                          <div>
                            <Label htmlFor="airplane-mode">비행기 모드</Label>
                            <p className="text-xs text-muted-foreground">
                              모든 무선 연결 비활성화
                            </p>
                          </div>
                        </div>
                        <Switch 
                          id="airplane-mode" 
                          checked={airplaneMode}
                          onCheckedChange={setAirplaneMode}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      성능 설정
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="low-power-mode">저전력 모드</Label>
                          <p className="text-xs text-muted-foreground">
                            배터리 사용량을 줄입니다
                          </p>
                        </div>
                        <Switch 
                          id="low-power-mode" 
                          checked={lowPowerMode}
                          onCheckedChange={setLowPowerMode}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 설정 패널 예제
const [autoSave, setAutoSave] = useState(true);
const [twoFA, setTwoFA] = useState(true);

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <Label htmlFor="auto-save">자동 저장</Label>
      <p className="text-xs text-muted-foreground">
        변경사항을 자동으로 저장합니다
      </p>
    </div>
    <Switch 
      id="auto-save" 
      checked={autoSave}
      onCheckedChange={setAutoSave}
    />
  </div>
  
  <Separator />
  
  <div className="flex items-center justify-between">
    <div>
      <Label htmlFor="two-fa">2단계 인증</Label>
      <p className="text-xs text-muted-foreground">
        추가 보안을 위한 2단계 인증
      </p>
    </div>
    <Switch 
      id="two-fa" 
      checked={twoFA}
      onCheckedChange={setTwoFA}
    />
  </div>
</div>`}
                codeKey="settings-panel"
              />
            </CardContent>
          </Card>

          {/* Grouped Switches */}
          <Card>
            <CardHeader>
              <CardTitle>그룹화된 스위치</CardTitle>
              <CardDescription>
                관련된 설정들을 그룹으로 묶어서 표시하는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-dashed">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      알림 설정
                    </CardTitle>
                    <CardDescription className="text-sm">
                      받고 싶은 알림 유형을 선택하세요
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-notifications" className="text-sm">푸시 알림</Label>
                      <Switch id="push-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications" className="text-sm">이메일 알림</Label>
                      <Switch id="email-notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-notifications" className="text-sm">SMS 알림</Label>
                      <Switch id="sms-notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="in-app-notifications" className="text-sm">앱 내 알림</Label>
                      <Switch id="in-app-notifications" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-dashed">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      디스플레이 설정
                    </CardTitle>
                    <CardDescription className="text-sm">
                      화면 표시 방식을 설정하세요
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="high-contrast" className="text-sm">고대비 모드</Label>
                      <Switch id="high-contrast" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animations" className="text-sm">애니메이션</Label>
                      <Switch id="animations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-brightness" className="text-sm">자동 밝기</Label>
                      <Switch id="auto-brightness" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="blue-light-filter" className="text-sm">블루라이트 필터</Label>
                      <Switch id="blue-light-filter" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <CodeBlock
                code={`// 그룹화된 스위치 예제
<Card>
  <CardHeader>
    <CardTitle className="text-base flex items-center gap-2">
      <Bell className="w-4 h-4" />
      알림 설정
    </CardTitle>
    <CardDescription>
      받고 싶은 알림 유형을 선택하세요
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-3">
    <div className="flex items-center justify-between">
      <Label htmlFor="push-notifications">푸시 알림</Label>
      <Switch id="push-notifications" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="email-notifications">이메일 알림</Label>
      <Switch id="email-notifications" />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="sms-notifications">SMS 알림</Label>
      <Switch id="sms-notifications" />
    </div>
  </CardContent>
</Card>`}
                codeKey="grouped-switches"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>스위치 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 스위치 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                      <div className="flex items-center justify-between mb-2">
                        <Label>명확한 라벨</Label>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 기능을 명확하게 설명하는 라벨</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <Label>설명이 있는 옵션</Label>
                          <p className="text-xs text-muted-foreground">이 기능의 작동 방식을 설명합니다</p>
                        </div>
                        <Switch />
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 필요시 추가 설명 제공</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4" />
                          <Label>알림</Label>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 의미를 명확히 하는 아이콘 사용</p>
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
                      <div className="flex items-center justify-between mb-2">
                        <Label>모호한 설정</Label>
                        <Switch />
                      </div>
                      <p className="text-xs text-red-600">✗ 무엇을 하는지 불분명한 라벨</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="flex items-center justify-between mb-2">
                        <Label>매우 긴 설정 이름이 여러 줄에 걸쳐 표시되는 경우</Label>
                        <Switch />
                      </div>
                      <p className="text-xs text-red-600">✗ 너무 긴 라벨 텍스트</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="flex items-center justify-between mb-2">
                        <Label>설정 비활성화</Label>
                        <Switch disabled />
                      </div>
                      <p className="text-xs text-red-600">✗ 이유 없는 비활성화 상태</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상태별 스위치 표현</CardTitle>
              <CardDescription>
                다양한 상태에서의 스위치 표현 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">기본 상태</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>OFF 상태</Label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>ON 상태</Label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">비활성화 상태</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-muted-foreground">비활성화 OFF</Label>
                      <Switch disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label className="text-muted-foreground">비활성화 ON</Label>
                      <Switch disabled defaultChecked />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">로딩 상태</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-muted-foreground">처리 중...</Label>
                      <Switch disabled />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>동기화 중</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 상태
<Switch />                    // OFF 상태
<Switch defaultChecked />     // ON 상태

// 비활성화 상태
<Switch disabled />           // 비활성화 OFF
<Switch disabled defaultChecked /> // 비활성화 ON

// 제어된 상태 (로딩 중)
const [loading, setLoading] = useState(false);
const [enabled, setEnabled] = useState(false);

const handleChange = async (checked) => {
  setLoading(true);
  // API 호출 등의 비동기 작업
  await updateSetting(checked);
  setEnabled(checked);
  setLoading(false);
};

<Switch 
  checked={enabled}
  onCheckedChange={handleChange}
  disabled={loading}
/>`}
                codeKey="state-patterns"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>반응형 스위치 레이아웃</CardTitle>
              <CardDescription>
                다양한 화면 크기에서의 스위치 배치 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">모바일 친화적 레이아웃</h4>
                <div className="space-y-3 max-w-sm mx-auto border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Label>Wi-Fi</Label>
                      <p className="text-xs text-muted-foreground">홈 네트워크</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Label>Bluetooth</Label>
                      <p className="text-xs text-muted-foreground">사용 가능한 기기 없음</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Label>위치 서비스</Label>
                      <p className="text-xs text-muted-foreground">앱이 위치에 접근할 수 있습니다</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">데스크톱 레이아웃</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">개인정보 설정</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">프로필 공개</Label>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">검색 허용</Label>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">알림 설정</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">데스크톱 알림</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">소리 알림</Label>
                        <Switch />
                      </div>
                    </CardContent>
                  </Card>
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
                효과적인 Switch 사용을 위한 모범 사례
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
                    <li>• 즉시 적용되는 설정에 사용</li>
                    <li>• 명확하고 간결한 라벨 제공</li>
                    <li>• 필요시 설명 텍스트 추가</li>
                    <li>• 관련 설정들을 그룹화</li>
                    <li>• 일관된 레이아웃 유지</li>
                    <li>• 접근성을 위한 적절한 라벨링</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 저장 버튼이 필요한 설정에 사용</li>
                    <li>• 모호하거나 기술적인 라벨</li>
                    <li>• 너무 많은 스위치를 한 번에 표시</li>
                    <li>• 불필요한 애니메이션이나 효과</li>
                    <li>• 설명 없는 복잡한 기능</li>
                    <li>• 일관성 없는 배치</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Switch를 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Space</kbd> 키로 토글</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> 키로 포커스 이동</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 논리적인 탭 순서</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 적절한 role 속성 (switch)</li>
                    <li>• aria-checked 상태 정보</li>
                    <li>• 설명적인 라벨 제공</li>
                    <li>• aria-describedby로 추가 설명</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비</li>
                    <li>• 색상에 의존하지 않는 상태 표시</li>
                    <li>• 적절한 크기 (최소 44px)</li>
                    <li>• 명확한 상태 구분</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Switch 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 즉시 적용되는 설정</li>
                    <li>• 켜기/끄기 옵션</li>
                    <li>• 시스템 설정</li>
                    <li>• 알림 설정</li>
                    <li>• 기능 활성화/비활성화</li>
                    <li>• 권한 설정</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 표현</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Checkbox:</strong> 다중 선택</li>
                    <li>• <strong>Radio:</strong> 단일 선택</li>
                    <li>• <strong>Button:</strong> 액션 실행</li>
                    <li>• <strong>Select:</strong> 옵션 목록</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 저장이 필요한 설정</li>
                    <li>• 복잡한 다단계 설정</li>
                    <li>• 파일 업로드 등의 액션</li>
                    <li>• 폼 제출 버튼</li>
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
                Switch 컴포넌트의 속성과 설정 옵션
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
                        <td className="p-2 font-mono">checked</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 상태값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultChecked</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">기본 상태값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onCheckedChange</td>
                        <td className="p-2">(checked: boolean) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">상태 변경 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">비활성화 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">id</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">요소 식별자</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">name</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">폼 필드 이름</td>
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
                code={`import { Switch } from "./components/ui/switch"
import { Label } from "./components/ui/label"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 비제어 스위치
<Switch />

// 기본값이 ON인 스위치
<Switch defaultChecked />

// 라벨과 함께 사용
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">비행기 모드</Label>
</div>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="제어된 스위치"
                code={`const [isEnabled, setIsEnabled] = useState(false);

<Switch 
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
/>`}
                codeKey="controlled-switch"
              />

              <CodeBlock
                title="라벨과 설명이 있는 스위치"
                code={`<div className="flex items-center justify-between">
  <div className="space-y-0.5">
    <Label htmlFor="notifications">알림</Label>
    <p className="text-xs text-muted-foreground">
      새로운 메시지와 업데이트 알림을 받습니다
    </p>
  </div>
  <Switch id="notifications" />
</div>`}
                codeKey="labeled-switch"
              />

              <CodeBlock
                title="아이콘이 있는 스위치"
                code={`const [darkMode, setDarkMode] = useState(false);

<div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    <Label htmlFor="dark-mode">다크 모드</Label>
  </div>
  <Switch 
    id="dark-mode" 
    checked={darkMode}
    onCheckedChange={setDarkMode}
  />
</div>`}
                codeKey="icon-switch"
              />

              <CodeBlock
                title="비활성화된 스위치"
                code={`// 비활성화된 OFF 상태
<Switch disabled />

// 비활성화된 ON 상태  
<Switch disabled defaultChecked />

// 조건부 비활성화
const [loading, setLoading] = useState(false);

<Switch 
  disabled={loading}
  onCheckedChange={async (checked) => {
    setLoading(true);
    await updateSetting(checked);
    setLoading(false);
  }}
/>`}
                codeKey="disabled-switch"
              />

              <CodeBlock
                title="폼에서 사용"
                code={`<form onSubmit={handleSubmit}>
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="newsletter">뉴스레터 구독</Label>
      <Switch 
        id="newsletter" 
        name="newsletter"
        defaultChecked 
      />
    </div>
    
    <div className="flex items-center justify-between">
      <Label htmlFor="marketing">마케팅 이메일</Label>
      <Switch 
        id="marketing" 
        name="marketing"
      />
    </div>
    
    <Button type="submit">설정 저장</Button>
  </div>
</form>`}
                codeKey="form-switch"
              />

              <CodeBlock
                title="설정 패널 예제"
                code={`const [settings, setSettings] = useState({
  notifications: true,
  autoSave: false,
  darkMode: false,
});

const updateSetting = (key, value) => {
  setSettings(prev => ({ ...prev, [key]: value }));
};

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <Label>알림</Label>
      <p className="text-xs text-muted-foreground">
        새로운 메시지 알림을 받습니다
      </p>
    </div>
    <Switch 
      checked={settings.notifications}
      onCheckedChange={(value) => updateSetting('notifications', value)}
    />
  </div>
  
  <Separator />
  
  <div className="flex items-center justify-between">
    <div>
      <Label>자동 저장</Label>
      <p className="text-xs text-muted-foreground">
        변경사항을 자동으로 저장합니다
      </p>
    </div>
    <Switch 
      checked={settings.autoSave}
      onCheckedChange={(value) => updateSetting('autoSave', value)}
    />
  </div>
</div>`}
                codeKey="settings-example"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}