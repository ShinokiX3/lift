import { QuizAnswer, QuizQuestion } from "features/quiz/types/quiz.type";

export interface QuizInitialState {
	currentQuestion: number;
	answers: QuizAnswer[];
	percentage: number;
	questions: QuizQuestion[];
	total: number;
}

export interface SetupPayload { 
	questions: QuizQuestion[];
	total: number;
}