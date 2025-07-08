import { 
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Alert, AlertDescription } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Settings,
  User,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Share,
  AlertTriangle,
  Info,
  CheckCircle,
  X,
  Plus,
  Search,
  Filter,
  FileText,
  Image,
  Calendar,
  Clock,
  Star,
  Heart,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Globe,
  Lock,
  Eye,
  EyeOff,
  HelpCircle,
  MessageCircle,
  Copy,
  Check,
  Palette,
  Accessibility
} from 'lucide-react';
import { useState } from 'react';

export function DialogComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [profileName, setProfileName] = useState('김디자이너');
  const [profileEmail, setProfileEmail] = useState('designer@company.com');
  const [confirmationInput, setConfirmationInput] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [agreesToTerms, setAgreesToTerms] = useState(false);

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
      title: 'Basic Dialog',
      description: '가장 기본적인 다이얼로그입니다. 간단한 정보 표시나 확인에 사용됩니다.',
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">기본 다이얼로그 열기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>다이얼로그 제목</DialogTitle>
              <DialogDescription>
                이것은 기본적인 다이얼로그입니다. 사용자에게 정보를 제공하거나 간단한 작업을 수행할 때 사용됩니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">취소</Button>
              </DialogClose>
              <Button>확인</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "./components/ui/dialog"
import { Button } from "./components/ui/button"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">다이얼로그 열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>다이얼로그 제목</DialogTitle>
      <DialogDescription>
        이것은 기본적인 다이얼로그입니다. 사용자에게 정보를 제공합니다.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">취소</Button>
      </DialogClose>
      <Button>확인</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      title: '폼이 포함된 다이얼로그',
      description: '사용자 입력을 받는 폼이 포함된 다이얼로그입니다. 프로필 편집, 설정 변경 등에 사용됩니다.',
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <User className="w-4 h-4" />
              프로필 편집
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                프로필 편집
              </DialogTitle>
              <DialogDescription>
                사용자 프로필 정보를 수정할 수 있습니다. 변경사항은 저장 버튼을 클릭해야 적용됩니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileEmail}
                  onChange={(e) => setProfileEmail(e.target.value)}
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">자기소개</Label>
                <Textarea
                  id="bio"
                  placeholder="자기소개를 입력하세요"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">부서</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="부서를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">디자인팀</SelectItem>
                    <SelectItem value="engineering">개발팀</SelectItem>
                    <SelectItem value="product">프로덕트팀</SelectItem>
                    <SelectItem value="marketing">마케팅팀</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">취소</Button>
              </DialogClose>
              <Button className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                저장
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "./components/ui/dialog"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Textarea } from "./components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"

