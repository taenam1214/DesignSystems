import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { 
  List,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  FileText,
  HelpCircle,
  Settings,
  User,
  CreditCard,
  Shield,
  Bell,
  Globe,
  Database,
  Code,
  Package,
  Smartphone,
  Monitor,
  Headphones,
  BookOpen,
  Star,
  Heart,
  MessageSquare
} from 'lucide-react';

export function AccordionComponentPage() {
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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <List className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Accordion</h1>
            <p className="text-muted-foreground">
              콘텐츠를 접었다 펼 수 있는 상호작용 컴포넌트입니다. 공간을 절약하면서도 많은 정보를 체계적으로 정리할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            다양한 유형
          </Badge>
          <Badge variant="outline">접기/펼치기</Badge>
          <Badge variant="outline">공간 절약</Badge>
          <Badge variant="outline">계층적 정보</Badge>
          <Badge variant="outline">접근성</Badge>
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
              <CardTitle>기본 아코디언</CardTitle>
              <CardDescription>
                가장 기본적인 아코디언 컴포넌트입니다. 단일 선택 모드로 작동합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-lg">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>제품 소개</AccordionTrigger>
                    <AccordionContent>
                      우리의 제품은 현대적인 기술과 사용자 친화적인 디자인을 결합하여 
                      최고의 사용 경험을 제공합니다. 혁신적인 기능들과 직관적인 인터페이스로 
                      복잡한 작업을 간단하게 만들어줍니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>주요 기능</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li>• 실시간 데이터 동기화</li>
                        <li>• 강력한 검색 및 필터링</li>
                        <li>• 팀 협업 도구</li>
                        <li>• 모바일 및 데스크톱 지원</li>
                        <li>• 고급 보안 기능</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>가격 정보</AccordionTrigger>
                    <AccordionContent>
                      다양한 요금제를 제공하여 개인 사용자부터 대기업까지 모든 규모의 
                      조직에 적합한 솔루션을 찾을 수 있습니다. 30일 무료 체험도 제공됩니다.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <CodeBlock
                code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>제품 소개</AccordionTrigger>
    <AccordionContent>
      우리의 제품은 현대적인 기술과 사용자 친화적인 디자인을 결합하여...
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>주요 기능</AccordionTrigger>
    <AccordionContent>
      실시간 데이터 동기화, 강력한 검색 및 필터링...
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                codeKey="basic-accordion"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>다중 선택 아코디언</CardTitle>
              <CardDescription>
                여러 항목을 동시에 열 수 있는 아코디언입니다. 비교나 참조가 필요한 경우에 유용합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-lg">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>기본 설정</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>알림 수신</span>
                          <Badge variant="outline">활성화</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>자동 저장</span>
                          <Badge variant="secondary">비활성화</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>다크 모드</span>
                          <Badge variant="outline">시스템 설정</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>개인정보 보호</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>프로필 공개</span>
                          <Badge variant="destructive">비공개</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>위치 정보</span>
                          <Badge variant="outline">허용</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>데이터 수집</span>
                          <Badge variant="secondary">제한적</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>고급 설정</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>개발자 모드</span>
                          <Badge variant="outline">비활성화</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>실험적 기능</span>
                          <Badge variant="secondary">활성화</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>로그 수집</span>
                          <Badge variant="outline">오류만</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <CodeBlock
                code={`<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>기본 설정</AccordionTrigger>
    <AccordionContent>
      {/* 설정 내용 */}
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>개인정보 보호</AccordionTrigger>
    <AccordionContent>
      {/* 개인정보 설정 */}
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                codeKey="multiple-accordion"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>FAQ 아코디언</CardTitle>
              <CardDescription>
                자주 묻는 질문을 정리하는데 이상적인 패턴입니다. 사용자가 필요한 정보를 빠르게 찾을 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      무료 체험 기간은 얼마나 되나요?
                    </AccordionTrigger>
                    <AccordionContent>
                      30일 동안 모든 기능을 무료로 체험할 수 있습니다. 
                      체험 기간 중에는 신용카드 정보 등록이 필요하지 않으며, 
                      원하는 경우 언제든지 해지할 수 있습니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      결제 방법은 어떤 것들이 있나요?
                    </AccordionTrigger>
                    <AccordionContent>
                      신용카드, 직불카드, PayPal, 계좌이체를 지원합니다. 
                      기업 고객의 경우 세금계산서 발행과 후불 결제도 가능합니다. 
                      결제 정보는 업계 표준 암호화로 안전하게 보호됩니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      데이터 보안은 어떻게 보장되나요?
                    </AccordionTrigger>
                    <AccordionContent>
                      데이터는 256비트 SSL 암호화로 전송되고, 
                      AWS의 보안 인증을 받은 데이터센터에 저장됩니다. 
                      정기적인 보안 감사와 백업을 실시하며, 
                      GDPR 및 국내 개인정보보호법을 준수합니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Headphones className="w-4 h-4 text-primary" />
                      고객 지원은 어떻게 받을 수 있나요?
                    </AccordionTrigger>
                    <AccordionContent>
                      24/7 채팅 지원, 이메일 지원, 그리고 유료 플랜 사용자를 위한 
                      전화 지원을 제공합니다. 또한 상세한 도움말 문서와 
                      비디오 튜토리얼도 제공됩니다.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제품 정보 아코디언</CardTitle>
              <CardDescription>
                제품의 상세 정보를 체계적으로 정리하여 사용자가 원하는 정보를 쉽게 찾을 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="specs">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-primary" />
                      제품 사양
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">하드웨어</h5>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• 프로세서: Intel i7-12700H</li>
                              <li>• 메모리: 16GB DDR4</li>
                              <li>• 저장공간: 512GB SSD</li>
                              <li>• 그래픽: RTX 3060</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">디스플레이</h5>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• 크기: 15.6인치</li>
                              <li>• 해상도: 1920x1080</li>
                              <li>• 주사율: 144Hz</li>
                              <li>• 패널: IPS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="features">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      주요 특징
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">성능</Badge>
                            <span className="text-sm">최신 게임 고화질 플레이</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">휴대성</Badge>
                            <span className="text-sm">2.1kg 경량 설계</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">배터리</Badge>
                            <span className="text-sm">최대 8시간 사용</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">연결성</Badge>
                            <span className="text-sm">WiFi 6, Bluetooth 5.2</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">보안</Badge>
                            <span className="text-sm">지문 인식, TPM 2.0</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">쿨링</Badge>
                            <span className="text-sm">듀얼 팬 시스템</span>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="support">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" />
                      지원 및 보증
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">보증 정보</h5>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• 제조사 보증: 2년</li>
                            <li>• 무상 A/S: 1년</li>
                            <li>• 배터리 보증: 1년</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">포함 소프트웨어</h5>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Windows 11 Pro</li>
                            <li>• Microsoft Office 365 (1년)</li>
                            <li>• 맥킨토시 바이러스 백신 (1년)</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>설정 패널 아코디언</CardTitle>
              <CardDescription>
                복잡한 설정 옵션들을 카테고리별로 분류하여 관리하기 쉽게 만듭니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="account">
                    <AccordionTrigger className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      계정 설정
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">표시 이름</label>
                          <div className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm">김사용자</span>
                            <Button variant="outline" size="sm">편집</Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">이메일</label>
                          <div className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm">user@example.com</span>
                            <Button variant="outline" size="sm">변경</Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">프로필 사진</label>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-muted rounded-full"></div>
                            <Button variant="outline" size="sm">업로드</Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="notifications">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-primary" />
                      알림 설정
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">이메일 알림</p>
                            <p className="text-xs text-muted-foreground">중요한 업데이트를 이메일로 받기</p>
                          </div>
                          <Badge variant="outline">활성화</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">푸시 알림</p>
                            <p className="text-xs text-muted-foreground">브라우저 푸시 알림 받기</p>
                          </div>
                          <Badge variant="secondary">비활성화</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">마케팅 이메일</p>
                            <p className="text-xs text-muted-foreground">제품 소식 및 이벤트 정보</p>
                          </div>
                          <Badge variant="outline">활성화</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="privacy">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      개인정보 및 보안
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">2단계 인증</p>
                            <p className="text-xs text-muted-foreground">계정 보안 강화</p>
                          </div>
                          <Button variant="outline" size="sm">설정</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">로그인 기록</p>
                            <p className="text-xs text-muted-foreground">최근 로그인 활동 보기</p>
                          </div>
                          <Button variant="outline" size="sm">보기</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">데이터 다운로드</p>
                            <p className="text-xs text-muted-foreground">내 데이터 사본 받기</p>
                          </div>
                          <Button variant="outline" size="sm">요청</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                효과적인 Accordion 사용을 위한 모범 사례
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
                    <li>• 명확하고 설명적인 제목 사용</li>
                    <li>• 관련 있는 콘텐츠끼리 논리적으로 그룹화</li>
                    <li>• 중요한 정보는 첫 번째 항목에 배치</li>
                    <li>• 일관된 콘텐츠 형식 유지</li>
                    <li>• 적절한 시각적 구분자 사용</li>
                    <li>• 키보드 탐색 지원</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 중첩 구조</li>
                    <li>• 모호한 제목이나 라벨</li>
                    <li>• 한 항목에 너무 많은 콘텐츠</li>
                    <li>• 일관성 없는 정보 구조</li>
                    <li>• 중요한 정보를 너무 깊이 숨기기</li>
                    <li>• 접근성 무시</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Accordion을 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>다음 아코디언 항목으로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>아코디언 항목 열기/닫기</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                      <span>아코디언 항목 열기/닫기</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Arrow</kbd>
                      <span>위/아래 항목으로 이동</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 아코디언 항목의 상태 (열림/닫힘) 명확히 안내</li>
                    <li>• 각 항목의 제목과 내용을 적절히 구분</li>
                    <li>• 전체 아코디언 구조에 대한 컨텍스트 제공</li>
                    <li>• ARIA 속성을 통한 의미 전달</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Accordion 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• FAQ 페이지</li>
                    <li>• 설정 패널</li>
                    <li>• 제품 정보 정리</li>
                    <li>• 긴 목록의 카테고리화</li>
                    <li>• 공간 절약이 필요한 경우</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Tabs:</strong> 같은 레벨의 콘텐츠</li>
                    <li>• <strong>Collapsible:</strong> 단일 접기/펼치기</li>
                    <li>• <strong>Dialog:</strong> 별도 화면이 필요한 경우</li>
                    <li>• <strong>Drawer:</strong> 모바일 환경</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 주요 탐색 메뉴</li>
                    <li>• 짧은 콘텐츠</li>
                    <li>• 순차적 프로세스</li>
                    <li>• 실시간 상호작용</li>
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
                Accordion 컴포넌트의 속성과 설정 옵션
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
                        <td className="p-2 font-mono">Accordion</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AccordionItem</td>
                        <td className="p-2">개별 아코디언 항목</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AccordionTrigger</td>
                        <td className="p-2">클릭 가능한 제목</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AccordionContent</td>
                        <td className="p-2">접을 수 있는 콘텐츠</td>
                        <td className="p-2">필수</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Accordion 속성</h4>
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
                        <td className="p-2">"single" | "multiple"</td>
                        <td className="p-2">-</td>
                        <td className="p-2">선택 모드 (단일/다중)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">collapsible</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">모든 항목을 닫을 수 있는지 여부</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">value</td>
                        <td className="p-2">string | string[]</td>
                        <td className="p-2">-</td>
                        <td className="p-2">현재 열린 항목(들)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">string | string[]</td>
                        <td className="p-2">-</td>
                        <td className="p-2">초기 열린 항목(들)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onValueChange</td>
                        <td className="p-2">function</td>
                        <td className="p-2">-</td>
                        <td className="p-2">값 변경 시 호출되는 함수</td>
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
                code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 항목</AccordionTrigger>
        <AccordionContent>
          첫 번째 항목의 내용입니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목</AccordionTrigger>
        <AccordionContent>
          두 번째 항목의 내용입니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="다중 선택 모드"
                code={`export function Example() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 항목</AccordionTrigger>
        <AccordionContent>
          여러 항목을 동시에 열 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목</AccordionTrigger>
        <AccordionContent>
          이 항목도 함께 열려있을 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
                codeKey="multiple-mode"
              />

              <CodeBlock
                title="제어된 아코디언"
                code={`import { useState } from "react";

export function Example() {
  const [value, setValue] = useState<string>();

  return (
    <Accordion 
      type="single" 
      collapsible 
      value={value} 
      onValueChange={setValue}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>제어된 항목</AccordionTrigger>
        <AccordionContent>
          이 아코디언의 상태는 외부에서 제어됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
                codeKey="controlled-accordion"
              />

              <CodeBlock
                title="아이콘이 포함된 아코디언"
                code={`import { Settings, User, Bell } from "lucide-react";

export function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="settings">
        <AccordionTrigger className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          설정
        </AccordionTrigger>
        <AccordionContent>
          시스템 설정을 변경할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="profile">
        <AccordionTrigger className="flex items-center gap-2">
          <User className="w-4 h-4" />
          프로필
        </AccordionTrigger>
        <AccordionContent>
          개인 정보를 관리할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
                codeKey="accordion-with-icons"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}