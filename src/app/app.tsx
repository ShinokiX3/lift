/* eslint-disable react-hooks/exhaustive-deps */
import { useActions } from 'hooks/useActions';
import { useEffect } from 'react';
import cls from './app.module.scss';
import Header from 'widgets/header/ui/header';
import Movies from 'screen/movies/ui/movies';
import { QUIZ } from 'features/quiz/const/quiz.const';
import Quiz from 'features/quiz/ui/main/quiz';

const App = () => {
	const { setupQuiz } = useActions();

	useEffect(() => {
		setupQuiz({ questions: QUIZ.questions, total: QUIZ.total });
	}, []);

	return (
		<main className={cls.app}>
			<div className={cls.container}>
				<Header />
				<Quiz Render={Movies}/>
			</div>
		</main>
	)
}

export default App
