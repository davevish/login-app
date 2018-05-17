import React, { Component } from 'react';
import "./Input.css";
import Button from "../Button/Button";
import TodoActions from '../../data/TodoActions';

class Input extends Component {

	render() {
		return (
			<div>
				<form>
					<input
						onSubmit={TodoActions.addTodo()}
						type="text"
						className="form-control"
						placeholder="Enter New Task"
					/>

				</form>

				{/*<Button onClick={TodoActions.dummy()}/>*/}

			</div>
		);
	}
}

export default Input;
