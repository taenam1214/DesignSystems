import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow, SimpleTooltip } from '../ui/tooltip';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Plus, 
  Settings, 
  HelpCircle, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  Copy,
  Edit,
  Trash2,
  Download,
  Share2,
  Bell,
  User,
  Mail,
  Calendar,
  Clock,
  Search,
  Filter,
  BookmarkPlus,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Heart,
  Star,
  MessageSquare,
  Palette,
  Accessibility,
  Check
} from 'lucide-react';
import { useState } from 'react';

export function TooltipComponentPage() {
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
      title: '간단한 툴팁',
      description: 'SimpleTooltip 컴포넌트로 툴팁을 추가하는 가장 쉬운 방법입니다.',
      component: (
        <div className="flex gap-4 justify-center flex-wrap">
          <SimpleTooltip content="간단한 툴팁입니다">
            <Button variant="outline">마우스를 올려보세요</Button>
          </SimpleTooltip>

          <SimpleTooltip content="새 항목 생성" side="bottom">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              생성
            </Button>
          </SimpleTooltip>

          <SimpleTooltip 
            content={
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>설정 패널 열기</span>
              </div>
            }
            side="right"
          >
            <Button variant="outline" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </SimpleTooltip>
        </div>
      ),
      code: `import { SimpleTooltip } from "./components/ui/tooltip"

<SimpleTooltip content="간단한 툴팁입니다">
  <Button variant="outline">마우스를 올려보세요</Button>
</SimpleTooltip>

<SimpleTooltip content="새 항목 생성" side="bottom">
  <Button>
    <Plus className="w-4 h-4 mr-2" />
    생성
  </Button>
</SimpleTooltip>

<SimpleTooltip 
  content={
    <div className="flex items-center gap-2">
      <Settings className="w-4 h-4" />
      <span>설정 패널 열기</span>
    </div>
  }
  side="right"
>
  <Button variant="outline" size="icon">
    <Settings className="w-4 h-4" />
  </Button>
</SimpleTooltip>`
    },
    {
      title: '고급 구성',
      description: '구성 가능한 툴팁 컴포넌트를 사용한 완전한 제어.',
      component: (
        <TooltipProvider delayDuration={300}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">고급 툴팁</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>구성 가능한 컴포넌트를 사용합니다</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  좋아요
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>즐겨찾기에 추가</span>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="cursor-help">
                  프리미엄
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="max-w-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">프리미엄 기능</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    이 기능을 사용하려면 프리미엄 구독이 필요합니다. 지금 업그레이드하여 고급 기능을 사용해보세요.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      ),
      code: `<TooltipProvider delayDuration={300}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">고급 툴팁</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>구성 가능한 컴포넌트를 사용합니다</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Badge variant="secondary" className="cursor-help">
        프리미엄
      </Badge>
    </TooltipTrigger>
    <TooltipContent className="max-w-sm">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="font-medium">프리미엄 기능</span>
        </div>
        <p className="text-xs text-muted-foreground">
          이 기능을 사용하려면 프리미엄 구독이 필요합니다.
        </p>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`
    },
    {
      title: '아이콘 액션',
      description: '아이콘 전용 버튼에 필수적이며 컨텍스트를 제공하고 접근성을 향상시킵니다.',
      component: (
        <div className="flex gap-2 flex-wrap justify-center">
          <SimpleTooltip content="애플리케이션 설정">
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="이 콘텐츠 공유">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="파일 다운로드">
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="클립보드에 복사">
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="항목 편집">
            <Button variant="outline" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="영구 삭제" side="top">
            <Button variant="destructive" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </SimpleTooltip>
        </div>
      ),
      code: `<SimpleTooltip content="애플리케이션 설정">
  <Button variant="outline" size="icon">
    <Settings className="h-4 w-4" />
  </Button>
</SimpleTooltip>

<SimpleTooltip content="영구 삭제" side="top">
  <Button variant="destructive" size="icon">
    <Trash2 className="h-4 w-4" />
  </Button>
</SimpleTooltip>`
    },
    {
      title: '위치 옵션',
      description: '포괄적인 위치 옵션으로 툴팁 배치를 제어합니다. 각 버튼에 마우스를 올려 툴팁을 확인하세요.',
      component: (
        <div className="space-y-8">
          {/* Basic Side Positioning */}
          <div className="space-y-4">
            <div className="text-center">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">면 위치</h4>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Top row - only top */}
                <div></div>
                <SimpleTooltip 
                  content={
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>위쪽 툴팁</span>
                    </div>
                  } 
                  side="top"
                  delayDuration={100}
                >
                  <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 hover:bg-blue-100">
                    위쪽
                  </Button>
                </SimpleTooltip>
                <div></div>

                {/* Middle row - left and right */}
                <SimpleTooltip 
                  content={
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>왼쪽 툴팁</span>
                    </div>
                  } 
                  side="left"
                  delayDuration={100}
                >
                  <Button variant="outline" size="sm" className="bg-green-50 border-green-200 hover:bg-green-100">
                    왼쪽
                  </Button>
                </SimpleTooltip>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                    대상
                  </div>
                </div>
                <SimpleTooltip 
                  content={
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>오른쪽 툴팁</span>
                    </div>
                  } 
                  side="right"
                  delayDuration={100}
                >
                  <Button variant="outline" size="sm" className="bg-orange-50 border-orange-200 hover:bg-orange-100">
                    오른쪽
                  </Button>
                </SimpleTooltip>

                {/* Bottom row - only bottom */}
                <div></div>
                <SimpleTooltip 
                  content={
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>아래쪽 툴팁</span>
                    </div>
                  } 
                  side="bottom"
                  delayDuration={100}
                >
                  <Button variant="outline" size="sm" className="bg-purple-50 border-purple-200 hover:bg-purple-100">
                    아래쪽
                  </Button>
                </SimpleTooltip>
                <div></div>
              </div>
            </div>
          </div>

          {/* Alignment Options */}
          <div className="space-y-4">
            <div className="text-center">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">정렬 옵션 (아래쪽 면)</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" className="bg-red-50 border-red-200 hover:bg-red-100 w-full">
                      시작 정렬
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="start" className="bg-red-500 text-white border-red-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>시작점으로 정렬</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" className="bg-yellow-50 border-yellow-200 hover:bg-yellow-100 w-full">
                      중앙 정렬
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center" className="bg-yellow-500 text-white border-yellow-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>중앙 정렬</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" className="bg-teal-50 border-teal-200 hover:bg-teal-100 w-full">
                      끝 정렬
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="end" className="bg-teal-500 text-white border-teal-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>끝점으로 정렬</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      ),
      code: `{/* 시각적 피드백이 있는 면 위치 */}
<SimpleTooltip 
  content={
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <span>위쪽 툴팁</span>
    </div>
  } 
  side="top"
  delayDuration={100}
>
  <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 hover:bg-blue-100">
    위쪽
  </Button>
</SimpleTooltip>

{/* 사용자 정의 스타일링이 있는 정렬 옵션 */}
<TooltipProvider delayDuration={100}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="sm" className="bg-red-50 border-red-200 hover:bg-red-100">
        시작 정렬
      </Button>
    </TooltipTrigger>
    <TooltipContent side="bottom" align="start" className="bg-red-500 text-white border-red-600">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span>시작점으로 정렬</span>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`
    },
    {
      title: '폼 통합',
      description: '폼 필드와 상호작용 요소에 유용한 컨텍스트를 제공합니다.',
      component: (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>계정 설정</CardTitle>
            <CardDescription>계정 정보를 업데이트하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일 주소
                </label>
                <SimpleTooltip content="중요한 알림과 비밀번호 재설정에 이 이메일을 사용합니다">
                  <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                </SimpleTooltip>
              </div>
              <Input id="email" placeholder="이메일을 입력하세요" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="notifications" className="text-sm font-medium">
                  알림 설정
                </label>
                <SimpleTooltip 
                  content={
                    <div className="max-w-xs">
                      <p className="font-medium mb-1">알림 설정</p>
                      <p className="text-xs text-muted-foreground">
                        계정 활동, 보안 업데이트, 기능 공지사항에 대한 알림을 언제 어떻게 받을지 제어합니다.
                      </p>
                    </div>
                  }
                  contentClassName="max-w-xs"
                >
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </SimpleTooltip>
              </div>
              <div className="flex gap-2">
                <SimpleTooltip content="모든 알림 받기">
                  <Button variant="outline" size="sm">모두</Button>
                </SimpleTooltip>
                <SimpleTooltip content="중요한 알림만 받기">
                  <Button variant="ghost" size="sm">중요</Button>
                </SimpleTooltip>
                <SimpleTooltip content="모든 알림 비활성화">
                  <Button variant="ghost" size="sm">없음</Button>
                </SimpleTooltip>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <SimpleTooltip content="계정의 모든 변경사항 저장">
                <Button className="flex-1">변경사항 저장</Button>
              </SimpleTooltip>

              <SimpleTooltip content="변경사항을 취소하고 이전 설정으로 되돌리기">
                <Button variant="outline">취소</Button>
              </SimpleTooltip>
            </div>
          </CardContent>
        </Card>
      ),
      code: `<div className="flex items-center gap-2">
  <label htmlFor="email">이메일 주소</label>
  <SimpleTooltip content="중요한 알림에 이 이메일을 사용합니다">
    <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
  </SimpleTooltip>
</div>

<SimpleTooltip 
  content={
    <div className="max-w-xs">
      <p className="font-medium mb-1">알림 설정</p>
      <p className="text-xs text-muted-foreground">
        알림을 언제 어떻게 받을지 제어합니다.
      </p>
    </div>
  }
  contentClassName="max-w-xs"
>
  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
</SimpleTooltip>`
    },
    {
      title: '풍부한 콘텐츠 예제',
      description: '툴팁에는 여러 요소가 포함된 구조화된 콘텐츠를 담을 수 있습니다.',
      component: (
        <div className="flex gap-4 justify-center flex-wrap">
          <SimpleTooltip 
            content={
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    홍길동
                  </div>
                  <div>
                    <p className="font-medium text-sm">홍길동</p>
                    <p className="text-xs text-muted-foreground">제품 매니저</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>사용 가능</span>
                </div>
              </div>
            }
            contentClassName="max-w-sm"
          >
            <Button variant="outline">
              <User className="w-4 h-4 mr-2" />
              프로필
            </Button>
          </SimpleTooltip>

          <SimpleTooltip 
            content={
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">모든 시스템 정상 작동</span>
                </div>
                <p className="text-xs text-muted-foreground">마지막 확인: 30초 전</p>
                <div className="flex items-center gap-2 text-xs mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>API: 온라인</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>데이터베이스: 연결됨</span>
                </div>
              </div>
            }
          >
            <Badge variant="outline" className="cursor-help">
              시스템 상태
            </Badge>
          </SimpleTooltip>

          <SimpleTooltip 
            content={
              <div className="space-y-1">
                <p className="text-sm font-medium">빠른 검색</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">⌘</kbd>
                  <span>+</span>
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">K</kbd>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  모든 콘텐츠에서 검색
                </p>
              </div>
            }
          >
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              검색
            </Button>
          </SimpleTooltip>
        </div>
      ),
      code: `<SimpleTooltip 
  content={
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
          홍길동
        </div>
        <div>
          <p className="font-medium text-sm">홍길동</p>
          <p className="text-xs text-muted-foreground">제품 매니저</p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center gap-2 text-xs">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>사용 가능</span>
      </div>
    </div>
  }
  contentClassName="max-w-sm"
>
  <Button variant="outline">
    <User className="w-4 h-4 mr-2" />
    프로필
  </Button>
</SimpleTooltip>`
    }
  ];

  const features = [
    {
      title: '간단한 사용법',
      description: 'SimpleTooltip 컴포넌트로 한 줄로 툴팁 추가',
      icon: '⚡'
    },
    {
      title: '풍부한 콘텐츠',
      description: '텍스트, 아이콘, 레이아웃이 포함된 복잡한 툴팁 지원',
      icon: '🎨'
    },
    {
      title: '정확한 위치 제어',
      description: '4방향 위치와 3가지 정렬 옵션으로 정밀한 배치',
      icon: '🎯'
    },
    {
      title: '접근성 완벽 지원',
      description: 'ARIA 속성과 키보드 네비게이션으로 완벽한 접근성',
      icon: '♿'
    },
    {
      title: '지연 시간 설정',
      description: '사용자 경험에 맞는 표시 지연 시간 조절',
      icon: '⏱️'
    },
    {
      title: '반응형 디자인',
      description: '모든 화면 크기에서 적절한 툴팁 표시',
      icon: '📱'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Tooltip</h1>
            <p className="text-muted-foreground">
              호버나 포커스 시 표시되는 작은 팝업으로, 요소에 대한 추가 정보나 설명을 제공합니다. 사용자 경험을 향상시키고 접근성을 개선하는 중요한 컴포넌트입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            7가지 예제
          </Badge>
          <Badge variant="outline">4방향 위치</Badge>
          <Badge variant="outline">풍부한 콘텐츠</Badge>
          <Badge variant="outline">지연 시간 설정</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">위치 및 스타일</TabsTrigger>
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

        {/* Variants & Positioning Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>위치 옵션</CardTitle>
              <CardDescription>
                툴팁의 위치와 정렬을 제어하는 다양한 옵션들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">기본 위치 (side)</h4>
                  <div className="space-y-2 text-sm">
                    <div><code>side="top"</code> - 위쪽에 표시</div>
                    <div><code>side="bottom"</code> - 아래쪽에 표시 (기본값)</div>
                    <div><code>side="left"</code> - 왼쪽에 표시</div>
                    <div><code>side="right"</code> - 오른쪽에 표시</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">정렬 옵션 (align)</h4>
                  <div className="space-y-2 text-sm">
                    <div><code>align="center"</code> - 중앙 정렬 (기본값)</div>
                    <div><code>align="start"</code> - 시작점 정렬</div>
                    <div><code>align="end"</code> - 끝점 정렬</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>지연 시간 설정</CardTitle>
              <CardDescription>
                툴팁이 표시되기까지의 지연 시간을 조절할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">즉시 표시</h5>
                  <div className="space-y-2">
                    <SimpleTooltip content="즉시 표시되는 툴팁" delayDuration={0}>
                      <Button variant="outline" size="sm">0ms</Button>
                    </SimpleTooltip>
                    <p className="text-xs text-muted-foreground">중요한 정보나 오류 상황</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">기본 지연</h5>
                  <div className="space-y-2">
                    <SimpleTooltip content="기본 지연 시간 툴팁" delayDuration={700}>
                      <Button variant="outline" size="sm">700ms</Button>
                    </SimpleTooltip>
                    <p className="text-xs text-muted-foreground">일반적인 도움말과 설명</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">긴 지연</h5>
                  <div className="space-y-2">
                    <SimpleTooltip content="긴 지연 시간 툴팁" delayDuration={1500}>
                      <Button variant="outline" size="sm">1500ms</Button>
                    </SimpleTooltip>
                    <p className="text-xs text-muted-foreground">부가적인 정보나 팁</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>스타일링 옵션</CardTitle>
              <CardDescription>
                툴팁의 모양과 느낌을 사용자 정의할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 flex-wrap justify-center">
                <SimpleTooltip 
                  content="기본 스타일 툴팁"
                  contentClassName="bg-background text-foreground border"
                >
                  <Button variant="outline" size="sm">기본</Button>
                </SimpleTooltip>

                <SimpleTooltip 
                  content="다크 스타일 툴팁"
                  contentClassName="bg-slate-900 text-white border-slate-700"
                >
                  <Button variant="outline" size="sm">다크</Button>
                </SimpleTooltip>

                <SimpleTooltip 
                  content="성공 스타일 툴팁"
                  contentClassName="bg-green-600 text-white border-green-700"
                >
                  <Button variant="outline" size="sm">성공</Button>
                </SimpleTooltip>

                <SimpleTooltip 
                  content="경고 스타일 툴팁"
                  contentClassName="bg-yellow-500 text-black border-yellow-600"
                >
                  <Button variant="outline" size="sm">경고</Button>
                </SimpleTooltip>

                <SimpleTooltip 
                  content="오류 스타일 툴팁"
                  contentClassName="bg-red-600 text-white border-red-700"
                >
                  <Button variant="outline" size="sm">오류</Button>
                </SimpleTooltip>
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
                효과적인 Tooltip 사용을 위한 모범 사례입니다.
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
                    <li>• 간결하고 명확한 텍스트 사용</li>
                    <li>• 아이콘 버튼에는 항상 툴팁 제공</li>
                    <li>• 적절한 지연 시간 설정 (700ms 권장)</li>
                    <li>• 화면 경계에서 자동 위치 조정 활용</li>
                    <li>• 터치 디바이스에서의 대안 제공</li>
                    <li>• 중요한 정보는 툴팁 외에도 접근 가능하게</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 긴 텍스트나 복잡한 정보</li>
                    <li>• 필수 정보를 툴팁에만 의존</li>
                    <li>• 너무 짧거나 긴 지연 시간</li>
                    <li>• 툴팁이 다른 요소를 가리는 경우</li>
                    <li>• 모든 요소에 불필요한 툴팁 추가</li>
                    <li>• 툴팁 내용이 라벨과 중복되는 경우</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>언제 사용하나요?</CardTitle>
              <CardDescription>
                Tooltip과 다른 컴포넌트를 언제 사용할지 결정하는 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Tooltip 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 아이콘 버튼 설명</li>
                    <li>• 잘린 텍스트 전체 내용</li>
                    <li>• 폼 필드 도움말</li>
                    <li>• 상태 표시기 설명</li>
                    <li>• 키보드 단축키 안내</li>
                    <li>• 간단한 부가 정보</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 고려</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Popover:</strong> 상호작용이 필요한 콘텐츠</li>
                    <li>• <strong>Dialog:</strong> 중요한 정보나 액션</li>
                    <li>• <strong>Alert:</strong> 즉시 주의가 필요한 정보</li>
                    <li>• <strong>Label:</strong> 폼 필드의 기본 설명</li>
                    <li>• <strong>Badge:</strong> 상태나 카테고리 표시</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 필수 사용자 정보</li>
                    <li>• 복잡한 폼이나 인터페이스</li>
                    <li>• 에러 메시지나 경고</li>
                    <li>• 내비게이션 메뉴</li>
                    <li>• 터치 전용 인터페이스</li>
                    <li>• 긴 텍스트 블록</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Tooltip을 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tab으로 포커스할 수 있는 요소에 자동 지원</li>
                    <li>• Escape 키로 툴팁 닫기</li>
                    <li>• 포커스 시 툴팁 표시, 포커스 해제 시 숨김</li>
                    <li>• 아이콘 요소는 tab-index="0"으로 포커스 가능하게 설정</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 자동으로 aria-describedby 연결</li>
                    <li>• role="tooltip" 자동 적용</li>
                    <li>• 툴팁 내용이 스크린 리더에서 읽힘</li>
                    <li>• aria-hidden으로 장식용 아이콘 숨김</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">터치 디바이스 고려사항</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 호버가 불가능한 터치 디바이스에서 대안 제공</li>
                    <li>• 중요한 정보는 툴팁 외에도 접근 가능하게</li>
                    <li>• 탭 제스처로 툴팁 표시 가능</li>
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
                Tooltip 컴포넌트들의 속성과 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">SimpleTooltip 속성</h4>
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
                        <td className="p-2 font-mono">content</td>
                        <td className="p-2">ReactNode</td>
                        <td className="p-2">-</td>
                        <td className="p-2">툴팁에 표시할 콘텐츠</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">side</td>
                        <td className="p-2">"top" | "bottom" | "left" | "right"</td>
                        <td className="p-2">"bottom"</td>
                        <td className="p-2">툴팁이 표시될 위치</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">align</td>
                        <td className="p-2">"start" | "center" | "end"</td>
                        <td className="p-2">"center"</td>
                        <td className="p-2">툴팁 정렬 방식</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">delayDuration</td>
                        <td className="p-2">number</td>
                        <td className="p-2">700</td>
                        <td className="p-2">표시 지연 시간 (밀리초)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">sideOffset</td>
                        <td className="p-2">number</td>
                        <td className="p-2">4</td>
                        <td className="p-2">트리거로부터의 거리</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">contentClassName</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">툴팁 콘텐츠의 CSS 클래스</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">고급 컴포넌트</h4>
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
                        <td className="p-2 font-mono">TooltipProvider</td>
                        <td className="p-2">전역 설정 제공자</td>
                        <td className="p-2">고급 사용 시 필요</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">Tooltip</td>
                        <td className="p-2">툴팁 루트 컨테이너</td>
                        <td className="p-2">고급 사용 시 필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TooltipTrigger</td>
                        <td className="p-2">툴팁을 트리거하는 요소</td>
                        <td className="p-2">고급 사용 시 필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TooltipContent</td>
                        <td className="p-2">툴팁 콘텐츠</td>
                        <td className="p-2">고급 사용 시 필수</td>
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
                code={`import { SimpleTooltip } from "./components/ui/tooltip";

// 고급 사용을 위한 가져오기
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "./components/ui/tooltip";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 간단한 툴팁
<SimpleTooltip content="도움말 텍스트">
  <Button>버튼</Button>
</SimpleTooltip>

// 위치 지정
<SimpleTooltip content="위쪽 툴팁" side="top">
  <Button>위쪽</Button>
</SimpleTooltip>

// 지연 시간 설정
<SimpleTooltip content="빠른 툴팁" delayDuration={200}>
  <Button>빠른 반응</Button>
</SimpleTooltip>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="고급 구성"
                code={`// 고급 툴팁 구성
<TooltipProvider delayDuration={500}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">고급 툴팁</Button>
    </TooltipTrigger>
    <TooltipContent side="top" align="start" sideOffset={10}>
      <div className="space-y-2">
        <p className="font-medium">제목</p>
        <p className="text-sm text-muted-foreground">
          상세한 설명이나 복잡한 콘텐츠
        </p>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
                codeKey="advanced-usage"
              />

              <CodeBlock
                title="아이콘 버튼 예제"
                code={`import { Settings, HelpCircle } from "lucide-react";

// 아이콘 버튼에 툴팁 추가
<SimpleTooltip content="설정 열기">
  <Button variant="outline" size="icon">
    <Settings className="h-4 w-4" />
  </Button>
</SimpleTooltip>

// 도움말 아이콘
<SimpleTooltip 
  content={
    <div className="max-w-xs">
      <p className="font-medium mb-1">도움말</p>
      <p className="text-xs text-muted-foreground">
        이 기능에 대한 자세한 설명입니다.
      </p>
    </div>
  }
>
  <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
</SimpleTooltip>`}
                codeKey="icon-usage"
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