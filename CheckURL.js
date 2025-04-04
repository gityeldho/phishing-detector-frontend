import React, { useState } from "react";
import axios from "axios";

const CheckURL = () => {
    const [url, setUrl] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkURL = async () => {
        setLoading(true);
        setError(null);
        setResult(null);

        console.log("Checking URL:", url); // Debugging

        try {
            const response = await axios.post("http://localhost:5000/api/check-url", { url });
            console.log("API Response:", response.data); // Debugging

            setResult(response.data);
        } catch (err) {
            console.error("API Error:", err);
            setError("Error checking URL. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Phishing URL Detector</h2>
            <input 
                type="text" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter URL"
            />
            <button onClick={checkURL} disabled={loading}>
                {loading ? "Checking..." : "Check URL"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {result && <p>{result.message}</p>}
        </div>
    );
};

export default CheckURL;
