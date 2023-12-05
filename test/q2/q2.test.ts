import fs from 'node:fs';
import path from 'node:path';
import { calculatePossibleGamesSum } from '../../src/q2';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const SIMPLE2_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple-2.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q2', () => {
  describe('Part 1', () => {
    it('calculates the sum of possible games from a simple input', async () => {
      expect(calculatePossibleGamesSum(SIMPLE_INPUT)).toEqual(8);
    });

    it('calculates the sum of possible games from a complex input', async () => {
      expect(calculatePossibleGamesSum(COMPLEX_INPUT)).toEqual(8);
    });
  });

  describe('Part 2', () => {});
});
