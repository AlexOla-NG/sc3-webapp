import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About SC3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About SC3</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="/news" className="hover:text-blue-600">News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/incident-coordination" className="hover:text-blue-600">Incident Coordination</Link></li>
              <li><Link href="/threat-intelligence" className="hover:text-blue-600">Threat Intelligence</Link></li>
              <li><Link href="/vulnerability-management" className="hover:text-blue-600">Vulnerability Management</Link></li>
              <li><Link href="/cyber-exercising" className="hover:text-blue-600">Cyber Exercising</Link></li>
              <li><Link href="/standards-insights" className="hover:text-blue-600">Standards & Insights</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/resources" className="hover:text-blue-600">Resource Library</Link></li>
              <li><Link href="/guidance" className="hover:text-blue-600">Guidance</Link></li>
              <li><Link href="/reports" className="hover:text-blue-600">Reports</Link></li>
              <li><Link href="/tools" className="hover:text-blue-600">Tools</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-600">Cookies</Link></li>
              <li><Link href="/accessibility" className="hover:text-blue-600">Accessibility</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image
              src="/images/sg-logo.png"
              alt="Scottish Government"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="text-sm text-gray-600">
            <p>&copy; 2025 Scottish Government. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
