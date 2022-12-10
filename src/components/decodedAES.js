import React from "react";
import "../styles/App.css";
import { Textarea } from "evergreen-ui";
import * as CryptoJS from "crypto-js";

export default function DecodeB64() {
  const [summary, setSummary] = React.useState("");
  const [summary2, setSummary2] = React.useState("");
  var bytes = CryptoJS.AES.decrypt(summary, summary2);
  let decoded = bytes.toString(CryptoJS.enc.Utf8);
  return (
    <div className="decodedAreaAES">
      <div className="textAreab64">
        <div className="mainTitle">
          <h2>Descifrador en AES</h2>
        </div>
        <br></br>
        <Textarea
          width="40%"
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Ingresa aquí el texto cifrado"
        />
        <Textarea
          width="40%"
          onChange={(e) => setSummary2(e.target.value)}
          placeholder="Ingresa aquí su contraseña"
        />
        <br></br>
        <div className="textEncode">
          <h4>Texto descifrado: {decoded}</h4>
        </div>
      </div>
    </div>
  );
}
