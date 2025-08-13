import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from '@/components/search-bar'
import Footer from '@/components/footer'
import DesktopNavigation from '@/components/navigation/desktop-navigation'
import MobileNavigation from '@/components/navigation/mobile-navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scottish Cyber Coordination Centre (SC3)',
  description: 'The national focal point for cyber security and resilience in Scotland',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
		<html lang="en">
			<body className={inter.className}>
				{/* Header */}
				<header className="bg-white text-white sticky top-0 z-50">
					<div className="container mx-auto px-4 py-3 flex items-center justify-between gap-x-6">
						<Link
							href="/"
							className={`w-250px h-40px hover:underline`}
						>
							<Image
								src="/images/sc3-logo.jpg"
								alt="Scottish Cyber Coordination Centre"
								width={200}
								height={30}
								className="object-fit w-full"
							/>
						</Link>

						<DesktopNavigation />

						<div className="flex items-center space-x-4">
							<SearchBar />
							<MobileNavigation />
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="min-h-screen">{children}</main>

				{/* Footer */}
				<Footer />
			</body>
		</html>
  );
}
