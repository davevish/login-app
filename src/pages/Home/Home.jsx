import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div style={{marginTop: 65 + 'px'}}>

				<h1>Create a ToDo List</h1>
				<p>on the next page!</p>

				<div>
					<Link to="/Page2"><Button/></Link>
				</div>
			</div>
		)
	}
}

export default Home;