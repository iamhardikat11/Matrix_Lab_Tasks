import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Desktop1 from '../Components/Desktop1';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				{/* <Route exact path="/"><HomePage /></Route> */}
				<Route exact path="/"><Desktop1 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;