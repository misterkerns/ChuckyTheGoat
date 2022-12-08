import React from 'react';
import './styles/App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import CardFinder from './components/cardFinder';
import CardResults from './components/cardResults';

const App = () => {
	return (
		<div className='content-window'>
			<Navbar />
			<CardFinder />
			<CardResults />
			<Routes>
				<Route exact path='/' element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
