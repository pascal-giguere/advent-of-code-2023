import { ParsedNumber } from "./ParsedNumber.ts";
import { ParsedCharacter } from "./ParsedCharacter.ts";

type ParsedInput = {
  numbers: ParsedNumber[];
  partNumbers: ParsedNumber[];
  specialChars: ParsedCharacter[];
};

export function calculatePartNumbersSum(input: string): number {
  const parsed: ParsedInput = parseInput(input);
  return parsed.partNumbers.reduce((acc, number) => acc + number.value, 0);
}

export function calculateGearRatiosSum(input: string): number {
  return 0;
}

function parseInput(input: string): ParsedInput {
  const lines: string[] = input.trim().split("\n");
  const numbers: ParsedNumber[] = lines.map(parseNumbers).flat();
  const specialChars: ParsedCharacter[] = lines.map(parseSpecialChar).flat();
  const partNumbers = numbers.filter((number) =>
    specialChars.some((char) => number.isAdjacentToCoordinate(char.coordinates)),
  );
  return {
    numbers,
    partNumbers,
    specialChars,
  };
}

function parseNumbers(line: string, lineIndex: number): ParsedNumber[] {
  const matches: RegExpMatchArray[] = Array.from(line.matchAll(/(\d+)/g));
  return matches.map((match) => ParsedNumber.fromMatch(match, lineIndex));
}

function parseSpecialChar(line: string, lineIndex: number): ParsedCharacter[] {
  return Array.from(line)
    .map((char, charIndex) => new ParsedCharacter({ x: charIndex, y: lineIndex }, char))
    .filter(ParsedCharacter.isSpecialChar);
}
