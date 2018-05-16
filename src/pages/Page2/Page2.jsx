import React, { Component } from 'react';
import "./Page2.css";
import Input from "../../components/Input/Input";
import Button from '../../components/Button/Button';
import ReactDOM from "react-dom";

import AppContainer from '../../containers/AppContainer';

class Page2 extends Component {
	render() {
		return (
			<div className="container" style={{marginTop: 100 + 'px'}}>

                <AppContainer />

				{/*<div className="row">*/}
					{/*<div className="container col-sm-5">*/}
						{/*<Input/>*/}
					{/*</div>*/}
				{/*</div>*/}
			</div>
		)
	}
}

export default Page2;