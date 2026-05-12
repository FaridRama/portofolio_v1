// Struktur data project (rapi + gampang ditambah)
// Catatan:
// - `totalTechnologies` & `totalKeyFeatures` otomatis (getter) berdasarkan array-nya.
// - Pakai `id` untuk URL detail: `/project/:id`

export const projects = [
  {
    id: "f-trip",
    title: "F-Trip",
    description: "Platform pencarian destinasi wisata berdesain inovatif untuk user di Indonesia.",
    descriptionLong:
      "F-Trip adalah platform pencarian destinasi wisata yang berfokus memberikan pengalaman UI/UX yang modern dan efisien. Aplikasi ini memberikan kemudahan pengguna untuk mencari destinasi menarik di seluruh Indonesia.",
    image: {
      src: new URL("../../assets/img/project/f-trip.png", import.meta.url).href,
      alt: "F-Trip",
    },
    liveDemoUrl: "#",
    repositoryUrl: "#",
    technologiesUsed: ["ReactJS", "Tailwind CSS", "Lucide React"],
    keyFeatures: ["Sistem pencarian destinasi pintar", "Tampilan modern responsif", "Galeri foto interaktif"],
    get totalTechnologies() {
      return this.technologiesUsed?.length ?? 0;
    },
    get totalKeyFeatures() {
      return this.keyFeatures?.length ?? 0;
    },
  },
  {
    id: "fantech-clone",
    title: "Fantech Clone",
    description: "Replika website e-commerce gaming Fantech yang responsif dan menarik.",
    descriptionLong:
      "Fantech Clone merupakan replika dari website resmi Fantech. Dibuat dengan tujuan melatih kemampuan menyusun layout website e-commerce kompleks yang menampilkan katalog perangkat gaming.",
    image: {
      src: new URL("../../assets/img/project/fantech-clone.png", import.meta.url).href,
      alt: "Fantech Clone",
    },
    liveDemoUrl: "#",
    repositoryUrl: "#",
    technologiesUsed: ["HTML5", "CSS3", "JavaScript"],
    keyFeatures: ["Katalog produk yang terstruktur", "Animasi hover pada setiap item", "Mobile-friendly navigation"],
    get totalTechnologies() {
      return this.technologiesUsed?.length ?? 0;
    },
    get totalKeyFeatures() {
      return this.keyFeatures?.length ?? 0;
    },
  },
  {
    id: "studio-ghibli",
    title: "Studio Ghibli",
    description: "Katalog interaktif informatif untuk menyajikan detail film-film rilisan Studio Ghibli.",
    descriptionLong:
      "Mencari dan menampilkan detail seputar film rilisan Studio Ghibli, memanfaatkan API publik untuk menyajikan data secara dinamis mulai dari rating, tahun rilis, hingga deskripsi lengkap.",
    image: {
      src: new URL("../../assets/img/project/studio-ghibli.png", import.meta.url).href,
      alt: "Studio Ghibli",
    },
    liveDemoUrl: "#",
    repositoryUrl: "#",
    technologiesUsed: ["ReactJS", "Fetch API", "Tailwind CSS"],
    keyFeatures: ["Integrasi REST API", "Penampilan metadata film", "Desain tematik Ghibli"],
    get totalTechnologies() {
      return this.technologiesUsed?.length ?? 0;
    },
    get totalKeyFeatures() {
      return this.keyFeatures?.length ?? 0;
    },
  },
];

