import "./App.css"
import React from "react"
import { Link, Route, withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Welcome from './Welcome';
import Signin from './Signin';
import Account from './Account';
import Logout from './Logout';
import { getToken } from '../utils/api';


function App() {

	const signedIn = getToken();

	return (
		<div className="wrapper">

			<nav>
				<Link to='/'>Home</Link>
				{signedIn && <Link to='/account'>Account</Link>}
				{!signedIn && <Link to='/signin'>Signin</Link>}
				{signedIn && <Link to='/logout'>Logout</Link>}
			</nav>
		
			<Route exact path='/' component={Welcome} />
			<ProtectedRoute path='/account' component={Account} />
			<ProtectedRoute path='/logout' component={Logout} />
			<Route path='/signin' component={Signin} />

		</div>
	)
}


export default withRouter(App);
