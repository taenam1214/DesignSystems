import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { 
  FileText, 
  MessageSquare, 
  Globe, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Target,
  Heart,
  Smile,
  Clock,
  Edit3,
  Volume2
} from 'lucide-react';

export function ContentSection() {
  const writingPrinciples = [
    {
      icon: Users,
      title: '사용자 중심',
      description: '사용자의 목표와 필요를 최우선으로 고려하여 콘텐츠를 작성합니다.',
      examples: [
        '사용자가 원하는 정보를 빠르게 찾을 수 있도록 구성',
        '기술적 용어보다는 일상적인 언어 사용',
        '사용자의 상황과 맥락 고려'
      ]
    },
    {
      icon: Target,
      title: '명확성',
      description: '모호함 없이 명확하고 구체적인 정보를 전달합니다.',
      examples: [
        '간단하고 직접적인 문장 구조',
        '구체적인 액션과 결과 명시',
        '불필요한 수식어 제거'
      ]
    },
    {
      icon: Heart,
      title: '공감과 배려',
      description: '사용자의 감정과 상황에 공감하는 따뜻한 톤을 유지합니다.',
      examples: [
        '오류 상황에서 비난보다는 해결책 제시',
        '사용자의 노력과 시간을 인정',
        '도움이 되는 조언과 격려'
      ]
    },
    {
      icon: Lightbulb,
      title: '유용성',
      description: '실제로 도움이 되는 가치 있는 정보만 포함합니다.',
      examples: [
        '실행 가능한 단계별 가이드',
        '구체적인 예시와 사례',
        '예상되는 문제와 해결방법'
      ]
    }
  ];

  const toneGuidelines = [
    {
      title: '친근하고 전문적',
      description: '접근하기 쉽지만 신뢰할 수 있는 톤',
      dos: [
        '"안녕하세요"보다는 "환영합니다" 사용',
        '정중하고 예의바른 표현',
        '전문성을 보여주는 정확한 정보'
      ],
      donts: [
        '지나치게 캐주얼한 표현',
        '불필요한 감탄사나 이모티콘',
        '격식을 잃은 말투'
      ]
    },
    {
      title: '도움이 되는',
      description: '사용자의 성공을 돕는 지원적인 톤',
      dos: [
        '단계별 안내 제공',
        '긍정적이고 격려하는 표현',
        '대안과 옵션 제시'
      ],
      donts: [
        '명령조나 지시적인 표현',
        '비판적이거나 부정적인 언어',
        '해결책 없는 문제 지적'
      ]
    },
    {
      title: '간결하고 명확한',
      description: '불필요한 말 없이 핵심만 전달하는 톤',
      dos: [
        '짧고 명확한 문장',
        '핵심 정보 우선 배치',
        '구체적이고 실행 가능한 표현'
      ],
      donts: [
        '장황하고 복잡한 설명',
        '모호하거나 추상적인 표현',
        '중복되는 내용'
      ]
    }
  ];

  const contentTypes = [
    {
      type: '버튼 텍스트',
      guidelines: [
        '동사로 시작하는 명확한 액션 표현',
        '2-3단어로 간결하게 작성',
        '사용자가 얻는 결과 명시'
      ],
      examples: {
        good: ['저장하기', '다운로드', '계속하기', '변경사항 저장'],
        bad: ['확인', '클릭', '제출', '완료']
      }
    },
    {
      type: '오류 메시지',
      guidelines: [
        '문제가 무엇인지 명확히 설명',
        '해결 방법이나 다음 단계 제시',
        '사용자를 비난하지 않는 표현'
      ],
      examples: {
        good: ['올바른 이메일 형식을 입력해주세요', '비밀번호는 8자 이상이어야 합니다'],
        bad: ['잘못된 입력', '오류 발생', '실패']
      }
    },
    {
      type: '성공 메시지',
      guidelines: [
        '사용자의 성취를 인정하고 축하',
        '다음에 할 수 있는 액션 제안',
        '긍정적이고 격려하는 톤'
      ],
      examples: {
        good: ['프로필이 성공적으로 업데이트되었습니다', '파일이 안전하게 저장되었습니다'],
        bad: ['완료됨', '성공', '저장됨']
      }
    },
    {
      type: '빈 상태',
      guidelines: [
        '현재 상황을 명확히 설명',
        '첫 번째 액션 제안',
        '도움이 되는 팁이나 가이드 제공'
      ],
      examples: {
        good: ['아직 프로젝트가 없습니다. 첫 번째 프로젝트를 만들어보세요', '메시지함이 비어있습니다'],
        bad: ['데이터 없음', '비어있음', '결과 없음']
      }
    }
  ];

  const inclusiveLanguage = [
    {
      category: '성별 포용적 언어',
      guidelines: [
        '성별을 가정하지 않는 표현 사용',
        '모든 성별이 포함될 수 있는 언어',
        '직업이나 역할에 성별 고정관념 배제'
      ],
      examples: {
        inclusive: ['개발자', '사용자', '고객', '팀원'],
        avoid: ['개발자/개발자 분', '사용자님', '고객님']
      }
    },
    {
      category: '능력 포용적 언어',
      guidelines: [
        '장애나 능력에 대한 부정적 표현 피하기',
        '사람 우선 언어 사용',
        '접근성을 자연스럽게 고려'
      ],
      examples: {
        inclusive: ['시각 장애가 있는 사용자', '키보드로 탐색하는 사용자'],
        avoid: ['정상 사용자', '일반 사용자', '장애인']
      }
    },
    {
      category: '문화적 포용',
      guidelines: [
        '다양한 문화적 배경 고려',
        '지역이나 국가를 가정하지 않는 표현',
        '보편적으로 이해 가능한 언어'
      ],
      examples: {
        inclusive: ['오늘', '현재', '지금'],
        avoid: ['이번 주말', '휴일', '연말']
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">콘텐츠 가이드라인</h1>
            <p className="text-muted-foreground">
              일관되고 효과적인 사용자 경험을 위한 콘텐츠 작성 가이드라인입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            톤 앤 보이스
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            포용적 언어
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            사용자 중심
          </Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">일관성</Badge>
        </div>
      </div>

      <Tabs defaultValue="principles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="principles">원칙</TabsTrigger>
          <TabsTrigger value="tone">톤 앤 보이스</TabsTrigger>
          <TabsTrigger value="types">콘텐츠 유형</TabsTrigger>
          <TabsTrigger value="inclusive">포용적 언어</TabsTrigger>
        </TabsList>

        {/* Principles Tab */}
        <TabsContent value="principles" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                콘텐츠 작성 원칙
              </CardTitle>
              <CardDescription>
                모든 콘텐츠 작성 시 지켜야 하는 핵심 원칙들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {writingPrinciples.map((principle) => {
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
                          <div className="space-y-1">
                            {principle.examples.map((example, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                                <span className="text-muted-foreground">{example}</span>
                              </div>
                            ))}
                          </div>
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
              <CardTitle>콘텐츠 체크리스트</CardTitle>
              <CardDescription>
                콘텐츠를 게시하기 전에 확인해야 할 체크리스트입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">명확성 확인</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-1" className="rounded" />
                      <label htmlFor="clear-1" className="text-sm">목적이 명확한가?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-2" className="rounded" />
                      <label htmlFor="clear-2" className="text-sm">사용자가 해야 할 일이 분명한가?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-3" className="rounded" />
                      <label htmlFor="clear-3" className="text-sm">전문 용어 없이 이해할 수 있는가?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="clear-4" className="rounded" />
                      <label htmlFor="clear-4" className="text-sm">예상 결과가 명시되어 있는가?</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">사용자 경험</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-1" className="rounded" />
                      <label htmlFor="ux-1" className="text-sm">사용자의 관점에서 작성되었는가?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-2" className="rounded" />
                      <label htmlFor="ux-2" className="text-sm">도움이 되고 유용한가?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-3" className="rounded" />
                      <label htmlFor="ux-3" className="text-sm">톤이 일관적인가?</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="ux-4" className="rounded" />
                      <label htmlFor="ux-4" className="text-sm">포용적이고 접근 가능한가?</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tone Tab */}
        <TabsContent value="tone" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                톤 앤 보이스 가이드라인
              </CardTitle>
              <CardDescription>
                브랜드 일관성을 위한 톤과 보이스 설정입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {toneGuidelines.map((tone, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">{tone.title}</h3>
                      <p className="text-sm text-muted-foreground">{tone.description}</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <h5 className="font-medium text-green-700 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          권장사항
                        </h5>
                        <ul className="space-y-2 text-sm">
                          {tone.dos.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium text-red-700 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          피해야 할 것
                        </h5>
                        <ul className="space-y-2 text-sm">
                          {tone.donts.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < toneGuidelines.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상황별 톤 적용</CardTitle>
              <CardDescription>
                다양한 상황에서의 적절한 톤 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Smile className="w-5 h-5 text-green-600" />
                    <h5 className="font-medium">성공 상황</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <strong>좋은 예:</strong><br />
                      "축하합니다! 계정이 성공적으로 생성되었습니다. 이제 모든 기능을 사용하실 수 있습니다."
                    </div>
                    <div className="text-muted-foreground">
                      • 성취감을 인정하고 축하<br />
                      • 다음 단계 안내<br />
                      • 긍정적이고 격려하는 톤
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <h5 className="font-medium">오류 상황</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded">
                      <strong>좋은 예:</strong><br />
                      "입력하신 이메일 형식을 확인해주세요. 올바른 형식: user@example.com"
                    </div>
                    <div className="text-muted-foreground">
                      • 구체적인 문제 설명<br />
                      • 해결 방법 제시<br />
                      • 비난하지 않는 중립적 톤
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h5 className="font-medium">대기 상황</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                      <strong>좋은 예:</strong><br />
                      "파일을 업로드하고 있습니다. 잠시만 기다려주세요. (약 30초 소요)"
                    </div>
                    <div className="text-muted-foreground">
                      • 현재 상황 명확히 설명<br />
                      • 예상 시간 안내<br />
                      • 안심시키는 톤
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Types Tab */}
        <TabsContent value="types" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                콘텐츠 유형별 가이드라인
              </CardTitle>
              <CardDescription>
                UI의 다양한 요소별 콘텐츠 작성 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {contentTypes.map((type, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold">{type.type}</h3>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium mb-2">작성 지침</h5>
                        <ul className="space-y-1 text-sm">
                          {type.guidelines.map((guideline, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h5 className="font-medium text-green-700">좋은 예</h5>
                          <div className="space-y-1">
                            {type.examples.good.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-green-50 border border-green-200 rounded text-sm">
                                "{example}"
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-red-700">피해야 할 예</h5>
                          <div className="space-y-1">
                            {type.examples.bad.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-red-50 border border-red-200 rounded text-sm">
                                "{example}"
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < contentTypes.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>마이크로카피 가이드라인</CardTitle>
              <CardDescription>
                작은 텍스트 요소들이 사용자 경험에 미치는 큰 영향을 고려한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">폼 관련</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-sm">플레이스홀더</div>
                      <div className="text-xs text-muted-foreground mb-2">예시 형식이나 도움말 제공</div>
                      <div className="text-sm">
                        <span className="text-green-600">좋음:</span> "name@company.com"<br />
                        <span className="text-red-600">나쁨:</span> "이메일을 입력하세요"
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">도움말 텍스트</div>
                      <div className="text-xs text-muted-foreground mb-2">추가 설명이나 제약사항</div>
                      <div className="text-sm">
                        <span className="text-green-600">좋음:</span> "8자 이상, 숫자 포함"<br />
                        <span className="text-red-600">나쁨:</span> "안전한 비밀번호를 사용하세요"
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">네비게이션</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-sm">링크 텍스트</div>
                      <div className="text-xs text-muted-foreground mb-2">목적지를 명확히 설명</div>
                      <div className="text-sm">
                        <span className="text-green-600">좋음:</span> "프로필 편집"<br />
                        <span className="text-red-600">나쁨:</span> "여기를 클릭"
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">브레드크럼</div>
                      <div className="text-xs text-muted-foreground mb-2">현재 위치를 명확히 표시</div>
                      <div className="text-sm">
                        <span className="text-green-600">좋음:</span> "홈 &gt; 설정 &gt; 계정"<br />
                        <span className="text-red-600">나쁨:</span> "페이지 1 &gt; 페이지 2"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Inclusive Language Tab */}
        <TabsContent value="inclusive" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                포용적 언어 가이드라인
              </CardTitle>
              <CardDescription>
                모든 사용자가 환영받고 포함될 수 있는 언어 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {inclusiveLanguage.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold">{category.category}</h3>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium mb-2">지침</h5>
                        <ul className="space-y-1 text-sm">
                          {category.guidelines.map((guideline, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h5 className="font-medium text-green-700">포용적 표현</h5>
                          <div className="space-y-1">
                            {category.examples.inclusive.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-green-50 border border-green-200 rounded text-sm">
                                {example}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-red-700">피해야 할 표현</h5>
                          <div className="space-y-1">
                            {category.examples.avoid.map((example, idx) => (
                              <div key={idx} className="px-3 py-2 bg-red-50 border border-red-200 rounded text-sm">
                                {example}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < inclusiveLanguage.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성을 고려한 콘텐츠</CardTitle>
              <CardDescription>
                스크린 리더와 보조 기술을 사용하는 사용자를 위한 콘텐츠 작성법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">Alt 텍스트</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>장식적 이미지:</strong> 빈 alt 속성 사용<br />
                      <code className="bg-muted px-1 rounded">alt=""</code>
                    </div>
                    <div>
                      <strong>정보 전달 이미지:</strong> 구체적이고 간결한 설명<br />
                      <code className="bg-muted px-1 rounded">alt="매출 증가를 보여주는 막대 그래프"</code>
                    </div>
                    <div>
                      <strong>복잡한 이미지:</strong> 요약과 상세 설명 분리<br />
                      <code className="bg-muted px-1 rounded">alt="2023년 분기별 매출 현황" longdesc="..."</code>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">링크 텍스트</h5>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <strong>좋은 예:</strong><br />
                      "사용자 가이드 다운로드 (PDF, 2MB)"
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                      <strong>나쁜 예:</strong><br />
                      "여기를 클릭하세요" 또는 "더 보기"
                    </div>
                    <div className="text-muted-foreground">
                      • 링크의 목적지나 기능을 명확히 설명<br />
                      • 파일 형식과 크기 정보 포함<br />
                      • 문맥 없이도 이해 가능한 텍스트
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}