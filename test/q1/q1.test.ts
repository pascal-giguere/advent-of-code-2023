import fs from "node:fs";
import path from "node:path";
import {calculateCalibrationValueSum} from "../../src/q1";

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

it('basic test', async () => {
  expect(calculateCalibrationValueSum(SIMPLE_INPUT)).toEqual(77);
});
