import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
  MessageSquare,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  Settings,
  User,
  Calendar,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  Share2,
  Download,
  Upload,
  Search,
  Filter,
  Bell,
  HelpCircle,
  BookOpen,
  Star,
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  Zap,
  Target,
  TrendingUp,
  Activity,
  BarChart3,
  DollarSign,
  Users,
  Globe,
  Image,
  Link,
  Tag,
  Bookmark,
  Flag,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Menu,
  MoreHorizontal,
  MoreVertical,
  X
} from 'lucide-react';

export function PopoverComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // State for various popover examples
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

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
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Popover</h1>
            <p className="text-muted-foreground">
              트리거 요소 근처에 떠오르는 컨텐츠 패널입니다. 메뉴, 정보 표시, 폼 입력 등 다양한 용도로 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            오버레이
          </Badge>
          <Badge variant="outline">위치 지정</Badge>
          <Badge variant="outline">인터랙티브</Badge>
          <Badge variant="outline">포털</Badge>
          <Badge variant="outline">접근성</Badge>
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
          {/* Basic Popovers */}
          <Card>
            <CardHeader>
              <CardTitle>기본 팝오버</CardTitle>
              <CardDescription>
                다양한 콘텐츠와 스타일의 기본 팝오버 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">기본 형태</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>단순 팝오버</Label>
                      <div className="flex gap-4">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">정보 보기</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="font-medium">도움말</h4>
                              <p className="text-sm text-muted-foreground">
                                이 기능에 대한 추가 정보를 여기서 확인할 수 있습니다.
                              </p>
                            </div>
                          </PopoverContent>
                        </Popover>

                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">
                              <Info className="w-4 h-4 mr-2" />
                              상세 정보
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Info className="w-4 h-4 text-blue-500" />
                                <h4 className="font-medium">추가 정보</h4>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                이 항목에 대한 자세한 설명과 관련 링크를 제공합니다.
                              </p>
                              <div className="flex justify-end">
                                <Button size="sm" variant="outline">
                                  자세히 보기
                                  <ArrowRight className="w-3 h-3 ml-1" />
                                </Button>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>폼이 포함된 팝오버</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button>
                            <Plus className="w-4 h-4 mr-2" />
                            새 항목 추가
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h4 className="font-medium">새 항목 만들기</h4>
                              <p className="text-sm text-muted-foreground">
                                새로운 항목을 생성하세요.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="name">이름</Label>
                              <Input id="name" placeholder="항목 이름을 입력하세요" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="description">설명</Label>
                              <Input id="description" placeholder="간단한 설명" />
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm">취소</Button>
                              <Button size="sm">생성</Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label>위치 지정</Label>
                      <div className="flex gap-2 flex-wrap">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" size="sm">위쪽</Button>
                          </PopoverTrigger>
                          <PopoverContent side="top" className="w-60">
                            <p className="text-sm">위쪽에 표시되는 팝오버입니다.</p>
                          </PopoverContent>
                        </Popover>

                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" size="sm">아래쪽</Button>
                          </PopoverTrigger>
                          <PopoverContent side="bottom" className="w-60">
                            <p className="text-sm">아래쪽에 표시되는 팝오버입니다.</p>
                          </PopoverContent>
                        </Popover>

                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" size="sm">왼쪽</Button>
                          </PopoverTrigger>
                          <PopoverContent side="left" className="w-60">
                            <p className="text-sm">왼쪽에 표시되는 팝오버입니다.</p>
                          </PopoverContent>
                        </Popover>

                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" size="sm">오른쪽</Button>
                          </PopoverTrigger>
                          <PopoverContent side="right" className="w-60">
                            <p className="text-sm">오른쪽에 표시되는 팝오버입니다.</p>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">사용자 상호작용</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>사용자 메뉴</Label>
                      <Popover open={userMenuOpen} onOpenChange={setUserMenuOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <Avatar className="w-6 h-6 mr-2">
                              <AvatarImage src="/placeholder-avatar.jpg" />
                              <AvatarFallback>홍길동</AvatarFallback>
                            </Avatar>
                            홍길동
                            <ChevronDown className="w-4 h-4 ml-auto" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-60 p-0">
                          <div className="p-4 border-b">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder-avatar.jpg" />
                                <AvatarFallback>홍</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">홍길동</p>
                                <p className="text-sm text-muted-foreground">hong@example.com</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-1">
                            <Button variant="ghost" className="w-full justify-start">
                              <User className="w-4 h-4 mr-2" />
                              프로필
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <Settings className="w-4 h-4 mr-2" />
                              설정
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <HelpCircle className="w-4 h-4 mr-2" />
                              도움말
                            </Button>
                            <Separator className="my-1" />
                            <Button variant="ghost" className="w-full justify-start text-destructive">
                              로그아웃
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label>알림</Label>
                      <Popover open={notificationOpen} onOpenChange={setNotificationOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="icon" className="relative">
                            <Bell className="w-4 h-4" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                              3
                            </span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-0">
                          <div className="p-4 border-b">
                            <h4 className="font-medium">알림</h4>
                          </div>
                          <div className="max-h-60 overflow-y-auto">
                            <div className="p-3 border-b hover:bg-muted/50 cursor-pointer">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <div>
                                  <p className="text-sm font-medium">새 메시지가 도착했습니다</p>
                                  <p className="text-xs text-muted-foreground">2분 전</p>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-b hover:bg-muted/50 cursor-pointer">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                <div>
                                  <p className="text-sm font-medium">작업이 완료되었습니다</p>
                                  <p className="text-xs text-muted-foreground">10분 전</p>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 hover:bg-muted/50 cursor-pointer">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                <div>
                                  <p className="text-sm font-medium">시스템 업데이트 알림</p>
                                  <p className="text-xs text-muted-foreground">1시간 전</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 border-t">
                            <Button variant="ghost" size="sm" className="w-full">
                              모든 알림 보기
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label>빠른 작업</Label>
                      <Popover open={quickActionsOpen} onOpenChange={setQuickActionsOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline">
                            <Zap className="w-4 h-4 mr-2" />
                            빠른 작업
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-60 p-0">
                          <div className="p-3 border-b">
                            <h4 className="font-medium">빠른 작업</h4>
                          </div>
                          <div className="p-1">
                            <Button variant="ghost" className="w-full justify-start">
                              <Plus className="w-4 h-4 mr-2" />
                              새 프로젝트
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <Upload className="w-4 h-4 mr-2" />
                              파일 업로드
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <Share2 className="w-4 h-4 mr-2" />
                              공유하기
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <Download className="w-4 h-4 mr-2" />
                              내보내기
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 팝오버
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">정보 보기</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-medium">도움말</h4>
      <p className="text-sm text-muted-foreground">
        이 기능에 대한 추가 정보를 여기서 확인할 수 있습니다.
      </p>
    </div>
  </PopoverContent>
</Popover>

// 폼이 포함된 팝오버
<Popover>
  <PopoverTrigger asChild>
    <Button>새 항목 추가</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">새 항목 만들기</h4>
        <p className="text-sm text-muted-foreground">
          새로운 항목을 생성하세요.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" placeholder="항목 이름을 입력하세요" />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">취소</Button>
        <Button size="sm">생성</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>

// 위치 지정
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">위쪽</Button>
  </PopoverTrigger>
  <PopoverContent side="top" className="w-60">
    <p className="text-sm">위쪽에 표시되는 팝오버입니다.</p>
  </PopoverContent>
</Popover>

// 제어된 팝오버
const [open, setOpen] = useState(false);

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>제어된 팝오버</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>제어된 상태의 팝오버입니다.</p>
  </PopoverContent>
</Popover>`}
                codeKey="basic-popovers"
              />
            </CardContent>
          </Card>

          {/* Interactive Examples */}
          <Card>
            <CardHeader>
              <CardTitle>실용적인 예제</CardTitle>
              <CardDescription>
                실제 사용 환경에서 활용되는 팝오버 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">필터 및 검색</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-medium">상품 목록</h5>
                        <div className="flex gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Filter className="w-4 h-4 mr-2" />
                                필터
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-4">
                                <h4 className="font-medium">필터 옵션</h4>
                                <div className="space-y-3">
                                  <div className="space-y-2">
                                    <Label>카테고리</Label>
                                    <div className="flex flex-wrap gap-2">
                                      <Button variant="outline" size="sm">전자제품</Button>
                                      <Button variant="outline" size="sm">의류</Button>
                                      <Button variant="outline" size="sm">도서</Button>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>가격 범위</Label>
                                    <div className="flex gap-2">
                                      <Input placeholder="최소" className="flex-1" />
                                      <Input placeholder="최대" className="flex-1" />
                                    </div>
                                  </div>
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm">초기화</Button>
                                    <Button size="sm">적용</Button>
                                  </div>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>

                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Search className="w-4 h-4 mr-2" />
                                검색
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-3">
                                <h4 className="font-medium">상세 검색</h4>
                                <Input placeholder="상품명으로 검색..." />
                                <Input placeholder="브랜드명으로 검색..." />
                                <Button className="w-full">
                                  <Search className="w-4 h-4 mr-2" />
                                  검색
                                </Button>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 border rounded-lg">상품 1</div>
                        <div className="p-3 border rounded-lg">상품 2</div>
                        <div className="p-3 border rounded-lg">상품 3</div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">작업 메뉴</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">프로젝트 관리</h5>
                      <div className="space-y-2">
                        {['프로젝트 A', '프로젝트 B', '프로젝트 C'].map((project, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <span>{project}</span>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-48 p-0">
                                <div className="p-1">
                                  <Button variant="ghost" className="w-full justify-start">
                                    <Edit className="w-4 h-4 mr-2" />
                                    편집
                                  </Button>
                                  <Button variant="ghost" className="w-full justify-start">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    공유
                                  </Button>
                                  <Button variant="ghost" className="w-full justify-start">
                                    <Download className="w-4 h-4 mr-2" />
                                    다운로드
                                  </Button>
                                  <Separator className="my-1" />
                                  <Button variant="ghost" className="w-full justify-start text-destructive">
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    삭제
                                  </Button>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">컨텍스트 정보</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <h5 className="font-medium">통계 정보</h5>
                      <div className="space-y-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">총 사용자</span>
                                <span className="font-medium">1,234</span>
                              </div>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="space-y-3">
                              <h4 className="font-medium">사용자 통계</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">활성 사용자</span>
                                  <span className="font-medium">987</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm">신규 사용자 (이번 달)</span>
                                  <span className="font-medium">247</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm">평균 세션 시간</span>
                                  <span className="font-medium">12분</span>
                                </div>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>

                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">총 매출</span>
                                <span className="font-medium">₩2,450,000</span>
                              </div>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="space-y-3">
                              <h4 className="font-medium">매출 상세</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm">이번 달</span>
                                  <span className="font-medium">₩850,000</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm">지난 달</span>
                                  <span className="font-medium">₩720,000</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm">성장률</span>
                                  <span className="font-medium text-green-600">+18%</span>
                                </div>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium">사용자 프로필</h5>
                      <div className="space-y-2">
                        {['김철수', '이영희', '박민수'].map((name, index) => (
                          <Popover key={index}>
                            <PopoverTrigger asChild>
                              <div className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-muted/50">
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback>{name[0]}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">{name}</span>
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <Avatar>
                                    <AvatarFallback>{name[0]}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{name}</p>
                                    <p className="text-sm text-muted-foreground">개발자</p>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-sm">
                                    <Mail className="w-4 h-4" />
                                    <span>{name.toLowerCase()}@company.com</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <Phone className="w-4 h-4" />
                                    <span>010-1234-5678</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>서울, 대한민국</span>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button size="sm" className="flex-1">
                                    <Mail className="w-3 h-3 mr-1" />
                                    메시지
                                  </Button>
                                  <Button size="sm" variant="outline" className="flex-1">
                                    <User className="w-3 h-3 mr-1" />
                                    프로필
                                  </Button>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium">도움말 센터</h5>
                      <Popover open={helpOpen} onOpenChange={setHelpOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <HelpCircle className="w-4 h-4 mr-2" />
                            도움이 필요하신가요?
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-4">
                            <h4 className="font-medium">도움말</h4>
                            <div className="space-y-2">
                              <Button variant="ghost" className="w-full justify-start">
                                <BookOpen className="w-4 h-4 mr-2" />
                                사용자 가이드
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <HelpCircle className="w-4 h-4 mr-2" />
                                자주 묻는 질문
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <Mail className="w-4 h-4 mr-2" />
                                고객 지원
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                온라인 문서
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 필터 팝오버
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Filter className="w-4 h-4 mr-2" />
      필터
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <h4 className="font-medium">필터 옵션</h4>
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>카테고리</Label>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">전자제품</Button>
            <Button variant="outline" size="sm">의류</Button>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm">초기화</Button>
          <Button size="sm">적용</Button>
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>

// 작업 메뉴
<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="sm">
      <MoreHorizontal className="w-4 h-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-48 p-0">
    <div className="p-1">
      <Button variant="ghost" className="w-full justify-start">
        <Edit className="w-4 h-4 mr-2" />
        편집
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Share2 className="w-4 h-4 mr-2" />
        공유
      </Button>
      <Separator className="my-1" />
      <Button variant="ghost" className="w-full justify-start text-destructive">
        <Trash2 className="w-4 h-4 mr-2" />
        삭제
      </Button>
    </div>
  </PopoverContent>
</Popover>

// 사용자 정보 카드
<Popover>
  <PopoverTrigger asChild>
    <div className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer">
      <Avatar className="w-8 h-8">
        <AvatarFallback>김</AvatarFallback>
      </Avatar>
      <span>김철수</span>
    </div>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>김</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">김철수</p>
          <p className="text-sm text-muted-foreground">개발자</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4" />
          <span>kim@company.com</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm">메시지</Button>
        <Button size="sm" variant="outline">프로필</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="interactive-examples"
              />
            </CardContent>
          </Card>

          {/* Advanced Examples */}
          <Card>
            <CardHeader>
              <CardTitle>고급 예제</CardTitle>
              <CardDescription>
                복잡한 레이아웃과 인터랙션이 포함된 팝오버 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">다중 단계 팝오버</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">설정 마법사</h5>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="w-full">
                            <Settings className="w-4 h-4 mr-2" />
                            초기 설정 시작
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">1단계: 기본 정보</h4>
                              <Badge variant="outline">1/3</Badge>
                            </div>
                            <div className="space-y-3">
                              <div className="space-y-2">
                                <Label>회사명</Label>
                                <Input placeholder="회사명을 입력하세요" />
                              </div>
                              <div className="space-y-2">
                                <Label>업종</Label>
                                <div className="flex flex-wrap gap-2">
                                  <Button variant="outline" size="sm">IT</Button>
                                  <Button variant="outline" size="sm">제조업</Button>
                                  <Button variant="outline" size="sm">서비스업</Button>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <Button variant="outline" disabled>이전</Button>
                              <Button>다음</Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">데이터 미리보기</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <h5 className="font-medium">차트 데이터</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {['매출', '사용자', '주문', '리뷰'].map((metric, index) => (
                          <Popover key={index}>
                            <PopoverTrigger asChild>
                              <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                                <div className="text-sm text-muted-foreground">{metric}</div>
                                <div className="text-lg font-medium">
                                  {index === 0 ? '₩1.2M' : 
                                   index === 1 ? '2.4K' :
                                   index === 2 ? '567' : '4.8'}
                                </div>
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-3">
                                <h4 className="font-medium">{metric} 상세</h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-sm">오늘</span>
                                    <span className="font-medium">
                                      {index === 0 ? '₩45K' : 
                                       index === 1 ? '127' :
                                       index === 2 ? '23' : '4.9'}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm">어제</span>
                                    <span className="font-medium">
                                      {index === 0 ? '₩38K' : 
                                       index === 1 ? '134' :
                                       index === 2 ? '19' : '4.7'}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm">변화율</span>
                                    <span className="font-medium text-green-600">
                                      +{Math.floor(Math.random() * 20 + 5)}%
                                    </span>
                                  </div>
                                </div>
                                <Button size="sm" className="w-full">
                                  <BarChart3 className="w-3 h-3 mr-1" />
                                  자세히 보기
                                </Button>
                              </div>
                            </PopoverContent>
                          </Popover>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">커스텀 컨텐츠</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <h5 className="font-medium">색상 선택기</h5>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <div className="w-4 h-4 bg-blue-500 rounded-sm mr-2"></div>
                            색상 선택
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64">
                          <div className="space-y-3">
                            <h4 className="font-medium">테마 색상</h4>
                            <div className="grid grid-cols-6 gap-2">
                              {[
                                'bg-red-500', 'bg-orange-500', 'bg-yellow-500',
                                'bg-green-500', 'bg-blue-500', 'bg-purple-500',
                                'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
                                'bg-gray-500', 'bg-slate-500', 'bg-stone-500'
                              ].map((color, index) => (
                                <div
                                  key={index}
                                  className={`w-8 h-8 rounded ${color} cursor-pointer hover:scale-110 transition-transform`}
                                />
                              ))}
                            </div>
                            <div className="space-y-2">
                              <Label>사용자 정의</Label>
                              <Input type="color" className="h-8" />
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium">아이콘 선택기</h5>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <Star className="w-4 h-4 mr-2" />
                            아이콘 선택
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-3">
                            <h4 className="font-medium">아이콘 라이브러리</h4>
                            <div className="grid grid-cols-8 gap-2">
                              {[
                                Star, Heart, BookOpen, Bell, Settings, User,
                                Mail, Phone, Calendar, Clock, Target, Zap,
                                Activity, TrendingUp, BarChart3, DollarSign,
                                Users, Globe, Image, Link, Tag, Bookmark,
                                Flag, Eye, Lock, Shield
                              ].map((Icon, index) => (
                                <div
                                  key={index}
                                  className="p-2 border rounded hover:bg-muted cursor-pointer"
                                >
                                  <Icon className="w-4 h-4 mx-auto" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium">날짜 선택기</h5>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <Calendar className="w-4 h-4 mr-2" />
                            날짜 선택
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <div className="p-4">
                            <div className="space-y-3">
                              <h4 className="font-medium">날짜 범위</h4>
                              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                                  <div key={day} className="p-2 font-medium">
                                    {day}
                                  </div>
                                ))}
                                {Array.from({ length: 35 }, (_, i) => (
                                  <div
                                    key={i}
                                    className="p-2 hover:bg-muted rounded cursor-pointer"
                                  >
                                    {i < 30 ? i + 1 : ''}
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-between">
                                <Button variant="outline" size="sm">취소</Button>
                                <Button size="sm">확인</Button>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 다중 단계 팝오버
<Popover>
  <PopoverTrigger asChild>
    <Button>설정 마법사</Button>
  </PopoverTrigger>
  <PopoverContent className="w-96">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">1단계: 기본 정보</h4>
        <Badge variant="outline">1/3</Badge>
      </div>
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>회사명</Label>
          <Input placeholder="회사명을 입력하세요" />
        </div>
        <div className="space-y-2">
          <Label>업종</Label>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">IT</Button>
            <Button variant="outline" size="sm">제조업</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" disabled>이전</Button>
        <Button>다음</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>

// 색상 선택기
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <div className="w-4 h-4 bg-blue-500 rounded-sm mr-2"></div>
      색상 선택
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-64">
    <div className="space-y-3">
      <h4 className="font-medium">테마 색상</h4>
      <div className="grid grid-cols-6 gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={w-8 h-8 rounded \${color} cursor-pointer}
          />
        ))}
      </div>
      <div className="space-y-2">
        <Label>사용자 정의</Label>
        <Input type="color" className="h-8" />
      </div>
    </div>
  </PopoverContent>
</Popover>

// 데이터 미리보기
<Popover>
  <PopoverTrigger asChild>
    <div className="p-3 border rounded-lg cursor-pointer">
      <div className="text-sm text-muted-foreground">매출</div>
      <div className="text-lg font-medium">₩1.2M</div>
    </div>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-3">
      <h4 className="font-medium">매출 상세</h4>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm">오늘</span>
          <span className="font-medium">₩45K</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">변화율</span>
          <span className="font-medium text-green-600">+15%</span>
        </div>
      </div>
      <Button size="sm" className="w-full">
        자세히 보기
      </Button>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="advanced-examples"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>팝오버 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 팝오버 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                      <div className="space-y-2 mb-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">
                              <Info className="w-4 h-4 mr-2" />
                              명확한 트리거
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60">
                            <p className="text-sm">명확한 아이콘과 라벨로 팝오버 내용을 예측할 수 있습니다.</p>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 명확한 트리거 요소</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">적절한 크기</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="font-medium">제목</h4>
                              <p className="text-sm text-muted-foreground">
                                내용에 맞는 적절한 크기로 팝오버가 표시됩니다.
                              </p>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 내용에 맞는 적절한 크기</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">닫기 버튼</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60">
                            <div className="flex items-start justify-between">
                              <p className="text-sm">명시적인 닫기 방법을 제공합니다.</p>
                              <Button variant="ghost" size="sm">
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 명시적인 닫기 방법</p>
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
                      <div className="space-y-2 mb-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">?</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-96">
                            <p className="text-sm">
                              이 팝오버는 너무 많은 정보를 포함하고 있어서 읽기 어렵고 사용자에게 부담을 줍니다. 
                              또한 트리거 버튼도 무엇을 하는지 명확하지 않습니다.
                            </p>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <p className="text-xs text-red-600">✗ 애매한 트리거와 과도한 정보</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">클릭</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-20">
                            <p className="text-xs">내용</p>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <p className="text-xs text-red-600">✗ 너무 작은 크기</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">중첩 팝오버</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60">
                            <div className="space-y-2">
                              <p className="text-sm">첫 번째 팝오버</p>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button size="sm">더 보기</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-40">
                                  <p className="text-xs">두 번째 팝오버</p>
                                </PopoverContent>
                              </Popover>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <p className="text-xs text-red-600">✗ 과도한 중첩</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용 컨텍스트별 패턴</CardTitle>
              <CardDescription>
                다양한 사용 상황에 맞는 팝오버 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">정보 표시</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Info className="w-4 h-4 mr-2" />
                          도움말
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64">
                        <div className="space-y-2">
                          <h4 className="font-medium">사용 방법</h4>
                          <p className="text-sm text-muted-foreground">
                            이 기능의 사용 방법을 설명합니다.
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <p className="text-xs text-muted-foreground">
                      • 간단한 설명<br/>
                      • 컨텍스트 도움말<br/>
                      • 추가 정보 링크
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">액션 메뉴</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-0">
                        <div className="p-1">
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Edit className="w-3 h-3 mr-2" />
                            편집
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Share2 className="w-3 h-3 mr-2" />
                            공유
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <p className="text-xs text-muted-foreground">
                      • 빠른 액션<br/>
                      • 컨텍스트 메뉴<br/>
                      • 공간 절약
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">폼 입력</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          추가
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-60">
                        <div className="space-y-2">
                          <Label>제목</Label>
                          <Input placeholder="제목 입력" />
                          <Button size="sm" className="w-full">추가</Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <p className="text-xs text-muted-foreground">
                      • 간단한 폼<br/>
                      • 빠른 입력<br/>
                      • 인라인 편집
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>위치 및 정렬 패턴</CardTitle>
              <CardDescription>
                팝오버의 위치와 정렬에 관한 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">위치 우선순위</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="grid grid-cols-3 gap-2 place-items-center">
                      <div></div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">위</Button>
                        </PopoverTrigger>
                        <PopoverContent side="top" className="w-40">
                          <p className="text-xs">상단 우선</p>
                        </PopoverContent>
                      </Popover>
                      <div></div>
                      
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">좌</Button>
                        </PopoverTrigger>
                        <PopoverContent side="left" className="w-40">
                          <p className="text-xs">좌측</p>
                        </PopoverContent>
                      </Popover>
                      <div className="p-2 border rounded text-xs">중앙</div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">우</Button>
                        </PopoverTrigger>
                        <PopoverContent side="right" className="w-40">
                          <p className="text-xs">우측</p>
                        </PopoverContent>
                      </Popover>
                      
                      <div></div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">아래</Button>
                        </PopoverTrigger>
                        <PopoverContent side="bottom" className="w-40">
                          <p className="text-xs">하단 (기본)</p>
                        </PopoverContent>
                      </Popover>
                      <div></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 아래쪽 우선 (기본)<br/>
                      • 공간에 따라 자동 조정<br/>
                      • 화면 경계 고려
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">정렬 옵션</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="flex justify-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">시작</Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-40">
                          <p className="text-xs">시작점 정렬</p>
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">중앙</Button>
                        </PopoverTrigger>
                        <PopoverContent align="center" className="w-40">
                          <p className="text-xs">중앙 정렬</p>
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">끝</Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-40">
                          <p className="text-xs">끝점 정렬</p>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 중앙 정렬 (기본)<br/>
                      • 트리거 요소 기준<br/>
                      • 화면 여백 고려
                    </p>
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
                효과적인 Popover 사용을 위한 모범 사례
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
                    <li>• 명확한 트리거 요소 사용</li>
                    <li>• 적절한 크기와 위치 설정</li>
                    <li>• 간결하고 관련성 있는 내용</li>
                    <li>• 명시적인 닫기 방법 제공</li>
                    <li>• 키보드 및 터치 지원</li>
                    <li>• 화면 경계 고려한 위치 조정</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 과도한 정보나 복잡한 폼</li>
                    <li>• 애매한 트리거 요소</li>
                    <li>• 팝오버 안에 팝오버 중첩</li>
                    <li>• 너무 작거나 큰 크기</li>
                    <li>• 중요한 액션을 팝오버에 숨김</li>
                    <li>• 모바일에서 사용하기 어려운 크기</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Popover를 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Space/Enter</kbd> 팝오버 열기</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Escape</kbd> 팝오버 닫기</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> 팝오버 내 요소 간 이동</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Shift+Tab</kbd> 역방향 이동</li>
                    <li>• 팝오버 외부 클릭 시 자동 닫기</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 적절한 role 속성 설정</li>
                    <li>• aria-labelledby로 트리거와 연결</li>
                    <li>• aria-describedby로 설명 연결</li>
                    <li>• aria-expanded로 상태 표시</li>
                    <li>• 포커스 관리 및 트랩</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 적절한 그림자와 경계</li>
                    <li>• 터치 친화적 크기 (최소 44px)</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Popover 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 추가 정보나 도움말</li>
                    <li>• 간단한 폼이나 입력</li>
                    <li>• 빠른 액션 메뉴</li>
                    <li>• 설정이나 옵션 선택</li>
                    <li>• 미리보기나 상세 정보</li>
                    <li>• 인라인 편집</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 표현</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Dialog:</strong> 복잡한 폼이나 중요한 액션</li>
                    <li>• <strong>Tooltip:</strong> 간단한 설명</li>
                    <li>• <strong>Dropdown:</strong> 선택 목록</li>
                    <li>• <strong>Sheet:</strong> 모바일에서 긴 내용</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 중요한 정보나 경고</li>
                    <li>• 복잡한 다단계 폼</li>
                    <li>• 주요 네비게이션</li>
                    <li>• 긴 텍스트나 문서</li>
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
                Popover 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Popover 속성</h4>
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
                        <td className="p-2 font-mono">open</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 열림 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultOpen</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">기본 열림 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onOpenChange</td>
                        <td className="p-2">(open: boolean) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">상태 변경 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">modal</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">모달 모드</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">PopoverContent 속성</h4>
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
                        <td className="p-2 font-mono">side</td>
                        <td className="p-2">"top" | "right" | "bottom" | "left"</td>
                        <td className="p-2">"bottom"</td>
                        <td className="p-2">팝오버 위치</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">align</td>
                        <td className="p-2">"start" | "center" | "end"</td>
                        <td className="p-2">"center"</td>
                        <td className="p-2">정렬 방식</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">sideOffset</td>
                        <td className="p-2">number</td>
                        <td className="p-2">4</td>
                        <td className="p-2">트리거로부터의 거리</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">alignOffset</td>
                        <td className="p-2">number</td>
                        <td className="p-2">0</td>
                        <td className="p-2">정렬 오프셋</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">avoidCollisions</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">true</td>
                        <td className="p-2">충돌 회피</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">className</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">추가 CSS 클래스</td>
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
  Popover, 
  PopoverContent, 
  PopoverTrigger,
  PopoverAnchor
} from "./components/ui/popover"
import { Button } from "./components/ui/button"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 팝오버
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">정보 보기</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>팝오버 내용입니다.</p>
  </PopoverContent>
</Popover>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="제어된 팝오버"
                code={`const [open, setOpen] = useState(false);

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>제어된 팝오버</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">제목</h4>
      <p className="text-sm">내용입니다.</p>
      <Button size="sm" onClick={() => setOpen(false)}>
        닫기
      </Button>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="controlled-popover"
              />

              <CodeBlock
                title="위치 및 정렬"
                code={`// 위쪽에 표시
<Popover>
  <PopoverTrigger asChild>
    <Button>위쪽</Button>
  </PopoverTrigger>
  <PopoverContent side="top">
    <p>위쪽에 표시됩니다.</p>
  </PopoverContent>
</Popover>

// 시작점 정렬
<Popover>
  <PopoverTrigger asChild>
    <Button>시작점 정렬</Button>
  </PopoverTrigger>
  <PopoverContent align="start">
    <p>시작점에 정렬됩니다.</p>
  </PopoverContent>
</Popover>

// 오프셋 설정
<Popover>
  <PopoverTrigger asChild>
    <Button>거리 조절</Button>
  </PopoverTrigger>
  <PopoverContent sideOffset={16}>
    <p>더 멀리 떨어져 표시됩니다.</p>
  </PopoverContent>
</Popover>`}
                codeKey="positioning"
              />

              <CodeBlock
                title="폼이 포함된 팝오버"
                code={`<Popover>
  <PopoverTrigger asChild>
    <Button>새 항목 추가</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">새 항목 만들기</h4>
        <p className="text-sm text-muted-foreground">
          새로운 항목을 생성하세요.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="space-y-1">
          <Label htmlFor="name">이름</Label>
          <Input id="name" placeholder="항목 이름" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="description">설명</Label>
          <Input id="description" placeholder="간단한 설명" />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">취소</Button>
        <Button size="sm">생성</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="form-popover"
              />

              <CodeBlock
                title="사용자 메뉴"
                code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="justify-start">
      <Avatar className="w-6 h-6 mr-2">
        <AvatarFallback>홍</AvatarFallback>
      </Avatar>
      홍길동
      <ChevronDown className="w-4 h-4 ml-auto" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-60 p-0">
    <div className="p-4 border-b">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>홍</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">홍길동</p>
          <p className="text-sm text-muted-foreground">
            hong@example.com
          </p>
        </div>
      </div>
    </div>
    <div className="p-1">
      <Button variant="ghost" className="w-full justify-start">
        <User className="w-4 h-4 mr-2" />
        프로필
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Settings className="w-4 h-4 mr-2" />
        설정
      </Button>
      <Separator className="my-1" />
      <Button variant="ghost" className="w-full justify-start text-destructive">
        로그아웃
      </Button>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="user-menu"
              />

              <CodeBlock
                title="액션 메뉴"
                code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="sm">
      <MoreHorizontal className="w-4 h-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-48 p-0">
    <div className="p-1">
      <Button variant="ghost" className="w-full justify-start">
        <Edit className="w-4 h-4 mr-2" />
        편집
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Share2 className="w-4 h-4 mr-2" />
        공유
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Download className="w-4 h-4 mr-2" />
        다운로드
      </Button>
      <Separator className="my-1" />
      <Button variant="ghost" className="w-full justify-start text-destructive">
        <Trash2 className="w-4 h-4 mr-2" />
        삭제
      </Button>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="action-menu"
              />

              <CodeBlock
                title="정보 카드"
                code={`<Popover>
  <PopoverTrigger asChild>
    <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
      <Avatar className="w-8 h-8">
        <AvatarFallback>김</AvatarFallback>
      </Avatar>
      <span>김철수</span>
    </div>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>김</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">김철수</p>
          <p className="text-sm text-muted-foreground">개발자</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4" />
          <span>kim@company.com</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4" />
          <span>010-1234-5678</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" className="flex-1">메시지</Button>
        <Button size="sm" variant="outline" className="flex-1">
          프로필
        </Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="info-card"
              />

              <CodeBlock
                title="닫기 버튼이 있는 팝오버"
                code={`const [open, setOpen] = useState(false);

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>설정</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">설정</h4>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setOpen(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>알림</Label>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <Label>자동 저장</Label>
          <Switch defaultChecked />
        </div>
      </div>
      <Button className="w-full">저장</Button>
    </div>
  </PopoverContent>
</Popover>`}
                codeKey="close-button"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}