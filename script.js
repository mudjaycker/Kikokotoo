import {
  KEYBOARD,
  KEYS,
  OPERATION_INPUT,
  AUTHORIZED_VALUES,
  SPECIAL_KEYS_MAP,
  fillInput,
  calc,
} from "./constants.js";

window.addEventListener("load", () => {
  createKeyboard();
  let keys = document.getElementsByClassName("key");
  OPERATION_INPUT.addEventListener("keypress", (e) => {
    if (AUTHORIZED_VALUES.includes(e.key)) {
      if (e.key == "Enter") calc(e.target.value);
    } else {
      e.preventDefault();
    }
  });
  for (let key of keys) {
    key.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        calc(OPERATION_INPUT.value);
      }
    });
  }
});

function createKey(keyObject) {
  let key = document.createElement("button");
  key.classList = "key";
  key.id = keyObject.id;
  key.innerText = keyObject.text;
  if (!Object.keys(SPECIAL_KEYS_MAP).includes(keyObject.text))
    key.onclick = () => fillInput(keyObject.text);
  else key.onclick = SPECIAL_KEYS_MAP[keyObject.text];
  return key;
}

function createKeysRow() {
  let row = document.createElement("section");
  row.classList = "keys-row";
  return row;
}

function createKeyboard() {
  KEYS.map((key, _) => {
    let row = createKeysRow();
    key.map((k, _) => {
      row.appendChild(createKey(k));
      KEYBOARD.appendChild(row);
    });
  });
}
