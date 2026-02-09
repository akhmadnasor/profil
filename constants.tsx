import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award, 
  User, 
  Layout, 
  Layers,
  Globe,
  Database,
  Cpu,
  BookOpen,
  FileText
} from 'lucide-react';
import { ExperienceItem, EducationItem, PortfolioItem, SkillCategory, AwardItem, NavItem, CertificateItem } from './types';

export const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1RTNNgb3DpDV-vws_ZHeDNsTAsWqUyvUe";

export const CONTACT_INFO = {
  name: "AKHMAD NASOR, S.Pd., M.Pd.",
  role: "Kepala Sekolah & Inovator Teknologi Pendidikan",
  location: "Beji, Pasuruan, Jawa Timur, Indonesia",
  phone: "085749662221",
  email: "akhmadnasor@gmail.com",
  about: "Kepala Sekolah yang berdedikasi dan Inovator Teknologi Pendidikan dengan latar belakang yang kuat dalam pedagogi sains dan manajemen sekolah. Memiliki pengalaman sukses bertransisi dari peran guru (2019-2024) menjadi pemimpin satuan pendidikan. Memiliki spesialisasi dalam pengembangan solusi digital untuk pendidikan, termasuk pembuatan aplikasi ujian berbasis web, integrasi kecerdasan buatan (AI Gemini/AI Studio) dalam kurikulum, dan manajemen database. Berkomitmen memajukan metodologi pengajaran melalui riset terapan dan implementasi teknologi tepat guna."
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'Profil', icon: User },
  { id: 'experience', label: 'Pengalaman', icon: Briefcase },
  { id: 'education', label: 'Pendidikan', icon: GraduationCap },
  { id: 'skills', label: 'Keahlian', icon: Code },
  { id: 'portfolio', label: 'Portofolio', icon: Layout },
  { id: 'certificates', label: 'Sertifikat', icon: FileText },
  { id: 'awards', label: 'Penghargaan', icon: Award },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: "Kepala Sekolah",
    institution: "UPT Satuan Pendidikan SDN Baujeng 1",
    period: "2025 – Sekarang",
    description: [
      "Bertanggung jawab penuh atas manajemen operasional, akademik, dan pengembangan strategis sekolah.",
      "Memimpin implementasi inovasi pembelajaran digital dan sistem manajemen sekolah berbasis teknologi."
    ]
  },
  {
    id: 2,
    role: "Kepala Pengembang Sistem Inovasi Pendidikan",
    institution: "Kecamatan Beji",
    period: "2025 – Sekarang",
    description: [
      "Memimpin pengembangan dan penerapan solusi teknologi pendidikan untuk meningkatkan efisiensi administrasi dan kualitas pembelajaran di tingkat kecamatan."
    ]
  },
  {
    id: 3,
    role: "Guru Mata Pelajaran",
    institution: "SMPN 2 Sukorejo",
    period: "2019 – 2024",
    description: [
      "Melaksanakan kegiatan pembelajaran aktif dan inovatif, serta terlibat dalam pengembangan perangkat ajar digital."
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
      "Penerima Beasiswa Pendidikan Indonesia (BPI) Kemdikbudristek.",
      "Fokus Penelitian: Inovasi Pembelajaran Literasi Sains melalui pengembangan 'Gesit App'."
    ]
  },
  {
    id: 2,
    degree: "Sarjana Pendidikan (S.Pd.) – Pendidikan Biologi",
    institution: "Universitas Negeri Malang (UM)",
    period: "",
    details: [
      "Fokus: Pengembangan metode pengajaran, kompetensi pedagogik, dan alat bantu belajar digital."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Teknologi & Inovasi",
    icon: Cpu,
    skills: [
      "Google Apps Script (Advanced)",
      "Integrasi AI Education (Gemini/AI Studio)",
      "Database Management (Firebase/Supabase)",
      "Game Generator Learning",
      "SEO & Content Strategy",
      "Web Development Basics"
    ]
  },
  {
    title: "Manajemen & Pedagogi",
    icon: Layers,
    skills: [
      "Manajemen Satuan Pendidikan",
      "Penyusunan RPP Inovatif (AI Integrated)",
      "Pengembangan Asesmen Digital (CBT)",
      "Manajemen Jurnal Pembelajaran",
      "Evaluasi Kinerja Guru",
      "Kepemimpinan Instruksional"
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: "Perpustakaan Digital",
    description: "Sistem perpustakaan berbasis web untuk manajemen buku dan peminjaman.",
    link: "https://perpusbaujeng1.netlify.app/",
    category: "Web App"
  },
  {
    id: 2,
    title: "RPP Gen AI",
    description: "Platform penyusunan RPP Inovatif yang terintegrasi dengan kecerdasan buatan.",
    link: "https://sigmabai.netlify.app/",
    category: "AI Integration"
  },
  {
    id: 3,
    title: "Digital Asesmen Test",
    description: "Database ujian berbasis Computer Based Test (CBT) dengan fitur keamanan.",
    link: "https://digitalasesemensystem.netlify.app/",
    category: "Assessment"
  },
  {
    id: 4,
    title: "Bisma App",
    description: "Sistem manajemen sekolah untuk presensi digital dan laporan pembelajaran harian.",
    link: "https://sdnbaujeng1.github.io/bismaapp/",
    category: "Management System"
  },
  {
    id: 5,
    title: "Game Builder Generator",
    description: "Alat pembuat game edukasi interaktif untuk pembelajaran di kelas.",
    link: "https://sdnbaujeng1.github.io/gamegenerator/",
    category: "Gamification"
  },
  {
    id: 6,
    title: "Website Sekolah Resmi",
    description: "Pengembangan website profil dan informasi resmi SDN Baujeng 1.",
    link: "https://www.sdnbaujeng1.sch.id/",
    category: "Web Profile"
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
    title: "Guru Pejuang Digital (GPD)",
    issuer: "Kemdikbudristek",
    year: "2025 – Sekarang"
  },
  {
    id: 2,
    title: "Top Ten Inovasi Pasuruan Maslahat (GESIT)",
    issuer: "Pemerintah Kab. Pasuruan",
    year: "2023",
    description: "Inovasi GESIT (Gemar Literasi Sains Terpadu)"
  },
  {
    id: 3,
    title: "Top Ten Inovasi Pasuruan Maslahat (SAKERA)",
    issuer: "Pemerintah Kab. Pasuruan",
    year: "2023",
    description: "Inovasi Sakera (Sistem Administrasi Kinerja dan Pembelajaran)"
  },
  {
    id: 4,
    title: "Pengajar Praktik Angkatan X",
    issuer: "Kemdikbudristek",
    year: "2023"
  },
  {
    id: 5,
    title: "Guru Penggerak Angkatan IV",
    issuer: "Kemdikbudristek",
    year: "2022"
  }
];

export const ORGANIZATION_DATA = [
  "Sekretaris PGRI Cabang Kecamatan Beji (2025 – Sekarang)",
  "Pengurus GP Ansor Desa Baujeng Kecamatan Beji"
];