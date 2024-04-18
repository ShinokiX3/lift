export type QuizQuestionType = 'checkbox' | 'input';

export interface QuizOption {
    id: string;
    title: string;
}

export interface QuizQuestion {
    id: string;
    q: string;
    type: QuizQuestionType;
    question: string;
    options?: QuizOption[];
    placeholder?: string;
}

export interface QuizQuestions {
    id: string; 
    questions: QuizQuestion[];
    total: number;
}

export interface QuizAnswer {
    id: string;
    answers: string[]
}