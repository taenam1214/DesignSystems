import React, { useState } from 'react';
import { 
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '../ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { 
  User,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Crown,
  Shield,
  Star,
  Heart,
  Settings,
  Camera,
  Edit,
  Plus,
  UserPlus,
  Users,
  MessageSquare,
  Video,
  Phone,
  Mail,
  Calendar,
  Clock,
  Globe,
  MapPin,
  Verified,
  Award,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../imgfback/ImageWithFallback';

export function AvatarComponentPage() {
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
            <User className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Avatar</h1>
            <p className="text-muted-foreground">
              사용자나 엔티티를 시각적으로 표현하는 원형 이미지 컴포넌트입니다. 프로필 사진, 이니셜, 아이콘 등을 표시할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            다양한 크기
          </Badge>
          <Badge variant="outline">프로필 표시</Badge>
          <Badge variant="outline">이미지 지원</Badge>
          <Badge variant="outline">폴백 처리</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="patterns">패턴 및 크기</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>기본 아바타</CardTitle>
              <CardDescription>
                가장 기본적인 아바타 컴포넌트입니다. 이미지와 폴백을 함께 사용합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="사용자 프로필" />
                  <AvatarFallback>김사용</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a8c5b6?w=400&h=400&fit=crop&crop=face" alt="사용자 프로필" />
                  <AvatarFallback>이유저</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="사용자 프로필" />
                  <AvatarFallback>박개발</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="" alt="사용자 프로필" />
                  <AvatarFallback>최디자</AvatarFallback>
                </Avatar>
              </div>
              <CodeBlock
                code={`import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar"

<Avatar>
  <AvatarImage src="https://example.com/avatar.jpg" alt="사용자 프로필" />
  <AvatarFallback>김사용</AvatarFallback>
</Avatar>

{/* 이미지가 로드되지 않을 경우 폴백 표시 */}
<Avatar>
  <AvatarImage src="" alt="사용자 프로필" />
  <AvatarFallback>최디자</AvatarFallback>
</Avatar>`}
                codeKey="basic-avatar"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용자 프로필 카드</CardTitle>
              <CardDescription>
                실제 애플리케이션에서 사용되는 사용자 프로필 카드 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="김개발자" />
                        <AvatarFallback>김개발</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">김개발자</h4>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Verified className="w-3 h-3" />
                            인증
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">프론트엔드 개발자</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            서울, 한국
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            1.2k 팔로워
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a8c5b6?w=400&h=400&fit=crop&crop=face" alt="이디자이너" />
                          <AvatarFallback>이디자</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-background rounded-full"></div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">이디자이너</h4>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            Pro
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">UX/UI 디자이너</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>현재 온라인</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>그룹 아바타</CardTitle>
              <CardDescription>
                여러 사용자를 표시하는 그룹 아바타와 오버랩 스타일입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-3">팀 멤버 목록</h5>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="팀 멤버" />
                      <AvatarFallback>김</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a8c5b6?w=400&h=400&fit=crop&crop=face" alt="팀 멤버" />
                      <AvatarFallback>이</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="팀 멤버" />
                      <AvatarFallback>박</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face" alt="팀 멤버" />
                      <AvatarFallback>최</AvatarFallback>
                    </Avatar>
                    <div className="text-sm text-muted-foreground">+3명 더</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-3">스택형 아바타</h5>
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="팀 멤버" />
                      <AvatarFallback>김</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a8c5b6?w=400&h=400&fit=crop&crop=face" alt="팀 멤버" />
                      <AvatarFallback>이</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="팀 멤버" />
                      <AvatarFallback>박</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background bg-muted">
                      <AvatarFallback>+5</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-3">아이콘 아바타</h5>
                  <div className="flex items-center gap-3">
                    <Avatar className="bg-blue-100">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        <Settings className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="bg-green-100">
                      <AvatarFallback className="bg-green-100 text-green-600">
                        <Shield className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="bg-purple-100">
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        <Crown className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="bg-yellow-100">
                      <AvatarFallback className="bg-yellow-100 text-yellow-600">
                        <Star className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>다양한 크기</CardTitle>
              <CardDescription>
                용도에 따라 선택할 수 있는 다양한 아바타 크기입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="space-y-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="사용자" />
                      <AvatarFallback className="text-xs">김</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-center text-muted-foreground">XS (24px)</p>
                  </div>
                  <div className="space-y-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="사용자" />
                      <AvatarFallback className="text-xs">김</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-center text-muted-foreground">SM (32px)</p>
                  </div>
                  <div className="space-y-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="사용자" />
                      <AvatarFallback>김</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-center text-muted-foreground">MD (40px)</p>
                  </div>
                  <div className="space-y-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="사용자" />
                      <AvatarFallback>김</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-center text-muted-foreground">LG (48px)</p>
                  </div>
                  <div className="space-y-2">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="사용자" />
                      <AvatarFallback>김</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-center text-muted-foreground">XL (64px)</p>
                  </div>
                  <div className="space-y-2">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="사용자" />
                      <AvatarFallback className="text-lg">김</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-center text-muted-foreground">2XL (80px)</p>
                  </div>
                </div>
              </div>
              <CodeBlock
                code={`{/* 다양한 크기의 아바타 */}
<Avatar className="w-6 h-6">        {/* XS - 24px */}
<Avatar className="w-8 h-8">        {/* SM - 32px */}
<Avatar className="w-10 h-10">      {/* MD - 40px (기본) */}
<Avatar className="w-12 h-12">      {/* LG - 48px */}
<Avatar className="w-16 h-16">      {/* XL - 64px */}
<Avatar className="w-20 h-20">      {/* 2XL - 80px */}`}
                codeKey="avatar-sizes"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상태 표시자</CardTitle>
              <CardDescription>
                사용자의 온라인 상태나 특별한 상태를 표시하는 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-3">온라인 상태</h5>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="온라인 사용자" />
                        <AvatarFallback>온</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full"></div>
                    </div>
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a8c5b6?w=400&h=400&fit=crop&crop=face" alt="자리비움 사용자" />
                        <AvatarFallback>자</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 border-2 border-background rounded-full"></div>
                    </div>
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="방해금지 사용자" />
                        <AvatarFallback>방</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 border-2 border-background rounded-full"></div>
                    </div>
                    <div className="relative">
                      <Avatar className="opacity-60">
                        <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face" alt="오프라인 사용자" />
                        <AvatarFallback>오</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-muted border-2 border-background rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-3">배지와 함께</h5>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="관리자" />
                        <AvatarFallback>관</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 border-2 border-background rounded-full flex items-center justify-center">
                        <Crown className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a8c5b6?w=400&h=400&fit=crop&crop=face" alt="인증된 사용자" />
                        <AvatarFallback>인</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 border-2 border-background rounded-full flex items-center justify-center">
                        <Verified className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="프리미엄 사용자" />
                        <AvatarFallback>프</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 border-2 border-background rounded-full flex items-center justify-center">
                        <Star className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>채팅 및 메시징</CardTitle>
              <CardDescription>
                채팅 애플리케이션에서 사용되는 아바타 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="김개발자" />
                    <AvatarFallback>김</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">김개발자</span>
                      <span className="text-xs text-muted-foreground">오전 10:30</span>
                    </div>
                    <div className="bg-muted p-3 rounded-lg rounded-tl-sm max-w-xs">
                      <p className="text-sm">안녕하세요! 새로운 디자인 시스템 어떠신가요?</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 space-y-1 text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-xs text-muted-foreground">오전 10:32</span>
                      <span className="text-sm font-medium">나</span>
                    </div>
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-sm max-w-xs ml-auto">
                      <p className="text-sm">정말 깔끔하고 사용하기 좋네요!</p>
                    </div>
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a8c5b6?w=400&h=400&fit=crop&crop=face" alt="나" />
                    <AvatarFallback>나</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="이디자이너" />
                    <AvatarFallback>이</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">이디자이너</span>
                      <Badge variant="secondary" className="text-xs">디자이너</Badge>
                      <span className="text-xs text-muted-foreground">오전 10:35</span>
                    </div>
                    <div className="bg-muted p-3 rounded-lg rounded-tl-sm max-w-xs">
                      <p className="text-sm">감사합니다! 많은 시간과 노력을 들여 만들었어요 😊</p>
                    </div>
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
                효과적인 Avatar 사용을 위한 모범 사례
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
                    <li>• 적절한 크기 선택 (컨텍스트에 맞는 크기)</li>
                    <li>• 의미 있는 폴백 텍스트 제공</li>
                    <li>• 접근성을 위한 alt 텍스트 포함</li>
                    <li>• 일관된 스타일과 크기 유지</li>
                    <li>• 고해상도 이미지 사용</li>
                    <li>• 로딩 상태 고려</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 저해상도 또는 흐린 이미지</li>
                    <li>• 일관성 없는 크기나 스타일</li>
                    <li>• 의미 없는 폴백 텍스트</li>
                    <li>• 접근성 속성 누락</li>
                    <li>• 과도한 장식이나 효과</li>
                    <li>• 컨텍스트에 맞지 않는 크기</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Avatar를 이해할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">이미지 설명</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AvatarImage에 적절한 alt 텍스트 제공</li>
                    <li>• 장식적 아바타의 경우 alt="" 사용</li>
                    <li>• 사용자 식별이 중요한 경우 구체적인 설명</li>
                    <li>• 폴백 텍스트도 의미 있게 작성</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 고려사항</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 대비비 유지 (특히 폴백 텍스트)</li>
                    <li>• 색상에만 의존하지 않는 정보 전달</li>
                    <li>• 상태 표시자에는 텍스트 레이블도 함께 제공</li>
                    <li>• 확대 시에도 선명함 유지</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Avatar 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 사용자 프로필 표시</li>
                    <li>• 채팅 및 메시징</li>
                    <li>• 팀 멤버 목록</li>
                    <li>• 댓글 시스템</li>
                    <li>• 사용자 식별이 필요한 곳</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Badge:</strong> 상태나 라벨 표시</li>
                    <li>• <strong>Button:</strong> 클릭 가능한 액션</li>
                    <li>• <strong>Card:</strong> 더 많은 정보 표시</li>
                    <li>• <strong>Icon:</strong> 장식적 목적</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 단순 장식 목적</li>
                    <li>• 로고나 브랜드 표시</li>
                    <li>• 액션 버튼 대체</li>
                    <li>• 중요하지 않은 이미지</li>
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
                Avatar 컴포넌트의 속성과 설정 옵션
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
                        <td className="p-2 font-mono">Avatar</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AvatarImage</td>
                        <td className="p-2">실제 이미지</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">AvatarFallback</td>
                        <td className="p-2">이미지 로드 실패 시 표시</td>
                        <td className="p-2">권장</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Avatar 속성</h4>
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
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">AvatarImage 속성</h4>
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
                        <td className="p-2 font-mono">src</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">이미지 URL</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">alt</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">접근성을 위한 대체 텍스트</td>
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
                code={`import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.jpg" alt="사용자 프로필" />
      <AvatarFallback>김사용</AvatarFallback>
    </Avatar>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="다양한 크기"
                code={`export function Example() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-8 h-8">
        <AvatarImage src="/avatar.jpg" alt="작은 아바타" />
        <AvatarFallback>김</AvatarFallback>
      </Avatar>
      
      <Avatar className="w-12 h-12">
        <AvatarImage src="/avatar.jpg" alt="중간 아바타" />
        <AvatarFallback>김사</AvatarFallback>
      </Avatar>
      
      <Avatar className="w-16 h-16">
        <AvatarImage src="/avatar.jpg" alt="큰 아바타" />
        <AvatarFallback>김사용</AvatarFallback>
      </Avatar>
    </div>
  );
}`}
                codeKey="size-variations"
              />

              <CodeBlock
                title="상태 표시자"
                code={`export function Example() {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="/avatar.jpg" alt="온라인 사용자" />
        <AvatarFallback>김</AvatarFallback>
      </Avatar>
      {/* 온라인 상태 표시자 */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
    </div>
  );
}`}
                codeKey="status-indicator"
              />

              <CodeBlock
                title="그룹 아바타"
                code={`export function Example() {
  return (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-background">
        <AvatarImage src="/avatar1.jpg" alt="사용자 1" />
        <AvatarFallback>김</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="/avatar2.jpg" alt="사용자 2" />
        <AvatarFallback>이</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="/avatar3.jpg" alt="사용자 3" />
        <AvatarFallback>박</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background bg-muted">
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  );
}`}
                codeKey="group-avatars"
              />

              <CodeBlock
                title="아이콘 아바타"
                code={`import { Settings } from "lucide-react";

export function Example() {
  return (
    <Avatar className="bg-blue-100">
      <AvatarFallback className="bg-blue-100 text-blue-600">
        <Settings className="w-5 h-5" />
      </AvatarFallback>
    </Avatar>
  );
}`}
                codeKey="icon-avatar"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}