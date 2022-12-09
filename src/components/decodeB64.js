import React from "react";
import { Textarea } from "evergreen-ui";
import { decode as base64_decode, encode as base64_encode } from "base-64";

export default function DecodeB64() {
  const [summary2, setSummary2] = React.useState("");
  let decoded = base64_decode(summary2);
  return (
    <div className="textAreab64">
      <div className="mainTitle">
        <h2>Descifrador en Base64</h2>
      </div>
      <br></br>
      <Textarea
        width="40%"
        onChange={(e) => setSummary2(e.target.value)}
        placeholder="Ingresa aquí el texto cifrado"
      />
      <br></br>
      <div className="textEncode">
        <h4>Texto descifrado: {decoded}</h4>
      </div>
    </div>
  );
}
