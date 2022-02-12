import ACTypes from '../types';

const initialState = {
  user: null
};

//выносим логику из компонентов - сюда

export const auth = (state = initialState, action) => {
  //debugger;
  switch (action.type) {

    case ACTypes.CREATE_USER:
      return {...state, user: action.payload.user}

    default:
      return state; //сохраняет состояние в память к-ра
  }
};

