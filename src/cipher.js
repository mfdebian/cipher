const cipher = {
  encode: (offset, string) => {
    if (!offset || !string || typeof(string) !== "string") {
      throw new TypeError('Wrong type', "cipher.js", 4)
    }
    
    let encoded = "";
    Array.from(string).forEach((_, index) => {
      if(string.charCodeAt(index) >= 65 && string.charCodeAt(index) < 65+26) {
        encoded += String.fromCharCode((string.charCodeAt(index)-65+offset)%26+65);
      }
    });
    return encoded;
  },
  decode: (offset, string) => {
    if (!offset || !string || typeof(string) !== "string") {
      throw new TypeError('Wrong type', "cipher.js", 4)
    }

    let decoded = "";
    Array.from(string).forEach((_, index) => {
      if(string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 65+26) {
        decoded += String.fromCharCode((string.charCodeAt(index)-65+26-getRangeOffset(offset))%26+65);
      }
    });
    return decoded;
  }
}

const getRangeOffset = (offset) => {
  let normalizedOffset = offset%26;
  return normalizedOffset;
}

export default cipher;
