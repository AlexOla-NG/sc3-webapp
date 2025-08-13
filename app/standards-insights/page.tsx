import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Eye, FileText, ExternalLink, CheckCircle, TrendingUp, Shield, Target, Award, Database } from 'lucide-react'
import Link from "next/link"
import EmergencyBanner from "@/components/ui/emergency-banner"

export default function StandardsInsightsPage() {
  const observatoryCapabilities = [
    {
      title: "Strategic Intelligence Hub",
      description: "Centralised collection and analysis of cyber security intelligence for strategic decision-making",
      features: [
        "Multi-source intelligence aggregation",
        "Trend analysis and forecasting",
        "Strategic risk assessment",
        "Policy impact analysis",
      ],
      icon: Database,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Threat Landscape Monitoring",
      description: "Continuous monitoring of the cyber threat landscape affecting Scottish organisations",
      features: [
        "Real-time threat tracking",
        "Sector-specific analysis",
        "Attribution intelligence",
        "Impact assessment",
      ],
      icon: Eye,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Resilience Metrics",
      description: "Comprehensive metrics and indicators to measure cyber resilience across Scotland",
      features: [
        "Maturity benchmarking",
        "Performance indicators",
        "Comparative analysis",
        "Progress tracking",
      ],
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  const resilienceSnapshot = [
    {
      title: "Annual CAF Assessment",
      description: "Comprehensive assessment based on the NCSC Cyber Assessment Framework",
      frequency: "Annual",
      participants: "180+ public sector organisations",
      scope: [
        "Governance and risk management",
        "Asset management",
        "Architecture and configuration",
        "Vulnerability management",
        "Identity and access management",
        "Data security",
        "System security",
        "Resilient networks and systems",
        "Staff awareness and training",
        "Incident management",
        "Monitoring",
        "Response and recovery planning",
      ],
      outcomes: [
        "Sector-wide maturity baseline",
        "Individual organisation benchmarking",
        "Targeted improvement recommendations",
        "Strategic planning insights",
      ],
    },
  ]

  const standards = [
    {
      title: "ISO 27001 Information Security Management",
      description: "International standard for information security management systems",
      benefits: [
        "Systematic approach to managing sensitive information",
        "Risk-based security controls",
        "Continuous improvement framework",
        "Third-party assurance",
      ],
      support: "Implementation guidance and certification support",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "NIST Cybersecurity Framework",
      description: "Comprehensive framework for improving cybersecurity risk management",
      benefits: [
        "Risk-based approach to cybersecurity",
        "Flexible implementation guidance",
        "Industry best practices",
        "Measurable outcomes",
      ],
      support: "Framework adoption and maturity assessment",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "NCSC Cyber Assessment Framework (CAF)",
      description: "UK government framework for assessing cyber security capabilities",
      benefits: [
        "Government-aligned security approach",
        "Comprehensive capability assessment",
        "Structured improvement pathway",
        "Sector benchmarking",
      ],
      support: "CAF assessment and improvement planning",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const insights = [
    {
      title: "Evidence-Based Policy",
      description: "Data-driven insights inform cyber security policy development and strategic decisions",
      icon: FileText,
    },
    {
      title: "Sector Benchmarking",
      description: "Comparative analysis enables organisations to understand their position relative to peers",
      icon: BarChart3,
    },
    {
      title: "Targeted Investment",
      description: "Intelligence-led approach ensures resources are directed to areas of greatest need",
      icon: Target,
    },
    {
      title: "Continuous Improvement",
      description: "Regular assessment and monitoring drives ongoing enhancement of cyber resilience",
      icon: TrendingUp,
    },
  ]

  return (
		<div className="min-h-screen bg-white">
			{/* Emergency Contact Banner */}
			<EmergencyBanner
				className="border-l-purple-500 bg-purple-50"
				icon="BarChart"
				iconClassName="!text-purple-600"
				title="Cyber Observatory: "
				description={
					<>
						Strategic intelligence and insights supporting
						Scotland&#39;s cyber resilience
					</>
				}
				descriptionClassName="text-purple-800"
			/>

			{/* Breadcrumb */}
			<div className="bg-gray-50 border-b">
				<div className="container mx-auto px-4 py-3">
					<nav className="text-sm text-gray-600">
						<Link href="/" className="hover:underline">
							Home
						</Link>
						<span className="mx-2">›</span>
						<span className="text-gray-900">
							Standards & Insights
						</span>
					</nav>
				</div>
			</div>

			<main>
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl">
							<div className="flex items-center mb-4">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
									<BarChart3 className="h-8 w-8" />
								</div>
								<div>
									<h1 className="text-4xl font-bold mb-2">
										Standards & Insights
									</h1>
									<p className="text-xl opacity-90">
										Cyber Observatory and resilience
										insights
									</p>
								</div>
							</div>
							<p className="text-lg mb-8 opacity-90 max-w-3xl">
								SC3&#39;s Cyber Observatory provides strategic
								intelligence and evidence-based insights to
								support cyber security decision-making across
								Scotland. We promote standards adoption and
								measure resilience through comprehensive
								assessment programmes.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-white text-purple-600 hover:bg-gray-100"
								>
									<BarChart3 className="mr-2 h-4 w-4" />
									View Latest Insights
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
									asChild
								>
									<Link href="/resources">
										Standards Guidance
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Cyber Observatory */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Cyber Observatory
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Strategic intelligence hub providing
								comprehensive insights into Scotland&#39;s cyber
								security landscape
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-6">
							{observatoryCapabilities.map(
								(capability, index) => {
									const IconComponent = capability.icon;
									return (
										<Card
											key={index}
											className="hover:shadow-lg transition-shadow h-full"
										>
											<CardContent className="p-6">
												<div className="text-center mb-6">
													<div
														className={`w-16 h-16 ${capability.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
													>
														<IconComponent
															className={`h-8 w-8 ${capability.color}`}
														/>
													</div>
													<h3 className="text-xl font-semibold text-gray-900 mb-2">
														{capability.title}
													</h3>
													<p className="text-gray-600">
														{capability.description}
													</p>
												</div>
												<div className="space-y-3">
													{capability.features.map(
														(
															feature,
															featureIndex
														) => (
															<div
																key={
																	featureIndex
																}
																className="flex items-center space-x-3"
															>
																<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
																<span className="text-sm text-gray-700">
																	{feature}
																</span>
															</div>
														)
													)}
												</div>
											</CardContent>
										</Card>
									);
								}
							)}
						</div>
					</div>
				</section>

				{/* Resilience Snapshot */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Resilience Snapshot
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Annual assessment programme measuring cyber
								resilience across Scottish public sector
								organisations
							</p>
						</div>

						{resilienceSnapshot.map((snapshot, index) => (
							<Card
								key={index}
								className="hover:shadow-lg transition-shadow max-w-6xl mx-auto"
							>
								<CardContent className="p-8">
									<div className="grid md:grid-cols-2 gap-8">
										<div>
											<h3 className="text-2xl font-semibold text-gray-900 mb-4">
												{snapshot.title}
											</h3>
											<p className="text-gray-600 mb-6">
												{snapshot.description}
											</p>
											<div className="space-y-4">
												<div className="flex items-center justify-between">
													<span className="text-gray-500">
														Frequency:
													</span>
													<Badge variant="outline">
														{snapshot.frequency}
													</Badge>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-gray-500">
														Participants:
													</span>
													<Badge className="bg-purple-100 text-purple-800">
														{snapshot.participants}
													</Badge>
												</div>
											</div>
										</div>
										<div>
											<h4 className="font-medium text-gray-900 mb-4">
												Assessment Scope:
											</h4>
											<div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
												{snapshot.scope.map(
													(item, itemIndex) => (
														<div
															key={itemIndex}
															className="flex items-center space-x-2"
														>
															<CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
															<span className="text-sm text-gray-700">
																{item}
															</span>
														</div>
													)
												)}
											</div>
										</div>
									</div>
									<div className="mt-8 pt-8 border-t">
										<h4 className="font-medium text-gray-900 mb-4">
											Key Outcomes:
										</h4>
										<div className="grid md:grid-cols-2 gap-4">
											{snapshot.outcomes.map(
												(outcome, outcomeIndex) => (
													<div
														key={outcomeIndex}
														className="flex items-center space-x-3"
													>
														<CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
														<span className="text-sm text-gray-700">
															{outcome}
														</span>
													</div>
												)
											)}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Standards Promotion */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Standards Promotion
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Supporting Scottish organisations in adopting
								recognised cyber security standards and
								frameworks
							</p>
						</div>

						<div className="space-y-6">
							{standards.map((standard, index) => {
								const IconComponent = standard.icon;
								return (
									<Card
										key={index}
										className="hover:shadow-lg transition-shadow"
									>
										<CardContent className="p-8">
											<div className="flex items-start space-x-6">
												<div
													className={`w-16 h-16 ${standard.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
												>
													<IconComponent
														className={`h-8 w-8 ${standard.color}`}
													/>
												</div>
												<div className="flex-1">
													<h3 className="text-2xl font-semibold text-gray-900 mb-4">
														{standard.title}
													</h3>
													<p className="text-gray-600 mb-6">
														{standard.description}
													</p>
													<div className="grid md:grid-cols-2 gap-6">
														<div>
															<h4 className="font-medium text-gray-900 mb-3">
																Key Benefits:
															</h4>
															<div className="space-y-2">
																{standard.benefits.map(
																	(
																		benefit,
																		benefitIndex
																	) => (
																		<div
																			key={
																				benefitIndex
																			}
																			className="flex items-center space-x-3"
																		>
																			<CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
																			<span className="text-sm text-gray-700">
																				{
																					benefit
																				}
																			</span>
																		</div>
																	)
																)}
															</div>
														</div>
														<div>
															<h4 className="font-medium text-gray-900 mb-3">
																SC3 Support:
															</h4>
															<p className="text-sm text-gray-600 mb-4">
																{
																	standard.support
																}
															</p>
															<Button
																size="sm"
																className={`${standard.color.replace(
																	"text-",
																	"bg-"
																)} hover:opacity-90`}
															>
																<ExternalLink className="h-4 w-4 mr-2" />
																Get Support
															</Button>
														</div>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Key Insights */}
				<section className="py-16 bg-purple-600 text-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">
								Evidence-Based Decision Making
							</h2>
							<p className="text-xl opacity-90 max-w-2xl mx-auto">
								Strategic insights enable informed decisions and
								targeted investments in cyber security
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{insights.map((insight, index) => {
								const IconComponent = insight.icon;
								return (
									<div key={index} className="text-center">
										<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
											<IconComponent className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-semibold mb-2">
											{insight.title}
										</h3>
										<p className="opacity-90">
											{insight.description}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Contact Information */}
				<section className="py-16">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Access Observatory Insights
						</h2>
						<div className="max-w-2xl mx-auto">
							<Card className="border-purple-200 bg-purple-50">
								<CardContent className="p-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-semibold text-purple-800 mb-2">
												Strategic Intelligence
											</h3>
											<p className="text-purple-700 mb-4">
												Access comprehensive insights
												and analysis from the SC3 Cyber
												Observatory
											</p>
											<Button className="bg-purple-600 hover:bg-purple-700">
												<BarChart3 className="mr-2 h-4 w-4" />
												Request Access
											</Button>
										</div>
										<div className="border-t border-purple-200 pt-6">
											<h3 className="text-lg font-semibold text-purple-800 mb-2">
												Standards Support
											</h3>
											<p className="text-purple-700 mb-4">
												Get guidance on implementing
												cyber security standards in your
												organisation
											</p>
											<Button
												variant="outline"
												className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
											>
												<Award className="mr-2 h-4 w-4" />
												Get Guidance
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
		</div>
  );
}
