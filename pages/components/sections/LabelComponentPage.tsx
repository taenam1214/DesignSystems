import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Tag,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  ArrowRight,
  Users,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Calendar,
  Search,
  User,
  MapPin,
  CreditCard,
  MessageSquare,
  Star,
  Globe,
  Settings,
  Bell,
  Shield,
  Heart,
  Bookmark
} from 'lucide-react';

export function LabelComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

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
            <Tag className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Label</h1>
            <p className="text-muted-foreground">
              폼 필드와 UI 요소를 위한 접근 가능한 레이블 컴포넌트입니다. 다양한 크기, 상태, 스타일 옵션을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Type className="w-3 h-3" />
            폼 컴포넌트
          </Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">필수 표시</Badge>
          <Badge variant="outline">도움말 텍스트</Badge>
          <Badge variant="outline">에러 상태</Badge>
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
          {/* Basic Labels */}
          <Card>
            <CardHeader>
              <CardTitle>기본 라벨</CardTitle>
              <CardDescription>
                다양한 크기와 스타일의 기본 라벨 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">크기 변형</h4>
                  <div className="space-y-3">
                    <div>
                      <Label size="sm">작은 라벨 (Small)</Label>
                      <Input placeholder="작은 라벨 예제" className="mt-1" />
                    </div>
                    <div>
                      <Label size="default">기본 라벨 (Default)</Label>
                      <Input placeholder="기본 라벨 예제" className="mt-1" />
                    </div>
                    <div>
                      <Label size="lg">큰 라벨 (Large)</Label>
                      <Input placeholder="큰 라벨 예제" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">스타일 변형</h4>
                  <div className="space-y-3">
                    <div>
                      <Label variant="default">기본 스타일</Label>
                      <Input placeholder="기본 스타일" className="mt-1" />
                    </div>
                    <div>
                      <Label variant="muted">음소거 스타일</Label>
                      <Input placeholder="음소거 스타일" className="mt-1" />
                    </div>
                    <div>
                      <Label variant="success">성공 스타일</Label>
                      <Input placeholder="성공 스타일" className="mt-1" />
                    </div>
                    <div>
                      <Label variant="warning">경고 스타일</Label>
                      <Input placeholder="경고 스타일" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">상태 변형</h4>
                  <div className="space-y-3">
                    <div>
                      <Label required>필수 필드</Label>
                      <Input placeholder="필수 입력 필드" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        error 
                        errorMessage="이 필드는 필수입니다"
                      >
                        에러 상태
                      </Label>
                      <Input placeholder="에러가 있는 필드" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        helpText="사용자명은 3-20자 사이여야 합니다"
                      >
                        도움말 포함
                      </Label>
                      <Input placeholder="사용자명" className="mt-1" />
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 크기 변형
<Label size="sm">작은 라벨</Label>
<Label size="default">기본 라벨</Label>
<Label size="lg">큰 라벨</Label>

// 스타일 변형
<Label variant="default">기본 스타일</Label>
<Label variant="muted">음소거 스타일</Label>
<Label variant="success">성공 스타일</Label>
<Label variant="warning">경고 스타일</Label>

