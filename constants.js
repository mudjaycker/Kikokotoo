export const KEYBOARD = document.getElementById("keyboard");
export const OPERATION_INPUT = document.getElementById("operation-input");
export const OPERATION_OUTPUT = document.getElementById("operation-output");
export const SPECIAL_KEYS_MAP = {
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
export const AUTHORIZED_VALUES = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "Enter",
  "(",
  ")",
  ".",
];
export const KEYS = [
  [
    {
      text: "C",
      id: "key-C",
      className: "key",
    },
    {
      text: "power",
      id: "key-power",
      className: "key",
    },
    {
      text: "X",
      id: "key-X",
      className: "key",
    },
    {
      text: "del",
      id: "key-del",
      className: "key",
    },
  ],
  [
    {
      text: "7",
      id: "key-7",
      className: "key",
    },
    {
      text: "8",
      id: "key-8",
      className: "key",
    },
    {
      text: "9",
      id: "key-9",
      className: "key",
    },
    {
      text: "-",
      id: "key-minus",
      className: "key",
    },
  ],
  [
    {
      text: "4",
      id: "key-4",
      className: "key",
    },
    {
      text: "5",
      id: "key-5",
      className: "key",
    },
    {
      text: "6",
      id: "key-6",
      className: "key",
    },
    {
      text: "+",
      id: "key-plus",
      className: "key",
    },
  ],
  [
    {
      text: "1",
      id: "key-1",
      className: "key",
    },
    {
      text: "2",
      id: "key-2",
      className: "key",
    },
    {
      text: "3",
      id: "key-3",
      className: "key",
    },
    {
      text: "=",
      id: "key-equal",
      className: "key",
    },
  ],
  [
    {
      text: "(",
      id: "key-lparen",
      className: "key",
    },
    {
      text: "0",
      id: "key-0",
      className: "key",
    },
    {
      text: ".",
      id: "key-point",
      className: "key",
    },
    {
      text: ")",
      id: "key-rparen",
      className: "key",
    },
    ,
  ],
];
