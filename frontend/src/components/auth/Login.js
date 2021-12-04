import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginState, setLoginState] = useState(false);

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const loginClicked = () => {
		if (username === 'alingrig87' && password === '1234') {
			setLoginState(true);
		} else {
			setLoginState(false);
		}
	};

	return (
		<div>
			{loginState ? <Navigate to="/welcome" /> : <div>Invalid Credentials</div>}
			<div>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={handleUsernameChange}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<button onClick={loginClicked}>Login</button>
		</div>
	);
};

export default Login;
