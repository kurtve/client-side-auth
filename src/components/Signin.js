import React, { useState } from 'react';
import api from '../utils/api';


function Signin(props) {

	const [error, setError] = useState();

	const [data, setData] = useState({
		email: '',
		password: ''
	});


	const handleChange = (e) => {
		setData({
			...data, [e.target.name]: e.target.value
		});
	};


	const handleSubmit = (e) => {
		e.preventDefault();

		//console.log(`signing in with email: ${data.email} and password: ${data.password}`);

		api()
			.post('/signin', data)
			.then(result => {
				localStorage.setItem('token', result.data.token);

				props.history.push('/account');
			})
			.catch(error => {
				setError(error.response.data.message);
			});


		setData({
			...data, email: '', password: ''
		});

	}


	return (
		<>
			<h3>Sign-in Page</h3>

			<form onSubmit={handleSubmit}>
				{error && <div className='error'>{error}</div>}

				<input type='email' name='email' placeholder='Email'
					value={data.email} onChange={handleChange} />
				<input type='password' name='password' placeholder='Password'
					value={data.password} onChange={handleChange} />
				<button type='submit'>Sign In</button>
			</form>
		</>
	);
}

export default Signin;
