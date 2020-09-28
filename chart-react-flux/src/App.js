import React from 'react';
import logo from './logo.svg';
import './App.scss';
import List from './components/List/List';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<main className="main flex-column flex-row--in-large">
			<List />
			<Cart />
		</main>
	);
}

export default App;
