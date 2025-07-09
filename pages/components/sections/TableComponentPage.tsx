import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../ui/table';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Checkbox } from '../ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
  Grid3X3,
  Copy,
  Check,
  CheckCircle,
  AlertTriangle,
  Info,
  MoreHorizontal,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Filter,
  Search,
  Download,
  Upload,
  Edit,
  Trash2,
  Eye,
  Star,
  Heart,
  MessageSquare,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  User,
  Users,
  Building,
  Briefcase,
  CreditCard,
  Package,
  Truck,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Award,
  Trophy,
  Flag,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Link,
  Share2,
  FileText,
  File,
  Folder,
  Image,
  Video,
  Music,
  Archive,
  Settings,
  Shield,
  Lock,
  Unlock,
  Key,
  Database,
  Server,
  Cloud,
  Wifi,
  Battery,
  Zap,
  Sun,
  Moon,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  Camera,
  Mic,
  Volume2,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Home,
  Coffee,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Gift,
  Sparkles,
  Crown,
  Flame,
  Droplet,
  Wind,
  Snowflake,
  Rainbow,
  Sunrise,
  Sunset,
  Navigation,
  Compass,
  Map,
  Route,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  RefreshCw,
  Loader2,
  AlertCircle,
  Palette
} from 'lucide-react';

