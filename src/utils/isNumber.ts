const regx = /^[+-]?\d+(\.\d+)?$/;

export function isNumber(text: string): boolean {
  return regx.test(text);
}