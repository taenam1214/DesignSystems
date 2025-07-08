import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
} from '../ui/context-menu';
import { 
  MousePointer2,
  Copy,
  Scissors,
  Clipboard,
  Download,
  Share,
  Trash2,
  Edit,
  Eye,
  Star,
  Heart,
  Bookmark,
  Folder,
  File,
  Image,
  RefreshCw,
  Settings,
  MoreVertical,
  Check,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  FileEdit,
  Archive,
  Link,
  Zap,
  Layers,
  Info,
  HelpCircle
} from 'lucide-react';
import { useState } from 'react';

export function ContextMenuComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [archived, setArchived] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

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
      title: '기본 컨텍스트 메뉴',
      description: '우클릭으로 표시되는 기본적인 컨텍스트 메뉴입니다.',
      component: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm bg-muted/20">
              이 영역을 우클릭하세요
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem className="gap-2">
              <Copy className="h-4 w-4" />
              복사
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Scissors className="h-4 w-4" />
              잘라내기
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Clipboard className="h-4 w-4" />
              붙여넣기
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Eye className="h-4 w-4" />
              미리보기
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Download className="h-4 w-4" />
              다운로드
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "./components/ui/context-menu"
import { Copy, Scissors, Clipboard, Eye, Download } from "lucide-react"

export function BasicContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          이 영역을 우클릭하세요
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem className="gap-2">
          <Copy className="h-4 w-4" />
          복사
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className="gap-2">
          <Scissors className="h-4 w-4" />
          잘라내기
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className="gap-2">
          <Clipboard className="h-4 w-4" />
          붙여넣기
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="gap-2">
          <Eye className="h-4 w-4" />
          미리보기
        </ContextMenuItem>
        <ContextMenuItem className="gap-2">
          <Download className="h-4 w-4" />
          다운로드
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`
    },
    {
      title: '체크박스와 라디오 메뉴',
      description: '선택 가능한 옵션이 있는 컨텍스트 메뉴입니다.',
      component: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm bg-muted/20">
              설정 메뉴 (우클릭)
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuLabel>표시 옵션</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem 
              checked={bookmarked}
              onCheckedChange={setBookmarked}
            >
              북마크 표시
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem 
              checked={liked}
              onCheckedChange={setLiked}
            >
              좋아요 표시
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem 
              checked={archived}
              onCheckedChange={setArchived}
            >
              보관함 표시
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuLabel>보기 모드</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
              <ContextMenuRadioItem value="grid">
                격자 보기
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="list">
                목록 보기
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="card">
                카드 보기
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import { useState } from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "./components/ui/context-menu"

export function SelectableContextMenu() {
  const [bookmarked, setBookmarked] = useState(false)
  const [liked, setLiked] = useState(false)
  const [viewMode, setViewMode] = useState('grid')

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          설정 메뉴 (우클릭)
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>표시 옵션</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem 
          checked={bookmarked}
          onCheckedChange={setBookmarked}
        >
          북마크 표시
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem 
          checked={liked}
          onCheckedChange={setLiked}
        >
          좋아요 표시
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>보기 모드</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
          <ContextMenuRadioItem value="grid">격자 보기</ContextMenuRadioItem>
          <ContextMenuRadioItem value="list">목록 보기</ContextMenuRadioItem>
          <ContextMenuRadioItem value="card">카드 보기</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`
    },
    {
      title: '서브메뉴가 있는 컨텍스트 메뉴',
      description: '중첩된 메뉴 구조를 가진 컨텍스트 메뉴입니다.',
      component: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm bg-muted/20">
              고급 메뉴 (우클릭)
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem className="gap-2">
              <FileEdit className="h-4 w-4" />
              편집
              <ContextMenuShortcut>⌘E</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Copy className="h-4 w-4" />
              복사
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger className="gap-2">
                <Share className="h-4 w-4" />
                공유하기
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem className="gap-2">
                  <Link className="h-4 w-4" />
                  링크 복사
                </ContextMenuItem>
                <ContextMenuItem className="gap-2">
                  <MonitorSpeaker className="h-4 w-4" />
                  이메일로 공유
                </ContextMenuItem>
                <ContextMenuItem className="gap-2">
                  <Image className="h-4 w-4" />
                  소셜 미디어
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="gap-2">
                  <Download className="h-4 w-4" />
                  다운로드 링크 생성
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSub>
              <ContextMenuSubTrigger className="gap-2">
                <Folder className="h-4 w-4" />
                이동하기
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem className="gap-2">
                  <Folder className="h-4 w-4" />
                  문서 폴더
                </ContextMenuItem>
                <ContextMenuItem className="gap-2">
                  <Image className="h-4 w-4" />
                  이미지 폴더
                </ContextMenuItem>
                <ContextMenuItem className="gap-2">
                  <Archive className="h-4 w-4" />
                  보관함
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="gap-2">
                  <Trash2 className="h-4 w-4 text-destructive" />
                  휴지통
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Settings className="h-4 w-4" />
              속성
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
} from "./components/ui/context-menu"

