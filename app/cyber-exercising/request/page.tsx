'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, Send, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ExerciseRequestPage() {
  const [formData, setFormData] = useState({
    organisationName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    organisationType: '',
    exerciseType: '',
    objectives: '',
    currentCapability: '',
    specificScenarios: '',
    participantLevel: '',
    additionalRequirements: '',
    preferredTimeframe: '',
    followUpDiscussion: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-900">Request Submitted Successfully</CardTitle>
              <CardDescription className="text-green-700">
                Thank you for your cyber exercise request. Our team will review your requirements and contact you within 2-3 working days to discuss your needs in detail.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <p className="text-sm text-green-600">
                  <strong>What happens next:</strong>
                </p>
                <ul className="text-sm text-green-700 space-y-2 text-left max-w-md mx-auto">
                  <li>• SC3 team will review your initial requirements</li>
                  <li>• We'll schedule a detailed discussion about your objectives</li>
                  <li>• Together we'll design an exercise tailored to your needs</li>
                  <li>• We'll coordinate the exercise delivery and follow-up</li>
                </ul>
                <div className="pt-6">
                  <Button asChild>
                    <Link href="/cyber-exercising">Return to Cyber Exercising</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/cyber-exercising" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cyber Exercising
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Request a Cyber Exercise</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Complete this initial enquiry form to help us understand your cyber exercise requirements. Our team will follow up with a detailed discussion to design an exercise tailored to your organisation's needs.
          </p>
        </div>

        {/* Information Banner */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Initial Requirements Gathering</p>
                <p>This form captures your initial requirements. The SC3 team will contact you to discuss detailed logistics, participant coordination, and exercise design based on your specific objectives.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Exercise Request Details</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us understand your requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Organisation Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Organisation Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organisationName">Organisation Name *</Label>
                    <Input
                      id="organisationName"
                      value={formData.organisationName}
                      onChange={(e) => handleInputChange('organisationName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organisationType">Organisation Type *</Label>
                    <Select value={formData.organisationType} onValueChange={(value) => handleInputChange('organisationType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organisation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local-authority">Local Authority</SelectItem>
                        <SelectItem value="nhs">NHS</SelectItem>
                        <SelectItem value="government-department">Government Department</SelectItem>
                        <SelectItem value="public-body">Public Body</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="third-sector">Third Sector</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactEmail">Email Address *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input
                      id="contactPhone"
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Exercise Requirements */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Exercise Requirements
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="exerciseType">Exercise Type *</Label>
                    <Select value={formData.exerciseType} onValueChange={(value) => handleInputChange('exerciseType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exercise type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tabletop">Tabletop Exercise</SelectItem>
                        <SelectItem value="strategic">Strategic Exercise</SelectItem>
                        <SelectItem value="crisis-management">Crisis Management Exercise</SelectItem>
                        <SelectItem value="board-level">Board-Level Exercise</SelectItem>
                        <SelectItem value="multi-agency">Multi-Agency Exercise</SelectItem>
                        <SelectItem value="custom">Custom Exercise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="participantLevel">Participant Level *</Label>
                    <Select value={formData.participantLevel} onValueChange={(value) => handleInputChange('participantLevel', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select participant level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senior-leadership">Senior Leadership</SelectItem>
                        <SelectItem value="management">Management Team</SelectItem>
                        <SelectItem value="operational">Operational Staff</SelectItem>
                        <SelectItem value="technical">Technical Teams</SelectItem>
                        <SelectItem value="mixed">Mixed Levels</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="objectives">Exercise Objectives *</Label>
                  <Textarea
                    id="objectives"
                    placeholder="What do you hope to achieve with this exercise? What specific areas do you want to test or improve?"
                    value={formData.objectives}
                    onChange={(e) => handleInputChange('objectives', e.target.value)}
                    rows={4}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="currentCapability">Current Cyber Incident Response Capability</Label>
                  <Textarea
                    id="currentCapability"
                    placeholder="Please describe your organisation's current cyber incident response arrangements, plans, and experience."
                    value={formData.currentCapability}
                    onChange={(e) => handleInputChange('currentCapability', e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="specificScenarios">Specific Scenarios or Threats</Label>
                  <Textarea
                    id="specificScenarios"
                    placeholder="Are there specific cyber threats or scenarios you'd like the exercise to focus on? (e.g., ransomware, data breach, supply chain attack)"
                    value={formData.specificScenarios}
                    onChange={(e) => handleInputChange('specificScenarios', e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="preferredTimeframe">Preferred Timeframe</Label>
                  <Select value={formData.preferredTimeframe} onValueChange={(value) => handleInputChange('preferredTimeframe', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When would you like to conduct the exercise?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3-months">Within 1-3 months</SelectItem>
                      <SelectItem value="3-6-months">Within 3-6 months</SelectItem>
                      <SelectItem value="6-12-months">Within 6-12 months</SelectItem>
                      <SelectItem value="flexible">Flexible timing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                  <Textarea
                    id="additionalRequirements"
                    placeholder="Any other specific requirements, constraints, or information that would help us design the exercise?"
                    value={formData.additionalRequirements}
                    onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Follow-up */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Follow-up
                </h3>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="followUpDiscussion"
                    checked={formData.followUpDiscussion}
                    onCheckedChange={(checked) => handleInputChange('followUpDiscussion', checked as boolean)}
                  />
                  <Label htmlFor="followUpDiscussion" className="text-sm">
                    I would like to schedule a detailed discussion call to explore requirements further
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Exercise Request
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  Our team will contact you within 2-3 working days to discuss your requirements.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
