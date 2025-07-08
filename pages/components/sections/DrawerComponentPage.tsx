import * as React from "react";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { 
  PanelBottomOpen,
  Settings,
  User,
  Bell,
  Search,
  Filter,
  Share,
  Download,
  Edit,
  Plus,
  Check,
  X,
  Menu,
  ShoppingCart,
  Star,
  Heart,
  Bookmark,
  MessageSquare,
  Image,
  Camera,
  Upload,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  Smartphone,
  Tablet,
  Monitor,
  Info,
  HelpCircle,
  Copy,
  Clipboard
} from 'lucide-react';
import { useState } from 'react';

export function DrawerComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isShareDrawerOpen, setIsShareDrawerOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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
        <Clipboard className="h-3 w-3" />
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
      title: '기본 Drawer',
      description: '하단에서 올라오는 기본적인 Drawer입니다.',
      component: (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">기본 Drawer 열기</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>기본 Drawer</DrawerTitle>
              <DrawerDescription>
                이것은 하단에서 올라오는 기본적인 Drawer입니다.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <p className="text-sm text-muted-foreground">
                Drawer는 모바일 환경에서 특히 유용한 UI 패턴입니다. 사용자가 쉽게 액세스할 수 있는 추가 정보나 기능을 제공합니다.
              </p>
            </div>
            <DrawerFooter>
              <Button>확인</Button>
              <DrawerClose asChild>
                <Button variant="outline">취소</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer"
import { Button } from "./components/ui/button"

export function BasicDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">기본 Drawer 열기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>기본 Drawer</DrawerTitle>
          <DrawerDescription>
            이것은 하단에서 올라오는 기본적인 Drawer입니다.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <p className="text-sm text-muted-foreground">
            Drawer는 모바일 환경에서 특히 유용한 UI 패턴입니다.
          </p>
        </div>
        <DrawerFooter>
          <Button>확인</Button>
          <DrawerClose asChild>
            <Button variant="outline">취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`
    },
    {
      title: '폼이 있는 Drawer',
      description: '사용자 입력을 받는 폼 요소들이 포함된 Drawer입니다.',
      component: (
        <Drawer open={isProfileDrawerOpen} onOpenChange={setIsProfileDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              프로필 편집
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>프로필 편집</DrawerTitle>
              <DrawerDescription>
                프로필 정보를 수정하세요.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="이름을 입력하세요" defaultValue="홍길동" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="이메일을 입력하세요" defaultValue="hong@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">자기소개</Label>
                <Textarea id="bio" placeholder="자기소개를 작성하세요" defaultValue="안녕하세요, 저는 개발자입니다." />
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => setIsProfileDrawerOpen(false)}>저장</Button>
              <DrawerClose asChild>
                <Button variant="outline">취소</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Textarea } from "./components/ui/textarea"
import { User } from "lucide-react"

export function FormDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <User className="h-4 w-4" />
          프로필 편집
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>프로필 편집</DrawerTitle>
          <DrawerDescription>
            프로필 정보를 수정하세요.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="이메일을 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">자기소개</Label>
            <Textarea id="bio" placeholder="자기소개를 작성하세요" />
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={() => setIsOpen(false)}>저장</Button>
          <DrawerClose asChild>
            <Button variant="outline">취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`
    },
    {
      title: '필터 Drawer',
      description: '선택 가능한 옵션들이 있는 필터 Drawer입니다.',
      component: (
        <Drawer open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              필터
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>필터 옵션</DrawerTitle>
              <DrawerDescription>
                원하는 필터를 선택하세요.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium">카테고리</h4>
                <div className="space-y-2">
                  {['전체', '개발', '디자인', '마케팅', '기획'].map((category) => (
                    <label key={category} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        className="rounded border-border"
                        checked={selectedFilters.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFilters([...selectedFilters, category]);
                          } else {
                            setSelectedFilters(selectedFilters.filter(f => f !== category));
                          }
                        }}
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">정렬</h4>
                <div className="space-y-2">
                  {['최신순', '인기순', '가격 낮은순', '가격 높은순'].map((sort) => (
                    <label key={sort} className="flex items-center space-x-2">
                      <input type="radio" name="sort" className="border-border" />
                      <span className="text-sm">{sort}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => setIsFilterDrawerOpen(false)}>적용</Button>
              <DrawerClose asChild>
                <Button variant="outline">취소</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer"
import { Button } from "./components/ui/button"
import { Filter } from "lucide-react"

export function FilterDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          필터
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>필터 옵션</DrawerTitle>
          <DrawerDescription>
            원하는 필터를 선택하세요.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <h4 className="font-medium">카테고리</h4>
            <div className="space-y-2">
              {['전체', '개발', '디자인', '마케팅'].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={() => setIsOpen(false)}>적용</Button>
          <DrawerClose asChild>
            <Button variant="outline">취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`
    },
    {
      title: '공유 Drawer',
      description: '다양한 공유 옵션을 제공하는 Drawer입니다.',
      component: (
        <Drawer open={isShareDrawerOpen} onOpenChange={setIsShareDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Share className="h-4 w-4" />
              공유하기
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>공유하기</DrawerTitle>
              <DrawerDescription>
                다양한 방법으로 공유할 수 있습니다.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-4 gap-4 text-center">
                <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <Share className="h-6 w-6" />
                  </div>
                  <span className="text-xs">링크 복사</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <span className="text-xs">메시지</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <MonitorSpeaker className="h-6 w-6" />
                  </div>
                  <span className="text-xs">이메일</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="text-xs">다운로드</span>
                </button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="share-url">링크</Label>
                <div className="flex gap-2">
                  <Input 
                    id="share-url" 
                    value="https://example.com/shared-content" 
                    readOnly 
                    className="flex-1"
                  />
                  <Button size="sm">복사</Button>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">닫기</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Share, MessageSquare, MonitorSpeaker, Download } from "lucide-react"

export function ShareDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Share className="h-4 w-4" />
          공유하기
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>공유하기</DrawerTitle>
          <DrawerDescription>
            다양한 방법으로 공유할 수 있습니다.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-4 gap-4 text-center">
            <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Share className="h-6 w-6" />
              </div>
              <span className="text-xs">링크 복사</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <MessageSquare className="h-6 w-6" />
              </div>
              <span className="text-xs">메시지</span>
            </button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="share-url">링크</Label>
            <div className="flex gap-2">
              <Input 
                id="share-url" 
                value="https://example.com/shared-content" 
                readOnly 
                className="flex-1"
              />
              <Button size="sm">복사</Button>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">닫기</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`
    },
    {
      title: '장바구니 Drawer',
      description: 'E-commerce에서 사용할 수 있는 장바구니 Drawer입니다.',
      component: (
        <Drawer open={isCartDrawerOpen} onOpenChange={setIsCartDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              장바구니 (3)
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>장바구니</DrawerTitle>
              <DrawerDescription>
                선택한 상품들을 확인하세요.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {[
                { name: 'MacBook Pro 16"', price: '3,200,000원', image: '💻' },
                { name: 'AirPods Pro', price: '350,000원', image: '🎧' },
                { name: 'Magic Mouse', price: '100,000원', image: '🖱️' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="text-2xl">{item.image}</div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">-</Button>
                    <span className="w-8 text-center">1</span>
                    <Button variant="outline" size="sm">+</Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">총 금액</span>
                <span className="text-lg font-semibold">3,650,000원</span>
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={() => setIsCartDrawerOpen(false)}>주문하기</Button>
              <DrawerClose asChild>
                <Button variant="outline">계속 쇼핑</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      code: `import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer"
import { Button } from "./components/ui/button"
import { ShoppingCart, X } from "lucide-react"

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const cartItems = [
    { name: 'MacBook Pro 16"', price: '3,200,000원', image: '💻' },
    { name: 'AirPods Pro', price: '350,000원', image: '🎧' },
    { name: 'Magic Mouse', price: '100,000원', image: '🖱️' }
  ]

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ShoppingCart className="h-4 w-4" />
          장바구니 (3)
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>장바구니</DrawerTitle>
          <DrawerDescription>
            선택한 상품들을 확인하세요.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="text-2xl">{item.image}</div>
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.price}</p>
              </div>
              <Button variant="ghost" size="sm">
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <Button onClick={() => setIsOpen(false)}>주문하기</Button>
          <DrawerClose asChild>
            <Button variant="outline">계속 쇼핑</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`
    }
  ];

  const variants = [
    {
      title: '기본 Drawer',
      description: '하단에서 올라오는 표준 Drawer입니다.',
      example: (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">기본</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>기본 Drawer</DrawerTitle>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-sm">기본 내용입니다.</p>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>닫기</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
    },
    {
      title: '스크롤 가능한 Drawer',
      description: '내용이 많을 때 스크롤이 가능한 Drawer입니다.',
      example: (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">스크롤</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>긴 내용 Drawer</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 max-h-60 overflow-y-auto">
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i} className="text-sm mb-2">
                  항목 {i + 1}: 이것은 스크롤 가능한 내용입니다.
                </p>
              ))}
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>닫기</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
    }
  ];

  const features = [
    {
      title: '모바일 최적화',
      description: '터치 제스처와 모바일 화면에 최적화된 인터페이스를 제공합니다.',
      icon: '📱'
    },
    {
      title: '부드러운 애니메이션',
      description: '자연스러운 슬라이드 애니메이션으로 매끄러운 사용자 경험을 제공합니다.',
      icon: '✨'
    },
    {
      title: '드래그 제스처',
      description: '드래그하여 열고 닫을 수 있는 직관적인 제스처를 지원합니다.',
      icon: '👆'
    },
    {
      title: '유연한 크기',
      description: '내용에 따라 자동으로 높이가 조정되며 최대 높이도 설정할 수 있습니다.',
      icon: '📏'
    },
    {
      title: '백드롭 오버레이',
      description: '배경을 어둡게 하여 Drawer에 집중할 수 있게 합니다.',
      icon: '🎭'
    },
    {
      title: '접근성 지원',
      description: 'ARIA 속성과 키보드 네비게이션을 완전히 지원합니다.',
      icon: '♿'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <PanelBottomOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Drawer</h1>
            <p className="text-muted-foreground">
              화면 하단에서 올라오는 패널 컴포넌트입니다. 
              모바일에서 추가 정보나 액션을 제공할 때 사용하며, 직관적인 드래그 제스처를 지원합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <PanelBottomOpen className="w-3 h-3" />
            5가지 예제
          </Badge>
          <Badge variant="outline">모바일 최적화</Badge>
          <Badge variant="outline">드래그 제스처</Badge>
          <Badge variant="outline">부드러운 애니메이션</Badge>
          <Badge variant="outline">접근성 지원</Badge>
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
              <CardTitle>Drawer 구성요소</CardTitle>
              <CardDescription>
                다양한 유형의 Drawer와 구조적 요소들입니다.
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
                Drawer를 구성하는 주요 요소들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DrawerHeader
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Drawer의 상단 영역으로 제목과 설명을 포함합니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    DrawerTitle, DrawerDescription 포함
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DrawerContent
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Drawer의 메인 컨테이너로 모든 내용을 포함합니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    자동 오버레이와 스크롤 포함
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DrawerFooter
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Drawer의 하단 영역으로 액션 버튼들을 포함합니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    DrawerClose와 함께 사용
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <h5 className="font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    DrawerTrigger
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Drawer를 열기 위한 트리거 요소입니다.
                  </p>
                  <div className="text-xs font-mono bg-muted p-2 rounded">
                    asChild prop으로 버튼 래핑
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
                Drawer를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 모바일 환경에서의 폼 입력</li>
                      <li>• 필터 및 설정 옵션</li>
                      <li>• 장바구니 및 주문 요약</li>
                      <li>• 공유 옵션 제공</li>
                      <li>• 추가 정보 표시</li>
                      <li>• 빠른 액션 메뉴</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 화면 크기에 따른 높이 조정</li>
                      <li>• 내용의 양과 스크롤 필요성</li>
                      <li>• 터치 제스처 편의성</li>
                      <li>• 백그라운드 상호작용 차단</li>
                      <li>• 키보드 네비게이션 지원</li>
                      <li>• 로딩 상태 표시</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 복잡한 다단계 워크플로우</li>
                      <li>• 주요 네비게이션 대체</li>
                      <li>• 너무 많은 정보 한 번에 표시</li>
                      <li>• 중첩된 Drawer 사용</li>
                      <li>• 데스크톱에서의 남용</li>
                      <li>• 중요한 경고나 오류 표시</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">디자인 원칙</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 디자인</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">명확한 구조</div>
                        <div>• 헤더: 제목과 설명</div>
                        <div>• 본문: 핵심 내용</div>
                        <div>• 푸터: 주요 액션</div>
                        <div className="font-medium mt-3">적절한 높이</div>
                        <div>• 화면의 60-80% 이하</div>
                        <div>• 내용에 맞는 자동 조정</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 피해야 할 디자인</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">혼란스러운 구조</div>
                        <div>• 제목 없는 Drawer</div>
                        <div>• 액션 버튼의 부재</div>
                        <div>• 불명확한 닫기 방법</div>
                        <div className="font-medium mt-3">부적절한 크기</div>
                        <div>• 화면 전체를 차지</div>
                        <div>• 너무 작은 터치 영역</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                Drawer의 접근성 기능과 고려사항입니다.
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
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Space/Enter</kbd>
                    <span>Drawer 열기 (트리거에서)</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                    <span>Drawer 닫기</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                    <span>내부 요소 간 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift + Tab</kbd>
                    <span>역순으로 요소 간 이동</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>role="dialog":</strong> 다이얼로그로 인식되어 모달 동작 수행</li>
                  <li>• <strong>aria-labelledby:</strong> 제목과 연결하여 Drawer 목적 설명</li>
                  <li>• <strong>aria-describedby:</strong> 설명 텍스트와 연결하여 추가 정보 제공</li>
                  <li>• <strong>포커스 트랩:</strong> Drawer 내부에서만 포커스 이동</li>
                  <li>• <strong>자동 포커스:</strong> 열릴 때 첫 번째 포커스 가능한 요소로 이동</li>
                  <li>• <strong>포커스 복원:</strong> 닫힐 때 원래 트리거 요소로 포커스 복원</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  모바일 접근성
                </h4>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">터치 제스처</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 드래그하여 열고 닫기</li>
                      <li>• 백드롭 터치로 닫기</li>
                      <li>• 최소 44px 터치 영역 보장</li>
                    </ul>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">화면 리더 지원</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• VoiceOver, TalkBack 호환</li>
                      <li>• 제스처 네비게이션 지원</li>
                      <li>• 콘텐츠 순서 논리적 구성</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">반응형 고려사항</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 모바일: 하단에서 슬라이드업, 드래그 제스처 활성화</li>
                  <li>• 태블릿: 화면 크기에 따라 최대 높이 조정</li>
                  <li>• 데스크톱: Dialog나 Modal 컴포넌트 고려</li>
                  <li>• 가로/세로 모드에서 모두 적절한 크기 유지</li>
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
                Drawer의 주요 컴포넌트와 사용법입니다.
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
                        <td className="p-2 font-mono">Drawer</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DrawerTrigger</td>
                        <td className="p-2">Drawer를 여는 트리거</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DrawerContent</td>
                        <td className="p-2">Drawer의 메인 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DrawerHeader</td>
                        <td className="p-2">상단 헤더 영역</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DrawerTitle</td>
                        <td className="p-2">Drawer 제목</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DrawerDescription</td>
                        <td className="p-2">Drawer 설명</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DrawerFooter</td>
                        <td className="p-2">하단 액션 영역</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DrawerClose</td>
                        <td className="p-2">Drawer를 닫는 트리거</td>
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`function MyDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer 열기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>제목</DrawerTitle>
          <DrawerDescription>
            설명 텍스트가 들어갑니다.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          {/* 내용 */}
        </div>
        <DrawerFooter>
          <Button>확인</Button>
          <DrawerClose asChild>
            <Button variant="outline">취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="제어된 상태 사용법"
                code={`function ControlledDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">제어된 Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>제어된 Drawer</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <p>상태: {open ? '열림' : '닫힘'}</p>
          <Button onClick={() => setOpen(false)}>
            프로그래밍 방식으로 닫기
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">닫기</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`}
                codeKey="controlled-usage"
              />

              <CodeBlock
                title="스크롤 가능한 내용"
                code={`function ScrollableDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">스크롤 Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>긴 내용</DrawerTitle>
          <DrawerDescription>
            스크롤 가능한 내용이 포함된 Drawer입니다.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="p-2 border-b">
              항목 {i + 1}
            </div>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>닫기</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`}
                codeKey="scrollable-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PanelBottomOpen className="w-5 h-5" />
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