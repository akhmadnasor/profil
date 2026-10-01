import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award, 
  User, 
  Layout, 
  Layers,
  Database,
  Cpu,
  FileText
} from 'lucide-react';
import { 
  ExperienceItem, 
  EducationItem, 
  PortfolioItem, 
  SkillCategory, 
  AwardItem, 
  NavItem, 
  CertificateItem 
} from './types';

export const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1RTNNgb3DpDV-vws_ZHeDNsTAsWqUyvUe";

export const CONTACT_INFO = {
  name: "AKHMAD NASOR, S.Pd., M.Pd.",
  role: "Kepala Sekolah & Inovator Teknologi Pendidikan",
  specialBadges: [
    "Juara 1 INOPAMAS 2026",
    "Top 5 BRIDA JATIM 2026",
    "Fasilitator Daerah Digitalisasi BPPMP Jatim 2026"
  ],
  location: "Beji, Pasuruan, Jawa Timur, Indonesia",
  phone: "085749662221",
  whatsappUrl: "https://wa.me/6285749662221",
  email: "akhmadnasor@gmail.com",
  motto: "NGALAH BAROKAH",
  about: "Pendidik yang saat ini bertugas sebagai Kepala Sekolah di SDN BAUJENG I BEJI, Pasuruan. Senang belajar dan berbagi pemanfaatan teknologi sederhana untuk membantu rekan guru mengajar serta memotivasi anak-anak belajar—mulai dari sistem sekolah Bisma hingga alat bantu perangkat ajar. Dalam berkarya dan melayani, selalu memegang prinsip hidup: \"NGALAH BAROKAH\"."
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'Profil', icon: User },
  { id: 'portfolio', label: 'Inovasi & Produk', icon: Layout },
  { id: 'awards', label: 'Penghargaan', icon: Award },
  { id: 'experience', label: 'Pengalaman', icon: Briefcase },
  { id: 'education', label: 'Pendidikan', icon: GraduationCap },
  { id: 'skills', label: 'Keahlian', icon: Code },
  { id: 'certificates', label: 'Sertifikat', icon: FileText },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: "Fasilitator Daerah (Fasda) Bidang Digitalisasi",
    institution: "BPPMP Provinsi Jawa Timur",
    period: "2026 – Sekarang",
    tag: "Kepemimpinan Daerah",
    description: [
      "Mengawal dan mendampingi percepatan transformasi digital pembelajaran serta pemanfaatan platform teknologi pendidikan di satuan pendidikan Jawa Timur.",
      "Memfasilitasi pelatihan pendidik dalam integrasi kecerdasan buatan (Gen AI), perangkat asesmen digital, dan sistem data pembelajaran bermutu."
    ]
  },
  {
    id: 2,
    role: "Kepala Sekolah",
    institution: "SDN BAUJENG I BEJI",
    period: "2025 – Sekarang",
    tag: "Manajemen Sekolah",
    description: [
      "Memimpin kepemimpinan instruksional, tata kelola manajerial, dan kemitraan strategis dengan komitmen digitalisasi menyeluruh.",
      "Menginisiasi dan mengimplementasikan Bisma App sebagai platform sentral presensi siswa, jurnal guru, dan monitoring kinerja real-time.",
      "Membawa SDN BAUJENG I BEJI menjadi pionir sekolah berbasis inovasi digital di Kabupaten Pasuruan."
    ]
  },
  {
    id: 3,
    role: "Kepala Pengembang Sistem Inovasi Pendidikan",
    institution: "Kecamatan Beji, Kab. Pasuruan",
    period: "2025 – Sekarang",
    tag: "Pengembang Solusi",
    description: [
      "Mengarsiteki solusi teknologi pendidikan antar-sekolah guna standarisasi administrasi digital, bank soal terpusat, dan sharing karya guru."
    ]
  },
  {
    id: 4,
    role: "Guru Mata Pelajaran IPA & Pegiat Inovasi",
    institution: "SMPN 2 Sukorejo",
    period: "2019 – 2024",
    tag: "Pedagogi & Riset",
    description: [
      "Mendesain pembelajaran sains aktif interaktif dan menelurkan riset aplikasi literasi sains 'Gesit App' yang memenangkan penghargaan daerah.",
      "Terpilih sebagai Guru Penggerak Angkatan IV dan Pengajar Praktik Angkatan X Kemdikbudristek."
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
      "Fokus Tesis & Riset: Pengembangan Media & Aplikasi Literasi Sains Terintegrasi Berbasis Mobile (Gesit App).",
      "Publikasi ilmiah terindeks di bidang inovasi pedagogi sains dan media pembelajaran digital."
    ]
  },
  {
    id: 2,
    degree: "Sarjana Pendidikan (S.Pd.) – Pendidikan Biologi",
    institution: "Universitas Negeri Malang (UM)",
    period: "Lulus",
    details: [
      "Fokus: Metodologi pengajaran sains, kompetensi pedagogik modern, dan pemanfaatan media instruksional interaktif.",
      "Aktif dalam organisasi kemahasiswaan dan riset sains terapan."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "AI & Arsitektur Solusi Digital",
    icon: Cpu,
    description: "Pengembangan generator cerdas, workflow otomasi & integrasi model AI",
    skills: [
      "Gemini AI & Google AI Studio Integration",
      "Game Generator & Gamifikasi Pembelajaran",
      "Prompt Engineering untuk Dokumen Kurikulum (RPP, LKPD, Soal)",
      "Google Apps Script (Advanced Automation)",
      "Database Cloud (Firebase / Supabase)",
      "Web App Prototyping & Modern Frontend"
    ]
  },
  {
    title: "Kepemimpinan & Tata Kelola Pendidikan",
    icon: Layers,
    description: "Strategi manajerial sekolah, kurikulum merdeka & penjaminan mutu",
    skills: [
      "Manajemen Satuan Pendidikan & Budaya Inovasi",
      "Fasilitasi Daerah Digitalisasi (BPPMP Jatim)",
      "Sistem CBT & Asesmen Berbasis Komputer",
      "Penyusunan Perangkat Ajar Berdiferensiasi",
      "Evaluasi Kinerja Pendidik & Supervisi Klinis",
      "Kemitraan Komite, Riset BRIDA & Pemerintah Daerah"
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: "Bisma APP",
    description: "Sistem informasi manajemen sekolah terpadu untuk presensi digital siswa, jurnal pembelajaran guru, absensi RFID/online, dan pelaporan otomatis.",
    link: "https://bisma.web.id/",
    category: "Manajemen Sekolah",
    badge: "Core Ecosystem",
    features: ["Presensi Siswa Real-Time", "Jurnal Mengajar Digital", "Dashboard Kepala Sekolah", "Laporan Rekapitulasi Otomatis"],
    techStack: ["Web App", "Cloud DB", "PWA Ready"],
    isHighlighted: true
  },
  {
    id: 2,
    title: "Game Generator",
    description: "Platform pembuat game edukasi interaktif cerdas bertenaga AI Studio untuk menciptakan kuis gamifikasi, arcade belajar, dan visual matching di kelas.",
    link: "https://gamegenerator.ai.studio/",
    category: "AI Tool",
    badge: "AI Studio Powered",
    features: ["Instant Game Logic Generator", "Multiple Quiz Mechanics", "Interactive Audio & Visuals", "Shareable Game Pin"],
    techStack: ["Gemini AI", "Google AI Studio", "HTML5 Canvas"],
    isHighlighted: true
  },
  {
    id: 3,
    title: "RPP Generator",
    description: "Generator Modul Ajar dan Rencana Pelaksanaan Pembelajaran (RPP) inovatif bertenaga AI yang selaras dengan Capaian Pembelajaran Kurikulum Merdeka.",
    link: "https://sites.google.com/view/akhmadnasor/rpp-generator",
    category: "AI Tool",
    badge: "Kurikulum Merdeka",
    features: ["Format Resmi Kemdikbudristek", "Diferensiasi Konten Otomatis", "Rubrik Asesmen Terintegrasi", "Export Dokumen Siap Cetak"],
    techStack: ["Gen AI Pipeline", "Google Workspace", "Prompt Engineering"],
    isHighlighted: true
  },
  {
    id: 4,
    title: "LKPD Generator",
    description: "Aplikasi asisten cerdas untuk merancang Lembar Kerja Peserta Didik (LKPD) yang kontekstual, menarik, berbasis studi kasus, dan terstruktur.",
    link: "https://sites.google.com/view/akhmadnasor/cheat-ai",
    category: "AI Tool",
    badge: "Pedagogi Cerdas",
    features: ["Penyesuaian Level Kognitif", "Instruksi Kerja Bertahap", "Pertanyaan Pemantik Cerdas", "Template Siap Cetak A4"],
    techStack: ["Cheat AI Assistant", "Web Platform", "AI Prompting"],
    isHighlighted: true
  },
  {
    id: 5,
    title: "Soal Generator",
    description: "Generator bank soal HOTS (Higher Order Thinking Skills) dan AKM otomatis berdasarkan kompetensi dasar, tingkat kesulitan, dan kisi-kisi terukur.",
    link: "https://sites.google.com/view/akhmadnasor/soal-generator",
    category: "AI Tool",
    badge: "Asesmen Adaptif",
    features: ["Pembuatan Soal Pilihan Ganda & Uraian", "Kunci Jawaban & Pembahasan Detail", "Distribusi Taksonomi Bloom", "Export Format Ujian CBT"],
    techStack: ["Prompt Engine", "Assessment Matrix", "Web App"],
    isHighlighted: true
  },
  {
    id: 6,
    title: "Digital Asesmen Test (CBT)",
    description: "Sistem ujian berbasis komputer (CBT) dengan sistem anti-curang, bank soal terenkripsi, pengacakan butir soal, dan analisis daya pembeda.",
    link: "https://digitalasesemensystem.netlify.app/",
    category: "Asesmen & CBT",
    badge: "High Security",
    features: ["Lockdown Screen Protection", "Realtime Timer & Autosave", "Analisis Butir Soal Cepat", "Export Nilai ke Excel"],
    techStack: ["React", "Cloud Storage", "Netlify"],
    isHighlighted: false
  },
  {
    id: 7,
    title: "Perpustakaan Digital",
    description: "Sistem manajemen katalog buku daring, pencarian koleksi literasi, peminjaman digital, dan rekapitulasi minat baca siswa sekolah dasar.",
    link: "https://perpusbaujeng1.netlify.app/",
    category: "Manajemen Sekolah",
    badge: "Literasi Digital",
    features: ["Katalog Online Interaktif", "Barcode Tracking Buku", "Statistik Kunjungan Siswa", "E-Book Repositori"],
    techStack: ["Web Database", "Responsive UI", "Netlify"],
    isHighlighted: false
  },
  {
    id: 8,
    title: "Website Resmi SDN BAUJENG I BEJI",
    description: "Portal web profil resmi untuk publikasi kegiatan sekolah, pengumuman, galeri prestasi, PPDB daring, dan transparansi tata kelola satuan pendidikan SDN BAUJENG I BEJI.",
    link: "https://www.sdnbaujeng1.sch.id/",
    category: "Web Edukasi",
    badge: "Official Portal",
    features: ["Portal Informasi Resmi", "Sistem PPDB Online", "Galeri Prestasi & Berita", "Integrasi Media Sekolah"],
    techStack: ["Domain .sch.id", "SEO Optimized", "Mobile Friendly"],
    isHighlighted: false
  }
];

// Helper to convert Google Drive 'view' links to 'preview' links
const getPreviewLink = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

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
  { id: 13, title: "Sertifikat Kepemimpinan", issuer: "Lembaga Administrasi Negara", link: getPreviewLink("1_EKzlovAtjciyy5v_nAVmXMDetvmtYh7") },
  { id: 14, title: "Sertifikat Karya Ilmiah", issuer: "Jurnal Pendidikan", link: getPreviewLink("1npBrC4Urk_p72kK3xjO_zAHWvvRoSc71") },
  { id: 15, title: "Sertifikat Pemanfaatan AI", issuer: "Google for Education", link: getPreviewLink("1WytK0guhbBblzGJ9yU_s7D8t5rEDqy9t") },
  { id: 16, title: "Sertifikat Pengabdian Masyarakat", issuer: "Pemerintah Daerah", link: getPreviewLink("19nHJtwBpcrmD7qUhIE66q8r_Pamppp8f") },
];

