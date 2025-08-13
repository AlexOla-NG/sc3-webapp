import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  AlertTriangle,
  Download,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  Home,
  Smartphone,
  CreditCard,
  Lock,
  Eye,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function IndividualsPage() {
  const quickActions = [
    {
      title: "Report Suspicious Activity",
      description: "Report phishing emails, scams, or suspicious online activity",
      icon: AlertTriangle,
      href: "/report-incident",
      urgent: true,
    },
    {
      title: "Check if You've Been Hacked",
      description: "Step-by-step guide to check and secure your accounts",
      icon: Shield,
      href: "/individuals/been-hacked",
      urgent: false,
    },
    {
      title: "Secure Your Home Network",
      description: "Protect your WiFi and connected devices",
      icon: Home,
      href: "/individuals/home-network",
      urgent: false,
    },
  ]

  const topThreats = [
    {
      title: "Phishing Emails",
      description: "Fake emails trying to steal your personal information",
      severity: "High",
      icon: Mail,
    },
    {
      title: "Online Shopping Scams",
      description: "Fake websites and fraudulent online stores",
      severity: "Medium",
      icon: CreditCard,
    },
    {
      title: "Social Media Fraud",
      description: "Fake profiles and romance scams on social platforms",
      severity: "Medium",
      icon: MessageSquare,
    },
  ]

  const essentialGuides = [
    {
      title: "Password Security Guide",
      description: "Create strong passwords and use password managers safely",
      type: "Guide",
      duration: "10 min read",
      downloads: 2100,
      icon: Lock,
    },
    {
      title: "Safe Online Shopping",
      description: "How to shop online safely and avoid scams",
      type: "Checklist",
      duration: "5 min read",
      downloads: 1850,
      icon: CreditCard,
    },
    {
      title: "Social Media Privacy",
      description: "Protect your privacy on Facebook, Instagram, and other platforms",
      type: "Video",
      duration: "12 min watch",
      downloads: 1200,
      icon: Eye,
    },
    {
      title: "Mobile Device Security",
      description: "Keep your smartphone and tablet secure",
      type: "Guide",
      duration: "8 min read",
      downloads: 980,
      icon: Smartphone,
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
            <span className="text-gray-900">For Individuals</span>
          </nav>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Cyber Security for Individuals</h1>
                  <p className="text-xl opacity-90">Stay safe online and protect yourself from cyber threats</p>
                </div>
              </div>
              <p className="text-lg mb-8 opacity-90 max-w-3xl">
                Whether you're shopping online, using social media, or just browsing the web, we'll help you stay secure
                and protect your personal information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Report a Problem
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Need help right now?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon
                return (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-shadow ${action.urgent ? "border-red-200 bg-red-50" : ""}`}
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                          action.urgent ? "bg-red-100" : "bg-blue-100"
                        }`}
                      >
                        <IconComponent className={`h-8 w-8 ${action.urgent ? "text-red-600" : "text-blue-600"}`} />
                      </div>
                      <CardTitle className={action.urgent ? "text-red-800" : "text-gray-900"}>{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="mb-6">{action.description}</CardDescription>
                      <Button
                        className={action.urgent ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}
                        asChild
                      >
                        <Link href={action.href}>{action.urgent ? "Report Now" : "Learn More"}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Current Threats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Current Threats to Watch</h2>
              <Link href="/threats" className="text-blue-600 hover:underline flex items-center">
                View all threats <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {topThreats.map((threat, index) => {
                const IconComponent = threat.icon
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-orange-600" />
                        </div>
                        <Badge variant={threat.severity === "High" ? "destructive" : "secondary"}>
                          {threat.severity} Risk
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{threat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{threat.description}</CardDescription>
                      <Link href="#" className="text-blue-600 hover:underline text-sm">
                        Learn how to protect yourself →
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Essential Guides */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Security Guides</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start with these fundamental guides to build your cyber security knowledge
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {essentialGuides.map((guide, index) => {
                const IconComponent = guide.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                            <Badge variant="outline">{guide.type}</Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{guide.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{guide.duration}</span>
                              <span className="flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                {guide.downloads}
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-2" />
                                Preview
                              </Button>
                              <Button size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/resources?audience=Individual">
                  View All Individual Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cyber Security Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Follow these steps to build strong cyber security habits
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Secure Your Accounts",
                    description: "Use strong, unique passwords and enable two-factor authentication",
                    actions: ["Create strong passwords", "Enable 2FA", "Use a password manager"],
                  },
                  {
                    step: 2,
                    title: "Protect Your Devices",
                    description: "Keep your devices updated and install security software",
                    actions: ["Install updates", "Use antivirus", "Secure your WiFi"],
                  },
                  {
                    step: 3,
                    title: "Stay Alert Online",
                    description: "Learn to recognize and avoid common online threats",
                    actions: ["Spot phishing emails", "Verify websites", "Think before you click"],
                  },
                  {
                    step: 4,
                    title: "Plan for Problems",
                    description: "Know what to do if something goes wrong",
                    actions: ["Know who to contact", "Back up your data", "Monitor your accounts"],
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.actions.map((action, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Help and Support */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Personal Help?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our team is here to help you with any cyber security questions or concerns
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-600 mb-4">Monday to Friday, 9am to 5pm</p>
                  <p className="font-semibold text-lg">0800 XXX XXXX</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-4">We'll respond within 24 hours</p>
                  <p className="font-semibold">help@sc3.gov.scot</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
