import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Navbar from '../src/components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
		<Router>
			<div>
				<Navbar/>

				<Switch>
					<Route exact path="/" component={Page1}/>
					<Route path="/page1" component={Home}/>
					<Route path="/page2" component={Page2}/>
				</Switch>
			</div>
		</Router>
    );
  }
}

export default App;
