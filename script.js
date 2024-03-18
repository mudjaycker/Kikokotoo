import { KEYBOARD, KEYS } from "./constants.js";
function createKey(keyObject) {
  let key = document.createElement("button");
  key.classList = keyObject.className;
  key.id = keyObject.id
  key.innerText = keyObject.text;
  return key;
}

function createKeysRow() {
  let row = document.createElement("section");
  row.classList = "keys-row";
  return row;
}

function createKeyboard() {
  for (let key of KEYS) {
    let row = createKeysRow();
    for (let k of key) {
      row.appendChild(createKey(k));
      KEYBOARD.appendChild(row);
    }
  }
}
createKeyboard();
