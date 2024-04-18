import { quizSlice } from 'store/quiz/quiz.slice';

import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const rootAction = {
	...quizSlice.actions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
