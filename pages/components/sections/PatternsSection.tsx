import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { CheckCircle, AlertCircle, Search, Filter, MoreHorizontal, Plus, Upload, Download, Settings } from 'lucide-react';

export function PatternsSection() {
  const patterns = [
    {
      id: 'forms',
      title: 'Form 패턴',
      description: '접근 가능하고 사용자 친화적인 폼 생성을 위한 모범 사례',
      category: '입력'
    },
    {
      id: 'lists',
      title: 'List & Table',
      description: '데이터 컬렉션을 체계적인 형식으로 표시하는 방법',
      category: '표시'
    },
    {
      id: 'loading',
      title: '로딩 상태',
      description: '사용자에게 진행 상황과 시스템 상태를 전달하는 방법',
      category: '피드백'
    },
    {
      id: 'empty',
      title: '빈 상태',
      description: '표시할 콘텐츠가 없을 때 사용자를 안내하는 방법',
      category: '가이던스'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl mb-4">공통 패턴</h1>
        <p className="text-xl text-muted-foreground">
          반복되는 디자인 문제에 대한 검증된 해결책입니다. 이러한 패턴은 일관성을 보장하고 
          애플리케이션의 다양한 부분에서 사용자 경험을 향상시킵니다.
        </p>
      </div>

      <section>
        <h2 className="text-2xl mb-6">패턴 라이브러리</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {patterns.map((pattern) => (
            <Card key={pattern.id} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-2">{pattern.title}</h3>
                  <p className="text-sm text-muted-foreground">{pattern.description}</p>
                </div>
                <Badge variant="secondary">{pattern.category}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">패턴 예제</h2>
        <Tabs defaultValue="forms" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="lists">Lists</TabsTrigger>
            <TabsTrigger value="loading">Loading</TabsTrigger>
            <TabsTrigger value="empty">Empty States</TabsTrigger>
          </TabsList>

          <TabsContent value="forms" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Form 유효성 검사 패턴</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="mb-3 text-sm">✓ 좋은 예시</h4>
                  <div className="space-y-4 p-4 border rounded-lg bg-green-50/50">
                    <div>
                      <Label htmlFor="email-good">이메일 주소 *</Label>
                      <Input 
                        id="email-good" 
                        type="email" 
                        placeholder="이메일을 입력하세요" 
                        className="border-green-500"
                      />
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <p className="text-sm text-green-600">유효한 이메일 형식</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="password-good">비밀번호 *</Label>
                      <Input 
                        id="password-good" 
                        type="password" 
                        placeholder="비밀번호를 생성하세요"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        숫자와 기호를 포함하여 최소 8자 이상이어야 합니다
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-sm">✗ 나쁜 예시</h4>
                  <div className="space-y-4 p-4 border rounded-lg bg-red-50/50">
                    <div>
                      <Label htmlFor="email-bad">이메일</Label>
                      <Input 
                        id="email-bad" 
                        type="email" 
                        className="border-red-500"
                      />
                      <div className="flex items-center gap-2 mt-1">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <p className="text-sm text-red-600">오류</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="password-bad">비밀번호</Label>
                      <Input 
                        id="password-bad" 
                        type="password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="lists" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">액션이 포함된 데이터 목록</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="사용자 검색..." />
                    </div>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      필터
                    </Button>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    사용자 추가
                  </Button>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>사{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">사용자 {i}</p>
                          <p className="text-xs text-muted-foreground">user{i}@example.com</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="loading" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">로딩 상태 패턴</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3">진행률 표시기</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>파일 업로드 중...</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm">요청을 처리하고 있습니다...</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3">스켈레톤 로딩</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="empty" className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">빈 상태 예제</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-8 border-2 border-dashed border-muted rounded-lg">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="mb-2">업로드된 파일이 없습니다</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    파일을 여기로 드래그 앤 드롭하거나 클릭하여 찾아보세요
                  </p>
                  <Button>파일 선택</Button>
                </div>
                <div className="text-center p-8 border rounded-lg bg-muted/20">
                  <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="mb-2">아직 프로젝트가 없습니다</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    시작하려면 첫 번째 프로젝트를 생성하세요
                  </p>
                  <Button>프로젝트 생성</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-2xl mb-6">패턴 가이드라인</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="mb-3">패턴을 사용하는 경우</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• 페이지 간 유사한 기능</li>
              <li>• 일반적인 사용자 워크플로</li>
              <li>• 확립된 사용자 기대치</li>
              <li>• 일관된 브랜드 경험</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3">패턴 커스터마이징</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• 특정 컨텍스트에 맞게 조정</li>
              <li>• 핵심 기능 유지</li>
              <li>• 접근성 영향 고려</li>
              <li>• 실제 사용자와 테스트</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="mb-3">새 패턴 생성</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• 해결하는 문제 문서화</li>
              <li>• 사용 가이드라인 제공</li>
              <li>• 코드 예제 포함</li>
              <li>• 팀과 공유</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}