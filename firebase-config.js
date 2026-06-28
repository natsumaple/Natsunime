// ============================================================
//  NATSUNIME — Firebase Configuration
//  Letakkan file ini di folder yang sama dengan index.html
// ============================================================
//
//  LANGKAH SETUP:
//  1. Buka https://console.firebase.google.com
//  2. Buat project baru atau pilih project yang sudah ada
//  3. Masuk ke Project Settings > General > Your Apps > Web App
//  4. Copy konfigurasi Firebase ke bagian FIREBASE CONFIG di bawah
//  5. Aktifkan Cloud Firestore di Firebase Console
//     (Firestore Database > Create Database > Start in test mode)
//
// ============================================================

// =================== FIREBASE CONFIG ========================
//  Ganti semua nilai "GANTI_INI_..." dengan nilai asli dari
//  Firebase Console kamu.
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyDkLd6zLlK5VihMLuTd3bmHO5AYVVyBFy8",
  authDomain: "natsunime-86e9d.firebaseapp.com",
  projectId: "natsunime-86e9d",
  storageBucket: "natsunime-86e9d.firebasestorage.app",
  messagingSenderId: "804368157744",
  appId: "1:804368157744:web:333f802ee695d78cf3f1f5",
  measurementId: "G-L0X0VZ6JPH"
};

// ============================================================
//  ASSETS — URL Gambar Global
//  Ganti URL di bawah dengan URL gambar yang kamu hosting
//  (bisa pakai ImgBB, Cloudinary, GitHub raw, dll)
// ============================================================
const ASSETS = {
  // Logo utama aplikasi — tampil di splash screen & sidebar
  // Rekomendasi ukuran: 512x512 px, format PNG transparan
  LOGO_URL: "https://i.ibb.co.com/93gtj8vP/e38097d923934c9595cd26668ed062f2-webp.webp",

  // Foto profil default untuk user baru (sebelum gacha PFP)
  // Rekomendasi ukuran: 300x300 px
  DEFAULT_AVATAR_URL: "https://i.ibb.co.com/Kz6fKRpr/51c359defeb3cbae892c5cdada9ab747-webp.webp",

  // Avatar khusus Maou/Admin (opsional, bisa sama dengan default)
  MAOU_AVATAR_URL: "https://i.ibb.co.com/Kz6fKRpr/51c359defeb3cbae892c5cdada9ab747-webp.webp",

  // Gambar background splash screen (opsional, bisa kosong "")
  SPLASH_BG_URL: "",
};

// ============================================================
//  STRUKTUR FIRESTORE (Referensi)
//
//  Collection: users
//    Document ID: username (string)
//    Fields:
//      - username: string
//      - password: string (plain text)
//      - role: "maou" | "bangsawan" | "rakyat"
//      - rank: string (Villager/Adventurer/Knight/Hero/MC)
//      - rankPoints: number (total rarity points dari koleksi)
//      - eris: number (mata uang)
//      - avatarUrl: string (URL foto profil aktif)
//      - lastLogin: timestamp
//      - createdAt: timestamp
//      - animeList: array of { id, title, imageUrl, status, progress }
//      - marathon: array of { id, title, imageUrl, deadline, completed }
//      - gachaCollection: array of { id, name, imageUrl, type, rarity }
//
//  Collection: gacha_pool
//    Document ID: auto-generated
//    Fields:
//      - name: string
//      - imageUrl: string
//      - type: "waifu_card" | "husbu_card" | "waifu_pfp" | "husbu_pfp"
//      - rarity: "C" | "R" | "SR" | "SSR" | "UR"
//      - rarityPoints: number (C=1, R=3, SR=7, SSR=15, UR=30)
//
// ============================================================

export { FIREBASE_CONFIG, ASSETS };
