import React, { useState } from 'react';
import { 
  RadioGroup,
  RadioGroupItem,
} from '../ui/radio-group';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  CircleDot,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Settings,
  User,
  Globe,
  Shield,
  Bell,
  Calendar,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Truck,
  Clock,
  Zap,
  Cloud,
  Database,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Camera,
  Gamepad2,
  Speaker,
  Tv,
  Router,
  Cpu,
  HardDrive,
  MemoryStick,
  Wifi,
  Bluetooth,
  Usb,
  MousePointer,
  Keyboard,
  Printer,
  Scanner,
  Webcam,
  Mic,
  Star,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share,
  Bookmark,
  Download,
  Upload,
  Play,
  Pause,
  Skip,
  Volume2,
  Wallet,
  X
} from 'lucide-react';

export function RadioGroupComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [notificationPreference, setNotificationPreference] = useState('all');
  const [shippingOption, setShippingOption] = useState('standard');
  const [deviceType, setDeviceType] = useState('smartphone');
  const [theme, setTheme] = useState('light');
  const [planType, setPlanType] = useState('pro');

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
            <CircleDot className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Radio Group</h1>
            <p className="text-muted-foreground">
              여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹입니다. 상호 배타적인 선택지를 제공할 때 사용합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            단일 선택
          </Badge>
          <Badge variant="outline">상호 배타적</Badge>
          <Badge variant="outline">키보드 탐색</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">폼 연동</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="patterns">패턴 및 유형</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>기본 라디오 그룹</CardTitle>
              <CardDescription>
                가장 기본적인 라디오 그룹입니다. 여러 옵션 중 하나를 선택할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="option1" />
                    <Label htmlFor="option1">옵션 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="option2" />
                    <Label htmlFor="option2">옵션 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="option3" />
                    <Label htmlFor="option3">옵션 3</Label>
                  </div>
                </RadioGroup>
                <p className="text-sm text-muted-foreground">
                  선택된 값: {selectedValue}
                </p>
              </div>
              <CodeBlock
                code={`import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
import { Label } from "./components/ui/label"

const [value, setValue] = useState("option1")

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">옵션 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">옵션 2</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option3" id="option3" />
    <Label htmlFor="option3">옵션 3</Label>
  </div>
</RadioGroup>`}
                codeKey="basic-radio-group"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>비활성화된 옵션</CardTitle>
              <CardDescription>
                일부 옵션을 비활성화하여 사용자가 선택할 수 없도록 할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup defaultValue="enabled1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enabled1" id="enabled1" />
                  <Label htmlFor="enabled1">활성화된 옵션 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled1" id="disabled1" disabled />
                  <Label htmlFor="disabled1" className="text-muted-foreground">비활성화된 옵션</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enabled2" id="enabled2" />
                  <Label htmlFor="enabled2">활성화된 옵션 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled2" id="disabled2" disabled />
                  <Label htmlFor="disabled2" className="text-muted-foreground">비활성화된 옵션 2</Label>
                </div>
              </RadioGroup>
              <CodeBlock
                code={`<RadioGroup defaultValue="enabled1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="enabled1" id="enabled1" />
    <Label htmlFor="enabled1">활성화된 옵션 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="disabled1" id="disabled1" disabled />
    <Label htmlFor="disabled1" className="text-muted-foreground">
      비활성화된 옵션
    </Label>
  </div>
</RadioGroup>`}
                codeKey="disabled-radio-group"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>설명이 포함된 라디오 그룹</CardTitle>
              <CardDescription>
                각 옵션에 대한 자세한 설명을 포함할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup defaultValue="basic">
                <div className="flex items-start space-x-3 space-y-0">
                  <RadioGroupItem value="basic" id="basic" className="mt-1" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="basic">기본 플랜</Label>
                    <p className="text-sm text-muted-foreground">
                      개인 사용자를 위한 기본 기능을 제공합니다. 월 10GB 저장 공간과 기본 지원이 포함됩니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <RadioGroupItem value="pro" id="pro" className="mt-1" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="pro">프로 플랜</Label>
                    <p className="text-sm text-muted-foreground">
                      전문가를 위한 고급 기능과 월 100GB 저장 공간, 우선 지원을 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="enterprise">엔터프라이즈 플랜</Label>
                    <p className="text-sm text-muted-foreground">
                      대기업을 위한 무제한 저장 공간과 24/7 전담 지원, 고급 보안 기능을 제공합니다.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>결제 방법 선택</CardTitle>
              <CardDescription>
                전자상거래나 결제 시스템에서 사용되는 결제 방법 선택 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base">결제 방법을 선택하세요</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="card">신용카드 / 체크카드</Label>
                        <p className="text-sm text-muted-foreground">Visa, MasterCard, 국내 카드</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="bank" id="bank" />
                    <div className="flex items-center space-x-3">
                      <Database className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="bank">계좌이체</Label>
                        <p className="text-sm text-muted-foreground">실시간 계좌이체</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="mobile" id="mobile" />
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="mobile">휴대폰 결제</Label>
                        <p className="text-sm text-muted-foreground">통신사 간편결제</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="kakaopay" id="kakaopay" />
                    <div className="flex items-center space-x-3">
                      <Wallet className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="kakaopay">간편결제</Label>
                        <p className="text-sm text-muted-foreground">카카오페이, 네이버페이, 토스</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>배송 옵션</CardTitle>
              <CardDescription>
                온라인 쇼핑몰에서 배송 방법을 선택하는 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base">배송 방법</Label>
                <RadioGroup value={shippingOption} onValueChange={setShippingOption}>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="standard" id="standard" />
                      <div className="flex items-center space-x-3">
                        <Truck className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <Label htmlFor="standard">일반 배송</Label>
                          <p className="text-sm text-muted-foreground">2-3일 소요</p>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">무료</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="express" id="express" />
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <Label htmlFor="express">빠른 배송</Label>
                          <p className="text-sm text-muted-foreground">1일 이내</p>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">+3,000원</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="same-day" id="same-day" />
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <Label htmlFor="same-day">당일 배송</Label>
                          <p className="text-sm text-muted-foreground">오늘 오후 6시까지</p>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">+5,000원</span>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <Label htmlFor="pickup">매장 픽업</Label>
                          <p className="text-sm text-muted-foreground">가까운 매장에서 직접 수령</p>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">무료</span>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>
                사용자의 알림 수신 방법을 설정하는 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base">알림 수신 방법</Label>
                <RadioGroup value={notificationPreference} onValueChange={setNotificationPreference}>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="all" id="all" />
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="all">모든 알림 받기</Label>
                        <p className="text-sm text-muted-foreground">이메일, 푸시, SMS 모두 수신</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="important" id="important" />
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="important">중요 알림만</Label>
                        <p className="text-sm text-muted-foreground">보안, 결제 관련 알림만 수신</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="email-only" id="email-only" />
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="email-only">이메일만</Label>
                        <p className="text-sm text-muted-foreground">이메일로만 알림 수신</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="none" id="none" />
                    <div className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <Label htmlFor="none">알림 받지 않기</Label>
                        <p className="text-sm text-muted-foreground">모든 알림 비활성화</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>디바이스 선택</CardTitle>
              <CardDescription>
                다양한 디바이스 중에서 선택하는 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base">주로 사용하는 디바이스</Label>
                <RadioGroup value={deviceType} onValueChange={setDeviceType} className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="smartphone" id="smartphone" />
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-8 h-8 text-muted-foreground" />
                      <div>
                        <Label htmlFor="smartphone">스마트폰</Label>
                        <p className="text-xs text-muted-foreground">iOS, Android</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="tablet" id="tablet" />
                    <div className="flex items-center space-x-3">
                      <Tablet className="w-8 h-8 text-muted-foreground" />
                      <div>
                        <Label htmlFor="tablet">태블릿</Label>
                        <p className="text-xs text-muted-foreground">iPad, Android</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="laptop" id="laptop" />
                    <div className="flex items-center space-x-3">
                      <Laptop className="w-8 h-8 text-muted-foreground" />
                      <div>
                        <Label htmlFor="laptop">노트북</Label>
                        <p className="text-xs text-muted-foreground">Windows, Mac</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="desktop" id="desktop" />
                    <div className="flex items-center space-x-3">
                      <Monitor className="w-8 h-8 text-muted-foreground" />
                      <div>
                        <Label htmlFor="desktop">데스크톱</Label>
                        <p className="text-xs text-muted-foreground">PC, iMac</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>구독 플랜</CardTitle>
              <CardDescription>
                SaaS 서비스의 구독 플랜을 선택하는 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label className="text-base">요금제 선택</Label>
                <RadioGroup value={planType} onValueChange={setPlanType}>
                  <div className="relative p-6 border rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <RadioGroupItem value="starter" id="starter" />
                      <div>
                        <Label htmlFor="starter" className="text-lg">스타터</Label>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold">무료</span>
                        </div>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                      <li>• 월 1,000개 요청</li>
                      <li>• 기본 지원</li>
                      <li>• 커뮤니티 액세스</li>
                    </ul>
                  </div>

                  <div className="relative p-6 border-2 border-primary rounded-lg">
                    <div className="absolute -top-3 left-4">
                      <Badge className="bg-primary text-primary-foreground">인기</Badge>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <RadioGroupItem value="pro" id="pro-plan" />
                      <div>
                        <Label htmlFor="pro-plan" className="text-lg">프로</Label>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold">₩29,000</span>
                          <span className="text-muted-foreground">/ 월</span>
                        </div>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                      <li>• 월 10,000개 요청</li>
                      <li>• 우선 지원</li>
                      <li>• 고급 분석</li>
                      <li>• API 액세스</li>
                    </ul>
                  </div>

                  <div className="relative p-6 border rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <RadioGroupItem value="enterprise" id="enterprise-plan" />
                      <div>
                        <Label htmlFor="enterprise-plan" className="text-lg">엔터프라이즈</Label>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold">₩99,000</span>
                          <span className="text-muted-foreground">/ 월</span>
                        </div>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                      <li>• 무제한 요청</li>
                      <li>• 24/7 전담 지원</li>
                      <li>• 커스텀 통합</li>
                      <li>• SLA 보장</li>
                    </ul>
                  </div>
                </RadioGroup>
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
                효과적인 RadioGroup 사용을 위한 모범 사례
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
                    <li>• 상호 배타적인 선택지에만 사용</li>
                    <li>• 명확하고 간결한 레이블 제공</li>
                    <li>• 논리적인 순서로 옵션 배치</li>
                    <li>• 기본값 설정으로 사용성 향상</li>
                    <li>• 필요시 옵션 설명 추가</li>
                    <li>• 일관된 스타일링 유지</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 다중 선택이 필요한 경우</li>
                    <li>• 옵션이 너무 많은 경우 (5개 이상)</li>
                    <li>• 모호하거나 중복되는 선택지</li>
                    <li>• 불필요한 기본값 설정</li>
                    <li>• 옵션 간 명확한 구분 부족</li>
                    <li>• 접근성 고려 없는 구현</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 RadioGroup을 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>그룹 진입/이탈</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">↑↓</kbd>
                      <span>옵션 간 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                      <span>옵션 선택</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Home/End</kbd>
                      <span>첫/마지막 옵션</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 그룹의 목적과 총 옵션 수 안내</li>
                    <li>• 현재 선택된 옵션 상태 알림</li>
                    <li>• 각 옵션의 역할과 설명 제공</li>
                    <li>• 필수 선택 여부 명시</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">ARIA 속성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code>role="radiogroup"</code> 그룹 역할 정의</li>
                    <li>• <code>aria-labelledby</code> 그룹 레이블 연결</li>
                    <li>• <code>aria-checked</code> 선택 상태 표시</li>
                    <li>• <code>aria-describedby</code> 추가 설명 연결</li>
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
                  <h5 className="font-medium mb-2 text-green-700">RadioGroup 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 상호 배타적 선택</li>
                    <li>• 2-5개의 옵션</li>
                    <li>• 명확한 선택지</li>
                    <li>• 설정 및 환경설정</li>
                    <li>• 폼 입력</li>
                    <li>• 필터링</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Checkbox:</strong> 다중 선택</li>
                    <li>• <strong>Select:</strong> 많은 옵션</li>
                    <li>• <strong>Toggle:</strong> 이진 선택</li>
                    <li>• <strong>Switch:</strong> 즉시 적용</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 다중 선택 필요</li>
                    <li>• 옵션이 너무 많음</li>
                    <li>• 즉시 액션 실행</li>
                    <li>• 단순 on/off 토글</li>
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
                RadioGroup 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">주요 컴포넌트</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">컴포넌트</th>
                        <th className="text-left p-2 font-medium">역할</th>
                        <th className="text-left p-2 font-medium">필수 여부</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">RadioGroup</td>
                        <td className="p-2">라디오 그룹 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">RadioGroupItem</td>
                        <td className="p-2">개별 라디오 버튼</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">Label</td>
                        <td className="p-2">옵션 레이블</td>
                        <td className="p-2">권장</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">RadioGroup 속성</h4>
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
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">선택된 값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">기본 선택 값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onValueChange</td>
                        <td className="p-2">(value: string) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">값 변경 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">비활성화 여부</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">required</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">필수 입력 여부</td>
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

              <div className="space-y-4">
                <h4 className="font-medium">RadioGroupItem 속성</h4>
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
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">옵션 값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">id</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">레이블 연결용 ID</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">비활성화 여부</td>
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
                code={`import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
import { Label } from "./components/ui/label"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  const [value, setValue] = useState("option1")

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">옵션 2</Label>
      </div>
    </RadioGroup>
  )
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="기본값 설정"
                code={`<RadioGroup defaultValue="default-option">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">옵션 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default-option" id="default-option" />
    <Label htmlFor="default-option">기본 선택</Label>
  </div>
</RadioGroup>`}
                codeKey="default-value"
              />

              <CodeBlock
                title="비활성화"
                code={`<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">활성화된 옵션</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" disabled />
    <Label htmlFor="option2" className="text-muted-foreground">
      비활성화된 옵션
    </Label>
  </div>
</RadioGroup>`}
                codeKey="disabled"
              />

              <CodeBlock
                title="설명이 포함된 옵션"
                code={`<RadioGroup defaultValue="basic">
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="basic" id="basic" className="mt-1" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="basic">기본 플랜</Label>
      <p className="text-sm text-muted-foreground">
        개인 사용자를 위한 기본 기능
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="pro" id="pro" className="mt-1" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="pro">프로 플랜</Label>
      <p className="text-sm text-muted-foreground">
        고급 기능과 우선 지원
      </p>
    </div>
  </div>
</RadioGroup>`}
                codeKey="with-description"
              />

              <CodeBlock
                title="그리드 레이아웃"
                code={`<RadioGroup 
  defaultValue="option1" 
  className="grid grid-cols-2 gap-4"
>
  <div className="flex items-center space-x-2 p-4 border rounded-lg">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">옵션 1</Label>
  </div>
  <div className="flex items-center space-x-2 p-4 border rounded-lg">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">옵션 2</Label>
  </div>
</RadioGroup>`}
                codeKey="grid-layout"
              />

              <CodeBlock
                title="폼 연동"
                code={`export function FormExample() {
  const [formData, setFormData] = useState({
    paymentMethod: 'card'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('선택된 결제 방법:', formData.paymentMethod)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Label>결제 방법</Label>
        <RadioGroup 
          value={formData.paymentMethod}
          onValueChange={(value) => 
            setFormData(prev => ({ ...prev, paymentMethod: value }))
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">신용카드</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank" id="bank" />
            <Label htmlFor="bank">계좌이체</Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit">제출</Button>
    </form>
  )
}`}
                codeKey="form-integration"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}