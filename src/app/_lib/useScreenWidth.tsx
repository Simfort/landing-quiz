"use client";

import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("resize", (e) => {
        setScreen(window.innerWidth);
      });
      setScreen(window.innerWidth);
    }
  }, [window.innerWidth]);
  return screen;
}
