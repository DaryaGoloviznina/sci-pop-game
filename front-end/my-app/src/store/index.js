import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { auth } from "./auth/reducers";
import { game } from "./game/reducers";
const composeEnhancers = composeWithDevTools(); // импорт reduxDevTools
const reducers = combineReducers({
  auth, // по этим ключам, потом обращаемся в подредьюсеры
  game,
});
export const store = createStore(reducers, composeEnhancers);
