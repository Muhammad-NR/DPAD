import { Calendar, Users, CheckCircle, FileText, Eye, Download, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Header } from "@/components/header"
import Link from "next/link"

export default function Dashboard() {
  const agendaItems = [
    {
      time: "09:00 - 10:00",
      title: "Rapat Koordinasi Bulanan",
      location: "Ruang Rapat Utama",
      type: "meeting",
    },
    {
      time: "13:00 - 15:00",
      title: "Kunjungan Dinas Pendidikan",
      location: "Lobby DPAD",
      type: "visit",
    },
    {
      time: "15:30 - 16:30",
      title: "Evaluasi Program Perpustakaan",
      location: "Ruang Meeting",
      type: "evaluation",
    },
  ]

  const attendanceData = [
    { name: "Ahmad Rizki (Magang)", position: "Staff IT", jamMasuk: "08:00", jamKeluar: "16:00", status: "Hadir" },
    { name: "Siti Nurhaliza", position: "Pustakawan", jamMasuk: "08:15", jamKeluar: "16:00", status: "Terlambat" },
    { name: "Budi Santoso (Magang)", position: "Staff Arsip", jamMasuk: "08:00", jamKeluar: "15:45", status: "Hadir" },
    { name: "Maya Sari", position: "Admin", jamMasuk: "-", jamKeluar: "-", status: "Alpha" },
    { name: "Doni Prasetyo (Magang)", position: "Staff Umum", jamMasuk: "07:55", jamKeluar: "16:05", status: "Hadir" },
  ]

  const quickActions = [
    { title: "Lihat Data Presensi", icon: Eye, color: "bg-blue-500", href: "/presensi" },
    { title: "Agenda Lengkap", icon: Calendar, color: "bg-blue-500", href: "/agenda" },
    { title: "Profil Karyawan", icon: Users, color: "bg-blue-500", href: "/profil-karyawan" },
    { title: "Laporan Bulanan", icon: FileText, color: "bg-blue-500", href: "/laporan" },
  ]

  const stats = [
    { value: "12", label: "Agenda Bulan Ini", icon: Calendar, color: "bg-orange-500" },
    { value: "45", label: "Total Karyawan", icon: Users, color: "bg-orange-500" },
    { value: "89%", label: "Tingkat Kehadiran", icon: CheckCircle, color: "bg-green-500" },
    { value: "8", label: "Kunjungan Minggu Ini", icon: FileText, color: "bg-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
      <Header />

      <div className="container mx-auto p-6 space-y-6">
        {/* Welcome Card */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Selamat Datang di Dashboard Karyawan DPAD</h2>
            <p className="text-gray-600">
              Kelola agenda, presensi, dan aktivitas harian Anda dengan mudah dan efisien.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Agenda Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-gray-800">Agenda Hari Ini</CardTitle>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Hari Ini
                  </Button>
                  <Link href="/agenda?tab=mendatang">
                    <Button size="sm" variant="outline">
                      Mendatang
                    </Button>
                  </Link>
                  <Link href="/agenda?tab=sebelumnya">
                    <Button size="sm" variant="outline">
                      Sebelumnya
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {agendaItems.map((item, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4 py-2">
                    <div className="text-sm text-orange-600 font-medium">{item.time}</div>
                    <div className="font-semibold text-gray-800">{item.title}</div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <CardTitle className="text-gray-800">Aksi Cepat</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <Button
                      className={`w-full ${action.color} hover:opacity-90 text-white justify-start`}
                      variant="default"
                    >
                      <action.icon className="w-4 h-4 mr-2" />
                      {action.title}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Attendance Table */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-600" />
                <CardTitle className="text-gray-800">Data Presensi Karyawan</CardTitle>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Karyawan</TableHead>
                  <TableHead>Jabatan</TableHead>
                  <TableHead>Jam Masuk</TableHead>
                  <TableHead>Jam Keluar</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.jamMasuk}</TableCell>
                    <TableCell>{employee.jamKeluar}</TableCell>
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
