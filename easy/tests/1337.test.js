const kWeakestRows = require('../problems/1337');

test('Example 1', () => {
  let mat = [[1,1,0,0,0],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1]];
  let k = 3;
  expect(kWeakestRows(mat, k)).toEqual([2,0,3]);
});

test('Example 2', () => {
  let mat = [[1,0,0,0],
  [1,1,1,1],
  [1,0,0,0],
  [1,0,0,0]];
  let k = 2;
  expect(kWeakestRows(mat, k)).toEqual([0,2]);
});

test('Example 3', () => {
  let mat = [[1,1,0],[1,0,0],[1,0,0],[1,1,1],[1,1,0],[0,0,0]];
  let k = 4;
  expect(kWeakestRows(mat, k)).toEqual([5,1,2,0]);
});