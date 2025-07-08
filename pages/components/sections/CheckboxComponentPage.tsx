import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { 
  CheckSquare,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Settings,
  Shield,
  Bell,
  Mail,
  User,
  Lock,
  Eye,
  Download,
  Bookmark,
  Star,
  Heart,
  Calendar,
  MapPin,
  Clock,
  File,
  Globe,
  Smartphone,
  Monitor,
  Headphones
} from 'lucide-react';

export function CheckboxComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [preferences, setPreferences] = useState({
    marketing: false,
    product: true,
    security: true,
    newsletter: false
  });

  const [permissions, setPermissions] = useState({
    read: true,
    write: false,
    admin: false
  });

  const [filters, setFilters] = useState({
    inStock: true,
    onSale: false,
    freeShipping: true,
    newArrival: false
  });

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
            <CheckSquare className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Checkbox</h1>
            <p className="text-muted-foreground">
              사용자가 하나 이상의 옵션을 선택할 수 있는 입력 컴포넌트입니다. 다중 선택, 이진 선택, 개별 기능 토글에 사용됩니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            다양한 상태
          </Badge>
          <Badge variant="outline">폼 입력</Badge>
          <Badge variant="outline">다중 선택</Badge>
          <Badge variant="outline">접근성</Badge>
          <Badge variant="outline">키보드 탐색</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="patterns">패턴 및 그룹</TabsTrigger>
          <TabsTrigger value="usage">사용법</TabsTrigger>
          <TabsTrigger value="code">구현</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>기본 예제</CardTitle>
              <CardDescription>
                가장 일반적인 Checkbox 사용 사례와 조합
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">기본 체크박스</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">이용약관에 동의합니다</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">뉴스레터 구독</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">이 기기에서 로그인 상태 유지</Label>
                  </div>
                </div>
                <CodeBlock
                  code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">이용약관에 동의합니다</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="newsletter" defaultChecked />
  <Label htmlFor="newsletter">뉴스레터 구독</Label>
