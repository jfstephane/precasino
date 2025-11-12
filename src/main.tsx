import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logoElRancho from "@/assets/logoelrancho.webp";

// Set favicon to the El Rancho logo
(() => {
  try {
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/webp';
    link.href = logoElRancho;
  } catch (e) {
    // noop: favicon setup failure should not block app rendering
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
