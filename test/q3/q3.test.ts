import fs from "node:fs";
import path from "node:path";
import { calculatePartNumbersSum } from "../../src/q3/index.ts";

const SIMPLE_INPUT = fs.readFileSync(path.join(__dirname, "input-simple.txt"), "utf-8");
const COMPLEX_INPUT = fs.readFileSync(path.join(__dirname, "input-complex.txt"), "utf-8");

describe("q3", () => {
  describe("Part 1", () => {
    it("calculates the sum of part numbers from a simple input", () => {
      expect(calculatePartNumbersSum(SIMPLE_INPUT)).toEqual(4361);
    });

    it("calculates the sum of part numbers from a complex input", () => {
      expect(calculatePartNumbersSum(COMPLEX_INPUT)).toEqual(530495);
    });
  });

  describe("Part 2", () => {});
});
