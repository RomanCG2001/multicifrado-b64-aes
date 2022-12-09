import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EncodeB64 from "./components/encodeB64";
import DecodeB64 from "./components/decodeB64";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EncodeB64 />
    <DecodeB64 />
  </React.StrictMode>
);
