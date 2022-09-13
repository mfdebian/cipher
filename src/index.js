import cipher from './cipher.js';

const handleEncodeOrDecode = (encodeOrDecode) => {
  let resultSpan = document.getElementById(`${encodeOrDecode}-result`);
  resultSpan.textContent = "";
  let offset = document.getElementById(`${encodeOrDecode}-offset`).value;
  offset = parseInt(offset);
  let string = document.getElementById(`${encodeOrDecode}-string`).value;
  let errorParagraph = document.getElementById(`${encodeOrDecode}-error`);
  errorParagraph.textContent = "";
  if(offset === 0) {
    errorParagraph.textContent = "Offset can't be 0";
  } else if(offset < 0) {
    errorParagraph.textContent = "Offset can't be negative";
  } else if(!offset && offset !== 0 || !string) {
    errorParagraph.textContent = "Inputs can't be empty";
  } else if(string !== string.toUpperCase()) {
    errorParagraph.textContent = "Text must be uppercase";
  } else {
    if (encodeOrDecode === "encode") {
      resultSpan.textContent = cipher.encode(offset, string)
    } else if(encodeOrDecode === "decode") {
      resultSpan.textContent = cipher.decode(offset, string)
    }
  }
}

let encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", ()=>handleEncodeOrDecode("encode"), false);

let decodeButton = document.getElementById("decode-button");
decodeButton.addEventListener("click", ()=>handleEncodeOrDecode("decode"), false);
