import React from "react";
import "../styles/App.css";
import { Textarea } from "evergreen-ui";
import { encode as base64_encode } from "base-64";
import { CopyToClipboard } from "react-copy-to-clipboard";


export default function EncodeB64() {
  const [summary, setSummary] = React.useState("");
  let encoded = base64_encode(summary);
  return (
    <div className="textAreab64">
      <div className="mainTitle">
        <h2>Cifrador en Base64</h2>
      </div>
      <br></br>
      <Textarea
        width="40%"
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Ingresa aquí el texto"
      />
      <br></br>
      <div className="textEncode">
        <h4>Texto cifrado: {encoded}</h4>
      </div>
      <CopyToClipboard text={encoded}>
          <button>Copiar texto cifrado</button>
        </CopyToClipboard>
    </div>
  );
}
