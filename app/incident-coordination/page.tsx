import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Phone, Users, AlertTriangle, CheckCircle, FileText, Mail, Activity, Globe } from 'lucide-react'
import Link from "next/link"
import EmergencyBanner from "@/components/ui/emergency-banner"


export default function IncidentCoordinationPage() {
  const services = [
    {
      title: "24/7 Emergency Hotline",
      description: "Immediate response and coordination for active cyber security incidents",
      icon: Phone,
      color: "text-red-600",
      bgColor: "bg-red-100",
      features: [
        "24/7 availability, 365 days a year",
        "Immediate triage and assessment",
        "Multi-agency coordination",
        "Expert guidance and support"
      ]
    },
    {
      title: "Multi-Agency Response",
      description: "Coordinated response involving NCSC, Police Scotland, and other partners",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      features: [
        "NCSC technical expertise",
        "Police Scotland investigation",
        "Regulatory body liaison",
        "Cross-sector coordination"
      ]
    },
    {
      title: "Incident Management",
      description: "Professional incident management and coordination support",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-100",
      features: [
        "Incident logging and tracking",
        "Status updates and reporting",
        "Stakeholder communication",
        "Recovery coordination"
      ]
    }
  ]

  const responseProcess = [
    {
      step: "1",
      title: "Initial Contact",
      description: "Call our 24/7 hotline or submit an online incident report",
      icon: Phone
    },
    {
      step: "2",
      title: "Triage & Assessment",
      description: "Our team assesses the incident severity and required response",
      icon: Shield
    },
    {
      step: "3",
      title: "Multi-Agency Coordination",
      description: "We coordinate with NCSC, Police Scotland, and other relevant partners",
      icon: Users
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Continuous support throughout incident response and recovery",
      icon: CheckCircle
    }
  ]

  const incidentTypes = [
    "Ransomware attacks",
    "Data breaches",
    "System compromises",
    "Denial of service attacks",
    "Phishing campaigns",
    "Supply chain incidents",
    "Insider threats",
    "Critical infrastructure attacks"
  ]

  return (
		<div className="min-h-screen bg-white">
			{/* Emergency Contact Banner */}
			<EmergencyBanner
				icon="AlertTriangle"
				iconClassName="!text-red-600"
				title="Cyber Incident?"
				description={
					<p>
						Call our 24/7 helpline: <strong>0300 244 9700</strong>{" "}
						or <br />
						Email: <strong>SC3@gov.scot</strong>
					</p>
				}
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
							Incident Coordination
						</span>
					</nav>
				</div>
			</div>

			<main>
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl">
							<div className="flex items-center space-x-3 mb-4">
								<Shield className="h-8 w-8" />
								<Badge className="bg-white/20 text-white border-white/30">
									Incident Coordination
								</Badge>
							</div>
							<h1 className="text-5xl font-bold mb-6">
								24/7 Cyber Incident Coordination
							</h1>
							<p className="text-xl mb-8 opacity-90 max-w-3xl">
								SC3 provides round-the-clock coordination and
								support for cyber security incidents across
								Scotland, working with NCSC, Police Scotland,
								and other partners to ensure effective
								multi-agency response.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-white text-red-600 hover:bg-gray-100"
									asChild
								>
									<Link href="/report-incident">
										<AlertTriangle className="mr-2 h-4 w-4" />
										Report Incident Now
									</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
								>
									<Phone className="mr-2 h-4 w-4" />
									Call: 0300 244 9700
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Emergency Response */}
				<section className="py-16 bg-red-50">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<Card className="border-red-200 bg-white shadow-lg">
								<CardContent className="p-8">
									<div className="flex items-start space-x-6">
										<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
											<AlertTriangle className="h-8 w-8 text-red-600" />
										</div>
										<div className="flex-1">
											<h2 className="text-2xl font-bold text-gray-900 mb-4">
												Experiencing a Cyber Incident?
											</h2>
											<p className="text-gray-600 mb-6">
												If your organisation is
												currently experiencing a cyber
												security incident, contact SC3
												immediately. Our 24/7
												coordination service will help
												you access the right support and
												coordinate with relevant
												agencies.
											</p>
											<div className="grid md:grid-cols-2 gap-6">
												<div>
													<h3 className="font-semibold text-gray-900 mb-2">
														Emergency Hotline
													</h3>
													<div className="flex items-center space-x-2 mb-2">
														<Phone className="h-4 w-4 text-red-600" />
														<span className="text-lg font-bold text-red-600">
															0300 244 9700
														</span>
													</div>
													<p className="text-sm text-gray-600">
														Available 24/7, 365 days
														a year
													</p>
												</div>
												<div>
													<h3 className="font-semibold text-gray-900 mb-2">
														Email Reporting
													</h3>
													<div className="flex items-center space-x-2 mb-2">
														<Mail className="h-4 w-4 text-red-600" />
														<span className="text-lg font-bold text-red-600">
															SC3@gov.scot
														</span>
													</div>
													<p className="text-sm text-gray-600">
														For non-urgent incident
														reporting
													</p>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Our Services */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Our Incident Coordination Services
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								SC3 provides comprehensive incident coordination
								services to help Scottish organisations respond
								effectively to cyber threats
							</p>
						</div>

						<div className="grid lg:grid-cols-3 gap-6">
							{services.map((service, index) => {
								const IconComponent = service.icon;
								return (
									<Card
										key={index}
										className="hover:shadow-lg transition-shadow h-full"
									>
										<CardHeader>
											<div
												className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}
											>
												<IconComponent
													className={`h-6 w-6 ${service.color}`}
												/>
											</div>
											<CardTitle className="text-xl">
												{service.title}
											</CardTitle>
											<CardDescription>
												{service.description}
											</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className="space-y-2">
												{service.features.map(
													(feature, idx) => (
														<li
															key={idx}
															className="flex items-center space-x-2"
														>
															<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
															<span className="text-sm text-gray-600">
																{feature}
															</span>
														</li>
													)
												)}
											</ul>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Response Process */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Our Response Process
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								When you contact SC3 about a cyber incident, we
								follow a structured process to ensure you get
								the right support quickly
							</p>
						</div>

						<div className="max-w-4xl mx-auto">
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								{responseProcess.map((step, index) => {
									const IconComponent = step.icon;
									return (
										<Card
											key={index}
											className="text-center hover:shadow-lg transition-shadow"
										>
											<CardContent className="p-6">
												<div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
													{step.step}
												</div>
												<IconComponent className="h-8 w-8 text-gray-400 mx-auto mb-4" />
												<h3 className="text-lg font-semibold text-gray-900 mb-2">
													{step.title}
												</h3>
												<p className="text-gray-600 text-sm">
													{step.description}
												</p>
											</CardContent>
										</Card>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				{/* Incident Types */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									Types of Incidents We Handle
								</h2>
								<p className="text-lg text-gray-600">
									SC3 coordinates response to all types of
									cyber security incidents affecting Scottish
									organisations
								</p>
							</div>

							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
								{incidentTypes.map((type, index) => (
									<Card
										key={index}
										className="text-center hover:shadow-md transition-shadow"
									>
										<CardContent className="p-4">
											<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
												<AlertTriangle className="h-6 w-6 text-red-600" />
											</div>
											<p className="text-sm font-medium text-gray-900">
												{type}
											</p>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Multi-Agency Partners */}
				<section className="py-16 bg-blue-600 text-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">
								Multi-Agency Coordination
							</h2>
							<p className="text-xl opacity-90 max-w-2xl mx-auto">
								SC3 works closely with key partners to provide
								comprehensive incident response support
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							<Card className="bg-white/10 border-white/20 text-white">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<Shield className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-2">
										NCSC
									</h3>
									<p className="text-sm opacity-90">
										Technical expertise, threat
										intelligence, and incident response
										guidance from the National Cyber
										Security Centre
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white/10 border-white/20 text-white">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<Users className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-2">
										Police Scotland
									</h3>
									<p className="text-sm opacity-90">
										Criminal investigation, digital
										forensics, and law enforcement response
										through specialist cyber crime units
									</p>
								</CardContent>
							</Card>

							<Card className="bg-white/10 border-white/20 text-white">
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<Globe className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-2">
										Other Partners
									</h3>
									<p className="text-sm opacity-90">
										Regulatory bodies, sector organisations,
										and specialist response providers as
										required
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									Contact Our Incident Coordination Team
								</h2>
								<p className="text-lg text-gray-600">
									Available 24/7 for cyber security incident
									coordination and support
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-8">
								<Card>
									<CardHeader>
										<CardTitle className="flex items-center text-red-600">
											<AlertTriangle className="h-5 w-5 mr-2" />
											Emergency Incidents
										</CardTitle>
										<CardDescription>
											For active cyber security incidents
											requiring immediate response
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="flex items-center space-x-3">
												<Phone className="h-5 w-5 text-red-600" />
												<div>
													<p className="font-bold text-xl text-red-600">
														0300 244 9700
													</p>
													<p className="text-sm text-gray-600">
														24/7 Emergency Hotline
													</p>
												</div>
											</div>
											<div className="flex items-center space-x-3">
												<Mail className="h-5 w-5 text-red-600" />
												<div>
													<p className="font-medium">
														SC3@gov.scot
													</p>
													<p className="text-sm text-gray-600">
														Emergency email
														reporting
													</p>
												</div>
											</div>
											<Button
												className="w-full bg-red-600 hover:bg-red-700"
												asChild
											>
												<Link href="/report-incident">
													Report Incident Online
												</Link>
											</Button>
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
											Information about incident
											coordination services
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="flex items-center space-x-3">
												<Phone className="h-5 w-5 text-blue-600" />
												<div>
													<p className="font-bold text-xl text-blue-600">
														0300 244 9700
													</p>
													<p className="text-sm text-gray-600">
														General enquiries
													</p>
												</div>
											</div>
											<div className="flex items-center space-x-3">
												<Mail className="h-5 w-5 text-blue-600" />
												<div>
													<p className="font-medium">
														SC3@gov.scot
													</p>
													<p className="text-sm text-gray-600">
														Non-urgent enquiries
													</p>
												</div>
											</div>
											<p className="text-sm text-gray-600">
												For questions about our incident
												coordination services,
												preparedness advice, or general
												guidance.
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
