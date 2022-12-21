import React from 'react';
import './styles/App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';

const App = () => {
	return (
		<div className='content-window'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
