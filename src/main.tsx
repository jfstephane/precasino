import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// uses logo from public directory

// Set favicon to the El Rancho logo
(() => {
  try {
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/logoelranchoclean.png';
  } catch (e) {
    // noop: favicon setup failure should not block app rendering
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
