"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Download,
  Eye,
  FileText,
  Video,
  Users,
  Building2,
  GraduationCap,
  Shield,
  Clock,
  Star,
  ExternalLink,
} from "lucide-react"

export default function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAudience, setSelectedAudience] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTopic, setSelectedTopic] = useState("all")

  const resources = [
    {
      id: 1,
      title: "Cyber Security Essentials for Small Business",
      description:
        "A comprehensive guide covering the fundamental cyber security measures every small business should implement.",
      type: "Guide",
      audience: "Business",
      topic: "Fundamentals",
      format: "PDF",
      pages: 24,
      downloads: 1250,
      rating: 4.8,
      updated: "2024-01-15",
      featured: true,
      icon: FileText,
    },
    {
      id: 2,
      title: "Phishing Awareness Training Video",
      description: "Interactive training video helping employees identify and respond to phishing attempts.",
      type: "Video",
      audience: "Business",
      topic: "Phishing",
      format: "MP4",
      duration: "15 min",
      downloads: 890,
      rating: 4.9,
      updated: "2024-02-01",
      featured: true,
      icon: Video,
    },
    {
      id: 3,
      title: "Home Network Security Checklist",
      description: "Step-by-step checklist to secure your home network and connected devices.",
      type: "Checklist",
      audience: "Individual",
      topic: "Network Security",
      format: "PDF",
      pages: 8,
      downloads: 2100,
      rating: 4.7,
      updated: "2024-01-20",
      featured: false,
      icon: FileText,
    },
    {
      id: 4,
      title: "Incident Response Plan Template",
      description: "Customizable template for creating your organization's cyber incident response plan.",
      type: "Template",
      audience: "Business",
      topic: "Incident Response",
      format: "DOCX",
      pages: 16,
      downloads: 650,
      rating: 4.6,
      updated: "2024-01-10",
      featured: false,
      icon: FileText,
    },
    {
      id: 5,
      title: "Digital Citizenship for Schools",
      description: "Teaching resources and activities for educating students about responsible online behavior.",
      type: "Teaching Pack",
      audience: "Education",
      topic: "Digital Citizenship",
      format: "ZIP",
      items: "12 resources",
      downloads: 420,
      rating: 4.8,
      updated: "2024-02-05",
      featured: false,
      icon: GraduationCap,
    },
    {
      id: 6,
      title: "Government Cyber Security Framework",
      description: "Official framework for implementing cyber security in public sector organizations.",
      type: "Framework",
      audience: "Public Sector",
      topic: "Governance",
      format: "PDF",
      pages: 45,
      downloads: 320,
      rating: 4.5,
      updated: "2024-01-25",
      featured: false,
      icon: Shield,
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAudience = selectedAudience === "all" || resource.audience === selectedAudience
    const matchesType = selectedType === "all" || resource.type === selectedType
    const matchesTopic = selectedTopic === "all" || resource.topic === selectedTopic

    return matchesSearch && matchesAudience && matchesType && matchesTopic
  })

  const featuredResources = resources.filter((resource) => resource.featured)

  const getAudienceIcon = (audience: string) => {
    switch (audience) {
      case "Individual":
        return Users
      case "Business":
        return Building2
      case "Education":
        return GraduationCap
      case "Public Sector":
        return Shield
      default:
        return FileText
    }
  }

  const getAudienceColor = (audience: string) => {
    switch (audience) {
      case "Individual":
        return "bg-blue-100 text-blue-800"
      case "Business":
        return "bg-green-100 text-green-800"
      case "Education":
        return "bg-orange-100 text-orange-800"
      case "Public Sector":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Access our comprehensive collection of cyber security resources, toolkits, and guidance materials tailored
            for different audiences across Scotland.
          </p>
        </div>

        {/* Featured Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredResources.map((resource) => {
              const IconComponent = resource.icon
              const AudienceIcon = getAudienceIcon(resource.audience)
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#0065bd]/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-[#0065bd]" />
                        </div>
                        <div>
                          <Badge className="mb-2">Featured</Badge>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{resource.description}</CardDescription>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <Badge variant="outline" className={getAudienceColor(resource.audience)}>
                          <AudienceIcon className="h-3 w-3 mr-1" />
                          {resource.audience}
                        </Badge>
                        <span>{resource.format}</span>
                        <span>{resource.pages ? `${resource.pages} pages` : resource.duration || resource.items}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Find Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search resources..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Audiences</SelectItem>
                      <SelectItem value="Individual">Individual</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Public Sector">Public Sector</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Guide">Guide</SelectItem>
                      <SelectItem value="Video">Video</SelectItem>
                      <SelectItem value="Checklist">Checklist</SelectItem>
                      <SelectItem value="Template">Template</SelectItem>
                      <SelectItem value="Framework">Framework</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                    <SelectTrigger>
                      <SelectValue placeholder="Topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Topics</SelectItem>
                      <SelectItem value="Fundamentals">Fundamentals</SelectItem>
                      <SelectItem value="Phishing">Phishing</SelectItem>
                      <SelectItem value="Network Security">Network Security</SelectItem>
                      <SelectItem value="Incident Response">Incident Response</SelectItem>
                      <SelectItem value="Governance">Governance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Results */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All Resources ({filteredResources.length})</h2>
            <Select defaultValue="newest">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="title">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6">
            {filteredResources.map((resource) => {
              const IconComponent = resource.icon
              const AudienceIcon = getAudienceIcon(resource.audience)
              return (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                            {resource.featured && <Badge>Featured</Badge>}
                          </div>
                          <p className="text-gray-600 mb-3">{resource.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <Badge variant="outline" className={getAudienceColor(resource.audience)}>
                              <AudienceIcon className="h-3 w-3 mr-1" />
                              {resource.audience}
                            </Badge>
                            <span className="flex items-center">
                              <FileText className="h-4 w-4 mr-1" />
                              {resource.type}
                            </span>
                            <span>{resource.format}</span>
                            <span>
                              {resource.pages ? `${resource.pages} pages` : resource.duration || resource.items}
                            </span>
                            <span className="flex items-center">
                              <Download className="h-4 w-4 mr-1" />
                              {resource.downloads}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                              {resource.rating}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Updated {new Date(resource.updated).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedAudience("all")
                  setSelectedType("all")
                  setSelectedTopic("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>

        {/* Resource Request */}
        <section className="mt-12">
          <Card className="bg-[#0065bd] text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Can&#39;t find what you&#39;re looking for?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let us know what resources would be helpful for your cyber security needs
              </p>
              <Button variant="secondary" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Request a Resource
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
