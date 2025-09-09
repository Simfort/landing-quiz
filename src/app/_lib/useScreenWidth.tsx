"use client";

import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setScreen(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return screen;
}
