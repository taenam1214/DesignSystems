import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Type, Copy, Check, Download, Palette, AlignLeft, Bold, Italic } from 'lucide-react';
import { useState } from 'react';

export function TypographySection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const typeScale = [
    {
      name: 'H1',
      size: 'text-4xl',
      pixels: '36px',
      usage: '페이지 메인 제목',
      sample: '메인 페이지 제목'
    },
    {
      name: 'H2',
      size: 'text-3xl',
      pixels: '30px',
      usage: '주요 섹션 제목',
      sample: '섹션 제목'
    },
    {
      name: 'H3',
      size: 'text-2xl',
      pixels: '24px',
      usage: '하위 섹션 제목',
      sample: '하위 섹션 제목'
    },
    {
      name: 'H4',
      size: 'text-xl',
      pixels: '20px',
      usage: '컴포넌트 제목',
      sample: '컴포넌트 제목'
    },
    {
      name: 'H5',
      size: 'text-lg',
      pixels: '18px',
      usage: '카드 제목',
      sample: '카드 제목'
    },
    {
      name: 'H6',
      size: 'text-base',
      pixels: '16px',
      usage: '소제목',
      sample: '소제목'
    },
    {
      name: 'Body Large',
      size: 'text-lg',
      pixels: '18px',
      usage: '큰 본문 텍스트',
      sample: '이것은 큰 본문 텍스트의 예시입니다. 중요한 정보나 인트로 텍스트에 사용됩니다.'
    },
    {
      name: 'Body',
      size: 'text-base',
      pixels: '16px',
      usage: '일반 본문 텍스트',
      sample: '이것은 일반적인 본문 텍스트입니다. 대부분의 콘텐츠에서 사용되는 기본 크기입니다.'
    },
    {
      name: 'Body Small',
      size: 'text-sm',
      pixels: '14px',
      usage: '보조 텍스트, 캡션',
      sample: '이것은 작은 본문 텍스트입니다. 캡션이나 보조 정보에 사용됩니다.'
    },
    {
      name: 'Caption',
      size: 'text-xs',
      pixels: '12px',
      usage: '메타데이터, 라벨',
      sample: '작은 캡션 텍스트'
    }
  ];

  const fontWeights = [
    { name: 'Normal', class: 'font-normal', weight: '400', usage: '본문 텍스트, 일반 콘텐츠' },
    { name: 'Medium', class: 'font-medium', weight: '500', usage: '제목, 강조 텍스트' },
    { name: 'Semibold', class: 'font-semibold', weight: '600', usage: '중요한 제목' },
    { name: 'Bold', class: 'font-bold', weight: '700', usage: '매우 중요한 텍스트' }
  ];

  const lineHeights = [
    { name: 'Tight', class: 'leading-tight', value: '1.25', usage: '큰 제목' },
    { name: 'Normal', class: 'leading-normal', value: '1.5', usage: '일반 텍스트' },
    { name: 'Relaxed', class: 'leading-relaxed', value: '1.625', usage: '긴 텍스트' },
    { name: 'Loose', class: 'leading-loose', value: '2', usage: '시나 인용문' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Type className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">타이포그래피</h1>
            <p className="text-muted-foreground">
              일관된 텍스트 계층 구조와 가독성을 위한 타이포그래피 시스템입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Type className="w-3 h-3" />
            10단계 크기
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Bold className="w-3 h-3" />
            4가지 가중치
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <AlignLeft className="w-3 h-3" />
            4가지 행간
          </Badge>
          <Badge variant="outline">반응형</Badge>
          <Badge variant="outline">웹 폰트</Badge>
        </div>
      </div>

      <Tabs defaultValue="scale" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="scale">크기</TabsTrigger>
          <TabsTrigger value="weights">가중치</TabsTrigger>
          <TabsTrigger value="spacing">간격</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
        </TabsList>

        {/* Scale Tab */}
        <TabsContent value="scale" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="w-5 h-5" />
                타이포그래피 스케일
              </CardTitle>
              <CardDescription>
                시각적 계층 구조를 만들기 위한 일관된 크기 시스템입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {typeScale.map((scale) => (
                  <div key={scale.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{scale.name}</div>
                        <div className="text-xs text-muted-foreground">{scale.pixels}</div>
                        <div className="text-xs font-mono text-muted-foreground">{scale.size}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(scale.size, scale.name)}
                      >
                        {copiedText === scale.name ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className={`${scale.size} leading-normal`}>
                      {scale.sample}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {scale.usage}
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>반응형 타이포그래피</CardTitle>
              <CardDescription>
                다양한 화면 크기에서 적절한 가독성을 보장하는 반응형 크기 조정입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">모바일 (&lt; 768px)</h4>
                  <div className="space-y-2 text-sm">
                    <div>H1: 28px (text-3xl)</div>
                    <div>H2: 24px (text-2xl)</div>
                    <div>H3: 20px (text-xl)</div>
                    <div>Body: 16px (text-base)</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">태블릿 (768px+)</h4>
                  <div className="space-y-2 text-sm">
                    <div>H1: 32px (md:text-4xl)</div>
                    <div>H2: 28px (md:text-3xl)</div>
                    <div>H3: 24px (md:text-2xl)</div>
                    <div>Body: 16px (text-base)</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">데스크톱 (1024px+)</h4>
                  <div className="space-y-2 text-sm">
                    <div>H1: 36px (lg:text-4xl)</div>
                    <div>H2: 30px (lg:text-3xl)</div>
                    <div>H3: 24px (lg:text-2xl)</div>
                    <div>Body: 16px (text-base)</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <h5 className="font-medium mb-2">반응형 클래스 예제</h5>
                <pre className="text-sm">
                  <code>{`<h1 className="text-2xl md:text-3xl lg:text-4xl">
  반응형 제목
</h1>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Weights Tab */}
        <TabsContent value="weights" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bold className="w-5 h-5" />
                폰트 가중치
              </CardTitle>
              <CardDescription>
                텍스트 강조와 계층 구조를 위한 폰트 가중치 옵션입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {fontWeights.map((weight) => (
                  <div key={weight.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{weight.name}</div>
                        <div className="text-xs text-muted-foreground">{weight.weight}</div>
                        <div className="text-xs font-mono text-muted-foreground">{weight.class}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(weight.class, `weight-${weight.name}`)}
                      >
                        {copiedText === `weight-${weight.name}` ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className={`text-lg ${weight.class}`}>
                      빠른 갈색 여우가 게으른 개를 뛰어넘습니다
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {weight.usage}
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>가중치 조합</CardTitle>
              <CardDescription>
                크기와 가중치를 조합한 일반적인 사용 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium">제목 스타일</h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-semibold">주요 페이지 제목 (H1)</div>
                    <div className="text-2xl font-semibold">섹션 제목 (H2)</div>
                    <div className="text-xl font-medium">하위 섹션 제목 (H3)</div>
                    <div className="text-lg font-medium">컴포넌트 제목 (H4)</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">본문 스타일</h4>
                  <div className="space-y-2">
                    <div className="text-lg font-normal">
                      큰 본문 텍스트 - 인트로나 중요한 정보에 사용됩니다.
                    </div>
                    <div className="text-base font-normal">
                      일반 본문 텍스트 - 대부분의 콘텐츠에서 사용되는 기본 스타일입니다.
                    </div>
                    <div className="text-sm font-normal">
                      작은 본문 텍스트 - 보조 정보나 캡션에 사용됩니다.
                    </div>
                    <div className="text-xs font-medium">
                      라벨 텍스트 - 폼 필드나 메타데이터에 사용됩니다.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Tab */}
        <TabsContent value="spacing" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlignLeft className="w-5 h-5" />
                행간 및 간격
              </CardTitle>
              <CardDescription>
                가독성을 향상시키는 텍스트 간격 설정입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {lineHeights.map((lineHeight) => (
                  <div key={lineHeight.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-20 text-sm font-medium">{lineHeight.name}</div>
                        <div className="text-xs text-muted-foreground">{lineHeight.value}</div>
                        <div className="text-xs font-mono text-muted-foreground">{lineHeight.class}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => copyToClipboard(lineHeight.class, `lineheight-${lineHeight.name}`)}
                      >
                        {copiedText === `lineheight-${lineHeight.name}` ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className={`text-base ${lineHeight.class} max-w-2xl`}>
                      타이포그래피는 디자인에서 매우 중요한 요소입니다. 
                      적절한 행간은 텍스트의 가독성을 크게 향상시키며, 
                      사용자가 콘텐츠를 쉽게 읽고 이해할 수 있도록 도와줍니다. 
                      이 예제는 다양한 행간 설정이 텍스트에 미치는 영향을 보여줍니다.
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {lineHeight.usage}
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>텍스트 간격</CardTitle>
              <CardDescription>
                문단, 목록, 제목 간의 적절한 간격 설정입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">수직 간격</h5>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-medium mb-1">제목 간격</div>
                      <div className="text-muted-foreground">H1 하단: space-y-6 (24px)</div>
                      <div className="text-muted-foreground">H2 하단: space-y-4 (16px)</div>
                      <div className="text-muted-foreground">H3 하단: space-y-3 (12px)</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">문단 간격</div>
                      <div className="text-muted-foreground">문단 간: space-y-4 (16px)</div>
                      <div className="text-muted-foreground">목록 항목: space-y-2 (8px)</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">예제</h5>
                  <div className="border rounded-lg p-4 space-y-4">
                    <h3 className="text-xl font-semibold">섹션 제목</h3>
                    <p className="text-base">
                      첫 번째 문단입니다. 이 문단은 제목 아래에 적절한 간격을 두고 배치됩니다.
                    </p>
                    <p className="text-base">
                      두 번째 문단입니다. 문단 간의 간격이 가독성을 향상시킵니다.
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>목록 항목 1</li>
                      <li>목록 항목 2</li>
                      <li>목록 항목 3</li>
                    </ul>
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
              <CardTitle>타이포그래피 가이드라인</CardTitle>
              <CardDescription>
                효과적인 타이포그래피 사용을 위한 모범 사례입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium text-green-700">권장사항</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 일관된 타이포그래피 스케일 사용</li>
                    <li>• 명확한 시각적 계층 구조 만들기</li>
                    <li>• 충분한 색상 대비 확보</li>
                    <li>• 적절한 행간으로 가독성 향상</li>
                    <li>• 반응형 크기 조정 고려</li>
                    <li>• 접근성 표준 준수</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium text-red-700">피해야 할 것</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 폰트 크기 사용</li>
                    <li>• 불필요한 폰트 가중치 남용</li>
                    <li>• 너무 좁은 행간</li>
                    <li>• 낮은 색상 대비</li>
                    <li>• 일관성 없는 간격</li>
                    <li>• 모바일에서 너무 작은 텍스트</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>실제 사용 예제</CardTitle>
              <CardDescription>
                실제 UI에서 타이포그래피를 적용한 예제입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-4">카드 컴포넌트</h5>
                  <div className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-semibold">카드 제목</h3>
                    <p className="text-muted-foreground">
                      카드 설명 텍스트입니다. 보조 색상을 사용하여 계층 구조를 만듭니다.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">메타데이터</div>
                      <div className="text-xs text-muted-foreground">작성일: 2024년 1월 15일</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-4">폼 컴포넌트</h5>
                  <div className="border rounded-lg p-6 space-y-4">
                    <div className="space-y-2">
                      <label className="text-base font-medium">이메일 주소</label>
                      <div className="text-sm text-muted-foreground">
                        로그인에 사용할 이메일 주소를 입력하세요
                      </div>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border rounded-md text-base"
                        placeholder="이메일을 입력하세요"
                      />
                    </div>
                    <div className="text-xs text-red-600">
                      올바른 이메일 형식을 입력해주세요
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-4">네비게이션</h5>
                  <div className="border rounded-lg p-4">
                    <nav className="flex space-x-6">
                      <a href="#" className="text-base font-medium text-primary">홈</a>
                      <a href="#" className="text-base text-muted-foreground hover:text-foreground">제품</a>
                      <a href="#" className="text-base text-muted-foreground hover:text-foreground">회사소개</a>
                      <a href="#" className="text-base text-muted-foreground hover:text-foreground">문의</a>
                    </nav>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성 고려사항</CardTitle>
              <CardDescription>
                모든 사용자가 콘텐츠를 읽을 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="font-medium">최소 요구사항</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>본문 텍스트 최소 16px (text-base)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>충분한 색상 대비 (4.5:1 이상)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>터치 타겟 최소 44px</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>200% 확대 지원</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-medium">권장사항</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>행간 1.5 이상 사용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>문단 간격 충분히 확보</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>의미론적 HTML 요소 사용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>색상만으로 정보 전달 금지</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}