# KeDA Software House Frontend Assessment - Soal Test 2
Christopher Ivan Gunardi


## Desain
Saya telah membuat desain web ERP berdasarkan style dan spesifikasi sesuai soal dengan menggunakan Figma. Desain ini yang telah dibuat diakses pada [berkas ini](https://www.figma.com/file/Gf8OvgCgY7Fkg7iu41hIaL/KeDA-Frontend-Assessment?node-id=0%3A1&t=ftc2N3W3b9vT5xOO-1). Karena font yang digunakan tidak dispesifikasi, saya menggunakan Open Sans untuk Heading dan Lato untuk Body (content) yang menurut saya cukup mirip dengan desain (sans-serif). Keduanya tersedia di Google Fonts.


## Instruksi:
- `yarn dev` untuk menyalakan server development pada port 3000
- `yarn build` untuk melakukan build project


## Teknologi yang digunakan:

### Create React App (Vite)
Sesuai spesifikasi, project ini dibangun menggunakan react. Untuk mempermudah, saya menggunakan boilerplate create-react-app berbasis Vite. Saya menggunakan Vite karena berdasarkan pengalaman sejauh ini, Vite memiliki beberapa keunggulan ketika digunakan untuk membuat codebase React:
- lebih cepat dalam proses development (dari sisi hot reload dan loading server awal)
- memiliki dukungan langsung untuk SCSS (tidak perlu instalasi dan setup tambahan)
- memiliki fitur-fitur yang sama dengan create-react-app biasa (.env, build, dll)

### TypeScript
Saya menggunakan TypeScript dibanding JavaScript biasa karena penggunaan fitur-fitur TypeScript (interface, type) akan memudahkan untuk pengembangan dalam jangka panjang dan mengurangi kesalahan-kesalahan kecil yang tidak diinginkan.

### SCSS
SCSS (SASS) digunakan untuk memenuhi spesifikasi assessment ini.

### Eslint & Prettier
Eslint dan Prettier digunakan untuk melakukan konfigurasi linting codebase supaya konsisten. Keduanya juga sangat membantu dengan memberikan error/warning pada VSCode ketika kode yang dibuat tidak sesuai dengan style guide yang digunakan.

### MSW (Mock Service Worker)
Dalam assessment ini, sebenarnya MSW tidak dibutuhkan karena web yang dibuat bersifat static. Meski demikian, saya menggunakan MSW untuk melakukan mocking login. Selain itu, penggunaan MSW akan memudahkan pengembangan dalam jangka panjang, terutama karena web ini sebenarnya akan membutuhkan banyak API ketika diimplementasikan.

Untuk menyalakan MSW, bagian dalam `main.tsx` ini dapat di-uncomment:
```ts
  import { worker } from './mocks/browser';

  if (process.env.NODE_ENV === 'development') {
  worker.start();
  }
```

### Redux Thunk
Saya seperti MSW, sebenarnya penggunaan redux terbilang overkill untuk project ini. Fitur ini juga hanya digunakan pada fitur login dalam assessment ini. Meski demikian, konfigurasi redux yang digunakan dapat dengan mudah diekspansi untuk menambah fitur-fitur lain.

### Animasi
Dalam assessment ini, saya mengimplementasikan 3 jenis animasi:
- animasi fade-in on-scroll untuk elemen-elemen di Homepage (diimplementasikan dengan intersection-observer)
- animasi transisi halaman (homepage <-> login <-> user) yang diimplementasikan dengan react-transition-group
- Animasi warna pada blob yang digunakan pada homepage.

### Ilustrasi:
Ilustrasi yang digunakan dalam assessment ini diambil dari:
- https://undraw.co

### Fitur-fitur tambahan yang dibuat
- Halaman Profil (tampilan Work in Progress)
- Active state navbar link ketika di-scroll
- Favicon & Metadata

## Notes
Repository ini sudah docker-ready. Untuk informasi lebih lanjut, silakan pelajari folder `/nginx` dan `Dockerfile`.