import React from 'react';
import Login from '../auth/Login';
import Welcome from '../Welcome';
import Error from '../Error';
import { Routes, Route } from 'react-router-dom';

function TodoApp() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/welcome" element={<Welcome />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default TodoApp;
