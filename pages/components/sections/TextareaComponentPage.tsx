import React, { useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { 
  FileText,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  Settings,
  MessageSquare,
  PenTool,
  AlignLeft,
  Hash,
  Edit3,
  Mic,
  Save,
  Send,
  Download,
  Upload,
  Search,
  Filter,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  MapPin,
  Star,
  Heart,
  BookOpen,
  Lightbulb,
  Target,
  Zap,
  TrendingUp
} from 'lucide-react';

export function TextareaComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  // State for various textarea examples
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [comment, setComment] = useState('안녕하세요! 이 제품에 대한 후기를 남겨주세요.');
  const [notes, setNotes] = useState('');
  const [review, setReview] = useState('');
  const [bio, setBio] = useState('');
  const [code, setCode] = useState(`function greet(name) {
  return \`Hello, \${name}!\`;
}`);
  const [requirements, setRequirements] = useState('');
  const [errorText, setErrorText] = useState('');

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
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Textarea</h1>
            <p className="text-muted-foreground">
              여러 줄의 텍스트를 입력받을 수 있는 폼 컨트롤입니다. 댓글, 설명, 피드백 등 긴 텍스트 입력에 사용합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            텍스트 입력
          </Badge>
          <Badge variant="outline">여러 줄</Badge>
          <Badge variant="outline">크기 조절</Badge>
          <Badge variant="outline">자동 확장</Badge>
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
          {/* Basic Textareas */}
          <Card>
            <CardHeader>
              <CardTitle>기본 텍스트 영역</CardTitle>
              <CardDescription>
                다양한 설정과 스타일의 기본 텍스트 영역 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">기본 형태</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="basic-textarea">기본 텍스트 영역</Label>
                      <Textarea 
                        id="basic-textarea"
                        placeholder="여기에 텍스트를 입력하세요..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="feedback-textarea">피드백</Label>
                      <Textarea 
                        id="feedback-textarea"
                        placeholder="제품에 대한 피드백을 작성해주세요."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="min-h-24"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message-textarea">메시지</Label>
                      <Textarea 
                        id="message-textarea"
                        placeholder="메시지를 입력하세요..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-32"
                      />
                      <p className="text-xs text-muted-foreground">
                        {message.length}/500자
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">상태별 텍스트 영역</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="prefilled-textarea">미리 채워진 텍스트</Label>
                      <Textarea 
                        id="prefilled-textarea"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="min-h-24"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="disabled-textarea">비활성화</Label>
                      <Textarea 
                        id="disabled-textarea"
                        placeholder="비활성화된 텍스트 영역"
                        disabled
                        value="이 텍스트 영역은 비활성화되어 있습니다."
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="readonly-textarea">읽기 전용</Label>
                      <Textarea 
                        id="readonly-textarea"
                        readOnly
                        value="이 텍스트는 읽기 전용입니다. 수정할 수 없습니다."
                        className="min-h-20"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="error-textarea" className="text-destructive">
                        오류 상태
                      </Label>
                      <Textarea 
                        id="error-textarea"
                        placeholder="텍스트를 입력하세요..."
                        value={errorText}
                        onChange={(e) => setErrorText(e.target.value)}
                        aria-invalid="true"
                        className="min-h-20"
                      />
                      <p className="text-sm text-destructive">
                        이 필드는 필수입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// 기본 텍스트 영역
<Textarea placeholder="여기에 텍스트를 입력하세요..." />

// 제어된 텍스트 영역
const [message, setMessage] = useState('');

<Textarea 
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="메시지를 입력하세요..."
/>

// 높이 조절
<Textarea 
  placeholder="큰 텍스트 영역"
  className="min-h-32"
/>

// 문자 수 제한
<div className="space-y-2">
  <Textarea 
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="메시지 (최대 500자)"
  />
  <p className="text-xs text-muted-foreground">
    {message.length}/500자
  </p>
</div>

// 오류 상태
<Textarea 
  placeholder="필수 입력 필드"
  aria-invalid="true"
/>

// 비활성화
<Textarea 
  placeholder="비활성화된 텍스트 영역"
  disabled
/>

// 읽기 전용
<Textarea 
  value="읽기 전용 텍스트"
  readOnly
/>`}
                codeKey="basic-textareas"
              />
            </CardContent>
          </Card>

          {/* Interactive Examples */}
          <Card>
            <CardHeader>
              <CardTitle>실용적인 예제</CardTitle>
              <CardDescription>
                실제 사용 환경에서 활용되는 텍스트 영역 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">폼 요소들과 함께</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="profile-bio">
                          <Users className="w-4 h-4 inline mr-2" />
                          자기소개
                        </Label>
                        <Textarea 
                          id="profile-bio"
                          placeholder="자신에 대해 간단히 소개해주세요..."
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          className="min-h-24"
                        />
                        <p className="text-xs text-muted-foreground">
                          {bio.length}/200자
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="project-notes">
                          <BookOpen className="w-4 h-4 inline mr-2" />
                          프로젝트 노트
                        </Label>
                        <Textarea 
                          id="project-notes"
                          placeholder="프로젝트 관련 메모를 작성하세요..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="min-h-32"
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Save className="w-3 h-3 mr-1" />
                          저장
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3 mr-1" />
                          내보내기
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">코드 편집기</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="code-editor">
                          <Edit3 className="w-4 h-4 inline mr-2" />
                          JavaScript 코드
                        </Label>
                        <Textarea 
                          id="code-editor"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          className="min-h-32 font-mono text-sm"
                          spellCheck={false}
                        />
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Zap className="w-3 h-3 mr-1" />
                          실행
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="w-3 h-3 mr-1" />
                          복사
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">리뷰 및 평가 시스템</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="product-review">상품 리뷰</Label>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <Textarea 
                          id="product-review"
                          placeholder="이 상품에 대한 솔직한 리뷰를 작성해주세요..."
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                          className="min-h-28"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{review.length}/1000자</span>
                          <span>최소 50자 이상 작성해주세요</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="requirements">
                          <Target className="w-4 h-4 inline mr-2" />
                          요구사항
                        </Label>
                        <Textarea 
                          id="requirements"
                          placeholder="프로젝트 요구사항을 상세히 작성해주세요..."
                          value={requirements}
                          onChange={(e) => setRequirements(e.target.value)}
                          className="min-h-28"
                        />
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Lightbulb className="w-3 h-3" />
                          <span>구체적인 요구사항일수록 더 나은 결과를 얻을 수 있습니다</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline">임시저장</Button>
                    <Button>
                      <Send className="w-3 h-3 mr-1" />
                      제출
                    </Button>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 폼과 함께 사용
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="bio">자기소개</Label>
    <Textarea 
      id="bio"
      placeholder="자신에 대해 간단히 소개해주세요..."
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      className="min-h-24"
    />
    <p className="text-xs text-muted-foreground">
      {bio.length}/200자
    </p>
  </div>
  
  <Button>
    <Save className="w-3 h-3 mr-1" />
    저장
  </Button>
</div>

// 코드 에디터 스타일
<Textarea 
  value={code}
  onChange={(e) => setCode(e.target.value)}
  className="min-h-32 font-mono text-sm"
  spellCheck={false}
/>

// 리뷰 시스템
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>상품 리뷰</Label>
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(star => (
        <Star key={star} className="w-4 h-4 fill-yellow-400" />
      ))}
    </div>
  </div>
  <Textarea 
    placeholder="리뷰를 작성해주세요..."
    className="min-h-28"
  />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>{review.length}/1000자</span>
    <span>최소 50자 이상 작성해주세요</span>
  </div>
</div>`}
                codeKey="interactive-examples"
              />
            </CardContent>
          </Card>

          {/* Advanced Examples */}
          <Card>
            <CardHeader>
              <CardTitle>고급 예제</CardTitle>
              <CardDescription>
                복합적인 기능과 커스터마이징이 적용된 텍스트 영역 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium">댓글 시스템</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="comment-textarea">댓글 작성</Label>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Users className="w-3 h-3" />
                            <span>익명</span>
                          </div>
                        </div>
                        <Textarea 
                          id="comment-textarea"
                          placeholder="이 게시물에 대한 의견을 남겨주세요..."
                          className="min-h-24"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>0/500자</span>
                            <div className="flex items-center gap-1">
                              <Mic className="w-3 h-3" />
                              <span>음성 입력</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">취소</Button>
                            <Button size="sm">댓글 작성</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h4 className="font-medium">메일 작성</h4>
                  <Card className="p-4 bg-muted/20">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label htmlFor="email-to" className="text-xs">받는 사람</Label>
                          <Input id="email-to" placeholder="email@example.com" className="text-xs" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="email-subject" className="text-xs">제목</Label>
                          <Input id="email-subject" placeholder="메일 제목" className="text-xs" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email-body" className="text-xs">내용</Label>
                        <Textarea 
                          id="email-body"
                          placeholder="메일 내용을 작성하세요..."
                          className="min-h-32 text-sm"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>자동 저장됨</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Save className="w-3 h-3 mr-1" />
                            임시저장
                          </Button>
                          <Button size="sm">
                            <Send className="w-3 h-3 mr-1" />
                            보내기
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-medium">스마트 텍스트 입력</h4>
                <Card className="p-4 bg-muted/20">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smart-textarea">AI 어시스턴트와 함께 작성</Label>
                        <Badge variant="secondary" className="text-xs">
                          <Lightbulb className="w-3 h-3 mr-1" />
                          AI 지원
                        </Badge>
                      </div>
                      <Textarea 
                        id="smart-textarea"
                        placeholder="무엇을 작성하고 싶으신가요? AI가 도와드릴게요..."
                        className="min-h-32"
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>문법 검사</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            <span>가독성 분석</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            <span>자동 완성</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Lightbulb className="w-3 h-3 mr-1" />
                            제안 받기
                          </Button>
                          <Button size="sm">완료</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <CodeBlock
                code={`// 댓글 시스템
<div className="space-y-4">
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <Label>댓글 작성</Label>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Users className="w-3 h-3" />
        <span>익명</span>
      </div>
    </div>
    <Textarea 
      placeholder="이 게시물에 대한 의견을 남겨주세요..."
      className="min-h-24"
    />
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span>0/500자</span>
        <div className="flex items-center gap-1">
          <Mic className="w-3 h-3" />
          <span>음성 입력</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline">취소</Button>
        <Button size="sm">댓글 작성</Button>
      </div>
    </div>
  </div>
</div>

// 메일 작성 폼
<div className="space-y-4">
  <div className="grid grid-cols-2 gap-2">
    <Input placeholder="받는 사람" />
    <Input placeholder="제목" />
  </div>
  
  <Textarea 
    placeholder="메일 내용을 작성하세요..."
    className="min-h-32"
  />
  
  <div className="flex justify-between">
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <Clock className="w-3 h-3" />
      <span>자동 저장됨</span>
    </div>
    <div className="flex gap-2">
      <Button variant="outline">임시저장</Button>
      <Button>보내기</Button>
    </div>
  </div>
</div>

// AI 지원 텍스트 입력
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>AI 어시스턴트와 함께 작성</Label>
    <Badge variant="secondary">
      <Lightbulb className="w-3 h-3 mr-1" />
      AI 지원
    </Badge>
  </div>
  <Textarea 
    placeholder="무엇을 작성하고 싶으신가요? AI가 도와드릴게요..."
    className="min-h-32"
  />
  <div className="flex justify-between">
    <div className="flex items-center gap-4 text-xs text-muted-foreground">
      <span>문법 검사</span>
      <span>가독성 분석</span>
      <span>자동 완성</span>
    </div>
    <Button size="sm">
      <Lightbulb className="w-3 h-3 mr-1" />
      제안 받기
    </Button>
  </div>
</div>`}
                codeKey="advanced-examples"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>텍스트 영역 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 텍스트 영역 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                        <Label htmlFor="good-label">명확한 라벨과 도움말</Label>
                        <Textarea 
                          id="good-label"
                          placeholder="상세한 설명을 작성해주세요..."
                          className="min-h-20"
                        />
                        <p className="text-xs text-muted-foreground">
                          최소 50자 이상 작성하면 더 나은 피드백을 받을 수 있습니다.
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 명확한 라벨과 안내 텍스트</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <Label>적절한 크기와 문자 수 표시</Label>
                        <Textarea 
                          placeholder="댓글을 작성하세요..."
                          className="min-h-24"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>0/500자</span>
                          <span>선택 사항</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 문자 수 표시와 적절한 크기</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="space-y-2 mb-3">
                        <Label>
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          의미를 나타내는 아이콘
                        </Label>
                        <Textarea 
                          placeholder="메시지를 입력하세요..."
                          className="min-h-20"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">✓ 컨텍스트를 나타내는 아이콘 사용</p>
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
                        <Textarea 
                          placeholder="텍스트 입력"
                          className="min-h-16"
                        />
                      </div>
                      <p className="text-xs text-red-600">✗ 라벨 없이 애매한 플레이스홀더</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Label>설명</Label>
                        <Textarea 
                          placeholder="설명을 입력하세요..."
                          className="min-h-12"
                        />
                      </div>
                      <p className="text-xs text-red-600">✗ 너무 작은 텍스트 영역</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="space-y-2 mb-3">
                        <Label>매우 긴 텍스트 입력 라벨입니다</Label>
                        <Textarea 
                          placeholder="아주 상세하고 구체적이며 길고 복잡한 텍스트를 여기에 입력해주세요. 가능한 한 자세히 작성하고 모든 세부사항을 포함해주시기 바랍니다..."
                          className="min-h-20"
                        />
                      </div>
                      <p className="text-xs text-red-600">✗ 지나치게 긴 라벨과 플레이스홀더</p>
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
                다양한 사용 상황에 맞는 텍스트 영역 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">폼 입력</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <Label className="text-sm">회사 소개</Label>
                      <Textarea 
                        placeholder="회사에 대해 소개해주세요..."
                        className="min-h-20 text-sm"
                      />
                      <p className="text-xs text-muted-foreground">
                        • 필수 입력<br/>
                        • 최소 100자 이상<br/>
                        • 실시간 저장
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">댓글 및 피드백</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <Label className="text-sm">고객 후기</Label>
                      <Textarea 
                        placeholder="제품 사용 후기를 남겨주세요..."
                        className="min-h-20 text-sm"
                      />
                      <p className="text-xs text-muted-foreground">
                        • 선택 입력<br/>
                        • 익명 가능<br/>
                        • 즉시 게시
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">콘텐츠 작성</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <Label className="text-sm">블로그 글</Label>
                      <Textarea 
                        placeholder="글 내용을 작성하세요..."
                        className="min-h-24 text-sm"
                      />
                      <p className="text-xs text-muted-foreground">
                        • 자동 저장<br/>
                        • 마크다운 지원<br/>
                        • 미리보기 제공
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>반응형 및 접근성 패턴</CardTitle>
              <CardDescription>
                다양한 기기와 사용자를 고려한 텍스트 영역 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">모바일 최적화</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <Label className="text-sm">터치 친화적</Label>
                      <Textarea 
                        placeholder="모바일에서 쉽게 입력할 수 있도록..."
                        className="min-h-28 text-base"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 충분한 터치 영역<br/>
                      • 적절한 글자 크기<br/>
                      • 키보드 최적화
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">접근성 지원</h4>
                  <div className="space-y-3 p-3 border rounded-lg">
                    <div className="space-y-2">
                      <Label className="text-sm">스크린 리더 친화적</Label>
                      <Textarea 
                        placeholder="접근성을 고려한 텍스트 입력..."
                        className="min-h-24"
                        aria-describedby="help-text"
                      />
                      <p id="help-text" className="text-xs text-muted-foreground">
                        스크린 리더가 읽을 수 있는 도움말
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      • 적절한 라벨 연결<br/>
                      • 도움말 텍스트<br/>
                      • 키보드 탐색 지원
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
                효과적인 Textarea 사용을 위한 모범 사례
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
                    <li>• 명확하고 구체적인 라벨 사용</li>
                    <li>• 적절한 크기와 높이 설정</li>
                    <li>• 도움말 텍스트로 가이드 제공</li>
                    <li>• 문자 수 제한 시 카운터 표시</li>
                    <li>• 자동 저장 기능 제공</li>
                    <li>• 키보드 단축키 지원</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 작은 입력 영역</li>
                    <li>• 애매한 플레이스홀더 텍스트</li>
                    <li>• 불필요하게 긴 라벨</li>
                    <li>• 문자 수 제한 없이 무제한 입력</li>
                    <li>• 오류 메시지 없는 유효성 검사</li>
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
                모든 사용자가 Textarea를 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> 포커스 이동</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Shift+Tab</kbd> 역방향 포커스 이동</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl+A</kbd> 전체 선택</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl+Z</kbd> 실행 취소</li>
                    <li>• <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl+Y</kbd> 다시 실행</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 적절한 라벨 연결 (for/id 속성)</li>
                    <li>• aria-describedby로 도움말 연결</li>
                    <li>• aria-invalid로 오류 상태 표시</li>
                    <li>• aria-required로 필수 필드 표시</li>
                    <li>• placeholder 대신 라벨 사용</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 (4.5:1 이상)</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 색상에 의존하지 않는 오류 표시</li>
                    <li>• 읽기 쉬운 글자 크기</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Textarea 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 여러 줄 텍스트 입력</li>
                    <li>• 댓글 및 리뷰</li>
                    <li>• 설명 및 메모</li>
                    <li>• 피드백 작성</li>
                    <li>• 긴 형태의 텍스트</li>
                    <li>• 코드 입력</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 표현</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Input:</strong> 한 줄 텍스트</li>
                    <li>• <strong>Rich Editor:</strong> 서식 있는 텍스트</li>
                    <li>• <strong>Code Editor:</strong> 코드 편집</li>
                    <li>• <strong>Markdown Editor:</strong> 마크다운</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 한 줄 입력 (이름, 이메일)</li>
                    <li>• 선택형 입력</li>
                    <li>• 숫자 입력</li>
                    <li>• 날짜/시간 선택</li>
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
                Textarea 컴포넌트의 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">기본 속성</h4>
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
                        <td className="p-2 font-mono">value</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">제어된 입력값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">defaultValue</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">기본 입력값</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onChange</td>
                        <td className="p-2">(e: ChangeEvent) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">값 변경 콜백</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">placeholder</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">플레이스홀더 텍스트</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">비활성화 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">readOnly</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">읽기 전용 상태</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">required</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">필수 입력 여부</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">rows</td>
                        <td className="p-2">number</td>
                        <td className="p-2">-</td>
                        <td className="p-2">표시할 행 수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">cols</td>
                        <td className="p-2">number</td>
                        <td className="p-2">-</td>
                        <td className="p-2">표시할 열 수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">maxLength</td>
                        <td className="p-2">number</td>
                        <td className="p-2">-</td>
                        <td className="p-2">최대 문자 수</td>
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
                code={`import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 텍스트 영역
<Textarea placeholder="여기에 텍스트를 입력하세요..." />

// 라벨과 함께 사용
<div className="space-y-2">
  <Label htmlFor="description">설명</Label>
  <Textarea 
    id="description"
    placeholder="상세한 설명을 작성해주세요..."
  />
</div>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="제어된 텍스트 영역"
                code={`const [message, setMessage] = useState('');

<Textarea 
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="메시지를 입력하세요..."
/>`}
                codeKey="controlled-textarea"
              />

              <CodeBlock
                title="크기 조절"
                code={`// 최소 높이 설정
<Textarea 
  placeholder="큰 텍스트 영역"
  className="min-h-32"
/>

// 행 수로 크기 설정
<Textarea 
  placeholder="5줄 텍스트 영역"
  rows={5}
/>

// 사용자 정의 크기
<Textarea 
  placeholder="사용자 정의 크기"
  className="h-40 resize-y"
/>`}
                codeKey="sizing"
              />

              <CodeBlock
                title="문자 수 제한과 카운터"
                code={`const [text, setText] = useState('');
const maxLength = 500;

<div className="space-y-2">
  <Label>댓글 작성</Label>
  <Textarea 
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="댓글을 작성해주세요..."
    maxLength={maxLength}
    className="min-h-24"
  />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>{text.length}/{maxLength}자</span>
    <span>최소 10자 이상 작성해주세요</span>
  </div>
</div>`}
                codeKey="character-limit"
              />

              <CodeBlock
                title="유효성 검사"
                code={`const [feedback, setFeedback] = useState('');
const [error, setError] = useState('');

const handleSubmit = () => {
  if (feedback.length < 10) {
    setError('최소 10자 이상 입력해주세요.');
    return;
  }
  setError('');
  // 제출 로직
};

<div className="space-y-2">
  <Label htmlFor="feedback">피드백 *</Label>
  <Textarea 
    id="feedback"
    value={feedback}
    onChange={(e) => {
      setFeedback(e.target.value);
      if (error) setError('');
    }}
    placeholder="피드백을 작성해주세요..."
    aria-invalid={!!error}
    required
  />
  {error && (
    <p className="text-sm text-destructive">{error}</p>
  )}
</div>`}
                codeKey="validation"
              />

              <CodeBlock
                title="다양한 상태"
                code={`// 비활성화
<Textarea 
  placeholder="비활성화된 텍스트 영역"
  disabled
/>

// 읽기 전용
<Textarea 
  value="이 텍스트는 읽기 전용입니다."
  readOnly
/>

// 오류 상태
<Textarea 
  placeholder="오류가 있는 텍스트 영역"
  aria-invalid="true"
/>

// 성공 상태 (사용자 정의)
<Textarea 
  placeholder="성공 상태 텍스트 영역"
  className="border-green-500 focus-visible:border-green-500"
/>`}
                codeKey="states"
              />

              <CodeBlock
                title="코드 에디터 스타일"
                code={`const [code, setCode] = useState(\`function hello() {
  console.log('Hello, World!');
}\`);

<div className="space-y-2">
  <Label>JavaScript 코드</Label>
  <Textarea 
    value={code}
    onChange={(e) => setCode(e.target.value)}
    className="min-h-32 font-mono text-sm"
    spellCheck={false}
    placeholder="코드를 입력하세요..."
  />
</div>`}
                codeKey="code-editor"
              />

              <CodeBlock
                title="자동 크기 조절"
                code={`// 자동 높이 조절 (CSS 기반)
<Textarea 
  placeholder="내용에 따라 높이가 자동 조절됩니다..."
  className="min-h-20 max-h-40 resize-none"
  style={{ fieldSizing: 'content' }}
/>

// React 기반 자동 크기 조절
const [value, setValue] = useState('');
const textareaRef = useRef<HTMLTextAreaElement>(null);

useEffect(() => {
  if (textareaRef.current) {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = 
      textareaRef.current.scrollHeight + 'px';
  }
}, [value]);

<Textarea 
  ref={textareaRef}
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="자동으로 높이가 조절됩니다..."
  className="resize-none overflow-hidden"
/>`}
                codeKey="auto-resize"
              />

              <CodeBlock
                title="폼과 함께 사용"
                code={`<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="subject">제목 *</Label>
    <Input 
      id="subject"
      placeholder="제목을 입력하세요..."
      required
    />
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="content">내용 *</Label>
    <Textarea 
      id="content"
      placeholder="내용을 작성해주세요..."
      className="min-h-32"
      required
    />
  </div>
  
  <div className="flex gap-2">
    <Button type="button" variant="outline">
      임시저장
    </Button>
    <Button type="submit">
      제출
    </Button>
  </div>
</form>`}
                codeKey="form-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}