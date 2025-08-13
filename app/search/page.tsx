"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  SlidersHorizontal,
  FileText,
  Video,
  Download,
  Clock,
  Star,
  Users,
  Building2,
  Shield,
  GraduationCap,
  AlertTriangle,
  TrendingUp,
  X,
} from "lucide-react"
import Link from "next/link"
import SearchBar from "@/components/search-bar"

export default function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    audience: "all",
    contentType: "all",
    topic: "all",
    dateRange: "all",
  })
  const [showFilters, setShowFilters] = useState(false)

  // Mock search results data
  const searchResults = [
    {
      id: 1,
      title: "Password Security Guide for Individuals",
      description:
        "Learn how to create strong, unique passwords and use password managers to protect your online accounts from cyber threats.",
      url: "/individuals/password-security",
      type: "Guide",
      audience: "Individual",
      topic: "Password Security",
      lastUpdated: "2024-01-15",
      readTime: "8 min read",
      downloads: 2100,
      rating: 4.8,
      featured: true,
      icon: FileText,
    },
    {
      id: 2,
      title: "I Think I've Been Hacked - Emergency Response",
      description:
        "Step-by-step guide to secure your accounts and devices if you suspect you've been the victim of a cyber attack.",
      url: "/individuals/been-hacked",
      type: "Emergency Guide",
      audience: "Individual",
      topic: "Incident Response",
      lastUpdated: "2024-01-20",
      readTime: "15 min read",
      downloads: 1850,
      rating: 4.9,
      featured: true,
      icon: AlertTriangle,
    },
    {
      id: 3,
      title: "Cyber Essentials for Small Business",
      description:
        "Complete guide to implementing Cyber Essentials certification for small and medium businesses in Scotland.",
      url: "/businesses/cyber-essentials",
      type: "Business Guide",
      audience: "Business",
      topic: "Cyber Essentials",
      lastUpdated: "2024-02-01",
      readTime: "12 min read",
      downloads: 980,
      rating: 4.7,
      featured: false,
      icon: Building2,
    },
    {
      id: 4,
      title: "Phishing Awareness Training Video",
      description:
        "Interactive training video helping employees identify and respond to phishing attempts and social engineering attacks.",
      url: "/resources/phishing-training-video",
      type: "Video",
      audience: "Business",
      topic: "Phishing",
      lastUpdated: "2024-01-25",
      readTime: "20 min watch",
      downloads: 1200,
      rating: 4.6,
      featured: false,
      icon: Video,
    },
    {
      id: 5,
      title: "Digital Citizenship Curriculum for Primary Schools",
      description:
        "Complete curriculum package for teaching digital citizenship and online safety to primary school students aged 5-11.",
      url: "/education/digital-citizenship-primary",
      type: "Curriculum",
      audience: "Education",
      topic: "Digital Citizenship",
      lastUpdated: "2024-02-05",
      readTime: "Curriculum pack",
      downloads: 650,
      rating: 4.8,
      featured: false,
      icon: GraduationCap,
    },
    {
      id: 6,
      title: "Scottish Government Cyber Security Framework",
      description:
        "Official framework for implementing cyber security across Scottish public sector organizations and government departments.",
      url: "/public-sector/security-framework",
      type: "Framework",
      audience: "Public Sector",
      topic: "Governance",
      lastUpdated: "2024-01-10",
      readTime: "45 pages",
      downloads: 420,
      rating: 4.5,
      featured: false,
      icon: Shield,
    },
  ]

  const popularSearches = [
    "password security",
    "phishing",
    "ransomware",
    "two factor authentication",
    "cyber essentials",
    "data breach response",
    "social media safety",
    "business security",
  ]

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

  // Get search query from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get("q")
    if (query) {
      setSearchQuery(query)
    }
  }, [])

  const filteredResults = searchResults.filter((result) => {
    const matchesQuery = searchQuery
      ? result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.topic.toLowerCase().includes(searchQuery.toLowerCase())
      : true

    const matchesAudience = selectedFilters.audience === "all" || result.audience === selectedFilters.audience
    const matchesType = selectedFilters.contentType === "all" || result.type === selectedFilters.contentType
    const matchesTopic = selectedFilters.topic === "all" || result.topic === selectedFilters.topic

    return matchesQuery && matchesAudience && matchesType && matchesTopic
  })

  const featuredResults = filteredResults.filter((result) => result.featured)
  const regularResults = filteredResults.filter((result) => !result.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0065bd] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm hover:underline">
                gov.scot
              </Link>
              <div className="h-6 w-px bg-white/30"></div>
              <div className="font-semibold">Scottish Cyber Coordination Centre</div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <SearchBar />
            </div>

            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/individuals" className="hover:underline">
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

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Search Results</span>
            {searchQuery && (
              <>
                <span className="mx-2">›</span>
                <span className="text-gray-900">&#34;{searchQuery}&#34;</span>
              </>
            )}
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full justify-start bg-white"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Filters */}
              <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Audience Filter */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Audience</label>
                      <Select
                        value={selectedFilters.audience}
                        onValueChange={(value) => setSelectedFilters((prev) => ({ ...prev, audience: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
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

                    {/* Content Type Filter */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Content Type</label>
                      <Select
                        value={selectedFilters.contentType}
                        onValueChange={(value) => setSelectedFilters((prev) => ({ ...prev, contentType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="Guide">Guide</SelectItem>
                          <SelectItem value="Video">Video</SelectItem>
                          <SelectItem value="Framework">Framework</SelectItem>
                          <SelectItem value="Curriculum">Curriculum</SelectItem>
                          <SelectItem value="Emergency Guide">Emergency Guide</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Topic Filter */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Topic</label>
                      <Select
                        value={selectedFilters.topic}
                        onValueChange={(value) => setSelectedFilters((prev) => ({ ...prev, topic: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Topics</SelectItem>
                          <SelectItem value="Password Security">Password Security</SelectItem>
                          <SelectItem value="Phishing">Phishing</SelectItem>
                          <SelectItem value="Incident Response">Incident Response</SelectItem>
                          <SelectItem value="Cyber Essentials">Cyber Essentials</SelectItem>
                          <SelectItem value="Digital Citizenship">Digital Citizenship</SelectItem>
                          <SelectItem value="Governance">Governance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date Range Filter */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
                      <Select
                        value={selectedFilters.dateRange}
                        onValueChange={(value) => setSelectedFilters((prev) => ({ ...prev, dateRange: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any time</SelectItem>
                          <SelectItem value="week">Past week</SelectItem>
                          <SelectItem value="month">Past month</SelectItem>
                          <SelectItem value="year">Past year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Clear Filters */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setSelectedFilters({
                          audience: "all",
                          contentType: "all",
                          topic: "all",
                          dateRange: "all",
                        })
                      }
                      className="w-full bg-transparent"
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>

                {/* Popular Searches */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Popular Searches
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.slice(0, 6).map((search) => (
                        <Link
                          key={search}
                          href={`/search?q=${encodeURIComponent(search)}`}
                          className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors"
                        >
                          {search}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {searchQuery ? `Search results for "${searchQuery}"` : "Search Results"}
                  </h1>
                  <p className="text-gray-600">
                    {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} found
                  </p>
                </div>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters */}
              {(selectedFilters.audience !== "all" ||
                selectedFilters.contentType !== "all" ||
                selectedFilters.topic !== "all" ||
                selectedFilters.dateRange !== "all") && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {selectedFilters.audience !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {selectedFilters.audience}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedFilters((prev) => ({ ...prev, audience: "all" }))}
                      />
                    </Badge>
                  )}
                  {selectedFilters.contentType !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {selectedFilters.contentType}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedFilters((prev) => ({ ...prev, contentType: "all" }))}
                      />
                    </Badge>
                  )}
                  {selectedFilters.topic !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {selectedFilters.topic}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedFilters((prev) => ({ ...prev, topic: "all" }))}
                      />
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* Featured Results */}
            {featuredResults.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Featured Results
                </h2>
                <div className="space-y-4">
                  {featuredResults.map((result) => {
                    const IconComponent = result.icon
                    const AudienceIcon = getAudienceIcon(result.audience)
                    return (
                      <Card
                        key={result.id}
                        className="hover:shadow-md transition-shadow border-l-4 border-l-yellow-400"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <Link href={result.url} className="text-lg font-semibold text-blue-600 hover:underline">
                                  {result.title}
                                </Link>
                                <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                                <Badge variant="outline" className={getAudienceColor(result.audience)}>
                                  <AudienceIcon className="h-3 w-3 mr-1" />
                                  {result.audience}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3">{result.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {result.readTime}
                                </span>
                                <span className="flex items-center">
                                  <Download className="h-4 w-4 mr-1" />
                                  {result.downloads}
                                </span>
                                <span className="flex items-center">
                                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                                  {result.rating}
                                </span>
                                <span>Updated {new Date(result.lastUpdated).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Regular Results */}
            {regularResults.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">All Results</h2>
                <div className="space-y-4">
                  {regularResults.map((result) => {
                    const IconComponent = result.icon
                    const AudienceIcon = getAudienceIcon(result.audience)
                    return (
                      <Card key={result.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <Link href={result.url} className="text-lg font-semibold text-blue-600 hover:underline">
                                  {result.title}
                                </Link>
                                <Badge variant="outline">{result.type}</Badge>
                                <Badge variant="outline" className={getAudienceColor(result.audience)}>
                                  <AudienceIcon className="h-3 w-3 mr-1" />
                                  {result.audience}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-3">{result.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {result.readTime}
                                </span>
                                <span className="flex items-center">
                                  <Download className="h-4 w-4 mr-1" />
                                  {result.downloads}
                                </span>
                                <span className="flex items-center">
                                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                                  {result.rating}
                                </span>
                                <span>Updated {new Date(result.lastUpdated).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredResults.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery
                    ? `We couldn't find any results for "${searchQuery}". Try adjusting your search terms or filters.`
                    : "Try adjusting your search terms or filters."}
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Try searching for:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {popularSearches.slice(0, 4).map((search) => (
                        <Link
                          key={search}
                          href={`/search?q=${encodeURIComponent(search)}`}
                          className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-full transition-colors"
                        >
                          {search}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedFilters({
                        audience: "all",
                        contentType: "all",
                        topic: "all",
                        dateRange: "all",
                      })
                    }}
                  >
                    Clear Search and Filters
                  </Button>
                </div>
              </div>
            )}

            {/* Pagination */}
            {filteredResults.length > 10 && (
              <div className="flex items-center justify-center space-x-2 mt-8">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-[#0065bd] text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
