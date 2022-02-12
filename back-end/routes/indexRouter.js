const express = require('express');
const router = express.Router();
const { getTopics, getQuestions } = require('../controllers/indexController');
const { Game } = require('../db/models');

router.get('/topics', getTopics);
router.get('/questions', getQuestions);
router.post('/gameId', async (req, res) => {
  const gameId = await Game.create({
    user_id: req.body.userId,
    completed: false
  });

  console.log(gameId)
  res.json(gameId.id);
});

router.post('/gameData', async (req, res) => {
  const gameData = await Game.findByPk(req.body.gameId);
  console.log("HJK", gameData)

  gameData.completed = true;
  gameData.total_score = req.body.points;
  console.log()
  console.log("HJKrew", gameData)

  await gameData.save();

  res.end();
});

module.exports = router;






