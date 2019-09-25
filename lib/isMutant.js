const getDataSets = dataset => {
  const rows = dataset.map(entry => entry.split(""));
  const leftDiagonal = dataset.map((chain, index) => chain[index]);
  const rightDiagonal = dataset.reverse().map((chain, index) => chain[index]);

  const columns = dataset
    .map((_, index) => {
      return dataset.map((__) => __[index]).join("");
    })
    .map(e => e.split(""));

  const combinations = [...rows, ...columns, leftDiagonal, rightDiagonal];
  return combinations;
};
const countLetterOcurrence = chain => /([ATGC])\1{3,4}/.test(chain);

const countOcurrences = dataset => {
  const count = dataset.reduce((acc, entry) => {
      if (countLetterOcurrence(entry.join(""))) {
        return acc + 1
      }
      return acc
  },0);
  return count;
};


export const isMutant = dataset => {
  return countOcurrences(getDataSets(dataset)) > 1;
};