// 상태 변형
<Label required>필수 필드</Label>
<Label error errorMessage="에러 메시지">에러 상태</Label>
<Label helpText="도움말 텍스트">도움말 포함</Label>`}
                codeKey="basic-labels"
              />
            </CardContent>
          </Card>

          {/* Form Components */}
          <Card>
            <CardHeader>
              <CardTitle>폼 컴포넌트와 함께 사용</CardTitle>
              <CardDescription>
                다양한 폼 컴포넌트와 함께 사용하는 라벨 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" required>이메일 주소</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="your@email.com" 
                      className="mt-1" 
                    />
                  </div>

                  <div>
                    <Label 
                      htmlFor="password" 
                      required
                      helpText="최소 8자, 영문+숫자 조합"
                    >
                      비밀번호
                    </Label>
                    <div className="relative mt-1">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="비밀번호를 입력하세요"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">자기소개</Label>
                    <Textarea 
                      id="bio"
                      placeholder="자신을 소개해 주세요" 
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">국가 선택</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="국가를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kr">대한민국</SelectItem>
                        <SelectItem value="us">미국</SelectItem>
                        <SelectItem value="jp">일본</SelectItem>
                        <SelectItem value="cn">중국</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label 
                      htmlFor="terms" 
                      required
                      className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      이용약관에 동의합니다
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">알림 받기</Label>
                  </div>

                  <div>
                    <Label>선호하는 연락 방법</Label>
                    <RadioGroup defaultValue="email" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email">이메일</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone">전화</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sms" id="contact-sms" />
                        <Label htmlFor="contact-sms">SMS</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label 
                      variant="warning"
                      helpText="이 정보는 공개적으로 표시됩니다"
                    >
                      공개 프로필명
                    </Label>
                    <Input placeholder="표시될 이름" className="mt-1" />
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 입력 필드
<Label htmlFor="email" required>이메일 주소</Label>
<Input id="email" type="email" placeholder="your@email.com" />

// 도움말이 있는 필드
<Label 
  htmlFor="password" 
  required
  helpText="최소 8자, 영문+숫자 조합"
>
  비밀번호
</Label>
<Input id="password" type="password" />

// 체크박스와 함께
<Checkbox id="terms" />
<Label htmlFor="terms" required>이용약관에 동의합니다</Label>

// 라디오 그룹과 함께
<Label>선호하는 연락 방법</Label>
<RadioGroup defaultValue="email">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="email" id="contact-email" />
    <Label htmlFor="contact-email">이메일</Label>
  </div>
</RadioGroup>`}
                codeKey="form-components"
              />
            </CardContent>
          </Card>

          {/* Complex Forms */}
          <Card>
            <CardHeader>
              <CardTitle>복잡한 폼 예제</CardTitle>
              <CardDescription>
                실제 사용 사례에서의 라벨 활용 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    개인 정보
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" required>이름</Label>
                      <Input id="firstName" placeholder="홍길동" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" required>성</Label>
                      <Input id="lastName" placeholder="홍" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label 
                      htmlFor="birthDate" 
                      helpText="생년월일은 본인 인증에 사용됩니다"
                    >
                      생년월일
                    </Label>
                    <Input id="birthDate" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone" required>전화번호</Label>
                    <Input id="phone" placeholder="010-1234-5678" className="mt-1" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    주소 정보
                  </h4>
                  <div>
                    <Label htmlFor="address" required>주소</Label>
                    <Input id="address" placeholder="서울특별시 강남구..." className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" required>도시</Label>
                      <Input id="city" placeholder="서울" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" required>우편번호</Label>
                      <Input id="zipCode" placeholder="12345" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label 
                      htmlFor="specialInstructions"
                      variant="muted"
                      helpText="배송 시 특별한 요청사항이 있으면 입력해 주세요"
                    >
                      배송 요청사항
                    </Label>
                    <Textarea 
                      id="specialInstructions"
                      placeholder="예: 부재 시 경비실에 맡겨주세요" 
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium flex items-center gap-2 mb-4">
                  <Settings className="w-4 h-4" />
                  환경 설정
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="emailNotifications">이메일 알림</Label>
                      <Switch id="emailNotifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="smsNotifications">SMS 알림</Label>
                      <Switch id="smsNotifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pushNotifications">푸시 알림</Label>
                      <Switch id="pushNotifications" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>언어 설정</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="언어 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ko">한국어</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ja">日本語</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label 
                        variant="warning"
                        helpText="프로필 삭제 시 모든 데이터가 영구 삭제됩니다"
                      >
                        위험 구역
                      </Label>
                      <Button variant="destructive" className="mt-2 w-full">
                        프로필 삭제
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>라벨 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 라벨 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                      <Label htmlFor="good-example1" required>명확한 라벨 텍스트</Label>
                      <Input id="good-example1" placeholder="example@email.com" className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">✓ 구체적이고 이해하기 쉬운 라벨</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <Label 
                        htmlFor="good-example2" 
                        helpText="비밀번호는 8자 이상이어야 합니다"
                      >
                        비밀번호
                      </Label>
                      <Input id="good-example2" type="password" className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">✓ 유용한 도움말 텍스트 제공</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <Label htmlFor="good-example3" required>필수 필드 표시</Label>
                      <Input id="good-example3" className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">✓ 필수 필드에 별표(*) 표시</p>
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
                      <Label htmlFor="bad-example1">입력</Label>
                      <Input id="bad-example1" placeholder="여기에 입력" className="mt-1" />
                      <p className="text-xs text-red-600 mt-1">✗ 모호하고 불명확한 라벨</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <Input placeholder="이메일 주소" />
                      <p className="text-xs text-red-600 mt-1">✗ 라벨 없이 placeholder만 사용</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <Label htmlFor="bad-example3" variant="destructive">!!! 매우 중요한 필드 !!!</Label>
                      <Input id="bad-example3" className="mt-1" />
                      <p className="text-xs text-red-600 mt-1">✗ 과도한 강조나 감정적 표현</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>에러 처리 패턴</CardTitle>
              <CardDescription>
                폼 검증 오류를 효과적으로 표시하는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">검증 오류 예제</h4>
                  <div className="space-y-4">
                    <div>
                      <Label 
                        htmlFor="error-email"
                        required
                        error
                        errorMessage="유효한 이메일 주소를 입력해 주세요"
                      >
                        이메일 주소
                      </Label>
                      <Input 
                        id="error-email"
                        type="email" 
                        defaultValue="invalid-email"
                        className="mt-1 border-destructive" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="error-password"
                        required
                        error
                        errorMessage="비밀번호는 최소 8자 이상이어야 합니다"
                      >
                        비밀번호
                      </Label>
                      <Input 
                        id="error-password"
                        type="password" 
                        defaultValue="123"
                        className="mt-1 border-destructive" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="error-required"
                        required
                        error
                        errorMessage="이 필드는 필수입니다"
                      >
                        필수 필드
                      </Label>
                      <Input 
                        id="error-required"
                        className="mt-1 border-destructive" 
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">성공 상태 예제</h4>
                  <div className="space-y-4">
                    <div>
                      <Label 
                        htmlFor="success-email"
                        variant="success"
                        helpText="이메일 주소가 확인되었습니다"
                      >
                        이메일 주소
                      </Label>
                      <Input 
                        id="success-email"
                        type="email" 
                        defaultValue="user@example.com"
                        className="mt-1 border-green-500" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="success-username"
                        variant="success"
                        helpText="사용 가능한 사용자명입니다"
                      >
                        사용자명
                      </Label>
                      <Input 
                        id="success-username"
                        defaultValue="cooluser123"
                        className="mt-1 border-green-500" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="success-password"
                        variant="success"
                        helpText="강력한 비밀번호입니다"
                      >
                        비밀번호
                      </Label>
                      <Input 
                        id="success-password"
                        type="password" 
                        defaultValue="SecurePassword123!"
                        className="mt-1 border-green-500" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 에러 상태
