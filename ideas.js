import axios from "axios";

export default async function handler(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "https://suitmedia-test-client-liuv.vercel.app");
    response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (request.method === "OPTIONS") {
        return response.status(200).end();
    }

    try {
        const queryParams = request.query;

        const apiResponse = await axios.get("https://suitmedia-backend.suitdev.com/api/ideas", {
            params: {
                ...queryParams,
                "append[]": "small_image",
            },
        });

        return response.status(200).json(apiResponse.data);
    } catch (error) {
        console.error("Error di dalam fungsi API:", error);
        return response.status(500).json({ message: "Error saat mengambil data dari Suitmedia API" });
    }
}