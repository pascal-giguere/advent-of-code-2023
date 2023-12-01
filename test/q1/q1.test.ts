import fs from "node:fs";
import path from "node:path";
import {calculateCalibrationValueSum} from "../../src/q1";

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q1', () => {
  describe('Part 1', () => {
    it('calculates the sum of calibration values from a simple input', async () => {
      expect(calculateCalibrationValueSum(SIMPLE_INPUT)).toEqual(142);
    });

    it('calculates the sum of calibration values from a complex input', async () => {
      expect(calculateCalibrationValueSum(COMPLEX_INPUT)).toEqual(53194);
    });
  });
});