<Label 
  htmlFor="email"
  required
  error
  errorMessage="유효한 이메일 주소를 입력해 주세요"
>
  이메일 주소
</Label>
<Input 
  id="email"
  className="border-destructive" 
  defaultValue="invalid-email"
/>

// 성공 상태
<Label 
  htmlFor="username"
  variant="success"
  helpText="사용 가능한 사용자명입니다"
>
  사용자명
</Label>
<Input 
  id="username"
  className="border-green-500" 
  defaultValue="cooluser123"
/>`}
                codeKey="error-patterns"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>국제화 및 다국어 지원</CardTitle>
              <CardDescription>
                다국어 환경에서의 라벨 사용 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">한국어</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="ko-name" required>성명</Label>
                      <Input id="ko-name" placeholder="홍길동" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        htmlFor="ko-phone"
                        helpText="휴대폰 번호를 입력해 주세요"
                      >
                        전화번호
                      </Label>
                      <Input id="ko-phone" placeholder="010-1234-5678" className="mt-1" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">English</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="en-name" required>Full Name</Label>
                      <Input id="en-name" placeholder="John Doe" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        htmlFor="en-phone"
                        helpText="Please enter your phone number"
                      >
                        Phone Number
                      </Label>
                      <Input id="en-phone" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">日本語</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="jp-name" required>氏名</Label>
                      <Input id="jp-name" placeholder="田中太郎" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        htmlFor="jp-phone"
                        helpText="電話番号を入力してください"
                      >
                        電話番号
                      </Label>
                      <Input id="jp-phone" placeholder="090-1234-5678" className="mt-1" />
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
                효과적인 Label 사용을 위한 모범 사례
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
                    <li>• 명확하고 구체적인 라벨 텍스트 사용</li>
                    <li>• 필수 필드에는 required 속성 활용</li>
                    <li>• 도움말 텍스트로 추가 정보 제공</li>
                    <li>• htmlFor로 폼 컨트롤과 연결</li>
                    <li>• 일관된 라벨 크기와 스타일 유지</li>
                    <li>• 에러 메시지는 구체적이고 실행 가능하게</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 모호하거나 기술적인 용어 사용</li>
                    <li>• placeholder만으로 라벨 대체</li>
                    <li>• 과도한 강조나 감정적 표현</li>
                    <li>• 불필요하게 긴 라벨 텍스트</li>
                    <li>• 일관성 없는 스타일 적용</li>
                    <li>• 접근성 속성 누락</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Label을 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• htmlFor 속성으로 연관된 컨트롤 명시</li>
                    <li>• aria-label 또는 aria-labelledby 활용</li>
                    <li>• 필수 필드는 aria-required 속성 추가</li>
                    <li>• 에러 상태는 aria-invalid 및 aria-describedby</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 확보 (4.5:1 이상)</li>
                    <li>• 색상에만 의존하지 않는 정보 전달</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 적절한 폰트 크기와 간격</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 라벨 클릭 시 연관된 컨트롤로 포커스 이동</li>
                    <li>• 논리적인 탭 순서 구성</li>
                    <li>• 체크박스나 라디오 버튼과의 올바른 연결</li>
                    <li>• 에러 필드로의 직접 탐색 지원</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Label 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 폼 입력 필드</li>
                    <li>• 체크박스/라디오</li>
                    <li>• 스위치 컨트롤</li>
                    <li>• 선택 드롭다운</li>
                    <li>• 텍스트 영역</li>
                    <li>• 슬라이더</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 표현</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Heading:</strong> 섹션 제목</li>
                    <li>• <strong>Caption:</strong> 이미지 설명</li>
                    <li>• <strong>Text:</strong> 일반 텍스트</li>
                    <li>• <strong>Tooltip:</strong> 도움말 팝업</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 단순 텍스트 표시</li>
                    <li>• 제목이나 헤딩</li>
                    <li>• 장식적 텍스트</li>
                    <li>• 연관 컨트롤 없는 경우</li>
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
                Label 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Props</h4>
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
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">"sm" | "default" | "lg"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">라벨의 크기</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">variant</td>
                        <td className="p-2">"default" | "muted" | "destructive" | "success" | "warning"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">라벨의 스타일 변형</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">required</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">필수 필드 표시 (별표)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">error</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">에러 상태 표시</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">helpText</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">도움말 텍스트</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">errorMessage</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">에러 메시지</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">htmlFor</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">연관된 폼 컨트롤 ID</td>
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
                code={`import { Label } from "./components/ui/label"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 라벨
