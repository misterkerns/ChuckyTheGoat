import React from 'react';
import './styles/App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/sections/navbar';
import Home from './components/pages/home';
import Products from './components/pages/products';
import Tasks from './components/pages/tasks';
import Articles from './components/pages/articles';
import Notes from './components/pages/notes';

const App = () => {
	return (
		<div className='content-window'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/tasks' element={<Tasks />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/notes' element={<Notes />} />
			</Routes>
		</div>
	);
};

export default App;
