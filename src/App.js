import React from "react";
import "./App.css";
import { Textarea } from "evergreen-ui";
import { decode as base64_decode, encode as base64_encode } from "base-64";

export default function App() {
  const [summary, setSummary] = React.useState("");
  let encoded = base64_encode(summary);
  return (
    <div className="textAreab64">
      <h4>Cifrador/Descifrador en Base64</h4>
      <Textarea
        width="40%"
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Ingresa aquí el texto"
      />
      <br></br>
      <p>Texto cifrado: {encoded}</p>
    </div>
  );
}
