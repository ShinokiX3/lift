import cls from './quizView.module.scss';
import { Input } from 'shared/ui/input/input';
import { Checkbox } from "shared/ui/checkbox/checkbox";
import { QuizQuestion } from "../../types/quiz.type";
import { validate } from '../../lib/validate';

interface QuizViewProps {
    question: QuizQuestion;
    value: string[];
    handler: (value: string) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ question, value, handler }) => {
    const renderInput = (question: QuizQuestion) => (
        <Input 
            value={value[0]} 
            onChange={handler} 
            placeholder={question.placeholder} 
            validate={validate} 
            autoFocus
        />
    )

    const renderCheckbox = (question: QuizQuestion) => (
        <ul className={cls.options}>
            { question.options?.map(({ id, title }) => (
                <li key={id}>
                    <Checkbox 
                        checked={value.find(el => el === title) ? true : false}
                        onChange={() => handler(title)}
                    >
                        {title}
                    </Checkbox>
                </li>
            )) }
        </ul>
    )

    const renderQuestion = (question: QuizQuestion) => {
        switch (question.type) {
            case 'input':
                return renderInput(question);
            case 'checkbox':
                return renderCheckbox(question);
            default:
                return <p>Unsupported question type</p>;
        }
    }

    return (
        question.question ? (
            <>
                <h2>{ question.question }</h2>
                { renderQuestion(question) }
            </>
        ) : (
            null
        )
    );
}

export default QuizView;