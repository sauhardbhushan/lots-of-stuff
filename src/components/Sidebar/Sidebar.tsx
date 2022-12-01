/*
 * Copyright (c) 2022.
 * All rights reserved by Sauhard Bhushan.
 */

import * as React from 'react';
import {Link} from 'react-router-dom';

import './Sidebar.css'

export default function Sidebar() {

	return(
		<div className="sidebar">
			<div className="sidebar--ul">
				<Link to="/">Home</Link>
				<Link to="playground">Playground</Link>
				<Link to="#">Fake link</Link>
			</div>
		</div>
	)
}