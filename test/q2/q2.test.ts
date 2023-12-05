import fs from 'node:fs';
import path from 'node:path';
import { calculateMinimumSetPowersSum, calculatePossibleGamesSum } from '../../src/q2';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q2', () => {
  describe('Part 1', () => {
    it('calculates the sum of possible games from a simple input', async () => {
      expect(calculatePossibleGamesSum(SIMPLE_INPUT)).toEqual(8);
    });

    it('calculates the sum of possible games from a complex input', async () => {
      expect(calculatePossibleGamesSum(COMPLEX_INPUT)).toEqual(2204);
    });
  });

  describe('Part 2', () => {
    it('calculates the sum of powers of minimum sets from a simple input', async () => {
      expect(calculateMinimumSetPowersSum(SIMPLE_INPUT)).toEqual(2286);
    });

    it('calculates the sum of powers of minimum sets from a complex input', async () => {
      expect(calculateMinimumSetPowersSum(COMPLEX_INPUT)).toEqual(71036);
    });
  });
});
