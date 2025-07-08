import * as React from "react";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { 
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  ArrowUpDown,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Table as TableIcon,
  Copy,
  Check,
  Palette,
  Accessibility,
  Database
} from 'lucide-react';
import { useState } from 'react';

// 샘플 데이터
const payments = [
  {
    id: "m5gr84i9",
    amount: 316000,
    status: "success",
    email: "kim99@naver.com",
    date: "2024-01-15",
    method: "신용카드"
  },
  {
    id: "3u1reuv4",
    amount: 242000,
    status: "success", 
    email: "lee45@gmail.com",
    date: "2024-01-14",
    method: "카카오페이"
  },
  {
    id: "derv1ws0",
    amount: 837000,
    status: "processing",
    email: "park44@gmail.com",
    date: "2024-01-13",
    method: "계좌이체"
  },
  {
    id: "5kma53ae",
    amount: 874000,
    status: "success",
    email: "choi22@gmail.com",
    date: "2024-01-12",
    method: "신용카드"
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "failed",
    email: "jung@hotmail.com",
    date: "2024-01-11",
    method: "신용카드"
  }
];

const users = [
  {
    id: "1",
    name: "김민수",
    email: "minsu@example.com",
    role: "관리자",
    status: "활성",
    lastLogin: "2024-01-15",
    avatar: "김민수"
  },
  {
    id: "2",
    name: "이영희",
    email: "younghee@example.com",
    role: "편집자",
    status: "활성",
    lastLogin: "2024-01-14",
    avatar: "이영희"
  },
  {
    id: "3",
    name: "박철수",
    email: "cheolsu@example.com",
    role: "뷰어",
    status: "비활성",
    lastLogin: "2024-01-10",
    avatar: "박철수"
  },
  {
    id: "4",
    name: "정수진",
    email: "sujin@example.com",
    role: "편집자",
    status: "활성",
    lastLogin: "2024-01-15",
    avatar: "정수진"
  },
  {
    id: "5",
    name: "최동호",
    email: "dongho@example.com",
    role: "관리자",
    status: "대기중",
    lastLogin: "접속 기록 없음",
    avatar: "최동호"
  }
];

const projects = [
  {
    id: "1",
    name: "웹사이트 리디자인",
    client: "에이스 코퍼레이션",
    progress: 75,
    budget: 25000000,
    spent: 18750000,
    deadline: "2024-02-15",
    status: "정상진행",
    team: 4
  },
  {
    id: "2",
    name: "모바일 앱 개발",
    client: "테크스타트",
    progress: 45,
    budget: 50000000,
    spent: 22500000,
    deadline: "2024-03-30",
    status: "정상진행",
    team: 6
  },
  {
    id: "3",
    name: "이커머스 플랫폼",
    client: "쇼핑플로우",
    progress: 30,
    budget: 75000000,
    spent: 30000000,
    deadline: "2024-02-01",
    status: "위험",
    team: 8
  },
  {
    id: "4",
    name: "데이터 분석 도구",
    client: "데이터코퍼레이션",
    progress: 90,
    budget: 35000000,
    spent: 31500000,
    deadline: "2024-01-25",
    status: "앞서감",
    team: 3
  }
];

