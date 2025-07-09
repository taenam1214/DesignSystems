import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  MessageSquare,
  Copy,
  Check,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  AlertCircle,
  Terminal,
  Lightbulb,
  Shield,
  Zap,
  Clock,
  Download,
  Upload,
  Mail,
  Save,
  Wifi,
  HardDrive,
  Battery,
  Archive,
  Lock,
  Heart,
  Star,
  Settings,
  RefreshCw,
  Cloud,
  Database,
  Server,
  Smartphone,
  Monitor,
  Globe,
  Search,
  UserPlus,
  CreditCard,
  Package,
  Truck,
  ShoppingCart,
  Eye,
  EyeOff,
  FileText,
  Calendar,
  MapPin,
  Phone,
  Gift,
  Bell,
  BellOff,
  Users,
  User,
  Home,
  Building,
  Briefcase,
  GraduationCap,
  Camera,
  Music,
  Video,
  Image,
  File,
  Folder,
  BookOpen,
  Coffee,
  Gamepad2,
  Headphones,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  LineChart,
  Activity,
  Target,
  Award,
  Flag,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Link,
  Paperclip,
  Edit,
  Trash2,
  MoreHorizontal,
  Plus,
  Minus,
  Maximize,
  Minimize,
  RotateCcw,
  Loader2,
  Circle,
  Square,
  Triangle,
  Diamond,
  Hexagon,
  Octagon,
  Move,
  Crop,
  Filter,
  Layers,
  Palette,
  Brush,
  Eraser,
  Ruler,
  Grid,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Menu,
  Navigation,
  Compass,
  Map,
  Route,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Walk
} from 'lucide-react';

