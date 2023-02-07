import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { notesReducer } from './noteReducer';

const rootReducer = combineReducers({
  notesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
  return store;
}