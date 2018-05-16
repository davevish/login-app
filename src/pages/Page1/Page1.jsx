import React, { Component } from 'react';
import Jummbotron from '../../components/Jumbotron/Jumbotron';
import "./Page1.css";
import Login from "../../components/Login/Login";

class Page1 extends Component {
	render() {
		return (
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<Jummbotron/>
				<div className="container col-sm-4">
					<Login/>
				</div>
			</div>
		)
	}
}

export default Page1