import Link from 'next/link'
import { EnvelopeClosedIcon, LocationIcon, MobileIcon } from '@radix-ui/react-icons'

export function Footer() {
  return (
    <footer className="bg-card-bg border-t border-gray-800 mt-24">
      <div className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-accent-warm mb-4">
              Condowebnikhane
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Premium construction and development solutions for modern properties and communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-accent-warm transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-accent-warm transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-accent-warm transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-accent-warm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-2">
                <EnvelopeClosedIcon width={18} height={18} className="text-accent-warm" />
                <a href="mailto:info@condowebnikhane.com" className="hover:text-accent-warm transition-colors">
                  info@condowebnikhane.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MobileIcon width={18} height={18} className="text-accent-warm" />
                <a href="tel:+1234567890" className="hover:text-accent-warm transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-2">
                <LocationIcon width={18} height={18} className="text-accent-warm flex-shrink-0 mt-0.5" />
                <span>123 Development Street, City, Country 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2024 Condowebnikhane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
