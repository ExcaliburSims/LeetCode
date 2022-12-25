const isValidCell = (grid, row, col) => {
  if (grid[row] != null && grid[row][col] != null) {
    return grid[row][col];
  }
  return false;
};

const dfs = (grid, row, col) => {
  if (!this.isValidCell(grid, row, col)) {
    return;
  }
  grid[row][col] = 0;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let [i, j] of directions) {
    this.dfs(grid, row + i, col + j);
  }
};

const numIslands = (grid) => {
  let result = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j]) {
        result++;
        this.dfs(grid, i, j);
      }
    }
  }
  console.log(result);
  return result;
};

const tab = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(numIslands(tab));
