import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './quiz/quiz.slice';

const rootReducer = combineReducers({
	quiz: quizSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;
