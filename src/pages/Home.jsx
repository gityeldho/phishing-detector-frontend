import React, { useState } from "react";
import "./Home.css"; // Import the CSS file

function Home() {
  const [url, setUrl] = useState("");

  return (
    <div className="container">
      <h1>Phishing Website Detector</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button>Check</button>
    </div>
  );
}

export default Home;

