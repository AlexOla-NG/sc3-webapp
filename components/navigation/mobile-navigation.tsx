"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navlink from "./navlink";
import { navlinks } from "./data";

export default function MobileNavigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="lg:hidden">
			<Button
				variant="ghost"
				size="sm"
				onClick={() => setIsOpen(!isOpen)}
				className="text-[#0065bd] hover:text-[#00509e]"
			>
				{isOpen ? (
					<X className="h-5 w-5" />
				) : (
					<Menu className="h-5 w-5" />
				)}
			</Button>

			<div
				className={`
					absolute top-full left-0 right-0 bg-[#0065bd] border-t border-white/20 z-50
					transition-all duration-300 ease-in-out
					${
						isOpen
							? "opacity-100 translate-y-0 pointer-events-auto"
							: "opacity-0 -translate-y-4 pointer-events-none"
					}
				`}
			>
				<nav className="container mx-auto px-4 py-4 space-y-2">
					{navlinks.map((navlink) => (
						<Navlink
							key={navlink.link}
							className="block py-2 text-white hover:text-gray-200"
							link={navlink.link}
							title={navlink.title}
							onClick={() => setIsOpen(false)}
						/>
					))}
				</nav>
			</div>
		</div>
	);
}
