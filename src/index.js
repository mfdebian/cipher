import cipher from './cipher.js';

const handleEncode = () => {
  let encodeResultSpan = document.getElementById("encode-result");
  encodeResultSpan.textContent = "";
  let offset = document.getElementById("encode-offset").value;
  offset = parseInt(offset);
  let string = document.getElementById("encode-string").value;
  let encodeErrorParagraph = document.getElementById("encode-error");
  encodeErrorParagraph.textContent = "";
  if(offset===0) {
    encodeErrorParagraph.textContent = "Offset can't be 0";
  } else if(offset<0) {
    encodeErrorParagraph.textContent = "Offset can't be negative";
  } else if(!offset && offset !==0 || !string) {
    encodeErrorParagraph.textContent = "Inputs can't be empty";
  } else if(string !== string.toUpperCase()) {
    encodeErrorParagraph.textContent = "Text must be uppercase";
  } else {
    encodeResultSpan.textContent = cipher.encode(offset, string);
  }
}

let encodeButton = document.getElementById("encode-button");
encodeButton.addEventListener("click", handleEncode, false);

const handleDecode = () => {
  let decodeResultSpan = document.getElementById("decode-result");
  decodeResultSpan.textContent = "";
  let offset = document.getElementById("decode-offset").value;
  offset = parseInt(offset);
  let string = document.getElementById("decode-string").value;
  let decodeErrorParagraph = document.getElementById("decode-error");
  decodeErrorParagraph.textContent = "";
  if(offset===0) {
    decodeErrorParagraph.textContent = "Offset can't be 0";
  } else if(offset<0) {
    decodeErrorParagraph.textContent = "Offset can't be negative";
  } else if(!offset && offset !==0 || !string) {
    decodeErrorParagraph.textContent = "Inputs can't be empty";
  } else if(string !== string.toUpperCase()) {
    decodeErrorParagraph.textContent = "Text must be uppercase";
  } else {
    decodeResultSpan.textContent = cipher.decode(offset, string);
  }
}

let decodeButton = document.getElementById("decode-button");
decodeButton.addEventListener("click", handleDecode, false);