export function NestedContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          고급 메뉴 (우클릭)
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem className="gap-2">
          <FileEdit className="h-4 w-4" />
          편집
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger className="gap-2">
            <Share className="h-4 w-4" />
            공유하기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem className="gap-2">
              <Link className="h-4 w-4" />
              링크 복사
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <MonitorSpeaker className="h-4 w-4" />
              이메일로 공유
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Image className="h-4 w-4" />
              소셜 미디어
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger className="gap-2">
            <Folder className="h-4 w-4" />
            이동하기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem className="gap-2">
              <Folder className="h-4 w-4" />
              문서 폴더
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Archive className="h-4 w-4" />
              보관함
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  )
}`
    },
    {
      title: '파일 관리 컨텍스트 메뉴',
      description: '파일이나 폴더에 대한 실제적인 작업들을 포함한 메뉴입니다.',
      component: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm bg-muted/20 flex-col gap-2">
              <File className="h-8 w-8 text-muted-foreground" />
              <span>문서.pdf</span>
              <span className="text-xs text-muted-foreground">우클릭으로 메뉴 열기</span>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem className="gap-2">
              <Eye className="h-4 w-4" />
              열기
              <ContextMenuShortcut>⌘O</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Edit className="h-4 w-4" />
              편집
              <ContextMenuShortcut>⌘E</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Copy className="h-4 w-4" />
              복사
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Scissors className="h-4 w-4" />
              잘라내기
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <RefreshCw className="h-4 w-4" />
              이름 바꾸기
              <ContextMenuShortcut>F2</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Star className="h-4 w-4" />
              즐겨찾기 추가
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Download className="h-4 w-4" />
              다운로드
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Share className="h-4 w-4" />
              공유
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Archive className="h-4 w-4" />
              압축하기
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Info className="h-4 w-4" />
              정보 보기
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive" className="gap-2">
              <Trash2 className="h-4 w-4" />
              삭제
              <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "./components/ui/context-menu"
import { File, Eye, Edit, Copy, Scissors, RefreshCw, Star, Download, Share, Archive, Info, Trash2 } from "lucide-react"

export function FileContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm flex-col gap-2">
          <File className="h-8 w-8 text-muted-foreground" />
          <span>문서.pdf</span>
          <span className="text-xs text-muted-foreground">우클릭으로 메뉴 열기</span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem className="gap-2">
          <Eye className="h-4 w-4" />
          열기
          <ContextMenuShortcut>⌘O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className="gap-2">
          <Edit className="h-4 w-4" />
          편집
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="gap-2">
          <Copy className="h-4 w-4" />
          복사
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem className="gap-2">
          <Cut className="h-4 w-4" />
          잘라내기
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="gap-2">
          <Star className="h-4 w-4" />
          즐겨찾기 추가
        </ContextMenuItem>
        <ContextMenuItem className="gap-2">
          <Download className="h-4 w-4" />
          다운로드
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" className="gap-2">
          <Trash2 className="h-4 w-4" />
          삭제
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`
    },
    {
      title: '테이블 행 컨텍스트 메뉴',
      description: '데이터 테이블에서 사용할 수 있는 컨텍스트 메뉴입니다.',
      component: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="w-full p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                    김
                  </div>
                  <div>
                    <div className="font-medium">김민수</div>
                    <div className="text-sm text-muted-foreground">minsu@example.com</div>
                  </div>
                </div>
                <Badge variant="outline">활성</Badge>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                이 행을 우클릭하세요
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuLabel>사용자 작업</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Eye className="h-4 w-4" />
              프로필 보기
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Edit className="h-4 w-4" />
              정보 수정
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <MonitorSpeaker className="h-4 w-4" />
              메시지 보내기
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Copy className="h-4 w-4" />
              이메일 복사
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Link className="h-4 w-4" />
              프로필 링크 복사
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger className="gap-2">
                <Settings className="h-4 w-4" />
                권한 관리
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem className="gap-2">
                  <Zap className="h-4 w-4" />
                  관리자로 승격
                </ContextMenuItem>
                <ContextMenuItem className="gap-2">
                  <Layers className="h-4 w-4" />
                  편집자로 변경
                </ContextMenuItem>
                <ContextMenuItem className="gap-2">
                  <Eye className="h-4 w-4" />
                  뷰어로 변경
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem className="gap-2">
              <Archive className="h-4 w-4" />
              계정 비활성화
            </ContextMenuItem>
            <ContextMenuItem variant="destructive" className="gap-2">
              <Trash2 className="h-4 w-4" />
              계정 삭제
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "./components/ui/context-menu"
import { Badge } from "./components/ui/badge"

export function TableRowContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="w-full p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                김
              </div>
              <div>
                <div className="font-medium">김민수</div>
                <div className="text-sm text-muted-foreground">minsu@example.com</div>
              </div>
            </div>
            <Badge variant="outline">활성</Badge>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>사용자 작업</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem className="gap-2">
          <Eye className="h-4 w-4" />
          프로필 보기
        </ContextMenuItem>
        <ContextMenuItem className="gap-2">
          <Edit className="h-4 w-4" />
          정보 수정
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger className="gap-2">
            <Settings className="h-4 w-4" />
            권한 관리
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem className="gap-2">
              <Zap className="h-4 w-4" />
              관리자로 승격
            </ContextMenuItem>
            <ContextMenuItem className="gap-2">
              <Layers className="h-4 w-4" />
              편집자로 변경
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" className="gap-2">
          <Trash2 className="h-4 w-4" />
          계정 삭제
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`
    }
  ];

  const variants = [
    {
      title: '기본 메뉴 항목',
      description: '표준 메뉴 항목으로 클릭 시 액션을 실행합니다.',
      example: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">기본 항목</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>일반 항목</ContextMenuItem>
            <ContextMenuItem disabled>비활성화된 항목</ContextMenuItem>
            <ContextMenuItem variant="destructive">위험한 항목</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )
    },
    {
      title: '체크박스 항목',
      description: '선택/해제가 가능한 체크박스 형태의 메뉴 항목입니다.',
      example: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">체크박스</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuCheckboxItem checked={true}>
              선택된 항목
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={false}>
              선택되지 않은 항목
            </ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
      )
    },
    {
      title: '라디오 항목',
      description: '그룹 내에서 하나만 선택 가능한 라디오 버튼 형태입니다.',
      example: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">라디오</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuRadioGroup value="option1">
              <ContextMenuRadioItem value="option1">
                옵션 1
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="option2">
                옵션 2
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      )
    },
    {
      title: '서브메뉴',
      description: '중첩된 메뉴 구조로 더 많은 옵션을 체계적으로 정리합니다.',
      example: (
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">서브메뉴</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>일반 항목</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>더보기</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>서브 항목 1</ContextMenuItem>
                <ContextMenuItem>서브 항목 2</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>
      )
    }
  ];

  const features = [
    {
      title: '우클릭 트리거',
      description: '마우스 우클릭으로 자연스럽게 컨텍스트 메뉴를 열 수 있습니다.',
      icon: '🖱️'
    },
    {
      title: '키보드 단축키',
      description: '메뉴 항목에 키보드 단축키를 표시하여 빠른 접근을 제공합니다.',
      icon: '⌨️'
    },
    {
      title: '중첩 메뉴 지원',
      description: '서브메뉴를 통해 복잡한 메뉴 구조를 체계적으로 구성할 수 있습니다.',
      icon: '📁'
    },
    {
      title: '다양한 항목 타입',
      description: '일반 항목, 체크박스, 라디오 버튼 등 다양한 메뉴 항목을 지원합니다.',
      icon: '🔘'
    },
    {
      title: '접근성 최적화',
      description: 'ARIA 속성과 키보드 네비게이션으로 모든 사용자가 이용 가능합니다.',
      icon: '♿'
    },
    {
      title: '상황별 액션',
      description: '특정 컨텍스트에 맞는 관련 액션들을 효율적으로 제공합니다.',
      icon: '🎯'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MousePointer2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Context Menu</h1>
            <p className="text-muted-foreground">
              우클릭이나 길게 누르기로 표시되는 상황에 맞는 메뉴입니다. 
              특정 요소나 영역에 대한 관련 액션들을 효율적으로 제공하여 사용자의 작업 흐름을 개선합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MousePointer2 className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">우클릭 트리거</Badge>
          <Badge variant="outline">중첩 메뉴</Badge>
          <Badge variant="outline">키보드 단축키</Badge>
          <Badge variant="outline">상황별 액션</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">변형 및 구성요소</TabsTrigger>
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
              <CardTitle>Context Menu 구성요소</CardTitle>
              <CardDescription>
                다양한 타입의 메뉴 항목들과 구조적 요소들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {variants.map((variant, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div>
                      <h4 className="font-medium">{variant.title}</h4>
                      <p className="text-sm text-muted-foreground">{variant.description}</p>
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
              <CardTitle>구조적 요소</CardTitle>
              <CardDescription>
                메뉴를 더 체계적으로 구성하는 요소들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    라벨 (Label)
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    메뉴 섹션의 제목을 표시하여 관련 항목들을 그룹화합니다.
                  </p>
                  <ContextMenu>
                    <ContextMenuTrigger asChild>
                      <Button variant="outline" size="sm">예제 보기</Button>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuLabel>편집 작업</ContextMenuLabel>
                      <ContextMenuSeparator />
                      <ContextMenuItem>복사</ContextMenuItem>
                      <ContextMenuItem>붙여넣기</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <MoreVertical className="w-4 h-4" />
                    구분선 (Separator)
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    관련된 메뉴 항목들을 시각적으로 그룹화하여 구분합니다.
                  </p>
                  <ContextMenu>
                    <ContextMenuTrigger asChild>
                      <Button variant="outline" size="sm">예제 보기</Button>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>복사</ContextMenuItem>
                      <ContextMenuItem>잘라내기</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>삭제</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Keyboard className="w-4 h-4" />
                    단축키 (Shortcut)
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    키보드 단축키를 표시하여 빠른 접근 방법을 안내합니다.
                  </p>
                  <ContextMenu>
                    <ContextMenuTrigger asChild>
                      <Button variant="outline" size="sm">예제 보기</Button>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>
                        복사
                        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem>
                        붙여넣기
                        <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    위험한 항목
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    삭제나 파괴적인 작업을 위한 시각적으로 구분된 항목입니다.
                  </p>
                  <ContextMenu>
                    <ContextMenuTrigger asChild>
                      <Button variant="outline" size="sm">예제 보기</Button>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>편집</ContextMenuItem>
                      <ContextMenuItem>복사</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem variant="destructive">삭제</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
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
                Context Menu를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 파일이나 폴더 관리</li>
                      <li>• 테이블 행 조작</li>
                      <li>• 이미지나 미디어 작업</li>
                      <li>• 텍스트 편집 영역</li>
                      <li>• 데이터 항목별 작업</li>
                      <li>• 카드나 리스트 아이템</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 모바일 기기 호환성</li>
                      <li>• 메뉴 항목 개수 제한</li>
                      <li>• 중요도에 따른 순서</li>
                      <li>• 키보드 단축키 제공</li>
                      <li>• 일관된 레이블 사용</li>
                      <li>• 적절한 그룹화</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 주요 네비게이션 대체</li>
                      <li>• 필수 기능의 유일한 접근 방법</li>
                      <li>• 너무 많은 메뉴 항목</li>
                      <li>• 모호한 액션 레이블</li>
                      <li>• 중첩이 깊은 서브메뉴</li>
                      <li>• 빈번한 작업의 숨김</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">메뉴 구성 원칙</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 구성</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-1 font-mono">
                        <div>열기</div>
                        <div>편집</div>
                        <div className="border-t pt-1">복사</div>
                        <div>잘라내기</div>
                        <div>붙여넣기</div>
                        <div className="border-t pt-1">즐겨찾기 추가</div>
                        <div className="border-t pt-1 text-red-600">삭제</div>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 자주 사용하는 항목을 위에 배치</li>
                      <li>• 관련 항목들을 그룹화</li>
                      <li>• 위험한 작업은 분리하여 하단에</li>
                      <li>• 명확하고 일관된 레이블 사용</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 피해야 할 구성</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-1 font-mono">
                        <div className="text-red-600">삭제</div>
                        <div>새 폴더 만들기</div>
                        <div>복사</div>
                        <div>고급 설정 &gt; 권한 관리 &gt; 세부 권한</div>
                        <div>작업1</div>
                        <div>다른 작업</div>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 위험한 작업이 상단에 위치</li>
                      <li>• 관련성 없는 항목들의 혼재</li>
                      <li>• 너무 깊은 중첩 구조</li>
                      <li>• 모호하거나 일관성 없는 레이블</li>
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
                Context Menu의 접근성 기능과 고려사항입니다.
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
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Menu 키</kbd>
                    <span>컨텍스트 메뉴 열기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift + F10</kbd>
                    <span>컨텍스트 메뉴 열기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">↑↓</kbd>
                    <span>메뉴 항목 간 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">→</kbd>
                    <span>서브메뉴 열기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">←</kbd>
                    <span>서브메뉴 닫기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                    <span>메뉴 항목 실행</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                    <span>메뉴 닫기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">문자 키</kbd>
                    <span>첫 글자로 항목 찾기</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>role="menu":</strong> 메뉴임을 스크린 리더에 전달</li>
                  <li>• <strong>aria-expanded:</strong> 서브메뉴 확장 상태 표시</li>
                  <li>• <strong>aria-haspopup:</strong> 서브메뉴 존재 여부 표시</li>
                  <li>• <strong>aria-disabled:</strong> 비활성화된 항목 표시</li>
                  <li>• <strong>체크상태 안내:</strong> 체크박스와 라디오 항목의 선택 상태</li>
                  <li>• <strong>단축키 안내:</strong> 키보드 단축키 정보 제공</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">모바일 접근성</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 길게 누르기(long press)로 컨텍스트 메뉴 활성화</li>
                  <li>• 터치 영역을 충분히 크게 설정 (최소 44px)</li>
                  <li>• 스와이프 제스처와의 충돌 방지</li>
                  <li>• 화면 크기에 맞는 메뉴 크기 조정</li>
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
                Context Menu의 주요 컴포넌트와 사용법입니다.
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
                        <td className="p-2 font-mono">ContextMenu</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuTrigger</td>
                        <td className="p-2">메뉴를 트리거하는 요소</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuContent</td>
                        <td className="p-2">메뉴 내용 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuItem</td>
                        <td className="p-2">일반 메뉴 항목</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuSeparator</td>
                        <td className="p-2">메뉴 항목 구분선</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuLabel</td>
                        <td className="p-2">메뉴 그룹 제목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuCheckboxItem</td>
                        <td className="p-2">체크박스 메뉴 항목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuRadioItem</td>
                        <td className="p-2">라디오 메뉴 항목</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuSub</td>
                        <td className="p-2">서브메뉴 컨테이너</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">ContextMenuShortcut</td>
                        <td className="p-2">키보드 단축키 표시</td>
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
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
} from "./components/ui/context-menu";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`function MyContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="w-[300px] h-[200px] border border-dashed rounded-lg flex items-center justify-center">
          우클릭 영역
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          복사
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          붙여넣기
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>새로고침</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="체크박스와 라디오 항목"
                code={`function SelectableContextMenu() {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [theme, setTheme] = useState('light');

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div>설정 메뉴</div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>표시 설정</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem 
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          북마크 표시
        </ContextMenuCheckboxItem>
        
        <ContextMenuSeparator />
        <ContextMenuLabel>테마</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
          <ContextMenuRadioItem value="light">라이트</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">다크</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">시스템</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}`}
                codeKey="selectable-usage"
              />

              <CodeBlock
                title="서브메뉴 사용법"
                code={`function NestedContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div>고급 메뉴</div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>편집</ContextMenuItem>
        <ContextMenuItem>복사</ContextMenuItem>
        
        <ContextMenuSub>
          <ContextMenuSubTrigger>공유하기</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>이메일로 공유</ContextMenuItem>
            <ContextMenuItem>링크 복사</ContextMenuItem>
            <ContextMenuItem>소셜 미디어</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        
        <ContextMenuSub>
          <ContextMenuSubTrigger>이동하기</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>문서 폴더</ContextMenuItem>
            <ContextMenuItem>이미지 폴더</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>휴지통</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        
        <ContextMenuSeparator />
        <ContextMenuItem>속성</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`}
                codeKey="nested-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MousePointer2 className="w-5 h-5" />
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