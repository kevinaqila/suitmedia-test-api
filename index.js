import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3001;

const corsOptions = {
    origin: "https://suitmedia-test-client-kluv.vercel.app", // URL Frontend Anda
};
app.use(cors(corsOptions));
app.get("/api/ideas", async(req, res) => {
    try {
        const queryParams = req.query;
        const apiResponse = await axios.get("https://suitmedia-backend.suitdev.com/api/ideas", {
            params: {
                ...queryParams,
                "append[]": "small_image",
            },
        });
        res.json(apiResponse.data);
    } catch (error) {
        res.status(500).json({ error: "Internal server proxy error" });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});