import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render() {
		return (
			<div className="container">
				<button type="button" className="btn btn-primary">Enter</button>
			</div>
		);
	}
}

export default Button;