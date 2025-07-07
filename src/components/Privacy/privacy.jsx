import React, { useState } from "react";

const Privacy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePrivacy = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
      <button
        onClick={togglePrivacy}
        style={{
          backgroundColor: "#1f1f1f",
          color: "#fff",
          padding: "10px 20px",
          border: "1px solid #444",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        {isOpen ? "Hide Privacy Policy ▲" : "Show Privacy Policy ▼"}
      </button>

      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#111",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #333",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <h1 style={{ color: "#00ffff" }}>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            information when you visit our website.
          </p>
          <h2 style={{ color: "#00ffff" }}>Information Collection</h2>
          <p>
            We may collect personal information such as your name, email address,
            and any other details you provide when you contact us or subscribe to our
            newsletter.
          </p>
          <h2 style={{ color: "#00ffff" }}>Use of Information</h2>
          <p>
            We use the information we collect to improve our website, respond to
            inquiries, and send periodic emails.
          </p>
          <h2 style={{ color: "#00ffff" }}>Cookies</h2>
          <p>
            Our website may use cookies to enhance user experience. You can choose
            to accept or decline cookies through your browser settings.
          </p>
          <h2 style={{ color: "#00ffff" }}>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access or disclosure.
          </p>
          <h2 style={{ color: "#00ffff" }}>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated effective date.
          </p>
        </div>
      )}
    </div>
  );
};

export default Privacy;
