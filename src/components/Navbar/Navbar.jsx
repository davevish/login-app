import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<div className="container row">
				<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
					<Link className="navbar-brand" to="/">Home</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"> </span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExampleDefault">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/Page1">Dashboard</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
