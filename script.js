import {
  KEYBOARD,
  KEYS,
  operationInput,
  operationOutput,
} from "./constants.js";

window.addEventListener("load", createKeyboard)

function fillInput(text) {
  operationInput.value += text;
}

const SPECIAL_KEYS_MAP = {
  C: () => {
    operationInput.value = "";
    operationOutput.innerText = 0;
  },
  del: () => {
    let deletion = operationInput.value.length - 1;
    let new_val = operationInput.value.substring(0, deletion);
    operationInput.value = new_val;
  },
  X: () => (operationInput.value += "*"),
  mod: () => (operationInput.value += "%"),
  "=": () => {
    let result = eval(operationInput.value);
    operationOutput.innerText = "=" + result;
  },
};

function createKey(keyObject) {
  let key = document.createElement("button");
  key.classList = keyObject.className;
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

