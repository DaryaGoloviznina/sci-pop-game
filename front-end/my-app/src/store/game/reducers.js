import actionTypes from "../types";


const initState = {
  gameId: 0,
  questions: [],
  points: 0
};

export const game = (state = initState, action) => {
  switch (action.type) {

    case actionTypes.ADD_QUESTION_IN_ARR:
      let newArr = action.payload.ques.map((el) => {
        el.completed = false;
        return el
      });
      return {
        ...state, questions: newArr,
      };

    case actionTypes.ANSWERED_QUESTION:
      let answeredArr = state.questions.map((el) => {
        if(Number(action.payload.id) === el.id) {
          el.completed = true;
        }
        return el
      });
      return {
        ...state, questions: answeredArr,
      };

    case actionTypes.POINTS_CHANGE:
      let newScore = action.payload.score;
      return {
        ...state, points: newScore,
      };

    case actionTypes.ID_CHANGE:
      return {
        ...state, gameId: action.payload.id,
      };

    default:
      return state;
  }
};
