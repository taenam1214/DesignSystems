import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Separator } from '../ui/separator';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  Clock, 
  FileText, 
  Monitor, 
  Palette, 
  Code, 
  Eye, 
  Layers,
  ArrowRight,
  ExternalLink,
  Target,
  GitBranch,
  Settings,
  Zap,
  BookOpen,
  Bug
} from 'lucide-react';

export function UiStyleReflectionSection() {
  const projectOverview = {
    duration: '4주',
    teamSize: '프론트엔드 개발자 2명, UI 디자이너 (QA)',
    components: '46개 컴포넌트',
    qaStart: '2주차부터',
    tools: ['Figma', 'Framelink Figma MCP 플러그인', 'Cursor AI']
  };

  const phases = [
    {
      phase: 1,
      title: '기획 및 분석',
      duration: '1주차',
      tasks: [
        'Figma 디자인 시안 분석 및 정리',
        '46개 컴포넌트 현황 파악',
        'Framelink Figma MCP 플러그인 설정',
        '작업 우선순위 결정',
        '개발 환경 구축'
      ],
      deliverables: ['개발환경 구축', '작업 계획서'],
      icon: FileText
    },
    {
      phase: 2,
      title: '컴포넌트 스타일 반영',
      duration: '2-3주차',
      tasks: [
        'Figma 디자인을 Cursor AI로 읽어서 코드 생성',
        '기본 컴포넌트 (8개) 스타일 적용',
        '폼 컴포넌트 (13개) 스타일 적용',
        '네비게이션 컴포넌트 (6개) 스타일 적용',
        '오버레이 컴포넌트 (9개) 스타일 적용',
        '고급 컴포넌트 (4개) 스타일 적용',
        '웹 브라우저 결과와 디자인 비교 검증'
      ],
      deliverables: ['업데이트된 컴포넌트 라이브러리', 'QA 체크리스트'],
      icon: Palette
    },
    {
      phase: 3,
      title: '프로젝트 반영 및 QA',
      duration: '3-4주차',
      tasks: [
        '프로젝트 내부 UI 컴포넌트 업데이트',
        'UI 디자이너 검수 진행',
        '수정 요청사항 반영',
        '크로스 브라우저 테스트',
        '반응형 디자인 검증'
      ],
      deliverables: ['최종 UI 라이브러리', 'QA 보고서'],
      icon: Eye
    },
    {
      phase: 4,
      title: '완료 및 문서화',
      duration: '4주차',
      tasks: [
        '최종 검수 및 버그 수정',
        '컴포넌트 문서 업데이트',
        '사용 가이드 작성',
        '배포 및 릴리즈',
        '프로젝트 회고'
      ],
      deliverables: ['완성된 디자인 시스템', '사용자 가이드'],
      icon: CheckCircle
    }
  ];

  const componentCategories = [
    { name: '기본 컴포넌트', count: 8, color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: '폼 컴포넌트', count: 13, color: 'bg-green-50 text-green-700 border-green-200' },
    { name: '네비게이션', count: 6, color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: '오버레이', count: 9, color: 'bg-orange-50 text-orange-700 border-orange-200' },
    { name: '데이터 표시', count: 6, color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
    { name: '고급 컴포넌트', count: 4, color: 'bg-indigo-50 text-indigo-700 border-indigo-200' }
  ];

  const tools = [
    {
      name: 'Figma',
      description: '디자인 시안 원본 소스',
      purpose: '디자인 스펙 확인 및 에셋 추출'
    },
    {
      name: 'Framelink Figma MCP 플러그인',
      description: 'Figma와 Cursor AI 연동 도구',
      purpose: 'Figma 디자인을 AI가 읽을 수 있도록 변환'
    },
    {
      name: 'Cursor AI',
      description: 'AI 기반 코드 생성 도구',
      purpose: '디자인을 기반으로 한 자동 코드 생성'
    },
    {
      name: '웹 브라우저',
      description: '실제 렌더링 결과 확인',
      purpose: '디자인과 구현 결과 비교 검증'
    }
  ];

  const qaProcess = [
    {
      week: '2주차',
      activity: 'QA 프로세스 시작',
      description: '기본 컴포넌트 QA 시작',
      responsible: 'UI 디자이너'
    },
    {
      week: '3주차',
      activity: '중간 검수',
      description: '폼 및 네비게이션 컴포넌트 검수',
      responsible: 'UI 디자이너 + 개발팀'
    },
    {
      week: '4주차',
      activity: '최종 검수',
      description: '전체 컴포넌트 최종 승인',
      responsible: 'UI 디자이너 + 프로젝트 매니저'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl mb-4">UI 스타일 반영</h1>
        <p className="text-xl text-muted-foreground">
          Figma 디자인 시안을 기반으로 한 46개 UI 컴포넌트 스타일 반영 프로젝트
        </p>
      </div>

      {/* Project Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl">프로젝트 개요</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h4>프로젝트 기간</h4>
            </div>
            <p className="text-2xl font-semibold">{projectOverview.duration}</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-green-600" />
              <h4>팀 구성</h4>
            </div>
            <p className="text-lg">{projectOverview.teamSize}</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-purple-600" />
              <h4>대상 컴포넌트</h4>
            </div>
            <p className="text-2xl font-semibold">{projectOverview.components}</p>
          </Card>
        </div>
      </section>

      {/* Component Categories */}
      <section className="space-y-6">
        <h2 className="text-2xl">컴포넌트 분류</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentCategories.map((category, index) => (
            <Card key={index} className={`p-4 border-2 ${category.color}`}>
              <div className="flex items-center justify-between mb-2">
                <h4>{category.name}</h4>
                <Badge variant="secondary">{category.count}개</Badge>
              </div>
              <p className="text-sm opacity-80">스타일 반영 대상</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Phases */}
      <section className="space-y-6">
        <h2 className="text-2xl">프로젝트 단계</h2>
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <phase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-primary">{phase.duration}</Badge>
                    <h3>Phase {phase.phase}: {phase.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        주요 작업
                      </h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-sm flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 mt-1 text-muted-foreground flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        산출물
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="text-sm flex items-center gap-2">
                            <Target className="w-3 h-3 text-green-600" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools and Technology */}
      <section className="space-y-6">
        <h2 className="text-2xl">사용 도구 및 기술</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{tool.description}</p>
                  <p className="text-sm font-medium">{tool.purpose}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* QA Process */}
      <section className="space-y-6">
        <h2 className="text-2xl">디자인 QA 프로세스</h2>
        <Card className="p-6">
          <div className="space-y-4">
            {qaProcess.map((qa, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                <Badge variant="outline">{qa.week}</Badge>
                <div className="flex-1">
                  <h4 className="mb-1">{qa.activity}</h4>
                  <p className="text-sm text-muted-foreground">{qa.description}</p>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">담당:</span> {qa.responsible}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Workflow */}
      <section className="space-y-6">
        <h2 className="text-2xl">작업 워크플로우</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Monitor className="w-6 h-6 text-blue-600" />
              <div>
                <h4>1. Figma 디자인 분석</h4>
                <p className="text-sm text-muted-foreground">Framelink Figma MCP 플러그인으로 디자인 읽기</p>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 mx-auto text-muted-foreground" />
            
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Zap className="w-6 h-6 text-green-600" />
              <div>
                <h4>2. Cursor AI 코드 생성</h4>
                <p className="text-sm text-muted-foreground">AI 기반 자동 코드 생성 및 스타일 적용</p>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 mx-auto text-muted-foreground" />
            
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
              <div>
                <h4>3. 브라우저 검증</h4>
                <p className="text-sm text-muted-foreground">실제 웹 브라우저 결과와 디자인 비교</p>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 mx-auto text-muted-foreground" />
            
            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
              <Bug className="w-6 h-6 text-orange-600" />
              <div>
                <h4>4. QA 및 수정</h4>
                <p className="text-sm text-muted-foreground">UI 디자이너 검수 및 피드백 반영</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Reference */}
      <section className="space-y-6">
        <h2 className="text-2xl">참고 자료</h2>
        <Alert>
          <BookOpen className="h-4 w-4" />
          <AlertDescription>
            작업 과정은 SK DevOcean 기술 블로그의 디자인 시스템 구축 가이드를 참고하여 진행합니다.
          </AlertDescription>
        </Alert>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="mb-2">SK DevOcean - 디자인 시스템 구축 가이드</h3>
              <p className="text-sm text-muted-foreground">
                실무에서 활용할 수 있는 디자인 시스템 구축 방법론 및 베스트 프랙티스
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              참고 문서 보기
            </Button>
          </div>
        </Card>
      </section>

      {/* Success Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl">성공 지표</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="mb-4">품질 지표</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Figma 디자인 100% 반영</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">크로스 브라우저 호환성 확보</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">반응형 디자인 완성도</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">접근성 가이드라인 준수</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="mb-4">프로젝트 지표</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm">4주 내 프로젝트 완료</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm">팀 협업 효율성 향상</span>
              </li>
              <li className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-blue-600" />
                <span className="text-sm">코드 재사용성 증대</span>
              </li>
              <li className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-blue-600" />
                <span className="text-sm">유지보수성 개선</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}