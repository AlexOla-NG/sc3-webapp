"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search, FileText, Building2, Shield, AlertTriangle, TrendingUp, Clock } from 'lucide-react'
import Link from "next/link"

export function SearchBar() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const quickSuggestions = [
    {
      title: "Report cyber incident",
      href: "/report-incident",
      icon: AlertTriangle,
      category: "Quick Action",
      popular: true,
    },
    {
      title: "Password security guide",
      href: "/individuals/password-security",
      icon: FileText,
      category: "Individual",
      popular: true,
    },
    {
      title: "Cyber Essentials for business",
      href: "/businesses/cyber-essentials",
      icon: Building2,
      category: "Business",
      popular: true,
    },
    {
      title: "I think I've been hacked",
      href: "/individuals/been-hacked",
      icon: Shield,
      category: "Individual",
      popular: false,
    },
  ]

  const popularSearches = [
    "phishing",
    "two factor authentication",
    "ransomware",
    "password manager",
    "cyber essentials",
    "data breach",
  ]

  const recentSearches = ["social media safety", "business incident response", "school network security"]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e)
      setOpen(false)
    }
  }

  return (
		<div className="hidden md:block relative w-full max-w-md">
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<form
						onSubmit={handleSearch}
						className="relative flex items-center space-x-2"
					>
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
						<Input
							type="search"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onKeyPress={handleKeyPress}
							onFocus={() => setOpen(true)}
							className="pl-10 pr-4 py-2 w-48 text-gray-900"
						/>
						<Button
							type="submit"
							size="sm"
							variant="secondary"
							className="bg-[#0065bd] text-white hover:bg-white hover:text-[#0065bd]  hover:cursor-pointer"
						>
							Search
						</Button>
					</form>
				</PopoverTrigger>
				<PopoverContent className="w-[400px] p-0" align="start">
					<Command>
						<CommandInput
							placeholder="Search..."
							value={searchQuery}
							onValueChange={setSearchQuery}
						/>
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>

							{/* Quick Suggestions */}
							<CommandGroup heading="Quick Actions">
								{quickSuggestions.map((suggestion) => {
									const IconComponent = suggestion.icon;
									return (
										<CommandItem
											key={suggestion.href}
											asChild
										>
											<Link
												href={suggestion.href}
												className="flex items-center space-x-3 p-2 hover:bg-gray-50 cursor-pointer"
												onClick={() => setOpen(false)}
											>
												<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
													<IconComponent className="h-4 w-4 text-blue-600" />
												</div>
												<div className="flex-1">
													<div className="flex items-center space-x-2">
														<span className="font-medium">
															{suggestion.title}
														</span>
														{suggestion.popular && (
															<Badge
																variant="secondary"
																className="text-xs"
															>
																<TrendingUp className="h-3 w-3 mr-1" />
																Popular
															</Badge>
														)}
													</div>
													<span className="text-sm text-gray-500">
														{suggestion.category}
													</span>
												</div>
											</Link>
										</CommandItem>
									);
								})}
							</CommandGroup>

							<CommandSeparator />

							{/* Popular Searches */}
							<CommandGroup heading="Popular Searches">
								{popularSearches.slice(0, 4).map((search) => (
									<CommandItem key={search} asChild>
										<Link
											href={`/search?q=${encodeURIComponent(
												search
											)}`}
											className="flex items-center space-x-3 p-2 hover:bg-gray-50 cursor-pointer"
											onClick={() => setOpen(false)}
										>
											<TrendingUp className="h-4 w-4 text-gray-400" />
											<span>{search}</span>
										</Link>
									</CommandItem>
								))}
							</CommandGroup>

							{/* Recent Searches */}
							{recentSearches.length > 0 && (
								<>
									<CommandSeparator />
									<CommandGroup heading="Recent Searches">
										{recentSearches.map((search) => (
											<CommandItem key={search} asChild>
												<Link
													href={`/search?q=${encodeURIComponent(
														search
													)}`}
													className="flex items-center space-x-3 p-2 hover:bg-gray-50 cursor-pointer"
													onClick={() =>
														setOpen(false)
													}
												>
													<Clock className="h-4 w-4 text-gray-400" />
													<span>{search}</span>
												</Link>
											</CommandItem>
										))}
									</CommandGroup>
								</>
							)}

							<CommandSeparator />

							{/* Advanced Search */}
							<CommandGroup>
								<CommandItem asChild>
									<Link
										href="/search/advanced"
										className="flex items-center justify-center p-3 text-blue-600 hover:bg-blue-50 cursor-pointer font-medium"
										onClick={() => setOpen(false)}
									>
										Advanced Search Options
									</Link>
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
  );
}

export default SearchBar
