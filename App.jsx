import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import CSS for styling

function App() {
    const [url, setUrl] = useState("");
    const [result, setResult] = useState(null);

    const checkUrl = async () => {
        try {
            const response = await axios.post("http://localhost:5000/predict", { url });
            setResult(response.data);  // Ensure response is set correctly
            console.log(response.data); // Ensure the response is logged correctly
        } catch (error) {
            console.error("Error checking URL:", error);
            setResult({ message: "There was an error checking the URL" }); // Display error message
        }
    };

    return (
        <div className="container">
            <h1>Phishing Website Detector</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                />
                <button onClick={checkUrl}>Check</button>
            </div>

            {result && (
                <div className="result">
                    <p><strong>URL:</strong> {result.url}</p>
                    <p><strong>Result:</strong> {result.prediction === "Phishing" ? "⚠️ Phishing Detected" : "phishing"}</p>
                    <p><strong>Source:</strong> {result.source}</p>
                    <p><strong>Message:</strong> {result.message}</p>  {/* Display message */}
                </div>
            )}
        </div>
    );
}

export default App;
