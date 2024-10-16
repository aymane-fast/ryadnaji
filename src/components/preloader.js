import React, { useEffect } from "react";
import { LOADERS } from "../data/loaders";

const usePreloader = () => {
  useEffect(() => {
    const preloader = document.querySelector("[data-preload]");
    const LOADER_INTERVAL = 1600;
    const LOADER_IMAGE = "./assets/images/my-logo.webp";
    const FALLBACK_TIMEOUT = 5000; // 5 seconds fallback timeout

    const cycleLoader = () => {
      const index = Math.floor(Math.random() * LOADERS.length);
      const selected = LOADERS[index];
      const selectedText = selected[0];

      setTimeout(() => {
        const textElement = preloader?.querySelector(".text");
        if (textElement) {
          textElement.classList.add("animateOut");
        }
      }, LOADER_INTERVAL - 300);

      const emojiElement = preloader?.querySelector(".emoji");
      const textElement = preloader?.querySelector(".text");

      if (textElement) textElement.remove();

      if (!emojiElement) {
        preloader?.insertAdjacentHTML('beforeend', `<div class="emoji"><img src="${LOADER_IMAGE}" width="110" height="90" class="spinning-logo" /></div>`);
      }
      preloader?.insertAdjacentHTML('beforeend', `<div class="text">${selectedText}</div>`);
    };

    const interval = setInterval(cycleLoader, LOADER_INTERVAL);
    cycleLoader();

    const handleLoad = () => {
      document.fonts.ready.then(() => {
        preloader?.classList.add("loaded");
        document.body.classList.add("loaded");
        clearInterval(interval); // Stop the cycle loader
      });
    };

    if (window.addEventListener) {
      window.addEventListener("load", handleLoad);
    } else {
      //Fallback for browsers that do not support window.addEventListener Set to 5 seconds
      setTimeout(() => {
        preloader?.classList.add("loaded");
        document.body.classList.add("loaded");
        clearInterval(interval); // Stop the cycle loader
      }, FALLBACK_TIMEOUT);
    }

    return () => {
      clearInterval(interval); // Stop the cycle loader
      if (window.removeEventListener) {
        window.removeEventListener("load", handleLoad);
      } else {
        // pass
      }
    };
  }, []);
};

export default function Preloader() {
  usePreloader();

  return (
    <div id="preloader" data-preload></div>
  );
}