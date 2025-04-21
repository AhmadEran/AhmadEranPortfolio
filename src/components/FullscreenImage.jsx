import React, { useState } from "react";

const FullPageImage = ({ src, alt }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Thumbnail image */}
      <img
        src={src}
        alt={alt}
        style={{ cursor: "pointer", maxWidth: "200px" }}
        onClick={() => setShow(true)}
      />

      {/* Full-screen overlay */}
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setShow(false)} // Close on click
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              boxShadow: "0 0 20px white",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </>
  );
};

export default FullPageImage;