</div>`}
                  codeKey="basic-examples"
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">체크박스 상태</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="unchecked" />
                    <Label htmlFor="unchecked">선택되지 않음 (기본값)</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checked" defaultChecked />
                    <Label htmlFor="checked">선택됨</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-unchecked" disabled />
                    <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
                      비활성화 (선택되지 않음)
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-checked" disabled defaultChecked />
                    <Label htmlFor="disabled-checked" className="text-muted-foreground">
                      비활성화 (선택됨)
                    </Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">설명이 포함된 체크박스</h4>
                <div className="space-y-6 max-w-lg">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="analytics" className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="analytics">사용자 분석 수집 활성화</Label>
                      <p className="text-sm text-muted-foreground">
                        익명의 사용 데이터를 공유하여 제품 개선에 도움을 주세요.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox id="location" className="mt-1" defaultChecked />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="location">위치 서비스</Label>
                      <p className="text-sm text-muted-foreground">
                        개인화된 콘텐츠와 기능을 위해 앱이 위치에 접근하도록 허용합니다.
                      </p>
                    </div>
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
              <CardTitle>알림 설정 그룹</CardTitle>
              <CardDescription>
                관련된 체크박스들을 그룹으로 묶어 사용자 설정을 관리합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, marketing: checked as boolean }))
                    }
                  />
                  <Label htmlFor="marketing" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    마케팅 이메일
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="product"
                    checked={preferences.product}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, product: checked as boolean }))
                    }
                  />
                  <Label htmlFor="product" className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    제품 업데이트
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="security"
                    checked={preferences.security}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, security: checked as boolean }))
                    }
                  />
                  <Label htmlFor="security" className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    보안 알림
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter-pref"
                    checked={preferences.newsletter}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, newsletter: checked as boolean }))
                    }
                  />
                  <Label htmlFor="newsletter-pref" className="flex items-center gap-2">
                    <File className="w-4 h-4" />
                    주간 뉴스레터
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>권한 관리</CardTitle>
              <CardDescription>
                계층적 체크박스로 권한과 접근 제어를 관리합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="read"
                      checked={permissions.read}
                      onCheckedChange={(checked) => 
                        setPermissions(prev => ({ ...prev, read: checked as boolean }))
                      }
                    />
                    <Label htmlFor="read" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      읽기 권한
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-6">
                    <Checkbox 
                      id="write"
                      checked={permissions.write}
                      disabled={!permissions.read}
                      onCheckedChange={(checked) => 
                        setPermissions(prev => ({ ...prev, write: checked as boolean }))
                      }
                    />
                    <Label htmlFor="write" className={`flex items-center gap-2 ${!permissions.read ? 'text-muted-foreground' : ''}`}>
                      <File className="w-4 h-4" />
                      쓰기 권한
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-12">
                    <Checkbox 
                      id="admin"
                      checked={permissions.admin}
                      disabled={!permissions.write}
                      onCheckedChange={(checked) => 
                        setPermissions(prev => ({ ...prev, admin: checked as boolean }))
                      }
                    />
                    <Label htmlFor="admin" className={`flex items-center gap-2 ${!permissions.write ? 'text-muted-foreground' : ''}`}>
                      <Lock className="w-4 h-4" />
                      관리자 권한
                    </Label>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    관리자 권한은 읽기 및 쓰기 권한이 모두 필요합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>필터 및 검색</CardTitle>
              <CardDescription>
                제품 필터링이나 검색 옵션에서 사용되는 체크박스 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md space-y-4">
                <h4 className="font-medium">상품 필터</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="inStock"
                        checked={filters.inStock}
                        onCheckedChange={(checked) => 
                          setFilters(prev => ({ ...prev, inStock: checked as boolean }))
                        }
                      />
                      <Label htmlFor="inStock">재고 있음</Label>
                    </div>
                    <Badge variant="secondary">234</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="onSale"
                        checked={filters.onSale}
                        onCheckedChange={(checked) => 
                          setFilters(prev => ({ ...prev, onSale: checked as boolean }))
                        }
                      />
                      <Label htmlFor="onSale">세일 중</Label>
                    </div>
                    <Badge variant="destructive">45</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="freeShipping"
                        checked={filters.freeShipping}
                        onCheckedChange={(checked) => 
                          setFilters(prev => ({ ...prev, freeShipping: checked as boolean }))
                        }
                      />
                      <Label htmlFor="freeShipping">무료 배송</Label>
                    </div>
                    <Badge variant="outline">156</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newArrival"
                        checked={filters.newArrival}
                        onCheckedChange={(checked) => 
                          setFilters(prev => ({ ...prev, newArrival: checked as boolean }))
                        }
                      />
                      <Label htmlFor="newArrival">신상품</Label>
                    </div>
                    <Badge variant="default">12</Badge>
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
                효과적인 Checkbox 사용을 위한 모범 사례
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
                    <li>• 관련된 옵션들을 논리적으로 그룹화</li>
                    <li>• 필수 선택사항과 선택사항 구분</li>
                    <li>• 적절한 기본값 설정</li>
                    <li>• 라벨과 체크박스 모두 클릭 가능하게 구현</li>
                    <li>• 충분한 터치 타겟 크기 제공</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 이중 부정문 사용</li>
                    <li>• 너무 많은 옵션을 한 번에 제시</li>
                    <li>• 모호한 라벨</li>
                    <li>• 상호 배타적인 옵션에 체크박스 사용</li>
                    <li>• 단일 체크박스로 복잡한 선택 표현</li>
                    <li>• 접근성 속성 누락</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Checkbox를 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 탐색</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>체크박스로 포커스 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                      <span>체크박스 토글</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 체크박스와 라벨을 적절히 연결 (htmlFor와 id)</li>
                    <li>• 그룹의 목적을 설명하는 fieldset과 legend 사용</li>
                    <li>• 현재 선택 상태를 명확히 전달</li>
                    <li>• 필수 필드 표시 (required 속성)</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Checkbox 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 다중 선택이 가능한 목록</li>
                    <li>• 선택사항 동의</li>
                    <li>• 설정 옵션 토글</li>
                    <li>• 필터링 옵션</li>
                    <li>• 권한 설정</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 컴포넌트</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Radio:</strong> 단일 선택용</li>
                    <li>• <strong>Switch:</strong> 즉시 적용되는 토글</li>
                    <li>• <strong>Select:</strong> 많은 옵션 중 선택</li>
                    <li>• <strong>Toggle Group:</strong> 버튼 형태 선택</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 단일 선택 (Radio 사용)</li>
                    <li>• 즉시 실행되는 액션</li>
                    <li>• 복잡한 조건부 로직</li>
                    <li>• 주요 액션 버튼 대체</li>
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
                Checkbox 컴포넌트의 속성과 설정 옵션
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
                      <td className="p-2 font-mono">checked</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">-</td>
                      <td className="p-2">제어된 체크 상태</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultChecked</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">비제어 컴포넌트의 초기 체크 상태</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">체크박스 비활성화 여부</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">required</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">폼 유효성 검사를 위한 필수 표시</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onCheckedChange</td>
                      <td className="p-2">(checked: boolean) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">체크 상태 변경 시 호출되는 함수</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">id</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">체크박스의 고유 식별자 (라벨과 연결)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">name</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">폼 제출을 위한 name 속성</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">value</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">폼 제출을 위한 value 속성</td>
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
                code={`import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`export function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">이용약관에 동의합니다</Label>
    </div>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="제어된 체크박스"
                code={`import { useState } from "react";

export function Example() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="controlled"
        checked={isChecked}
        onCheckedChange={setIsChecked}
      />
      <Label htmlFor="controlled">제어된 체크박스</Label>
    </div>
  );
}`}
                codeKey="controlled-checkbox"
              />

              <CodeBlock
                title="체크박스 그룹"
                code={`export function Example() {
  const [selections, setSelections] = useState({
    option1: false,
    option2: true,
    option3: false
  });

  return (
    <div className="space-y-3">
      {Object.entries(selections).map(([key, checked]) => (
        <div key={key} className="flex items-center space-x-2">
          <Checkbox 
            id={key}
            checked={checked}
            onCheckedChange={(newChecked) => 
              setSelections(prev => ({ 
                ...prev, 
                [key]: newChecked as boolean 
              }))
            }
          />
          <Label htmlFor={key}>옵션 {key.slice(-1)}</Label>
        </div>
      ))}
    </div>
  );
}`}
                codeKey="checkbox-group"
              />

              <CodeBlock
                title="설명이 포함된 체크박스"
                code={`export function Example() {
  return (
    <div className="flex items-start space-x-3">
      <Checkbox id="analytics" className="mt-1" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="analytics">사용자 분석 수집 활성화</Label>
        <p className="text-sm text-muted-foreground">
          익명의 사용 데이터를 공유하여 제품 개선에 도움을 주세요.
        </p>
      </div>
    </div>
  );
}`}
                codeKey="checkbox-with-description"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}