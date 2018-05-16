import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoActions from './data/TodoActions';
import App from './App';

// ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));

ReactDOM.render(<App />, document.getElementById('todoapp'));

// We will remove these lines later:

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');
