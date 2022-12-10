import React from "react";
import "../styles/App.css";
import { Textarea } from "evergreen-ui";
import * as CryptoJS from "crypto-js";

export default function EncodeAES() {
  const [summary, setSummary] = React.useState("");
  const [summary2, setSummary2] = React.useState("");
  if (summary === "") {
    return (
      <div className="encodeAreaAES">
        <div className="textAreab64">
          <div className="mainTitle">
            <h2>Cifrador en AES</h2>
          </div>
          <br></br>
          <Textarea
            width="40%"
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Ingresa aquí el texto"
          />
          <Textarea
            width="40%"
            onChange={(e) => setSummary2(e.target.value)}
            placeholder="Ingresa aquí su contraseña"
          />
          <br></br>
          <div className="textEncode">
            <h4>Texto cifrado: {}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    let encoded = CryptoJS.AES.encrypt(summary, summary2).toString();
    return (
      <div className="encodeAreaAES">
        <div className="textAreab64">
          <div className="mainTitle">
            <h2>Cifrador en AES</h2>
          </div>
          <br></br>
          <Textarea
            width="40%"
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Ingresa aquí el texto"
          />
          <Textarea
            width="40%"
            onChange={(e) => setSummary2(e.target.value)}
            placeholder="Ingresa aquí su contraseña"
          />
          <br></br>
          <div className="textEncode">
            <h4>Texto cifrado: {encoded}</h4>
          </div>
        </div>
      </div>
    );
  }
}
