import { Phone, Mail, MapPin, Clock, Globe, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function KontakPage() {
  const contacts = [
    {
      name: "Dr. Siti Aminah, M.Si",
      position: "Kepala Dinas",
      phone: "+62 274 123456",
      email: "kepala@dpad.jogjaprov.go.id",
      ext: "101",
    },
    {
      name: "Drs. Bambang Wijaya",
      position: "Sekretaris Dinas",
      phone: "+62 274 123457",
      email: "sekretaris@dpad.jogjaprov.go.id",
      ext: "102",
    },
    {
      name: "Ir. Andi Prasetyo, M.T",
      position: "Kepala Bidang Perpustakaan",
      phone: "+62 274 123458",
      email: "perpustakaan@dpad.jogjaprov.go.id",
      ext: "201",
    },
    {
      name: "Dra. Sri Mulyani",
      position: "Kepala Bidang Kearsipan",
      phone: "+62 274 123459",
      email: "kearsipan@dpad.jogjaprov.go.id",
      ext: "301",
    },
  ]

  const departments = [
    {
      name: "Bidang Perpustakaan",
      description: "Mengelola layanan perpustakaan dan literasi masyarakat",
      phone: "+62 274 123458",
      email: "perpustakaan@dpad.jogjaprov.go.id",
    },
    {
      name: "Bidang Kearsipan",
      description: "Mengelola arsip daerah dan dokumentasi pemerintahan",
      phone: "+62 274 123459",
      email: "kearsipan@dpad.jogjaprov.go.id",
    },
    {
      name: "Sekretariat",
      description: "Mengelola administrasi dan keuangan dinas",
      phone: "+62 274 123457",
      email: "sekretariat@dpad.jogjaprov.go.id",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
      <Header />

      <div className="container mx-auto p-6 space-y-6">
        {/* Page Header */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Kontak & Informasi</h1>
            <p className="text-gray-600">Hubungi kami untuk informasi lebih lanjut tentang layanan DPAD DIY</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Contact Info */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Informasi Kontak Utama</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Alamat</h3>
                  <p className="text-gray-600">
                    Jl. Cendana No. 11, Kotabaru
                    <br />
                    Yogyakarta 55224
                    <br />
                    Daerah Istimewa Yogyakarta
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Telepon</h3>
                  <p className="text-gray-600">+62 274 123456</p>
                  <p className="text-gray-600">Fax: +62 274 123457</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@dpad.jogjaprov.go.id</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Website</h3>
                  <p className="text-gray-600">www.dpad.jogjaprov.go.id</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                  <p className="text-gray-600">
                    Senin - Jumat: 08:00 - 16:00 WIB
                    <br />
                    Sabtu: 08:00 - 12:00 WIB
                    <br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span>Kontak Darurat</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Hotline 24 Jam</h3>
                <p className="text-red-700 text-lg font-bold">+62 274 911</p>
                <p className="text-red-600 text-sm">Untuk keperluan mendesak terkait arsip dan dokumen penting</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">IT Support</h3>
                <p className="text-blue-700 font-bold">+62 274 123460</p>
                <p className="text-blue-600 text-sm">Bantuan teknis sistem dan aplikasi</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Layanan Masyarakat</h3>
                <p className="text-green-700 font-bold">+62 274 123461</p>
                <p className="text-green-600 text-sm">Informasi layanan perpustakaan dan arsip</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Contacts */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Kontak Bidang</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {departments.map((dept, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{dept.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{dept.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Staff Contacts */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Kontak Pimpinan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                  <p className="text-blue-600 text-sm mb-3">{contact.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">
                        {contact.phone} (ext. {contact.ext})
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{contact.email}</span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 w-full">
                    Hubungi
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
