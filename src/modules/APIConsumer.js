export const fetchScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FZlZFxD85jF0PtD3QUx4/scores/');
  const scores = await response.json();
  scores.result.sort((a, b) => b.score - a.score);

  return scores.result;
};

export const postScore = async (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FZlZFxD85jF0PtD3QUx4/scores/', {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};
