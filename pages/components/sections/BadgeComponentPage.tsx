import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { 
  Tag,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Star,
  Bell,
  User,
  Shield,
  Zap,
  Calendar,
  MapPin,
  Settings,
  Heart,
  Eye,
  MessageSquare,
  Bookmark,
  Download,
  Upload,
  Clock,
  Trophy,
  Target,
  Flame
} from 'lucide-react';

export function BadgeComponentPage() {
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
            <Tag className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Badge</h1>
            <p className="text-muted-foreground">
              UI 요소의 상태나 속성을 나타내는 작은 라벨 컴포넌트입니다. 알림 개수, 상태 표시, 카테고리 태그 등에 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            4가지 변형
          </Badge>
          <Badge variant="outline">상태 표시</Badge>
          <Badge variant="outline">알림</Badge>
          <Badge variant="outline">라벨링</Badge>
          <Badge variant="outline">카테고리</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">변형 & 스타일</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>기본 예제</CardTitle>
              <CardDescription>
                가장 일반적인 Badge 사용 사례와 조합
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">기본 변형</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <CodeBlock
                  code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
                  codeKey="basic-variants"
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">상태 표시</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">활성</Badge>
                  <Badge variant="secondary">대기중</Badge>
                  <Badge variant="outline">임시저장</Badge>
                  <Badge variant="destructive">오류</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  시스템 상태나 작업 진행 상태를 시각적으로 표현합니다.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">알림 개수</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    <Badge variant="destructive">5</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <Badge variant="default">새 메시지</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <Badge variant="secondary">99+</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>실제 사용 사례</CardTitle>
              <CardDescription>
                실제 애플리케이션에서 자주 사용되는 Badge 패턴
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">사용자 프로필</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="w-8 h-8 p-1 bg-muted rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">김개발자</span>
                          <Badge variant="default">Pro</Badge>
                        </div>
                        <div className="flex gap-1 mt-1">
                          <Badge variant="outline">개발자</Badge>
                          <Badge variant="secondary">온라인</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">제품 카드</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">맥북 프로</h5>
                        <p className="text-sm text-muted-foreground">₩2,390,000</p>
                      </div>
                      <Badge variant="destructive">세일</Badge>
                    </div>
                    <div className="flex gap-1">
                      <Badge variant="outline">신제품</Badge>
                      <Badge variant="secondary">무료배송</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">게시물 상태</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">디자인 시스템 가이드</h5>
                        <p className="text-sm text-muted-foreground">2시간 전</p>
                      </div>
                      <Badge variant="default">발행됨</Badge>
                    </div>
                    <div className="flex gap-1">
                      <Badge variant="outline">디자인</Badge>
                      <Badge variant="outline">가이드</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">알림 목록</h4>
                  <div className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">중요</Badge>
                      <span className="text-sm">보안 업데이트 필요</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">새 소식</Badge>
                      <span className="text-sm">새로운 기능이 추가됨</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">정보</Badge>
                      <span className="text-sm">시스템 점검 예정</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Variants Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>변형</CardTitle>
              <CardDescription>
                다양한 맥락과 우선순위에 맞는 4가지 Badge 스타일
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Default - 기본</h4>
                  <div className="space-y-4">
                    <Badge variant="default">기본 배지</Badge>
                    <p className="text-sm text-muted-foreground">
                      가장 중요하거나 주목해야 할 정보에 사용합니다. 활성 상태나 우선순위가 높은 항목에 적합합니다.
                    </p>
                    <CodeBlock
                      code={`<Badge variant="default">기본 배지</Badge>`}
                      codeKey="default-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Secondary - 보조</h4>
                  <div className="space-y-4">
                    <Badge variant="secondary">보조 배지</Badge>
                    <p className="text-sm text-muted-foreground">
                      기본 정보보다는 덜 중요하지만 여전히 눈에 띄어야 하는 정보에 사용합니다.
                    </p>
                    <CodeBlock
                      code={`<Badge variant="secondary">보조 배지</Badge>`}
                      codeKey="secondary-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Outline - 아웃라인</h4>
                  <div className="space-y-4">
                    <Badge variant="outline">아웃라인 배지</Badge>
                    <p className="text-sm text-muted-foreground">
                      미묘한 표시가 필요한 정보나 카테고리 태그에 사용합니다. 시각적 무게가 가벼운 편입니다.
                    </p>
                    <CodeBlock
                      code={`<Badge variant="outline">아웃라인 배지</Badge>`}
                      codeKey="outline-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Destructive - 경고</h4>
                  <div className="space-y-4">
                    <Badge variant="destructive">경고 배지</Badge>
                    <p className="text-sm text-muted-foreground">
                      오류, 경고, 또는 주의가 필요한 정보에 사용합니다. 사용자의 즉각적인 주의를 요구할 때 사용합니다.
                    </p>
                    <CodeBlock
                      code={`<Badge variant="destructive">경고 배지</Badge>`}
                      codeKey="destructive-variant"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>내용 유형</CardTitle>
              <CardDescription>
                Badge에 포함할 수 있는 다양한 콘텐츠 유형
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">숫자</h4>
                  <div className="flex gap-3 mb-4">
                    <Badge variant="destructive">5</Badge>
                    <Badge variant="default">23</Badge>
                    <Badge variant="secondary">99+</Badge>
                    <Badge variant="outline">1</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    알림 개수, 카운트, 순위 등을 표시할 때 사용합니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-4">상태 텍스트</h4>
                  <div className="flex gap-3 mb-4">
                    <Badge variant="default">온라인</Badge>
                    <Badge variant="secondary">대기중</Badge>
                    <Badge variant="outline">오프라인</Badge>
                    <Badge variant="destructive">오류</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    현재 상태나 조건을 명확하게 전달할 때 사용합니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-4">카테고리 태그</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">디자인</Badge>
                    <Badge variant="outline">프론트엔드</Badge>
                    <Badge variant="outline">백엔드</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    콘텐츠를 분류하거나 필터링할 때 사용하는 태그입니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-4">아이콘과 함께</h4>
                  <div className="flex gap-3 mb-4">
                    <Badge variant="default" className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      즐겨찾기
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      보안
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      빠름
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    아이콘을 추가하여 의미를 더욱 명확하게 전달할 수 있습니다.
                  </p>
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
                효과적인 Badge 사용을 위한 모범 사례
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
                    <li>• 간결하고 명확한 라벨 사용</li>
                    <li>• 일관된 색상 체계 유지</li>
                    <li>• 중요도에 따른 적절한 변형 선택</li>
                    <li>• 적절한 여백과 배치</li>
                    <li>• 읽기 쉬운 글자 크기 유지</li>
                    <li>• 의미가 명확한 콘텐츠 사용</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 긴 텍스트 사용</li>
                    <li>• 과도한 Badge 사용</li>
                    <li>• 일관성 없는 색상 사용</li>
                    <li>• 의미 없는 장식적 사용</li>
                    <li>• 클릭 가능해 보이는 스타일</li>
                    <li>• 접근성 무시</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Badge 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 상태 표시</li>
                    <li>• 알림 개수</li>
                    <li>• 카테고리 라벨</li>
                    <li>• 중요도 표시</li>
                    <li>• 메타데이터 표시</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Chip:</strong> 상호작용 가능한 태그</li>
                    <li>• <strong>Tag:</strong> 제거 가능한 라벨</li>
                    <li>• <strong>Button:</strong> 클릭 가능한 액션</li>
                    <li>• <strong>Alert:</strong> 긴 메시지 표시</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 긴 설명 텍스트</li>
                    <li>• 클릭 가능한 액션</li>
                    <li>• 주요 내용 표시</li>
                    <li>• 복잡한 정보</li>
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
                Badge 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                      <td className="p-2 font-mono">variant</td>
                      <td className="p-2">"default" | "secondary" | "destructive" | "outline"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">배지의 시각적 스타일</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">추가 CSS 클래스</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">children</td>
                      <td className="p-2">ReactNode</td>
                      <td className="p-2">-</td>
                      <td className="p-2">배지 내용</td>
                    </tr>
                  </tbody>
                </table>
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
                code={`import { Badge } from "./components/ui/badge";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  return <Badge>라벨</Badge>;
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="변형 사용"
                code={`export function Example() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">기본</Badge>
      <Badge variant="secondary">보조</Badge>
      <Badge variant="outline">아웃라인</Badge>
      <Badge variant="destructive">경고</Badge>
    </div>
  );
}`}
                codeKey="variants-usage"
              />

              <CodeBlock
                title="아이콘과 함께"
                code={`import { Star } from "lucide-react";

export function Example() {
  return (
    <Badge className="flex items-center gap-1">
      <Star className="w-3 h-3" />
      즐겨찾기
    </Badge>
  );
}`}
                codeKey="with-icon"
              />

              <CodeBlock
                title="동적 상태"
                code={`export function Example() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-2">
      <span>알림</span>
      {count > 0 && (
        <Badge variant="destructive">
          {count > 99 ? '99+' : count}
        </Badge>
      )}
    </div>
  );
}`}
                codeKey="dynamic-badge"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}