import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import CPE322 from './pages/cpe322';
import CPE487 from './pages/cpe487';
import CPE487Labs from './pages/cpe487.labs';
import CPE487Project from './pages/cpe487.project';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Main} />

				<Route path='/projects/CPE322' exact component={CPE322} />

				<Route path='/projects/CPE487' exact component={CPE487} />
				<Route path='/projects/CPE487/labs' exact component={CPE487Labs} />
				<Route path='/projects/CPE487/FlappyAttila' exact component={CPE487Project} />
			</Switch>
		</Router>
	);
}

export default App;
