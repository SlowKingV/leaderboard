// Import Assets
import './style.css';

// Import modules
import ScoreList from './modules/ScoreList.js';
import updateScores from './modules/DOMFunctions.js';
import { postScore } from './modules/APIConsumer.js';

// Create new Instance of ScoreList
const scoresContainer = document.getElementById('score-list');
const scoreList = new ScoreList(scoresContainer);

// Update scores on page load
window.onload = () => {
  updateScores(scoreList);
};

// Update scores when clicking on the 'Refresh' button
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => { updateScores(scoreList); });

// Post data to API on form submit
const userInput = document.getElementById('user-input');
const scoreInput = document.getElementById('score-input');
const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  postScore(userInput.value, scoreInput.value)
    .then(() => {
      userInput.value = '';
      scoreInput.value = '';
    });
});
