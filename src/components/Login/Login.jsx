import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Button/Button.css";

class Login extends Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<input type="email" className="form-control" placeholder="Enter email"/>
				</div>
				<div className="form-group">
					<input type="password" className="form-control" placeholder="Password"/>
				</div>
				<Link to="/Page1"><button type="submit" className="btn btn-primary">Submit</button></Link>
			</form>
		);
	}
}

export default Login;