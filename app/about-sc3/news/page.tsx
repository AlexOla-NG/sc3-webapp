import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp, Shield } from "lucide-react";

export default function SC3News() {
	const newsItems = [
		{
			id: 1,
			title: "SC3 Launches Enhanced Threat Intelligence Service",
			excerpt:
				"New advanced threat intelligence capabilities now available to support Scotland's cyber security community with real-time threat monitoring and analysis.",
			date: "2024-01-15",
			category: "Service Launch",
			featured: true,
			readTime: "3 min read",
		},
		{
			id: 2,
			title: "Cyber Security Exercise Programme Expands Across Scotland",
			excerpt:
				"SC3 announces expansion of cyber exercising programme to include more public sector organizations and critical infrastructure providers.",
			date: "2024-01-10",
			category: "Programme Update",
			featured: false,
			readTime: "2 min read",
		},
		{
			id: 3,
			title: "Annual Cyber Resilience Report Published",
			excerpt:
				"SC3's comprehensive analysis of Scotland's cyber security landscape reveals key trends and recommendations for 2024.",
			date: "2024-01-05",
			category: "Report",
			featured: true,
			readTime: "5 min read",
		},
		{
			id: 4,
			title: "Partnership with Scottish Universities Strengthened",
			excerpt:
				"New collaboration framework established to enhance cyber security research and education across Scotland's higher education sector.",
			date: "2023-12-20",
			category: "Partnership",
			featured: false,
			readTime: "4 min read",
		},
		{
			id: 5,
			title: "SC3 Responds to Increased Holiday Season Cyber Threats",
			excerpt:
				"Coordinated response to seasonal increase in cyber attacks targeting Scottish organizations during holiday period.",
			date: "2023-12-15",
			category: "Incident Response",
			featured: false,
			readTime: "3 min read",
		},
		{
			id: 6,
			title: "New Vulnerability Management Framework Released",
			excerpt:
				"Comprehensive guidance published to help organizations implement effective vulnerability management practices.",
			date: "2023-12-10",
			category: "Guidance",
			featured: false,
			readTime: "6 min read",
		},
	];

	const featuredNews = newsItems.filter((item) => item.featured);
	const regularNews = newsItems.filter((item) => !item.featured);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-blue-900 text-white py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							SC3 News & Updates
						</h1>
						<p className="text-xl md:text-2xl mb-8 text-blue-100">
							Stay informed about Scotland&#39;s cyber security
							developments, initiatives, and insights
						</p>
					</div>
				</div>
			</section>

			{/* Featured News */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="flex items-center mb-8">
							<TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
							<h2 className="text-3xl font-bold text-gray-900">
								Featured News
							</h2>
						</div>

						<div className="grid md:grid-cols-2 gap-8 mb-16">
							{featuredNews.map((item) => (
								<Card
									key={item.id}
									className="hover:shadow-lg transition-shadow"
								>
									<CardHeader>
										<div className="flex items-center justify-between mb-2">
											<Badge variant="secondary">
												{item.category}
											</Badge>
											<span className="text-sm text-gray-500">
												{item.readTime}
											</span>
										</div>
										<CardTitle className="text-xl hover:text-blue-600 transition-colors">
											<Link
												href={`/about-sc3/news/${item.id}`}
											>
												{item.title}
											</Link>
										</CardTitle>
										<CardDescription className="text-base">
											{item.excerpt}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-between">
											<div className="flex items-center text-sm text-gray-500">
												<Calendar className="h-4 w-4 mr-1" />
												{new Date(
													item.date
												).toLocaleDateString("en-GB", {
													day: "numeric",
													month: "long",
													year: "numeric",
												})}
											</div>
											<Button
												variant="ghost"
												size="sm"
												asChild
											>
												<Link
													href={`/about-sc3/news/${item.id}`}
												>
													Read More{" "}
													<ArrowRight className="h-4 w-4 ml-1" />
												</Link>
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* All News */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Latest Updates
						</h2>

						<div className="space-y-6">
							{regularNews.map((item) => (
								<Card
									key={item.id}
									className="hover:shadow-md transition-shadow"
								>
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-center justify-between">
											<div className="flex-1">
												<div className="flex items-center mb-2">
													<Badge
														variant="outline"
														className="mr-3"
													>
														{item.category}
													</Badge>
													<div className="flex items-center text-sm text-gray-500">
														<Calendar className="h-4 w-4 mr-1" />
														{new Date(
															item.date
														).toLocaleDateString(
															"en-GB",
															{
																day: "numeric",
																month: "long",
																year: "numeric",
															}
														)}
													</div>
													<span className="mx-2 text-gray-300">
														•
													</span>
													<span className="text-sm text-gray-500">
														{item.readTime}
													</span>
												</div>
												<h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
													<Link
														href={`/about-sc3/news/${item.id}`}
													>
														{item.title}
													</Link>
												</h3>
												<p className="text-gray-600 mb-4 md:mb-0">
													{item.excerpt}
												</p>
											</div>
											<div className="md:ml-6">
												<Button
													variant="outline"
													size="sm"
													asChild
												>
													<Link
														href={`/about-sc3/news/${item.id}`}
													>
														Read More{" "}
														<ArrowRight className="h-4 w-4 ml-1" />
													</Link>
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Load More */}
						<div className="text-center mt-12">
							<Button variant="outline" size="lg">
								Load More News
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="py-16 bg-blue-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<div className="flex justify-center mb-6">
							<div className="bg-blue-100 p-3 rounded-full">
								<Shield className="h-8 w-8 text-blue-600" />
							</div>
						</div>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Stay Informed
						</h2>
						<p className="text-lg text-gray-600 mb-8">
							Subscribe to receive the latest cyber security
							updates, threat alerts, and SC3 news directly to
							your inbox.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							<Button>Subscribe</Button>
						</div>

						<p className="text-sm text-gray-500 mt-4">
							We respect your privacy. Unsubscribe at any time.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
