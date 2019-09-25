import {isMutant} from '../lib/isMutant'

test("test if a string chain does not match a mutant ADN", () => {
  const chain = ["ATGCGA", "CAGTGC", "TTAGGT", "AGATGG", "CGCCTA", "TCACTG"];
  const isMutantDNA = isMutant(chain);
  expect(isMutantDNA).toEqual(false);
});

test("test if a string chain does match a mutant ADN", () => {
  const chain = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
  const isMutantDNA = isMutant(chain);
  expect(isMutantDNA).toEqual(true);
});