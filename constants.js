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
    },
    {
      text: "power",
      id: "key-power",
    },
    {
      text: "X",
      id: "key-X",
    },
    {
      text: "del",
      id: "key-del",
    },
  ],
  [
    {
      text: "7",
      id: "key-7",
    },
    {
      text: "8",
      id: "key-8",
    },
    {
      text: "9",
      id: "key-9",
    },
    {
      text: "-",
      id: "key-minus",
    },
  ],
  [
    {
      text: "4",
      id: "key-4",
    },
    {
      text: "5",
      id: "key-5",
    },
    {
      text: "6",
      id: "key-6",
    },
    {
      text: "+",
      id: "key-plus",
    },
  ],
  [
    {
      text: "1",
      id: "key-1",
    },
    {
      text: "2",
      id: "key-2",
    },
    {
      text: "3",
      id: "key-3",
    },
    {
      text: "=",
      id: "key-equal",
    },
  ],
  [
    {
      text: "(",
      id: "key-lparen",
    },
    {
      text: "0",
      id: "key-0",
    },
    {
      text: ".",
      id: "key-point",
    },
    {
      text: ")",
      id: "key-rparen",
    },
    ,
  ],
];
