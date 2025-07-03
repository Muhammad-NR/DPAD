import { Users, Search, Filter, Plus, Edit, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/header"

export default function ProfilKaryawanPage() {
  const employees = [
    {
      id: 1,
      name: "Dr. Siti Aminah, M.Si",
      position: "Kepala Dinas",
      department: "Pimpinan",
      nip: "196501011990032001",
      phone: "+62 274 123456",
      email: "kepala@dpad.jogjaprov.go.id",
      status: "Aktif",
      joinDate: "1990-03-01",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Drs. Bambang Wijaya",
      position: "Sekretaris Dinas",
      department: "Sekretariat",
      nip: "196803151992031002",
      phone: "+62 274 123457",
      email: "sekretaris@dpad.jogjaprov.go.id",
      status: "Aktif",
      joinDate: "1992-03-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Ir. Andi Prasetyo, M.T",
      position: "Kepala Bidang Perpustakaan",
      department: "Perpustakaan",
      nip: "197205101995031001",
      phone: "+62 274 123458",
      email: "perpustakaan@dpad.jogjaprov.go.id",
      status: "Aktif",
      joinDate: "1995-03-10",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Dra. Sri Mulyani",
      position: "Kepala Bidang Kearsipan",
      department: "Kearsipan",
      nip: "196912201994032002",
      phone: "+62 274 123459",
      email: "kearsipan@dpad.jogjaprov.go.id",
      status: "Aktif",
      joinDate: "1994-03-20",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Ahmad Rizki",
      position: "Staff IT",
      department: "Sekretariat",
      nip: "199801152020121001",
      phone: "+62 274 123460",
      email: "ahmad.rizki@dpad.jogjaprov.go.id",
      status: "Magang",
      joinDate: "2020-12-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Siti Nurhaliza",
      position: "Pustakawan",
      department: "Perpustakaan",
      nip: "198506102010032001",
      phone: "+62 274 123461",
      email: "siti.nurhaliza@dpad.jogjaprov.go.id",
      status: "Aktif",
      joinDate: "2010-03-10",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Budi Santoso",
      position: "Staff Arsip",
      department: "Kearsipan",
      nip: "199203052019031001",
      phone: "+62 274 123462",
      email: "budi.santoso@dpad.jogjaprov.go.id",
      status: "Magang",
      joinDate: "2019-03-05",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Maya Sari",
      position: "Admin",
      department: "Sekretariat",
      nip: "198909152015032001",
      phone: "+62 274 123463",
      email: "maya.sari@dpad.jogjaprov.go.id",
      status: "Cuti",
      joinDate: "2015-03-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const departments = [
    { name: "Pimpinan", count: 1, color: "bg-purple-100 text-purple-800" },
    { name: "Sekretariat", count: 3, color: "bg-blue-100 text-blue-800" },
    { name: "Perpustakaan", count: 2, color: "bg-green-100 text-green-800" },
    { name: "Kearsipan", count: 2, color: "bg-orange-100 text-orange-800" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800"
      case "Magang":
        return "bg-blue-100 text-blue-800"
      case "Cuti":
        return "bg-yellow-100 text-yellow-800"
      case "Non-Aktif":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
      <Header />

      <div className="container mx-auto p-6 space-y-6">
        {/* Page Header */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Profil Karyawan</h1>
                <p className="text-gray-600">Kelola data dan informasi karyawan DPAD</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Karyawan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Department Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((dept, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className={dept.color}>{dept.name}</Badge>
                    <div className="text-2xl font-bold text-gray-800 mt-2">{dept.count}</div>
                    <div className="text-sm text-gray-600">Karyawan</div>
                  </div>
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Cari karyawan..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Employee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <Card key={employee.id} className="bg-white/95 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                      <AvatarFallback>
                        {employee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-800">{employee.name}</h3>
                      <p className="text-sm text-blue-600">{employee.position}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium w-20">NIP:</span>
                    <span>{employee.nip}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium w-20">Bidang:</span>
                    <span>{employee.department}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