export function AlertComponentPage() {
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
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Alert</h1>
            <p className="text-muted-foreground">
              사용자에게 중요한 정보를 전달하는 알림 컴포넌트입니다. 성공, 경고, 오류, 정보 등 다양한 상황에 맞는 메시지를 표시하며 접근성을 완벽하게 지원합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            피드백
          </Badge>
          <Badge variant="outline">알림</Badge>
          <Badge variant="outline">상태 표시</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">ARIA</Badge>
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
          {/* Basic Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>기본 알림</CardTitle>
              <CardDescription>
                다양한 상황에 맞는 기본 알림 컴포넌트 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>정보</AlertTitle>
                  <AlertDescription>
                    일반적인 정보를 제공하는 기본 알림입니다. 사용자에게 도움이 되는 내용을 전달합니다.
                  </AlertDescription>
                </Alert>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>성공</AlertTitle>
                  <AlertDescription>
                    작업이 성공적으로 완료되었습니다. 변경사항이 저장되었습니다.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>경고</AlertTitle>
                  <AlertDescription>
                    주의가 필요한 상황입니다. 계속 진행하기 전에 확인해주세요.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>오류</AlertTitle>
                  <AlertDescription>
                    작업을 완료할 수 없습니다. 다시 시도하거나 관리자에게 문의하세요.
                  </AlertDescription>
                </Alert>
              </div>

              <CodeBlock
                code={`// 기본 정보 알림
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>정보</AlertTitle>
  <AlertDescription>
    일반적인 정보를 제공하는 기본 알림입니다.
  </AlertDescription>
</Alert>

// 성공 알림
<Alert>
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>성공</AlertTitle>
  <AlertDescription>
    작업이 성공적으로 완료되었습니다.
  </AlertDescription>
</Alert>

// 경고 알림
<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>경고</AlertTitle>
  <AlertDescription>
    주의가 필요한 상황입니다.
  </AlertDescription>
</Alert>

// 오류 알림
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>오류</AlertTitle>
  <AlertDescription>
    작업을 완료할 수 없습니다.
  </AlertDescription>
</Alert>`}
                codeKey="basic-alerts"
              />
            </CardContent>
          </Card>

          {/* System Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>시스템 알림</CardTitle>
              <CardDescription>
                시스템 상태와 관련된 다양한 알림 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Alert>
                  <Download className="h-4 w-4" />
                  <AlertTitle>새로운 업데이트 사용 가능</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>새로운 기능과 버그 수정이 포함된 버전 2.1.0이 출시되었습니다.</p>
                    <div className="flex gap-2">
                      <Button size="sm">지금 업데이트</Button>
                      <Button size="sm" variant="outline">나중에</Button>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Cloud className="h-4 w-4" />
                  <AlertTitle>클라우드 동기화 완료</AlertTitle>
                  <AlertDescription>
                    모든 파일이 클라우드에 성공적으로 백업되었습니다. 마지막 동기화: 방금 전
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <Wifi className="h-4 w-4" />
                  <AlertTitle>연결 오류</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>인터넷 연결을 확인할 수 없습니다. 네트워크 설정을 확인해주세요.</p>
                    <Button size="sm" variant="outline">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      다시 연결
                    </Button>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Battery className="h-4 w-4" />
                  <AlertTitle>배터리 부족</AlertTitle>
                  <AlertDescription>
                    배터리가 15% 남았습니다. 충전기를 연결하거나 절전 모드를 활성화하세요.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <HardDrive className="h-4 w-4" />
                  <AlertTitle>저장 공간 부족</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>디스크 공간이 5% 미만입니다. 불필요한 파일을 삭제해주세요.</p>
                    <div className="flex gap-2">
                      <Button size="sm">정리하기</Button>
                      <Button size="sm" variant="outline">설정</Button>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              <CodeBlock
                code={`// 업데이트 알림
<Alert>
  <Download className="h-4 w-4" />
  <AlertTitle>새로운 업데이트 사용 가능</AlertTitle>
  <AlertDescription className="space-y-2">
    <p>새로운 기능과 버그 수정이 포함된 버전 2.1.0이 출시되었습니다.</p>
    <div className="flex gap-2">
      <Button size="sm">지금 업데이트</Button>
      <Button size="sm" variant="outline">나중에</Button>
    </div>
  </AlertDescription>
</Alert>

// 연결 오류 알림
<Alert variant="destructive">
  <Wifi className="h-4 w-4" />
  <AlertTitle>연결 오류</AlertTitle>
  <AlertDescription className="space-y-2">
    <p>인터넷 연결을 확인할 수 없습니다.</p>
    <Button size="sm" variant="outline">
      <RefreshCw className="w-4 h-4 mr-2" />
      다시 연결
    </Button>
  </AlertDescription>
</Alert>`}
                codeKey="system-alerts"
              />
            </CardContent>
          </Card>

          {/* Security Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>보안 알림</CardTitle>
              <CardDescription>
                보안과 관련된 중요한 알림들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Alert variant="destructive">
                  <Shield className="h-4 w-4" />
                  <AlertTitle>보안 위험 감지</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>의심스러운 로그인 시도가 감지되었습니다. 즉시 비밀번호를 변경하는 것을 권장합니다.</p>
                    <div className="flex gap-2">
                      <Button size="sm">비밀번호 변경</Button>
                      <Button size="sm" variant="outline">활동 내역 보기</Button>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Lock className="h-4 w-4" />
                  <AlertTitle>2단계 인증 활성화됨</AlertTitle>
                  <AlertDescription>
                    계정 보안이 강화되었습니다. 이제 로그인할 때 추가 인증이 필요합니다.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>세션 만료 경고</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>보안을 위해 5분 후 자동으로 로그아웃됩니다.</p>
                    <Button size="sm">세션 연장</Button>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Eye className="h-4 w-4" />
                  <AlertTitle>새로운 디바이스에서 로그인</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>Chrome 브라우저 (서울, 대한민국)에서 계정에 접근했습니다.</p>
                    <div className="text-xs text-muted-foreground">2024년 6월 23일 오후 2:30</div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">본인이 아님</Button>
                      <Button size="sm" variant="outline">확인</Button>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              <CodeBlock
                code={`// 보안 위험 알림
<Alert variant="destructive">
  <Shield className="h-4 w-4" />
  <AlertTitle>보안 위험 감지</AlertTitle>
  <AlertDescription className="space-y-2">
    <p>의심스러운 로그인 시도가 감지되었습니다.</p>
    <div className="flex gap-2">
      <Button size="sm">비밀번호 변경</Button>
      <Button size="sm" variant="outline">활동 내역 보기</Button>
    </div>
  </AlertDescription>
</Alert>

// 세션 만료 경고
<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>세션 만료 경고</AlertTitle>
  <AlertDescription className="space-y-2">
    <p>보안을 위해 5분 후 자동으로 로그아웃됩니다.</p>
    <Button size="sm">세션 연장</Button>
  </AlertDescription>
</Alert>`}
                codeKey="security-alerts"
              />
            </CardContent>
          </Card>

          {/* User Feedback Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>사용자 피드백 알림</CardTitle>
              <CardDescription>
                사용자 행동에 대한 피드백과 상호작용 알림입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Alert>
                  <Save className="h-4 w-4" />
                  <AlertTitle>자동 저장됨</AlertTitle>
                  <AlertDescription>
                    문서가 자동으로 저장되었습니다. 마지막 저장: 방금 전
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Mail className="h-4 w-4" />
                  <AlertTitle>메일이 전송되었습니다</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>3명의 수신자에게 메일이 성공적으로 전송되었습니다.</p>
                    <Button size="sm" variant="outline">전송 내역 보기</Button>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Upload className="h-4 w-4" />
                  <AlertTitle>파일 업로드 완료</AlertTitle>
                  <AlertDescription>
                    'presentation.pdf' 파일이 성공적으로 업로드되었습니다. (2.4MB)
                  </AlertDescription>
                </Alert>

                <Alert>
                  <UserPlus className="h-4 w-4" />
                  <AlertTitle>새로운 팀원 초대</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>김미영님을 팀에 초대했습니다. 초대 메일이 전송되었습니다.</p>
                    <Button size="sm" variant="outline">초대 관리</Button>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Heart className="h-4 w-4" />
                  <AlertTitle>즐겨찾기에 추가됨</AlertTitle>
                  <AlertDescription>
                    이 프로젝트가 즐겨찾기에 추가되었습니다. 빠른 액세스 메뉴에서 확인할 수 있습니다.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <Trash2 className="h-4 w-4" />
                  <AlertTitle>항목이 삭제되었습니다</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p>3개의 파일이 휴지통으로 이동되었습니다.</p>
                    <Button size="sm" variant="outline">되돌리기</Button>
                  </AlertDescription>
                </Alert>
              </div>

              <CodeBlock
                code={`// 자동 저장 알림
<Alert>
  <Save className="h-4 w-4" />
  <AlertTitle>자동 저장됨</AlertTitle>
  <AlertDescription>
    문서가 자동으로 저장되었습니다. 마지막 저장: 방금 전
  </AlertDescription>
</Alert>

// 파일 업로드 완료
<Alert>
  <Upload className="h-4 w-4" />
  <AlertTitle>파일 업로드 완료</AlertTitle>
  <AlertDescription>
    'presentation.pdf' 파일이 성공적으로 업로드되었습니다. (2.4MB)
  </AlertDescription>
</Alert>

// 삭제 취소 가능한 알림
<Alert variant="destructive">
  <Trash2 className="h-4 w-4" />
  <AlertTitle>항목이 삭제되었습니다</AlertTitle>
  <AlertDescription className="space-y-2">
    <p>3개의 파일이 휴지통으로 이동되었습니다.</p>
    <Button size="sm" variant="outline">되돌리기</Button>
  </AlertDescription>
</Alert>`}
                codeKey="feedback-alerts"
              />
            </CardContent>
          </Card>

          {/* Complex Interactive Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>고급 인터랙티브 알림</CardTitle>
              <CardDescription>
                복잡한 정보와 다양한 액션을 포함한 알림 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Alert>
                  <Package className="h-4 w-4" />
                  <AlertTitle>주문 배송 시작</AlertTitle>
                  <AlertDescription className="space-y-3">
                    <div>
                      <p>주문번호 #12345가 배송을 시작했습니다.</p>
                      <div className="text-sm text-muted-foreground">예상 도착일: 2024년 6월 25일</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span className="text-sm">현재 위치: 서울 물류센터</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">배송 추적</Button>
                      <Button size="sm" variant="outline">주문 상세</Button>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <CreditCard className="h-4 w-4" />
                  <AlertTitle>결제 방법 만료 예정</AlertTitle>
                  <AlertDescription className="space-y-3">
                    <div>
                      <p>등록된 신용카드가 3일 후 만료됩니다.</p>
                      <div className="text-sm text-muted-foreground">카드 번호: **** **** **** 1234</div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded">
                      <div className="text-sm font-medium mb-1">영향받는 서비스</div>
                      <div className="text-sm text-muted-foreground">
                        • 월간 구독료 자동 결제<br />
                        • 클라우드 스토리지 요금<br />
                        • 프리미엄 기능 이용
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">카드 업데이트</Button>
                      <Button size="sm" variant="outline">결제 설정</Button>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <Server className="h-4 w-4" />
                  <AlertTitle>서비스 점검 예정</AlertTitle>
                  <AlertDescription className="space-y-3">
                    <div>
                      <p>시스템 업그레이드를 위한 점검이 예정되어 있습니다.</p>
                      <div className="text-sm text-muted-foreground">
                        일시: 2024년 6월 24일 오전 2:00 ~ 6:00 (4시간)
                      </div>
                    </div>
                    <div className="bg-destructive/10 p-3 rounded">
                      <div className="text-sm font-medium mb-1">점검 중 이용 불가 기능</div>
                      <div className="text-sm">
                        • 파일 업로드/다운로드<br />
                        • 실시간 동기화<br />
                        • 새로운 프로젝트 생성
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">자세히 보기</Button>
                      <Button size="sm" variant="outline">알림 설정</Button>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Star className="h-4 w-4" />
                  <AlertTitle>프리미엄 기능 체험하기</AlertTitle>
                  <AlertDescription className="space-y-3">
                    <div>
                      <p>14일 무료 체험으로 모든 프리미엄 기능을 사용해보세요.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>무제한 프로젝트</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>고급 분석</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>팀 협업 도구</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>우선 지원</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">무료 체험 시작</Button>
                      <Button size="sm" variant="outline">요금제 비교</Button>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              <CodeBlock
                code={`// 배송 추적 알림
<Alert>
  <Package className="h-4 w-4" />
  <AlertTitle>주문 배송 시작</AlertTitle>
  <AlertDescription className="space-y-3">
    <div>
      <p>주문번호 #12345가 배송을 시작했습니다.</p>
      <div className="text-sm text-muted-foreground">예상 도착일: 2024년 6월 25일</div>
    </div>
    <div className="flex items-center gap-2">
      <Truck className="w-4 h-4" />
      <span className="text-sm">현재 위치: 서울 물류센터</span>
    </div>
    <div className="flex gap-2">
      <Button size="sm">배송 추적</Button>
      <Button size="sm" variant="outline">주문 상세</Button>
    </div>
  </AlertDescription>
</Alert>

// 서비스 점검 알림
<Alert variant="destructive">
  <Server className="h-4 w-4" />
  <AlertTitle>서비스 점검 예정</AlertTitle>
  <AlertDescription className="space-y-3">
    <div>
      <p>시스템 업그레이드를 위한 점검이 예정되어 있습니다.</p>
      <div className="text-sm text-muted-foreground">
        일시: 2024년 6월 24일 오전 2:00 ~ 6:00 (4시간)
      </div>
    </div>
    <div className="bg-destructive/10 p-3 rounded">
      <div className="text-sm font-medium mb-1">점검 중 이용 불가 기능</div>
      <div className="text-sm">
        • 파일 업로드/다운로드<br />
        • 실시간 동기화<br />
        • 새로운 프로젝트 생성
      </div>
    </div>
    <div className="flex gap-2">
      <Button size="sm" variant="outline">자세히 보기</Button>
      <Button size="sm" variant="outline">알림 설정</Button>
    </div>
  </AlertDescription>
</Alert>`}
                codeKey="complex-alerts"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>알림 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 Alert 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertTitle>명확한 제목</AlertTitle>
                        <AlertDescription>구체적이고 이해하기 쉬운 설명</AlertDescription>
                      </Alert>
                      <p className="text-xs text-muted-foreground mt-2">✓ 명확한 제목과 간결한 설명</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <Alert>
                        <Download className="h-4 w-4" />
                        <AlertTitle>업데이트 사용 가능</AlertTitle>
                        <AlertDescription className="space-y-2">
                          <p>새로운 기능이 추가되었습니다.</p>
                          <Button size="sm">지금 업데이트</Button>
                        </AlertDescription>
                      </Alert>
                      <p className="text-xs text-muted-foreground mt-2">✓ 관련 액션 버튼 제공</p>
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
                      <Alert>
                        <AlertDescription>아이콘과 제목 없는 모호한 메시지</AlertDescription>
                      </Alert>
                      <p className="text-xs text-red-600 mt-2">✗ 컨텍스트가 부족한 메시지</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <Alert variant="destructive">
                        <AlertTitle>오류!!!</AlertTitle>
                        <AlertDescription>뭔가 잘못되었습니다. 문제가 있습니다. 다시 해보세요. 계속 문제가 발생하면 관리자에게 연락하세요.</AlertDescription>
                      </Alert>
                      <p className="text-xs text-red-600 mt-2">✗ 과도한 강조와 긴 텍스트</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상황별 알림 가이드</CardTitle>
              <CardDescription>
                다양한 사용 상황에 적합한 알림 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">성공 피드백 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertTitle>저장 완료</AlertTitle>
                      <AlertDescription>변경사항이 성공적으로 저장되었습니다.</AlertDescription>
                    </Alert>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 즉시 피드백 제공</li>
                      <li>• 긍정적인 톤 사용</li>
                      <li>• 추가 정보가 필요한 경우만 액션 버튼 제공</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">오류 복구 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>연결 실패</AlertTitle>
                      <AlertDescription className="space-y-2">
                        <p>서버에 연결할 수 없습니다.</p>
                        <Button size="sm" variant="outline">다시 시도</Button>
                      </AlertDescription>
                    </Alert>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 문제 상황 명확히 설명</li>
                      <li>• 해결 방법 제시</li>
                      <li>• 즉시 액션 가능한 버튼 제공</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">예방적 경고 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>저장하지 않은 변경사항</AlertTitle>
                      <AlertDescription className="space-y-2">
                        <p>페이지를 떠나면 변경사항이 손실됩니다.</p>
                        <div className="flex gap-2">
                          <Button size="sm">저장하고 나가기</Button>
                          <Button size="sm" variant="outline">취소</Button>
                        </div>
                      </AlertDescription>
                    </Alert>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 데이터 손실 위험 경고</li>
                      <li>• 명확한 선택지 제공</li>
                      <li>• 사용자 의도 확인</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">정보 제공 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <Alert>
                      <Lightbulb className="h-4 w-4" />
                      <AlertTitle>팁</AlertTitle>
                      <AlertDescription>
                        키보드 단축키 Ctrl+S를 사용하면 빠르게 저장할 수 있습니다.
                      </AlertDescription>
                    </Alert>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 도움이 되는 정보 제공</li>
                      <li>• 비강제적인 톤</li>
                      <li>• 학습 기회 제공</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>타이밍 및 배치 가이드</CardTitle>
              <CardDescription>
                알림의 적절한 표시 시점과 위치에 대한 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">즉시 피드백</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 폼 제출 후 성공/실패</li>
                    <li>• 파일 업로드 완료</li>
                    <li>• 설정 변경 저장</li>
                    <li>• 데이터 삭제 확인</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">지연된 알림</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 시스템 점검 예고</li>
                    <li>• 만료일 알림</li>
                    <li>• 백그라운드 작업 완료</li>
                    <li>• 정기적인 업데이트</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">상단 배치</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 전역 시스템 알림</li>
                    <li>• 중요한 보안 경고</li>
                    <li>• 서비스 상태 변경</li>
                    <li>• 긴급 공지사항</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">컨텍스트 배치</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 폼 검증 오류</li>
                    <li>• 특정 기능 안내</li>
                    <li>• 로컬 상태 변경</li>
                    <li>• 도움말 및 팁</li>
                  </ul>
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
                효과적인 Alert 사용을 위한 모범 사례
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
                    <li>• 명확하고 간결한 메시지 작성</li>
                    <li>• 상황에 맞는 적절한 아이콘 사용</li>
                    <li>• 올바른 심각도 수준 선택</li>
                    <li>• 필요시 구체적인 액션 버튼 제공</li>
                    <li>• ARIA 속성으로 접근성 완벽 지원</li>
                    <li>• 사용자가 이해할 수 있는 언어 사용</li>
                    <li>• 일관된 톤과 스타일 유지</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 과도한 알림 남용으로 사용자 피로 유발</li>
                    <li>• 모호하거나 기술적인 메시지</li>
                    <li>• 부적절한 심각도 수준 설정</li>
                    <li>• 너무 긴 텍스트나 복잡한 내용</li>
                    <li>• 액션 없이는 해결할 수 없는 문제</li>
                    <li>• 중복되거나 불필요한 알림</li>
                    <li>• 사용자를 비난하는 톤</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Alert를 효과적으로 인식할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">ARIA 속성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <code>role="alert"</code> - 중요한 메시지임을 스크린 리더에 알림</li>
                    <li>• <code>aria-live="polite"</code> - 현재 읽기를 방해하지 않고 알림</li>
                    <li>• <code>aria-atomic="true"</code> - 전체 알림 영역을 함께 읽기</li>
                    <li>• <code>aria-describedby</code> - 관련 설명과 연결</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 비율 (최소 4.5:1)</li>
                    <li>• 의미있는 아이콘으로 시각적 단서 제공</li>
                    <li>• 색상에만 의존하지 않는 정보 전달</li>
                    <li>• 명확한 텍스트 계층 구조</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 포함된 버튼들이 키보드로 접근 가능</li>
                    <li>• 논리적인 탭 순서 제공</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• Escape 키로 해제 가능한 알림</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 제목과 설명을 명확히 구분</li>
                    <li>• 버튼의 목적을 명확히 설명</li>
                    <li>• 현재 상태와 변경사항 알림</li>
                    <li>• 중요도에 따른 적절한 강조</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Alert 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 시스템 상태 변경</li>
                    <li>• 사용자 액션 피드백</li>
                    <li>• 중요한 정보 전달</li>
                    <li>• 오류 상황 알림</li>
                    <li>• 보안 관련 경고</li>
                    <li>• 데이터 손실 경고</li>
                    <li>• 성공 확인 메시지</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 방법</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Toast:</strong> 임시 알림</li>
                    <li>• <strong>Dialog:</strong> 중요한 확인</li>
                    <li>• <strong>Popover:</strong> 컨텍스트 정보</li>
                    <li>• <strong>Badge:</strong> 상태 표시</li>
                    <li>• <strong>Tooltip:</strong> 간단한 도움말</li>
                    <li>• <strong>Banner:</strong> 전역 공지</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 일반적인 정보 표시</li>
                    <li>• 마케팅 메시지</li>
                    <li>• 장식적 목적</li>
                    <li>• 복잡한 폼 레이아웃</li>
                    <li>• 긴 설명문</li>
                    <li>• 빈번한 상태 변경</li>
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
                Alert 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Alert 속성</h4>
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
                        <td className="p-2">'default' | 'destructive'</td>
                        <td className="p-2">'default'</td>
                        <td className="p-2">알림의 시각적 스타일과 의미</td>
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

              <div className="space-y-4">
                <h4 className="font-medium">하위 컴포넌트</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">컴포넌트</th>
                        <th className="text-left p-2 font-medium">목적</th>
                        <th className="text-left p-2 font-medium">필수 여부</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertTitle</td>
                        <td className="p-2">알림의 제목 표시</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AlertDescription</td>
                        <td className="p-2">알림의 상세 내용</td>
                        <td className="p-2">필수</td>
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
                code={`import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 정보 알림
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>정보</AlertTitle>
  <AlertDescription>
    중요한 정보를 여기에 작성합니다.
  </AlertDescription>
</Alert>

// 경고 알림
<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>경고</AlertTitle>
  <AlertDescription>
    주의가 필요한 상황입니다.
  </AlertDescription>
</Alert>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="액션이 포함된 알림"
                code={`<Alert>
  <Download className="h-4 w-4" />
  <AlertTitle>업데이트 사용 가능</AlertTitle>
  <AlertDescription className="space-y-2">
    <p>새로운 기능이 추가되었습니다.</p>
    <div className="flex gap-2">
      <Button size="sm">지금 업데이트</Button>
      <Button size="sm" variant="outline">나중에</Button>
    </div>
  </AlertDescription>
</Alert>`}
                codeKey="action-alert"
              />

              <CodeBlock
                title="복잡한 콘텐츠 알림"
                code={`<Alert>
  <Package className="h-4 w-4" />
  <AlertTitle>주문 배송 시작</AlertTitle>
  <AlertDescription className="space-y-3">
    <div>
      <p>주문번호 #12345가 배송을 시작했습니다.</p>
      <div className="text-sm text-muted-foreground">
        예상 도착일: 2024년 6월 25일
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Truck className="w-4 h-4" />
      <span className="text-sm">현재 위치: 서울 물류센터</span>
    </div>
    <div className="flex gap-2">
      <Button size="sm">배송 추적</Button>
      <Button size="sm" variant="outline">주문 상세</Button>
    </div>
  </AlertDescription>
</Alert>`}
                codeKey="complex-alert"
              />

              <CodeBlock
                title="접근성 향상"
                code={`// ARIA 속성 추가
<Alert role="alert" aria-live="polite" aria-atomic="true">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>중요한 알림</AlertTitle>
  <AlertDescription>
    이 메시지는 스크린 리더에서 즉시 읽혀집니다.
  </AlertDescription>
</Alert>

// 관련 내용과 연결
<Alert aria-describedby="help-text">
  <Info className="h-4 w-4" />
  <AlertTitle>도움말</AlertTitle>
  <AlertDescription id="help-text">
    이 기능에 대한 자세한 설명입니다.
  </AlertDescription>
</Alert>`}
                codeKey="accessibility"
              />

              <CodeBlock
                title="상태별 스타일링"
                code={`// 성공 알림 (커스텀 스타일)
<Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>성공</AlertTitle>
  <AlertDescription>
    작업이 성공적으로 완료되었습니다.
  </AlertDescription>
</Alert>

// 정보 알림 (커스텀 스타일)
<Alert className="border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200">
  <Info className="h-4 w-4" />
  <AlertTitle>정보</AlertTitle>
  <AlertDescription>
    중요한 정보를 확인하세요.
  </AlertDescription>
</Alert>`}
                codeKey="custom-styling"
              />

              <CodeBlock
                title="동적 알림 관리"
                code={`function AlertManager() {
  const [alerts, setAlerts] = useState([])

  const addAlert = (type, title, message) => {
    const id = Date.now()
    setAlerts(prev => [...prev, { id, type, title, message }])
    
    // 자동 제거 (선택사항)
    setTimeout(() => {
      removeAlert(id)
    }, 5000)
  }

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }

  return (
    <div className="space-y-4">
      {alerts.map(alert => (
        <Alert key={alert.id} variant={alert.type}>
          <Info className="h-4 w-4" />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription className="space-y-2">
            <p>{alert.message}</p>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => removeAlert(alert.id)}
            >
              닫기
            </Button>
          </AlertDescription>
        </Alert>
      ))}
    </div>
  )
}`}
                codeKey="dynamic-alerts"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}