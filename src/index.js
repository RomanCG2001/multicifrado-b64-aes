import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EncodeB64 from "./components/encodeB64";
import DecodeB64 from "./components/decodeB64";
import EncodeAES from "./components/encodeAES";
import DecodeAES from "./components/decodedAES";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Multicifrado Base64 y AES - Equipo 2</h1>
    <EncodeB64 />
    <DecodeB64 />
    <EncodeAES />
    <DecodeAES />
  </React.StrictMode>
);
