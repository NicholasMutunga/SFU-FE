import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Shikana Frontliners for Unity Party - Building a stronger nation through unity, transparency, and
              progress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register" className="text-white/80 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/80 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-white/80 hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@sfup.org" className="text-white/80 hover:text-white transition-colors">
                  info@sfup.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="flex-shrink-0" />
                <span className="text-white/80">National Headquarters</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <p className="text-sm text-white/80 mb-4">Follow Us</p>
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; {currentYear} Shikana Frontliners for Unity Party. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
