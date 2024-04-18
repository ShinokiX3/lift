import 'styles/reset.scss';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from 'store/store.ts';
import App from 'app/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
