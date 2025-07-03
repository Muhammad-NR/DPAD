"use client"

import { Calendar, MapPin, Clock, Plus, Filter, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

export default function AgendaPage() {
  const searchParams = useSearchParams()
  const initialTab = searchParams.get("tab") || "hari-ini"
  const [activeTab, setActiveTab] = useState(initialTab)

  const agendaData = {
    "hari-ini": [
      {
        time: "09:00 - 10:00",
        title: "Rapat Koordinasi Bulanan",
        location: "Ruang Rapat Utama",
        type: "meeting",
        priority: "high",
        attendees: 12,
      },
      {
        time: "13:00 - 15:00",
        title: "Kunjungan Dinas Pendidikan",
        location: "Lobby DPAD",
        type: "visit",
        priority: "medium",
        attendees: 8,
      },
      {
        time: "15:30 - 16:30",
        title: "Evaluasi Program Perpustakaan",
        location: "Ruang Meeting",
        type: "evaluation",
        priority: "high",
        attendees: 6,
      },
    ],
    mendatang: [
      {
        time: "08:00 - 09:00",
        title: "Briefing Mingguan",
        location: "Ruang Rapat Utama",
        type: "meeting",
        priority: "medium",
        attendees: 15,
        date: "Besok",
      },
      {
        time: "10:00 - 12:00",
        title: "Workshop Digitalisasi Arsip",
        location: "Aula DPAD",
        type: "workshop",
        priority: "high",
        attendees: 25,
        date: "Jumat, 5 Juli",
      },
      {
        time: "14:00 - 16:00",
        title: "Sosialisasi Sistem Baru",
        location: "Ruang Training",
        type: "training",
        priority: "medium",
        attendees: 20,
        date: "Senin, 8 Juli",
      },
    ],
    sebelumnya: [
      {
        time: "09:00 - 11:00",
        title: "Rapat Evaluasi Triwulan",
        location: "Ruang Rapat Utama",
        type: "meeting",
        priority: "high",
        attendees: 18,
        date: "Kemarin",
      },
      {
        time: "13:30 - 15:00",
        title: "Pelatihan Katalogisasi",
        location: "Lab Komputer",
        type: "training",
        priority: "medium",
        attendees: 12,
        date: "Senin, 1 Juli",
      },
      {
        time: "16:00 - 17:00",
        title: "Monitoring Kinerja",
        location: "Ruang Meeting",
        type: "evaluation",
        priority: "low",
        attendees: 8,
        date: "Jumat, 28 Juni",
      },
    ],
  }

  const tabs = [
    { id: "hari-ini", label: "Hari Ini", count: agendaData["hari-ini"].length },
    { id: "mendatang", label: "Mendatang", count: agendaData["mendatang"].length },
    { id: "sebelumnya", label: "Sebelumnya", count: agendaData["sebelumnya"].length },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return "👥"
      case "visit":
        return "🏢"
      case "evaluation":
        return "📊"
      case "workshop":
        return "🛠️"
      case "training":
        return "📚"
      default:
        return "📅"
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
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Manajemen Agenda</h1>
                <p className="text-gray-600">Kelola dan pantau semua agenda kegiatan DPAD</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Agenda
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Cari agenda..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-gray-800">Agenda Kegiatan</CardTitle>
            </div>
            <div className="flex space-x-2 mt-4">
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
                  <Badge variant="secondary" className="ml-2">
                    {tab.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {agendaData[activeTab as keyof typeof agendaData].map((item, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{getTypeIcon(item.type)}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.title}</h3>
                          {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                        <div className="flex items-center">
                          <span className="mr-1">👥</span>
                          {item.attendees} peserta
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority === "high"
                            ? "Prioritas Tinggi"
                            : item.priority === "medium"
                              ? "Prioritas Sedang"
                              : "Prioritas Rendah"}
                        </Badge>
                        <Badge variant="outline">
                          {item.type === "meeting"
                            ? "Rapat"
                            : item.type === "visit"
                              ? "Kunjungan"
                              : item.type === "evaluation"
                                ? "Evaluasi"
                                : item.type === "workshop"
                                  ? "Workshop"
                                  : item.type === "training"
                                    ? "Pelatihan"
                                    : "Lainnya"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Detail
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
