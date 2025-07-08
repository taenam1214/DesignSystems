import React, { useState } from 'react';
import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from '../ui/menubar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { 
  Menu,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  File,
  Edit,
  Save,
  FolderOpen,
  FileText,
  Printer,
  Search,
  Settings,
  HelpCircle,
  User,
  LogOut,
  Download,
  Upload,
  Trash,
  Archive,
  Star,
  Heart,
  Share,
  Link,
  Image,
  Video,
  Music,
  Camera,
  Smartphone,
  Monitor,
  Tablet,
  Wifi,
  Clock,
  Calendar,
  Bell,
  Mail,
  MessageSquare,
  Phone,
  Globe,
  Home,
  Building,
  MapPin,
  Navigation,
  Zap,
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  RotateCcw,
  RotateCw,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
  X,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft
} from 'lucide-react';

export function MenubarComponentPage() {
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
            <Menu className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Menubar</h1>
            <p className="text-muted-foreground">
              데스크톱 애플리케이션처럼 상단에 고정되는 수평 메뉴바입니다. 여러 메뉴를 체계적으로 정리하여 일관된 네비게이션을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            다중 메뉴
          </Badge>
          <Badge variant="outline">키보드 탐색</Badge>
          <Badge variant="outline">하위 메뉴</Badge>
          <Badge variant="outline">단축키</Badge>
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
              <CardTitle>기본 메뉴바</CardTitle>
              <CardDescription>
                가장 기본적인 메뉴바 구성입니다. 파일, 편집, 보기 메뉴를 포함합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>파일</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <File className="mr-2 h-4 w-4" />
                        새 파일
                        <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <FolderOpen className="mr-2 h-4 w-4" />
                        열기...
                        <MenubarShortcut>⌘O</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Save className="mr-2 h-4 w-4" />
                        저장
                        <MenubarShortcut>⌘S</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        다른 이름으로 저장...
                        <MenubarShortcut>⇧⌘S</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Printer className="mr-2 h-4 w-4" />
                        인쇄...
                        <MenubarShortcut>⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>편집</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        실행 취소
                        <MenubarShortcut>⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <RotateCw className="mr-2 h-4 w-4" />
                        다시 실행
                        <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>잘라내기</MenubarItem>
                      <MenubarItem>복사</MenubarItem>
                      <MenubarItem>붙여넣기</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Search className="mr-2 h-4 w-4" />
                        찾기...
                        <MenubarShortcut>⌘F</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>보기</MenubarTrigger>
                    <MenubarContent>
                      <MenubarCheckboxItem checked>사이드바 표시</MenubarCheckboxItem>
                      <MenubarCheckboxItem>상태 표시줄</MenubarCheckboxItem>
                      <MenubarSeparator />
                      <MenubarItem>전체 화면</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
              <CodeBlock
                code={`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
} from "./components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>파일</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        새 파일
        <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>열기...</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>저장</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>편집</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>실행 취소</MenubarItem>
      <MenubarItem>다시 실행</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
                codeKey="basic-menubar"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>하위 메뉴</CardTitle>
              <CardDescription>
                복잡한 메뉴 구조를 위한 중첩된 하위 메뉴 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>도구</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <Settings className="mr-2 h-4 w-4" />
                        환경설정...
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>
                          <Image className="mr-2 h-4 w-4" />
                          이미지 도구
                        </MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>크기 조정</MenubarItem>
                          <MenubarItem>자르기</MenubarItem>
                          <MenubarItem>회전</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>필터 적용</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSub>
                        <MenubarSubTrigger>
                          <FileText className="mr-2 h-4 w-4" />
                          텍스트 도구
                        </MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>맞춤법 검사</MenubarItem>
                          <MenubarItem>번역</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>워드 카운트</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Download className="mr-2 h-4 w-4" />
                        플러그인 다운로드
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>내보내기</MenubarTrigger>
                    <MenubarContent>
                      <MenubarLabel>형식 선택</MenubarLabel>
                      <MenubarSeparator />
                      <MenubarItem>PDF로 내보내기</MenubarItem>
                      <MenubarItem>이미지로 내보내기</MenubarItem>
                      <MenubarSub>
                        <MenubarSubTrigger>고급 내보내기</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>고해상도 PDF</MenubarItem>
                          <MenubarItem>벡터 형식</MenubarItem>
                          <MenubarItem>웹 최적화</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>라디오 그룹과 체크박스</CardTitle>
              <CardDescription>
                선택 가능한 옵션들을 포함한 메뉴바 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>표시</MenubarTrigger>
                    <MenubarContent>
                      <MenubarLabel>레이아웃</MenubarLabel>
                      <MenubarSeparator />
                      <MenubarRadioGroup value="list">
                        <MenubarRadioItem value="list">목록 보기</MenubarRadioItem>
                        <MenubarRadioItem value="grid">격자 보기</MenubarRadioItem>
                        <MenubarRadioItem value="card">카드 보기</MenubarRadioItem>
                      </MenubarRadioGroup>
                      <MenubarSeparator />
                      <MenubarLabel>옵션</MenubarLabel>
                      <MenubarSeparator />
                      <MenubarCheckboxItem checked>썸네일 표시</MenubarCheckboxItem>
                      <MenubarCheckboxItem>파일 크기 표시</MenubarCheckboxItem>
                      <MenubarCheckboxItem checked>수정 날짜 표시</MenubarCheckboxItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>테마</MenubarTrigger>
                    <MenubarContent>
                      <MenubarRadioGroup value="system">
                        <MenubarRadioItem value="light">라이트 모드</MenubarRadioItem>
                        <MenubarRadioItem value="dark">다크 모드</MenubarRadioItem>
                        <MenubarRadioItem value="system">시스템 설정</MenubarRadioItem>
                      </MenubarRadioGroup>
                      <MenubarSeparator />
                      <MenubarCheckboxItem>고대비 모드</MenubarCheckboxItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>텍스트 에디터 메뉴바</CardTitle>
              <CardDescription>
                텍스트 에디터나 워드 프로세서에서 사용되는 완전한 메뉴바 구성입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-4xl">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>파일</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <File className="mr-2 h-4 w-4" />
                        새 문서
                        <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <FolderOpen className="mr-2 h-4 w-4" />
                        열기...
                        <MenubarShortcut>⌘O</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Save className="mr-2 h-4 w-4" />
                        저장
                        <MenubarShortcut>⌘S</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>다른 이름으로 저장...</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>
                          <Download className="mr-2 h-4 w-4" />
                          내보내기
                        </MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>PDF</MenubarItem>
                          <MenubarItem>Word 문서</MenubarItem>
                          <MenubarItem>HTML</MenubarItem>
                          <MenubarItem>마크다운</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Printer className="mr-2 h-4 w-4" />
                        인쇄...
                        <MenubarShortcut>⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  
                  <MenubarMenu>
                    <MenubarTrigger>편집</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        실행 취소
                        <MenubarShortcut>⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <RotateCw className="mr-2 h-4 w-4" />
                        다시 실행
                        <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>잘라내기</MenubarItem>
                      <MenubarItem>복사</MenubarItem>
                      <MenubarItem>붙여넣기</MenubarItem>
                      <MenubarItem>모두 선택</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Search className="mr-2 h-4 w-4" />
                        찾기 및 바꾸기...
                        <MenubarShortcut>⌘F</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>형식</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>굵게</MenubarItem>
                      <MenubarItem>기울임꼴</MenubarItem>
                      <MenubarItem>밑줄</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>정렬</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>왼쪽 정렬</MenubarItem>
                          <MenubarItem>가운데 정렬</MenubarItem>
                          <MenubarItem>오른쪽 정렬</MenubarItem>
                          <MenubarItem>양쪽 정렬</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSub>
                        <MenubarSubTrigger>목록</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>글머리 기호</MenubarItem>
                          <MenubarItem>번호 매기기</MenubarItem>
                          <MenubarItem>체크리스트</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>삽입</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <Image className="mr-2 h-4 w-4" />
                        이미지...
                      </MenubarItem>
                      <MenubarItem>
                        <Link className="mr-2 h-4 w-4" />
                        링크...
                      </MenubarItem>
                      <MenubarItem>표...</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        날짜/시간
                      </MenubarItem>
                      <MenubarItem>페이지 나누기</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>도구</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>맞춤법 검사</MenubarItem>
                      <MenubarItem>단어 수 세기</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <Settings className="mr-2 h-4 w-4" />
                        환경설정...
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>도움말</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <HelpCircle className="mr-2 h-4 w-4" />
                        사용 설명서
                      </MenubarItem>
                      <MenubarItem>키보드 단축키</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>정보...</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>미디어 플레이어 메뉴바</CardTitle>
              <CardDescription>
                미디어 플레이어 애플리케이션을 위한 전문화된 메뉴바입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-4xl">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>미디어</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <FolderOpen className="mr-2 h-4 w-4" />
                        파일 열기...
                        <MenubarShortcut>⌘O</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <Globe className="mr-2 h-4 w-4" />
                        스트림 열기...
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>
                          <Music className="mr-2 h-4 w-4" />
                          재생목록
                        </MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>새 재생목록</MenubarItem>
                          <MenubarItem>재생목록 불러오기</MenubarItem>
                          <MenubarItem>재생목록 저장</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>재생</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>재생/일시정지</MenubarItem>
                      <MenubarItem>정지</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>이전 트랙</MenubarItem>
                      <MenubarItem>다음 트랙</MenubarItem>
                      <MenubarSeparator />
                      <MenubarRadioGroup value="normal">
                        <MenubarRadioItem value="normal">일반 재생</MenubarRadioItem>
                        <MenubarRadioItem value="repeat">반복 재생</MenubarRadioItem>
                        <MenubarRadioItem value="shuffle">무작위 재생</MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>오디오</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>음소거</MenubarItem>
                      <MenubarItem>볼륨 올리기</MenubarItem>
                      <MenubarItem>볼륨 내리기</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>오디오 트랙</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarRadioGroup value="korean">
                            <MenubarRadioItem value="korean">한국어</MenubarRadioItem>
                            <MenubarRadioItem value="english">English</MenubarRadioItem>
                            <MenubarRadioItem value="japanese">日本語</MenubarRadioItem>
                          </MenubarRadioGroup>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>비디오</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>전체 화면</MenubarItem>
                      <MenubarItem>화면에 맞추기</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>화질</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarRadioGroup value="auto">
                            <MenubarRadioItem value="auto">자동</MenubarRadioItem>
                            <MenubarRadioItem value="1080p">1080p</MenubarRadioItem>
                            <MenubarRadioItem value="720p">720p</MenubarRadioItem>
                            <MenubarRadioItem value="480p">480p</MenubarRadioItem>
                          </MenubarRadioGroup>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarCheckboxItem>자막 표시</MenubarCheckboxItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>개발 도구 메뉴바</CardTitle>
              <CardDescription>
                코드 에디터나 IDE에서 사용되는 개발자 중심의 메뉴바입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-4xl">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>파일</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <File className="mr-2 h-4 w-4" />
                        새 파일
                        <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <FolderOpen className="mr-2 h-4 w-4" />
                        폴더 열기...
                        <MenubarShortcut>⌘O</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>새로 만들기</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>React 컴포넌트</MenubarItem>
                          <MenubarItem>TypeScript 파일</MenubarItem>
                          <MenubarItem>CSS 파일</MenubarItem>
                          <MenubarItem>테스트 파일</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>실행</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>디버그 시작</MenubarItem>
                      <MenubarItem>디버그 없이 시작</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>중단점 설정</MenubarItem>
                      <MenubarItem>모든 중단점 제거</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>테스트 실행</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>터미널</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>새 터미널</MenubarItem>
                      <MenubarItem>터미널 분할</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>명령 팔레트</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>Git</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>변경사항 커밋</MenubarItem>
                      <MenubarItem>푸시</MenubarItem>
                      <MenubarItem>풀</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>브랜치 생성</MenubarItem>
                      <MenubarItem>브랜치 전환</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
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
                효과적인 Menubar 사용을 위한 모범 사례
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
                    <li>• 일관된 메뉴 구조와 순서 유지</li>
                    <li>• 논리적인 그룹화와 구분자 사용</li>
                    <li>• 자주 사용하는 기능에 단축키 제공</li>
                    <li>• 명확하고 직관적인 라벨 사용</li>
                    <li>• 하위 메뉴는 3단계 이하로 제한</li>
                    <li>• 아이콘을 사용해 시각적 구분</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 깊은 중첩 구조</li>
                    <li>• 모호하거나 기술적인 용어</li>
                    <li>• 과도하게 많은 메뉴 항목</li>
                    <li>• 일관성 없는 단축키</li>
                    <li>• 불필요한 하위 메뉴</li>
                    <li>• 중복되는 기능</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Menubar를 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>메뉴바 진입</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">←→</kbd>
                      <span>메뉴 간 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">↓</kbd>
                      <span>메뉴 열기</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Esc</kbd>
                      <span>메뉴 닫기</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>항목 선택</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">문자</kbd>
                      <span>빠른 탐색</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 메뉴 항목의 역할과 상태를 명확히 안내</li>
                    <li>• 하위 메뉴 존재 여부 알림</li>
                    <li>• 단축키 정보 포함</li>
                    <li>• 그룹 라벨과 구분자 의미 전달</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Menubar 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 데스크톱 애플리케이션</li>
                    <li>• 복잡한 도구 모음</li>
                    <li>• 전문 소프트웨어</li>
                    <li>• 개발 환경 (IDE)</li>
                    <li>• 콘텐츠 편집 도구</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Navigation Menu:</strong> 웹사이트 네비게이션</li>
                    <li>• <strong>Dropdown Menu:</strong> 단순한 액션 메뉴</li>
                    <li>• <strong>Context Menu:</strong> 우클릭 메뉴</li>
                    <li>• <strong>Toolbar:</strong> 아이콘 기반 도구</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 모바일 애플리케이션</li>
                    <li>• 단순한 웹사이트</li>
                    <li>• 기본적인 액션만 있는 경우</li>
                    <li>• 터치 기반 인터페이스</li>
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
                Menubar 컴포넌트의 속성과 설정 옵션
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
                        <td className="p-2 font-mono">Menubar</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarMenu</td>
                        <td className="p-2">개별 메뉴</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarTrigger</td>
                        <td className="p-2">메뉴 트리거 버튼</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarContent</td>
                        <td className="p-2">메뉴 내용 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarItem</td>
                        <td className="p-2">메뉴 항목</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarSeparator</td>
                        <td className="p-2">구분선</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarLabel</td>
                        <td className="p-2">섹션 라벨</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarShortcut</td>
                        <td className="p-2">단축키 표시</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarCheckboxItem</td>
                        <td className="p-2">체크박스 항목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarRadioGroup</td>
                        <td className="p-2">라디오 그룹</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarRadioItem</td>
                        <td className="p-2">라디오 항목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarSub</td>
                        <td className="p-2">하위 메뉴 컨테이너</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarSubTrigger</td>
                        <td className="p-2">하위 메뉴 트리거</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">MenubarSubContent</td>
                        <td className="p-2">하위 메뉴 내용</td>
                        <td className="p-2">선택</td>
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "./components/ui/menubar";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>파일</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>새 파일</MenubarItem>
          <MenubarItem>열기...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>저장</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>편집</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>실행 취소</MenubarItem>
          <MenubarItem>다시 실행</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="단축키 포함"
                code={`<MenubarItem>
  새 파일
  <MenubarShortcut>⌘N</MenubarShortcut>
</MenubarItem>
<MenubarItem>
  저장
  <MenubarShortcut>⌘S</MenubarShortcut>
</MenubarItem>`}
                codeKey="shortcuts"
              />

              <CodeBlock
                title="체크박스와 라디오 버튼"
                code={`<MenubarContent>
  <MenubarCheckboxItem checked>사이드바 표시</MenubarCheckboxItem>
  <MenubarCheckboxItem>상태 표시줄</MenubarCheckboxItem>
  <MenubarSeparator />
  <MenubarRadioGroup value="list">
    <MenubarRadioItem value="list">목록 보기</MenubarRadioItem>
    <MenubarRadioItem value="grid">격자 보기</MenubarRadioItem>
  </MenubarRadioGroup>
</MenubarContent>`}
                codeKey="checkbox-radio"
              />

              <CodeBlock
                title="하위 메뉴"
                code={`<MenubarSub>
  <MenubarSubTrigger>내보내기</MenubarSubTrigger>
  <MenubarSubContent>
    <MenubarItem>PDF</MenubarItem>
    <MenubarItem>이미지</MenubarItem>
    <MenubarItem>텍스트</MenubarItem>
  </MenubarSubContent>
</MenubarSub>`}
                codeKey="submenu"
              />

              <CodeBlock
                title="아이콘과 함께"
                code={`import { File, Save, Printer } from "lucide-react";

<MenubarContent>
  <MenubarItem>
    <File className="mr-2 h-4 w-4" />
    새 파일
    <MenubarShortcut>⌘N</MenubarShortcut>
  </MenubarItem>
  <MenubarItem>
    <Save className="mr-2 h-4 w-4" />
    저장
    <MenubarShortcut>⌘S</MenubarShortcut>
  </MenubarItem>
  <MenubarItem>
    <Printer className="mr-2 h-4 w-4" />
    인쇄...
    <MenubarShortcut>⌘P</MenubarShortcut>
  </MenubarItem>
</MenubarContent>`}
                codeKey="with-icons"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}