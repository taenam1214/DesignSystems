import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Tag,
  Copy,
  Check,
  Palette,
  Info,
  CheckCircle,
  AlertTriangle,
  Type,
  ArrowRight,
  Users,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Calendar,
  Search,
  User,
  MapPin,
  CreditCard,
  MessageSquare,
  Star,
  Globe,
  Settings,
  Bell,
  Shield,
  Heart,
  Bookmark
} from 'lucide-react';

export function LabelComponentPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

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
            <Tag className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Label</h1>
            <p className="text-muted-foreground">
              Accessible label components for form fields and UI elements. Offers various sizes, states, and style options.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Type className="w-3 h-3" />
            Form Components
          </Badge>
          <Badge variant="outline">Accessibility</Badge>
          <Badge variant="outline">Required Field</Badge>
          <Badge variant="outline">Help Text</Badge>
          <Badge variant="outline">Error State</Badge>
        </div>
      </div>

      <Tabs defaultValue="examples" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="code">Implementation</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          {/* Basic Labels */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Labels</CardTitle>
              <CardDescription>
                Examples of basic labels with various sizes and styles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Size Variants</h4>
                  <div className="space-y-3">
                    <div>
                      <Label size="sm">Small Label</Label>
                      <Input placeholder="Small Label Example" className="mt-1" />
                    </div>
                    <div>
                      <Label size="default">Default Label</Label>
                      <Input placeholder="Default Label Example" className="mt-1" />
                    </div>
                    <div>
                      <Label size="lg">Large Label</Label>
                      <Input placeholder="Large Label Example" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Style Variants</h4>
                  <div className="space-y-3">
                    <div>
                      <Label variant="default">Default Style</Label>
                      <Input placeholder="Default Style" className="mt-1" />
                    </div>
                    <div>
                      <Label variant="muted">Muted Style</Label>
                      <Input placeholder="Muted Style" className="mt-1" />
                    </div>
                    <div>
                      <Label variant="success">Success Style</Label>
                      <Input placeholder="Success Style" className="mt-1" />
                    </div>
                    <div>
                      <Label variant="warning">Warning Style</Label>
                      <Input placeholder="Warning Style" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">State Variants</h4>
                  <div className="space-y-3">
                    <div>
                      <Label required>Required Field</Label>
                      <Input placeholder="Required Input Field" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        error 
                        errorMessage="This field is required"
                      >
                        Error State
                      </Label>
                      <Input placeholder="Field with error" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        helpText="Username must be 3-20 characters"
                      >
                        Help Text Included
                      </Label>
                      <Input placeholder="Username" className="mt-1" />
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// Size Variants
<Label size="sm">Small Label</Label>
<Label size="default">Default Label</Label>
<Label size="lg">Large Label</Label>

// Style Variants
<Label variant="default">Default Style</Label>
<Label variant="muted">Muted Style</Label>
<Label variant="success">Success Style</Label>
<Label variant="warning">Warning Style</Label>

// State Variants
<Label required>Required Field</Label>
<Label error errorMessage="Error message">Error State</Label>
<Label helpText="Help text">Help Text Included</Label>`}
                codeKey="basic-labels"
              />
            </CardContent>
          </Card>

          {/* Form Components */}
          <Card>
            <CardHeader>
              <CardTitle>Use with Form Components</CardTitle>
              <CardDescription>
                Examples of using labels with various form components.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" required>Email Address</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="taenam356@outlook.com" 
                      className="mt-1" 
                    />
                  </div>

                  <div>
                    <Label 
                      htmlFor="password" 
                      required
                      helpText="Minimum 8 characters, alphanumeric combination"
                    >
                      Password
                    </Label>
                    <div className="relative mt-1">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio"
                      placeholder="Introduce yourself" 
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Select Country</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kr">Korea</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label 
                      htmlFor="terms" 
                      required
                      className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms of service
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Receive notifications</Label>
                  </div>

                  <div>
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup defaultValue="email" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email">taenam356@outlook.com</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sms" id="contact-sms" />
                        <Label htmlFor="contact-sms">SMS</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label 
                      variant="warning"
                      helpText="This information will be displayed publicly"
                    >
                      Public Profile Name
                    </Label>
                    <Input placeholder="Display name" className="mt-1" />
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// Basic Input Field
<Label htmlFor="email" required>Email Address</Label>
<Input id="email" type="email" placeholder="taenam356@outlook.com" />

// Field with Help Text
<Label 
  htmlFor="password" 
  required
  helpText="Minimum 8 characters, alphanumeric combination"
>
  Password
</Label>
<Input id="password" type="password" />

// Use with Checkbox
<Checkbox id="terms" />
<Label htmlFor="terms" required>I agree to the terms of service</Label>

// Use with Radio Group
<Label>Preferred Contact Method</Label>
<RadioGroup defaultValue="email">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="email" id="contact-email" />
    <Label htmlFor="contact-email">Email</Label>
  </div>
</RadioGroup>`}
                codeKey="form-components"
              />
            </CardContent>
          </Card>

          {/* Complex Forms */}
          <Card>
            <CardHeader>
              <CardTitle>Complex Form Example</CardTitle>
              <CardDescription>
                Examples of label usage in real-world scenarios.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" required>First Name</Label>
                      <Input id="firstName" placeholder="Gildong Hong" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" required>Last Name</Label>
                      <Input id="lastName" placeholder="Hong" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label 
                      htmlFor="birthDate" 
                      helpText="Birth date is used for identity verification"
                    >
                      Birth Date
                    </Label>
                    <Input id="birthDate" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone" required>Phone Number</Label>
                    <Input id="phone" placeholder="010-1234-5678" className="mt-1" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address Information
                  </h4>
                  <div>
                    <Label htmlFor="address" required>Address</Label>
                    <Input id="address" placeholder="Seoul, South Korea..." className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" required>City</Label>
                      <Input id="city" placeholder="Seoul" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" required>Zip Code</Label>
                      <Input id="zipCode" placeholder="12345" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label 
                      htmlFor="specialInstructions"
                      variant="muted"
                      helpText="If you have special requests for delivery, please enter them"
                    >
                      Delivery Instructions
                    </Label>
                    <Textarea 
                      id="specialInstructions"
                      placeholder="e.g., Please leave it at the guardhouse" 
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium flex items-center gap-2 mb-4">
                  <Settings className="w-4 h-4" />
                  Settings
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <Switch id="emailNotifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <Switch id="smsNotifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pushNotifications">Push Notifications</Label>
                      <Switch id="pushNotifications" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>Language Settings</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ko">Korean</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ja">Japanese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label 
                        variant="warning"
                        helpText="All data will be permanently deleted when you delete your profile"
                      >
                        Dangerous Area
                      </Label>
                      <Button variant="destructive" className="mt-2 w-full">
                        Delete Profile
                      </Button>
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
              <CardTitle>Label Patterns and Best Practices</CardTitle>
              <CardDescription>
                Design patterns and best practices for effective label usage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Recommended Pattern
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <Label htmlFor="good-example1" required>Clear Label Text</Label>
                      <Input id="good-example1" placeholder="example@email.com" className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">✓ Specific and easy-to-understand label</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <Label 
                        htmlFor="good-example2" 
                        helpText="Password must be at least 8 characters"
                      >
                        Password
                      </Label>
                      <Input id="good-example2" type="password" className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">✓ Provide useful help text</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <Label htmlFor="good-example3" required>Required Field</Label>
                      <Input id="good-example3" className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">✓ Mark required fields with an asterisk (*)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Patterns to Avoid
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <Label htmlFor="bad-example1">Input</Label>
                      <Input id="bad-example1" placeholder="Enter here" className="mt-1" />
                      <p className="text-xs text-red-600 mt-1">✗ Vague and unclear label</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <Input placeholder="Email address" />
                      <p className="text-xs text-red-600 mt-1">✗ Use placeholder only instead of label</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                      <Label htmlFor="bad-example3" variant="destructive">!!! Very Important Field !!!</Label>
                      <Input id="bad-example3" className="mt-1" />
                      <p className="text-xs text-red-600 mt-1">✗ Excessive emphasis or emotional expression</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Error Handling Patterns</CardTitle>
              <CardDescription>
                Methods for displaying form validation errors effectively.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Error Example</h4>
                  <div className="space-y-4">
                    <div>
                      <Label 
                        htmlFor="error-email"
                        required
                        error
                        errorMessage="Please enter a valid email address"
                      >
                        Email Address
                      </Label>
                      <Input 
                        id="error-email"
                        type="email" 
                        defaultValue="invalid-email"
                        className="mt-1 border-destructive" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="error-password"
                        required
                        error
                        errorMessage="Password must be at least 8 characters"
                      >
                        Password
                      </Label>
                      <Input 
                        id="error-password"
                        type="password" 
                        defaultValue="123"
                        className="mt-1 border-destructive" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="error-required"
                        required
                        error
                        errorMessage="This field is required"
                      >
                        Required Field
                      </Label>
                      <Input 
                        id="error-required"
                        className="mt-1 border-destructive" 
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Success State Example</h4>
                  <div className="space-y-4">
                    <div>
                      <Label 
                        htmlFor="success-email"
                        variant="success"
                        helpText="Email address has been verified"
                      >
                        Email Address
                      </Label>
                      <Input 
                        id="success-email"
                        type="email" 
                        defaultValue="user@example.com"
                        className="mt-1 border-green-500" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="success-username"
                        variant="success"
                        helpText="Available username"
                      >
                        Username
                      </Label>
                      <Input 
                        id="success-username"
                        defaultValue="cooluser123"
                        className="mt-1 border-green-500" 
                      />
                    </div>
                    <div>
                      <Label 
                        htmlFor="success-password"
                        variant="success"
                        helpText="Strong password"
                      >
                        Password
                      </Label>
                      <Input 
                        id="success-password"
                        type="password" 
                        defaultValue="SecurePassword123!"
                        className="mt-1 border-green-500" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`// Error State
<Label 
  htmlFor="email"
  required
  error
  errorMessage="Please enter a valid email address"
>
  Email Address
</Label>
<Input 
  id="email"
  className="border-destructive" 
  defaultValue="invalid-email"
/>

// Success State
<Label 
  htmlFor="username"
  variant="success"
  helpText="Available username"
>
  Username
</Label>
<Input 
  id="username"
  className="border-green-500" 
  defaultValue="cooluser123"
/>`}
                codeKey="error-patterns"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Internationalization and Multilingual Support</CardTitle>
              <CardDescription>
                Patterns for using labels in multilingual environments.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-4">
                  <h4 className="font-medium">Korean</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="ko-name" required>Full Name</Label>
                      <Input id="ko-name" placeholder="Gildong Hong" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        htmlFor="ko-phone"
                        helpText="Please enter your phone number"
                      >
                        Phone Number
                      </Label>
                      <Input id="ko-phone" placeholder="010-1234-5678" className="mt-1" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">English</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="en-name" required>Full Name</Label>
                      <Input id="en-name" placeholder="John Doe" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        htmlFor="en-phone"
                        helpText="Please enter your phone number"
                      >
                        Phone Number
                      </Label>
                      <Input id="en-phone" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Japanese</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="jp-name" required>Surname</Label>
                      <Input id="jp-name" placeholder="Taro Tanaka" className="mt-1" />
                    </div>
                    <div>
                      <Label 
                        htmlFor="jp-phone"
                        helpText="Please enter your phone number"
                      >
                        Phone Number
                      </Label>
                      <Input id="jp-phone" placeholder="090-1234-5678" className="mt-1" />
                    </div>
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
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>
                Best practices for effective label usage.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Recommendations
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use clear and specific label text</li>
                    <li>• Utilize the required attribute for required fields</li>
                    <li>• Provide additional information with help text</li>
                    <li>• Connect form controls with htmlFor</li>
                    <li>• Maintain consistent label size and style</li>
                    <li>• Error messages should be specific and actionable</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-red-700 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Things to Avoid
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use vague or technical terms</li>
                    <li>• Replace label with placeholder only</li>
                    <li>• Excessive emphasis or emotional expression</li>
                    <li>• Unnecessary long label text</li>
                    <li>• Inconsistent style application</li>
                    <li>• Missing accessibility attributes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>
                Guidelines to ensure all users can effectively use labels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Screen Reader Support</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Explicitly state associated controls with htmlFor</li>
                    <li>• Utilize aria-label or aria-labelledby</li>
                    <li>• Add aria-required attribute for required fields</li>
                    <li>• Add aria-invalid and aria-describedby for error states</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Visual Accessibility</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ensure sufficient color contrast (4.5:1 or higher)</li>
                    <li>• Communicate information without relying solely on color</li>
                    <li>• Clear focus indication</li>
                    <li>• Appropriate font size and spacing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Keyboard Navigation</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Clicking a label moves focus to the associated control</li>
                    <li>• Construct a logical tab order</li>
                    <li>• Correctly connect with checkboxes and radio buttons</li>
                    <li>• Direct navigation to error fields supported</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When to Use?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-green-700">Label Usage</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Form input fields</li>
                    <li>• Checkboxes/Radio</li>
                    <li>• Switch controls</li>
                    <li>• Dropdown selections</li>
                    <li>• Text areas</li>
                    <li>• Sliders</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2">Alternative Expressions</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Heading:</strong> Section title</li>
                    <li>• <strong>Caption:</strong> Image description</li>
                    <li>• <strong>Text:</strong> General text</li>
                    <li>• <strong>Tooltip:</strong> Help pop-up</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700">Things to Avoid</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Simple text display</li>
                    <li>• Title or heading</li>
                    <li>• Decorative text</li>
                    <li>• Cases where no associated control exists</li>
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
              <CardTitle>Component API</CardTitle>
              <CardDescription>
                Properties and settings for the Label component.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Props</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">Property</th>
                        <th className="text-left p-2 font-medium">Type</th>
                        <th className="text-left p-2 font-medium">Default</th>
                        <th className="text-left p-2 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">"sm" | "default" | "lg"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">Label size</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">variant</td>
                        <td className="p-2">"default" | "muted" | "destructive" | "success" | "warning"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">Label style variant</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">required</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">Mark as required field (asterisk)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">error</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">Mark as error state</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">helpText</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Help text</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">errorMessage</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Error message</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">htmlFor</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Associated form control ID</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Installation and Import</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="Import"
                code={`import { Label } from "./components/ui/label"`}
                codeKey="import"
              />
              
              <CodeBlock
                title="Basic Usage"
                code={`// Basic Label
<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />

// Required Field
<Label htmlFor="password" required>Password</Label>
<Input id="password" type="password" />

// Field with Help Text
<Label 
  htmlFor="username"
  helpText="3-20 characters, alphanumeric combination"
>
  Username
</Label>
<Input id="username" />

// Error State
<Label 
  htmlFor="confirmPassword"
  required
  error
  errorMessage="Passwords do not match"
>
  Confirm Password
</Label>
<Input id="confirmPassword" type="password" />`}
                codeKey="basic-usage"
              />

              <CodeBlock
                title="Size Variants"
                code={`<Label size="sm">Small Label</Label>
<Label size="default">Default Label</Label>
<Label size="lg">Large Label</Label>`}
                codeKey="size-variants"
              />

              <CodeBlock
                title="Style Variants"
                code={`<Label variant="default">Default Style</Label>
<Label variant="muted">Muted Style</Label>
<Label variant="success">Success Style</Label>
<Label variant="warning">Warning Style</Label>
<Label variant="destructive">Error Style</Label>`}
                codeKey="style-variants"
              />

              <CodeBlock
                title="Use with Checkbox"
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" required>
    I agree to the terms of service
  </Label>
</div>`}
                codeKey="checkbox-usage"
              />

              <CodeBlock
                title="Use with Radio Group"
                code={`<Label>Preferred Contact Method</Label>
<RadioGroup defaultValue="email">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="email" id="contact-email" />
    <Label htmlFor="contact-email">Email</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="phone" id="contact-phone" />
    <Label htmlFor="contact-phone">Phone</Label>
  </div>
</RadioGroup>`}
                codeKey="radio-usage"
              />

              <CodeBlock
                title="Form Validation"
                code={`const [errors, setErrors] = useState({});

<Label 
  htmlFor="email"
  required
  error={!!errors.email}
  errorMessage={errors.email}
>
  Email Address
</Label>
<Input 
  id="email"
  type="email"
  className={errors.email ? "border-destructive" : ""}
/>`}
                codeKey="form-validation"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}