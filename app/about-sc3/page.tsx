import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Shield, Users, Globe, Target } from "lucide-react";

export default function AboutSC3() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-blue-900 text-white py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							About SC3
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-blue-100">
							Scotland&#39;s national cyber security coordination
							centre, protecting our digital infrastructure and
							supporting our communities.
						</p>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Our Mission
							</h2>
							<p className="text-lg text-gray-600">
								To enhance Scotland&#39;s cyber resilience by
								providing coordinated cyber security services,
								incident response, and expert guidance to
								protect our nation&#39;s digital assets.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 mb-16">
							<Card>
								<CardHeader>
									<Shield className="h-12 w-12 text-blue-600 mb-4" />
									<CardTitle>Cyber Protection</CardTitle>
									<CardDescription>
										Safeguarding Scotland&#39;s critical
										infrastructure and digital services from
										cyber threats.
									</CardDescription>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader>
									<Users className="h-12 w-12 text-blue-600 mb-4" />
									<CardTitle>Community Support</CardTitle>
									<CardDescription>
										Supporting public sector, private
										sector, third sector, and individuals
										across Scotland.
									</CardDescription>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader>
									<Globe className="h-12 w-12 text-blue-600 mb-4" />
									<CardTitle>National Coordination</CardTitle>
									<CardDescription>
										Coordinating cyber security efforts
										across Scotland&#39;s diverse digital
										landscape.
									</CardDescription>
								</CardHeader>
							</Card>

							<Card>
								<CardHeader>
									<Target className="h-12 w-12 text-blue-600 mb-4" />
									<CardTitle>Strategic Excellence</CardTitle>
									<CardDescription>
										Delivering world-class cyber security
										services and incident response
										capabilities.
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* What We Do Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
							What We Do
						</h2>

						<div className="space-y-8">
							<div className="border-l-4 border-blue-600 pl-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Incident Coordination
								</h3>
								<p className="text-gray-600">
									We provide 24/7 cyber incident response
									coordination, helping organizations across
									Scotland respond to and recover from cyber
									security incidents.
								</p>
							</div>

							<div className="border-l-4 border-blue-600 pl-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Threat Intelligence
								</h3>
								<p className="text-gray-600">
									Our team monitors the cyber threat
									landscape, providing timely intelligence and
									alerts to help organizations stay ahead of
									emerging threats.
								</p>
							</div>

							<div className="border-l-4 border-blue-600 pl-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Vulnerability Management
								</h3>
								<p className="text-gray-600">
									We help organizations identify, assess, and
									remediate vulnerabilities in their systems
									and infrastructure.
								</p>
							</div>

							<div className="border-l-4 border-blue-600 pl-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Cyber Exercising
								</h3>
								<p className="text-gray-600">
									We design and deliver cyber security
									exercises to test and improve organizational
									preparedness and response capabilities.
								</p>
							</div>

							<div className="border-l-4 border-blue-600 pl-6">
								<h3 className="text-xl font-semibent text-gray-900 mb-2">
									Standards & Insights
								</h3>
								<p className="text-gray-600">
									We provide guidance on cyber security
									standards, best practices, and strategic
									insights to enhance Scotland&#39;s overall cyber
									resilience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Partnership Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Working Together
						</h2>
						<p className="text-lg text-gray-600 mb-8">
							SC3 works in partnership with the Scottish
							Government, UK Government, law enforcement, industry
							partners, and international allies to deliver
							comprehensive cyber security protection for
							Scotland.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg">
								<Link href="/about-sc3/contact">
									Get in Touch
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/report-incident">
									Report an Incident
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
