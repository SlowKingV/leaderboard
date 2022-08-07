// Import Assets
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import './style.css';

// Import modules
import ScoreList from './modules/ScoreList.js';
import { calcWidth, updateScores } from './modules/DOMFunctions.js';
import { postScore } from './modules/APIConsumer.js';

// Create new Instance of ScoreList
const scoresContainer = document.getElementById('score-list');
const scoreList = new ScoreList(scoresContainer);

const setGraph = () => {
  const maxScore = scoreList.list[0].score;
  const listItems = Array.from(scoresContainer.children);

  listItems.forEach((item, index) => {
    item.children[0].style.width = `${calcWidth(scoreList.list[index].score, maxScore)}%`;
  });
};

// Update scores on page load
window.onload = async () => {
  await updateScores(scoreList);
  setGraph();
};

// Update scores when clicking on the 'Refresh' button
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', async () => {
  await updateScores(scoreList);
  setGraph();
});

// Post data to API on form submit
const userInput = document.getElementById('user-input');
const scoreInput = document.getElementById('score-input');
const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await postScore(userInput.value, scoreInput.value);
  userInput.value = '';
  scoreInput.value = '';
});
