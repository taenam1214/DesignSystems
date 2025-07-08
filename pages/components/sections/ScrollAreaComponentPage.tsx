import React, { useState } from 'react';
import { 
  ScrollArea,
  ScrollBar,
} from '../ui/scroll-area';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { 
  Scroll,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Monitor,
  Smartphone,
  Tablet,
  FileText,
  Image,
  List,
  Grid,
  Calendar,
  MessageSquare,
  Mail,
  Clock,
  User,
  Star,
  Heart,
  Share,
  Download,
  Settings,
  Search,
  Filter,
  Archive,
  Bookmark,
  Flag,
  Tag,
  Hash,
  AtSign,
  Globe,
  MapPin,
  Phone,
  Link,
  Eye,
  Camera,
  Music,
  Video,
  Headphones,
  Mic,
  Volume2,
  Play,
  Pause,
  Skip,
  Shuffle,
  Repeat,
  Upload,
  File,
  Folder,
  Bell
} from 'lucide-react';

export function ScrollAreaComponentPage() {
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

  // Sample data for examples
  const artworks = [
    { id: 1, artist: "빈센트 반 고흐", title: "별이 빛나는 밤", year: "1889" },
    { id: 2, artist: "레오나르도 다 빈치", title: "모나리자", year: "1503" },
    { id: 3, artist: "클로드 모네", title: "수련", year: "1919" },
    { id: 4, artist: "파블로 피카소", title: "아비뇽의 처녀들", year: "1907" },
    { id: 5, artist: "에드바르 뭉크", title: "절규", year: "1893" },
    { id: 6, artist: "요하네스 베르메르", title: "진주 귀걸이를 한 소녀", year: "1665" },
    { id: 7, artist: "살바도르 달리", title: "기억의 지속", year: "1931" },
    { id: 8, artist: "잭슨 폴록", title: "넘버 1", year: "1950" },
    { id: 9, artist: "미켈란젤로", title: "다비드", year: "1504" },
    { id: 10, artist: "구스타프 클림트", title: "키스", year: "1908" },
    { id: 11, artist: "앙리 마티스", title: "춤", year: "1910" },
    { id: 12, artist: "바실리 칸딘스키", title: "구성 VII", year: "1913" },
  ];

  const tags = [
    "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular", "Svelte",
    "Node.js", "Express", "Python", "Django", "Flask", "Java", "Spring", "C++", "C#", ".NET",
    "PHP", "Laravel", "Ruby", "Rails", "Go", "Rust", "Swift", "Kotlin", "Dart", "Flutter",
    "React Native", "iOS", "Android", "HTML", "CSS", "SASS", "LESS", "Webpack", "Vite", "Rollup"
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Scroll className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Scroll Area</h1>
            <p className="text-muted-foreground">
              커스텀 스크롤바가 포함된 스크롤 가능한 영역 컴포넌트입니다. 긴 콘텐츠를 제한된 공간에서 탐색할 수 있게 해줍니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            커스텀 스크롤바
          </Badge>
          <Badge variant="outline">수직/수평 스크롤</Badge>
          <Badge variant="outline">크로스 브라우저</Badge>
          <Badge variant="outline">터치 지원</Badge>
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
              <CardTitle>기본 스크롤 영역</CardTitle>
              <CardDescription>
                기본적인 세로 스크롤이 가능한 영역입니다. 콘텐츠가 영역을 넘칠 때 스크롤바가 나타납니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-lg">
                <ScrollArea className="h-72 w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">태그</h4>
                    {tags.map((tag, index) => (
                      <div key={tag} className="text-sm">
                        <Badge variant="secondary" className="mr-2">
                          {index + 1}
                        </Badge>
                        {tag}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              <CodeBlock
                code={`import { ScrollArea } from "./components/ui/scroll-area"

<ScrollArea className="h-72 w-full rounded-md border p-4">
  <div className="space-y-4">
    <h4 className="mb-4 text-sm font-medium leading-none">태그</h4>
    {tags.map((tag) => (
      <div key={tag} className="text-sm">
        {tag}
      </div>
    ))}
  </div>
</ScrollArea>`}
                codeKey="basic-scroll-area"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>수평 스크롤 영역</CardTitle>
              <CardDescription>
                가로로 스크롤 가능한 영역입니다. 이미지 갤러리나 가로 목록에 유용합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                  <div className="flex w-max space-x-4 p-4">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div
                        key={i}
                        className="shrink-0 rounded-md border border-slate-200 bg-slate-50 p-4 w-40 h-32 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <Image className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                          <p className="text-sm text-slate-600">이미지 {i + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              <CodeBlock
                code={`import { ScrollArea, ScrollBar } from "./components/ui/scroll-area"

<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {images.map((image, i) => (
      <div key={i} className="shrink-0 w-40 h-32">
        {/* 이미지 콘텐츠 */}
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}
                codeKey="horizontal-scroll-area"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>데이터 목록</CardTitle>
              <CardDescription>
                구조화된 데이터 목록을 스크롤 가능한 영역에 표시하는 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-xl">
                <ScrollArea className="h-80 w-full rounded-md border">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">유명한 예술 작품</h4>
                    {artworks.map((artwork) => (
                      <div key={artwork.id} className="pb-4 mb-4 border-b last:border-b-0">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {artwork.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {artwork.artist}
                            </p>
                          </div>
                          <Badge variant="outline">{artwork.year}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>채팅 메시지 목록</CardTitle>
              <CardDescription>
                실시간 채팅이나 메시징 인터페이스에서 사용되는 스크롤 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-md mx-auto">
                <ScrollArea className="h-96 w-full rounded-lg border bg-background">
                  <div className="p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-100 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">안녕하세요! 어떻게 지내세요?</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">오전 9:30</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                          <p className="text-sm">안녕하세요! 잘 지내고 있어요. 감사합니다!</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                        B
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-100 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">새로운 프로젝트는 어떻게 진행되고 있나요?</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">오전 9:32</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                          <p className="text-sm">순조롭게 진행되고 있어요. 이번 주에 첫 번째 마일스톤을 완료할 예정입니다.</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                        B
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-100 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">훌륭하네요! 혹시 도움이 필요한 부분이 있으면 언제든 말씀해 주세요.</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">오전 9:35</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                          <p className="text-sm">네, 감사합니다! 필요하면 연락드릴게요.</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                        B
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>파일 탐색기</CardTitle>
              <CardDescription>
                파일 및 폴더 목록을 표시하는 탐색기 스타일의 인터페이스입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-lg">
                <ScrollArea className="h-80 w-full rounded-md border">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none flex items-center gap-2">
                      <Folder className="w-4 h-4" />
                      내 문서
                    </h4>
                    <div className="space-y-2">
                      {[
                        { name: "프로젝트 계획서.pdf", type: "file", size: "2.3 MB", icon: FileText },
                        { name: "이미지", type: "folder", size: "12개 항목", icon: Folder },
                        { name: "회의록_2024.docx", type: "file", size: "156 KB", icon: FileText },
                        { name: "스크린샷", type: "folder", size: "24개 항목", icon: Folder },
                        { name: "예산안.xlsx", type: "file", size: "89 KB", icon: FileText },
                        { name: "백업", type: "folder", size: "5개 항목", icon: Folder },
                        { name: "프레젠테이션.pptx", type: "file", size: "5.1 MB", icon: FileText },
                        { name: "음성 메모.mp3", type: "file", size: "3.7 MB", icon: Music },
                        { name: "비디오 클립", type: "folder", size: "8개 항목", icon: Folder },
                        { name: "계약서.pdf", type: "file", size: "1.2 MB", icon: FileText },
                        { name: "디자인 자료", type: "folder", size: "15개 항목", icon: Folder },
                        { name: "데이터베이스.db", type: "file", size: "12.5 MB", icon: File },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-2 hover:bg-accent rounded-md cursor-pointer"
                        >
                          <item.icon className="w-4 h-4 text-muted-foreground" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.size}</p>
                          </div>
                          {item.type === "folder" && (
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>알림 피드</CardTitle>
              <CardDescription>
                시간순으로 정렬된 알림 목록을 표시하는 피드 스타일입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-md">
                <ScrollArea className="h-80 w-full rounded-md border">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      최근 알림
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          icon: MessageSquare,
                          title: "새 메시지",
                          message: "김개발자님이 메시지를 보냈습니다.",
                          time: "2분 전",
                          color: "text-blue-500"
                        },
                        {
                          icon: Star,
                          title: "즐겨찾기 추가",
                          message: "프로젝트가 즐겨찾기에 추가되었습니다.",
                          time: "5분 전",
                          color: "text-yellow-500"
                        },
                        {
                          icon: Download,
                          title: "다운로드 완료",
                          message: "파일 다운로드가 완료되었습니다.",
                          time: "10분 전",
                          color: "text-green-500"
                        },
                        {
                          icon: Calendar,
                          title: "일정 알림",
                          message: "30분 후 회의가 예정되어 있습니다.",
                          time: "15분 전",
                          color: "text-purple-500"
                        },
                        {
                          icon: Mail,
                          title: "새 이메일",
                          message: "중요한 이메일이 도착했습니다.",
                          time: "1시간 전",
                          color: "text-red-500"
                        },
                        {
                          icon: Settings,
                          title: "시스템 업데이트",
                          message: "시스템이 최신 버전으로 업데이트되었습니다.",
                          time: "2시간 전",
                          color: "text-gray-500"
                        },
                        {
                          icon: User,
                          title: "새 팔로워",
                          message: "이디자이너님이 팔로우하기 시작했습니다.",
                          time: "3시간 전",
                          color: "text-blue-500"
                        },
                        {
                          icon: Heart,
                          title: "좋아요",
                          message: "게시물에 10개의 좋아요가 달렸습니다.",
                          time: "4시간 전",
                          color: "text-pink-500"
                        },
                      ].map((notification, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-accent rounded-md cursor-pointer">
                          <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${notification.color}`}>
                            <notification.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <p className="text-xs text-muted-foreground">{notification.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>그리드 스크롤</CardTitle>
              <CardDescription>
                그리드 레이아웃과 함께 사용되는 스크롤 영역입니다. 카드나 이미지 그리드에 적합합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-2xl">
                <ScrollArea className="h-80 w-full rounded-md border p-4">
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 24 }, (_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center bg-muted/50"
                      >
                        <div className="text-center">
                          <Grid className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground">카드 {i + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
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
                효과적인 ScrollArea 사용을 위한 모범 사례
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
                    <li>• 명확한 높이 설정으로 스크롤 영역 정의</li>
                    <li>• 콘텐츠가 영역을 넘칠 때만 사용</li>
                    <li>• 적절한 패딩과 마진으로 가독성 향상</li>
                    <li>• 키보드 탐색 지원 고려</li>
                    <li>• 모바일에서 터치 스크롤 테스트</li>
                    <li>• 스크롤바 스타일링 일관성 유지</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 중첩된 스크롤 영역 (스크롤 충돌)</li>
                    <li>• 너무 작은 스크롤 영역 크기</li>
                    <li>• 가로 스크롤의 과도한 사용</li>
                    <li>• 스크롤바 완전 숨김 (접근성 문제)</li>
                    <li>• 성능 저하를 일으키는 무거운 콘텐츠</li>
                    <li>• 스크롤 위치 초기화 무시</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 ScrollArea를 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">↑↓</kbd>
                      <span>세로 스크롤</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">←→</kbd>
                      <span>가로 스크롤</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Page Up/Down</kbd>
                      <span>페이지 단위 스크롤</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Home/End</kbd>
                      <span>처음/끝으로 이동</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 스크롤 가능한 영역임을 명시</li>
                    <li>• 콘텐츠의 총 크기와 현재 위치 정보</li>
                    <li>• 적절한 ARIA 라벨 제공</li>
                    <li>• 구조화된 콘텐츠로 탐색 용이성 향상</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">모바일 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 터치 스크롤 제스처 지원</li>
                    <li>• 충분한 터치 영역 확보</li>
                    <li>• 스크롤 모멘텀 유지</li>
                    <li>• 확대/축소 시 스크롤 동작 유지</li>
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
                  <h5 className="font-medium mb-2 text-green-700">ScrollArea 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 긴 목록이나 콘텐츠</li>
                    <li>• 제한된 화면 공간</li>
                    <li>• 데이터 테이블</li>
                    <li>• 채팅 메시지 목록</li>
                    <li>• 파일 탐색기</li>
                    <li>• 이미지 갤러리</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Pagination:</strong> 데이터 분할</li>
                    <li>• <strong>Carousel:</strong> 슬라이드 네비게이션</li>
                    <li>• <strong>Accordion:</strong> 접기/펼치기</li>
                    <li>• <strong>Drawer:</strong> 사이드 패널</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 짧은 콘텐츠</li>
                    <li>• 전체 페이지 스크롤</li>
                    <li>• 중요한 액션 버튼 숨김</li>
                    <li>• 과도한 중첩 스크롤</li>
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
                ScrollArea 컴포넌트의 속성과 설정 옵션
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
                        <td className="p-2 font-mono">ScrollArea</td>
                        <td className="p-2">스크롤 영역 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ScrollBar</td>
                        <td className="p-2">스크롤바 (수직/수평)</td>
                        <td className="p-2">가로 스크롤 시 필수</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">ScrollArea 속성</h4>
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
                        <td className="p-2 font-mono">className</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">추가 CSS 클래스</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">children</td>
                        <td className="p-2">ReactNode</td>
                        <td className="p-2">-</td>
                        <td className="p-2">스크롤 가능한 콘텐츠</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">ScrollBar 속성</h4>
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
                        <td className="p-2 font-mono">orientation</td>
                        <td className="p-2">"vertical" | "horizontal"</td>
                        <td className="p-2">"vertical"</td>
                        <td className="p-2">스크롤바 방향</td>
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
                code={`import { ScrollArea, ScrollBar } from "./components/ui/scroll-area";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border p-4">
      <div className="space-y-4">
        {/* 긴 콘텐츠 */}
        {items.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
    </ScrollArea>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="가로 스크롤"
                code={`export function Example() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {items.map((item) => (
          <div key={item.id} className="shrink-0 w-40">
            {item.content}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}`}
                codeKey="horizontal-scroll"
              />

              <CodeBlock
                title="고정 높이"
                code={`export function Example() {
  return (
    <ScrollArea className="h-80 w-full rounded-md border">
      <div className="p-4">
        {/* 많은 콘텐츠 */}
        {longContentList.map((content, index) => (
          <div key={index} className="py-2">
            {content}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`}
                codeKey="fixed-height"
              />

              <CodeBlock
                title="반응형 높이"
                code={`export function Example() {
  return (
    <ScrollArea className="h-[50vh] max-h-80 w-full rounded-md border">
      <div className="p-4">
        {/* 뷰포트 높이에 따라 조정되는 스크롤 영역 */}
        {dynamicContent.map((item) => (
          <div key={item.id} className="mb-4">
            {item.content}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`}
                codeKey="responsive-height"
              />

              <CodeBlock
                title="스타일링"
                code={`export function Example() {
  return (
    <ScrollArea className="h-72 w-full rounded-lg border-2 border-dashed">
      <div className="p-6">
        {/* 사용자 정의 스타일링 */}
        {content.map((item) => (
          <div key={item.id} className="p-3 mb-3 bg-muted rounded-md">
            {item.content}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`}
                codeKey="styling"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}