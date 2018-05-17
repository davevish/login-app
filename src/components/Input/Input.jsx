import React, { Component } from 'react';
import "./Input.css";
import Button from "../Button/Button";

class Input extends Component {

	render() {
		return (
			<div>
				<form>
					<input type="text" className="form-control" placeholder="Enter New Task"/>
				</form>

				<Button/>

			</div>
		);
	}
}

export default Input;
