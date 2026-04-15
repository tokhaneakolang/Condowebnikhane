'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-card-bg z-50">
      <nav className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="font-serif text-2xl font-bold text-accent-warm">
          Condowebnikhane
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-accent-warm transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-accent-warm transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-accent-warm transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent-warm transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-card-bg rounded-lg"
          aria-label="Toggle menu"
        >
          {isOpen ? <Cross1Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-card-bg md:hidden">
            <div className="container-custom flex flex-col gap-4 py-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-accent-warm">
                Home
              </Link>
              <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-accent-warm">
                Portfolio
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-accent-warm">
                About
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-accent-warm">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
