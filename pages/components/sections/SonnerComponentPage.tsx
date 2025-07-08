import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { toast } from 'sonner';
import { 
  Check, 
  X, 
  AlertTriangle, 
  Info, 
  Heart, 
  Loader2, 
  Settings, 
  Send, 
  Copy, 
  Download,
  MessageSquare,
  CheckCircle,
  XCircle,
  Trash2,
  Upload,
  Bell,
  Wifi,
  RefreshCw
} from 'lucide-react';

export function SonnerComponentPage() {
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
      title: '기본 토스트 유형',
      description: '다양한 상황에 맞는 토스트 메시지의 기본 유형들입니다.',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => toast.success("저장되었습니다!", {
                description: "모든 변경사항이 성공적으로 저장되었습니다."
              })}
              className="bg-green-600 hover:bg-green-700"
            >
              <Check className="w-4 h-4 mr-2" />
              성공 알림
            </Button>
            <Button 
              onClick={() => toast.error("오류가 발생했습니다", {
                description: "네트워크 연결을 확인해주세요."
              })}
              variant="destructive"
            >
              <X className="w-4 h-4 mr-2" />
              오류 알림
            </Button>
            <Button 
              onClick={() => toast.warning("주의가 필요합니다", {
                description: "이 작업은 되돌릴 수 없습니다."
              })}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              경고 알림
            </Button>
            <Button 
              onClick={() => toast.info("새로운 업데이트", {
                description: "버전 2.1.0이 출시되었습니다."
              })}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Info className="w-4 h-4 mr-2" />
              정보 알림
            </Button>
          </div>
        </div>
      ),
      code: `import { toast } from "sonner"

// 성공 토스트
toast.success("저장되었습니다!", {
  description: "모든 변경사항이 성공적으로 저장되었습니다."
})

// 오류 토스트
toast.error("오류가 발생했습니다", {
  description: "네트워크 연결을 확인해주세요."
})

// 경고 토스트  
toast.warning("주의가 필요합니다", {
  description: "이 작업은 되돌릴 수 없습니다."
})

// 정보 토스트
toast.info("새로운 업데이트", {
  description: "버전 2.1.0이 출시되었습니다."
})`
    },
    {
      title: '액션 버튼이 있는 토스트',
      description: '사용자가 직접 작업할 수 있는 액션 버튼을 포함한 토스트입니다.',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => toast("파일이 삭제되었습니다", {
                description: "파일을 영구적으로 삭제했습니다.",
                action: {
                  label: "실행 취소",
                  onClick: () => toast.success("파일이 복원되었습니다")
                }
              })}
              variant="outline"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              삭제 + 실행취소
            </Button>
            <Button 
              onClick={() => toast("새로운 메시지", {
                description: "John Doe가 메시지를 보냈습니다.",
                action: {
                  label: "확인",
                  onClick: () => toast("메시지를 확인했습니다")
                }
              })}
              variant="outline"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              메시지 알림
            </Button>
          </div>
        </div>
      ),
      code: `// 실행 취소 가능한 토스트
toast("파일이 삭제되었습니다", {
  description: "파일을 영구적으로 삭제했습니다.",
  action: {
    label: "실행 취소",
    onClick: () => toast.success("파일이 복원되었습니다")
  }
})

// 확인 액션이 있는 토스트
toast("새로운 메시지", {
  description: "John Doe가 메시지를 보냈습니다.",
  action: {
    label: "확인",
    onClick: () => toast("메시지를 확인했습니다")
  }
})`
    },
    {
      title: '로딩 및 프로미스 토스트',
      description: '비동기 작업의 진행 상태를 보여주는 로딩 및 프로미스 토스트입니다.',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => {
                const promise = new Promise((resolve) => setTimeout(resolve, 2000));
                toast.promise(promise, {
                  loading: '저장 중...',
                  success: '성공적으로 저장되었습니다!',
                  error: '저장에 실패했습니다.',
                });
              }}
              variant="outline"
            >
              <Upload className="w-4 h-4 mr-2" />
              파일 업로드
            </Button>
            <Button 
              onClick={() => {
                const toastId = toast.loading("데이터를 로딩 중...", {
                  description: "잠시만 기다려주세요"
                });
                setTimeout(() => {
                  toast.success("로딩이 완료되었습니다!", {
                    id: toastId,
                    description: "데이터를 성공적으로 불러왔습니다"
                  });
                }, 3000);
              }}
              variant="outline"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              데이터 로딩
            </Button>
          </div>
        </div>
      ),
      code: `// 프로미스를 이용한 토스트
const promise = new Promise((resolve) => setTimeout(resolve, 2000))
toast.promise(promise, {
  loading: '저장 중...',
  success: '성공적으로 저장되었습니다!',
  error: '저장에 실패했습니다.',
})

// 로딩 토스트를 수동으로 업데이트
const toastId = toast.loading("데이터를 로딩 중...", {
  description: "잠시만 기다려주세요"
})

setTimeout(() => {
  toast.success("로딩이 완료되었습니다!", {
    id: toastId,
    description: "데이터를 성공적으로 불러왔습니다"
  })
}, 3000)`
    }
  ];

  const toastOptions = [
    {
      title: '위치 설정',
      description: '토스트가 표시될 화면 위치를 설정할 수 있습니다.',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <Button 
              onClick={() => toast("상단 좌측", { position: "top-left" })} 
              variant="outline" 
              size="sm"
            >
              상단 좌측
            </Button>
            <Button 
              onClick={() => toast("상단 중앙", { position: "top-center" })} 
              variant="outline" 
              size="sm"
            >
              상단 중앙
            </Button>
            <Button 
              onClick={() => toast("상단 우측", { position: "top-right" })} 
              variant="outline" 
              size="sm"
            >
              상단 우측
            </Button>
            <Button 
              onClick={() => toast("하단 좌측", { position: "bottom-left" })} 
              variant="outline" 
              size="sm"
            >
              하단 좌측
            </Button>
            <Button 
              onClick={() => toast("하단 중앙", { position: "bottom-center" })} 
              variant="outline" 
              size="sm"
            >
              하단 중앙
            </Button>
            <Button 
              onClick={() => toast("하단 우측", { position: "bottom-right" })} 
              variant="outline" 
              size="sm"
            >
              하단 우측
            </Button>
          </div>
        </div>
      ),
      code: `// 위치 옵션
toast("메시지", { position: "top-left" })
toast("메시지", { position: "top-center" })
toast("메시지", { position: "top-right" })
toast("메시지", { position: "bottom-left" })
toast("메시지", { position: "bottom-center" })
toast("메시지", { position: "bottom-right" })`
    },
    {
      title: '지속 시간 및 닫기 옵션',
      description: '토스트의 표시 시간과 닫기 동작을 제어할 수 있습니다.',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => toast("자동으로 닫히지 않습니다", { duration: Infinity })} 
              variant="outline"
            >
              지속적 표시
            </Button>
            <Button 
              onClick={() => toast("빠르게 사라집니다", { duration: 1000 })} 
              variant="outline"
            >
              빠른 닫기 (1초)
            </Button>
            <Button 
              onClick={() => toast("닫기 버튼 없음", { dismissible: false })} 
              variant="outline"
            >
              닫기 불가
            </Button>
            <Button 
              onClick={() => toast.dismiss()} 
              variant="outline"
            >
              모든 토스트 닫기
            </Button>
          </div>
        </div>
      ),
      code: `// 지속 시간 설정
toast("메시지", { duration: Infinity }) // 자동으로 닫히지 않음
toast("메시지", { duration: 1000 }) // 1초 후 닫힘

// 닫기 옵션
toast("메시지", { dismissible: false }) // 닫기 버튼 숨김
toast.dismiss() // 모든 토스트 닫기`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Toaster</h1>
            <p className="text-muted-foreground">
              사용자에게 중요한 정보나 액션 결과를 알리는 아름답고 사용하기 쉬운 토스트 알림 컴포넌트입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            4가지 토스트 유형
          </Badge>
          <Badge variant="outline">액션 버튼 지원</Badge>
          <Badge variant="outline">프로미스 처리</Badge>
          <Badge variant="outline">6가지 위치 옵션</Badge>
          <Badge variant="outline">접근성 완벽 지원</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">사용 예시</TabsTrigger>
          <TabsTrigger value="options">옵션 및 설정</TabsTrigger>
          <TabsTrigger value="usage">사용 가이드</TabsTrigger>
          <TabsTrigger value="code">구현 방법</TabsTrigger>
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

        {/* Options & Settings Tab */}
        <TabsContent value="options" className="space-y-8">
          {toastOptions.map((option, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {option.component}
                <CodeBlock code={option.code} codeKey={`option-${index}`} />
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>커스텀 토스트</CardTitle>
              <CardDescription>완전히 커스터마이징된 토스트 컴포넌트를 만들 수 있습니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Button 
                  onClick={() => toast.custom((t) => (
                    <div className="bg-popover border border-border rounded-lg p-4 flex items-center gap-3 shadow-lg">
                      <Heart className="w-5 h-5 text-red-500" />
                      <div className="flex-1">
                        <div className="font-medium">좋아요를 받았습니다!</div>
                        <div className="text-sm text-muted-foreground">John Doe가 당신의 게시물을 좋아합니다</div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => toast.dismiss(t)}
                        className="h-6 w-6 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  variant="outline"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  커스텀 토스트
                </Button>
              </div>
              <CodeBlock
                code={`toast.custom((t) => (
  <div className="bg-popover border border-border rounded-lg p-4 flex items-center gap-3 shadow-lg">
    <Heart className="w-5 h-5 text-red-500" />
    <div className="flex-1">
      <div className="font-medium">좋아요를 받았습니다!</div>
      <div className="text-sm text-muted-foreground">John Doe가 당신의 게시물을 좋아합니다</div>
    </div>
    <Button 
      size="sm" 
      variant="ghost" 
      onClick={() => toast.dismiss(t)}
      className="h-6 w-6 p-0"
    >
      <X className="w-4 h-4" />
    </Button>
  </div>
))`}
                codeKey="custom-toast"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>사용 가이드라인</CardTitle>
              <CardDescription>효과적인 토스트 알림을 위한 모범 사례입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    권장사항
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 사용자 액션의 결과를 명확하게 알림</li>
                    <li>• 간결하고 이해하기 쉬운 메시지 작성</li>
                    <li>• 적절한 토스트 유형 선택 (성공, 오류, 경고, 정보)</li>
                    <li>• 실행 취소가 가능한 액션에는 액션 버튼 제공</li>
                    <li>• 비동기 작업에는 로딩 상태 표시</li>
                    <li>• 일관된 위치와 스타일 유지</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 자주 토스트 표시하여 사용자 방해</li>
                    <li>• 긴 텍스트나 복잡한 정보 포함</li>
                    <li>• 중요한 정보를 토스트로만 전달</li>
                    <li>• 부적절한 토스트 유형 사용</li>
                    <li>• 너무 짧은 지속 시간으로 설정</li>
                    <li>• 동시에 여러 토스트 표시</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>토스트 vs 다른 알림 방식</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Toast</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    일시적이고 방해하지 않는 알림에 가장 적합
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 저장/삭제 확인</li>
                    <li>• 상태 변경 알림</li>
                    <li>• 실행 취소 제공</li>
                    <li>• 비동기 작업 상태</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Dialog</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    사용자의 즉각적인 응답이 필요한 경우
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 확인/취소 선택</li>
                    <li>• 중요한 경고</li>
                    <li>• 복잡한 정보</li>
                    <li>• 폼 입력</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Alert</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    페이지 내 지속적인 알림에 가장 적합
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 폼 오류 메시지</li>
                    <li>• 시스템 상태</li>
                    <li>• 주의사항</li>
                    <li>• 안내 메시지</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>모든 사용자가 토스트 알림에 접근할 수 있도록 보장하기</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">ARIA 지원</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      Toaster는 자동으로 적절한 ARIA 속성을 제공하여 스크린 리더가 토스트 내용을 읽을 수 있도록 합니다.
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                      <span>토스트 닫기</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>액션 버튼 실행</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>다음 요소로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift+Tab</kbd>
                      <span>이전 요소로 이동</span>
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
              <CardTitle>API 참조</CardTitle>
              <CardDescription>Toaster의 주요 메서드와 옵션들입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">기본 메서드</h4>
                  <CodeBlock
                    code={`// 기본 토스트
toast(message: string, options?: ToastOptions)

// 타입별 토스트
toast.success(message: string, options?: ToastOptions)
toast.error(message: string, options?: ToastOptions)
toast.warning(message: string, options?: ToastOptions)
toast.info(message: string, options?: ToastOptions)
toast.loading(message: string, options?: ToastOptions)

// 특수 메서드
toast.custom(jsx: ReactNode, options?: ToastOptions)
toast.promise(promise: Promise, messages: PromiseData)
toast.dismiss(id?: string | number) // 특정 토스트 또는 모든 토스트 닫기`}
                    codeKey="methods"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">주요 옵션</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium mb-2">ToastOptions</h5>
                      <CodeBlock
                        code={`interface ToastOptions {
  description?: string          // 부제목
  duration?: number            // 표시 시간(ms), Infinity로 설정 시 자동으로 닫히지 않음
  position?: Position          // 표시 위치
  dismissible?: boolean        // 닫기 버튼 표시 여부
  action?: ActionButton        // 액션 버튼
  cancel?: CancelButton        // 취소 버튼
  id?: string | number         // 고유 ID
  onDismiss?: () => void       // 닫힐 때 콜백
  onAutoClose?: () => void     // 자동으로 닫힐 때 콜백
}`}
                        codeKey="toast-options"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-2">Position 옵션</h5>
                      <CodeBlock
                        code={`type Position = 
  | "top-left" 
  | "top-center" 
  | "top-right"
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right"`}
                        codeKey="position-options"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-2">ActionButton</h5>
                      <CodeBlock
                        code={`interface ActionButton {
  label: string
  onClick: () => void
}`}
                        codeKey="action-button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용 예제</CardTitle>
              <CardDescription>다양한 상황에서의 구체적인 사용 예제들입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">폼 제출 처리</h4>
                  <CodeBlock
                    code={`const handleSubmit = async (data) => {
  const submitPromise = submitForm(data)
  
  toast.promise(submitPromise, {
    loading: '제출 중...',
    success: '성공적으로 제출되었습니다!',
    error: '제출에 실패했습니다. 다시 시도해주세요.'
  })
}`}
                    codeKey="form-submit"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">파일 업로드</h4>
                  <CodeBlock
                    code={`const uploadFile = async (file) => {
  const toastId = toast.loading('파일 업로드 중...', {
    description: \`\${file.name} 업로드 중\`
  })
  
  try {
    await uploadToServer(file)
    toast.success('파일이 업로드되었습니다!', {
      id: toastId,
      description: \`\${file.name}이 성공적으로 업로드되었습니다.\`
    })
  } catch (error) {
    toast.error('업로드에 실패했습니다.', {
      id: toastId,
      description: '다시 시도해주세요.'
    })
  }
}`}
                    codeKey="file-upload"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">실행 취소 가능한 삭제</h4>
                  <CodeBlock
                    code={`const deleteItem = (item) => {
  // 임시로 삭제 처리
  removeFromUI(item)
  
  toast(\`\${item.name}이 삭제되었습니다\`, {
    description: '이 작업을 실행 취소할 수 있습니다.',
    action: {
      label: '실행 취소',
      onClick: () => {
        restoreToUI(item)
        toast.success('삭제가 취소되었습니다')
      }
    },
    onAutoClose: () => {
      // 자동으로 닫힐 때 실제 삭제 실행
      permanentlyDelete(item)
    }
  })
}`}
                    codeKey="undo-delete"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}