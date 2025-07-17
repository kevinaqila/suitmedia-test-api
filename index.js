import express from "express";
import cors from "cors";

const app = express();

// Izinkan semua permintaan untuk sementara selama proses debug
app.use(cors({ origin: '*' }));

// Fungsi untuk mencatat dan merespons
const logAndRespond = (pathName, req, res) => {
    console.log(`--- Vercel menerima permintaan di path: "${pathName}" ---`);
    console.log("URL asli yang diminta:", req.originalUrl);

    res.status(200).json({
        message: `Endpoint ${pathName} berhasil diakses!`,
        originalUrl: req.originalUrl,
    });
};

// Kita buat 3 rute untuk 'menjebak' panggilan dari frontend
app.get('/', (req, res) => logAndRespond('/', req, res));
app.get('/ideas', (req, res) => logAndRespond('/ideas', req, res));
app.get('/api/ideas', (req, res) => logAndRespond('/api/ideas', req, res));

export default app;