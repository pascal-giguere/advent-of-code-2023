const numbers: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const NUMBER_REGEX = new RegExp(`(\\d)`, 'g');
const NUMBER_AS_WORD_REGEX = new RegExp(`(?=(\\d|(?:${Object.keys(numbers).join('|')})))`, 'g');

export function calculateCalibrationValueSum(input: string, config?: { parseNumbersAsWords?: boolean }) {
  const parseNumbersAsWords: boolean = config?.parseNumbersAsWords ?? false;
  const lines: string[] = input.trim().split('\n');
  return lines.reduce((sum: number, line: string) => sum + extractCalibrationValue(line, parseNumbersAsWords), 0);
}

function extractCalibrationValue(line: string, parseNumbersAsWords: boolean): number {
  const regex: RegExp = parseNumbersAsWords ? NUMBER_AS_WORD_REGEX : NUMBER_REGEX;
  const matches: string[] = Array.from(line.matchAll(regex)).map((match: RegExpMatchArray) => match[1]);
  const firstNumber: number = parseNumber(matches[0], parseNumbersAsWords);
  const lastNumber: number = parseNumber(matches[matches.length - 1], parseNumbersAsWords);

  if (!isFinite(firstNumber) || !isFinite(lastNumber)) {
    throw new Error(`Could not parse line: ${line}`);
  }

  return parseInt(`${firstNumber}${lastNumber}`);
}

function parseNumber(str: string, parseNumbersAsWords: boolean): number {
  let parsed: number | undefined;
  if (parseNumbersAsWords) {
    parsed = numbers[str];
  }
  if (parsed === undefined) {
    parsed = parseInt(str);
  }
  return parsed;
}
