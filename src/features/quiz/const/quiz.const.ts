import { QuizQuestions } from "../types/quiz.type";

export const QUIZ: QuizQuestions = {
    id: 'quiz:1',
    questions: [
        {
            id: 'genre',
            q: 'MOVIE_GENRE',
            type: 'checkbox',
            question: 'Your favorite movie genre?',
            options: [
                { id: '1', title: '🎭 Drama' },
                { id: '2', title: '🤹 Comedy' },
                { id: '3', title: '🥷 Action' },
                { id: '4', title: '🧟 Thriller' },
                { id: '5', title: '👨‍🔬 Science fiction' },
            ]
        },
        {
            id: 'title',
            q: 'MOVIE_TITLE',
            type: 'input',
            question: 'Enter Movie Title',
            placeholder: 'Movie title here',
        }
    ],
    total: 2,
}