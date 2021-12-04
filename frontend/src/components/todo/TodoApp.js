import React from 'react';
import Login from '../auth/Login';
import Welcome from '../Welcome';
import { Routes, Route } from 'react-router-dom';

function TodoApp() {
	return (
		<div>
			<Routes>
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</div>
	);
}

export default TodoApp;
