import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Accessibility, 
  Eye, 
  Keyboard, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Monitor,
  Smartphone,
  Volume2,
  Contrast,
  MousePointer,
  Target,
  BookOpen,
  ExternalLink
} from 'lucide-react';

export function AccessibilitySection() {
  const wcagPrinciples = [
    {
      icon: Eye,
      title: '인식 가능',
      description: '정보와 사용자 인터페이스 구성 요소는 사용자가 인식할 수 있는 방식으로 제시되어야 합니다.',
      guidelines: [
        '텍스트가 아닌 콘텐츠에 대체 텍스트 제공',
        '충분한 색상 대비 확보',
        '텍스트 크기 조정 지원',
        '자동 재생 미디어 제어'
      ]
    },
    {
      icon: Keyboard,
      title: '조작 가능',
      description: '사용자 인터페이스 구성 요소와 탐색은 조작 가능해야 합니다.',
      guidelines: [
        '모든 기능을 키보드로 접근 가능',
        '시간 제한이 있는 콘텐츠 제어',
        '발작을 유발하는 콘텐츠 피하기',
        '탐색 및 콘텐츠 찾기 도움'
      ]
    },
    {
      icon: Users,
      title: '이해 가능',
      description: '정보와 사용자 인터페이스 작동은 이해할 수 있어야 합니다.',
      guidelines: [
        '텍스트 콘텐츠를 읽고 이해하기 쉽게',
        '콘텐츠 표시와 작동을 예측 가능하게',
        '사용자 입력 오류 방지 및 수정 도움',
        '명확하고 일관된 레이블 사용'
      ]
    },
    {
      icon: Target,
      title: '견고함',
      description: '콘텐츠는 다양한 사용자 에이전트에서 해석될 수 있을 만큼 견고해야 합니다.',
      guidelines: [
        '호환성 최대화',
        '보조 기술과의 호환성',
        '표준 HTML 및 ARIA 사용',
        '미래 기술과의 호환성 고려'
      ]
    }
  ];

  const colorContrastExamples = [
    { bg: '#ffffff', fg: '#030213', ratio: '15.29:1', level: 'AAA', description: '기본 텍스트 - 흰 배경' },
    { bg: '#ececf0', fg: '#030213', ratio: '12.85:1', level: 'AAA', description: '보조 배경 텍스트' },
    { bg: '#030213', fg: '#ffffff', ratio: '15.29:1', level: 'AAA', description: '다크 배경 텍스트' },
    { bg: '#d4183d', fg: '#ffffff', ratio: '5.72:1', level: 'AA', description: '오류 메시지' }
  ];

  const keyboardShortcuts = [
    { key: 'Tab', description: '다음 포커스 가능한 요소로 이동' },
    { key: 'Shift + Tab', description: '이전 포커스 가능한 요소로 이동' },
    { key: 'Enter', description: '버튼 또는 링크 활성화' },
    { key: 'Space', description: '버튼 활성화, 체크박스 토글' },
    { key: '방향키', description: '라디오 버튼, 메뉴 항목 탐색' },
    { key: 'Escape', description: '모달, 메뉴 닫기' },
    { key: 'Home/End', description: '목록의 첫 번째/마지막 항목으로' },
    { key: 'Page Up/Down', description: '긴 목록에서 페이지 단위 이동' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Accessibility className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">접근성</h1>
            <p className="text-muted-foreground">
              모든 사용자가 동등하게 접근할 수 있는 포용적인 디지털 경험을 만들기 위한 가이드라인입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            WCAG 2.1 AA
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Keyboard className="w-3 h-3" />
            키보드 탐색
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Volume2 className="w-3 h-3" />
            스크린 리더
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Contrast className="w-3 h-3" />
            색상 대비
          </Badge>
          <Badge variant="outline">ARIA 라벨</Badge>
        </div>
      </div>

      <Tabs defaultValue="principles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="principles">원칙</TabsTrigger>
          <TabsTrigger value="guidelines">가이드라인</TabsTrigger>
          <TabsTrigger value="testing">테스트</TabsTrigger>
          <TabsTrigger value="resources">리소스</TabsTrigger>
        </TabsList>

        {/* Principles Tab */}
        <TabsContent value="principles" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>WCAG 2.1 핵심 원칙</CardTitle>
              <CardDescription>
                웹 콘텐츠 접근성 가이드라인(WCAG)의 4가지 핵심 원칙입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {wcagPrinciples.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <Card key={principle.title} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="font-semibold">{principle.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {principle.description}
                          </p>
                          <ul className="text-sm space-y-1">
                            {principle.guidelines.map((guideline, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                                <span className="text-muted-foreground">{guideline}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>우리의 접근성 목표</CardTitle>
              <CardDescription>
                DS 디자인 시스템이 지향하는 접근성 표준과 목표입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-medium">WCAG 2.1 AA</h4>
                  <p className="text-sm text-muted-foreground">
                    모든 컴포넌트가 AA 수준을 준수합니다
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                    <Keyboard className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium">키보드 접근성</h4>
                  <p className="text-sm text-muted-foreground">
                    모든 상호작용이 키보드로 가능합니다
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                    <Volume2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium">스크린 리더</h4>
                  <p className="text-sm text-muted-foreground">
                    보조 기술과 완전 호환됩니다
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Guidelines Tab */}
        <TabsContent value="guidelines" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Contrast className="w-5 h-5" />
                색상 대비
              </CardTitle>
              <CardDescription>
                텍스트와 배경 간의 충분한 대비는 가독성을 위해 필수입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {colorContrastExamples.map((example, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div 
                        className="p-4 rounded mb-3"
                        style={{ 
                          backgroundColor: example.bg,
                          color: example.fg
                        }}
                      >
                        <p className="font-medium">샘플 텍스트</p>
                        <p className="text-sm opacity-80">이것은 대비 테스트입니다</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">{example.description}</span>
                          <Badge variant={example.level === 'AAA' ? 'default' : 'secondary'}>
                            {example.level}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          대비비: {example.ratio}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 mb-2">대비 요구사항</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• <strong>AA 수준:</strong> 일반 텍스트 4.5:1, 큰 텍스트 3:1</li>
                    <li>• <strong>AAA 수준:</strong> 일반 텍스트 7:1, 큰 텍스트 4.5:1</li>
                    <li>• <strong>비텍스트 요소:</strong> 3:1 (아이콘, 버튼 등)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="w-5 h-5" />
                키보드 탐색
              </CardTitle>
              <CardDescription>
                모든 사용자가 키보드만으로 인터페이스를 탐색할 수 있어야 합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-3 md:grid-cols-2">
                  {keyboardShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <kbd className="px-2 py-1 bg-muted rounded text-sm font-mono">
                        {shortcut.key}
                      </kbd>
                      <span className="text-sm">{shortcut.description}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h5 className="font-medium text-amber-900 mb-2">키보드 탐색 원칙</h5>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• 논리적이고 예측 가능한 탭 순서</li>
                    <li>• 현재 포커스 위치를 명확히 표시</li>
                    <li>• 포커스 트랩을 모달 및 드롭다운에 구현</li>
                    <li>• 스킵 링크로 주요 콘텐츠로 바로 이동</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                스크린 리더 지원
              </CardTitle>
              <CardDescription>
                시각 장애가 있는 사용자를 위한 보조 기술 지원 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">의미론적 HTML</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-sm">
                      <code>{`<button type="button">
  클릭하세요
</button>

<nav aria-label="주 탐색">
  <ul>
    <li><a href="/">홈</a></li>
    <li><a href="/about">소개</a></li>
  </ul>
</nav>`}</code>
                    </pre>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">ARIA 라벨</h5>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-sm">
                      <code>{`<button 
  aria-label="검색"
  aria-describedby="search-help"
>
  <SearchIcon />
</button>

<div id="search-help">
  키워드를 입력하여 검색하세요
</div>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-medium text-green-900 mb-2">스크린 리더 모범 사례</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• 모든 이미지에 적절한 alt 텍스트 제공</li>
                  <li>• 폼 필드에 명확한 라벨 연결</li>
                  <li>• 오류 메시지를 프로그래밍적으로 연결</li>
                  <li>• 실시간 업데이트를 aria-live로 알림</li>
                  <li>• 복잡한 UI에 ARIA 랜드마크 사용</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="w-5 h-5" />
                터치 및 모바일
              </CardTitle>
              <CardDescription>
                모바일 기기와 터치 인터페이스에서의 접근성 고려사항입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">터치 타겟 크기</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">44px × 44px</div>
                        <div className="text-xs text-muted-foreground">권장 최소 크기</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">32px × 32px</div>
                        <div className="text-xs text-muted-foreground">너무 작음</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">간격 및 레이아웃</h5>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>터치 타겟 간 충분한 간격 (8px 이상)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>엄지로 쉽게 접근 가능한 위치</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>스크롤 없이 중요한 액션 접근</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
                      <span>가로 및 세로 방향 지원</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testing Tab */}
        <TabsContent value="testing" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>접근성 테스트 체크리스트</CardTitle>
              <CardDescription>
                각 컴포넌트와 페이지에 대해 수행해야 하는 접근성 테스트 항목입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">자동화된 테스트</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="axe" className="rounded" />
                      <label htmlFor="axe" className="text-sm">axe-core로 자동 검사</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="lighthouse" className="rounded" />
                      <label htmlFor="lighthouse" className="text-sm">Lighthouse 접근성 감사</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="wave" className="rounded" />
                      <label htmlFor="wave" className="text-sm">WAVE 웹 접근성 평가</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="color-oracle" className="rounded" />
                      <label htmlFor="color-oracle" className="text-sm">Color Oracle 색맹 시뮬레이션</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">수동 테스트</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="keyboard" className="rounded" />
                      <label htmlFor="keyboard" className="text-sm">키보드 전용 탐색</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="screen-reader" className="rounded" />
                      <label htmlFor="screen-reader" className="text-sm">스크린 리더 테스트</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="zoom" className="rounded" />
                      <label htmlFor="zoom" className="text-sm">200% 확대 테스트</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="focus" className="rounded" />
                      <label htmlFor="focus" className="text-sm">포커스 표시 확인</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>테스트 도구 및 확장 프로그램</CardTitle>
              <CardDescription>
                접근성 테스트에 유용한 도구와 브라우저 확장 프로그램입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4">
                  <h5 className="font-medium mb-2">axe DevTools</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Chrome/Firefox 확장 프로그램으로 실시간 접근성 검사
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    설치하기
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">WAVE</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    웹 페이지의 접근성 문제를 시각적으로 표시
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    사용하기
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">Colour Contrast Analyser</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    색상 대비비 측정 및 분석 도구
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    다운로드
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>스크린 리더 테스트</CardTitle>
              <CardDescription>
                주요 스크린 리더 소프트웨어에서 테스트하는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    <h5 className="font-medium">NVDA (Windows)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    무료 오픈소스 스크린 리더. Windows에서 가장 인기있는 선택.
                  </p>
                  <div className="text-xs space-y-1">
                    <div><kbd className="bg-muted px-1 rounded">Ctrl + Alt + N</kbd> 시작/중지</div>
                    <div><kbd className="bg-muted px-1 rounded">Insert + Space</kbd> 브라우저 모드</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    <h5 className="font-medium">VoiceOver (macOS/iOS)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Apple 기기에 내장된 스크린 리더. macOS와 iOS에서 기본 제공.
                  </p>
                  <div className="text-xs space-y-1">
                    <div><kbd className="bg-muted px-1 rounded">Cmd + F5</kbd> 시작/중지</div>
                    <div><kbd className="bg-muted px-1 rounded">Ctrl + Option + Arrow</kbd> 탐색</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    <h5 className="font-medium">TalkBack (Android)</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Android 기기에 내장된 스크린 리더. Google에서 개발.
                  </p>
                  <div className="text-xs space-y-1">
                    <div>설정 &gt; 접근성 &gt; TalkBack</div>
                    <div>스와이프로 탐색, 더블 탭으로 선택</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                학습 리소스
              </CardTitle>
              <CardDescription>
                접근성에 대해 더 자세히 알아볼 수 있는 추천 리소스입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">공식 가이드라인</h5>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">WCAG 2.1 가이드라인</div>
                        <div className="text-xs text-muted-foreground">W3C 웹 접근성 가이드라인</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">ARIA 작성 사례</div>
                        <div className="text-xs text-muted-foreground">실용적인 ARIA 패턴과 예제</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">웹 접근성 연구소</div>
                        <div className="text-xs text-muted-foreground">한국 웹 접근성 정보</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">실용 가이드</h5>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">A11y Project</div>
                        <div className="text-xs text-muted-foreground">접근성 체크리스트와 리소스</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">Inclusive Design Patterns</div>
                        <div className="text-xs text-muted-foreground">포용적 디자인 패턴과 사례</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">MDN 접근성 가이드</div>
                        <div className="text-xs text-muted-foreground">개발자를 위한 접근성 문서</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성 법규 및 표준</CardTitle>
              <CardDescription>
                준수해야 하는 접근성 관련 법규와 표준입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">한국</h5>
                    <ul className="text-sm space-y-1">
                      <li>• 장애인차별금지 및 권리구제 등에 관한 법률</li>
                      <li>• 국가정보화기본법</li>
                      <li>• 한국형 웹 콘텐츠 접근성 지침 (K-WCAG)</li>
                      <li>• 웹 접근성 품질인증</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">국제</h5>
                    <ul className="text-sm space-y-1">
                      <li>• WCAG 2.1 (Web Content Accessibility Guidelines)</li>
                      <li>• Section 508 (미국)</li>
                      <li>• EN 301 549 (유럽)</li>
                      <li>• JIS X 8341 (일본)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-medium text-yellow-900 mb-2">준수 수준</h5>
                  <div className="text-sm text-yellow-800 space-y-1">
                    <p><strong>Level A:</strong> 최소 접근성 수준</p>
                    <p><strong>Level AA:</strong> 표준 준수 수준 (권장)</p>
                    <p><strong>Level AAA:</strong> 최고 접근성 수준</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>커뮤니티 및 지원</CardTitle>
              <CardDescription>
                접근성 관련 질문이나 도움이 필요할 때 참고할 수 있는 커뮤니티입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4">
                  <h5 className="font-medium mb-2">웹 접근성 연구소</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    한국의 웹 접근성 정보와 교육 자료
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    방문하기
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">A11y Slack</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    접근성 전문가들의 글로벌 커뮤니티
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    참여하기
                  </Button>
                </Card>
                <Card className="p-4">
                  <h5 className="font-medium mb-2">WebAIM 포럼</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    접근성 질문과 토론을 위한 포럼
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    둘러보기
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}