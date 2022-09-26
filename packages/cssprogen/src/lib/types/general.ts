type Length = string | number;

interface Styles {
  [ruleOrSelector: string]: string | number | Styles;
}

export { Length, Styles };
