export function calculateCalibrationValueSum(input: string) {
  const lines: string[] = input.trim().split('\n');
  return lines.reduce((sum: number, line: string) => sum + extractCalibrationValue(line), 0);
}

function extractCalibrationValue(line: string): number {
  const firstDigit: string = Array.from(line).find((char) => char.match(/\d/))!;
  const lastDigit: string = Array.from(line).reverse().find((char) => char.match(/\d/))!;
  return parseInt(firstDigit + lastDigit);
}
