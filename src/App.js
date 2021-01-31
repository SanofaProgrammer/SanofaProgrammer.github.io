import React from 'react';
import Portfolio from './components/Portfolio';
import {ThemeProvider} from './context/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<Portfolio/>
		</ThemeProvider>
	);
}

export default App;
