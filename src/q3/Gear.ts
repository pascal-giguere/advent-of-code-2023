import { ParsedCharacter } from "./ParsedCharacter";
import { ParsedNumber } from "./ParsedNumber";

export class Gear {
  constructor(
    public number1: number,
    public number2: number,
  ) {}

  gearRatio(): number {
    return this.number1 * this.number2;
  }

  static fromCharacter(char: ParsedCharacter, partNumbers: ParsedNumber[]): Gear | undefined {
    if (char.value !== "*") {
      return undefined;
    }
    const adjacentNumbers: ParsedNumber[] = partNumbers.filter((number) =>
      number.isAdjacentToCoordinate(char.coordinates),
    );
    if (adjacentNumbers.length !== 2) {
      return undefined;
    }
    return new Gear(adjacentNumbers[0].value, adjacentNumbers[1].value);
  }
}
