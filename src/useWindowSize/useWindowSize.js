import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;

// import { useState, useEffect } from "react";

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 0,
//     height: typeof window !== "undefined" ? window.innerHeight : 0,
//   });

//   useEffect(() => {
//     // เช็คว่าการทำงานในเบราว์เซอร์เท่านั้น
//     if (typeof window !== "undefined") {
//       const handleResize = () => {
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       };

//       window.addEventListener("resize", handleResize);
//       // ทำความสะอาด (cleanup) event listener เมื่อ component ถูก unmount
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);

//   return windowSize;
// };

// export default useWindowSize;
