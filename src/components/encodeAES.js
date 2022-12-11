import React from "react";
import "../styles/App.css";
import { Textarea } from "evergreen-ui";
import * as CryptoJS from "crypto-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    let encoded = CryptoJS.AES.encrypt(
      JSON.stringify(summary),
      summary2
    ).toString();
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
            className="password1"
            width="40%"
            onChange={(e) => setSummary2(e.target.value)}
            placeholder="Ingresa aquí su contraseña"
          />
          <br></br>
          <div className="textEncode">
            <h4>Texto cifrado: {encoded}</h4>
          </div>
          <CopyToClipboard text={encoded}>
            <button>Copiar texto cifrado</button>
          </CopyToClipboard>
          <div className="textEncode2">
            <h4>Contraseña: {summary2}</h4>
          </div>
          <CopyToClipboard className= "passwordButton" text={summary2}>
          <button>Copiar contraseña</button>
        </CopyToClipboard>
        </div>
      </div>
    );
  }
}
