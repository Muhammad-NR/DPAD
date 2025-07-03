"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Lock, User, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
      <Header />

      <div className="container mx-auto p-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Login Sistem DPAD</CardTitle>
              <p className="text-gray-600 text-sm">Masuk ke dashboard karyawan DPAD DIY</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username Field */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-gray-700">
                    Username / NIP
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Masukkan username atau NIP"
                      className="pl-10"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan password"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Ingat saya
                    </Label>
                  </div>
                  <Button variant="link" className="text-sm text-blue-600 p-0">
                    Lupa password?
                  </Button>
                </div>

                {/* Login Button */}
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Masuk
                </Button>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Atau</span>
                </div>
              </div>

              {/* Alternative Login */}
              <div className="space-y-2">
                <Button variant="outline" className="w-full bg-transparent">
                  Login dengan SSO
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Login sebagai Tamu
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="bg-white/90 backdrop-blur-sm mt-4">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Butuh Bantuan?</h3>
              <p className="text-sm text-gray-600 mb-3">Hubungi IT Support untuk bantuan login</p>
              <div className="flex justify-center space-x-4 text-sm">
                <span className="text-gray-600">📞 +62 274 123460</span>
                <span className="text-gray-600">✉️ it@dpad.jogjaprov.go.id</span>
              </div>
            </CardContent>
          </Card>

          {/* System Info */}
          <div className="text-center mt-4 text-white/80 text-xs">
            <p>© 2024 Dinas Perpustakaan dan Arsip Daerah DIY</p>
            <p>Sistem Dashboard Karyawan v2.1.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}
