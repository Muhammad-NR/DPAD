"use client"

import { FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/agenda", label: "Agenda" },
    { href: "/presensi", label: "Presensi" },
    { href: "/kontak", label: "Kontak" },
    { href: "/login", label: "Login" },
  ]

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">BORDERLANDS 2</h1>
            <p className="text-sm text-gray-300">PETE THE INVINCIBLE</p>
          </div>
        </div>
        <nav className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-orange-300 transition-colors ${
                pathname === item.href ? "text-orange-300 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
