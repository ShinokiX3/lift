import cls from './view.module.scss';
import { QuizQuestion } from "../../types/quiz.type";
import { validate } from '../../lib/validate';
import { Form } from 'shared/ui/form';

interface ViewProps {
    question: QuizQuestion;
    value: string[];
    handler: (value: string) => void;
}

const View: React.FC<ViewProps> = ({ question, value, handler }) => {
    const renderInput = (question: QuizQuestion) => (
        <Form.Input 
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
                    <Form.Checkbox 
                        checked={value.find(el => el === title) ? true : false}
                        onChange={() => handler(title)}
                    >
                        {title}
                    </Form.Checkbox>
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

export default View;