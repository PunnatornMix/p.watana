import React from "react";

function ButtonGradient({ children }) {
  return (
    <button
      className="btn hover:drop-shadow-red  text-white rounded-full w-36 border-0 button-red
    hover:tracking-widest"
      style={{
        background:
          "linear-gradient(180deg, rgba(220,30,50,1) 0%, rgba(255,65,85,1) 100%)",
      }}
    >
      <p className="font-medium">{children}</p>
    </button>
  );
}

export default ButtonGradient;
