"use client"

import { Users, Download, Calendar, Clock, TrendingUp, Filter, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { useState } from "react"

export default function PresensiPage() {
  const [activeTab, setActiveTab] = useState("hari-ini")

  const attendanceData = {
    "hari-ini": [
      {
        name: "Ahmad Rizki (Magang)",
        position: "Staff IT",
        jamMasuk: "08:00",
        jamKeluar: "16:00",
        status: "Hadir",
        durasi: "8 jam",
      },
      {
        name: "Siti Nurhaliza",
        position: "Pustakawan",
        jamMasuk: "08:15",
        jamKeluar: "16:00",
        status: "Terlambat",
        durasi: "7 jam 45 menit",
      },
      {
        name: "Budi Santoso (Magang)",
        position: "Staff Arsip",
        jamMasuk: "08:00",
        jamKeluar: "15:45",
        status: "Hadir",
        durasi: "7 jam 45 menit",
      },
      { name: "Maya Sari", position: "Admin", jamMasuk: "-", jamKeluar: "-", status: "Alpha", durasi: "-" },
      {
        name: "Doni Prasetyo (Magang)",
        position: "Staff Umum",
        jamMasuk: "07:55",
        jamKeluar: "16:05",
        status: "Hadir",
        durasi: "8 jam 10 menit",
      },
      {
        name: "Rina Wati",
        position: "Pustakawan",
        jamMasuk: "08:30",
        jamKeluar: "16:00",
        status: "Terlambat",
        durasi: "7 jam 30 menit",
      },
      {
        name: "Agus Setiawan",
        position: "Staff Arsip",
        jamMasuk: "08:00",
        jamKeluar: "16:00",
        status: "Hadir",
        durasi: "8 jam",
      },
    ],
    mingguan: [
      { name: "Ahmad Rizki (Magang)", hadir: 5, terlambat: 0, alpha: 0, persentase: "100%" },
      { name: "Siti Nurhaliza", hadir: 4, terlambat: 1, alpha: 0, persentase: "100%" },
      { name: "Budi Santoso (Magang)", hadir: 5, terlambat: 0, alpha: 0, persentase: "100%" },
      { name: "Maya Sari", hadir: 3, terlambat: 0, alpha: 2, persentase: "60%" },
      { name: "Doni Prasetyo (Magang)", hadir: 5, terlambat: 0, alpha: 0, persentase: "100%" },
      { name: "Rina Wati", hadir: 3, terlambat: 2, alpha: 0, persentase: "100%" },
      { name: "Agus Setiawan", hadir: 5, terlambat: 0, alpha: 0, persentase: "100%" },
    ],
  }

  const stats = [
    { value: "42", label: "Hadir Hari Ini", icon: Users, color: "bg-green-500", change: "+2%" },
    { value: "3", label: "Terlambat", icon: Clock, color: "bg-yellow-500", change: "-1%" },
    { value: "2", label: "Alpha", icon: Calendar, color: "bg-red-500", change: "0%" },
    { value: "89%", label: "Tingkat Kehadiran", icon: TrendingUp, color: "bg-blue-500", change: "+3%" },
  ]

  const tabs = [
    { id: "hari-ini", label: "Hari Ini" },
    { id: "mingguan", label: "Rekap Mingguan" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
      <Header />

      <div className="container mx-auto p-6 space-y-6">
        {/* Page Header */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Data Presensi Karyawan</h1>
                <p className="text-gray-600">Pantau kehadiran dan aktivitas karyawan DPAD</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xs text-green-600 mt-1">{stat.change}</div>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Cari karyawan..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        {/* Attendance Table */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-600" />
                <CardTitle className="text-gray-800">Data Presensi</CardTitle>
              </div>
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    size="sm"
                    onClick={() => setActiveTab(tab.id)}
                    className={
                      activeTab === tab.id
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {activeTab === "hari-ini" ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Karyawan</TableHead>
                    <TableHead>Jabatan</TableHead>
                    <TableHead>Jam Masuk</TableHead>
                    <TableHead>Jam Keluar</TableHead>
                    <TableHead>Durasi Kerja</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData["hari-ini"].map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.jamMasuk}</TableCell>
                      <TableCell>{employee.jamKeluar}</TableCell>
                      <TableCell>{employee.durasi}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            employee.status === "Hadir"
                              ? "default"
                              : employee.status === "Terlambat"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            employee.status === "Hadir"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : employee.status === "Terlambat"
                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Karyawan</TableHead>
                    <TableHead>Hadir</TableHead>
                    <TableHead>Terlambat</TableHead>
                    <TableHead>Alpha</TableHead>
                    <TableHead>Persentase Kehadiran</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData["mingguan"].map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">{employee.hadir}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-yellow-100 text-yellow-800">{employee.terlambat}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800">{employee.alpha}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            Number.parseInt(employee.persentase) >= 90
                              ? "bg-green-100 text-green-800"
                              : Number.parseInt(employee.persentase) >= 70
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {employee.persentase}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
