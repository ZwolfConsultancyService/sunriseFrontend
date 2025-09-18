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
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #eafff4, #ffffff, #ffe4ec)",
        animation: "gradientShift 8s ease infinite",
        backgroundSize: "400% 400%",
      }}
    >
      {/* ✨ Blurred Light Effects */}
      <div className="absolute w-[300px] h-[300px] bg-orange-300 opacity-30 rounded-full blur-3xl left-[10%] top-[20%] animate-pulse"></div>
      <div className="absolute w-[250px] h-[250px] bg-pink-300 opacity-30 rounded-full blur-2xl right-[10%] bottom-[15%] animate-ping"></div>

      {/* Spinner & Text */}
      <div className="relative w-30 h-30 flex items-center justify-center animate-fadeIn">
        {/* Spinner */}
        <div className="absolute top-0 left-0 w-30 h-30 rounded-full border-4 border-orange-400 border-t-transparent animate-spin"></div>

        {/* Loading Text */}
        <div
          className="relative font-semibold text-lg select-none flex items-center space-x-1"
          style={{ position: "relative", width: "6rem", height: "1.5rem" }}
        >
          {/* loading... */}
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

          {/* intense brand text */}
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
            <span className="text-orange-400 text-xl">⌞</span>
            <span>sun</span>
            <span className="text-orange-400">r</span>
            <span>ise</span>
          </span>
        </div>
      </div>

      {/* ✨ Internal keyframe style */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
