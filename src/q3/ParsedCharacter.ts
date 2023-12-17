import { Coordinates } from "./Coordinates.ts";

const SPECIAL_CHARS = ["!", "@", "#", "$", "%", "?", "&", "*", "+", "-", "=", ">", "<", "/", "\\"];

export class ParsedCharacter {
  constructor(
    public coordinates: Coordinates,
    public value: string,
  ) {}

  static isSpecialChar(char: ParsedCharacter): boolean {
    return SPECIAL_CHARS.includes(char.value);
  }
}