export const GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1nQOwjRwjHBCz0S8qSmugeHE444KXKCg5";

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 1,
    title: "Juara 1 INOPAMAS 2026",
    issuer: "Pemerintah Kabupaten Pasuruan",
    year: "2026",
    isSpecial: true,
    highlightText: "Peringkat 1 Tingkat Kabupaten",
    description: "Anugerah INOPAMAS 2026 (Inovasi Kabupaten Pasuruan Maju Sejahtera, dan Berkeadilan) dalam kategori inovasi pendidikan dan pelayanan publik berbasis transformasi digital."
  },
  {
    id: 2,
    title: "Top 5 Inovasi BRIDA Jawa Timur 2026",
    issuer: "Badan Riset dan Inovasi Daerah (BRIDA) Provinsi Jawa Timur",
    year: "2026",
    isSpecial: true,
    highlightText: "Top 5 Tingkat Provinsi",
    description: "Terpilih dalam jajaran 5 karya inovasi terbaik se-Provinsi Jawa Timur atas kebaruan solusi, implementasi nyata, dan replikabilitas dalam meningkatkan kualitas pendidikan."
  },
  {
    id: 3,
    title: "Fasilitator Daerah (Fasda) Bidang Digitalisasi",
    issuer: "BPPMP Provinsi Jawa Timur (Kemdikbudristek)",
    year: "2026",
    isSpecial: true,
    highlightText: "Amanah Strategis Jawa Timur",
    description: "Penetapan resmi sebagai Fasilitator Daerah untuk mendampingi satuan pendidikan di Jawa Timur dalam penguatan ekosistem digital sekolah."
  },
  {
    id: 4,
    title: "Guru Pejuang Digital (GPD)",
    issuer: "Kemdikbudristek RI",
    year: "2025 – Sekarang",
    description: "Penghargaan dan penugasan nasional dalam gerakan pemberdayaan pemanfaatan teknologi digital pembelajaran di daerah."
  },
  {
    id: 5,
    title: "Top Ten Inovasi Pasuruan Maslahat (GESIT)",
    issuer: "Pemerintah Kab. Pasuruan",
    year: "2023",
    description: "Inovasi GESIT (Gemar Literasi Sains Terpadu) yang dikembangkan sebagai aplikasi penguatan kompetensi literasi sains berbasis penelitian terapan."
  },
  {
    id: 6,
    title: "Top Ten Inovasi Pasuruan Maslahat (SAKERA)",
    issuer: "Pemerintah Kab. Pasuruan",
    year: "2023",
    description: "Inovasi SAKERA (Sistem Administrasi Kinerja dan Pembelajaran Terintegrasi) untuk efisiensi birokrasi dan asesmen pendidik."
  },
  {
    id: 7,
    title: "Pengajar Praktik Pendidikan Guru Penggerak (PP PGP) Angkatan X",
    issuer: "Kemdikbudristek RI",
    year: "2023",
    description: "Mendampingi calon guru penggerak dalam lokakarya kepemimpinan pembelajaran dan aksi nyata transformasi kelas."
  },
  {
    id: 8,
    title: "Guru Penggerak Angkatan IV",
    issuer: "Kemdikbudristek RI",
    year: "2022",
    description: "Lulusan program pendidikan kepemimpinan pembelajaran nasional dengan predikat amat baik."
  }
];

export const ORGANIZATION_DATA = [
  "Sekretaris PGRI Cabang Kecamatan Beji (2025 – Sekarang)",
  "Fasilitator Komunitas Belajar Kepala Sekolah & Pendidik Kabupaten Pasuruan",
  "Pengurus GP Ansor Desa Baujeng Kecamatan Beji"
];
