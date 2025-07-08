import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { 
  AlertTriangle,
  Trash2,
  LogOut,
  ShieldAlert,
  UserX,
  Database,
  Settings,
  Download,
  Share2,
  Copy,
  Check,
  Accessibility,
  Keyboard,
  MousePointer,
  Eye,
  MessageSquareWarning,
  FileX,
  Clock,
  RefreshCw,
  X
} from 'lucide-react';
import { useState } from 'react';

export function AlertDialogComponentPage() {
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
      title: '기본 경고 다이얼로그',
      description: '사용자의 주의를 요구하는 기본적인 경고 다이얼로그입니다.',
      component: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <AlertTriangle className="w-4 h-4 mr-2" />
              경고 표시
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                주의가 필요합니다
              </AlertDialogTitle>
              <AlertDialogDescription>
                이 작업을 계속하기 전에 확인이 필요합니다. 
                계속 진행하시겠습니까?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>계속</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog"
import { Button } from "./components/ui/button"
import { AlertTriangle } from "lucide-react"

export function BasicAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <AlertTriangle className="w-4 h-4 mr-2" />
          경고 표시
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            주의가 필요합니다
          </AlertDialogTitle>
          <AlertDialogDescription>
            이 작업을 계속하기 전에 확인이 필요합니다. 
            계속 진행하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>계속</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`
    },
    {
      title: '삭제 확인 다이얼로그',
      description: '위험한 작업에 대한 확인을 요구하는 삭제 다이얼로그입니다.',
      component: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              계정 삭제
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2 text-destructive">
                <Trash2 className="w-5 h-5" />
                계정을 정말 삭제하시겠습니까?
              </AlertDialogTitle>
              <AlertDialogDescription>
                이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 
                영구적으로 삭제되며 복구할 수 없습니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                삭제
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `export function DeleteConfirmDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          계정 삭제
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="w-5 h-5" />
            계정을 정말 삭제하시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 
            영구적으로 삭제되며 복구할 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`
    },
    {
      title: '로그아웃 확인 다이얼로그',
      description: '사용자 세션 종료를 확인하는 다이얼로그입니다.',
      component: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost">
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <LogOut className="w-5 h-5" />
                로그아웃 하시겠습니까?
              </AlertDialogTitle>
              <AlertDialogDescription>
                현재 세션이 종료되고 로그인 페이지로 이동합니다.
                저장하지 않은 변경사항이 있다면 먼저 저장해주세요.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>로그아웃</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `export function LogoutConfirmDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          <LogOut className="w-4 h-4 mr-2" />
          로그아웃
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <LogOut className="w-5 h-5" />
            로그아웃 하시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription>
            현재 세션이 종료되고 로그인 페이지로 이동합니다.
            저장하지 않은 변경사항이 있다면 먼저 저장해주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>로그아웃</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`
    },
    {
      title: '보안 경고 다이얼로그',
      description: '보안 관련 중요한 알림을 표시하는 다이얼로그입니다.',
      component: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
              <ShieldAlert className="w-4 h-4 mr-2" />
              보안 알림
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2 text-amber-600">
                <ShieldAlert className="w-5 h-5" />
                보안 경고
              </AlertDialogTitle>
              <AlertDialogDescription>
                계정에 의심스러운 활동이 감지되었습니다.
                다른 장소에서 로그인 시도가 있었는지 확인해주세요.
                본인이 아니라면 즉시 비밀번호를 변경하시기 바랍니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>나중에</AlertDialogCancel>
              <AlertDialogAction className="bg-amber-600 text-white hover:bg-amber-700">
                비밀번호 변경
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `export function SecurityAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
          <ShieldAlert className="w-4 h-4 mr-2" />
          보안 알림
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-amber-600">
            <ShieldAlert className="w-5 h-5" />
            보안 경고
          </AlertDialogTitle>
          <AlertDialogDescription>
            계정에 의심스러운 활동이 감지되었습니다.
            다른 장소에서 로그인 시도가 있었는지 확인해주세요.
            본인이 아니라면 즉시 비밀번호를 변경하시기 바랍니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>나중에</AlertDialogCancel>
          <AlertDialogAction className="bg-amber-600 text-white hover:bg-amber-700">
            비밀번호 변경
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`
    },
    {
      title: '데이터 내보내기 확인',
      description: '데이터 처리 작업을 확인하는 다이얼로그입니다.',
      component: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              데이터 내보내기
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-600" />
                데이터를 내보내시겠습니까?
              </AlertDialogTitle>
              <AlertDialogDescription>
                모든 사용자 데이터를 CSV 파일로 내보냅니다.
                대용량 데이터의 경우 처리에 시간이 걸릴 수 있습니다.
                내보내기가 완료되면 이메일로 다운로드 링크를 보내드립니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction className="bg-blue-600 text-white hover:bg-blue-700">
                내보내기 시작
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `export function ExportDataDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          데이터 내보내기
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-600" />
            데이터를 내보내시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription>
            모든 사용자 데이터를 CSV 파일로 내보냅니다.
            대용량 데이터의 경우 처리에 시간이 걸릴 수 있습니다.
            내보내기가 완료되면 이메일로 다운로드 링크를 보내드립니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction className="bg-blue-600 text-white hover:bg-blue-700">
            내보내기 시작
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`
    }
  ];

  const variants = [
    {
      title: '정보성 다이얼로그',
      description: '일반적인 정보를 전달할 때 사용합니다.',
      icon: <MessageSquareWarning className="w-4 h-4 text-blue-600" />,
      example: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">정보 확인</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>업데이트 알림</AlertDialogTitle>
              <AlertDialogDescription>
                시스템 업데이트가 완료되었습니다. 새로운 기능을 확인해보세요.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>확인</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
    {
      title: '경고 다이얼로그',
      description: '주의가 필요한 상황을 알릴 때 사용합니다.',
      icon: <AlertTriangle className="w-4 h-4 text-amber-600" />,
      example: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-amber-600">경고</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-amber-600">저장되지 않은 변경사항</AlertDialogTitle>
              <AlertDialogDescription>
                저장하지 않은 변경사항이 있습니다. 계속하시겠습니까?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>계속</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
    {
      title: '위험 다이얼로그',
      description: '위험하거나 되돌릴 수 없는 작업을 확인할 때 사용합니다.',
      icon: <Trash2 className="w-4 h-4 text-destructive" />,
      example: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">위험한 작업</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-destructive">파일 삭제</AlertDialogTitle>
              <AlertDialogDescription>
                이 파일을 영구적으로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                삭제
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    }
  ];

  const features = [
    {
      title: '접근 가능한 포커스 관리',
      description: '다이얼로그가 열리면 자동으로 포커스가 이동하고, 탭 키로 요소 간 이동이 가능합니다.',
      icon: '🎯'
    },
    {
      title: 'ESC 키 지원',
      description: 'ESC 키를 눌러 다이얼로그를 닫을 수 있으며, 오버레이 클릭으로도 닫기가 가능합니다.',
      icon: '⌨️'
    },
    {
      title: '스크린 리더 지원',
      description: 'ARIA 속성이 적절히 설정되어 스크린 리더 사용자도 쉽게 이용할 수 있습니다.',
      icon: '🔊'
    },
    {
      title: '중요한 의사결정',
      description: '사용자의 즉각적인 주의와 결정이 필요한 중요한 정보를 전달합니다.',
      icon: '⚠️'
    },
    {
      title: '취소 가능한 작업',
      description: '사용자가 작업을 계속할지 취소할지 선택할 수 있는 안전장치를 제공합니다.',
      icon: '🔄'
    },
    {
      title: '일관된 사용자 경험',
      description: '시스템 전반에 걸쳐 일관된 경고 및 확인 다이얼로그 경험을 제공합니다.',
      icon: '✨'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageSquareWarning className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Alert Dialog</h1>
            <p className="text-muted-foreground">
              사용자의 즉각적인 주의와 확인이 필요한 중요한 정보를 전달하는 모달 다이얼로그입니다. 
              위험하거나 되돌릴 수 없는 작업 전에 사용자의 확인을 받을 때 사용합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MessageSquareWarning className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">접근성 우선</Badge>
          <Badge variant="outline">키보드 네비게이션</Badge>
          <Badge variant="outline">사용자 확인</Badge>
          <Badge variant="outline">중요한 의사결정</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">변형 및 용도</TabsTrigger>
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
                <div className="flex items-center justify-center p-8 border rounded-lg bg-background">
                  {example.component}
                </div>
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Variants Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Alert Dialog 변형</CardTitle>
              <CardDescription>
                다양한 상황에 맞는 Alert Dialog 변형들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-1">
                {variants.map((variant, index) => (
                  <div key={index} className="p-6 border rounded-lg space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded-lg">
                        {variant.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{variant.title}</h4>
                        <p className="text-sm text-muted-foreground">{variant.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {variant.example}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용 시나리오</CardTitle>
              <CardDescription>
                Alert Dialog를 사용하면 좋은 구체적인 상황들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-700 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    적절한 사용 사례
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 데이터나 파일 삭제 전 확인</li>
                    <li>• 계정 삭제나 해지 전 경고</li>
                    <li>• 로그아웃 또는 세션 종료 확인</li>
                    <li>• 저장하지 않은 변경사항 경고</li>
                    <li>• 중요한 설정 변경 전 확인</li>
                    <li>• 보안 관련 중요 알림</li>
                    <li>• 결제나 구매 최종 확인</li>
                    <li>• 시스템 업데이트나 재시작 안내</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-red-700 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    피해야 할 사용 사례
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 일반적인 정보 표시</li>
                    <li>• 성공 메시지나 완료 알림</li>
                    <li>• 복잡한 폼이나 입력 요구</li>
                    <li>• 장시간 표시되는 알림</li>
                    <li>• 단순한 예/아니오가 아닌 복잡한 선택</li>
                    <li>• 자주 발생하는 일상적인 확인</li>
                    <li>• 사용자 교육이나 도움말</li>
                    <li>• 광고나 프로모션 내용</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>디자인 원칙</CardTitle>
              <CardDescription>
                효과적인 Alert Dialog 디자인을 위한 원칙들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    명확한 제목
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    사용자가 무엇을 확인해야 하는지 명확하게 전달하는 제목을 사용하세요.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <MessageSquareWarning className="w-4 h-4" />
                    구체적인 설명
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    작업의 결과와 영향을 구체적으로 설명하여 사용자가 충분히 이해할 수 있도록 하세요.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <MousePointer className="w-4 h-4" />
                    명확한 액션
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    "삭제", "취소" 같은 명확한 액션 버튼을 사용하고, 기본 액션을 시각적으로 구분하세요.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    적절한 위험도 표시
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    위험한 작업일수록 더 강한 시각적 신호(빨간색, 경고 아이콘)를 사용하세요.
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
                Alert Dialog를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-amber-700">⚠️ 경고가 필요할 때</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 되돌릴 수 없는 작업</li>
                      <li>• 데이터 손실 위험</li>
                      <li>• 중요한 설정 변경</li>
                      <li>• 보안 관련 작업</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">🔍 확인이 필요할 때</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 중요한 의사결정</li>
                      <li>• 작업 진행 전 최종 확인</li>
                      <li>• 사용자 의도 재확인</li>
                      <li>• 예상치 못한 결과 방지</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">📢 즉각적인 주의가 필요할 때</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 시스템 오류 알림</li>
                      <li>• 보안 경고</li>
                      <li>• 긴급한 업데이트</li>
                      <li>• 계정 상태 변경</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">작성 가이드라인</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 예시</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="font-medium">계정을 정말 삭제하시겠습니까?</div>
                      <div className="text-muted-foreground mt-1">
                        이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 명확하고 직접적인 질문</li>
                      <li>• 구체적인 결과 설명</li>
                      <li>• 되돌릴 수 없음을 강조</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 피해야 할 예시</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="font-medium">작업을 수행하시겠습니까?</div>
                      <div className="text-muted-foreground mt-1">
                        이 작업을 진행합니다.
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 모호한 표현</li>
                      <li>• 구체적이지 않은 설명</li>
                      <li>• 결과나 영향 명시 없음</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                Alert Dialog의 접근성 기능과 고려사항입니다.
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
                    <span>다음 버튼으로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift + Tab</kbd>
                    <span>이전 버튼으로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                    <span>포커스된 버튼 실행</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                    <span>다이얼로그 닫기</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>role="alertdialog":</strong> 긴급한 알림임을 스크린 리더에 전달</li>
                  <li>• <strong>aria-labelledby:</strong> 제목과 다이얼로그 연결</li>
                  <li>• <strong>aria-describedby:</strong> 설명과 다이얼로그 연결</li>
                  <li>• <strong>자동 포커스:</strong> 다이얼로그가 열리면 첫 번째 버튼에 포커스</li>
                  <li>• <strong>포커스 트랩:</strong> 다이얼로그 내부에서만 포커스 이동</li>
                  <li>• <strong>포커스 복원:</strong> 닫힐 때 원래 위치로 포커스 복원</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">접근성 팁</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 색상만으로 중요도를 구분하지 말고 아이콘도 함께 사용하세요</li>
                  <li>• 버튼 텍스트는 명확하고 구체적으로 작성하세요</li>
                  <li>• 취소 버튼을 항상 제공하여 사용자가 빠져나갈 수 있게 하세요</li>
                  <li>• 다이얼로그 텍스트는 12px 이상의 크기를 사용하세요</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementation Tab */}
        <TabsContent value="code" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>컴포넌트 구조</CardTitle>
              <CardDescription>
                Alert Dialog의 주요 컴포넌트와 사용법입니다.
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
                        <td className="p-2 font-mono">AlertDialog</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogTrigger</td>
                        <td className="p-2">다이얼로그를 여는 트리거</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogContent</td>
                        <td className="p-2">다이얼로그 내용 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogHeader</td>
                        <td className="p-2">헤더 영역</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogTitle</td>
                        <td className="p-2">제목</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogDescription</td>
                        <td className="p-2">설명 텍스트</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogFooter</td>
                        <td className="p-2">버튼 영역</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogAction</td>
                        <td className="p-2">주요 액션 버튼</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDialogCancel</td>
                        <td className="p-2">취소 버튼</td>
                        <td className="p-2">권장</td>
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`function MyAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">삭제</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없습니다. 파일이 영구적으로 삭제됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>삭제</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="상태 관리가 있는 사용법"
                code={`function ControlledAlertDialog() {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    // 삭제 로직 실행
    console.log("삭제됨");
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">계정 삭제</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>계정을 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            모든 데이터가 영구적으로 삭제되며 복구할 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDelete}
            className="bg-destructive hover:bg-destructive/90"
          >
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
                codeKey="controlled-usage"
              />

              <CodeBlock
                title="커스터마이징"
                code={`function CustomAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">커스텀 스타일</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-amber-600">
            <AlertTriangle className="w-5 h-5" />
            보안 경고
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            의심스러운 로그인 시도가 감지되었습니다.
            비밀번호를 변경하시는 것을 권장합니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col space-y-2 sm:space-y-0">
          <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">
            비밀번호 변경
          </AlertDialogAction>
          <AlertDialogCancel>나중에</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
                codeKey="custom-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquareWarning className="w-5 h-5" />
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