export function TableComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

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

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(['1', '2', '3', '4', '5']);
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
    }
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Sample data
  const sampleEmployees = [
    { id: '1', name: '김민수', email: 'kim.minsu@company.com', role: '개발자', department: '엔지니어링', salary: '₩5,500,000', status: '활성' },
    { id: '2', name: '이수진', email: 'lee.sujin@company.com', role: '디자이너', department: '디자인', salary: '₩4,800,000', status: '활성' },
    { id: '3', name: '박철민', email: 'park.cheolmin@company.com', role: 'PM', department: '프로덕트', salary: '₩6,200,000', status: '활성' },
    { id: '4', name: '정미영', email: 'jung.miyoung@company.com', role: '마케터', department: '마케팅', salary: '₩4,200,000', status: '휴가' },
    { id: '5', name: '최동현', email: 'choi.donghyun@company.com', role: '개발자', department: '엔지니어링', salary: '₩5,800,000', status: '활성' }
  ];

  const sampleOrders = [
    { id: 'ORD-001', customer: '김민수', product: '노트북', quantity: 1, price: '₩1,200,000', status: '배송 중', date: '2024-06-20' },
    { id: 'ORD-002', customer: '이수진', product: '마우스', quantity: 2, price: '₩60,000', status: '완료', date: '2024-06-19' },
    { id: 'ORD-003', customer: '박철민', product: '키보드', quantity: 1, price: '₩150,000', status: '처리 중', date: '2024-06-18' },
    { id: 'ORD-004', customer: '정미영', product: '모니터', quantity: 1, price: '₩800,000', status: '취소', date: '2024-06-17' },
    { id: 'ORD-005', customer: '최동현', product: '헤드폰', quantity: 1, price: '₩300,000', status: '배송 중', date: '2024-06-16' }
  ];

  const sampleProjects = [
    { id: 'PRJ-001', name: '웹사이트 리뉴얼', manager: '김민수', progress: 85, budget: '₩50,000,000', deadline: '2024-07-15', status: '진행 중' },
    { id: 'PRJ-002', name: '모바일 앱 개발', manager: '이수진', progress: 45, budget: '₩80,000,000', deadline: '2024-09-30', status: '진행 중' },
    { id: 'PRJ-003', name: '브랜딩 가이드', manager: '박철민', progress: 100, budget: '₩20,000,000', deadline: '2024-06-01', status: '완료' },
    { id: 'PRJ-004', name: 'API 개발', manager: '정미영', progress: 20, budget: '₩30,000,000', deadline: '2024-08-15', status: '계획' },
    { id: 'PRJ-005', name: '데이터 분석', manager: '최동현', progress: 60, budget: '₩40,000,000', deadline: '2024-10-01', status: '진행 중' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Grid3X3 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Table</h1>
            <p className="text-muted-foreground">
              구조화된 데이터를 행과 열로 표시하는 테이블 컴포넌트입니다. 정렬, 필터링, 선택, 페이지네이션 등 다양한 데이터 조작 기능을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Grid3X3 className="w-3 h-3" />
            데이터 표시
          </Badge>
          <Badge variant="outline">정렬</Badge>
          <Badge variant="outline">필터링</Badge>
          <Badge variant="outline">선택</Badge>
          <Badge variant="outline">반응형</Badge>
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
          {/* Basic Table */}
          <Card>
            <CardHeader>
              <CardTitle>기본 테이블</CardTitle>
              <CardDescription>
                기본적인 데이터 표시를 위한 테이블입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Table>
                <TableCaption>최근 주문 목록입니다.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">주문번호</TableHead>
                    <TableHead>고객명</TableHead>
                    <TableHead>상품</TableHead>
                    <TableHead className="text-right">금액</TableHead>
                    <TableHead>상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell className="text-right">{order.price}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={order.status === '완료' ? 'default' : 
                                  order.status === '취소' ? 'destructive' : 'secondary'}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>총 주문</TableCell>
                    <TableCell className="text-right">₩2,510,000</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableFooter>
              </Table>

              <CodeBlock
                code={`import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./components/ui/table"

// 기본 테이블
<Table>
  <TableCaption>최근 주문 목록입니다.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">주문번호</TableHead>
      <TableHead>고객명</TableHead>
      <TableHead>상품</TableHead>
      <TableHead className="text-right">금액</TableHead>
      <TableHead>상태</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {orders.map((order) => (
      <TableRow key={order.id}>
        <TableCell className="font-medium">{order.id}</TableCell>
        <TableCell>{order.customer}</TableCell>
        <TableCell>{order.product}</TableCell>
        <TableCell className="text-right">{order.price}</TableCell>
        <TableCell>
          <Badge variant={order.status === '완료' ? 'default' : 'secondary'}>
            {order.status}
          </Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>총 주문</TableCell>
      <TableCell className="text-right">₩2,510,000</TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
                codeKey="basic-table"
              />
            </CardContent>
          </Card>

          {/* Selectable Table */}
          <Card>
            <CardHeader>
              <CardTitle>선택 가능한 테이블</CardTitle>
              <CardDescription>
                체크박스를 통해 행을 선택할 수 있는 테이블입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {selectedItems.length}개 항목이 선택됨
                </p>
                {selectedItems.length > 0 && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      편집
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4 mr-2" />
                      삭제
                    </Button>
                  </div>
                )}
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={selectedItems.length === sampleEmployees.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>이름</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>급여</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead className="w-[100px]">액션</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleEmployees.map((employee) => (
                    <TableRow 
                      key={employee.id}
                      data-state={selectedItems.includes(employee.id) ? "selected" : ""}
                    >
                      <TableCell>
                        <Checkbox
                          checked={selectedItems.includes(employee.id)}
                          onCheckedChange={(checked) => handleSelectItem(employee.id, checked as boolean)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.salary}</TableCell>
                      <TableCell>
                        <Badge variant={employee.status === '활성' ? 'default' : 'secondary'}>
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <CodeBlock
                code={`// 선택 가능한 테이블
const [selectedItems, setSelectedItems] = useState<string[]>([])

const handleSelectAll = (checked: boolean) => {
  if (checked) {
    setSelectedItems(data.map(item => item.id))
  } else {
    setSelectedItems([])
  }
}

const handleSelectItem = (id: string, checked: boolean) => {
  if (checked) {
    setSelectedItems([...selectedItems, id])
  } else {
    setSelectedItems(selectedItems.filter(item => item !== id))
  }
}

<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox
          checked={selectedItems.length === data.length}
          onCheckedChange={handleSelectAll}
        />
      </TableHead>
      <TableHead>이름</TableHead>
      <TableHead>이메일</TableHead>
      <TableHead>역할</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow 
        key={item.id}
        data-state={selectedItems.includes(item.id) ? "selected" : ""}
      >
        <TableCell>
          <Checkbox
            checked={selectedItems.includes(item.id)}
            onCheckedChange={(checked) => handleSelectItem(item.id, checked)}
          />
        </TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
                codeKey="selectable-table"
              />
            </CardContent>
          </Card>

          {/* Sortable Table */}
          <Card>
            <CardHeader>
              <CardTitle>정렬 가능한 테이블</CardTitle>
              <CardDescription>
                열 헤더를 클릭하여 데이터를 정렬할 수 있는 테이블입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">
                      <Button 
                        variant="ghost" 
                        className="h-auto p-0 font-medium"
                        onClick={() => handleSort('id')}
                      >
                        프로젝트 ID
                        {sortColumn === 'id' && (
                          sortDirection === 'asc' ? 
                          <ArrowUp className="ml-2 h-4 w-4" /> : 
                          <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                        {sortColumn !== 'id' && <ArrowUpDown className="ml-2 h-4 w-4" />}
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button 
                        variant="ghost" 
                        className="h-auto p-0 font-medium"
                        onClick={() => handleSort('name')}
                      >
                        프로젝트명
                        {sortColumn === 'name' && (
                          sortDirection === 'asc' ? 
                          <ArrowUp className="ml-2 h-4 w-4" /> : 
                          <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                        {sortColumn !== 'name' && <ArrowUpDown className="ml-2 h-4 w-4" />}
                      </Button>
                    </TableHead>
                    <TableHead>담당자</TableHead>
                    <TableHead>
                      <Button 
                        variant="ghost" 
                        className="h-auto p-0 font-medium"
                        onClick={() => handleSort('progress')}
                      >
                        진행률
                        {sortColumn === 'progress' && (
                          sortDirection === 'asc' ? 
                          <ArrowUp className="ml-2 h-4 w-4" /> : 
                          <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                        {sortColumn !== 'progress' && <ArrowUpDown className="ml-2 h-4 w-4" />}
                      </Button>
                    </TableHead>
                    <TableHead>예산</TableHead>
                    <TableHead>마감일</TableHead>
                    <TableHead>상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.id}</TableCell>
                      <TableCell>{project.name}</TableCell>
                      <TableCell>{project.manager}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{project.budget}</TableCell>
                      <TableCell>{project.deadline}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={project.status === '완료' ? 'default' : 
                                  project.status === '계획' ? 'secondary' : 'outline'}
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <CodeBlock
                code={`// 정렬 가능한 테이블
const [sortColumn, setSortColumn] = useState<string | null>(null)
const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

const handleSort = (column: string) => {
  if (sortColumn === column) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
  } else {
    setSortColumn(column)
    setSortDirection('asc')
  }
}

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>
        <Button 
          variant="ghost" 
          className="h-auto p-0 font-medium"
          onClick={() => handleSort('name')}
        >
          이름
          {sortColumn === 'name' && (
            sortDirection === 'asc' ? 
            <ArrowUp className="ml-2 h-4 w-4" /> : 
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {sortColumn !== 'name' && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {sortedData.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
                codeKey="sortable-table"
              />
            </CardContent>
          </Card>

          {/* Rich Data Table */}
          <Card>
            <CardHeader>
              <CardTitle>리치 데이터 테이블</CardTitle>
              <CardDescription>
                아바타, 아이콘, 상태 표시 등 다양한 UI 요소가 포함된 테이블입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="직원 검색..." className="pl-8 w-[300px]" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="부서 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">모든 부서</SelectItem>
                      <SelectItem value="engineering">엔지니어링</SelectItem>
                      <SelectItem value="design">디자인</SelectItem>
                      <SelectItem value="product">프로덕트</SelectItem>
                      <SelectItem value="marketing">마케팅</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    필터
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    내보내기
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    직원 추가
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>직원</TableHead>
                    <TableHead>연락처</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>급여</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>가입일</TableHead>
                    <TableHead className="w-[100px]">액션</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${employee.name}`} />
                            <AvatarFallback>{employee.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-3 w-3" />
                            {employee.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            010-1234-5678
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {employee.role === '개발자' && <Briefcase className="h-4 w-4 text-blue-500" />}
                          {employee.role === '디자이너' && <Palette className="h-4 w-4 text-purple-500" />}
                          {employee.role === 'PM' && <Target className="h-4 w-4 text-green-500" />}
                          {employee.role === '마케터' && <TrendingUp className="h-4 w-4 text-orange-500" />}
                          {employee.role}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{employee.department}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">{employee.salary}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${
                            employee.status === '활성' ? 'bg-green-500' : 'bg-yellow-500'
                          }`} />
                          {employee.status}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        2024-01-15
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <CodeBlock
                code={`// 리치 데이터 테이블
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>직원</TableHead>
      <TableHead>연락처</TableHead>
      <TableHead>역할</TableHead>
      <TableHead>액션</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {employees.map((employee) => (
      <TableRow key={employee.id}>
        <TableCell>
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={employee.avatar} />
              <AvatarFallback>{employee.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{employee.name}</div>
              <div className="text-sm text-muted-foreground">{employee.email}</div>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-3 w-3" />
              {employee.email}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-3 w-3" />
              {employee.phone}
            </div>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <RoleIcon className="h-4 w-4" />
            {employee.role}
          </div>
        </TableCell>
        <TableCell>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
                codeKey="rich-data-table"
              />
            </CardContent>
          </Card>

          {/* Responsive Table */}
          <Card>
            <CardHeader>
              <CardTitle>반응형 테이블</CardTitle>
              <CardDescription>
                작은 화면에서도 잘 동작하는 반응형 테이블입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-sm text-muted-foreground mb-4">
                화면 크기에 따라 테이블이 자동으로 조정됩니다. 작은 화면에서는 수평 스크롤이 나타납니다.
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[100px]">ID</TableHead>
                    <TableHead className="min-w-[150px]">이름</TableHead>
                    <TableHead className="min-w-[200px]">이메일</TableHead>
                    <TableHead className="min-w-[120px]">역할</TableHead>
                    <TableHead className="min-w-[120px]">부서</TableHead>
                    <TableHead className="min-w-[120px]">급여</TableHead>
                    <TableHead className="min-w-[100px]">상태</TableHead>
                    <TableHead className="min-w-[120px]">가입일</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-mono">{employee.id}</TableCell>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.salary}</TableCell>
                      <TableCell>
                        <Badge variant={employee.status === '활성' ? 'default' : 'secondary'}>
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>2024-01-15</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <CodeBlock
                code={`// 반응형 테이블
<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="min-w-[100px]">ID</TableHead>
      <TableHead className="min-w-[150px]">이름</TableHead>
      <TableHead className="min-w-[200px]">이메일</TableHead>
      <TableHead className="min-w-[120px]">역할</TableHead>
      <TableHead className="min-w-[120px]">부서</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.id}>
        <TableCell className="font-mono">{item.id}</TableCell>
        <TableCell className="font-medium">{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.role}</TableCell>
        <TableCell>{item.department}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

// 모바일에서는 카드 형태로 표시
<div className="block md:hidden">
  {data.map((item) => (
    <Card key={item.id} className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{item.name}</h3>
            <Badge>{item.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{item.email}</p>
          <div className="flex justify-between text-sm">
            <span>{item.role}</span>
            <span>{item.department}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>`}
                codeKey="responsive-table"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>테이블 패턴 및 모범 사례</CardTitle>
              <CardDescription>
                효과적인 Table 사용을 위한 디자인 패턴과 모범 사례입니다.
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
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowUpDown className="h-4 w-4" />
                        <span className="text-sm font-medium">명확한 정렬 표시</span>
                      </div>
                      <p className="text-xs text-muted-foreground">사용자가 현재 정렬 상태를 쉽게 파악할 수 있도록</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Grid3X3 className="h-4 w-4" />
                        <span className="text-sm font-medium">적절한 열 너비</span>
                      </div>
                      <p className="text-xs text-muted-foreground">콘텐츠에 맞는 최적의 열 너비 설정</p>
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
                      <div className="flex items-center gap-2 mb-2">
                        <X className="h-4 w-4" />
                        <span className="text-sm font-medium">과도한 정보 밀도</span>
                      </div>
                      <p className="text-xs text-red-600">너무 많은 정보로 인한 가독성 저하</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">일관성 없는 데이터 형식</span>
                      </div>
                      <p className="text-xs text-red-600">같은 종류의 데이터가 다른 형식으로 표시</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>데이터 유형별 패턴</CardTitle>
              <CardDescription>
                다양한 데이터 유형에 적합한 테이블 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">사용자 관리 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <h5 className="font-medium">직원/고객 목록</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 아바타와 이름을 함께 표시</div>
                      <div>• 연락처 정보 그룹화</div>
                      <div>• 상태를 시각적으로 구분</div>
                      <div>• 빠른 액션 버튼 제공</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">주문/거래 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      <h5 className="font-medium">주문 관리</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 주문번호를 고유 식별자로 표시</div>
                      <div>• 금액은 우측 정렬</div>
                      <div>• 상태별 색상 구분</div>
                      <div>• 날짜/시간 형식 통일</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">프로젝트 관리 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <h5 className="font-medium">프로젝트 대시보드</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 진행률을 시각적 바로 표시</div>
                      <div>• 담당자 정보 포함</div>
                      <div>• 마감일까지의 시간 강조</div>
                      <div>• 우선순위별 구분</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">재고/제품 패턴</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      <h5 className="font-medium">재고 관리</h5>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• 제품 이미지 썸네일</div>
                      <div>• 재고 수량 상태 표시</div>
                      <div>• 카테고리별 그룹화</div>
                      <div>• 가격 정보 강조</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>상호작용 패턴</CardTitle>
              <CardDescription>
                사용자 상호작용을 위한 테이블 패턴입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">선택 및 일괄 작업</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 전체 선택/해제 체크박스</li>
                    <li>• 선택된 항목 수 표시</li>
                    <li>• 일괄 작업 버튼 제공</li>
                    <li>• 선택된 행 시각적 강조</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">정렬 및 필터링</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 클릭 가능한 열 헤더</li>
                    <li>• 정렬 상태 시각적 표시</li>
                    <li>• 필터 옵션 제공</li>
                    <li>• 검색 기능 통합</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">인라인 편집</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 더블클릭으로 편집 모드</li>
                    <li>• 편집 중인 셀 강조</li>
                    <li>• 저장/취소 버튼</li>
                    <li>• 유효성 검사 표시</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">페이지네이션</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 페이지당 항목 수 선택</li>
                    <li>• 현재 페이지 정보 표시</li>
                    <li>• 이전/다음 네비게이션</li>
                    <li>• 점프 투 페이지</li>
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
                효과적인 Table 사용을 위한 모범 사례
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
                    <li>• 데이터 유형에 맞는 정렬 방식 제공</li>
                    <li>• 중요한 정보는 좌측에 배치</li>
                    <li>• 일관된 데이터 형식 사용</li>
                    <li>• 적절한 열 너비와 행 높이 설정</li>
                    <li>• 로딩 및 빈 상태 처리</li>
                    <li>• 키보드 네비게이션 지원</li>
                    <li>• 접근성을 위한 적절한 마크업</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 열로 인한 혼잡함</li>
                    <li>• 일관성 없는 데이터 표시 형식</li>
                    <li>• 중요하지 않은 정보의 과도한 강조</li>
                    <li>• 모바일에서 사용하기 어려운 구조</li>
                    <li>• 로딩 상태 없는 긴 대기 시간</li>
                    <li>• 접근성을 고려하지 않은 구현</li>
                    <li>• 사용자 의도를 확인하지 않는 위험한 액션</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Table을 효과적으로 사용할 수 있도록 하는 지침
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">의미있는 마크업</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 적절한 table, thead, tbody, tfoot 요소 사용</li>
                    <li>• th 요소에 scope 속성 추가</li>
                    <li>• caption 요소로 테이블 설명 제공</li>
                    <li>• 복잡한 테이블의 경우 headers 속성 사용</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">키보드 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tab 키로 테이블 내 탐색 가능</li>
                    <li>• 정렬 가능한 열은 키보드로 조작 가능</li>
                    <li>• 선택 가능한 행은 Space 키로 선택</li>
                    <li>• 화살표 키로 셀 간 이동 지원</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• aria-label로 테이블 목적 설명</li>
                    <li>• aria-sort로 정렬 상태 표시</li>
                    <li>• aria-selected로 선택 상태 표시</li>
                    <li>• 상태 변경 시 적절한 알림 제공</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">시각적 접근성</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 충분한 색상 대비 (최소 4.5:1)</li>
                    <li>• 색상에만 의존하지 않는 정보 전달</li>
                    <li>• 명확한 포커스 표시</li>
                    <li>• 적절한 글꼴 크기 및 줄 간격</li>
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
                  <h5 className="font-medium mb-2 text-green-700">Table 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 구조화된 데이터 표시</li>
                    <li>• 데이터 비교 및 분석</li>
                    <li>• 목록 형태의 정보</li>
                    <li>• 관리자 대시보드</li>
                    <li>• 보고서 및 통계</li>
                    <li>• 데이터 입력 폼</li>
                    <li>• 검색 결과 표시</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 방법</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Card Grid:</strong> 시각적 데이터</li>
                    <li>• <strong>List:</strong> 단순한 목록</li>
                    <li>• <strong>Chart:</strong> 통계 데이터</li>
                    <li>• <strong>Timeline:</strong> 시간순 데이터</li>
                    <li>• <strong>Kanban:</strong> 상태별 데이터</li>
                    <li>• <strong>Tree View:</strong> 계층 구조</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 레이아웃 목적의 사용</li>
                    <li>• 비정형 데이터 표시</li>
                    <li>• 복잡한 시각적 콘텐츠</li>
                    <li>• 모바일 우선 인터페이스</li>
                    <li>• 실시간 데이터 스트림</li>
                    <li>• 단순한 키-값 쌍</li>
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
                Table 컴포넌트의 속성과 설정 옵션
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
                        <td className="p-2 font-mono">Table</td>
                        <td className="p-2">테이블 루트 컨테이너 (자동 스크롤 포함)</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableHeader</td>
                        <td className="p-2">테이블 헤더 영역</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableBody</td>
                        <td className="p-2">테이블 본문 영역</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableFooter</td>
                        <td className="p-2">테이블 하단 영역 (요약 정보)</td>
                        <td className="p-2">선택</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableRow</td>
                        <td className="p-2">테이블 행</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableHead</td>
                        <td className="p-2">헤더 셀</td>
                        <td className="p-2">권장</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableCell</td>
                        <td className="p-2">데이터 셀</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableCaption</td>
                        <td className="p-2">테이블 설명</td>
                        <td className="p-2">접근성 권장</td>
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
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./components/ui/table"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`// 기본 테이블
<Table>
  <TableCaption>주문 목록입니다.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">주문번호</TableHead>
      <TableHead>고객명</TableHead>
      <TableHead>상품</TableHead>
      <TableHead className="text-right">금액</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {orders.map((order) => (
      <TableRow key={order.id}>
        <TableCell className="font-medium">{order.id}</TableCell>
        <TableCell>{order.customer}</TableCell>
        <TableCell>{order.product}</TableCell>
        <TableCell className="text-right">{order.price}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="선택 가능한 테이블"
                code={`// 체크박스와 선택 상태 관리
const [selectedItems, setSelectedItems] = useState<string[]>([])

const handleSelectAll = (checked: boolean) => {
  if (checked) {
    setSelectedItems(data.map(item => item.id))
  } else {
    setSelectedItems([])
  }
}

const handleSelectItem = (id: string, checked: boolean) => {
  if (checked) {
    setSelectedItems([...selectedItems, id])
  } else {
    setSelectedItems(selectedItems.filter(item => item !== id))
  }
}

<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox
          checked={selectedItems.length === data.length}
          onCheckedChange={handleSelectAll}
        />
      </TableHead>
      <TableHead>이름</TableHead>
      <TableHead>이메일</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow 
        key={item.id}
        data-state={selectedItems.includes(item.id) ? "selected" : ""}
      >
        <TableCell>
          <Checkbox
            checked={selectedItems.includes(item.id)}
            onCheckedChange={(checked) => handleSelectItem(item.id, checked)}
          />
        </TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
                codeKey="selectable-usage"
              />

              <CodeBlock
                title="정렬 기능"
                code={`// 정렬 상태 및 핸들러
const [sortColumn, setSortColumn] = useState<string | null>(null)
const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

const handleSort = (column: string) => {
  if (sortColumn === column) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
  } else {
    setSortColumn(column)
    setSortDirection('asc')
  }
}

// 데이터 정렬
const sortedData = useMemo(() => {
  if (!sortColumn) return data
  
  return [...data].sort((a, b) => {
    const aVal = a[sortColumn as keyof typeof a]
    const bVal = b[sortColumn as keyof typeof b]
    
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
    return 0
  })
}, [data, sortColumn, sortDirection])

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>
        <Button 
          variant="ghost" 
          className="h-auto p-0 font-medium"
          onClick={() => handleSort('name')}
        >
          이름
          {sortColumn === 'name' && (
            sortDirection === 'asc' ? 
            <ArrowUp className="ml-2 h-4 w-4" /> : 
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
          {sortColumn !== 'name' && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {sortedData.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
                codeKey="sortable-usage"
              />

              <CodeBlock
                title="반응형 테이블"
                code={`// 반응형 테이블 - 데스크톱
<div className="hidden md:block">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="min-w-[100px]">ID</TableHead>
        <TableHead className="min-w-[150px]">이름</TableHead>
        <TableHead className="min-w-[200px]">이메일</TableHead>
        <TableHead className="min-w-[120px]">역할</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.role}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

// 모바일에서는 카드 형태로 표시
<div className="block md:hidden space-y-4">
  {data.map((item) => (
    <Card key={item.id}>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{item.name}</h3>
            <Badge>{item.status}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{item.email}</p>
          <div className="flex justify-between text-sm">
            <span>{item.role}</span>
            <span>{item.department}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>`}
                codeKey="responsive-usage"
              />

              <CodeBlock
                title="접근성 향상"
                code={`// 완전한 접근성 지원
<Table>
  <TableCaption>
    직원 목록 - 총 {employees.length}명의 직원 정보
  </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead scope="col" aria-sort={getSortState('name')}>
        <Button 
          variant="ghost"
          onClick={() => handleSort('name')}
          aria-label="이름순으로 정렬"
        >
          이름
          <ArrowUpDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </TableHead>
      <TableHead scope="col">이메일</TableHead>
      <TableHead scope="col">역할</TableHead>
      <TableHead scope="col">액션</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {employees.map((employee, index) => (
      <TableRow 
        key={employee.id}
        aria-rowindex={index + 2}
        aria-selected={selectedItems.includes(employee.id)}
      >
        <TableCell>
          <div className="flex items-center gap-3">
            <Checkbox
              checked={selectedItems.includes(employee.id)}
              onCheckedChange={(checked) => handleSelectItem(employee.id, checked)}
              aria-label={\`\${employee.name} 선택\`}
            />
            <span>{employee.name}</span>
          </div>
        </TableCell>
        <TableCell>{employee.email}</TableCell>
        <TableCell>{employee.role}</TableCell>
        <TableCell>
          <Button 
            variant="ghost" 
            size="sm"
            aria-label={\`\${employee.name} 편집\`}
          >
            <Edit className="h-4 w-4" aria-hidden="true" />
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
                codeKey="accessibility-usage"
              />

              <CodeBlock
                title="로딩 및 빈 상태"
                code={`// 로딩 상태
{isLoading ? (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>이름</TableHead>
        <TableHead>이메일</TableHead>
        <TableHead>역할</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <div className="h-4 bg-muted animate-pulse rounded" />
          </TableCell>
          <TableCell>
            <div className="h-4 bg-muted animate-pulse rounded" />
          </TableCell>
          <TableCell>
            <div className="h-4 bg-muted animate-pulse rounded" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
) : data.length === 0 ? (
  // 빈 상태
  <div className="text-center py-12">
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-full bg-muted p-3">
        <Grid3X3 className="h-6 w-6 text-muted-foreground" />
      </div>
      <div>
        <h3 className="font-medium">데이터가 없습니다</h3>
        <p className="text-muted-foreground text-sm">
          새로운 항목을 추가해보세요.
        </p>
      </div>
      <Button>
        <Plus className="h-4 w-4 mr-2" />
        항목 추가
      </Button>
    </div>
  </div>
) : (
  // 정상 테이블
  <Table>
    {/* ... */}
  </Table>
)}`}
                codeKey="loading-empty-states"
              />

              <CodeBlock
                title="필터링 및 검색"
                code={`// 필터링과 검색 기능
const [searchTerm, setSearchTerm] = useState('')
const [selectedDepartment, setSelectedDepartment] = useState('all')

const filteredData = useMemo(() => {
  return data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || 
                             item.department === selectedDepartment
    
    return matchesSearch && matchesDepartment
  })
}, [data, searchTerm, selectedDepartment])

// 테이블 상단 필터 영역
<div className="flex items-center gap-4 mb-4">
  <div className="relative flex-1 max-w-sm">
    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      placeholder="이름이나 이메일로 검색..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="pl-8"
    />
  </div>
  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="부서 선택" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all">모든 부서</SelectItem>
      <SelectItem value="engineering">엔지니어링</SelectItem>
      <SelectItem value="design">디자인</SelectItem>
      <SelectItem value="marketing">마케팅</SelectItem>
    </SelectContent>
  </Select>
  <Button variant="outline" onClick={() => {
    setSearchTerm('')
    setSelectedDepartment('all')
  }}>
    초기화
  </Button>
</div>

<Table>
  {/* 테이블 내용 */}
</Table>

<div className="text-sm text-muted-foreground mt-4">
  총 {data.length}개 중 {filteredData.length}개 항목 표시
</div>`}
                codeKey="filtering-search"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}