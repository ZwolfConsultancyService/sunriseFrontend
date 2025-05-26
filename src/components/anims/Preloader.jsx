import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [showIntense, setShowIntense] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntense(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, cyan, lightpink, white, lightgreen)",
      }}
    >
      <div className="relative w-30 h-30 flex items-center justify-center">
        {/* Spinner circle - spins */}
        <div className="absolute top-0 left-0 w-30 h-30 rounded-full border-4 border-green-500 border-t-transparent animate-spin"></div>

        {/* Text container */}
        <div className="relative font-semibold text-lg select-none flex items-center space-x-1" style={{ position: 'relative', width: '6rem', height: '1.5rem' }}>
          {/* Loading text */}
          <span
            style={{
              position: "absolute",
              opacity: showIntense ? 0 : 1,
              transition: "opacity 0.5s ease",
              width: "100%",
              textAlign: "center",
            }}
          >
            loading
          </span>

         
          <span
            style={{
              position: "absolute",
              opacity: showIntense ? 1 : 0,
              transition: "opacity 0.5s ease",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "0.1rem",
            }}
          >
            <span className="text-green-500 text-xl">⌞</span>
            <span>sun</span>
            <span className="text-green-500">r</span>
            <span>ise</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
