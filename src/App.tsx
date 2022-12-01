/*
 * Copyright (c) 2022.
 * All rights reserved by Sauhard Bhushan.
 */

import React from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import GalleryQueue from './components/GalleryQueue/GalleryQueue';
import ImageWithContent from './components/ImageWithContent/ImageWithContent';
import {Link, Outlet} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	return (
		<div className="App grid-container">
			<div className="grid-sidebar">
				<Sidebar/>
			</div>
			<div className="grid-headline">
				<p>lots-of-stuff// worldwide-clock </p>
			</div>
			<div className="grid-clock">
				<Clock/>
			</div>
			<div className="grid-outlet">
				<Outlet/>
			</div>
			<div className="grid-content">
				<GalleryQueue/>
				<ImageWithContent/>
			</div>
		</div>
	);
}

export default App;
