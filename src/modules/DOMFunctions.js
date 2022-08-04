import { fetchScores } from './APIConsumer.js';

const updateHTML = (container, scores) => {
  container.innerHTML = '';

  scores.forEach((entry) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.user}: ${entry.score}`;
    container.appendChild(listItem);
  });
};

export default async (scoreList) => {
  scoreList.list = await fetchScores();
  updateHTML(scoreList.container, scoreList.list);
};
