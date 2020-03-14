import 'react-native-gesture-handler';
import React from 'react';
import { loadFonts } from './config';
import AppRouter from './routes';

loadFonts();

export default function App() {
	return <AppRouter />;
}
