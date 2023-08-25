import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(600);

  const handleResize = () => {
    setWindowWidth(window.screen.width);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};

export default useWindowSize;
