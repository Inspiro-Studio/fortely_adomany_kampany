exports.replaceHungarianChars = text =>
  text
    .replace(/á/gi, "a")
    .replace(/é/gi, "e")
    .replace(/í/gi, "i")
    .replace(/ü/gi, "u")
    .replace(/ű/gi, "u")
    .replace(/ö/gi, "o")
    .replace(/ő/gi, "o")
