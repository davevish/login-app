import React from 'react';
import Input from "../components/Input/Input";
// import Button from '../components/Button/Button';
// import ReactDOM from "react-dom";
import './AppView.css';

function AppView(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>Make A Todo List!</h1>
        </header>
    );
}

function Main(props) {
    if (props.todos.size === 0) {
        // return null;
		console.log('main loaded');
    }
    return (
        <div className="container col-sm-5" id="main">

            <Input/>

            <ul id="todo-list">
                {[...props.todos.values()].reverse().map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => props.onToggleTodo(todo.id)}
                            />

                            <label>{todo.text}</label>

							<button className="destroy" onClick={() => props.onDeleteTodo(todo.id)}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Footer(props) {
    if (props.todos.size === 0) {
        // return null;
		console.log('footer loaded');
    }

    const remaining = props.todos.filter(todo => !todo.complete).size;
    const phrase = remaining === 1 ? ' item left' : ' items left';

	return (
		<footer id="footer">
			<span id="todo-count">
				<strong>
					{remaining}
				</strong>
					{phrase}
			</span>
		</footer>
	);
}

export default AppView;
