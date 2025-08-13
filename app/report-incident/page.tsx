"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  Phone,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Info,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function ReportIncident() {
  const [currentStep, setCurrentStep] = useState(1)
  const [incidentType, setIncidentType] = useState("")
  const [urgency, setUrgency] = useState("")

  const steps = [
    { number: 1, title: "Incident Type", description: "What happened?" },
    { number: 2, title: "Details", description: "Tell us more" },
    { number: 3, title: "Contact", description: "How to reach you" },
    { number: 4, title: "Review", description: "Confirm details" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link href="/" className="text-sm hover:underline">
              ← Back to SC3
            </Link>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <Alert className="border-l-4 border-l-red-500 bg-red-50 rounded-none">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <strong>Emergency?</strong> If this is an active cyber attack or immediate threat, call our 24/7 hotline:
          <strong className="ml-2">0800 XXX XXXX</strong>
        </AlertDescription>
      </Alert>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report a Cyber Security Incident</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Help us protect Scotland by reporting cyber security incidents. All reports are treated confidentially and
            help improve our national cyber security posture.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number
                      ? "bg-[#0065bd] border-[#0065bd] text-white"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : step.number}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div
                    className={`text-sm font-medium ${currentStep >= step.number ? "text-[#0065bd]" : "text-gray-500"}`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-px mx-4 ${currentStep > step.number ? "bg-[#0065bd]" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  Step {currentStep}: {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription>{steps[currentStep - 1].description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Incident Type */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium mb-4 block">
                        What type of incident are you reporting?
                      </Label>
                      <RadioGroup value={incidentType} onValueChange={setIncidentType} className="space-y-3">
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="phishing" id="phishing" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="phishing" className="font-medium cursor-pointer">
                              Phishing / Suspicious Email
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Suspicious emails, fake websites, or social engineering attempts
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="malware" id="malware" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="malware" className="font-medium cursor-pointer">
                              Malware / Ransomware
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Virus infections, ransomware attacks, or suspicious software
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="data-breach" id="data-breach" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="data-breach" className="font-medium cursor-pointer">
                              Data Breach / Unauthorized Access
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Unauthorized access to systems or data, potential data theft
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="fraud" id="fraud" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="fraud" className="font-medium cursor-pointer">
                              Online Fraud / Scam
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Financial fraud, fake websites, or online scams
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="other" id="other" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="other" className="font-medium cursor-pointer">
                              Other Cyber Security Incident
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">Any other cyber security related incident</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-4 block">How urgent is this incident?</Label>
                      <RadioGroup value={urgency} onValueChange={setUrgency} className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 border border-red-200 rounded-lg bg-red-50">
                          <RadioGroupItem value="critical" id="critical" />
                          <Label htmlFor="critical" className="font-medium text-red-800 cursor-pointer">
                            Critical - Active attack in progress
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border border-orange-200 rounded-lg bg-orange-50">
                          <RadioGroupItem value="high" id="high" />
                          <Label htmlFor="high" className="font-medium text-orange-800 cursor-pointer">
                            High - Significant impact or potential for spread
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border border-yellow-200 rounded-lg bg-yellow-50">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium" className="font-medium text-yellow-800 cursor-pointer">
                            Medium - Contained but needs attention
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value="low" id="low" />
                          <Label htmlFor="low" className="font-medium cursor-pointer">
                            Low - For information or advice
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 2: Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="incident-summary" className="text-base font-medium">
                        Incident Summary *
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">Provide a brief summary of what happened</p>
                      <Textarea
                        id="incident-summary"
                        placeholder="e.g., Received suspicious email claiming to be from bank asking for login details..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="incident-details" className="text-base font-medium">
                        Detailed Description
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">
                        Include timeline, systems affected, and any actions taken
                      </p>
                      <Textarea
                        id="incident-details"
                        placeholder="Provide as much detail as possible..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="affected-systems" className="text-base font-medium">
                        Affected Systems/Services
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">
                        What systems, applications, or services were affected?
                      </p>
                      <Input id="affected-systems" placeholder="e.g., Email system, customer database, website..." />
                    </div>

                    <div>
                      <Label htmlFor="evidence" className="text-base font-medium">
                        Evidence or Attachments
                      </Label>
                      <p className="text-sm text-gray-600 mb-2">
                        Screenshots, log files, or other evidence (do not include sensitive data)
                      </p>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Drag and drop files here, or click to browse</p>
                        <Button variant="outline" className="mt-2 bg-transparent">
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium mb-4 block">Who are you reporting on behalf of?</Label>
                      <RadioGroup className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="cursor-pointer">
                            Individual / Personal
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="business" id="business" />
                          <Label htmlFor="business" className="cursor-pointer">
                            Business / Organization
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="public-sector" id="public-sector" />
                          <Label htmlFor="public-sector" className="cursor-pointer">
                            Public Sector / Government
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization (if applicable)</Label>
                      <Input id="organization" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                    </div>

                    <div>
                      <Label htmlFor="preferred-contact" className="text-base font-medium">
                        Preferred Contact Method
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="either">Either</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm">
                        I would like to receive updates about this incident and general cyber security alerts
                      </Label>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Please review your submission before sending. You will receive a confirmation email with a
                        reference number.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Incident Type</h4>
                        <p className="text-sm text-gray-600">Phishing / Suspicious Email - High Priority</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Summary</h4>
                        <p className="text-sm text-gray-600">Received suspicious email claiming to be from bank...</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Contact Information</h4>
                        <p className="text-sm text-gray-600">John Smith (john.smith@example.com) - Individual</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="consent" />
                      <Label htmlFor="consent" className="text-sm">
                        I consent to SC3 processing this information to investigate the incident and improve Scotland&#39;s
                        cyber security. I understand this may be shared with relevant authorities.
                      </Label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                      disabled={!incidentType || !urgency}
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button className="bg-[#0065bd] hover:bg-[#004494]">Submit Report</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-3">If this is an active cyber attack or immediate threat:</p>
                <div className="space-y-2">
                  <p className="font-semibold text-red-800">24/7 Hotline:</p>
                  <p className="text-lg font-bold text-red-800">0800 XXX XXXX</p>
                  <p className="text-sm text-red-700">incident@sc3.gov.scot</p>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#0065bd] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Immediate Acknowledgment</p>
                      <p className="text-gray-600">You&#39;ll receive a confirmation email with reference number</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#0065bd] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Initial Assessment</p>
                      <p className="text-gray-600">Our team will review and categorize your report</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#0065bd] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Response & Guidance</p>
                      <p className="text-gray-600">We&#39;ll provide guidance and coordinate with relevant authorities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Notice */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Your report is handled securely and confidentially. We only share information with relevant
                  authorities when necessary for investigation or prevention.
                </p>
                <Link href="#" className="text-sm text-[#0065bd] hover:underline">
                  Read our full privacy policy →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
