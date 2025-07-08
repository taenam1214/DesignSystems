import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { 
  Search, 
  Mail, 
  Eye, 
  EyeOff, 
  User, 
  Lock, 
  Calendar, 
  DollarSign, 
  AlertCircle, 
  CheckCircle,
  Type,
  Copy,
  Check,
  Palette,
  Accessibility,
  Keyboard
} from 'lucide-react';
import { useState } from 'react';

export function InputComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
    if (value.length > 0) {
      setIsValidEmail(validateEmail(value));
    } else {
      setIsValidEmail(null);
    }
  };

  const examples = [
    {
      title: '기본 텍스트 입력',
      description: '일반적인 데이터 입력 시나리오를 위한 라벨이 포함된 표준 텍스트 입력입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullname">이름</Label>
            <Input id="fullname" placeholder="이름을 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">회사명</Label>
            <Input id="company" placeholder="회사명을 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">전화번호</Label>
            <Input id="phone" type="tel" placeholder="010-1234-5678" />
          </div>
        </div>
      ),
      code: `import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

<div className="space-y-2">
  <Label htmlFor="fullname">이름</Label>
  <Input id="fullname" placeholder="이름을 입력하세요" />
</div>

<div className="space-y-2">
  <Label htmlFor="phone">전화번호</Label>
  <Input id="phone" type="tel" placeholder="010-1234-5678" />
</div>`
    },
    {
      title: '아이콘이 포함된 입력',
      description: '시각적 맥락을 제공하고 사용성을 향상시키는 선행 아이콘이 있는 향상된 입력입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">검색</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="search" className="pl-10" placeholder="파일, 사람, 또는 콘텐츠 검색..." />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">이메일 주소</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="email" className="pl-10" type="email" placeholder="name@company.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">사용자명</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="username" className="pl-10" placeholder="사용자명을 선택하세요" />
            </div>
          </div>
        </div>
      ),
      code: `<div className="space-y-2">
  <Label htmlFor="search">검색</Label>
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <Input id="search" className="pl-10" placeholder="파일 검색..." />
  </div>
</div>`
    },
    {
      title: '토글 기능이 있는 비밀번호 입력',
      description: '더 나은 사용자 경험을 위한 가시성 토글이 있는 보안 비밀번호 입력입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                id="password" 
                className="pl-10 pr-10" 
                type={showPassword ? "text" : "password"} 
                placeholder="보안 비밀번호를 생성하세요" 
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              최소 8자 이상이며 문자, 숫자, 기호를 포함해야 합니다
            </p>
          </div>
        </div>
      ),
      code: `import { useState } from "react";

const [showPassword, setShowPassword] = useState(false);

<div className="space-y-2">
  <Label htmlFor="password">비밀번호</Label>
  <div className="relative">
    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <Input 
      id="password" 
      className="pl-10 pr-10" 
      type={showPassword ? "text" : "password"} 
      placeholder="보안 비밀번호를 생성하세요" 
    />
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
    </Button>
  </div>
</div>`
    },
    {
      title: '입력 유효성 검사 상태',
      description: '사용자를 안내하고 오류를 방지하기 위한 유효성 검사 피드백이 있는 입력입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-validation">유효성 검사가 있는 이메일</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                id="email-validation" 
                className={`pl-10 pr-10 ${
                  isValidEmail === false ? 'border-red-300 focus:border-red-500 focus:ring-red-500' :
                  isValidEmail === true ? 'border-green-300 focus:border-green-500 focus:ring-green-500' : ''
                }`}
                type="email" 
                placeholder="이메일 주소를 입력하세요"
                value={emailValue}
                onChange={handleEmailChange}
              />
              {isValidEmail !== null && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {isValidEmail ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {isValidEmail === false && (
              <p className="text-sm text-red-600">올바른 이메일 주소를 입력해주세요</p>
            )}
            {isValidEmail === true && (
              <p className="text-sm text-green-600">이메일 주소가 올바릅니다!</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="required-field">필수 입력 필드</Label>
            <Input id="required-field" placeholder="이 필드는 필수입니다" required />
            <p className="text-sm text-muted-foreground">* 이 필드는 필수입니다</p>
          </div>
        </div>
      ),
      code: `const [emailValue, setEmailValue] = useState('');
const [isValidEmail, setIsValidEmail] = useState(null);

const validateEmail = (email) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
};

<div className="relative">
  <Input 
    className={\`pl-10 pr-10 \${
      isValidEmail === false ? 'border-red-300 focus:border-red-500' :
      isValidEmail === true ? 'border-green-300 focus:border-green-500' : ''
    }\`}
    value={emailValue}
    onChange={handleEmailChange}
  />
  {isValidEmail !== null && (
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
      {isValidEmail ? <CheckCircle /> : <AlertCircle />}
    </div>
  )}
</div>`
    },
    {
      title: '특수 입력 유형',
      description: '특정 데이터 형식과 사용 사례를 위한 다양한 입력 유형입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">생년월일</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="date" className="pl-10" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">금액</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="amount" className="pl-10" type="number" placeholder="0.00" step="0.01" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">웹사이트 URL</Label>
            <Input id="website" type="url" placeholder="https://example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">파일 업로드</Label>
            <Input 
              id="file" 
              type="file" 
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-muted hover:file:bg-muted/80" 
            />
          </div>
        </div>
      ),
      code: `<div className="space-y-2">
  <Label htmlFor="date">생년월일</Label>
  <div className="relative">
    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <Input id="date" className="pl-10" type="date" />
  </div>
</div>

<div className="space-y-2">
  <Label htmlFor="amount">금액</Label>
  <div className="relative">
    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <Input id="amount" className="pl-10" type="number" placeholder="0.00" step="0.01" />
  </div>
</div>`
    },
    {
      title: '비활성화 및 읽기 전용 상태',
      description: '입력 가용성과 상호작용 패턴을 전달하는 다양한 상태입니다.',
      component: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="disabled">비활성화된 입력</Label>
            <Input id="disabled" disabled placeholder="이 입력은 비활성화되었습니다" />
            <p className="text-sm text-muted-foreground">이 필드는 편집할 수 없습니다</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="readonly">읽기 전용 입력</Label>
            <Input id="readonly" readOnly value="이 값은 변경할 수 없습니다" />
            <p className="text-sm text-muted-foreground">이 필드는 읽기 전용입니다</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prefilled">미리 채워진 입력</Label>
            <Input id="prefilled" defaultValue="hong.gildong@company.com" />
            <p className="text-sm text-muted-foreground">이 필드에는 기본값이 있습니다</p>
          </div>
        </div>
      ),
      code: `<Input disabled placeholder="이 입력은 비활성화되었습니다" />

<Input readOnly value="이 값은 변경할 수 없습니다" />

<Input defaultValue="hong.gildong@company.com" />`
    }
  ];

  const features = [
    {
      title: '다양한 입력 유형',
      description: 'text, email, password, number 등 다양한 HTML 입력 유형 지원',
      icon: '📝'
    },
    {
      title: '유효성 검사 지원',
      description: '실시간 유효성 검사와 시각적 피드백으로 사용자 경험 향상',
      icon: '✅'
    },
    {
      title: '아이콘 통합',
      description: '좌우 아이콘을 쉽게 추가하여 입력 필드의 맥락 제공',
      icon: '🎨'
    },
    {
      title: '접근성 완벽 지원',
      description: 'Label과 함께 사용하여 스크린 리더 완벽 지원',
      icon: '♿'
    },
    {
      title: '키보드 네비게이션',
      description: 'Tab, Enter, Escape 키로 완벽한 키보드 탐색 지원',
      icon: '⌨️'
    },
    {
      title: '반응형 디자인',
      description: '모든 화면 크기에서 일관된 모양과 느낌 제공',
      icon: '📱'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Type className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Input</h1>
            <p className="text-muted-foreground">
              사용자가 텍스트와 기타 데이터를 입력할 수 있는 입력 필드입니다. 폼과 데이터 입력 인터페이스의 기본 구성 요소로, 명확한 피드백과 유효성 검사 상태를 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            6가지 예제
          </Badge>
          <Badge variant="outline">다양한 입력 유형</Badge>
          <Badge variant="outline">유효성 검사</Badge>
          <Badge variant="outline">아이콘 지원</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">유형 및 상태</TabsTrigger>
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
                {example.component}
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Variants & States Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>입력 유형</CardTitle>
              <CardDescription>
                다양한 데이터 유형에 맞는 HTML 입력 유형들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">텍스트 입력 유형</h4>
                  <div className="space-y-2 text-sm">
                    <div><code>type="text"</code> - 일반 텍스트 (기본값)</div>
                    <div><code>type="email"</code> - 이메일 주소</div>
                    <div><code>type="password"</code> - 비밀번호</div>
                    <div><code>type="search"</code> - 검색어</div>
                    <div><code>type="tel"</code> - 전화번호</div>
                    <div><code>type="url"</code> - 웹 주소</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">숫자 및 날짜 유형</h4>
                  <div className="space-y-2 text-sm">
                    <div><code>type="number"</code> - 숫자</div>
                    <div><code>type="date"</code> - 날짜</div>
                    <div><code>type="time"</code> - 시간</div>
                    <div><code>type="datetime-local"</code> - 날짜와 시간</div>
                    <div><code>type="file"</code> - 파일 선택</div>
                    <div><code>type="range"</code> - 범위 슬라이더</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>입력 상태</CardTitle>
              <CardDescription>
                입력 필드의 다양한 상태와 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    활성 상태
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <Label>기본 상태</Label>
                      <Input placeholder="입력 가능한 상태" />
                    </div>
                    <div>
                      <Label>포커스 상태</Label>
                      <Input placeholder="포커스된 상태" className="ring-2 ring-ring" />
                    </div>
                    <div>
                      <Label>값이 입력된 상태</Label>
                      <Input value="입력된 텍스트" readOnly />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    제한된 상태
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <Label>비활성화 상태</Label>
                      <Input disabled placeholder="비활성화된 입력" />
                    </div>
                    <div>
                      <Label>읽기 전용 상태</Label>
                      <Input readOnly value="읽기 전용 값" />
                    </div>
                    <div>
                      <Label>오류 상태</Label>
                      <Input 
                        placeholder="오류가 있는 입력" 
                        className="border-red-300 focus:border-red-500 focus:ring-red-500" 
                      />
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
                효과적인 Input 사용을 위한 모범 사례입니다.
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
                    <li>• 명확하고 설명적인 라벨 사용</li>
                    <li>• 적절한 입력 유형 (email, tel, url 등) 선택</li>
                    <li>• 도움이 되는 플레이스홀더 텍스트 제공</li>
                    <li>• 유효성 검사 피드백을 실시간으로 제공</li>
                    <li>• 오류 메시지는 구체적이고 해결 방법 제시</li>
                    <li>• 필수 필드 명확히 표시</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 모호하거나 기술적인 라벨 사용</li>
                    <li>• 너무 많은 필수 필드 요구</li>
                    <li>• 플레이스홀더를 라벨 대신 사용</li>
                    <li>• 오류 없이 갑작스러운 입력 제한</li>
                    <li>• 비밀번호 가시성 토글 없이 긴 비밀번호 요구</li>
                    <li>• 적절한 키보드 네비게이션 지원 없음</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Input을 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">라벨과 설명</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 모든 입력에는 연결된 Label이 있어야 함</li>
                    <li>• htmlFor와 id 속성으로 연결</li>
                    <li>• 추가 설명이 필요한 경우 aria-describedby 사용</li>
                    <li>• 필수 필드는 required 속성 또는 aria-required 사용</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>다음 입력으로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift+Tab</kbd>
                      <span>이전 입력으로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>폼 제출 (type="submit"인 경우)</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                      <span>입력 취소 (맥락에 따라)</span>
                    </div>
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
              <CardTitle>컴포넌트 API</CardTitle>
              <CardDescription>
                Input 컴포넌트의 속성과 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">주요 속성</h4>
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
                        <td className="p-2 font-mono">type</td>
                        <td className="p-2">"text" | "email" | "password" | "number" | ...</td>
                        <td className="p-2">"text"</td>
                        <td className="p-2">입력 필드의 유형</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">placeholder</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">입력이 비어있을 때 표시되는 텍스트</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">value</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 컴포넌트 값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">비제어 컴포넌트의 초기값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">입력 필드 비활성화</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">readOnly</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">입력을 읽기 전용으로 만들기</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">required</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">폼 유효성 검사를 위한 필수 표시</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onChange</td>
                        <td className="p-2">(event) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">입력 값 변경 시 호출되는 함수</td>
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
                code={`import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 라벨이 있는 기본 입력
<div className="space-y-2">
  <Label htmlFor="email">이메일</Label>
  <Input 
    id="email"
    type="email" 
    placeholder="이메일을 입력하세요"
    onChange={(e) => console.log(e.target.value)}
  />
</div>

// 아이콘이 있는 입력
<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
  <Input className="pl-10" placeholder="검색..." />
</div>

// 유효성 검사가 있는 제어된 입력
const [value, setValue] = useState('');
const isValid = value.length > 0;

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className={isValid ? 'border-green-500' : 'border-red-500'}
/>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="비밀번호 입력 예제"
                code={`import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor="password">비밀번호</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          id="password"
          className="pl-10 pr-10"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력하세요"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}`}
                codeKey="password-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5" />
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