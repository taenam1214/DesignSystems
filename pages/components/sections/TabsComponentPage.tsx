import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  Users, 
  BarChart3, 
  FileText, 
  Calendar,
  Layers,
  Copy,
  Check,
  Palette,
  Navigation,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { useState } from 'react';

export function TabsComponentPage() {
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

  const examples = [
    {
      title: '기본 탭',
      description: '관련 콘텐츠를 별도의 보기로 구성하는 간단한 탭 내비게이션입니다.',
      component: (
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
            <TabsTrigger value="reports">보고서</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>개요</CardTitle>
                <CardDescription>
                  계정과 최근 활동에 대한 고수준 요약입니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">총 사용자</span>
                    <div className="text-2xl">2,350</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">수익</span>
                    <div className="text-2xl">₩45,231,000</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>분석</CardTitle>
                <CardDescription>
                  상세한 인사이트와 성능 지표입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  분석 대시보드 콘텐츠가 여기에 표시됩니다. 차트, 그래프, 상세 지표가 포함됩니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>보고서</CardTitle>
                <CardDescription>
                  다양한 보고서를 생성하고 다운로드합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    월간 보고서
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    성능 보고서
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ),
      code: `<Tabs defaultValue="overview" className="w-full">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="overview">개요</TabsTrigger>
    <TabsTrigger value="analytics">분석</TabsTrigger>
    <TabsTrigger value="reports">보고서</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <Card>
      <CardHeader>
        <CardTitle>개요</CardTitle>
        <CardDescription>
          계정에 대한 고수준 요약입니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        개요 탭의 콘텐츠
      </CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="analytics">
    분석 콘텐츠가 여기에
  </TabsContent>
</Tabs>`
    },
    {
      title: '아이콘이 있는 탭',
      description: '더 나은 시각적 인식과 맥락을 위해 아이콘이 포함된 향상된 탭입니다.',
      component: (
        <Tabs defaultValue="profile" className="w-full max-w-lg">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              프로필
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              계정
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              알림
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              보안
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>프로필 설정</CardTitle>
                <CardDescription>
                  공개 프로필 정보를 관리합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" defaultValue="홍길동" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">자기소개</Label>
                  <Input id="bio" placeholder="자신에 대해 알려주세요" />
                </div>
                <Button>변경사항 저장</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="account" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>계정 설정</CardTitle>
                <CardDescription>
                  계정 환경설정과 설정을 관리합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>언어</Label>
                  <Select defaultValue="ko">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ko">한국어</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>시간대</Label>
                  <Select defaultValue="kst">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kst">한국 표준시</SelectItem>
                      <SelectItem value="jst">일본 표준시</SelectItem>
                      <SelectItem value="pst">태평양 표준시</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>알림 환경설정</CardTitle>
                <CardDescription>
                  받고 싶은 알림을 선택하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>이메일 알림</span>
                    <Badge>활성화됨</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>푸시 알림</span>
                    <Badge variant="secondary">비활성화됨</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SMS 알림</span>
                    <Badge>활성화됨</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>보안 설정</CardTitle>
                <CardDescription>
                  계정 보안과 개인정보를 관리합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>2단계 인증</Label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">추가 보안 레이어 추가</span>
                    <Button variant="outline" size="sm">활성화</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>비밀번호 변경</Label>
                  <Button variant="outline" className="w-full">비밀번호 업데이트</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ),
      code: `<Tabs defaultValue="profile" className="w-full">
  <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="profile" className="flex items-center gap-2">
      <User className="w-4 h-4" />
      프로필
    </TabsTrigger>
    <TabsTrigger value="account" className="flex items-center gap-2">
      <Settings className="w-4 h-4" />
      계정
    </TabsTrigger>
  </TabsList>
  <TabsContent value="profile">
    프로필 콘텐츠가 여기에
  </TabsContent>
  <TabsContent value="account">
    계정 콘텐츠가 여기에
  </TabsContent>
</Tabs>`
    },
    {
      title: '세로형 탭',
      description: '사이드바 내비게이션이나 가로 공간이 제한적일 때를 위한 세로형 탭 레이아웃입니다.',
      component: (
        <div className="flex w-full max-w-4xl border rounded-lg overflow-hidden">
          <div className="w-64 border-r bg-muted/20">
            <Tabs defaultValue="team" orientation="vertical" className="w-full">
              <TabsList className="flex flex-col h-auto w-full bg-transparent">
                <TabsTrigger value="team" className="w-full justify-start data-[state=active]:bg-background">
                  <Users className="w-4 h-4 mr-2" />
                  팀 관리
                </TabsTrigger>
                <TabsTrigger value="billing" className="w-full justify-start data-[state=active]:bg-background">
                  <CreditCard className="w-4 h-4 mr-2" />
                  결제 및 플랜
                </TabsTrigger>
                <TabsTrigger value="analytics" className="w-full justify-start data-[state=active]:bg-background">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  분석
                </TabsTrigger>
                <TabsTrigger value="calendar" className="w-full justify-start data-[state=active]:bg-background">
                  <Calendar className="w-4 h-4 mr-2" />
                  캘린더
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex-1 p-6">
            <Tabs defaultValue="team" orientation="vertical">
              <TabsContent value="team">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg">팀 관리</h3>
                    <p className="text-sm text-muted-foreground">
                      팀 멤버, 역할, 권한을 관리합니다.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm">홍길동</p>
                        <p className="text-xs text-muted-foreground">관리자</p>
                      </div>
                      <Badge>소유자</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm">김영희</p>
                        <p className="text-xs text-muted-foreground">개발자</p>
                      </div>
                      <Badge variant="secondary">멤버</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="billing">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg">결제 및 플랜</h3>
                    <p className="text-sm text-muted-foreground">
                      구독과 결제 정보를 관리합니다.
                    </p>
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <span>현재 플랜: Pro</span>
                        <Badge>활성</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        월 29,000원 • 다음 결제: 2024년 3월 15일
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg">분석 대시보드</h3>
                    <p className="text-sm text-muted-foreground">
                      성능 지표와 인사이트를 확인합니다.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl">1,234</div>
                        <p className="text-sm text-muted-foreground">총 사용자</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl">89%</div>
                        <p className="text-sm text-muted-foreground">만족도</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="calendar">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg">캘린더 통합</h3>
                    <p className="text-sm text-muted-foreground">
                      캘린더 이벤트를 연결하고 관리합니다.
                    </p>
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-center text-muted-foreground">
                        오늘 예정된 캘린더 이벤트가 없습니다.
                      </p>
                      <Button className="w-full mt-4" variant="outline">
                        새 이벤트 추가
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      ),
      code: `<div className="flex w-full border rounded-lg overflow-hidden">
  <div className="w-64 border-r bg-muted/20">
    <Tabs defaultValue="team" orientation="vertical" className="w-full">
      <TabsList className="flex flex-col h-auto w-full bg-transparent">
        <TabsTrigger value="team" className="w-full justify-start">
          <Users className="w-4 h-4 mr-2" />
          팀 관리
        </TabsTrigger>
        <TabsTrigger value="billing" className="w-full justify-start">
          <CreditCard className="w-4 h-4 mr-2" />
          결제 및 플랜
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
  <div className="flex-1 p-6">
    <Tabs defaultValue="team" orientation="vertical">
      <TabsContent value="team">
        팀 콘텐츠가 여기에
      </TabsContent>
      <TabsContent value="billing">
        결제 콘텐츠가 여기에
      </TabsContent>
    </Tabs>
  </div>
</div>`
    },
    {
      title: '배지가 있는 탭',
      description: '동적 콘텐츠를 위한 알림 배지와 상태 표시기가 있는 탭입니다.',
      component: (
        <Tabs defaultValue="inbox" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inbox" className="relative">
              받은편지함
              <Badge className="ml-2 px-1.5 py-0.5 text-xs">3</Badge>
            </TabsTrigger>
            <TabsTrigger value="drafts" className="relative">
              임시보관함
              <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">12</Badge>
            </TabsTrigger>
            <TabsTrigger value="sent">보낸편지함</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  받은편지함
                  <Badge variant="destructive">3개 신규</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="text-sm">새 프로젝트 초대</p>
                      <p className="text-xs text-muted-foreground">2분 전</p>
                    </div>
                    <Badge size="sm" className="bg-blue-100 text-blue-800">신규</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="text-sm">주간 보고서 생성됨</p>
                      <p className="text-xs text-muted-foreground">1시간 전</p>
                    </div>
                    <Badge size="sm" className="bg-green-100 text-green-800">보고서</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="drafts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>임시보관함</CardTitle>
                <CardDescription>12개의 저장되지 않은 임시보관함</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  임시 메시지가 여기에 표시됩니다. 주의가 필요한 12개의 임시보관함이 있습니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sent" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>보낸편지함</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  보낸 메시지 기록과 전송 상태를 확인합니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ),
      code: `<Tabs defaultValue="inbox" className="w-full">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="inbox" className="relative">
      받은편지함
      <Badge className="ml-2 px-1.5 py-0.5 text-xs">3</Badge>
    </TabsTrigger>
    <TabsTrigger value="drafts" className="relative">
      임시보관함
      <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">12</Badge>
    </TabsTrigger>
    <TabsTrigger value="sent">보낸편지함</TabsTrigger>
  </TabsList>
  <TabsContent value="inbox">
    알림이 있는 받은편지함 콘텐츠
  </TabsContent>
</Tabs>`
    }
  ];

  const features = [
    {
      title: '수평 및 수직 레이아웃',
      description: '가로형과 세로형 두 가지 배치 옵션으로 다양한 레이아웃 지원',
      icon: '🔄'
    },
    {
      title: '키보드 네비게이션',
      description: '화살표 키와 Tab으로 완벽한 키보드 탐색 지원',
      icon: '⌨️'
    },
    {
      title: '접근성 완벽 지원',
      description: 'ARIA 속성과 역할로 스크린 리더 완벽 지원',
      icon: '♿'
    },
    {
      title: '유연한 스타일링',
      description: '아이콘, 배지, 사용자 정의 콘텐츠 등 다양한 스타일링 옵션',
      icon: '🎨'
    },
    {
      title: '제어/비제어 모드',
      description: 'controlled와 uncontrolled 컴포넌트 패턴 모두 지원',
      icon: '⚙️'
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
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Tabs</h1>
            <p className="text-muted-foreground">
              콘텐츠를 여러 섹션으로 구성하고 사용자가 섹션 간을 탐색할 수 있도록 하는 컴포넌트입니다. 인터페이스를 깔끔하고 체계적으로 유지하면서 관련 정보를 그룹화하는 데 유용합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            4가지 예제
          </Badge>
          <Badge variant="outline">수평/수직 레이아웃</Badge>
          <Badge variant="outline">아이콘 지원</Badge>
          <Badge variant="outline">배지 지원</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">레이아웃 및 스타일</TabsTrigger>
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

        {/* Variants & Layout Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>레이아웃 옵션</CardTitle>
              <CardDescription>
                Tabs 컴포넌트의 다양한 레이아웃과 배치 옵션입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Navigation className="w-4 h-4" />
                    수평 레이아웃 (기본)
                  </h4>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <Tabs defaultValue="tab1" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="tab1">탭 1</TabsTrigger>
                        <TabsTrigger value="tab2">탭 2</TabsTrigger>
                        <TabsTrigger value="tab3">탭 3</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1" className="mt-4">
                        <div className="p-4 border rounded">탭 1의 콘텐츠</div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 표준 탭 네비게이션</li>
                    <li>• 제한된 세로 공간에 적합</li>
                    <li>• 대부분의 사용 사례에 권장</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    수직 레이아웃
                  </h4>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <div className="flex gap-4 max-w-md">
                      <Tabs defaultValue="tab1" orientation="vertical">
                        <TabsList className="flex flex-col h-auto">
                          <TabsTrigger value="tab1" className="w-full">탭 1</TabsTrigger>
                          <TabsTrigger value="tab2" className="w-full">탭 2</TabsTrigger>
                        </TabsList>
                      </Tabs>
                      <div className="flex-1 p-4 border rounded">
                        수직 탭 콘텐츠
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 사이드바 네비게이션</li>
                    <li>• 많은 탭이 있을 때 유용</li>
                    <li>• 더 넓은 콘텐츠 영역 제공</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>스타일링 옵션</CardTitle>
              <CardDescription>
                탭을 개선하는 다양한 시각적 요소들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-3">
                  <h5 className="font-medium">아이콘 포함</h5>
                  <div className="p-3 border rounded-lg">
                    <Tabs defaultValue="home" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="home" className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          홈
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="flex items-center gap-1">
                          <Settings className="w-3 h-3" />
                          설정
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <p className="text-xs text-muted-foreground">시각적 맥락 제공</p>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">배지 포함</h5>
                  <div className="p-3 border rounded-lg">
                    <Tabs defaultValue="messages" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="messages" className="relative">
                          메시지
                          <Badge className="ml-1 px-1 py-0 text-xs">5</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="archive">보관함</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <p className="text-xs text-muted-foreground">알림 및 카운트 표시</p>
                </div>
                <div className="space-y-3">
                  <h5 className="font-medium">텍스트만</h5>
                  <div className="p-3 border rounded-lg">
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="overview">개요</TabsTrigger>
                        <TabsTrigger value="details">상세</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <p className="text-xs text-muted-foreground">간단하고 깔끔한 스타일</p>
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
                효과적인 Tabs 사용을 위한 모범 사례입니다.
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
                    <li>• 관련된 콘텐츠를 논리적으로 그룹화</li>
                    <li>• 탭 라벨은 명확하고 간결하게 작성</li>
                    <li>• 탭 개수는 7개 이하로 제한</li>
                    <li>• 기본 활성 탭을 명확히 설정</li>
                    <li>• 일관된 콘텐츠 구조 유지</li>
                    <li>• 중요한 콘텐츠는 첫 번째 탭에 배치</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 관련 없는 콘텐츠를 같은 탭 그룹에 배치</li>
                    <li>• 너무 많은 탭으로 인한 혼란</li>
                    <li>• 탭 라벨이 너무 길거나 모호한 경우</li>
                    <li>• 탭 간 콘텐츠 로딩 시간이 큰 차이</li>
                    <li>• 중요한 액션을 숨겨진 탭에 배치</li>
                    <li>• 일관성 없는 탭 높이나 스타일</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>탭 사용 시기</CardTitle>
              <CardDescription>
                Tabs와 다른 네비게이션 패턴을 언제 사용할지 결정하는 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Tabs 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 관련된 콘텐츠 그룹</li>
                    <li>• 설정 및 환경설정</li>
                    <li>• 대시보드 섹션</li>
                    <li>• 프로필 정보</li>
                    <li>• 데이터 보기 모드</li>
                    <li>• 폼의 단계별 구성</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 고려</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Accordion:</strong> 수직 공간 절약</li>
                    <li>• <strong>Sidebar:</strong> 더 많은 네비게이션</li>
                    <li>• <strong>Breadcrumb:</strong> 계층 구조</li>
                    <li>• <strong>Stepper:</strong> 순차적 프로세스</li>
                    <li>• <strong>Dropdown:</strong> 공간 제약</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 주요 사이트 네비게이션</li>
                    <li>• 서로 독립적인 페이지</li>
                    <li>• 순차적 워크플로우</li>
                    <li>• 외부 링크 그룹</li>
                    <li>• 단일 콘텐츠의 분할</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Tabs를 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>탭 목록으로 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">←→</kbd>
                      <span>탭 간 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space/Enter</kbd>
                      <span>탭 활성화</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Home/End</kbd>
                      <span>첫 번째/마지막 탭으로</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• TabsList에 자동으로 role="tablist" 적용</li>
                    <li>• TabsTrigger에 role="tab"과 적절한 상태 정보</li>
                    <li>• TabsContent에 role="tabpanel"과 연결된 라벨</li>
                    <li>• aria-selected로 활성 탭 상태 전달</li>
                    <li>• aria-controls로 탭과 패널 연결</li>
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
                Tabs 컴포넌트들의 속성과 사용법입니다.
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
                        <td className="p-2 font-mono">Tabs</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TabsList</td>
                        <td className="p-2">탭 버튼들의 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TabsTrigger</td>
                        <td className="p-2">개별 탭 버튼</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TabsContent</td>
                        <td className="p-2">탭의 콘텐츠 패널</td>
                        <td className="p-2">필수</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Tabs 속성</h4>
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
                        <td className="p-2">제어된 활성 탭 값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">비제어 컴포넌트의 기본 활성 탭</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">orientation</td>
                        <td className="p-2">"horizontal" | "vertical"</td>
                        <td className="p-2">"horizontal"</td>
                        <td className="p-2">탭의 방향</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onValueChange</td>
                        <td className="p-2">(value: string) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">활성 탭 변경 시 호출되는 함수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">activationMode</td>
                        <td className="p-2">"automatic" | "manual"</td>
                        <td className="p-2">"automatic"</td>
                        <td className="p-2">탭이 포커스 시 자동 활성화 여부</td>
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
                code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 탭
<Tabs defaultValue="tab1" className="w-full">
  <TabsList>
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
    <TabsTrigger value="tab3">탭 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    탭 1의 콘텐츠
  </TabsContent>
  <TabsContent value="tab2">
    탭 2의 콘텐츠
  </TabsContent>
  <TabsContent value="tab3">
    탭 3의 콘텐츠
  </TabsContent>
</Tabs>

// 제어된 탭
const [activeTab, setActiveTab] = useState('overview');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="overview">개요</TabsTrigger>
    <TabsTrigger value="details">상세</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    개요 콘텐츠
  </TabsContent>
  <TabsContent value="details">
    상세 콘텐츠
  </TabsContent>
</Tabs>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="세로형 탭"
                code={`<Tabs defaultValue="tab1" orientation="vertical">
  <TabsList className="flex flex-col h-auto">
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">콘텐츠 1</TabsContent>
  <TabsContent value="tab2">콘텐츠 2</TabsContent>
</Tabs>`}
                codeKey="vertical-usage"
              />

              <CodeBlock
                title="아이콘과 배지가 있는 탭"
                code={`import { User, Settings } from "lucide-react";
import { Badge } from "./components/ui/badge";

<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile" className="flex items-center gap-2">
      <User className="w-4 h-4" />
      프로필
    </TabsTrigger>
    <TabsTrigger value="messages" className="flex items-center gap-2">
      메시지
      <Badge className="ml-1 px-1.5 py-0.5 text-xs">3</Badge>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="profile">
    프로필 콘텐츠
  </TabsContent>
  <TabsContent value="messages">
    메시지 콘텐츠
  </TabsContent>
</Tabs>`}
                codeKey="advanced-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
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