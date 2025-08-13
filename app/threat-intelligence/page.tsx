import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, AlertTriangle, FileText, ExternalLink, CheckCircle, Globe, Shield, Users, Clock, Target, TrendingUp, Database } from 'lucide-react'
import Link from "next/link"
import EmergencyBanner from "@/components/ui/emergency-banner"

export default function ThreatIntelligencePage() {
  const services = [
    {
      title: "CREW Notices",
      description: "Cyber Risk Early Warning notices providing timely alerts about emerging threats",
      features: [
        "Real-time threat alerts",
        "Technical indicators of compromise",
        "Mitigation recommendations",
        "Sector-specific guidance",
      ],
      access: "Scottish public sector organisations",
      frequency: "As threats emerge",
      classification: "OFFICIAL-SENSITIVE",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Threat Intelligence & Priority Reports (TIPRs)",
      description: "Detailed analysis of threat landscape and priority risks for Scottish organisations",
      features: [
        "Strategic threat analysis",
        "Sector risk assessments",
        "Attribution intelligence",
        "Trend analysis and forecasting",
      ],
      access: "Scottish public sector organisations",
      frequency: "Monthly reports",
      classification: "OFFICIAL-SENSITIVE",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Regular Threat Reporting",
      description: "SC3 provides curated, subscription-based threat intelligence updates, covering the latest developments in cybersecurity",
      features: [
        "Emerging incidents and vulnerabilities",
        "Notable threat actors and their tactics",
        "Malware trends and analysis",
        "Key news impacting the cyber landscape",
      ],
      access: "Subscription required via Cyberscotland.com",
      frequency: "Regular updates",
      classification: "OFFICIAL",
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "CyberShield Scotland MISP",
      description: "Malware Information Sharing Platform for technical threat intelligence sharing",
      features: [
        "Malware sample analysis",
        "IOC sharing and correlation",
        "Automated threat feeds",
        "Community collaboration",
      ],
      access: "Approved organisations",
      frequency: "Real-time updates",
      classification: "TLP:AMBER",
      icon: Database,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const accessRequirements = [
    {
      service: "CREW Notices & TIPRs",
      eligibility: "Scottish public sector organisations",
      process: "Contact SC3 for access approval",
      requirements: ["Official organisational email", "Signed information sharing agreement", "Designated point of contact"],
      icon: Shield,
    },
    {
      service: "Regular Threat Reporting",
      eligibility: "All organisations (subscription)",
      process: "Register online or contact sales team",
      requirements: ["Valid business registration", "Subscription payment", "User account setup"],
      icon: Globe,
    },
    {
      service: "CyberShield Scotland MISP",
      eligibility: "Approved security teams",
      process: "Application and vetting process",
      requirements: ["Security clearance verification", "Technical capability assessment", "Contribution commitment"],
      icon: Database,
    },
  ]

  const benefits = [
    {
      title: "Early Warning",
      description: "Receive alerts about emerging threats before they impact your organisation",
      icon: Clock,
    },
    {
      title: "Contextual Intelligence",
      description: "Scotland-specific threat analysis tailored to local risk landscape",
      icon: Target,
    },
    {
      title: "Actionable Insights",
      description: "Clear mitigation guidance and technical recommendations",
      icon: TrendingUp,
    },
    {
      title: "Community Sharing",
      description: "Benefit from collective intelligence across Scottish organisations",
      icon: Users,
    },
  ]

  return (
		<div className="min-h-screen bg-white">
			{/* Emergency Contact Banner */}
			<EmergencyBanner
				className="border-l-blue-500 bg-blue-50"
				icon="BrainCircuit"
				iconClassName="!text-blue-600"
				title="Threat Intelligence Alerts: "
				description="CREW notices are distributed immediately when critical threats are identified"
				descriptionClassName="text-blue-800"
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
							Threat Intelligence
						</span>
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
									<Eye className="h-8 w-8" />
								</div>
								<div>
									<h1 className="text-4xl font-bold mb-2">
										Threat Intelligence
									</h1>
									<p className="text-xl opacity-90">
										CREW notices, TIPRs, and threat analysis
									</p>
								</div>
							</div>
							<p className="text-lg mb-8 opacity-90 max-w-3xl">
								SC3 provides comprehensive threat intelligence
								services to help Scottish organisations
								understand and respond to the evolving cyber
								threat landscape through early warning systems,
								detailed analysis, and collaborative
								intelligence sharing.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-white text-blue-600 hover:bg-gray-100"
								>
									<FileText className="mr-2 h-4 w-4" />
									Request Access
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
									asChild
								>
									<Link
										href="https://cyberscotland.com"
										target="_blank"
									>
										Visit CyberScotland.com
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Threat Intelligence Services */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Threat Intelligence Services
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Comprehensive threat intelligence capabilities
								designed to enhance your organisation&#39;s security
								posture
							</p>
						</div>

						<div className="space-y-8">
							{services.map((service, index) => {
								const IconComponent = service.icon;
								return (
									<Card
										key={index}
										className="hover:shadow-lg transition-shadow"
									>
										<CardContent className="p-8">
											<div className="flex items-start space-x-6">
												<div
													className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
												>
													<IconComponent
														className={`h-8 w-8 ${service.color}`}
													/>
												</div>
												<div className="flex-1">
													<div className="flex items-center justify-between mb-4">
														<h3 className="text-2xl font-semibold text-gray-900">
															{service.title}
														</h3>
														<div className="flex space-x-2">
															<Badge variant="outline">
																{
																	service.frequency
																}
															</Badge>
															<Badge
																variant="outline"
																className={
																	service.classification.includes(
																		"SENSITIVE"
																	)
																		? "border-orange-200 text-orange-800"
																		: service.classification.includes(
																				"TLP"
																		  )
																		? "border-purple-200 text-purple-800"
																		: "border-green-200 text-green-800"
																}
															>
																{
																	service.classification
																}
															</Badge>
														</div>
													</div>
													<p className="text-gray-600 mb-6">
														{service.description}
													</p>
													<div className="grid md:grid-cols-2 gap-6">
														<div>
															<h4 className="font-medium text-gray-900 mb-3">
																Key Features:
															</h4>
															<div className="space-y-2">
																{service.features.map(
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
																			<CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
																			<span className="text-sm text-gray-700">
																				{
																					feature
																				}
																			</span>
																		</div>
																	)
																)}
															</div>
														</div>
														<div>
															<h4 className="font-medium text-gray-900 mb-3">
																Access
																Information:
															</h4>
															<p className="text-sm text-gray-600 mb-4">
																<strong>
																	Eligibility:
																</strong>{" "}
																{service.access}
															</p>
															<Button
																size="sm"
																className={`${service.color.replace(
																	"text-",
																	"bg-"
																)} hover:opacity-90`}
															>
																<ExternalLink className="h-4 w-4 mr-2" />
																Get Access
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

				{/* Access Requirements */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								How to Get Access
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Clear guidance on accessing SC3 threat
								intelligence services based on your
								organisation&#39;s needs
							</p>
						</div>

						<div className="space-y-6">
							{accessRequirements.map((requirement, index) => {
								const IconComponent = requirement.icon;
								return (
									<Card
										key={index}
										className="hover:shadow-lg transition-shadow"
									>
										<CardContent className="p-6">
											<div className="flex items-start space-x-4">
												<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
													<IconComponent className="h-6 w-6 text-blue-600" />
												</div>
												<div className="flex-1">
													<h3 className="text-xl font-semibold text-gray-900 mb-2">
														{requirement.service}
													</h3>
													<div className="grid md:grid-cols-3 gap-6">
														<div>
															<h4 className="font-medium text-gray-900 mb-2">
																Eligibility:
															</h4>
															<p className="text-sm text-gray-600">
																{
																	requirement.eligibility
																}
															</p>
														</div>
														<div>
															<h4 className="font-medium text-gray-900 mb-2">
																Process:
															</h4>
															<p className="text-sm text-gray-600">
																{
																	requirement.process
																}
															</p>
														</div>
														<div>
															<h4 className="font-medium text-gray-900 mb-2">
																Requirements:
															</h4>
															<ul className="space-y-1">
																{requirement.requirements.map(
																	(
																		req,
																		reqIndex
																	) => (
																		<li
																			key={
																				reqIndex
																			}
																			className="text-sm text-gray-600 flex items-start"
																		>
																			<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
																			{
																				req
																			}
																		</li>
																	)
																)}
															</ul>
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

				{/* Benefits */}
				<section className="py-16 bg-blue-600 text-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">
								Why Threat Intelligence Matters
							</h2>
							<p className="text-xl opacity-90 max-w-2xl mx-auto">
								Proactive threat intelligence enables better
								security decisions and faster incident response
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{benefits.map((benefit, index) => {
								const IconComponent = benefit.icon;
								return (
									<div key={index} className="text-center">
										<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
											<IconComponent className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-semibold mb-2">
											{benefit.title}
										</h3>
										<p className="opacity-90">
											{benefit.description}
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
							Get Started with Threat Intelligence
						</h2>
						<div className="max-w-2xl mx-auto">
							<Card className="border-blue-200 bg-blue-50">
								<CardContent className="p-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-xl font-semibold text-blue-800 mb-2">
												Request Access
											</h3>
											<p className="text-blue-700 mb-4">
												Contact SC3 to discuss your
												organisation&#39;s threat
												intelligence requirements
											</p>
											<Button className="bg-blue-600 hover:bg-blue-700">
												<FileText className="mr-2 h-4 w-4" />
												Contact SC3
											</Button>
										</div>
										<div className="border-t border-blue-200 pt-6">
											<h3 className="text-lg font-semibold text-blue-800 mb-2">
												CyberScotland.com
											</h3>
											<p className="text-blue-700 mb-4">
												Subscribe to our commercial
												threat intelligence platform
											</p>
											<Button
												variant="outline"
												className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
												asChild
											>
												<Link
													href="https://cyberscotland.com"
													target="_blank"
												>
													<ExternalLink className="mr-2 h-4 w-4" />
													Visit Website
												</Link>
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
