import {
  KEYBOARD,
  KEYS,
  operationInput,
  operationOutput,
} from "./constants.js";

window.addEventListener("load", () => {
  createKeyboard();
  let keys = document.getElementsByClassName("key");
  operationInput.addEventListener("keypress", (e) => {
    if (e.code == "Enter") calc(e.target.value);
  });
  for (let key of keys) {
    key.addEventListener("keypress", (e) => {
      if (e.code == "Enter") {
        e.preventDefault();
        calc(operationInput.value);
      }
    });
  }
});
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
  "=": () => calc(operationInput.value),
};

function calc(text) {
  try {
    operationOutput.innerText = "=" + eval(text);
  } catch (e) {
    operationOutput.innerText = "Error";
  }
}

function fillInput(text) {
  operationInput.value += text;
}

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
