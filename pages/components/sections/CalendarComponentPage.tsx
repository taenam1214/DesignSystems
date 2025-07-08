import React, { useState } from 'react';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Separator } from '../ui/separator';
import { 
  CalendarIcon,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Star,
  Bookmark,
  Plus,
  Settings,
  ChevronDown,
  Check,
  X,
  Copy,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Eye,
  Globe,
  MousePointer,
  Accessibility
} from 'lucide-react';
import { format, addDays, subDays, startOfWeek, endOfWeek, isSameMonth } from 'date-fns';
import { ko } from 'date-fns/locale';

export function CalendarComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  const [multipleDates, setMultipleDates] = useState<Date[]>([new Date(), addDays(new Date(), 2)]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [eventDate, setEventDate] = useState<Date | undefined>();

  // 샘플 이벤트 데이터
  const events = [
    { date: new Date(), title: '팀 미팅', type: 'meeting' },
    { date: addDays(new Date(), 1), title: '프로젝트 마감', type: 'deadline' },
    { date: addDays(new Date(), 3), title: '디자인 리뷰', type: 'review' },
    { date: addDays(new Date(), 5), title: '클라이언트 발표', type: 'presentation' },
  ];

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

  const features = [
    {
      title: '다양한 선택 모드',
      description: '단일, 다중, 범위 선택을 지원하는 유연한 날짜 선택',
      icon: '📅'
    },
    {
      title: '접근성 준수',
      description: 'ARIA 레이블과 키보드 네비게이션을 완벽 지원',
      icon: '♿'
    },
    {
      title: '사용자 정의 가능',
      description: '모든 스타일과 동작을 프로젝트에 맞게 조정 가능',
      icon: '🎨'
    },
    {
      title: '국제화 지원',
      description: 'date-fns를 통한 다국어 지원 (한국어 포함)',
      icon: '🌐'
    },
    {
      title: '이벤트 표시',
      description: '특정 날짜에 이벤트나 상태를 시각적으로 표시',
      icon: '📍'
    },
    {
      title: '날짜 제한',
      description: '선택 가능한 날짜를 유연하게 제어',
      icon: '🚫'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <CalendarDays className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Calendar</h1>
            <p className="text-muted-foreground">
              날짜 선택을 위한 직관적이고 접근성이 뛰어난 달력 컴포넌트입니다. 단일 날짜, 날짜 범위, 여러 날짜 선택을 지원하며 다양한 커스터마이징이 가능합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            7가지 예제
          </Badge>
          <Badge variant="outline">날짜 선택</Badge>
          <Badge variant="outline">범위 선택</Badge>
          <Badge variant="outline">다중 선택</Badge>
          <Badge variant="outline">이벤트 표시</Badge>
          <Badge variant="outline">접근성</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="modes">모드 및 패턴</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>기본 달력</CardTitle>
              <CardDescription>
                가장 기본적인 달력 컴포넌트입니다. 단일 날짜 선택이 가능합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-sm">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
                {selectedDate && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-md">
                    <p className="text-sm">
                      <strong>선택된 날짜:</strong> {format(selectedDate, 'PPP', { locale: ko })}
                    </p>
                  </div>
                )}
              </div>
              <CodeBlock
                code={`import { Calendar } from "./components/ui/calendar"
import { useState } from "react"

function BasicCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}
                codeKey="basic-calendar"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>팝오버와 함께 사용하는 날짜 선택기</CardTitle>
              <CardDescription>
                팝오버와 함께 사용하는 날짜 선택기입니다. 폼 입력 필드에 통합하기 좋습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 max-w-sm">
                <div className="space-y-2">
                  <Label htmlFor="date-picker">일정 날짜</Label>
                  <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                        id="date-picker"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {eventDate ? format(eventDate, 'PPP', { locale: ko }) : '날짜를 선택하세요'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={eventDate}
                        onSelect={(date) => {
                          setEventDate(date);
                          setShowDatePicker(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {eventDate && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5 text-primary" />
                        <div>
                          <h4 className="font-medium">선택된 일정</h4>
                          <p className="text-sm text-muted-foreground">
                            {format(eventDate, 'PPP', { locale: ko })}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
              <CodeBlock
                code={`import { Calendar } from "./components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover"
import { Button } from "./components/ui/button"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

function DatePickerWithPopover() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP', { locale: ko }) : '날짜를 선택하세요'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}`}
                codeKey="date-picker-popover"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Modes Tab */}
        <TabsContent value="modes" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>날짜 범위 선택</CardTitle>
              <CardDescription>
                날짜 범위를 선택할 수 있는 달력입니다. 여행 예약, 기간 설정 등에 유용합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-md">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
                  numberOfMonths={2}
                  className="rounded-md border"
                />
                {(dateRange.from || dateRange.to) && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-md">
                    <div className="space-y-1 text-sm">
                      {dateRange.from && (
                        <p><strong>시작 날짜:</strong> {format(dateRange.from, 'PPP', { locale: ko })}</p>
                      )}
                      {dateRange.to && (
                        <p><strong>종료 날짜:</strong> {format(dateRange.to, 'PPP', { locale: ko })}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <CodeBlock
                code={`import { Calendar } from "./components/ui/calendar"
import { useState } from "react"

function DateRangePicker() {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-md border"
    />
  )
}`}
                codeKey="date-range-picker"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>다중 날짜 선택</CardTitle>
              <CardDescription>
                여러 날짜를 동시에 선택할 수 있는 달력입니다. 휴가 계획, 일정 관리 등에 사용됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-sm">
                <Calendar
                  mode="multiple"
                  selected={multipleDates}
                  onSelect={(dates) => setMultipleDates(dates || [])}
                  className="rounded-md border"
                />
                {multipleDates.length > 0 && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-md">
                    <p className="text-sm font-medium mb-2">선택된 날짜들:</p>
                    <div className="space-y-1">
                      {multipleDates
                        .sort((a, b) => a.getTime() - b.getTime())
                        .map((date, index) => (
                          <div key={index} className="text-sm flex items-center justify-between">
                            <span>{format(date, 'PPP', { locale: ko })}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setMultipleDates(dates => dates.filter(d => d !== date))}
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
              <CodeBlock
                code={`import { Calendar } from "./components/ui/calendar"
import { useState } from "react"

function MultipleDatePicker() {
  const [dates, setDates] = useState<Date[]>([])

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  )
}`}
                codeKey="multiple-date-picker"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>이벤트가 표시된 달력</CardTitle>
              <CardDescription>
                이벤트 표시가 가능한 달력입니다. 일정 관리 앱이나 예약 시스템에 사용됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-md">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  modifiers={{
                    hasEvent: events.map(event => event.date),
                    meeting: events.filter(e => e.type === 'meeting').map(e => e.date),
                    deadline: events.filter(e => e.type === 'deadline').map(e => e.date),
                  }}
                  modifiersStyles={{
                    hasEvent: { 
                      fontWeight: 'bold',
                      color: 'var(--primary)',
                      position: 'relative'
                    },
                  }}
                  modifiersClassNames={{
                    meeting: 'bg-blue-100 text-blue-800',
                    deadline: 'bg-red-100 text-red-800',
                  }}
                />
                
                <div className="mt-4 space-y-3">
                  <h4 className="font-medium">예정된 이벤트</h4>
                  <div className="space-y-2">
                    {events.map((event, index) => (
                      <Card key={index} className="p-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            event.type === 'meeting' ? 'bg-blue-500' :
                            event.type === 'deadline' ? 'bg-red-500' :
                            event.type === 'review' ? 'bg-green-500' :
                            'bg-purple-500'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{event.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {format(event.date, 'M월 d일 (EEE)', { locale: ko })}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {event.type === 'meeting' ? '미팅' :
                             event.type === 'deadline' ? '마감' :
                             event.type === 'review' ? '리뷰' : '발표'}
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              <CodeBlock
                code={`import { Calendar } from "./components/ui/calendar"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

function CalendarWithEvents() {
  const events = [
    { date: new Date(), title: '팀 미팅', type: 'meeting' },
    { date: addDays(new Date(), 1), title: '프로젝트 마감', type: 'deadline' },
  ]

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      modifiers={{
        hasEvent: events.map(event => event.date),
        meeting: events.filter(e => e.type === 'meeting').map(e => e.date),
      }}
      modifiersClassNames={{
        meeting: 'bg-blue-100 text-blue-800',
        hasEvent: 'font-bold',
      }}
    />
  )
}`}
                codeKey="calendar-with-events"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>예약 시스템 달력</CardTitle>
              <CardDescription>
                예약 시스템을 위한 실용적인 달력 예제입니다. 가능한 날짜와 불가능한 날짜를 시각적으로 구분합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-md">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5" />
                      회의실 예약
                    </CardTitle>
                    <CardDescription>
                      원하는 날짜를 선택하여 회의실을 예약하세요.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={[
                        { before: new Date() },
                        { dayOfWeek: [0] }, // 일요일 비활성화
                        // 이미 예약된 날짜들
                        addDays(new Date(), 3),
                        addDays(new Date(), 7),
                        addDays(new Date(), 12),
                      ]}
                      modifiers={{
                        booked: [
                          addDays(new Date(), 3),
                          addDays(new Date(), 7),
                          addDays(new Date(), 12),
                        ],
                        available: [
                          addDays(new Date(), 1),
                          addDays(new Date(), 2),
                          addDays(new Date(), 4),
                          addDays(new Date(), 5),
                        ]
                      }}
                      modifiersClassNames={{
                        booked: 'bg-red-100 text-red-800 line-through',
                        available: 'bg-green-100 text-green-800',
                      }}
                      className="rounded-md border"
                    />
                    
                    {selectedDate && (
                      <div className="mt-4 space-y-3">
                        <Separator />
                        <div>
                          <h4 className="font-medium mb-2">예약 정보</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                              <span>날짜:</span>
                              <span>{format(selectedDate, 'PPP', { locale: ko })}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>시간:</span>
                              <span>09:00 - 18:00</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>회의실:</span>
                              <span>A동 2층 회의실</span>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full">예약하기</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                    <span>예약 가능</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-100 border border-red-300 rounded"></div>
                    <span>예약 완료</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted border border-border rounded"></div>
                    <span>선택 불가</span>
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
                효과적인 Calendar 사용을 위한 모범 사례
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
                    <li>• 명확한 선택 상태 시각적 표시</li>
                    <li>• 적절한 기본값 설정 (오늘 날짜 등)</li>
                    <li>• 현지화된 날짜 형식 사용</li>
                    <li>• 키보드 탐색 지원</li>
                    <li>• 선택 불가능한 날짜 명확히 표시</li>
                    <li>• 적절한 크기와 여백 제공</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 작은 날짜 버튼</li>
                    <li>• 불분명한 선택 상태</li>
                    <li>• 예상치 못한 날짜 제한</li>
                    <li>• 일관성 없는 날짜 형식</li>
                    <li>• 접근성 무시</li>
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
                모든 사용자가 Calendar를 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>달력으로 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">화살표</kbd>
                      <span>날짜 간 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>날짜 선택</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Escape</kbd>
                      <span>달력 닫기</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 현재 선택된 날짜 명확히 안내</li>
                    <li>• 선택 불가능한 날짜 이유 설명</li>
                    <li>• 달력 탐색 방법 안내</li>
                    <li>• 적절한 ARIA 레이블 제공</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Calendar 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 날짜나 날짜 범위 선택</li>
                    <li>• 예약 시스템</li>
                    <li>• 이벤트 생성</li>
                    <li>• 일정 관리</li>
                    <li>• 생년월일 입력</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Input:</strong> 간단한 날짜 입력</li>
                    <li>• <strong>Select:</strong> 제한된 날짜 옵션</li>
                    <li>• <strong>Popover:</strong> 공간 절약형 달력</li>
                    <li>• <strong>Dialog:</strong> 복잡한 날짜 설정</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 시간만 선택하는 경우</li>
                    <li>• 매우 넓은 날짜 범위</li>
                    <li>• 년도나 월만 선택</li>
                    <li>• 상대적 날짜 선택</li>
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
                Calendar 컴포넌트의 주요 속성과 설정 옵션
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                      <td className="p-2 font-mono">mode</td>
                      <td className="p-2">"single" | "multiple" | "range"</td>
                      <td className="p-2">"single"</td>
                      <td className="p-2">날짜 선택 모드</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">selected</td>
                      <td className="p-2">Date | Date[] | DateRange</td>
                      <td className="p-2">-</td>
                      <td className="p-2">선택된 날짜(들)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onSelect</td>
                      <td className="p-2">function</td>
                      <td className="p-2">-</td>
                      <td className="p-2">날짜 선택 시 호출되는 함수</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">Date[] | DateRange | function</td>
                      <td className="p-2">-</td>
                      <td className="p-2">비활성화할 날짜들</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">numberOfMonths</td>
                      <td className="p-2">number</td>
                      <td className="p-2">1</td>
                      <td className="p-2">표시할 월의 개수</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">modifiers</td>
                      <td className="p-2">object</td>
                      <td className="p-2">-</td>
                      <td className="p-2">날짜에 적용할 수정자</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">modifiersClassNames</td>
                      <td className="p-2">object</td>
                      <td className="p-2">-</td>
                      <td className="p-2">수정자에 대한 CSS 클래스</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">initialFocus</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">마운트 시 포커스 여부</td>
                    </tr>
                  </tbody>
                </table>
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
                code={`import { Calendar } from "./components/ui/calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="날짜 범위 선택"
                code={`export function Example() {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
    />
  );
}`}
                codeKey="range-usage"
              />

              <CodeBlock
                title="비활성화된 날짜"
                code={`export function Example() {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={[
        // 과거 날짜 비활성화
        { before: new Date() },
        // 주말 비활성화
        { dayOfWeek: [0, 6] },
        // 특정 날짜 비활성화
        new Date(2024, 5, 15),
      ]}
    />
  );
}`}
                codeKey="disabled-dates"
              />

              <CodeBlock
                title="이벤트가 있는 달력"
                code={`export function Example() {
  const events = [
    { date: new Date(), type: 'meeting' },
    { date: addDays(new Date(), 1), type: 'deadline' },
  ];

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      modifiers={{
        hasEvent: events.map(event => event.date),
        meeting: events.filter(e => e.type === 'meeting').map(e => e.date),
      }}
      modifiersClassNames={{
        meeting: 'bg-blue-100 text-blue-800',
        hasEvent: 'font-bold',
      }}
    />
  );
}`}
                codeKey="calendar-with-events-code"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
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