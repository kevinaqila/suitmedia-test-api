import express from "express";
import axios from "axios";
import cors from "cors";

const port = 3001;

const app = express();

app.use(cors());

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