<Dialog>
  <DialogTrigger asChild>
    <Button>프로필 편집</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>프로필 편집</DialogTitle>
      <DialogDescription>
        사용자 프로필 정보를 수정할 수 있습니다.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" placeholder="이름을 입력하세요" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input id="email" type="email" placeholder="이메일을 입력하세요" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">취소</Button>
      </DialogClose>
      <Button>저장</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      title: '확인/경고 다이얼로그',
      description: '중요한 작업을 수행하기 전 사용자 확인을 받는 다이얼로그입니다. 삭제, 변경사항 저장 등에 사용됩니다.',
      component: (
        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                파일 삭제
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-5 h-5" />
                  파일을 삭제하시겠습니까?
                </DialogTitle>
                <DialogDescription>
                  이 작업은 되돌릴 수 없습니다. 파일이 영구적으로 삭제되며 복구할 수 없습니다.
                  <br />
                  <br />
                  계속하려면 아래에 <strong>삭제</strong>를 입력하세요.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  value={confirmationInput}
                  onChange={(e) => setConfirmationInput(e.target.value)}
                  placeholder="삭제"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">취소</Button>
                </DialogClose>
                <Button 
                  variant="destructive" 
                  disabled={confirmationInput !== '삭제'}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  삭제
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                정보 안내
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-blue-600">
                  <Info className="w-5 h-5" />
                  새로운 기능이 추가되었습니다!
                </DialogTitle>
                <DialogDescription>
                  다크 모드가 추가되었습니다. 설정에서 테마를 변경할 수 있습니다.
                </DialogDescription>
              </DialogHeader>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">주요 개선사항</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 다크 모드 지원</li>
                      <li>• 성능 개선</li>
                      <li>• 새로운 아이콘 추가</li>
                    </ul>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="w-full">확인했습니다</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ),
      code: `{/* 삭제 확인 다이얼로그 */}
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">파일 삭제</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle className="flex items-center gap-2 text-destructive">
        <AlertTriangle className="w-5 h-5" />
        파일을 삭제하시겠습니까?
      </DialogTitle>
      <DialogDescription>
        이 작업은 되돌릴 수 없습니다. 파일이 영구적으로 삭제됩니다.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <Input placeholder="삭제" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">취소</Button>
      </DialogClose>
      <Button variant="destructive">삭제</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

{/* 정보 안내 다이얼로그 */}
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">정보 안내</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle className="flex items-center gap-2 text-blue-600">
        <Info className="w-5 h-5" />
        새로운 기능이 추가되었습니다!
      </DialogTitle>
      <DialogDescription>
        다크 모드가 추가되었습니다.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button>확인했습니다</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      title: '복잡한 폼 다이얼로그',
      description: '여러 섹션과 복잡한 입력 요소들이 포함된 다이얼로그입니다. 설정, 계정 생성 등에 사용됩니다.',
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              새 프로젝트 만들기
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                새 프로젝트 만들기
              </DialogTitle>
              <DialogDescription>
                새로운 프로젝트를 생성합니다. 모든 필수 정보를 입력해 주세요.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              {/* 기본 정보 */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  기본 정보
                </h4>
                <div className="space-y-2">
                  <Label htmlFor="projectName">프로젝트 이름 *</Label>
                  <Input id="projectName" placeholder="프로젝트 이름을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">설명</Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="프로젝트에 대한 간단한 설명을 입력하세요"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">카테고리</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">웹 개발</SelectItem>
                      <SelectItem value="mobile">모바일 앱</SelectItem>
                      <SelectItem value="design">디자인</SelectItem>
                      <SelectItem value="research">리서치</SelectItem>
                      <SelectItem value="marketing">마케팅</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* 팀 설정 */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  팀 설정
                </h4>
                <div className="space-y-3">
                  <Label>팀 접근 권한</Label>
                  <RadioGroup defaultValue="private">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private" />
                      <Label htmlFor="private" className="flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        비공개 - 초대받은 멤버만 접근
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="internal" id="internal" />
                      <Label htmlFor="internal" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        사내 공개 - 모든 직원이 접근
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <Separator />

              {/* 기타 설정 */}
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  기타 설정
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications">이메일 알림 받기</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="template" />
                    <Label htmlFor="template">템플릿으로 저장</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreesToTerms}
                      onCheckedChange={setAgreesToTerms}
                    />
                    <Label htmlFor="terms">이용약관에 동의합니다 *</Label>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="gap-2">
              <DialogClose asChild>
                <Button variant="outline">취소</Button>
              </DialogClose>
              <Button disabled={!agreesToTerms} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                프로젝트 생성
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>새 프로젝트 만들기</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>새 프로젝트 만들기</DialogTitle>
      <DialogDescription>
        새로운 프로젝트를 생성합니다. 모든 필수 정보를 입력해 주세요.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-6">
      {/* 기본 정보 */}
      <div className="space-y-4">
        <h4 className="font-medium">기본 정보</h4>
        <div className="space-y-2">
          <Label htmlFor="projectName">프로젝트 이름 *</Label>
          <Input id="projectName" placeholder="프로젝트 이름을 입력하세요" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">카테고리</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="카테고리를 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">웹 개발</SelectItem>
              <SelectItem value="mobile">모바일 앱</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">취소</Button>
      </DialogClose>
      <Button>프로젝트 생성</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      title: '파일 업로드 다이얼로그',
      description: '파일 업로드 기능이 포함된 다이얼로그입니다. 드래그 앤 드롭, 파일 선택 등의 기능을 제공합니다.',
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              파일 업로드
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                파일 업로드
              </DialogTitle>
              <DialogDescription>
                이미지나 문서 파일을 업로드할 수 있습니다. (최대 10MB)
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Upload className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">파일을 드래그하거나 클릭하여 선택</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG, PDF 파일만 지원됩니다</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  파일 선택
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">업로드된 파일</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Image className="w-8 h-8 text-blue-600" />
                    <div className="flex-1">
                      <p className="font-medium">design-mockup.png</p>
                      <p className="text-sm text-muted-foreground">2.4 MB</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <FileText className="w-8 h-8 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium">requirements.pdf</p>
                      <p className="text-sm text-muted-foreground">1.8 MB</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">취소</Button>
              </DialogClose>
              <Button className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                업로드 시작
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">파일 업로드</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>파일 업로드</DialogTitle>
      <DialogDescription>
        이미지나 문서 파일을 업로드할 수 있습니다.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
        <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
          <Upload className="w-6 h-6 text-muted-foreground" />
        </div>
        <p className="font-medium">파일을 드래그하거나 클릭하여 선택</p>
        <Button variant="outline">파일 선택</Button>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">취소</Button>
      </DialogClose>
      <Button>업로드 시작</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      title: '검색 다이얼로그',
      description: '검색 기능이 포함된 모달 다이얼로그입니다. 빠른 검색, 필터링 등에 사용됩니다.',
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              빠른 검색
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                빠른 검색
              </DialogTitle>
              <DialogDescription>
                프로젝트, 파일, 사용자를 빠르게 검색할 수 있습니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="검색어를 입력하세요..."
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  파일
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  사용자
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="w-3 h-3" />
                  필터
                </Button>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium text-sm">검색 결과</h4>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  <div className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg cursor-pointer">
                    <FileText className="w-8 h-8 text-blue-600 bg-blue-100 p-1.5 rounded" />
                    <div className="flex-1">
                      <p className="font-medium">디자인 시스템 가이드</p>
                      <p className="text-sm text-muted-foreground">프로젝트 • 2일 전 수정</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg cursor-pointer">
                    <User className="w-8 h-8 text-green-600 bg-green-100 p-1.5 rounded" />
                    <div className="flex-1">
                      <p className="font-medium">김디자이너</p>
                      <p className="text-sm text-muted-foreground">디자인팀 • 온라인</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg cursor-pointer">
                    <Image className="w-8 h-8 text-purple-600 bg-purple-100 p-1.5 rounded" />
                    <div className="flex-1">
                      <p className="font-medium">컴포넌트 목업</p>
                      <p className="text-sm text-muted-foreground">이미지 • 1주 전</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="w-full">닫기</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">빠른 검색</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-lg">
    <DialogHeader>
      <DialogTitle>빠른 검색</DialogTitle>
      <DialogDescription>
        프로젝트, 파일, 사용자를 빠르게 검색할 수 있습니다.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
        <Input placeholder="검색어를 입력하세요..." className="pl-10" />
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-sm">검색 결과</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg cursor-pointer">
            <FileText className="w-8 h-8 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium">디자인 시스템 가이드</p>
              <p className="text-sm text-muted-foreground">프로젝트 • 2일 전</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DialogContent>
</Dialog>`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Dialog</h1>
            <p className="text-muted-foreground">
              사용자의 주의를 끌고 중요한 정보를 표시하거나 사용자 입력을 요청하는 모달 창입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            6가지 예제
          </Badge>
          <Badge variant="outline">모달 오버레이</Badge>
          <Badge variant="outline">키보드 네비게이션</Badge>
          <Badge variant="outline">포커스 트래핑</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">사용 사례</TabsTrigger>
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

        {/* Variants & Use Cases Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Dialog 사용 사례</CardTitle>
              <CardDescription>
                다양한 상황에서 Dialog를 효과적으로 사용하는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    적절한 사용
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 중요한 정보나 경고 메시지 표시</li>
                    <li>• 사용자 확인이 필요한 액션</li>
                    <li>• 폼 입력 (간단한 정보 수집)</li>
                    <li>• 설정이나 환경설정 변경</li>
                    <li>• 파일 업로드나 미디어 선택</li>
                    <li>• 빠른 검색이나 필터링</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    피해야 할 사용
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 복잡하거나 긴 폼 (별도 페이지 사용)</li>
                    <li>• 주요 네비게이션 메뉴</li>
                    <li>• 긴 콘텐츠나 문서 읽기</li>
                    <li>• 빈번한 상호작용이 필요한 기능</li>
                    <li>• 여러 단계의 워크플로우</li>
                    <li>• 데이터 시각화나 대시보드</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dialog 크기 가이드</CardTitle>
              <CardDescription>
                콘텐츠에 따른 적절한 Dialog 크기 선택 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Small (sm:max-w-md)</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    간단한 확인이나 짧은 메시지용
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 알림 메시지</li>
                    <li>• 삭제 확인</li>
                    <li>• 간단한 입력</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Medium (sm:max-w-lg)</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    일반적인 폼이나 설정용
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 프로필 편집</li>
                    <li>• 검색 인터페이스</li>
                    <li>• 미디어 업로드</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Large (sm:max-w-2xl)</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    복잡한 폼이나 많은 정보용
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 프로젝트 생성</li>
                    <li>• 상세 설정</li>
                    <li>• 다단계 폼</li>
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
                효과적인 Dialog 사용을 위한 모범 사례입니다.
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
                    <li>• 명확하고 간결한 제목 사용</li>
                    <li>• 사용자가 쉽게 닫을 수 있는 방법 제공</li>
                    <li>• 중요한 액션은 시각적으로 강조</li>
                    <li>• 키보드 네비게이션 지원</li>
                    <li>• 적절한 크기와 여백 사용</li>
                    <li>• 로딩 상태와 에러 처리 구현</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 불필요한 중첩 다이얼로그</li>
                    <li>• 너무 작거나 큰 크기</li>
                    <li>• 모호한 액션 버튼 라벨</li>
                    <li>• 자동으로 열리는 팝업</li>
                    <li>• 중요하지 않은 정보로 방해</li>
                    <li>• ESC 키로 닫기 비활성화</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Dialog를 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Esc</kbd>
                      <span>Dialog 닫기</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>다음 요소로 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift+Tab</kbd>
                      <span>이전 요소로 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>기본 액션 실행</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• DialogTitle은 자동으로 aria-labelledby 역할</li>
                    <li>• DialogDescription은 aria-describedby 제공</li>
                    <li>• 포커스가 Dialog 내부로 트래핑됨</li>
                    <li>• Dialog 닫을 때 원래 요소로 포커스 복원</li>
                    <li>• role="dialog"가 자동으로 적용됨</li>
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
                Dialog 컴포넌트들의 속성과 사용법입니다.
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
                        <td className="p-2 font-mono">Dialog</td>
                        <td className="p-2">루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DialogTrigger</td>
                        <td className="p-2">Dialog를 여는 트리거</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DialogContent</td>
                        <td className="p-2">Dialog의 메인 콘텐츠</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DialogHeader</td>
                        <td className="p-2">헤더 섹션 컨테이너</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DialogTitle</td>
                        <td className="p-2">Dialog 제목</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DialogDescription</td>
                        <td className="p-2">Dialog 설명</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DialogFooter</td>
                        <td className="p-2">푸터 섹션 (주로 버튼들)</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">DialogClose</td>
                        <td className="p-2">Dialog를 닫는 트리거</td>
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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`import { Button } from "./components/ui/button";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Dialog 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog 제목</DialogTitle>
          <DialogDescription>
            이것은 Dialog의 설명입니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="폼과 함께 사용"
                code={`import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export function FormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>프로필 편집</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>프로필 편집</DialogTitle>
          <DialogDescription>
            프로필 정보를 수정할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="이메일을 입력하세요" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`}
                codeKey="form-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}