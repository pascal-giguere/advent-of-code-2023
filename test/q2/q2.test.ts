import fs from 'node:fs';
import path from 'node:path';
import { main } from '../../src/q2';

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple.txt'), 'utf-8');
const SIMPLE2_INPUT = fs.readFileSync(path.join(__dirname, 'input-simple-2.txt'), 'utf-8');
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, 'input-complex.txt'), 'utf-8');

describe('q2', () => {
  describe('Part 1', () => {
    it('', async () => {
      expect(main(SIMPLE_INPUT)).toEqual(142);
    });
  });

  describe('Part 2', () => {});
});
