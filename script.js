import {
  KEYBOARD,
  KEYS,
  OPERATION_INPUT,
  OPERATION_OUTPUT,
  AUTHORIZED_VALUES,
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
        // e.preventDefault();
        calc(OPERATION_INPUT.value);
      }
    });
  }
});
const SPECIAL_KEYS_MAP = {
  C: () => {
    OPERATION_INPUT.value = "";
    OPERATION_OUTPUT.innerText = 0;
  },
  del: () => {
    let deletion = OPERATION_INPUT.value.length - 1;
    let new_val = OPERATION_INPUT.value.substring(0, deletion);
    OPERATION_INPUT.value = new_val;
  },
  X: () => (OPERATION_INPUT.value += "*"),
  power: () => (OPERATION_INPUT.value += "**"),
  "=": () => calc(OPERATION_INPUT.value),
};

function calc(text) {
  try {
    let result = eval(text);
    if(result === undefined) OPERATION_OUTPUT.innerText = 0
    else OPERATION_OUTPUT.innerText = "=" + result;
  } catch (e) {
    OPERATION_OUTPUT.innerText = "Error";
  }
}

function fillInput(text) {
  OPERATION_INPUT.value += text;
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
