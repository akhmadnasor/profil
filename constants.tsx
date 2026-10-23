import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  User, 
  Layers,
  Cpu,
  FolderCheck,
  Gamepad2,
  BookOpenCheck,
  FileSpreadsheet,
  ListChecks,
  MonitorCheck,
  Library,
  Globe,
  BookMarked,
  Wrench,
  Users,
  Info,
  Network,
  Share2,
  Zap,
  ClipboardCheck,
  CreditCard,
  Newspaper,
  Image,
  Video,
  Code2,
  Accessibility,
  Microscope
} from 'lucide-react';
import { 
  ExperienceItem, 
  EducationItem, 
  PortfolioItem, 
  SkillCategory, 
  AwardItem, 
  NavItem, 
  CertificateItem,
  EvidenceItem,
  GameSampleItem
} from './types';

export const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/166NyWvEykjr3LXvBoJc3w8ttbuNLs9Hw";
export const BISMA_PLUS_LOGO_URL = "https://lh3.googleusercontent.com/d/1k2MibT1XHlAWHbFOQo80Cj4Lp5ZMeMLT";
export const BISMA_EVIDENCE_FOLDER_URL = "https://drive.google.com/drive/folders/1I0fKqEcMgm-Kv4_eRM2YXEdxiPWbP3zg?usp=sharing";

export const CONTACT_INFO = {
  name: "AKHMAD NASOR, S.Pd., M.Pd.",
  role: "KEPALA SEKOLAH SDN BAUJENG I BEJI",
  agpTitle: "Juara 1 AGP Kategori Kepala Sekolah Jenjang SD Kabupaten Pasuruan",
  specialBadges: [
    "Juara 1 AGP Kepala Sekolah SD Kab. Pasuruan",
    "Juara 1 INOPAMAS 2026",
    "Top 5 BRIDA JATIM 2026",
    "Fasda Digitalisasi BPPMP Jatim"
  ],
  location: "Beji, Pasuruan, Jawa Timur",
  phone: "085749662221",
  whatsappUrl: "https://wa.me/6285749662221",
  email: "akhmadnasor@gmail.com",
  motto: "NGALAH BAROKAH",
  about: "Pendidik yang mengabdi sebagai Kepala Sekolah di SDN BAUJENG I BEJI, Kabupaten Pasuruan, serta peraih Juara 1 Anugerah Guru Prima (AGP) Kategori Kepala Sekolah Jenjang SD Kabupaten Pasuruan melalui karya inovasi BISMA⁺. Senang belajar dan berbagi teknologi tepat guna dengan memegang prinsip hidup: \"NGALAH BAROKAH\"."
};

