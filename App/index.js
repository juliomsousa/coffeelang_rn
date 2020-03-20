import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './config/reactotronConfig';
import { store, persistor } from './store';
import { loadFonts } from './config';
import AppRouter from './routes';

loadFonts();

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<AppRouter />
			</PersistGate>
		</Provider>
	);
}
