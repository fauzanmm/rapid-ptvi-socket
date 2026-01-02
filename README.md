# RAPID SOCKET - Backend

### Site : PT Vale Indonesia

Backend API Service untuk project RAPID Website, berfungsi untuk integrasi data, single source of truth, cube datamart, ataupun integrasi antar aplikasi.

Pada dasarnya dataset yang dikembangkan berdasarkan case, kondisi, dan kebutuhan yang dialami oleh customer dari KMTS di region Indonesia. Sehingga API ini dapat menjadi salah satu data source yang terpercaya dan dapat digunakan untuk analisis, maupun reporting.

Pada project backend ini menggunakan framework dari [`Sveltekit`](https://svelte.dev/).

## 🚀 Main Feature

- RESTful API dengan Sveltekit framework
- Database connection via Prisma ORM
- Struktur folder modular
- Environment-based configuration
- Siap untuk deployment
- Dokumentasi bisa di lihat pada [`http://ip:port/api-docs`]

## 📃 Datamart

- Engine Detection
  - Current Fuel Time Loss
  - Current Shift Fuel Time Loss
  - Current Shift Summary Fuel Time Loss
  - Current Shift Page Fuel Tiem Loss
  - Monthly Summarize Fuel Time Loss

## 📁 Project Structure

```bash
back/
 ├── .svelte-kit/           # svelte config, `npm install` to create this
 ├── build/                 # builder file (ready to prod)
 ├── logs/
 │ ├── app-(year-month-date).log
 │ ├── error-(year-month-date).log
 │ ├── exception-(year-month-date).log
 │ └── rejection-(year-month-date).log
 ├── node_modules/
 ├── prisma-main-minecare-database/         # 1st database
 │ ├── main-minecare-database-client-types/ # client export file prisma, `npm run generate` to create this
 │ ├── prisma.config.ts     # config 1st database
 │ └── schema.prisma        # schema 1st database
 ├── src/
 │ ├── lib/
 │ │ ├── application/
 │ │ │ └── logging.ts       # Logger configuration
 │ │ ├── assets/
 │ │ │ └── favicon_komatsu.png
 │ │ ├── database/
 │ │ │ └── main-minecare-prisma-client.ts   # config logger when accessing prisma
 │ │ ├── error/
 │ │ │ └── error-response.ts                # error declaration
 │ │ └── service/
 │ │   ├── current-fueltimeloss-service.ts
 │ │   ├── shift-fueltimeloss-service.ts
 │ │   ├── shift-summary-fueltimeloss-service.ts
 │ │   └── shift-table-fueltimeloss-service.ts
 │ ├── routes/
 │ │ ├── (public-api)/
 │ │ │ └── api-docs.ts
 │ │ │   └── +page.svelte
 │ │ └── api/
 │ │   └── v2/
 │ │     └── fueltimeloss/
 │ │       ├── current/
 │ │       │ └── +server.ts
 │ │       ├── shift/
 │ │       │ ├── summary/
 │ │       │ │ └── +server.ts
 │ │       │ └── table/
 │ │       │   └── +server.ts
 │ │       ├── +layout.svelte
 │ │       └── +page.svelte
 │ ├── types/
 │ │ ├── assets.d.ts        # declare typescript assets
 │ │ ├── css.d.ts           # declare typescript css style
 │ │ └── swagger-ui-dist.d.ts   # declare typescript swagger-ui (front)
 │ ├── app.d.ts             # global declare typescript
 │ ├── app.html
 │ └── hooks.server.ts      # hooks server (cors in here)
 ├── static/
 │ ├── openapi.json
 │ ├── openapi.yaml         # in use
 │ └── robots.txt
 ├── .env                   # database url (check notion or ask administrator)
 ├── .gitignore
 ├── .npmrc/
 ├── .prettierignore
 ├── .prettierrc
 ├── ecosystem.config.cjs   # configuration for pm2 with rapid-backend aplication name
 ├── eslint.config.js
 ├── package-lock.json
 ├── package.json
 ├── README.md
 ├── svelte.config.js
 ├── tsconfig.json
 └── vite.config.ts
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# ⚙️ Deployment to Development Server

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Database connection (SQL Server)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd folder

# Install dependencies
npm install

# Create .env file in root directory with following variables
DATABASE_URL_MAIN_MINECARE="sqlserver://ipserver:port;database=databasename;user=username;password=passwordname;encrypt=true;trustServerCertificate=true"
DB_MAIN_MINECARE_USER="username"
DB_MAIN_MINECARE_PASSWORD="passwordname"
DB_MAIN_MINECARE_NAME="databasename"
DB_MAIN_MINECARE_HOST="ipserver"

# generate prisma client
npm run generate
```

### Development Mode

```bash
# run apps
npm run dev

# run apps in port 3001
npm run dev3001
```

### Production Mode

```bash
# Build the project
npm run build

# Start production server
npm run preview
```

# ⚙️ Deployment to Production Server

## Development Server Side (Local)

1. Pastikan .env sudah disesuaikan dengan server nya

   - IP Server menggunakan Server Production
   - IP Database menggunakan Database Production Server
   - Username Database menggunakan Read only user Database Production Server
   - Password Database menggunakan password dari user read only Database Production Server

2. Pastikan folder berikut sudah tersedia

   - build
   - node_modules
   - .env
   - ecosystem.config.cjs

   ```bash
   # to create build folder
   npm run build
   ```

3. Install pm2

   ```bash
   # install pm2
   npm install -g pm2
   ```

   Cek file dan folder berikut

   - Lokasi Program & Modul (Source Code)
     - C:\Users\[Username]\AppData\Roaming\npm\node_modules\pm2
     - C:\Users\[Username]\AppData\Roaming\npm\pm2.cmd
     ```bash
     # check pm2 folder
     npm root -g
     ```
   - Lokasi Data & Konfigurasi (.pm2)
     - C:\Users\[Username]\.pm2
     - /logs : Berisi file .log dari aplikasi Anda (sangat berguna untuk cek kenapa aplikasi auto-stop)
     - /pids : Berisi ID proses yang sedang berjalan.
     - dump.pm2 : File yang menyimpan daftar aplikasi Anda saat Anda menjalankan pm2
     - pm2.log : Log internal dari daemon PM2 itu sendiri.

4. Install pm2-installer

   Download pm2-installer [`here`]('https://github.com/jessety/pm2-installer?tab=readme-ov-file).
   Ini digunakan untuk membuat service pm2.exe (PM2) pada server windows, sehingga ketika user / user admin logout maka apps tetap berjalan dan apps bisa diakses oleh server manapun yang terhubung dengan server apps production.

5. pm2 ZIP file

   - Buat zip file pm2 dari node_modules

   ```bash
   # update terlebih dahulu jika menggunakan versi lama
   # karena pm2-installer membutuhkan pm2 terupdate
   npm install pm2@latest -g
   npm pm2 update

   # (opsional) memastikan skrip startup PM2 juga sesuai dengan versi terbaru.
   pm2 unstartup
   pm2 startup

   # membuat pm2 pack untuk di download atau diinstall di server site
   npm pack pm2
   ```

   - Siapkan zip file berikut
     - pm2
     - pm2-installer

## Production Server Side (Site)

1. Install node.js dan npm

   - Login dengan user `admin`
   - Download node.js [`here`](https://nodejs.org/en/download)
   - Install and cek node and npm

   ```bash
   # cek node version
   node -v

   # cek npm version
   npm -v
   ```

2. Install dan Configure pm2-installer

   Langkah ini universal, jadi bisa dilakukan pada step process Rapid API, Rapid Socket, ataupun Rapid Front. Karena pm2-installer ini adalah proses pembuatan service yang akan membungkus keseluruhan aplikasi.

   - Copy paste pm2-installer zip folder
   - Taruh folder pada directory berikut `C:\`
   - Masuk ke file pm2-installer dan buka powershell as administrator

   ```bash
   # mengubah lokasi instalasi global npm
   npm run configure
   ```

   Hal ini di lakukan agar directory file npm perlu diubah yang sebelumnya perlu masuk ke user terlebih dahulu (`C:\Users\DIGITALROOMPC04\AppData\Roaming\npm\node_modules\...`), lalu akan dipindahkan di `C:\ProgramData\npm`

3. Install pm2 global

   Sebelum melakukan installment pm2 secara global, perlu diketahui terlebih dahulu apakah server site tersebut online atau offline. Karena keduanya memiliki treatment proses yang berbeda. Terdapat 2 cara sesuai berdasarkan server nya apakah `offline` atau `online`.

   `PENTING! Masuk ke server menggunakan user admin!`

   #### `Online Server`

   Jika server site online, maka module javascript dapat di install melalui npm dari internet. Hal yang perlu dilakukan adalah sebagai berikut

   - Install pm2 secara global

   ```bash
   # install pm2 globally
   npm install -g pm2
   ```

   - Cek apakah betul module pm2 yang diinstall tersimpan di `C:\ProgramData\npm`
   - Jika sudah ada maka lanjut ke poin `nomor 4`

   #### `Offline Server`

   Jika server site offline, maka module javascript `tidak dapat di install melalui npm dari internet`. Hal yang perlu dilakukan adalah sebagai berikut

   - Copy paste pm2 zip folder yang sudah di pack pada poin `nomor 2`
   - Install pm2 secara global

   ```bash
   # install pm2 globally
   npm install -g ./pm2-5.x.x.tgz
   # ganti nama file sesuai dengan nama file yang di copy paste
   ```

   - Cek apakah betul module pm2 yang diinstall tersimpan di `C:\ProgramData\npm`
   - Jika sudah ada maka lanjut ke poin `nomor 4`

4. Start application

   - Start API Application `(powershell recommended)`

   ```bash
   # Masuk ke directory project API
   cd "C:\KMTSFile\Rapid-PTVI\front"

   # Run the apps
   pm2 start ecosystem.config.cjs --env production

   # save pm2
   pm2 save
   ```

   - Sebelum ke nomor selanjutnya, perlu dilanjutkan ke project `socket` dan `front`!
   - Hal yang perlu dilakukan adalah run apps lain menggunakan pm2

5. Setup pm2-installer

   ```bash
   # Agar PM2 menyala otomatis saat Windows booting tanpa perlu login user.
   npm run setup
   ```

# ⚙️ Update to Production Server

Jika ingin melakukan update pada aplikasi maka ada 2 section yang perlu dilakukan, yaitu pada development server (local pc / local server) dan production server (site server)

## Development Server Side (Local)

1. Pastikan .env sudah disesuaikan dengan server nya

   - IP Server menggunakan Server Production
   - IP Database menggunakan Database Production Server
   - Username Database menggunakan Read only user Database Production Server
   - Password Database menggunakan password dari user read only Database Production Server

2. Pastikan folder berikut sudah tersedia

   - build
   - node_modules
   - .env
   - ecosystem.config.cjs

   ```bash
   # to create build folder
   npm run build
   ```

3. Create ZIP Folder
   - Create zip folder build
   - (Opsional) Masukkan folder selain zip jika ada update

## Production Server Side (Site)

1. Matikan Service PM2 (Opsional)

   Ini diperlukan jika :

   - Melakukan update pada aplikasi PM2 itu sendiri (misal: update versi PM2).
   - Mengubah konfigurasi Windows Service (misal: mengubah user "Log On" atau mengubah lokasi PM2_HOME).
   - Terjadi error sistem yang membuat PM2 tidak responsif (hang).

   Untuk menonaktifkan atau stopped servive PM2 yang sedang berjalan ada beberapa cara yang dapat dilakukan.

   - Pergi ke `Services` lalu cari PM2, atau
   - Buka `command prompt`

   ```bash
   # Untuk melihat service PM2
   sc query pm2.exe

   # Untuk stop service PM2
   sc stop pm2.exe
   ```

2. Copy paste file zip
   Karena pada poin `nomor 3 di Development Server Side` sudah create zip file, maka copy paste file tersebut ke directory aplikasi

   Lalu extract dan reaplace file dan folder yang diperlukan untuk update proses

3. Restart Apps

   Diperlukan restart apps pada level pm2 (bukan pm2-installer). Adapun cara yang dapat dilakukan adalah sebagai berikut :

   - Lakukan reload aplikasi

   ```bash
   # reload
   pm2 reload rapid-api

   # cek status
   pm2 status

   # cek semua apps berjalan
   pm2 list
   ```
