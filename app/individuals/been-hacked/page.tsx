import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Eye,
  Lock,
  Smartphone,
  CreditCard,
  Download,
  Share2,
  Bookmark,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

export default function BeenHackedPage() {
  const steps = [
    {
      number: 1,
      title: "Immediate Actions",
      description: "Take these steps right now to limit damage",
      timeEstimate: "5-10 minutes",
      priority: "Critical",
      completed: false,
      actions: [
        "Change passwords for all important accounts",
        "Enable two-factor authentication where possible",
        "Check recent account activity and transactions",
        "Log out of all devices and sessions",
      ],
    },
    {
      number: 2,
      title: "Secure Your Accounts",
      description: "Strengthen security across all your online accounts",
      timeEstimate: "15-30 minutes",
      priority: "High",
      completed: false,
      actions: [
        "Update security questions and recovery information",
        "Review and revoke suspicious app permissions",
        "Set up account monitoring and alerts",
        "Contact your bank if financial accounts are affected",
      ],
    },
    {
      number: 3,
      title: "Check Your Devices",
      description: "Ensure your devices are clean and secure",
      timeEstimate: "30-60 minutes",
      priority: "High",
      completed: false,
      actions: [
        "Run full antivirus scans on all devices",
        "Update all software and operating systems",
        "Remove any suspicious apps or programs",
        "Check for unusual network activity",
      ],
    },
    {
      number: 4,
      title: "Monitor and Report",
      description: "Keep watch and report the incident",
      timeEstimate: "10-15 minutes",
      priority: "Medium",
      completed: false,
      actions: [
        "Monitor accounts for unusual activity",
        "Report the incident to relevant authorities",
        "Document what happened for future reference",
        "Set up ongoing security monitoring",
      ],
    },
  ]

  const warningSignsData = [
    {
      category: "Account Activity",
      signs: [
        "Unexpected password reset emails",
        "Login notifications from unknown locations",
        "New devices or apps connected to your accounts",
        "Changes to account settings you didn't make",
      ],
      icon: User,
    },
    {
      category: "Financial",
      signs: [
        "Unauthorized transactions or purchases",
        "New accounts opened in your name",
        "Credit score changes",
        "Bills for services you didn't sign up for",
      ],
      icon: CreditCard,
    },
    {
      category: "Communication",
      signs: [
        "Friends receiving spam from your accounts",
        "Emails or messages you didn't send",
        "Social media posts you didn't create",
        "Contacts reporting suspicious messages from you",
      ],
      icon: Mail,
    },
    {
      category: "Device Behavior",
      signs: [
        "Slower than usual performance",
        "Unexpected pop-ups or ads",
        "Programs running that you didn't start",
        "Files or folders you didn't create",
      ],
      icon: Smartphone,
    },
  ]

  const relatedArticles = [
    {
      title: "How to Create Strong Passwords",
      description: "Learn to create and manage secure passwords that protect your accounts",
      readTime: "5 min read",
      category: "Password Security",
      href: "/individuals/password-security",
    },
    {
      title: "Setting Up Two-Factor Authentication",
      description: "Step-by-step guide to adding an extra layer of security to your accounts",
      readTime: "8 min read",
      category: "Account Security",
      href: "/individuals/two-factor-auth",
    },
    {
      title: "Recognizing Phishing Attempts",
      description: "Learn to identify and avoid phishing emails and fake websites",
      readTime: "6 min read",
      category: "Online Safety",
      href: "/individuals/phishing-guide",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0065bd] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm hover:underline">
                gov.scot
              </Link>
              <div className="h-6 w-px bg-white/30"></div>
              <div className="font-semibold">Scottish Cyber Coordination Centre</div>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/individuals" className="hover:underline font-semibold">
                For Individuals
              </Link>
              <Link href="/businesses" className="hover:underline">
                For Businesses
              </Link>
              <Link href="/public-sector" className="hover:underline">
                For Public Sector
              </Link>
              <Link href="/education" className="hover:underline">
                For Education
              </Link>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
              <Link href="/report-incident" className="hover:underline">
                Get Help
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/individuals" className="hover:underline">
              For Individuals
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">I Think I've Been Hacked</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800">Individual Guide</Badge>
                <Badge variant="outline">Emergency Response</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">I Think I've Been Hacked - What Do I Do?</h1>
              <p className="text-xl text-gray-600 mb-6">
                Don't panic. Follow this step-by-step guide to secure your accounts and devices if you suspect you've
                been hacked.
              </p>

              {/* Article Meta */}
              <div className="flex items-center space-x-6 text-sm text-gray-500 pb-6 border-b">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Updated: January 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>15-20 min read</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  <span>2,847 views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>

            {/* Emergency Alert */}
            <Alert className="border-l-4 border-l-red-500 bg-red-50 mb-8">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <strong>Acting quickly is important.</strong> If you suspect you've been hacked, follow the immediate
                actions below right away. If you're dealing with financial fraud, contact your bank immediately.
              </AlertDescription>
            </Alert>

            {/* Quick Assessment */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Assessment: Have You Been Hacked?
                </CardTitle>
                <CardDescription>Check if you're experiencing any of these warning signs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {warningSignsData.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <div key={index}>
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <IconComponent className="h-4 w-4 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">{category.category}</h4>
                        </div>
                        <ul className="space-y-2">
                          {category.signs.map((sign, signIndex) => (
                            <li key={signIndex} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {sign}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>If you're experiencing any of these signs,</strong> follow the recovery steps below
                    immediately. When in doubt, it's better to be safe and take action.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recovery Steps */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recovery Steps</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                              step.completed ? "bg-green-500" : "bg-blue-600"
                            }`}
                          >
                            {step.completed ? <CheckCircle className="h-5 w-5" /> : step.number}
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                            <CardDescription className="text-base">{step.description}</CardDescription>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge
                            variant={step.priority === "Critical" ? "destructive" : "secondary"}
                            className={
                              step.priority === "Critical"
                                ? "bg-red-100 text-red-800"
                                : step.priority === "High"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-gray-100 text-gray-800"
                            }
                          >
                            {step.priority}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {step.timeEstimate}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {step.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
                            <span className="text-gray-700">{action}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Detailed Instructions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Prevention Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-green-600" />
                  Preventing Future Attacks
                </CardTitle>
                <CardDescription>
                  Once you've secured your accounts, take these steps to prevent future incidents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Essential Security Practices</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Use unique, strong passwords for every account
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Enable two-factor authentication everywhere possible
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Keep software and devices updated
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Be cautious with email links and attachments
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Regular Security Habits</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Review account activity monthly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Use reputable antivirus software
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Back up important data regularly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        Stay informed about current threats
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* When to Get Help */}
            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <Phone className="h-5 w-5 mr-2" />
                  When to Get Professional Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 mb-4">Contact professionals or authorities if you experience:</p>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                    Financial fraud or unauthorized transactions
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                    Identity theft or accounts opened in your name
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                    Persistent malware that won't remove
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                    Blackmail or extortion attempts
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-orange-200">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call SC3 Helpline
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-100 bg-transparent"
                    >
                      Report Incident Online
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Article Navigation */}
            <div className="flex items-center justify-between py-6 border-t border-b">
              <Button variant="ghost" asChild>
                <Link href="/individuals/password-security">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Password Security
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/individuals/two-factor-auth">
                  Next: Two-Factor Authentication
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Related Articles */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedArticles.map((article, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={article.href}>
                            Read more
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Actions */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-red-700 mb-2">24/7 Emergency Hotline:</p>
                      <p className="font-bold text-red-800 text-lg">0800 XXX XXXX</p>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full border-red-600 text-red-600 bg-transparent" size="sm">
                      Report Online
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">On This Page</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm">
                    <Link href="#assessment" className="block text-blue-600 hover:underline">
                      Quick Assessment
                    </Link>
                    <Link href="#immediate" className="block text-blue-600 hover:underline">
                      Immediate Actions
                    </Link>
                    <Link href="#secure" className="block text-blue-600 hover:underline">
                      Secure Your Accounts
                    </Link>
                    <Link href="#devices" className="block text-blue-600 hover:underline">
                      Check Your Devices
                    </Link>
                    <Link href="#monitor" className="block text-blue-600 hover:underline">
                      Monitor and Report
                    </Link>
                    <Link href="#prevention" className="block text-blue-600 hover:underline">
                      Prevention Tips
                    </Link>
                    <Link href="#help" className="block text-blue-600 hover:underline">
                      When to Get Help
                    </Link>
                  </nav>
                </CardContent>
              </Card>

              {/* Download Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Download Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Recovery Checklist (PDF)
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Password Manager Guide
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Security Settings Checklist
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Still Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Our support team is here to help with any questions about recovering from a cyber incident.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <span>help@sc3.gov.scot</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <span>0800 XXX XXXX</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
