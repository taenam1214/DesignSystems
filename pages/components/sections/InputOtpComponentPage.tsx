import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../ui/input-otp';
import { 
  KeyRound,
  Users,
  Check,
  Clipboard,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  Eye,
  EyeOff,
  User,
  MapPin,
  Building,
  Calendar,
  ExternalLink,
  Star,
  MessageSquare,
  Heart,
  GitBranch,
  Clock,
  Mail,
  Phone,
  Globe,
  Settings,
  BookOpen,
  Camera,
  Bookmark,
  Award,
  TrendingUp,
  Shield,
  Lock,
  Smartphone,
  MessageCircle,
  CreditCard,
  UserCheck,
  AlertTriangle,
  Zap,
  Timer
} from 'lucide-react';
import { useState } from 'react';
import { Label } from '../ui/label';

export function InputOtpComponentPage() {
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
  const BasicOTPExample = () => {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <Label htmlFor="basic-otp">인증번호 입력</Label>
        <InputOTP
          id="basic-otp"
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          입력된 값: {value || "없음"}
        </p>
      </div>
    );
  };

  const SeparatedOTPExample = () => {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <Label htmlFor="separated-otp">전화번호 인증</Label>
        <InputOTP
          id="separated-otp"
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          {value.length > 0 && `${value.length}/6 자리 입력됨`}
        </p>
      </div>
    );
  };

  const LoginOTPExample = () => {
    const [otpValue, setOtpValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const handleSubmit = async () => {
      if (otpValue.length === 6) {
        setIsLoading(true);
        // 시뮬레이션: 2초 후 인증 완료
        setTimeout(() => {
          setIsLoading(false);
          setIsVerified(true);
        }, 2000);
      }
    };

    const handleResend = () => {
      setOtpValue("");
      setIsVerified(false);
      // 재전송 로직
    };

    return (
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold">2단계 인증</h3>
          <p className="text-sm text-muted-foreground">
            +82 ***-****-1234로 전송된<br />
            6자리 인증번호를 입력해주세요
          </p>
        </div>

        <div className="space-y-4">
          <InputOTP
            maxLength={6}
            value={otpValue}
            onChange={(value) => setOtpValue(value)}
            disabled={isVerified}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          {isVerified ? (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <CheckCircle2 className="w-4 h-4" />
              인증이 완료되었습니다
            </div>
          ) : (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                코드를 받지 못하셨나요?
              </span>
              <Button variant="link" size="sm" onClick={handleResend}>
                재전송
              </Button>
            </div>
          )}

          <Button 
            className="w-full" 
            onClick={handleSubmit}
            disabled={otpValue.length !== 6 || isLoading || isVerified}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                인증 중...
              </div>
            ) : isVerified ? (
              "인증 완료"
            ) : (
              "인증하기"
            )}
          </Button>
        </div>
      </div>
    );
  };

  const PaymentOTPExample = () => {
    const [step, setStep] = useState(1); // 1: 결제정보, 2: OTP 입력, 3: 완료
    const [otpValue, setOtpValue] = useState("");

    const handlePayment = () => {
      setStep(2);
    };

    const handleOTPSubmit = () => {
      if (otpValue.length === 6) {
        setStep(3);
      }
    };

    const resetFlow = () => {
      setStep(1);
      setOtpValue("");
    };

    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              안전한 결제
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>상품명</span>
                    <span>프리미엄 플랜</span>
                  </div>
                  <div className="flex justify-between">
                    <span>결제금액</span>
                    <span className="font-semibold">₩29,900</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  결제를 진행하려면 OTP 인증이 필요합니다.
                </div>
                <Button className="w-full" onClick={handlePayment}>
                  결제하기
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="mx-auto w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    OTP 앱에서 생성된 6자리 번호를 입력해주세요
                  </p>
                </div>

                <InputOTP
                  maxLength={6}
                  value={otpValue}
                  onChange={(value) => setOtpValue(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={resetFlow} className="flex-1">
                    취소
                  </Button>
                  <Button 
                    onClick={handleOTPSubmit}
                    disabled={otpValue.length !== 6}
                    className="flex-1"
                  >
                    확인
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">결제가 완료되었습니다</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    이용해 주셔서 감사합니다.
                  </p>
                </div>
                <Button variant="outline" onClick={resetFlow} className="w-full">
                  새로운 결제
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const AccountRecoveryExample = () => {
    const [email, setEmail] = useState("user@example.com");
    const [otpSent, setOtpSent] = useState(false);
    const [otpValue, setOtpValue] = useState("");
    const [timeLeft, setTimeLeft] = useState(300); // 5분

    React.useEffect(() => {
      if (otpSent && timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      }
    }, [otpSent, timeLeft]);

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSendOTP = () => {
      setOtpSent(true);
      setTimeLeft(300);
    };

    const handleVerify = () => {
      if (otpValue.length === 6) {
        // 인증 로직
        alert("계정 복구가 완료되었습니다!");
      }
    };

    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <UserCheck className="w-5 h-5" />
              계정 복구
            </CardTitle>
            <CardDescription>
              등록된 이메일로 인증번호를 전송합니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!otpSent ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>이메일 주소</Label>
                  <div className="p-3 bg-muted/50 rounded-md">
                    {email}
                  </div>
                </div>
                <Button onClick={handleSendOTP} className="w-full">
                  인증번호 전송
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="mx-auto w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {email}로 전송된<br />
                    6자리 인증번호를 입력해주세요
                  </p>
                </div>

                <InputOTP
                  maxLength={6}
                  value={otpValue}
                  onChange={(value) => setOtpValue(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>

                {timeLeft > 0 ? (
                  <div className="text-center text-sm text-muted-foreground">
                    <Timer className="w-4 h-4 inline mr-1" />
                    남은 시간: {formatTime(timeLeft)}
                  </div>
                ) : (
                  <div className="text-center">
                    <Button variant="link" onClick={handleSendOTP}>
                      인증번호 재전송
                    </Button>
                  </div>
                )}

                <Button 
                  onClick={handleVerify}
                  disabled={otpValue.length !== 6}
                  className="w-full"
                >
                  계정 복구
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const examples = [
    {
      title: '기본 OTP 입력',
      description: '6자리 인증번호를 입력하는 기본 OTP 컴포넌트입니다.',
      component: <BasicOTPExample />,
      code: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "./components/ui/input-otp"
import { Label } from "./components/ui/label"
import { useState } from "react"

export function BasicOTPExample() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-4">
      <Label htmlFor="basic-otp">인증번호 입력</Label>
      <InputOTP
        id="basic-otp"
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        입력된 값: {value || "없음"}
      </p>
    </div>
  )
}`
    },
    {
      title: '분리된 OTP 입력',
      description: '구분자를 사용하여 그룹으로 나누어진 OTP 입력 필드입니다.',
      component: <SeparatedOTPExample />,
      code: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./components/ui/input-otp"
import { Label } from "./components/ui/label"
import { useState } from "react"

export function SeparatedOTPExample() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-4">
      <Label htmlFor="separated-otp">전화번호 인증</Label>
      <InputOTP
        id="separated-otp"
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        {value.length > 0 && \`\${value.length}/6 자리 입력됨\`}
      </p>
    </div>
  )
}`
    },
    {
      title: '2단계 인증 로그인',
      description: '로그인 과정에서 사용되는 완전한 2단계 인증 플로우입니다.',
      component: <LoginOTPExample />,
      code: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "./components/ui/input-otp"
import { Button } from "./components/ui/button"
import { Shield, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export function LoginOTPExample() {
  const [otpValue, setOtpValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const handleSubmit = async () => {
    if (otpValue.length === 6) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setIsVerified(true)
      }, 2000)
    }
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold">2단계 인증</h3>
        <p className="text-sm text-muted-foreground">
          전송된 6자리 인증번호를 입력해주세요
        </p>
      </div>

      <InputOTP
        maxLength={6}
        value={otpValue}
        onChange={(value) => setOtpValue(value)}
        disabled={isVerified}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <Button 
        className="w-full" 
        onClick={handleSubmit}
        disabled={otpValue.length !== 6 || isLoading || isVerified}
      >
        {isLoading ? "인증 중..." : isVerified ? "인증 완료" : "인증하기"}
      </Button>
    </div>
  )
}`
    },
    {
      title: '결제 인증',
      description: '결제 과정에서 보안 인증을 위한 OTP 입력 플로우입니다.',
      component: <PaymentOTPExample />,
      code: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./components/ui/input-otp"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { CreditCard, Smartphone, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export function PaymentOTPExample() {
  const [step, setStep] = useState(1)
  const [otpValue, setOtpValue] = useState("")

  const handlePayment = () => setStep(2)
  
  const handleOTPSubmit = () => {
    if (otpValue.length === 6) setStep(3)
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <CreditCard className="w-5 h-5" />
          안전한 결제
        </CardTitle>
      </CardHeader>
      <CardContent>
        {step === 2 && (
          <div className="space-y-4">
            <div className="text-center">
              <Smartphone className="w-10 h-10 mx-auto text-blue-600" />
              <p className="text-sm text-muted-foreground mt-2">
                OTP 앱에서 생성된 6자리 번호를 입력해주세요
              </p>
            </div>
            
            <InputOTP
              maxLength={6}
              value={otpValue}
              onChange={(value) => setOtpValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            
            <Button 
              onClick={handleOTPSubmit}
              disabled={otpValue.length !== 6}
              className="w-full"
            >
              확인
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}`
    },
    {
      title: '계정 복구',
      description: '계정 복구 과정에서 이메일 인증을 위한 OTP 입력입니다.',
      component: <AccountRecoveryExample />,
      code: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "./components/ui/input-otp"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Label } from "./components/ui/label"
import { UserCheck, Mail, Timer } from "lucide-react"
import { useState, useEffect } from "react"

export function AccountRecoveryExample() {
  const [email] = useState("user@example.com")
  const [otpSent, setOtpSent] = useState(false)
  const [otpValue, setOtpValue] = useState("")
  const [timeLeft, setTimeLeft] = useState(300)

  useEffect(() => {
    if (otpSent && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [otpSent, timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <UserCheck className="w-5 h-5" />
          계정 복구
        </CardTitle>
      </CardHeader>
      <CardContent>
        {otpSent && (
          <div className="space-y-4">
            <InputOTP
              maxLength={6}
              value={otpValue}
              onChange={(value) => setOtpValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            
            {timeLeft > 0 && (
              <div className="text-center text-sm text-muted-foreground">
                <Timer className="w-4 h-4 inline mr-1" />
                남은 시간: {formatTime(timeLeft)}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}`
    }
  ];

  const components = [
    {
      name: 'InputOTP',
      description: 'OTP 입력의 루트 컨테이너',
      usage: 'OTP 입력 전체를 감싸는 메인 컴포넌트'
    },
    {
      name: 'InputOTPGroup',
      description: 'OTP 슬롯들을 그룹화하는 컨테이너',
      usage: '관련된 입력 슬롯들을 묶어서 관리'
    },
    {
      name: 'InputOTPSlot',
      description: '개별 문자를 입력받는 슬롯',
      usage: '각 자리수의 문자를 입력받는 개별 필드'
    },
    {
      name: 'InputOTPSeparator',
      description: '그룹 간 구분선을 표시',
      usage: 'OTP 그룹 사이의 시각적 구분을 제공'
    }
  ];

  const features = [
    {
      title: '접근성 최적화',
      description: 'ARIA 속성과 키보드 네비게이션을 완벽하게 지원합니다.',
      icon: '♿'
    },
    {
      title: '부드러운 포커스',
      description: '자동 포커스 이동과 시각적 피드백을 제공합니다.',
      icon: '✨'
    },
    {
      title: '보안 중심',
      description: '민감한 인증 정보 입력에 최적화된 보안 기능을 제공합니다.',
      icon: '🔒'
    },
    {
      title: '유연한 구성',
      description: '다양한 길이와 그룹화 옵션을 지원합니다.',
      icon: '🎨'
    },
    {
      title: '실시간 검증',
      description: '입력과 동시에 유효성 검사를 수행합니다.',
      icon: '⚡'
    },
    {
      title: '반응형 디자인',
      description: '모든 화면 크기에서 완벽하게 작동합니다.',
      icon: '📱'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <KeyRound className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Input OTP</h1>
            <p className="text-muted-foreground">
              One-Time Password (OTP) 입력을 위한 전용 컴포넌트입니다. 
              2단계 인증, 이메일 인증, 결제 보안 등 다양한 보안 인증 시나리오에서 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <KeyRound className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">보안</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">자동 포커스</Badge>
          <Badge variant="outline">Input OTP</Badge>
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
                <div className="p-8 border rounded-lg bg-background min-h-[120px] flex items-center justify-center">
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
                Input OTP를 구성하는 주요 컴포넌트들입니다.
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
              <CardTitle>입력 상태</CardTitle>
              <CardDescription>
                Input OTP의 다양한 입력 상태를 보여주는 시각적 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    기본 상태
                  </h5>
                  <div className="space-y-2">
                    <InputOTP maxLength={6} value="">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-sm text-muted-foreground">비어있는 상태의 OTP 입력 필드</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-600" />
                    입력 중 상태
                  </h5>
                  <div className="space-y-2">
                    <InputOTP maxLength={6} value="123">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-sm text-muted-foreground">부분적으로 입력된 상태</p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    완료 상태
                  </h5>
                  <div className="space-y-2">
                    <InputOTP maxLength={6} value="123456">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-sm text-muted-foreground">모든 자리가 입력된 완료 상태</p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    비활성 상태
                  </h5>
                  <div className="space-y-2">
                    <InputOTP maxLength={6} value="123456" disabled>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-sm text-muted-foreground">비활성화된 상태</p>
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
                Input OTP를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 2단계 인증 (2FA)</li>
                      <li>• 이메일/SMS 인증</li>
                      <li>• 결제 보안 인증</li>
                      <li>• 계정 복구 인증</li>
                      <li>• 민감한 작업 확인</li>
                      <li>• 디바이스 등록 인증</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 적절한 자릿수 설정</li>
                      <li>• 만료 시간 표시</li>
                      <li>• 재전송 기능 제공</li>
                      <li>• 에러 처리 방식</li>
                      <li>• 접근성 고려사항</li>
                      <li>• 보안 요구사항</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 일반적인 숫자 입력</li>
                      <li>• 긴 텍스트 입력</li>
                      <li>• 실시간 검색</li>
                      <li>• 단순한 확인 코드</li>
                      <li>• 영구적인 비밀번호</li>
                      <li>• 자주 변경되는 값</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">보안 가이드라인</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 보안 모범 사례</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">강력한 보안</div>
                        <div>• 적절한 만료 시간 설정</div>
                        <div>• 재시도 횟수 제한</div>
                        <div>• 브루트 포스 공격 방지</div>
                        <div className="font-medium mt-3">사용자 경험</div>
                        <div>• 명확한 안내 메시지</div>
                        <div>• 자동 포커스 이동</div>
                        <div>• 붙여넣기 지원</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 보안 위험 요소</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">취약한 구현</div>
                        <div>• 너무 긴 만료 시간</div>
                        <div>• 무제한 재시도</div>
                        <div>• 예측 가능한 패턴</div>
                        <div className="font-medium mt-3">UX 문제</div>
                        <div>• 불명확한 피드백</div>
                        <div>• 복잡한 입력 과정</div>
                        <div>• 접근성 무시</div>
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
                Input OTP의 접근성 기능과 고려사항입니다.
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
                    <span>다음 슬롯으로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift + Tab</kbd>
                    <span>이전 슬롯으로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">←→</kbd>
                    <span>슬롯 간 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Backspace</kbd>
                    <span>이전 슬롯 삭제</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Delete</kbd>
                    <span>현재 슬롯 삭제</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Ctrl + V</kbd>
                    <span>전체 코드 붙여넣기</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>aria-label:</strong> 각 슬롯의 목적과 위치 설명</li>
                  <li>• <strong>aria-describedby:</strong> 전체 OTP 입력 설명과 연결</li>
                  <li>• <strong>role:</strong> 적절한 입력 역할 정의</li>
                  <li>• <strong>aria-invalid:</strong> 유효성 검사 상태 알림</li>
                  <li>• <strong>aria-live:</strong> 실시간 상태 변경 알림</li>
                  <li>• <strong>포커스 관리:</strong> 논리적인 포커스 순서</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <MonitorSpeaker className="w-4 h-4" />
                  시각적 및 모션 고려사항
                </h4>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">시각적 피드백</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 명확한 포커스 표시</li>
                      <li>• 충분한 색상 대비</li>
                      <li>• 깜빡이는 커서 표시</li>
                    </ul>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">모션 및 애니메이션</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 부드러운 포커스 전환</li>
                      <li>• prefers-reduced-motion 지원</li>
                      <li>• 적절한 애니메이션 지속시간</li>
                    </ul>
                  </div>
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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./components/ui/input-otp"`}
                codeKey="import"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기본 사용법</CardTitle>
              <CardDescription>
                Input OTP의 기본적인 사용 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="기본 구조"
                code={`<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
                codeKey="basic"
              />

              <CodeBlock
                title="그룹화된 구조"
                code={`<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
                codeKey="grouped"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>고급 사용법</CardTitle>
              <CardDescription>
                복잡한 인증 플로우를 위한 고급 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="유효성 검사와 상태 관리"
                code={`function OTPWithValidation() {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (newValue: string) => {
    setValue(newValue)
    setIsValid(true) // 입력 시 에러 상태 초기화
  }

  const handleSubmit = async () => {
    if (value.length === 6) {
      setIsLoading(true)
      try {
        await verifyOTP(value)
        // 성공 처리
      } catch (error) {
        setIsValid(false)
        setValue("") // 에러 시 입력 초기화
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="space-y-4">
      <InputOTP 
        maxLength={6} 
        value={value} 
        onChange={handleChange}
        aria-invalid={!isValid}
        disabled={isLoading}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      
      {!isValid && (
        <p className="text-sm text-destructive">
          잘못된 인증번호입니다. 다시 시도해주세요.
        </p>
      )}
      
      <Button 
        onClick={handleSubmit}
        disabled={value.length !== 6 || isLoading}
        className="w-full"
      >
        {isLoading ? "인증 중..." : "인증하기"}
      </Button>
    </div>
  )
}`}
                codeKey="validation"
              />

              <CodeBlock
                title="자동 제출 및 타이머"
                code={`function OTPWithAutoSubmit() {
  const [value, setValue] = useState("")
  const [timeLeft, setTimeLeft] = useState(300) // 5분
  const [canResend, setCanResend] = useState(false)

  // 타이머 관리
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  // 6자리 입력 완료시 자동 제출
  useEffect(() => {
    if (value.length === 6) {
      handleAutoSubmit(value)
    }
  }, [value])

  const handleAutoSubmit = async (otpValue: string) => {
    try {
      await verifyOTP(otpValue)
      // 성공 처리
    } catch (error) {
      setValue("") // 실패시 초기화
    }
  }

  const handleResend = () => {
    setTimeLeft(300)
    setCanResend(false)
    setValue("")
    // 재전송 로직
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`
  }

  return (
    <div className="space-y-4">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      
      <div className="text-center text-sm text-muted-foreground">
        {timeLeft > 0 ? (
          \`남은 시간: \${formatTime(timeLeft)}\`
        ) : (
          <Button variant="link" onClick={handleResend}>
            인증번호 재전송
          </Button>
        )}
      </div>
    </div>
  )
}`}
                codeKey="auto-submit"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API 레퍼런스</CardTitle>
              <CardDescription>
                Input OTP 컴포넌트의 주요 속성들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">InputOTP</h5>
                  <div className="text-sm space-y-1">
                    <div><code>maxLength: number</code> - OTP 최대 자릿수</div>
                    <div><code>value: string</code> - 현재 입력된 값</div>
                    <div><code>onChange: (value: string) =&gt; void</code> - 값 변경 콜백</div>
                    <div><code>disabled?: boolean</code> - 비활성화 상태</div>
                    <div><code>containerClassName?: string</code> - 컨테이너 스타일</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">InputOTPSlot</h5>
                  <div className="text-sm space-y-1">
                    <div><code>index: number</code> - 슬롯의 인덱스 (0부터 시작)</div>
                    <div><code>className?: string</code> - 추가 CSS 클래스</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">InputOTPGroup</h5>
                  <div className="text-sm space-y-1">
                    <div><code>className?: string</code> - 그룹 컨테이너 스타일</div>
                    <div><code>children: ReactNode</code> - InputOTPSlot 컴포넌트들</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">InputOTPSeparator</h5>
                  <div className="text-sm space-y-1">
                    <div><code>className?: string</code> - 구분자 스타일</div>
                    <div>그룹 간 시각적 구분을 위한 컴포넌트</div>
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
            <KeyRound className="w-5 h-5" />
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