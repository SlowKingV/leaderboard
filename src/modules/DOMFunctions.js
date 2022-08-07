import { fetchScores } from './APIConsumer.js';

const updateHTML = (container, scores) => {
  container.innerHTML = '';

  scores.forEach((entry, index) => {
    const listItem = document.createElement('li');
    const content = [
      document.createElement('div'),
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
    ];

    content[0].setAttribute('class', 'graph');
    content[1].setAttribute('class', 'position');
    content[1].textContent = `${index + 1}. `;
    content[2].setAttribute('class', 'user');
    content[2].textContent = entry.user;
    content[3].setAttribute('class', 'score');
    content[3].textContent = entry.score;
    listItem.append(...content);
    container.appendChild(listItem);
  });
};

export const calcWidth = (score, maxScore) => (score * 100) / maxScore;

export const updateScores = async (scoreList) => {
  scoreList.list = await fetchScores();
  updateHTML(scoreList.container, scoreList.list);
};
