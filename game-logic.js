const sample = ["o","x","o",
                "x","o","x",
                "o","x","o"];

const solutions = [
                  [[1,2],[4,8],[3,6]],
                  [[4,7],[0,2]],
                  [[1,0],[4,6],[5,8]],
                  [[0,6],[4,5]],
                  [[0,8],[1,7],[2,6],[3,5]],
                  [[2,8],[3,4]],
                  [[0,3],[2,4],[7,8]],
                  [[1,4],[6,8]],
                  [[0,4],[2,5],[6,7]]
                  ];

const hasWon = function(board, move, solutions) {
  let solutionSet = solutions[move];
  for (let i = 0; i < solutionSet.length; i++) {
        if (board[solutionSet[i][0]] === board[solutionSet[i][1]] &&
          board[solutionSet[i][0]] === board[move]) {
          return true;
        }
  }
  return false;
};
