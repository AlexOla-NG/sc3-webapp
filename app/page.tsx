import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Shield,
	Eye,
	Target,
	Activity,
	BarChart3,
	FileText,
	AlertTriangle,
	Phone,
	Users,
	ArrowRight,
	CheckCircle,
	Globe,
	Mail,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
	const workstreams = [
		{
			title: "Incident Coordination",
			href: "/incident-coordination",
			icon: Shield,
			description: "24/7 multi-agency incident response coordination",
			color: "text-red-600",
			bgColor: "bg-red-100",
			highlights: [
				"Emergency hotline",
				"Multi-agency response",
				"24/7 availability",
			],
		},
		{
			title: "Threat Intelligence",
			href: "/threat-intelligence",
			icon: Eye,
			description: "CREW notices, TIPRs, and threat analysis",
			color: "text-blue-600",
			bgColor: "bg-blue-100",
			highlights: ["CREW notices", "Threat reports", "CyberScotland.com"],
		},
		{
			title: "Vulnerability Management",
			href: "/vulnerability-management",
			icon: Target,
			description: "Vulnerability disclosure and coordination",
			color: "text-orange-600",
			bgColor: "bg-orange-100",
			highlights: [
				"Disclosure programme",
				"Coordination support",
				"Expert guidance",
			],
		},
		{
			title: "Cyber Exercising",
			href: "/cyber-exercising",
			icon: Activity,
			description: "Preparedness through cyber exercises",
			color: "text-green-600",
			bgColor: "bg-green-100",
			highlights: [
				"Exercise delivery",
				"Staff training",
				"TTXGym access",
			],
		},
		{
			title: "Standards & Insights",
			href: "/standards-insights",
			icon: BarChart3,
			description: "Cyber Observatory and resilience insights",
			color: "text-purple-600",
			bgColor: "bg-purple-100",
			highlights: [
				"Cyber Observatory",
				"Resilience surveys",
				"Standards promotion",
			],
		},
	];

	const quickActions = [
		{
			title: "Report a Cyber Incident",
			description:
				"Get immediate support for ongoing cyber security incidents",
			icon: AlertTriangle,
			href: "/report-incident",
			urgent: true,
		},
		{
			title: "Access Resources",
			description:
				"Browse our library of cyber security guidance and tools",
			icon: FileText,
			href: "/resources",
			urgent: false,
		},
		{
			title: "Request Exercise Support",
			description:
				"Get help planning and delivering cyber security exercises",
			icon: Users,
			href: "/cyber-exercising/request",
			urgent: false,
		},
	];

	const stats = [
		{ label: "Incidents Coordinated", value: "35+", period: "annually" },
		{
			label: "Organisations Supported",
			value: "180+",
			period: "across Scotland",
		},
		{
			label: "Intelligence Reports",
			value: "300+",
			period: "published per year",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<main>
				{/* Hero Section - Centralized like v13 */}
				<section className="bg-gradient-to-r from-[#0065bd] to-[#004494] text-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-5xl font-bold mb-6">
								Scottish Cyber Coordination Centre
							</h1>
							<p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
								The Scottish Cyber Coordination Centre (SC3) is
								a central government department that serves as
								the national focal point for cyber security and
								resilience in Scotland. SC3 addresses the
								growing complexity and scale of cyber threats by
								providing a recognised, trusted, and
								collaborative support to Scotland&#39;s public
								sector.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									size="lg"
									className="bg-red-600 hover:bg-red-700"
								>
									<Phone className="mr-2 h-4 w-4" />
									Emergency: 0300 244 9700
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white hover:text-[#0065bd] bg-transparent"
									asChild
								>
									<Link href="/report-incident">
										<AlertTriangle className="mr-2 h-4 w-4" />
										Report Incident
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Emergency Incident Reporting */}
				<section className="py-16 bg-red-50 border-t-4 border-red-500">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<div className="flex items-center justify-center mb-4">
								<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
									<AlertTriangle className="h-8 w-8 text-red-600" />
								</div>
							</div>
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Emergency Incident Reporting
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								If you&#39;re experiencing an active cyber security
								incident, contact SC3 immediately for
								coordinated multi-agency response support.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
							<Card className="text-center hover:shadow-lg transition-shadow border-red-200 bg-white">
								<CardHeader>
									<div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
										<Phone className="h-8 w-8 text-red-600" />
									</div>
									<CardTitle className="text-xl text-red-600">
										24/7 Emergency Hotline
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-2xl font-bold text-red-800 mb-2">
										0300 244 9700
									</p>
									<CardDescription className="mb-4 text-red-700">
										Immediate response for active cyber
										incidents
									</CardDescription>
									<Button className="w-full bg-red-600 hover:bg-red-700">
										Call Now
									</Button>
								</CardContent>
							</Card>

							<Card className="text-center hover:shadow-lg transition-shadow border-red-200 bg-white">
								<CardHeader>
									<div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
										<AlertTriangle className="h-8 w-8 text-red-600" />
									</div>
									<CardTitle className="text-xl text-red-600">
										Online Incident Report
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="mb-6 text-red-700">
										Secure online form for reporting cyber
										incidents
									</CardDescription>
									<Button
										className="w-full bg-red-600 hover:bg-red-700"
										asChild
									>
										<Link href="/report-incident">
											Report Incident
										</Link>
									</Button>
								</CardContent>
							</Card>

							<Card className="text-center hover:shadow-lg transition-shadow border-red-200 bg-white">
								<CardHeader>
									<div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
										<Mail className="h-8 w-8 text-red-600" />
									</div>
									<CardTitle className="text-xl text-red-600">
										Email Support
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-lg font-bold text-red-800 mb-2">
										SC3@gov.scot
									</p>
									<CardDescription className="mb-4 text-red-700">
										Email us for incident reporting and
										support
									</CardDescription>
									<Button
										className="w-full bg-red-600 hover:bg-red-700"
										asChild
									>
										<Link href="mailto:SC3@gov.scot">
											Send Email
										</Link>
									</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* SC3 Workstreams */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								SC3 Workstreams
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Our five core workstreams provide comprehensive
								cyber security support to Scottish public sector
								organisations
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{workstreams.map((workstream) => {
								const IconComponent = workstream.icon;
								return (
									<Card
										key={workstream.href}
										className="hover:shadow-lg transition-shadow group"
									>
										<CardContent className="p-6">
											<div className="flex items-start space-x-4">
												<div
													className={`w-12 h-12 ${workstream.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
												>
													<IconComponent
														className={`h-6 w-6 ${workstream.color}`}
													/>
												</div>
												<div className="flex-1">
													<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0065bd]">
														{workstream.title}
													</h3>
													<p className="text-gray-600 mb-4">
														{workstream.description}
													</p>
													<div className="space-y-2 mb-4">
														{workstream.highlights.map(
															(
																highlight,
																index
															) => (
																<div
																	key={index}
																	className="flex items-center space-x-2"
																>
																	<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
																	<span className="text-sm text-gray-700">
																		{
																			highlight
																		}
																	</span>
																</div>
															)
														)}
													</div>
													<Button
														variant="outline"
														size="sm"
														className="w-full group-hover:bg-[#0065bd] group-hover:text-white"
														asChild
													>
														<Link
															href={
																workstream.href
															}
														>
															Learn More
															<ArrowRight className="ml-2 h-4 w-4" />
														</Link>
													</Button>
												</div>
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Quick Actions */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Quick Actions
							</h2>
							<p className="text-lg text-gray-600">
								Common tasks and resources for Scottish
								organisations
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-6">
							{quickActions.map((action, index) => {
								const IconComponent = action.icon;
								return (
									<Card
										key={index}
										className={`hover:shadow-lg transition-shadow ${
											action.urgent
												? "ring-2 ring-red-500"
												: ""
										}`}
									>
										<CardContent className="p-6 text-center">
											<div
												className={`w-16 h-16 ${
													action.urgent
														? "bg-red-100"
														: "bg-blue-100"
												} rounded-full flex items-center justify-center mx-auto mb-4`}
											>
												<IconComponent
													className={`h-8 w-8 ${
														action.urgent
															? "text-red-600"
															: "text-blue-600"
													}`}
												/>
											</div>
											<h3 className="text-xl font-semibold text-gray-900 mb-2">
												{action.title}
											</h3>
											<p className="text-gray-600 mb-4">
												{action.description}
											</p>
											<Button
												className={
													action.urgent
														? "bg-red-600 hover:bg-red-700"
														: "bg-blue-600 hover:bg-blue-700"
												}
												asChild
											>
												<Link href={action.href}>
													{action.urgent
														? "Get Help Now"
														: "Learn More"}
												</Link>
											</Button>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Our Impact Statistics */}
				<section className="py-16 bg-blue-600 text-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">
								Our Impact
							</h2>
							<p className="text-xl opacity-90">
								Supporting Scotland&#39;s cyber security resilience
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="text-4xl font-bold mb-2">
										{stat.value}
									</div>
									<div className="text-lg font-medium mb-1">
										{stat.label}
									</div>
									<div className="text-sm opacity-75">
										{stat.period}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Supporting Scotland's Public Sector - Reverted from v13 */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Supporting Scotland&#39;s Public Sector
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								While SC3 supports all Scottish organisations,
								we have a particular focus on helping public
								sector organisations build their cyber
								resilience and respond effectively to cyber
								threats.
							</p>
							<div className="grid md:grid-cols-3 gap-6">
								<Card className="text-center">
									<CardContent className="p-6">
										<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
											<Shield className="h-6 w-6 text-green-600" />
										</div>
										<h3 className="font-semibold text-gray-900 mb-2">
											Local Authorities
										</h3>
										<p className="text-sm text-gray-600">
											Cyber security support for councils
											and local government services
										</p>
									</CardContent>
								</Card>
								<Card className="text-center">
									<CardContent className="p-6">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
											<Users className="h-6 w-6 text-blue-600" />
										</div>
										<h3 className="font-semibold text-gray-900 mb-2">
											NHS Scotland
										</h3>
										<p className="text-sm text-gray-600">
											Protecting critical healthcare
											infrastructure and patient data
										</p>
									</CardContent>
								</Card>
								<Card className="text-center">
									<CardContent className="p-6">
										<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
											<Globe className="h-6 w-6 text-purple-600" />
										</div>
										<h3 className="font-semibold text-gray-900 mb-2">
											Government Agencies
										</h3>
										<p className="text-sm text-gray-600">
											Supporting Scottish Government
											departments and agencies
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Information */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									Get in Touch
								</h2>
								<p className="text-lg text-gray-600">
									Contact SC3 for cyber security support,
									guidance, or to report an incident
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-8">
								<Card>
									<CardHeader>
										<CardTitle className="flex items-center text-red-600">
											<AlertTriangle className="h-5 w-5 mr-2" />
											Emergency Incident Response
										</CardTitle>
										<CardDescription>
											24/7 support for active cyber
											security incidents
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex items-center space-x-3">
												<Phone className="h-4 w-4 text-gray-400" />
												<span className="font-medium">
													0300 244 9700
												</span>
											</div>
											<div className="flex items-center space-x-3">
												<Mail className="h-4 w-4 text-gray-400" />
												<span>SC3@gov.scot</span>
											</div>
											<p className="text-sm text-gray-600 mt-4">
												Available 24/7 for urgent cyber
												security incidents requiring
												immediate coordination and
												support.
											</p>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle className="flex items-center text-blue-600">
											<FileText className="h-5 w-5 mr-2" />
											General Enquiries
										</CardTitle>
										<CardDescription>
											Information, guidance, and
											non-urgent support
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex items-center space-x-3">
												<Phone className="h-4 w-4 text-gray-400" />
												<span className="font-medium">
													0300 244 9700
												</span>
											</div>
											<div className="flex items-center space-x-3">
												<Mail className="h-4 w-4 text-gray-400" />
												<span>SC3@gov.scot</span>
											</div>
											<p className="text-sm text-gray-600 mt-4">
												For general cyber security
												guidance, exercise requests, and
												non-urgent enquiries.
											</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