// Helper to convert Google Drive 'view' links to 'preview' links
const getPreviewLink = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
const getViewLink = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const GAME_SAMPLES_DATA: GameSampleItem[] = [
  {
    id: 1,
    title: "MPI Petualangan Huruf — Belajar Membaca",
    levelBadge: "Jenjang SD · Kelas 1 (Fase A)",
    subject: "Bahasa Indonesia · Literasi Awal",
    description: "Media Pembelajaran Interaktif (MPI) hasil Game Generator BISMA⁺ untuk siswa SD Kelas 1. Dilengkapi Mode Baca bersuara otomatis (Text-to-Speech Bahasa Indonesia), Lab Maya 10 kosakata, Puzzle susun tahap membaca, dan Peta Petualangan 10 titik (mendukung 1 atau 2 pemain).",
    highlights: [
      "Lab Maya & Mode Baca Bersuara Otomatis",
      "Puzzle Drag & Drop Tahap Membaca",
      "Peta Petualangan 10 Titik + Boss (Kunci: @1)",
      "Mendukung Mode Mandiri & Duel 2 Pemain"
    ],
    url: "/assets/aistudio/SD_kelas_1_belajar_membaca_de765c7e.html",
    icon: Gamepad2,
    accentClass: "from-emerald-700 to-emerald-900 border-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#064e3b]"
  },
  {
    id: 2,
    title: "MPI Bangunan Umum — Pendidikan Inklusif",
    levelBadge: "Jenjang SLB / Inklusi (UDL & WCAG 2.1)",
    subject: "Pendidikan Khusus · Mengenal Lingkungan",
    description: "Media Pembelajaran Interaktif inklusif ramah Anak Berkebutuhan Khusus (ABK). Dilengkapi Panel Aksesibilitas lengkap (pengatur tempo panduan, ukuran objek hingga 160%, mode kontras tinggi, tingkat bantuan scaffolding visual, dan narasi suara multisensori).",
    highlights: [
      "Panel Aksesibilitas UDL & Kontras Tinggi",
      "Tur Berpanduan Interaktif 8 Bangunan Umum",
      "Narasi Suara Multisensori (Dual Coding)",
      "Puzzle Fungsi Bangunan & Evaluasi Ramah ABK"
    ],
    url: "/assets/aistudio/SLB_Inklusi_SLB_4f4550cf.html",
    icon: Accessibility,
    accentClass: "from-amber-500 to-amber-700 border-amber-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#78350f]"
  },
  {
    id: 3,
    title: "MPI Petualangan Sains: Metamorfosis",
    levelBadge: "Jenjang SD Atas / SMP (Fase C–D)",
    subject: "IPAS / Sains · Siklus Hidup Makhluk Hidup",
    description: "Media Pembelajaran Interaktif sains berbasis inkuiri dengan Laboratorium Maya simulasi variabel (intensitas stimulus, regulasi lingkungan, dan grafik progres real-time), Puzzle 5 tahap berpikir ilmiah, serta Evaluasi HOTS & Numerasi.",
    highlights: [
      "Lab Maya Simulasi Variabel & Grafik Real-time",
      "Modul Materi Lengkap & Tabel Perbandingan",
      "Puzzle 5 Tahap Metode Berpikir Ilmiah",
      "Evaluasi HOTS & Numerasi (Kunci: IPAS5 / @1)"
    ],
    url: "/assets/aistudio/SMP_metamorfosis2_ad5bbf3f.html",
    icon: Microscope,
    accentClass: "from-teal-700 to-teal-900 border-teal-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_0_0_#134e4a]"
  }
];

export const BISMA_PLUS_SHOWCASE = {
  name: "BISMA⁺",
  fullName: "BISMA⁺ (Be Innovative School Management)",
  tagline: "Ekosistem Pendidikan Holistik Berbasis AI-Powered, Eco-Preneur, dan Character Building — Wujudkan Generasi Emas",
  awardBadge: "Juara 1 AGP Kategori Kepala Sekolah Jenjang SD Kabupaten Pasuruan",
  logoUrl: BISMA_PLUS_LOGO_URL,
  appUrl: "https://bisma.web.id/",
  mainDocUrl: getViewLink("1noLI0GqnGUtqrLXUQlW81dO5uoerViUR"),
  evidenceFolderUrl: BISMA_EVIDENCE_FOLDER_URL,
  summary: "BISMA⁺ merupakan penguatan inovasi pengelolaan SDN Baujeng I Beji yang dikembangkan sejak 2025 untuk menjawab persoalan beban administrasi, keterpisahan data, penguatan budaya positif, dan kebutuhan pendidikan lingkungan yang kontekstual. Keunggulannya bukan pada satu aplikasi, melainkan keterhubungan tiga pilar: AI-Powered untuk mendukung kerja pedagogis guru dan supervisi manajerial, Character Building melalui KASIH IBU untuk membiasakan perilaku positif, dan Eco-Preneur melalui Bank Sampah Digital untuk menumbuhkan kepedulian ekologis sekaligus literasi finansial.",
  pillars: [
    {
      id: "ai-powered",
      title: "1. AI-Powered",
      subtitle: "Pedagogis Guru & Supervisi Manajerial",
      metric: "-72,4% Beban Admin",
      link: "https://bisma.web.id/",
      description: "Mendukung kerja pedagogis guru (RPP/RPM Generator API & Non-API, Game Generator JSON untuk IFP/VLab) serta Supervisi Akademik Kepala Sekolah (Form A–E) dalam satu basis data terpadu."
    },
    {
      id: "character-building",
      title: "2. Character Building",
      subtitle: "Program KASIH IBU (7 KAIH)",
      metric: "84,6% Partisipasi",
      link: getViewLink("1noLI0GqnGUtqrLXUQlW81dO5uoerViUR"),
      description: "Membiasakan perilaku positif murid melalui pencatatan harian, validasi berjenjang oleh guru, poin apresiasi karakter, dan pemantauan kolaboratif bersama orang tua."
    },
    {
      id: "eco-preneur",
      title: "3. Eco-Preneur",
      subtitle: "Bank Sampah Digital Sekolah",
      metric: "81,3% · >200 Transaksi/Bln",
      link: getViewLink("146ErW671AY9AsqETxFCwXhStR9PkM8Lt"),
      description: "Menumbuhkan kepedulian ekologis sekaligus literasi finansial melalui alur timbang–validasi–tabungan sampah digital murid berbasis ekonomi sirkular."
    }
  ],
  impactMetrics: [
    { value: "72,4%", label: "Efisiensi Administrasi", detail: "Penurunan beban kerja rutin guru", link: getViewLink("1noLI0GqnGUtqrLXUQlW81dO5uoerViUR") },
    { value: "84,6%", label: "Partisipasi KASIH IBU", detail: "Pembiasaan karakter positif", link: getViewLink("146ErW671AY9AsqETxFCwXhStR9PkM8Lt") },
    { value: "81,3%", label: "Partisipasi Bank Sampah", detail: ">200 transaksi daur ulang/bln", link: getViewLink("15eZWQuEZHlNafhSB9SRTr8OTYoLEbZTR") },
    { value: "83,97", label: "Skor Kemudahan (SUS)", detail: "90 responden · 4 sekolah replikasi", link: getViewLink("1yTkAGIBDT2ZTndRmsWVKrTz5grVkj6HK") }
  ],
  replicationSchools: [
    "SDN Kenep (Kec. Beji)",
    "SDN Ngembe I (Kec. Beji)",
    "SMP Bhinneka Tunggal Ika",
    "SMK Darut Taqwa"
  ]
};

