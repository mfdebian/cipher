const encode = (offset, string) => {
  if (!offset || !string || typeof(string) !== "string") {
    throw new TypeError('Wrong type', "cipher.js", 2)
  }
  
  let encoded = "";
  Array.from(string).forEach((_, index) => {
    if(string.charCodeAt(index) >= 65 && string.charCodeAt(index) < 65+26) {
      encoded += String.fromCharCode((string.charCodeAt(index)-65+offset)%26+65);
    }
  });
  return encoded;
}

const cipher = {
  encode,
  decode: (offset, string) => encode(26 - (offset % 26), string)
}

export default cipher;