export function DataTableComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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

  // 상태 배지 컴포넌트
  function StatusBadge({ status }: { status: string }) {
    const getStatusVariant = (status: string) => {
      switch (status) {
        case "success":
        case "활성":
        case "정상진행":
        case "앞서감":
          return "default";
        case "processing":
        case "대기중":
          return "secondary";
        case "failed":
        case "비활성":
        case "위험":
          return "destructive";
        default:
          return "outline";
      }
    };

    const getStatusIcon = (status: string) => {
      switch (status) {
        case "success":
        case "활성":
          return <CheckCircle className="w-3 h-3" />;
        case "processing":
        case "대기중":
          return <Clock className="w-3 h-3" />;
        case "failed":
        case "비활성":
          return <XCircle className="w-3 h-3" />;
        case "위험":
          return <AlertCircle className="w-3 h-3" />;
        case "정상진행":
        case "앞서감":
          return <TrendingUp className="w-3 h-3" />;
        default:
          return null;
      }
    };

    const getStatusText = (status: string) => {
      const statusMap: { [key: string]: string } = {
        "success": "성공",
        "processing": "처리중",
        "failed": "실패",
        "활성": "활성",
        "비활성": "비활성",
        "대기중": "대기중",
        "정상진행": "정상진행",
        "위험": "위험",
        "앞서감": "앞서감"
      };
      return statusMap[status] || status;
    };

    return (
      <Badge variant={getStatusVariant(status)} className="flex items-center gap-1">
        {getStatusIcon(status)}
        {getStatusText(status)}
      </Badge>
    );
  }

  // 간단한 데이터 테이블 컴포넌트
  function SimpleDataTable({ data, columns }: { 
    data: any[], 
    columns: { key: string, label: string, render?: (value: any, row: any) => React.ReactNode }[] 
  }) {
    const [sortColumn, setSortColumn] = React.useState<string | null>(null);
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSort = (columnKey: string) => {
      if (sortColumn === columnKey) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortColumn(columnKey);
        setSortDirection('asc');
      }
    };

    const filteredData = React.useMemo(() => {
      return data.filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [data, searchTerm]);

    const sortedData = React.useMemo(() => {
      if (!sortColumn) return filteredData;

      return [...filteredData].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
        }

        const aString = String(aValue).toLowerCase();
        const bString = String(bValue).toLowerCase();

        if (sortDirection === 'asc') {
          return aString.localeCompare(bString);
        } else {
          return bString.localeCompare(aString);
        }
      });
    }, [filteredData, sortColumn, sortDirection]);

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key}>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort(column.key)}
                      className="h-auto p-0 font-medium"
                    >
                      {column.label}
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                ))}
                <TableHead className="w-[100px]">액션</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((row, index) => (
                <TableRow key={row.id || index}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.render ? column.render(row[column.key], row) : row[column.key]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">메뉴 열기</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>액션</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          보기
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          편집
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          삭제
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div>
            전체 {data.length}개 중 {sortedData.length}개 항목 표시
          </div>
        </div>
      </div>
    );
  }

  // 고급 데이터 테이블 컴포넌트 (선택 기능 포함)
  function AdvancedDataTable({ data, columns, title }: { 
    data: any[], 
    columns: { key: string, label: string, render?: (value: any, row: any) => React.ReactNode }[],
    title: string 
  }) {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 3;

    const filteredData = React.useMemo(() => {
      return data.filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [data, searchTerm]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const isAllSelected = paginatedData.length > 0 && paginatedData.every(row => selectedRows.includes(row.id));
    const isIndeterminate = paginatedData.some(row => selectedRows.includes(row.id)) && !isAllSelected;

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(prev => [...new Set([...prev, ...paginatedData.map(row => row.id)])]);
      } else {
        setSelectedRows(prev => prev.filter(id => !paginatedData.find(row => row.id === id)));
      }
    };

    const handleSelectRow = (rowId: string, checked: boolean) => {
      if (checked) {
        setSelectedRows(prev => [...prev, rowId]);
      } else {
        setSelectedRows(prev => prev.filter(id => id !== rowId));
      }
    };

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                {selectedRows.length > 0 
                  ? `전체 ${filteredData.length}개 중 ${selectedRows.length}개 행이 선택됨`
                  : `최근 ${title.toLowerCase()} 목록입니다.`
                }
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              {selectedRows.length > 0 && (
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  삭제 ({selectedRows.length})
                </Button>
              )}
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                새로 추가
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-[300px]"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  필터
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                내보내기
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={isAllSelected}
                        indeterminate={isIndeterminate ? true : undefined}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    {columns.map((column) => (
                      <TableHead key={column.key}>{column.label}</TableHead>
                    ))}
                    <TableHead className="w-[100px]">액션</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedData.map((row) => (
                    <TableRow key={row.id} data-state={selectedRows.includes(row.id) ? "selected" : ""}>
                      <TableCell>
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onCheckedChange={(checked) => handleSelectRow(row.id, checked as boolean)}
                        />
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell key={column.key}>
                          {column.render ? column.render(row[column.key], row) : row[column.key]}
                        </TableCell>
                      ))}
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">메뉴 열기</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>액션</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              상세 보기
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              편집
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              삭제
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                전체 {filteredData.length}개 중 {startIndex + 1}~{Math.min(startIndex + itemsPerPage, filteredData.length)}개 항목 표시
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  이전
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  다음
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const examples = [
    {
      title: '기본 데이터 테이블',
      description: '정렬과 검색 기능이 있는 간단한 데이터 테이블입니다.',
      component: (
        <SimpleDataTable
          data={payments}
          columns={[
            {
              key: 'id',
              label: 'ID',
              render: (value) => <code className="bg-muted px-1 py-0.5 rounded text-xs">{value}</code>
            },
            {
              key: 'status',
              label: '상태',
              render: (value) => <StatusBadge status={value} />
            },
            {
              key: 'email',
              label: '이메일'
            },
            {
              key: 'amount',
              label: '금액',
              render: (value) => `₩${value.toLocaleString()}`
            },
            {
              key: 'method',
              label: '결제 방법'
            }
          ]}
        />
      ),
      code: `import { useState, useMemo } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"
import { ArrowUpDown, Search } from "lucide-react"

function DataTable({ data, columns }) {
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = useMemo(() => {
    return data.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [data, searchTerm])

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>
                <Button
                  variant="ghost"
                  onClick={() => handleSort(column.key)}
                >
                  {column.label}
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`
    },
    {
      title: '사용자 관리 테이블',
      description: '행 선택, 페이지네이션, 일괄 작업이 가능한 고급 데이터 테이블입니다.',
      component: (
        <AdvancedDataTable
          title="사용자"
          data={users}
          columns={[
            {
              key: 'name',
              label: '이름',
              render: (value, row) => (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                    {row.avatar.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-medium">{value}</div>
                    <div className="text-sm text-muted-foreground">{row.email}</div>
                  </div>
                </div>
              )
            },
            {
              key: 'role',
              label: '역할',
              render: (value) => (
                <Badge variant={value === '관리자' ? 'default' : 'secondary'}>
                  {value}
                </Badge>
              )
            },
            {
              key: 'status',
              label: '상태',
              render: (value) => <StatusBadge status={value} />
            },
            {
              key: 'lastLogin',
              label: '마지막 로그인',
              render: (value) => (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  {value}
                </div>
              )
            }
          ]}
        />
      ),
      code: `import { useState } from "react"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import { Checkbox } from "./components/ui/checkbox"
import { Input } from "./components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"

function UsersTable({ data }) {
  const [selectedRows, setSelectedRows] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(data.map(row => row.id))
    } else {
      setSelectedRows([])
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="사용자 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        {selectedRows.length > 0 && (
          <Button variant="destructive">
            삭제 ({selectedRows.length})
          </Button>
        )}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={selectedRows.length === data.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>사용자</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(user.id)}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full">
                    {user.name.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge>{user.role}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )`
    },
    {
      title: '프로젝트 대시보드 테이블',
      description: '진행률 표시기와 예산 추적이 포함된 복잡한 데이터 테이블입니다.',
      component: (
        <AdvancedDataTable
          title="프로젝트"
          data={projects}
          columns={[
            {
              key: 'name',
              label: '프로젝트',
              render: (value, row) => (
                <div>
                  <div className="font-medium">{value}</div>
                  <div className="text-sm text-muted-foreground">{row.client}</div>
                </div>
              )
            },
            {
              key: 'progress',
              label: '진행률',
              render: (value) => (
                <div className="flex items-center gap-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground min-w-[3rem]">{value}%</span>
                </div>
              )
            },
            {
              key: 'budget',
              label: '예산',
              render: (value, row) => (
                <div>
                  <div className="font-medium">₩{value.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">
                    사용: ₩{row.spent.toLocaleString()}
                  </div>
                </div>
              )
            },
            {
              key: 'deadline',
              label: '마감일',
              render: (value) => (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  {value}
                </div>
              )
            },
            {
              key: 'status',
              label: '상태',
              render: (value) => <StatusBadge status={value} />
            }
          ]}
        />
      ),
      code: `// 진행률 표시가 있는 프로젝트 테이블
function ProjectsTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>프로젝트</TableHead>
          <TableHead>진행률</TableHead>
          <TableHead>예산</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((project) => (
          <TableRow key={project.id}>
            <TableCell>
              <div>
                <div className="font-medium">{project.name}</div>
                <div className="text-sm text-muted-foreground">{project.client}</div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: \`\${project.progress}%\` }}
                  />
                </div>
                <span className="text-xs">{project.progress}%</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`
    }
  ];

  const features = [
    {
      title: '정렬 및 검색',
      description: '열 헤더 클릭으로 정렬하고 실시간 검색으로 데이터 필터링',
      icon: '🔍'
    },
    {
      title: '행 선택',
      description: '개별 행 선택, 전체 선택, 일괄 작업으로 효율적인 데이터 관리',
      icon: '☑️'
    },
    {
      title: '페이지네이션',
      description: '대용량 데이터를 페이지로 나누어 성능 최적화',
      icon: '📄'
    },
    {
      title: '사용자 정의 렌더링',
      description: '각 열에 맞는 사용자 정의 컴포넌트와 포맷터 지원',
      icon: '🎨'
    },
    {
      title: '액션 메뉴',
      description: '드롭다운 메뉴로 편집, 삭제 등 행별 액션 제공',
      icon: '⚡'
    },
    {
      title: '반응형 디자인',
      description: '모든 화면 크기에서 최적화된 테이블 레이아웃',
      icon: '📱'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Data Table</h1>
            <p className="text-muted-foreground">
              대용량 데이터를 효율적으로 표시하고 관리할 수 있는 테이블 컴포넌트입니다. 정렬, 검색, 페이지네이션, 행 선택 등 다양한 기능을 제공하여 복잡한 데이터를 쉽게 다룰 수 있습니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            3가지 예제
          </Badge>
          <Badge variant="outline">정렬 및 검색</Badge>
          <Badge variant="outline">행 선택</Badge>
          <Badge variant="outline">페이지네이션</Badge>
          <Badge variant="outline">액션 메뉴</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="variants">기능 및 변형</TabsTrigger>
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

        {/* Features & Variants Tab */}
        <TabsContent value="variants" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>데이터 테이블 기능</CardTitle>
              <CardDescription>
                Data Table 컴포넌트의 핵심 기능들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    검색 및 필터링
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 실시간 텍스트 검색</li>
                    <li>• 다중 열 검색 지원</li>
                    <li>• 고급 필터 옵션</li>
                    <li>• 정규표현식 검색</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <ArrowUpDown className="w-4 h-4" />
                    정렬 기능
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 클릭으로 열 정렬</li>
                    <li>• 오름차순/내림차순 토글</li>
                    <li>• 다중 열 정렬 지원</li>
                    <li>• 사용자 정의 정렬 함수</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>행 선택 및 일괄 작업</CardTitle>
              <CardDescription>
                효율적인 데이터 관리를 위한 선택 기능입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">개별 선택</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    각 행의 체크박스로 개별 선택
                  </p>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={false} />
                    <span className="text-xs">행 선택</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">전체 선택</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    헤더 체크박스로 전체 선택/해제
                  </p>
                  <div className="flex items-center gap-2">
                    <Checkbox checked={true} />
                    <span className="text-xs">모두 선택</span>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">일괄 작업</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    선택된 행들에 대한 일괄 처리
                  </p>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="w-3 h-3 mr-1" />
                    삭제
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>사용자 정의 렌더링</CardTitle>
              <CardDescription>
                각 열에 맞는 사용자 정의 컴포넌트를 사용할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">지원되는 컴포넌트</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">상태 배지</Badge>
                    <Badge variant="outline">진행률 바</Badge>
                    <Badge variant="outline">아바타</Badge>
                    <Badge variant="outline">액션 버튼</Badge>
                    <Badge variant="outline">아이콘</Badge>
                    <Badge variant="outline">링크</Badge>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">데이터 포맷터</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 통화 형식 (₩1,000,000)</li>
                    <li>• 날짜 형식 (2024-01-15)</li>
                    <li>• 백분율 (75%)</li>
                    <li>• 코드 스타일 (`ID001`)</li>
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
                효과적인 Data Table 사용을 위한 모범 사례입니다.
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
                    <li>• 명확하고 설명적인 열 제목 사용</li>
                    <li>• 적절한 열 너비 설정</li>
                    <li>• 중요한 데이터는 왼쪽에 배치</li>
                    <li>• 페이지네이션으로 성능 최적화</li>
                    <li>• 일관된 데이터 형식 사용</li>
                    <li>• 로딩 상태와 빈 상태 제공</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    피해야 할 것
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 너무 많은 열로 인한 혼잡함</li>
                    <li>• 일관성 없는 데이터 표시</li>
                    <li>• 모바일에서 가로 스크롤 남용</li>
                    <li>• 의미없는 행 선택 기능</li>
                    <li>• 너무 작은 클릭 영역</li>
                    <li>• 불명확한 액션 버튼</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>언제 사용하나요?</CardTitle>
              <CardDescription>
                Data Table과 다른 컴포넌트를 언제 사용할지 결정하는 가이드입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Data Table 사용</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 대량의 구조화된 데이터</li>
                    <li>• 사용자 관리 시스템</li>
                    <li>• 주문/결제 내역</li>
                    <li>• 프로젝트 대시보드</li>
                    <li>• 재고 관리</li>
                    <li>• 분석 결과 표시</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">대안 고려</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Card 그리드:</strong> 시각적 데이터</li>
                    <li>• <strong>List:</strong> 간단한 목록</li>
                    <li>• <strong>Chart:</strong> 시각화 데이터</li>
                    <li>• <strong>Timeline:</strong> 시간순 데이터</li>
                    <li>• <strong>Kanban:</strong> 워크플로우</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">피해야 할 용도</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 단순한 키-값 쌍</li>
                    <li>• 이미지 중심 콘텐츠</li>
                    <li>• 복잡한 중첩 데이터</li>
                    <li>• 실시간 채팅 로그</li>
                    <li>• 폼 레이아웃</li>
                    <li>• 내비게이션 메뉴</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                모든 사용자가 Data Table을 사용할 수 있도록 하는 지침입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">키보드 네비게이션</h5>
                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                      <span>다음 요소로 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">↑↓</kbd>
                      <span>행 간 이동</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                      <span>행 선택/해제</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                      <span>액션 실행</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">스크린 리더 지원</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 테이블 캡션과 요약 제공</li>
                    <li>• 열 헤더와 데이터 셀 연결</li>
                    <li>• 정렬 상태 음성 안내</li>
                    <li>• 선택된 행 개수 안내</li>
                    <li>• 페이지네이션 정보 제공</li>
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
              <CardTitle>컴포넌트 구조</CardTitle>
              <CardDescription>
                Data Table의 주요 컴포넌트들과 사용법입니다.
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
                        <td className="p-2">테이블 루트 컨테이너</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableHeader</td>
                        <td className="p-2">테이블 헤더 영역</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableBody</td>
                        <td className="p-2">테이블 바디 영역</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableRow</td>
                        <td className="p-2">테이블 행</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableHead</td>
                        <td className="p-2">테이블 헤더 셀</td>
                        <td className="p-2">필수</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">TableCell</td>
                        <td className="p-2">테이블 데이터 셀</td>
                        <td className="p-2">필수</td>
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Checkbox } from "./components/ui/checkbox";`}
                codeKey="import"
              />
              
              <CodeBlock
                title="기본 사용법"
                code={`function BasicTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="정렬 기능 추가"
                code={`function SortableTable({ data }) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Button
              variant="ghost"
              onClick={() => handleSort('name')}
            >
              이름
              <ArrowUpDown className="ml-2 h-4 w-4" />
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
    </Table>
  );
}`}
                codeKey="sorting-usage"
              />

              <CodeBlock
                title="행 선택 기능"
                code={`function SelectableTable({ data }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const isAllSelected = data.length > 0 && 
    data.every(row => selectedRows.includes(row.id));

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(data.map(row => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (rowId, checked) => {
    if (checked) {
      setSelectedRows(prev => [...prev, rowId]);
    } else {
      setSelectedRows(prev => prev.filter(id => id !== rowId));
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead>이름</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow 
            key={item.id}
            data-state={selectedRows.includes(item.id) ? "selected" : ""}
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(item.id)}
                onCheckedChange={(checked) => handleSelectRow(item.id, checked)}
              />
            </TableCell>
            <TableCell>{item.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`}
                codeKey="selection-usage"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TableIcon className="w-5 h-5" />
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