import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, CheckCircle, FileText, Calendar, Phone, Mail, Shield, Activity, BookOpen, Lightbulb, TrendingUp } from 'lucide-react'
import Link from "next/link"
import EmergencyBanner from "@/components/ui/emergency-banner"

export default function CyberExercisingPage() {
  const exerciseTypes = [
    {
      title: "Strategic Tabletop Exercises",
      description: "Decision-making focused exercises for senior leadership teams",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      features: [
        "Board-level decision making",
        "Strategic response planning", 
        "Multi-agency coordination",
        "Crisis communication"
      ],
      duration: "Half-day to full-day",
      audience: "C-suite, Board members, Senior executives"
    },
    {
      title: "Operational Tabletop Exercises",
      description: "Tactical response exercises for operational teams",
      icon: Target,
      color: "text-green-600", 
      bgColor: "bg-green-100",
      features: [
        "Incident response procedures",
        "Team coordination",
        "Technical decision making",
        "Escalation processes"
      ],
      duration: "2-4 hours",
      audience: "IT teams, Security teams, Operations managers"
    },
    {
      title: "Sector-Specific Exercises",
      description: "Tailored exercises for specific sectors and threats",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-100", 
      features: [
        "Sector-relevant scenarios",
        "Regulatory considerations",
        "Supply chain impacts",
        "Stakeholder engagement"
      ],
      duration: "Flexible format",
      audience: "Sector organisations, Regulators, Partners"
    }
  ]

  const benefits = [
    {
      title: "Test Response Plans",
      description: "Validate and improve your incident response procedures in a safe environment",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Build Team Confidence",
      description: "Increase team confidence and competence in handling cyber incidents",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Identify Gaps",
      description: "Discover weaknesses in processes, communication, and decision-making",
      icon: Target,
      color: "text-orange-600"
    },
    {
      title: "Enhance Coordination",
      description: "Improve coordination between teams, departments, and external partners",
      icon: Users,
      color: "text-purple-600"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your organisation's needs, objectives, and current preparedness level"
    },
    {
      step: "2", 
      title: "Exercise Design",
      description: "We develop a tailored scenario and exercise plan based on your requirements"
    },
    {
      step: "3",
      title: "Pre-Exercise Briefing", 
      description: "Participants receive briefing materials and understand their roles"
    },
    {
      step: "4",
      title: "Exercise Delivery",
      description: "Facilitated tabletop exercise with realistic scenario and decision points"
    },
    {
      step: "5",
      title: "Debrief & Report",
      description: "Comprehensive debrief session and written report with recommendations"
    }
  ]

  return (
		<div className="min-h-screen bg-white">
			{/* Emergency Contact Banner */}
			<EmergencyBanner
				className="border-l-green-500 bg-green-50"
				icon="Dumbbell"
				iconClassName="!text-green-600"
				title="Cyber Incident? "
				description={
					<>
						Report cyber security incidents or vulnerabilities to SC3 for coordinated response and support.
					</>
				}
				descriptionClassName="text-green-800"
			/>

			<main>
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl">
							<div className="flex items-center space-x-3 mb-4">
								<Activity className="h-8 w-8" />
								<Badge className="bg-white/20 text-white border-white/30">
									Cyber Exercising
								</Badge>
							</div>
							<h1 className="text-5xl font-bold mb-6">
								Building Cyber Resilience Through Strategic
								Exercises
							</h1>
							<p className="text-xl mb-8 opacity-90 max-w-3xl">
								SC3 specialises in delivering strategic tabletop
								exercises that test decision-making processes,
								improve incident response capabilities, and
								build organisational cyber resilience across
								Scotland&#39;s public sector.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-white text-green-600 hover:bg-gray-100"
									asChild
								>
									<Link href="/cyber-exercising/request">
										<Calendar className="mr-2 h-4 w-4" />
										Request an Exercise
									</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
								>
									<FileText className="mr-2 h-4 w-4" />
									Download Guide
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Our Approach */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Approach to Cyber Exercising
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								SC3 focuses on strategic-level tabletop
								exercises that test decision-making processes
								rather than technical capabilities. Our
								exercises are designed for senior leaders and
								decision-makers who need to understand their
								role in cyber incident response.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
							<Card className="border-green-200 bg-green-50">
								<CardContent className="p-6">
									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
											<Lightbulb className="h-6 w-6 text-green-600" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-gray-900 mb-3">
												Strategic Focus
											</h3>
											<p className="text-gray-700 mb-4">
												Our exercises concentrate on
												high-level decision making,
												crisis management, and strategic
												response rather than technical
												incident handling.
											</p>
											<ul className="space-y-2 text-sm text-gray-600">
												<li className="flex items-center space-x-2">
													<CheckCircle className="h-4 w-4 text-green-500" />
													<span>
														Board-level decision
														making
													</span>
												</li>
												<li className="flex items-center space-x-2">
													<CheckCircle className="h-4 w-4 text-green-500" />
													<span>
														Crisis communication
														strategies
													</span>
												</li>
												<li className="flex items-center space-x-2">
													<CheckCircle className="h-4 w-4 text-green-500" />
													<span>
														Stakeholder management
													</span>
												</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-blue-200 bg-blue-50">
								<CardContent className="p-6">
									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
											<BookOpen className="h-6 w-6 text-blue-600" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-gray-900 mb-3">
												Tabletop Format
											</h3>
											<p className="text-gray-700 mb-4">
												Discussion-based exercises that
												simulate cyber incidents through
												facilitated conversation and
												scenario-based decision making.
											</p>
											<ul className="space-y-2 text-sm text-gray-600">
												<li className="flex items-center space-x-2">
													<CheckCircle className="h-4 w-4 text-blue-500" />
													<span>
														Realistic scenario
														development
													</span>
												</li>
												<li className="flex items-center space-x-2">
													<CheckCircle className="h-4 w-4 text-blue-500" />
													<span>
														Facilitated group
														discussions
													</span>
												</li>
												<li className="flex items-center space-x-2">
													<CheckCircle className="h-4 w-4 text-blue-500" />
													<span>
														Safe learning
														environment
													</span>
												</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Exercise Types */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Types of Exercises We Deliver
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								We offer different types of tabletop exercises
								tailored to your organisation&#39;s needs and the
								seniority of participants
							</p>
						</div>

						<div className="grid lg:grid-cols-3 gap-6">
							{exerciseTypes.map((exercise, index) => {
								const IconComponent = exercise.icon;
								return (
									<Card
										key={index}
										className="hover:shadow-lg transition-shadow h-full"
									>
										<CardHeader>
											<div
												className={`w-12 h-12 ${exercise.bgColor} rounded-lg flex items-center justify-center mb-4`}
											>
												<IconComponent
													className={`h-6 w-6 ${exercise.color}`}
												/>
											</div>
											<CardTitle className="text-xl">
												{exercise.title}
											</CardTitle>
											<CardDescription>
												{exercise.description}
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="space-y-4">
												<div>
													<h4 className="font-semibold text-gray-900 mb-2">
														Key Features:
													</h4>
													<ul className="space-y-1">
														{exercise.features.map(
															(feature, idx) => (
																<li
																	key={idx}
																	className="flex items-center space-x-2 text-sm text-gray-600"
																>
																	<CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
																	<span>
																		{
																			feature
																		}
																	</span>
																</li>
															)
														)}
													</ul>
												</div>
												<div className="pt-4 border-t border-gray-200">
													<div className="flex items-center justify-between text-sm">
														<div>
															<span className="font-medium text-gray-900">
																Duration:
															</span>
															<span className="text-gray-600 ml-1">
																{
																	exercise.duration
																}
															</span>
														</div>
													</div>
													<div className="mt-2">
														<span className="font-medium text-gray-900 text-sm">
															Target Audience:
														</span>
														<p className="text-sm text-gray-600 mt-1">
															{exercise.audience}
														</p>
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
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Benefits of Cyber Exercising
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Regular cyber exercises provide numerous
								benefits for organisations looking to improve
								their cyber resilience
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{benefits.map((benefit, index) => {
								const IconComponent = benefit.icon;
								return (
									<Card
										key={index}
										className="text-center hover:shadow-lg transition-shadow"
									>
										<CardContent className="p-6">
											<div
												className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}
											>
												<IconComponent
													className={`h-8 w-8 ${benefit.color}`}
												/>
											</div>
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												{benefit.title}
											</h3>
											<p className="text-gray-600 text-sm">
												{benefit.description}
											</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Process */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Our Exercise Process
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								We follow a structured approach to ensure your
								exercise meets your objectives and provides
								maximum value
							</p>
						</div>

						<div className="max-w-4xl mx-auto">
							<div className="space-y-8">
								{process.map((step, index) => (
									<div
										key={index}
										className="flex items-start space-x-6"
									>
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
												{step.step}
											</div>
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold text-gray-900 mb-2">
												{step.title}
											</h3>
											<p className="text-gray-600">
												{step.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Request Exercise */}
				<section className="py-16 bg-green-600 text-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-3xl font-bold mb-6">
								Ready to Test Your Cyber Resilience?
							</h2>
							<p className="text-xl mb-8 opacity-90">
								Contact SC3 to discuss your exercise
								requirements and schedule a strategic tabletop
								exercise tailored to your organisation&#39;s needs.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									size="lg"
									className="bg-white text-green-600 hover:bg-gray-100"
									asChild
								>
									<Link href="/cyber-exercising/request">
										<Calendar className="mr-2 h-4 w-4" />
										Request an Exercise
									</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
								>
									<Phone className="mr-2 h-4 w-4" />
									Call: 0300 244 9700
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Information */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									Get in Touch
								</h2>
								<p className="text-lg text-gray-600">
									Contact our cyber exercising team to discuss
									your requirements
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-8">
								<Card>
									<CardHeader>
										<CardTitle className="flex items-center text-green-600">
											<Calendar className="h-5 w-5 mr-2" />
											Exercise Requests
										</CardTitle>
										<CardDescription>
											Schedule and plan cyber exercises
											for your organisation
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
											<Button
												className="w-full mt-4 bg-green-600 hover:bg-green-700"
												asChild
											>
												<Link href="/cyber-exercising/request">
													Submit Exercise Request
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
											Questions about our cyber exercising
											services
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
												For general questions about
												cyber exercising, training
												opportunities, or guidance.
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
