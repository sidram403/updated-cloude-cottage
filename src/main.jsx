import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CottageProvider } from "./context/cottageSelect.jsx";
import { GuestProvider } from "./context/guestSelect.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CottageProvider>
    <GuestProvider>
      <App />
    </GuestProvider>
  </CottageProvider>
);
