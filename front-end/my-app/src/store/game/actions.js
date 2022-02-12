import actionTypes from "../types";

export const createQuestionsARrAC = (arr) => ({ type: actionTypes.ADD_QUESTION_IN_ARR, payload: { ques: arr } });

export const answeredQuestionAC = (id) => ({ type: actionTypes.ANSWERED_QUESTION, payload: { id: id } });

export const changePointsAC = (score) => ({ type: actionTypes.POINTS_CHANGE, payload: { score: score } });

export const changeIdAC = (id) => ({ type: actionTypes.ID_CHANGE, payload: { id: id } });
