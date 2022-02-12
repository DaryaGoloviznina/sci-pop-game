const { Topic, Question } = require('../db/models');

exports.getTopics = async (req, res, next) => {
  const list = await Topic.findAll({ raw: true});
  // console.log(list);
  res.json(list);
}
 
exports.getQuestions = async (req, res, next) => {
  // console.log('зашли')
  const listQ = await Question.findAll({ raw: true});
  // console.log(listQ);
  res.json(listQ);
}


