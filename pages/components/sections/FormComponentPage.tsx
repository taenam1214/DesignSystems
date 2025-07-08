import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Slider } from '../ui/slider';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { 
  FileText,
  Users,
  Check,
  Clipboard,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Accessibility,
  Keyboard,
  MonitorSpeaker,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Phone,
  Calendar,
  MapPin,
  Building,
  CreditCard,
  Settings,
  ShieldCheck,
  Star,
  MessageSquare,
  Upload,
  Link2,
  Globe,
  Hash,
  DollarSign,
  Percent
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function FormComponentPage() {
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
        <Clipboard className="h-3 w-3" />
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

  // Example form schemas
  const profileFormSchema = z.object({
    username: z.string().min(2, {
      message: "사용자명은 최소 2자 이상이어야 합니다.",
    }),
    email: z.string().email({
      message: "올바른 이메일 주소를 입력해주세요.",
    }),
    bio: z.string().max(160, {
      message: "소개는 160자를 초과할 수 없습니다.",
    }).optional(),
  });

  const contactFormSchema = z.object({
    firstName: z.string().min(1, "이름을 입력해주세요"),
    lastName: z.string().min(1, "성을 입력해주세요"),
    email: z.string().email("올바른 이메일 주소를 입력해주세요"),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, "메시지는 최소 10자 이상이어야 합니다"),
    newsletter: z.boolean().default(false),
    contactMethod: z.enum(["email", "phone", "both"], {
      required_error: "선호하는 연락 방법을 선택해주세요",
    }),
  });

  const settingsFormSchema = z.object({
    notifications: z.object({
      marketing: z.boolean().default(false),
      social: z.boolean().default(true),
      security: z.boolean().default(true),
    }),
    theme: z.enum(["light", "dark", "system"]),
    language: z.string(),
    timezone: z.string(),
    privacy: z.enum(["public", "friends", "private"]),
    autoSave: z.boolean().default(true),
    volume: z.array(z.number()).length(1).default([50]),
  });

  // Form examples
  const ProfileFormExample = () => {
    const form = useForm<z.infer<typeof profileFormSchema>>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: {
        username: "",
        email: "",
        bio: "",
      },
    });

    function onSubmit(values: z.infer<typeof profileFormSchema>) {
      toast.success("프로필이 업데이트되었습니다!", {
        description: JSON.stringify(values, null, 2),
      });
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>사용자명</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormDescription>
                  다른 사용자에게 표시될 공개 이름입니다.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="hong@example.com" type="email" {...field} />
                </FormControl>
                <FormDescription>
                  알림과 중요한 정보를 받을 이메일 주소입니다.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>소개</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="자신에 대해 간단히 소개해주세요..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  자신에 대해 간단히 소개해주세요. (선택사항)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">프로필 업데이트</Button>
        </form>
      </Form>
    );
  };

  const ContactFormExample = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        newsletter: false,
      },
    });

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
      toast.success("문의가 접수되었습니다!", {
        description: "빠른 시일 내에 연락드리겠습니다.",
      });
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>성</FormLabel>
                  <FormControl>
                    <Input placeholder="홍" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="hong@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>전화번호 (선택)</FormLabel>
                  <FormControl>
                    <Input placeholder="010-1234-5678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>회사 (선택)</FormLabel>
                  <FormControl>
                    <Input placeholder="회사명" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="contactMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>선호하는 연락 방법</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <FormLabel htmlFor="email">이메일</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone" />
                      <FormLabel htmlFor="phone">전화</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <FormLabel htmlFor="both">둘 다</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>메시지</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="문의하실 내용을 작성해주세요..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>뉴스레터 구독</FormLabel>
                  <FormDescription>
                    새로운 소식과 업데이트를 이메일로 받아보세요.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">문의 보내기</Button>
        </form>
      </Form>
    );
  };

  const SettingsFormExample = () => {
    const form = useForm<z.infer<typeof settingsFormSchema>>({
      resolver: zodResolver(settingsFormSchema),
      defaultValues: {
        notifications: {
          marketing: false,
          social: true,
          security: true,
        },
        theme: "system",
        language: "ko",
        timezone: "Asia/Seoul",
        privacy: "friends",
        autoSave: true,
        volume: [50],
      },
    });

    function onSubmit(values: z.infer<typeof settingsFormSchema>) {
      toast.success("설정이 저장되었습니다!");
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-medium">알림 설정</h4>
            <FormField
              control={form.control}
              name="notifications.marketing"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">마케팅 이메일</FormLabel>
                    <FormDescription>
                      새로운 제품, 기능 및 특별 혜택에 대한 정보를 받아보세요.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notifications.social"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">소셜 알림</FormLabel>
                    <FormDescription>
                      친구 요청, 메시지 및 활동에 대한 알림을 받아보세요.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>테마</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="테마를 선택하세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="light">라이트</SelectItem>
                      <SelectItem value="dark">다크</SelectItem>
                      <SelectItem value="system">시스템</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>언어</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="언어를 선택하세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ko">한국어</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="volume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>볼륨 ({field.value}%)</FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>
                  알림 및 미디어의 볼륨을 조절하세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">설정 저장</Button>
        </form>
      </Form>
    );
  };

  const examples = [
    {
      title: '기본 프로필 폼',
      description: '사용자 프로필 정보를 입력하는 기본적인 폼입니다.',
      component: <ProfileFormExample />,
      code: `import { useForm } from "react-hook-form@7.55.0"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "사용자명은 최소 2자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "올바른 이메일 주소를 입력해주세요.",
  }),
  bio: z.string().max(160).optional(),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>사용자명</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormDescription>
                다른 사용자에게 표시될 공개 이름입니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="hong@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>소개</FormLabel>
              <FormControl>
                <Textarea placeholder="자신에 대해 소개해주세요..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">프로필 업데이트</Button>
      </form>
    </Form>
  )
}`
    },
    {
      title: '복합 연락처 폼',
      description: '다양한 입력 유형을 포함한 복합 폼입니다.',
      component: <ContactFormExample />,
      code: `import { useForm } from "react-hook-form@7.55.0"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Checkbox } from "./components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form"

const formSchema = z.object({
  firstName: z.string().min(1, "이름을 입력해주세요"),
  lastName: z.string().min(1, "성을 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().optional(),
  message: z.string().min(10, "메시지는 최소 10자 이상이어야 합니다"),
  newsletter: z.boolean().default(false),
  contactMethod: z.enum(["email", "phone", "both"]),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      newsletter: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="길동" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>성</FormLabel>
                <FormControl>
                  <Input placeholder="홍" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="contactMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>선호하는 연락 방법</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <FormLabel htmlFor="email">이메일</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone" />
                    <FormLabel htmlFor="phone">전화</FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>뉴스레터 구독</FormLabel>
                <FormDescription>
                  새로운 소식과 업데이트를 이메일로 받아보세요.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit">문의 보내기</Button>
      </form>
    </Form>
  )
}`
    },
    {
      title: '고급 설정 폼',
      description: '스위치, 슬라이더, 셀렉트 등을 포함한 고급 설정 폼입니다.',
      component: <SettingsFormExample />,
      code: `import { useForm } from "react-hook-form@7.55.0"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "./components/ui/button"
import { Switch } from "./components/ui/switch"
import { Slider } from "./components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form"

const formSchema = z.object({
  notifications: z.object({
    marketing: z.boolean().default(false),
    social: z.boolean().default(true),
  }),
  theme: z.enum(["light", "dark", "system"]),
  volume: z.array(z.number()).length(1).default([50]),
})

export function SettingsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notifications: {
        marketing: false,
        social: true,
      },
      theme: "system",
      volume: [50],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="notifications.marketing"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">마케팅 이메일</FormLabel>
                <FormDescription>
                  새로운 제품과 특별 혜택 정보를 받아보세요.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>테마</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="테마를 선택하세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="light">라이트</SelectItem>
                  <SelectItem value="dark">다크</SelectItem>
                  <SelectItem value="system">시스템</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="volume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>볼륨 ({field.value}%)</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">설정 저장</Button>
      </form>
    </Form>
  )
}`
    }
  ];

  const components = [
    {
      name: 'Form',
      description: 'React Hook Form의 FormProvider 래퍼',
      usage: '폼의 루트 컨테이너로 사용'
    },
    {
      name: 'FormField',
      description: 'React Hook Form의 Controller 래퍼',
      usage: '개별 폼 필드를 제어하고 유효성 검사 연결'
    },
    {
      name: 'FormItem',
      description: '폼 아이템의 컨테이너',
      usage: '레이블, 컨트롤, 설명, 메시지를 감싸는 그리드 레이아웃'
    },
    {
      name: 'FormLabel',
      description: '접근성을 고려한 폼 레이블',
      usage: '자동으로 폼 컨트롤과 연결되고 오류 상태 표시'
    },
    {
      name: 'FormControl',
      description: '폼 컨트롤의 래퍼',
      usage: 'Input, Select 등의 실제 입력 요소를 감싸기'
    },
    {
      name: 'FormDescription',
      description: '폼 필드의 도움말 텍스트',
      usage: '사용자에게 추가 정보나 지침 제공'
    },
    {
      name: 'FormMessage',
      description: '유효성 검사 오류 메시지',
      usage: '자동으로 오류 메시지 표시 및 접근성 연결'
    }
  ];

  const features = [
    {
      title: 'React Hook Form 통합',
      description: '성능이 우수한 React Hook Form과 완전 통합되어 있습니다.',
      icon: '⚡'
    },
    {
      title: 'Zod 스키마 검증',
      description: 'TypeScript와 함께 타입 안전한 폼 검증을 제공합니다.',
      icon: '🛡️'
    },
    {
      title: '완전한 접근성',
      description: 'WCAG 가이드라인을 준수하는 접근성 기능을 제공합니다.',
      icon: '♿'
    },
    {
      title: '자동 에러 핸들링',
      description: '유효성 검사 오류를 자동으로 표시하고 관리합니다.',
      icon: '🔄'
    },
    {
      title: '다양한 입력 지원',
      description: '텍스트, 선택, 체크박스 등 모든 입력 유형을 지원합니다.',
      icon: '🎛️'
    },
    {
      title: '일관된 스타일링',
      description: '디자인 시스템과 완전히 통합된 스타일을 제공합니다.',
      icon: '🎨'
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
            <h1 className="text-3xl font-semibold">Form</h1>
            <p className="text-muted-foreground">
              React Hook Form과 Zod를 기반으로 한 타입 안전하고 접근성을 고려한 폼 컴포넌트입니다. 
              복잡한 유효성 검사와 다양한 입력 유형을 지원합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            3가지 예제
          </Badge>
          <Badge variant="outline">React Hook Form</Badge>
          <Badge variant="outline">Zod 검증</Badge>
          <Badge variant="outline">완전한 접근성</Badge>
          <Badge variant="outline">TypeScript</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">예제</TabsTrigger>
          <TabsTrigger value="components">구성요소</TabsTrigger>
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
                <div className="p-6 border rounded-lg bg-background">
                  {example.component}
                </div>
                <CodeBlock code={example.code} codeKey={`example-${index}`} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>폼 구성요소</CardTitle>
              <CardDescription>
                Form 컴포넌트를 구성하는 주요 요소들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {components.map((component, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      <h5 className="font-medium">{component.name}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                    <div className="text-xs font-mono bg-muted p-2 rounded">
                      {component.usage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>폼 상태 표시</CardTitle>
              <CardDescription>
                폼의 다양한 상태를 시각적으로 나타내는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    유효한 상태
                  </h5>
                  <div className="space-y-2">
                    <Input placeholder="올바른 입력" defaultValue="valid@example.com" />
                    <p className="text-sm text-muted-foreground">올바른 이메일 형식입니다.</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg space-y-3">
                  <h5 className="font-medium flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-destructive" />
                    오류 상태
                  </h5>
                  <div className="space-y-2">
                    <Input placeholder="잘못된 입력" className="border-destructive" defaultValue="invalid-email" />
                    <p className="text-sm text-destructive">올바른 이메일 주소를 입력해주세요.</p>
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
                Form 컴포넌트를 효과적으로 사용하기 위한 가이드라인입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">언제 사용해야 하나요?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-green-700">✅ 적절한 사용 사례</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 사용자 등록 및 로그인</li>
                      <li>• 프로필 설정 및 업데이트</li>
                      <li>• 연락처 및 문의 폼</li>
                      <li>• 설문조사 및 피드백</li>
                      <li>• 검색 및 필터링</li>
                      <li>• 결제 및 주문 정보</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-blue-700">💡 고려할 사항</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 폼의 길이와 복잡성</li>
                      <li>• 유효성 검사 규칙</li>
                      <li>• 오류 메시지의 명확성</li>
                      <li>• 필수/선택 필드 구분</li>
                      <li>• 모바일 사용성</li>
                      <li>• 자동 저장 기능</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 text-red-700">❌ 피해야 할 사용</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 너무 긴 단일 페이지 폼</li>
                      <li>• 불명확한 오류 메시지</li>
                      <li>• 필수 필드 미표시</li>
                      <li>• 일관성 없는 레이아웃</li>
                      <li>• 접근성 무시</li>
                      <li>• 실시간 검증 과다</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">폼 디자인 원칙</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-700">✅ 좋은 폼 디자인</h5>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">명확한 구조</div>
                        <div>• 논리적인 필드 순서</div>
                        <div>• 관련 필드 그룹화</div>
                        <div>• 일관된 레이블 위치</div>
                        <div className="font-medium mt-3">사용자 친화적</div>
                        <div>• 명확한 필수 필드 표시</div>
                        <div>• 도움말 텍스트 제공</div>
                        <div>• 적절한 입력 유형 사용</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-red-700">❌ 피해야 할 디자인</h5>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                      <div className="space-y-2">
                        <div className="font-medium">혼란스러운 구조</div>
                        <div>• 무작위 필드 배치</div>
                        <div>• 불필요한 필드 요구</div>
                        <div>• 일관성 없는 스타일</div>
                        <div className="font-medium mt-3">사용성 문제</div>
                        <div>• 모호한 오류 메시지</div>
                        <div>• 너무 작은 입력 영역</div>
                        <div>• 접근성 부족</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>접근성</CardTitle>
              <CardDescription>
                Form 컴포넌트의 접근성 기능과 고려사항입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  키보드 네비게이션
                </h4>
                <div className="grid gap-2 md:grid-cols-2 text-sm">
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Tab</kbd>
                    <span>다음 필드로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Shift+Tab</kbd>
                    <span>이전 필드로 이동</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Enter</kbd>
                    <span>폼 제출</span>
                  </div>
                  <div className="flex justify-between p-3 border rounded">
                    <kbd className="bg-muted px-2 py-1 rounded text-xs">Space</kbd>
                    <span>체크박스/라디오 토글</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Accessibility className="w-4 h-4" />
                  스크린 리더 지원
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>aria-labelledby:</strong> 레이블과 컨트롤 자동 연결</li>
                  <li>• <strong>aria-describedby:</strong> 설명과 오류 메시지 연결</li>
                  <li>• <strong>aria-invalid:</strong> 오류 상태 표시</li>
                  <li>• <strong>aria-required:</strong> 필수 필드 표시</li>
                  <li>• <strong>role 속성:</strong> 적절한 의미 전달</li>
                  <li>• <strong>fieldset/legend:</strong> 관련 필드 그룹화</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <MonitorSpeaker className="w-4 h-4" />
                  시각적 피드백
                </h4>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">색상과 대비</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 오류 상태는 빨간색으로 표시</li>
                      <li>• 충분한 색상 대비율 보장</li>
                      <li>• 색상에만 의존하지 않는 표시</li>
                    </ul>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium mb-2">포커스 표시</h5>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 명확한 포커스 링 표시</li>
                      <li>• 호버와 포커스 상태 구분</li>
                      <li>• 논리적인 탭 순서</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Implementation Tab */}
        <TabsContent value="code" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>설치 및 가져오기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="패키지 설치"
                code={`npm install react-hook-form@7.55.0 @hookform/resolvers zod`}
                codeKey="install"
              />
              
              <CodeBlock
                title="컴포넌트 가져오기"
                code={`import { useForm } from "react-hook-form@7.55.0"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form"`}
                codeKey="import"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기본 사용법</CardTitle>
              <CardDescription>
                Form 컴포넌트의 기본적인 사용 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="1. 스키마 정의"
                code={`const formSchema = z.object({
  username: z.string().min(2, {
    message: "사용자명은 최소 2자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "올바른 이메일 주소를 입력해주세요.",
  }),
})`}
                codeKey="schema"
              />

              <CodeBlock
                title="2. 폼 설정"
                code={`const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
    email: "",
  },
})`}
                codeKey="setup"
              />

              <CodeBlock
                title="3. 폼 렌더링"
                code={`<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>사용자명</FormLabel>
          <FormControl>
            <Input placeholder="홍길동" {...field} />
          </FormControl>
          <FormDescription>
            다른 사용자에게 표시될 공개 이름입니다.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">제출</Button>
  </form>
</Form>`}
                codeKey="render"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>고급 사용법</CardTitle>
              <CardDescription>
                복잡한 폼과 커스텀 검증을 위한 고급 사용법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="커스텀 검증"
                code={`const formSchema = z.object({
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다",
  path: ["confirmPassword"],
})`}
                codeKey="custom-validation"
              />

              <CodeBlock
                title="조건부 필드"
                code={`const hasAccount = form.watch("hasAccount")

{hasAccount && (
  <FormField
    control={form.control}
    name="accountDetails"
    render={({ field }) => (
      <FormItem>
        <FormLabel>계정 상세 정보</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)}`}
                codeKey="conditional-fields"
              />

              <CodeBlock
                title="필드 배열"
                code={`import { useFieldArray } from "react-hook-form@7.55.0"

const { fields, append, remove } = useFieldArray({
  control: form.control,
  name: "items"
})

{fields.map((field, index) => (
  <FormField
    key={field.id}
    control={form.control}
    name={\`items.\${index}.name\`}
    render={({ field }) => (
      <FormItem>
        <FormLabel>항목 {index + 1}</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <Button 
          type="button" 
          onClick={() => remove(index)}
        >
          제거
        </Button>
        <FormMessage />
      </FormItem>
    )}
  />
))}`}
                codeKey="field-arrays"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
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