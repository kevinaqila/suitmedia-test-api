import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "https://suitmedia-test-client-liuv.vercel.app",
};

app.use(cors(corsOptions));

app.get("/", async(req, res) => {
    try {
        const queryParams = req.query;
        const apiResponse = await axios.get("https://suitmedia-backend.suitdev.com/api/ideas", {
            params: {
                ...queryParams,
                "append[]": "small_image",
            },
        });
        return res.status(200).json(apiResponse.data);
    } catch (error) {
        return res.status(500).json({ error: "Internal server proxy error" });
    }
});

export default app;