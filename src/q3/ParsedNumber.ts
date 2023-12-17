import { areCoordinatesAdjacent, Coordinates } from "./Coordinates.ts";

export class ParsedNumber {
  constructor(
    public coordinates: Coordinates[],
    public value: number,
  ) {}

  static fromMatch(match: RegExpMatchArray, lineIndex: number): ParsedNumber {
    const value: number = parseInt(match[0]);
    const coordinates: Coordinates[] = this.numberCoordinates(lineIndex, match.index, match[0].length);
    return new ParsedNumber(coordinates, value);
  }

  isAdjacentToCoordinate(testCoordinates: Coordinates): boolean {
    return this.coordinates.some((coordinate: Coordinates) => areCoordinatesAdjacent(coordinate, testCoordinates));
  }

  private static numberCoordinates(lineIndex: number, startIndex: number, length: number): Coordinates[] {
    const coordinates: Coordinates[] = [];
    for (let i = 0; i < length; i++) {
      coordinates.push({ x: startIndex + i, y: lineIndex });
    }
    return coordinates;
  }
}