export const BISMA_EVIDENCE_DATA: EvidenceItem[] = [
  {
    id: 1,
    code: "Dok 00",
    title: "Naskah Karya Inovasi BISMA⁺ (AGP KS SD)",
    category: "Naskah & Panduan",
    description: "Naskah lengkap BISMA⁺: latar belakang, arsitektur 3 pilar, algoritma 5 role, evaluasi SUS, dan hasil dampak.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1noLI0GqnGUtqrLXUQlW81dO5uoerViUR"),
    directUrl: getViewLink("1noLI0GqnGUtqrLXUQlW81dO5uoerViUR"),
    indicator: "Naskah Utama AGP",
    icon: BookMarked
  },
  {
    id: 2,
    code: "Dok 01",
    title: "Manual Book BISMA⁺ — PGRI Power",
    category: "Naskah & Panduan",
    description: "Panduan penggunaan lengkap ekosistem BISMA⁺ untuk 5 role: Admin, Kepala Sekolah, Guru, Siswa, dan Publik.",
    fileType: "PDF",
    previewUrl: getPreviewLink("15eZWQuEZHlNafhSB9SRTr8OTYoLEbZTR"),
    directUrl: getViewLink("15eZWQuEZHlNafhSB9SRTr8OTYoLEbZTR"),
    indicator: "Panduan 5 Role",
    icon: BookOpenCheck
  },
  {
    id: 3,
    code: "Dok 02",
    title: "Bukti Alat Kerja Sistem BISMA⁺",
    category: "Tata Kelola & Layanan",
    description: "Dokumentasi instrumen operasional harian KBM, pemindaian QR kartu siswa, dan supervisi akademik.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1ARZ_4HWhz8_G7Ma357Cf1RhR9J0bCLmo"),
    directUrl: getViewLink("1ARZ_4HWhz8_G7Ma357Cf1RhR9J0bCLmo"),
    indicator: "Alat Kerja Digital",
    icon: Wrench
  },
  {
    id: 4,
    code: "Dok 03",
    title: "Ketersediaan Aktor & SK Tim Pengelola",
    category: "Tata Kelola & Layanan",
    description: "SK Ketua K3S Kec. Beji Nomor 190/KKKS-SD/V/2025 beserta struktur tim pengelola inovasi sekolah.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1mtOa7mDf9MbNtbOI6w4qPglYiNs3gqgg"),
    directUrl: getViewLink("1mtOa7mDf9MbNtbOI6w4qPglYiNs3gqgg"),
    indicator: "SK & Organisasi",
    icon: Users
  },
  {
    id: 5,
    code: "Dok 04",
    title: "Kemudahan Informasi Layanan",
    category: "Tata Kelola & Layanan",
    description: "Layanan monitoring publik real-time dan helpdesk tanpa mengekspos data pribadi peserta didik.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1cI5cg0LOTdbE_7b5SLlsLwecyDjYfoB_"),
    directUrl: getViewLink("1cI5cg0LOTdbE_7b5SLlsLwecyDjYfoB_"),
    indicator: "Akses Informasi",
    icon: Info
  },
  {
    id: 6,
    code: "Dok 05",
    title: "Layanan Terintegrasi Supabase & RLS",
    category: "Tata Kelola & Layanan",
    description: "Integrasi basis data tunggal untuk jurnal guru, supervisi KS, karakter KASIH IBU, dan Bank Sampah.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1SIcbjJMF3sij8gApJ5PjDmf0zURxSa6l"),
    directUrl: getViewLink("1SIcbjJMF3sij8gApJ5PjDmf0zURxSa6l"),
    indicator: "Integrasi Sistem",
    icon: Network
  },
  {
    id: 7,
    code: "Dok 06",
    title: "Bukti Replikasi 4 Sekolah Kab. Pasuruan",
    category: "Dampak & Replikasi",
    description: "Surat pernyataan adopsi replikasi pada SDN Kenep, SDN Ngembe I, SMP Bhinneka Tunggal Ika, & SMK Darut Taqwa.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1yTkAGIBDT2ZTndRmsWVKrTz5grVkj6HK"),
    directUrl: getViewLink("1yTkAGIBDT2ZTndRmsWVKrTz5grVkj6HK"),
    indicator: "Replikasi Lintas Jenjang",
    icon: Share2
  },
  {
    id: 8,
    code: "Dok 07",
    title: "Kecepatan Penciptaan Inovasi BISMA",
    category: "Dampak & Replikasi",
    description: "Linimasa pengembangan sistem dari analisis kebutuhan (Maret 2025) hingga penguatan BISMA⁺ (2026).",
    fileType: "PDF",
    previewUrl: getPreviewLink("1zZQ5u9ENQH0VlaAm1C-08dtSNNp1VOqi"),
    directUrl: getViewLink("1zZQ5u9ENQH0VlaAm1C-08dtSNNp1VOqi"),
    indicator: "Linimasa Rekayasa",
    icon: Zap
  },
  {
    id: 9,
    code: "Dok 08",
    title: "SOP Resmi Layanan BISMA⁺",
    category: "Tata Kelola & Layanan",
    description: "Standar Operasional Prosedur baku pelaksanaan jurnal, validasi KASIH IBU, dan Bank Sampah Digital.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1jAhwEYYUj0WIfpiogCy73UTpyEji1iv-"),
    directUrl: getViewLink("1jAhwEYYUj0WIfpiogCy73UTpyEji1iv-"),
    indicator: "SOP Terstandar",
    icon: ClipboardCheck
  },
  {
    id: 10,
    code: "Dok 09",
    title: "KTA Digital PGRI Cabang Beji",
    category: "Naskah & Panduan",
    description: "Kartu Tanda Anggota resmi PGRI (NPA. 35140908491) Akhmad Nasor, S.Pd., M.Pd.",
    fileType: "PDF",
    previewUrl: getPreviewLink("1_EhR4RRuGqi0fcOcJD65GoE0Scv3R-jY"),
    directUrl: getViewLink("1_EhR4RRuGqi0fcOcJD65GoE0Scv3R-jY"),
    indicator: "Identitas PGRI",
    icon: CreditCard
  },
  {
    id: 11,
    code: "Dok 10",
    title: "Jurnal Ilmiah SDN Baujeng I Beji",
    category: "Dampak & Replikasi",
    description: "Publikasi ilmiah implementasi inovasi pembelajaran dan budaya sekolah di SDN Baujeng I Beji.",
    fileType: "PDF",
    previewUrl: getPreviewLink("11YsyPT3x6sZsrgemm0vSoR7Xo__ypvzW"),
    directUrl: getViewLink("11YsyPT3x6sZsrgemm0vSoR7Xo__ypvzW"),
    indicator: "Jurnal Akademik",
    icon: Newspaper
  },
  {
    id: 12,
    code: "Dok 11",
    title: "Buletin Visual & Dokumentasi BISMA⁺",
    category: "Media & Publikasi",
    description: "Infografis kegiatan penukaran koin KASIH IBU, penimbangan sampah, dan dampak program sekolah.",
    fileType: "IMAGE",
    previewUrl: getPreviewLink("146ErW671AY9AsqETxFCwXhStR9PkM8Lt"),
    directUrl: getViewLink("146ErW671AY9AsqETxFCwXhStR9PkM8Lt"),
    indicator: "Buletin Sekolah",
    icon: Image
  },
  {
    id: 13,
    code: "Video",
    title: "Video Implementasi BISMA⁺ — PGRI Power",
    category: "Media & Publikasi",
    description: "Dokumentasi video praktik nyata ketiga pilar BISMA⁺ di lingkungan SDN Baujeng I Beji.",
    fileType: "VIDEO",
    previewUrl: getPreviewLink("1Lyw8nv9HC-uxnA9DaXCoZ5sZRJwpvlja"),
    directUrl: getViewLink("1Lyw8nv9HC-uxnA9DaXCoZ5sZRJwpvlja"),
    indicator: "Video Praktik Baik",
    icon: Video
  },
  {
    id: 14,
    code: "Game SD",
    title: "MPI Petualangan Huruf — SD Kelas 1",
    category: "Media & Publikasi",
    description: "Luaran Game Generator JSON untuk SD Kelas 1: Lab Maya Kosakata Bersuara, Puzzle, dan Peta Petualangan.",
    fileType: "HTML",
    previewUrl: "/assets/aistudio/SD_kelas_1_belajar_membaca_de765c7e.html",
    directUrl: "/assets/aistudio/SD_kelas_1_belajar_membaca_de765c7e.html",
    indicator: "Game Interaktif SD",
    icon: Gamepad2
  },
  {
    id: 15,
    code: "Game SLB",
    title: "MPI Bangunan Umum — Inklusi SLB (UDL)",
    category: "Media & Publikasi",
    description: "Luaran Game Generator JSON ramah ABK: Panel Aksesibilitas Penuh, Kontras Tinggi, & Tur 8 Bangunan.",
    fileType: "HTML",
    previewUrl: "/assets/aistudio/SLB_Inklusi_SLB_4f4550cf.html",
    directUrl: "/assets/aistudio/SLB_Inklusi_SLB_4f4550cf.html",
    indicator: "Game Inklusif SLB",
    icon: Accessibility
  },
  {
    id: 16,
    code: "Game Sains",
    title: "MPI Petualangan Sains: Metamorfosis",
    category: "Media & Publikasi",
    description: "Luaran Game Generator JSON IPAS/SMP: Simulasi Variabel & Grafik Real-time, Puzzle Ilmiah, & Evaluasi HOTS.",
    fileType: "HTML",
    previewUrl: "/assets/aistudio/SMP_metamorfosis2_ad5bbf3f.html",
    directUrl: "/assets/aistudio/SMP_metamorfosis2_ad5bbf3f.html",
    indicator: "Game Sains & Lab Maya",
    icon: Code2
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'Halaman 1: Profil & Inovasi 3D', page: 1, icon: User },
  { id: 'evidence', label: 'Halaman 2: Bukti Dukung & Rekam Jejak', page: 2, icon: FolderCheck },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: "Kepala Sekolah (Juara 1 AGP KS SD Kab. Pasuruan)",
    institution: "SDN BAUJENG I BEJI",
    period: "2025 – Sekarang",
    tag: "Manajemen Sekolah",
    description: [
      "Merancang dan mengimplementasikan ekosistem BISMA⁺ (AI-Powered, Character Building KASIH IBU, & Eco-Preneur Bank Sampah Digital).",
      "Meraih Juara 1 AGP Kategori Kepala Sekolah SD Kab. Pasuruan & Juara 1 INOPAMAS 2026 dengan penurunan beban administrasi guru sebesar 72,4%."
    ]
  },
  {
    id: 2,
    role: "Fasilitator Daerah (Fasda) Bidang Digitalisasi",
    institution: "BPPMP Provinsi Jawa Timur",
    period: "2026 – Sekarang",
    tag: "Kepemimpinan Daerah",
    description: [
      "Mendampingi transformasi digital pembelajaran dan integrasi AI terapan bagi satuan pendidikan di Jawa Timur."
    ]
  },
  {
    id: 3,
    role: "Kepala Pengembang Sistem Inovasi Pendidikan",
    institution: "Kecamatan Beji, Kab. Pasuruan",
    period: "2025 – Sekarang",
    tag: "Pengembang Solusi",
    description: [
      "Mengembangkan sistem supervisi akademik terpadu dan replikasi ekosistem digital lintas satuan pendidikan."
    ]
  },
  {
    id: 4,
    role: "Guru IPA & Pengajar Praktik Guru Penggerak",
    institution: "SMPN 2 Sukorejo · Kemdikbudristek",
    period: "2019 – 2024",
    tag: "Pedagogi & Riset",
    description: [
      "Mengembangkan aplikasi literasi sains 'Gesit App' serta bertugas sebagai Guru Penggerak Angkatan IV dan Pengajar Praktik Angkatan X."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    degree: "Magister Pendidikan (M.Pd.) – Pendidikan Sains",
    institution: "Universitas Negeri Surabaya (UNESA)",
    period: "2022 – 2024",
    details: [
      "Penerima Beasiswa Pendidikan Indonesia (BPI) Kemdikbudristek RI.",
      "Tesis & Riset: Pengembangan Aplikasi Literasi Sains Terintegrasi (Gesit App)."
    ]
  },
  {
    id: 2,
    degree: "Sarjana Pendidikan (S.Pd.) – Pendidikan Biologi",
    institution: "Universitas Negeri Malang (UM)",
    period: "Lulus",
    details: [
      "Fokus pada metodologi pembelajaran sains dan media instruksional interaktif."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Arsitektur Ekosistem Digital & AI",
    icon: Cpu,
    description: "Pengembangan ekosistem BISMA⁺ & generator pembelajaran",
    skills: [
      "BISMA⁺ Multi-Role Supabase & RLS",
      "RPP/RPM Generator (API & Non-API)",
      "Game Generator JSON (IFP & VLab)",
      "Gemini AI & Google AI Studio",
      "Google Apps Script Automation"
    ]
  },
  {
    title: "Kepemimpinan & Tata Kelola Sekolah",
    icon: Layers,
    description: "Supervisi akademik, karakter & eco-preneurship",
    skills: [
      "Supervisi Akademik Digital (Form A–E)",
      "Program Karakter KASIH IBU (7 KAIH)",
      "Bank Sampah Digital & Eco-Preneur",
      "Fasilitasi Digitalisasi BPPMP Jatim",
      "Replikasi Inovasi Lintas Sekolah"
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: "BISMA⁺ Super App",
    description: "Ekosistem manajemen SDN Baujeng I Beji: integrasi AI-Powered (Supervisi & RPP), Character Building (KASIH IBU), dan Eco-Preneur (Bank Sampah Digital).",
    link: "https://bisma.web.id/",
    category: "Manajemen Sekolah",
    badge: "Juara 1 AGP KS SD",
    logoUrl: BISMA_PLUS_LOGO_URL,
    icon: Layers,
    features: ["-72,4% Beban Administrasi", "KASIH IBU (84,6% Partisipasi)", "Bank Sampah (>200 Transaksi/Bln)", "5 Role Akses Supabase"],
    techStack: ["React JS", "Supabase", "AI Integrated"],
    isHighlighted: true
  },
  {
    id: 2,
    title: "Game Generator AI",
    description: "Pembuat game edukasi interaktif untuk layar IFP & VLab berbasis AI dan skema JSON terstruktur lintas jenjang.",
    link: "https://gamegenerator.ai.studio/",
    category: "AI Tool",
    badge: "Pilar AI BISMA⁺",
    icon: Gamepad2,
    features: ["Mode API & Non-API JSON", "Kompatibel Layar IFP & VLab", "Ekspor Mandiri HTML5", "SD, SMP & Inklusi SLB"],
    techStack: ["Gemini AI", "JSON Renderer"],
    isHighlighted: true
  },
  {
    id: 3,
    title: "RPP / RPM Generator",
    description: "Generator Rencana Pembelajaran Mendalam (RPM/RPP) mode API dan Non-API yang selaras Kurikulum Merdeka.",
    link: "https://sites.google.com/view/akhmadnasor/rpp-generator",
    category: "AI Tool",
    badge: "Pilar AI BISMA⁺",
    icon: BookOpenCheck,
    features: ["Mode Ganda API & Non-API", "Otoritas Verifikasi Guru", "Diferensiasi & Rubrik", "Cetak Dokumen A4"],
    techStack: ["Gen AI", "Prompt Engine"],
    isHighlighted: true
  },
  {
    id: 4,
    title: "LKPD Generator",
    description: "Asisten perancang Lembar Kerja Peserta Didik (LKPD) kontekstual berbasis studi kasus siap cetak.",
    link: "https://sites.google.com/view/akhmadnasor/cheat-ai",
    category: "AI Tool",
    badge: "Pedagogi Cerdas",
    icon: FileSpreadsheet,
    features: ["Penyesuaian Level Kognitif", "Instruksi Kerja Bertahap", "Pertanyaan Pemantik", "Siap Cetak A4"],
    techStack: ["AI Assistant", "Web App"],
    isHighlighted: true
  },
  {
    id: 5,
    title: "Soal Generator",
    description: "Generator bank soal HOTS dan AKM otomatis lengkap dengan kisi-kisi, kunci jawaban, dan pembahasan.",
    link: "https://sites.google.com/view/akhmadnasor/soal-generator",
    category: "AI Tool",
    badge: "Asesmen Adaptif",
    icon: ListChecks,
    features: ["Pilihan Ganda & Uraian", "Kisi-Kisi & Pembahasan", "Taksonomi Bloom", "Format CBT"],
    techStack: ["Prompt Matrix", "Web App"],
    isHighlighted: true
  },
  {
    id: 6,
    title: "Digital Asesmen (CBT)",
    description: "Platform ujian berbasis komputer (CBT) dengan proteksi anti-curang, pengacakan soal, dan rekap nilai instan.",
    link: "https://digitalasesemensystem.netlify.app/",
    category: "Asesmen & CBT",
    badge: "Ujian Digital",
    icon: MonitorCheck,
    features: ["Lockdown Mode", "Timer & Autosave", "Analisis Butir Soal", "Export Excel"],
    techStack: ["React", "Cloud DB"],
    isHighlighted: false
  },
  {
    id: 7,
    title: "Perpustakaan Digital",
    description: "Katalog buku daring, sirkulasi peminjaman digital, dan pemantauan literasi murid SDN Baujeng I Beji.",
    link: "https://perpusbaujeng1.netlify.app/",
    category: "Manajemen Sekolah",
    badge: "Literasi Sekolah",
    icon: Library,
    features: ["Katalog Daring", "Barcode Buku", "Statistik Kunjungan", "Repositori E-Book"],
    techStack: ["Web App", "Responsive"],
    isHighlighted: false
  },
  {
    id: 8,
    title: "Web SDN BAUJENG I BEJI",
    description: "Portal informasi resmi sekolah, publikasi kegiatan, prestasi siswa, PPDB daring, dan transparansi publik.",
    link: "https://www.sdnbaujeng1.sch.id/",
    category: "Web Edukasi",
    badge: "Portal Resmi .sch.id",
    icon: Globe,
    features: ["Profil & Berita Sekolah", "PPDB Online", "Galeri Prestasi", "Integrasi Layanan"],
    techStack: ["Domain .sch.id", "SEO Ready"],
    isHighlighted: false
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  { id: 1, title: "Sertifikat Guru Penggerak / Pendidik", issuer: "Kemdikbudristek", link: getPreviewLink("1exvRWt0ve9YjUH00gKkwlS1w0iKrDBNR") },
  { id: 2, title: "Sertifikat Pelatihan Inovasi", issuer: "Lembaga Pelatihan", link: getPreviewLink("1Mb2rlg6Hqf6or9_j4WgVzNq4ATzvg7ER") },
  { id: 3, title: "Sertifikat Kompetensi Teknis", issuer: "Penyelenggara Teknis", link: getPreviewLink("1AHym_vd4kHiewfg4hilYZIh4nd0wfDjZ") },
  { id: 4, title: "Sertifikat Pengembangan Diri", issuer: "Institusi Pendidikan", link: getPreviewLink("1pWaclk7MSTJ17CACtr3m-D7pK5OihMmH") },
  { id: 5, title: "Piagam Penghargaan Pendidikan", issuer: "Dinas Pendidikan", link: getPreviewLink("1rRicJXgAP_bwWaVcoaOxUy6AKENV6oPa") },
  { id: 6, title: "Sertifikat Workshop Digital", issuer: "Platform Merdeka Mengajar", link: getPreviewLink("1LR2UpootbMnL1O_vaNpWm0FbSnZnfDqZ") },
  { id: 7, title: "Sertifikat Seminar Nasional", issuer: "Universitas Penyelenggara", link: getPreviewLink("1BR2MbTK-UVGVsHH5cJxBK5aGvv4w-YWS") },
  { id: 8, title: "Sertifikat Pelatihan Manajemen", issuer: "Badan Diklat", link: getPreviewLink("1_rf2VV6a08cRYTijBi9EtyfX5-vdugVk") },
  { id: 9, title: "Sertifikat Kursus Mahir Dasar", issuer: "Pramuka / Organisasi", link: getPreviewLink("19nRNWd9gXvTndmGug6u1baO2ZbRCk0c9") },
  { id: 10, title: "Sertifikat Literasi Digital", issuer: "Kominfo / Siberkreasi", link: getPreviewLink("1N3hDmqJw8qaCsZB4ufhlVlcOjp_0gvKv") },
  { id: 11, title: "Sertifikat Pengembangan Kurikulum", issuer: "Pusat Kurikulum", link: getPreviewLink("1l_8cO8lITiOCF6bMjpJgDoG7CIHj96ro") },
  { id: 12, title: "Sertifikat Asesmen Kompetensi", issuer: "Kemdikbud", link: getPreviewLink("1IqZvvX170GRDpthoxTZL1RWW8DuoyU8g") },
];

export const GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1nQOwjRwjHBCz0S8qSmugeHE444KXKCg5";

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 1,
    title: "Juara 1 AGP Kategori Kepala Sekolah Jenjang SD Kabupaten Pasuruan",
    issuer: "PGRI Kabupaten Pasuruan (Anugerah Guru Prima 2026)",
    year: "2026",
    isSpecial: true,
    highlightText: "Juara 1 Kepala Sekolah SD · Inovasi BISMA⁺",
    description: "Peringkat 1 Anugerah Guru Prima (AGP) Kategori Kepala Sekolah SD Kabupaten Pasuruan melalui karya inovasi \"BISMA⁺: Ekosistem Pendidikan Holistik Berbasis AI-Powered, Eco-Preneur, dan Character Building\".",
    link: BISMA_EVIDENCE_FOLDER_URL
  },
  {
    id: 2,
    title: "Juara 1 INOPAMAS 2026",
    issuer: "Pemerintah Kabupaten Pasuruan",
    year: "2026",
    isSpecial: true,
    highlightText: "Peringkat 1 Tingkat Kabupaten",
    description: "Anugerah INOPAMAS 2026 (Inovasi Kabupaten Pasuruan Maju Sejahtera dan Berkeadilan) bidang transformasi digital pendidikan.",
    link: "https://bisma.web.id/"
  },
  {
    id: 3,
    title: "Top 5 Inovasi BRIDA Jawa Timur 2026",
    issuer: "BRIDA Provinsi Jawa Timur",
    year: "2026",
    isSpecial: true,
    highlightText: "Top 5 Tingkat Provinsi",
    description: "5 besar karya inovasi terbaik tingkat Provinsi Jawa Timur atas dampak nyata dan replikabilitas inovasi pendidikan.",
    link: "https://bisma.web.id/"
  },
  {
    id: 4,
    title: "Fasilitator Daerah (Fasda) Bidang Digitalisasi",
    issuer: "BPPMP Provinsi Jawa Timur",
    year: "2026",
    isSpecial: true,
    highlightText: "Amanah Strategis Jawa Timur",
    description: "Mendampingi satuan pendidikan di Jawa Timur dalam penguatan ekosistem pembelajaran digital.",
    link: GOOGLE_DRIVE_FOLDER
  },
  {
    id: 5,
    title: "Guru Pejuang Digital (GPD) & Pengajar Praktik PGP Angkatan X",
    issuer: "Kemdikbudristek RI",
    year: "2023 – Sekarang",
    description: "Penugasan nasional pemberdayaan teknologi digital pembelajaran dan pendampingan Guru Penggerak.",
    link: GOOGLE_DRIVE_FOLDER
  },
  {
    id: 6,
    title: "Top Ten Inovasi Pasuruan Maslahat (GESIT & SAKERA)",
    issuer: "Pemerintah Kab. Pasuruan",
    year: "2023",
    description: "Penghargaan inovasi aplikasi literasi sains terpadu (GESIT) dan sistem administrasi kinerja (SAKERA).",
    link: GOOGLE_DRIVE_FOLDER
  }
];

export const ORGANIZATION_DATA = [
  "Sekretaris PGRI Cabang Kecamatan Beji (2025 – Sekarang)",
  "Fasilitator Komunitas Belajar Kepala Sekolah & Pendidik Kab. Pasuruan",
  "Pengurus GP Ansor Desa Baujeng Kecamatan Beji"
];
