/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import cls from './quiz.module.scss';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useLocalStorage, useHistoryState } from 'hooks/index';
import { QuizAnswer, QuizQuestions } from '../../types/quiz.type';
import QuizView from '../view/view';
import { Button } from 'shared/ui/button/button';
import { Loader } from 'shared/ui/loader/loader';
import { ThemeButton } from 'shared/ui/button/button.types';

interface QuizParams {
    quiz?: QuizQuestions;
    Render?: React.FC;
}

const initialValues = {
    input: [],
    checkbox: []
}

const Quiz: React.FC<QuizParams> = ({ Render }) => {
    const [values, setValues] = useState<{[key: string]: string[]}>(initialValues);
    const [_, setStorageAnswers] = useLocalStorage<QuizAnswer[]>('answers', []);

    const { 
        currentQuestion: current, 
        answers, 
        questions, 
        total 
    } = useTypedSelector((state) => state.quiz);

	const { 
        nextQuestion, 
        completeQuiz, 
        setAnswer 
    } = useActions();

    useHistoryState(current, total);

    const type = questions[current]?.type;

    useEffect(() => {
        setValues(initialValues);
        
        const cached = answers.find(({ id }) => id === questions[current]?.id);
        
        if (cached) 
            setValues(prev => ({...prev, [type]: cached.answers }))
    }, [current, type]);

    const valuesHandler = (value: string) => {
        if (type === 'input')
            setValues(prev => ({...prev, [type]: value ? [value] : [] }));

        if (type === 'checkbox') {
            if (values[type].findIndex(el => el === value) === -1) 
                setValues({ ...values, [type]: [...values[type], value]});
            else 
                setValues({...values, [type]: values[type].filter(el => el !== value)});
        }
    }

    const nextHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const answer = {
            id: questions[current].id,
            answers: values[type],
        }

        setAnswer(answer);
        setStorageAnswers([...answers, answer]);

        nextQuestion();
    }

    const completeHandler = () => {
        setStorageAnswers([]);
        completeQuiz();
    }

    if (current + 1 > total) return (
        <div className={`${cls.wrapper} ${cls.render}`}>
            { Render ?
                <Render />
                : <p>You have completed the quiz!</p> 
            }

            <Button 
                className={cls.controls}
                onClick={completeHandler} 
                theme={ThemeButton.DEFAULT}
            >
                Complete
            </Button>
        </div>
    )

    return (
        <form onSubmit={nextHandler} className={cls.wrapper}>
            <div className={cls.questions}>
                { questions[current] ? 
                    <QuizView 
                        question={questions[current]}
                        value={values[type]}
                        handler={valuesHandler}
                    />
                    : 
                    <div style={{ alignSelf: 'center' }}>
                        <Loader size='100px' />
                    </div>
                }
            </div>

            <div className={cls.controls}>
                <Button 
                    type='submit' 
                    theme={ThemeButton.DEFAULT}
                    disabled={!values[type]?.length}
                >
                    Continue
                </Button>
            </div>
        </form>
    );
};

export default Quiz;