<Label htmlFor="email">이메일 주소</Label>
<Input id="email" type="email" />

// 필수 필드
<Label htmlFor="password" required>비밀번호</Label>
<Input id="password" type="password" />

// 도움말 포함
<Label 
  htmlFor="username"
  helpText="3-20자의 영문, 숫자 조합"
>
  사용자명
</Label>
<Input id="username" />

// 에러 상태
<Label 
  htmlFor="confirmPassword"
  required
  error
  errorMessage="비밀번호가 일치하지 않습니다"
>
  비밀번호 확인
</Label>
<Input id="confirmPassword" type="password" />`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="크기 변형"
                code={`<Label size="sm">작은 라벨</Label>
<Label size="default">기본 라벨</Label>
<Label size="lg">큰 라벨</Label>`}
                codeKey="size-variants"
              />

              <CodeBlock
                title="스타일 변형"
                code={`<Label variant="default">기본 스타일</Label>
<Label variant="muted">음소거 스타일</Label>
<Label variant="success">성공 스타일</Label>
<Label variant="warning">경고 스타일</Label>
<Label variant="destructive">오류 스타일</Label>`}
                codeKey="style-variants"
              />

              <CodeBlock
                title="체크박스와 함께 사용"
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" required>
    이용약관에 동의합니다
  </Label>
</div>`}
                codeKey="checkbox-usage"
              />

              <CodeBlock
                title="라디오 그룹과 함께 사용"
                code={`<Label>선호하는 연락 방법</Label>
<RadioGroup defaultValue="email">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="email" id="contact-email" />
    <Label htmlFor="contact-email">이메일</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="phone" id="contact-phone" />
    <Label htmlFor="contact-phone">전화</Label>
  </div>
</RadioGroup>`}
                codeKey="radio-usage"
              />

              <CodeBlock
                title="폼 검증과 함께"
                code={`const [errors, setErrors] = useState({});

<Label 
  htmlFor="email"
  required
  error={!!errors.email}
  errorMessage={errors.email}
>
  이메일 주소
</Label>
<Input 
  id="email"
  type="email"
  className={errors.email ? "border-destructive" : ""}
/>`}
                codeKey="form-validation"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}