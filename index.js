import cipher from './cipher.js';

const buttonCode = document.getElementById('buttonEncode');
buttonCode.addEventListener('click', encodeText);

function encodeText() {
  const word = document.getElementById('inputText').value;
  const offset = parseInt(document.getElementById('inputOffset').value);
  document.getElementById('ConvertedText').value = cipher.encode(offset, word);
}

const buttonDecod = document.getElementById('buttonDecode');
buttonDecod.addEventListener('click', decodeText);

function decodeText() {
  const word = document.getElementById('inputText').value;
  const offset = parseInt(document.getElementById('inputOffset').value);
  document.getElementById('ConvertedText').value = cipher.decode(offset, word);
}

const buttonClean = document.getElementById('buttonReset');
buttonClean.addEventListener('click', reset);

function reset() {
  document.getElementById('mensage').reset();
  document.getElementById('convertedText').reset();
}
