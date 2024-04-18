import { Provider } from 'react-redux';
import { store } from './store';

export function RxProvider({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
}
