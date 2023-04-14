import React from 'react';
import './styles/App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/sections/navbar';
import Home from './components/pages/home';
import Products from './components/pages/products';
import Tasks from './components/pages/tasks';
import Notes from './components/pages/notes';
import Wholesale from './components/pages/wholesale';

const App = () => {
	return (
		<div className='content-window'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/tasks' element={<Tasks />} />
				<Route path='/notes' element={<Notes />} />
				<Route path='/wholesale' element={<Wholesale />} />
			</Routes>
		</div>
	);
};

export default App;
