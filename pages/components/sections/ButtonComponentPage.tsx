import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  Download, 
  Mail, 
  ArrowRight, 
  ChevronDown, 
  Loader2, 
  Plus, 
  Search,
  Copy,
  Check,
  Zap,
  Palette,
  Mouse,
  Accessibility,
  Code2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export function ButtonComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Mouse className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Button</h1>
            <p className="text-muted-foreground">
              사용자가 한 번의 탭으로 액션을 트리거할 수 있는 클릭 가능한 요소입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            5가지 변형
          </Badge>
          <Badge variant="outline">4가지 크기</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">키보드 탐색</Badge>
          <Badge variant="outline">포커스 관리</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">변형 & 크기</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>기본 예제</CardTitle>
              <CardDescription>
                가장 일반적인 Button 사용 사례와 조합
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">기본 액션</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>주요 액션</Button>
                  <Button variant="secondary">보조 액션</Button>
                  <Button variant="outline">아웃라인</Button>
                  <Button variant="ghost">고스트</Button>
                  <Button variant="destructive">삭제</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">아이콘과 함께</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Mail className="w-4 h-4 mr-2" />
                    이메일 보내기
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    다운로드
                  </Button>
                  <Button variant="secondary">
                    계속하기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="ghost">
                    <Plus className="w-4 h-4 mr-2" />
                    추가
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">상태</h4>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>비활성화됨</Button>
                  <Button onClick={handleLoadingDemo} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        로딩 중...
                      </>
                    ) : (
                      '로딩 시뮬레이션'
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    작은 버튼
                  </Button>
                  <Button variant="default" size="lg">
                    큰 버튼
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>실제 사용 사례</CardTitle>
              <CardDescription>
                실제 애플리케이션에서 자주 사용되는 Button 패턴
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">폼 액션</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex gap-2">
                      <Button className="flex-1">제출</Button>
                      <Button variant="outline" className="flex-1">취소</Button>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full">
                      초기화
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">탐색 액션</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <Button className="w-full">
                      시작하기
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">이전</Button>
                      <Button size="sm" className="flex-1">다음</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">메뉴 액션</h4>
                  <div className="p-4 border rounded-lg space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Search className="w-4 h-4 mr-2" />
                      검색
                    </Button>
                    <Button variant="ghost" className="w-full justify-between">
                      더 보기
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">위험한 액션</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <Button variant="destructive" className="w-full">
                      계정 삭제
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      영구 삭제
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Variants & Sizes Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>변형</CardTitle>
              <CardDescription>
                다양한 맥락과 계층 구조에 맞는 5가지 Button 스타일
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Default - 기본</h4>
                  <div className="space-y-4">
                    <Button>기본 버튼</Button>
                    <p className="text-sm text-muted-foreground">
                      가장 중요한 액션에 사용합니다. 페이지당 하나의 기본 버튼만 사용하는 것이 좋습니다.
                    </p>
                    <CodeBlock
                      code={`<Button>기본 버튼</Button>`}
                      codeKey="default-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Secondary - 보조</h4>
                  <div className="space-y-4">
                    <Button variant="secondary">보조 버튼</Button>
                    <p className="text-sm text-muted-foreground">
                      기본 액션보다 덜 중요한 보조 액션에 사용합니다.
                    </p>
                    <CodeBlock
                      code={`<Button variant="secondary">보조 버튼</Button>`}
                      codeKey="secondary-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Outline - 아웃라인</h4>
                  <div className="space-y-4">
                    <Button variant="outline">아웃라인 버튼</Button>
                    <p className="text-sm text-muted-foreground">
                      덜 강조되는 액션이나 취소 버튼에 사용합니다.
                    </p>
                    <CodeBlock
                      code={`<Button variant="outline">아웃라인 버튼</Button>`}
                      codeKey="outline-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Ghost - 고스트</h4>
                  <div className="space-y-4">
                    <Button variant="ghost">고스트 버튼</Button>
                    <p className="text-sm text-muted-foreground">
                      최소한의 시각적 무게를 가진 텍스트 기반 액션에 사용합니다.
                    </p>
                    <CodeBlock
                      code={`<Button variant="ghost">고스트 버튼</Button>`}
                      codeKey="ghost-variant"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Destructive - 파괴적</h4>
                  <div className="space-y-4">
                    <Button variant="destructive">삭제 버튼</Button>
                    <p className="text-sm text-muted-foreground">
                      삭제나 파괴적인 액션에 사용합니다. 주의 깊게 사용해야 합니다.
                    </p>
                    <CodeBlock
                      code={`<Button variant="destructive">삭제 버튼</Button>`}
                      codeKey="destructive-variant"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>크기</CardTitle>
              <CardDescription>
                다양한 레이아웃 요구사항에 맞는 4가지 Button 크기
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Small (sm)</h4>
                  <Button size="sm">작은 버튼</Button>
                  <CodeBlock
                    code={`<Button size="sm">작은 버튼</Button>`}
                    codeKey="small-size"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-4">Default</h4>
                  <Button>기본 크기</Button>
                  <CodeBlock
                    code={`<Button>기본 크기</Button>`}
                    codeKey="default-size"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-4">Large (lg)</h4>
                  <Button size="lg">큰 버튼</Button>
                  <CodeBlock
                    code={`<Button size="lg">큰 버튼</Button>`}
                    codeKey="large-size"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-4">Icon</h4>
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <CodeBlock
                    code={`<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>`}
                    codeKey="icon-size"
                  />
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
                효과적인 Button 사용을 위한 모범 사례
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    권장사항
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 명확하고 행동 지향적인 라벨 사용</li>
                    <li>• 기본 액션에는 하나의 주요 버튼만 사용</li>
                    <li>• 일관된 동사 시제 사용 (예: "저장", "전송")</li>
                    <li>• 적절한 크기와 터치 타겟 제공</li>
                    <li>• 로딩 상태와 비활성화 상태 구현</li>
                    <li>• 키보드 탐색 지원</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 모호한 라벨 (예: "확인", "계속")</li>
                    <li>• 한 화면에 너무 많은 기본 버튼</li>
                    <li>• 일관성 없는 버튼 순서</li>
                    <li>• 너무 작은 터치 타겟</li>
                    <li>• 부적절한 변형 선택</li>
                    <li>• 피드백 없는 상태 변경</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Button을 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>버튼으로 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>버튼 활성화</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                      <span>버튼 활성화</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                      <span>포커스 해제 (일부 경우)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 버튼의 목적을 명확히 설명하는 라벨</li>
                    <li>• aria-label 또는 aria-describedby 사용 시 의미 있는 설명</li>
                    <li>• 상태 변경 시 적절한 피드백 제공</li>
                    <li>• role="button" 명시적 선언 (필요시)</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Button 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 폼 제출</li>
                    <li>• 모달 열기/닫기</li>
                    <li>• 액션 트리거</li>
                    <li>• 명령 실행</li>
                    <li>• 상태 변경</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Link:</strong> 페이지 탐색용</li>
                    <li>• <strong>Toggle:</strong> 온/오프 상태용</li>
                    <li>• <strong>Checkbox:</strong> 다중 선택용</li>
                    <li>• <strong>Radio:</strong> 단일 선택용</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 새 페이지로 이동</li>
                    <li>• 외부 링크 이동</li>
                    <li>• 단순 텍스트 표시</li>
                    <li>• 장식 목적</li>
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
                Button 컴포넌트의 속성과 설정 옵션
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
                      <td className="p-2">"default" | "destructive" | "outline" | "secondary" | "ghost"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">버튼의 시각적 스타일</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">size</td>
                      <td className="p-2">"default" | "sm" | "lg" | "icon"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">버튼의 크기</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">버튼 비활성화 여부</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">asChild</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">자식 요소로 렌더링 여부</td>
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
                code={`import { Button } from "./components/ui/button";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  return <Button>클릭하세요</Button>;
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="아이콘과 함께"
                code={`import { Mail } from "lucide-react";

export function Example() {
  return (
    <Button>
      <Mail className="w-4 h-4 mr-2" />
      이메일 보내기
    </Button>
  );
}`}
                codeKey="with-icon"
              />

              <CodeBlock
                title="비동기 액션"
                code={`import { useState } from "react";
import { Loader2 } from "lucide-react";

export function Example() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button disabled={isLoading} onClick={() => setIsLoading(true)}>
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          로딩 중...
        </>
      ) : (
        "제출"
      )}
    </Button>
  );
}`}
                codeKey="async-action"
              />

              <CodeBlock
                title="링크로 사용"
                code={`export function Example() {
  return (
    <Button asChild>
      <a href="/dashboard">대시보드로 이동</a>
    </Button>
  );
}`}
                codeKey="as-link"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}