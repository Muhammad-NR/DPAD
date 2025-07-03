import { FileText, Download, TrendingUp, PieChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"

export default function LaporanPage() {
  const reports = [
    {
      title: "Laporan Kehadiran Bulanan",
      description: "Rekap kehadiran karyawan bulan ini",
      type: "Presensi",
      date: "Juli 2024",
      status: "Tersedia",
      size: "2.3 MB",
    },
    {
      title: "Laporan Aktivitas Perpustakaan",
      description: "Statistik pengunjung dan peminjaman buku",
      type: "Perpustakaan",
      date: "Juni 2024",
      status: "Tersedia",
      size: "1.8 MB",
    },
    {
      title: "Laporan Pengelolaan Arsip",
      description: "Data arsip masuk dan keluar",
      type: "Kearsipan",
      date: "Juni 2024",
      status: "Tersedia",
      size: "3.1 MB",
    },
    {
      title: "Laporan Kinerja Triwulan",
      description: "Evaluasi kinerja karyawan Q2 2024",
      type: "Kinerja",
      date: "Q2 2024",
      status: "Proses",
      size: "-",
    },
  ]

  const statistics = [
    { label: "Total Karyawan", value: "45", change: "+2", icon: "👥" },
    { label: "Tingkat Kehadiran", value: "89%", change: "+3%", icon: "✅" },
    { label: "Pengunjung Perpustakaan", value: "1,234", change: "+15%", icon: "📚" },
    { label: "Dokumen Diarsipkan", value: "567", change: "+8%", icon: "📄" },
  ]

  const monthlyData = [
    { month: "Jan", attendance: 85, visitors: 980, documents: 450 },
    { month: "Feb", attendance: 87, visitors: 1050, documents: 520 },
    { month: "Mar", attendance: 89, visitors: 1150, documents: 480 },
    { month: "Apr", attendance: 91, visitors: 1200, documents: 550 },
    { month: "May", attendance: 88, visitors: 1180, documents: 510 },
    { month: "Jun", attendance: 89, visitors: 1234, documents: 567 },
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
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Laporan & Statistik</h1>
                <p className="text-gray-600">Dashboard analitik dan laporan DPAD</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <FileText className="w-4 h-4 mr-2" />
                Buat Laporan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statistics.map((stat, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xs text-green-600 mt-1">+{stat.change}</div>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Trends */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Tren Bulanan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{data.month} 2024</span>
                      <span className="text-gray-600">{data.attendance}% kehadiran</span>
                    </div>
                    <Progress value={data.attendance} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Department Performance */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-blue-600" />
                <span>Kinerja Bidang</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-blue-800">Perpustakaan</div>
                    <div className="text-sm text-blue-600">Target: 95%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-800">92%</div>
                    <Badge className="bg-blue-100 text-blue-800">Baik</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-green-800">Kearsipan</div>
                    <div className="text-sm text-green-600">Target: 90%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-800">94%</div>
                    <Badge className="bg-green-100 text-green-800">Sangat Baik</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-orange-800">Sekretariat</div>
                    <div className="text-sm text-orange-600">Target: 85%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-800">87%</div>
                    <Badge className="bg-orange-100 text-orange-800">Baik</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Reports */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Laporan Tersedia</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reports.map((report, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{report.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>📅 {report.date}</span>
                          <span>📁 {report.size}</span>
                        </div>
                      </div>
                      <Badge
                        className={
                          report.status === "Tersedia" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1" disabled={report.status !== "Tersedia"}>
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
