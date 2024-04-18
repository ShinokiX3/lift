import { QuizAnswer } from 'features/quiz/types/quiz.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuizInitialState, SetupPayload } from './quiz.type';

const initialState: QuizInitialState = {
	currentQuestion: Number(new URLSearchParams(window.location.search).get('qid')) ?? 0,
	answers: JSON.parse(localStorage.getItem('answers') ?? '') ?? [],
	percentage: 0,
	questions: [],
	total: 1,
};

const calcPercentage = (current: number, total: number) => (current) / total * 100;

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setupQuiz: (state, action: PayloadAction<SetupPayload>) => {
			const { questions, total } = action.payload;

			state.total = total;
			state.questions = questions;
			state.percentage = calcPercentage(state.currentQuestion, state.total);
		},
		setAnswer: (state, action: PayloadAction<QuizAnswer>) => {
			const { id, answers } = action.payload;

			const index = state.answers.findIndex(el => el.id === id);
			
			if (index !== -1) 
				state.answers[index] = { id, answers };
			else 
				state.answers.push(action.payload);
		},
		nextQuestion: (state) => {
			state.currentQuestion += 1;
			state.percentage = calcPercentage(state.currentQuestion, state.total);
		},
		previousQuestion: (state) => {
			state.currentQuestion -= 1;
			state.percentage = calcPercentage(state.currentQuestion, state.total);
		},
		completeQuiz: (state) => {
			state.answers = [];
			state.currentQuestion = 0;
			state.percentage = 10;
		}
	},
});