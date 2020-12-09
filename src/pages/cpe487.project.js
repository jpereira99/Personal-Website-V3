import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import '../styles/cpe487.css';

export default class CPE487 extends React.Component {
	render() {
		return (
			<div className='cpe487MainContainer'>
				<h1 className='cpe487Title'>Flappy Attila</h1>
				<h4 className='cpe487LabSubText'>
					Recreating the popular mobile app Flappy Bird in VHDL but with a Stevens Institute of Technology twist
				</h4>
				<div
					className='cpe487LabRepoButton'
					onClick={() => {
						window.open('https://github.com/BriannaPGarland/FlappyAttila', '_blank');
					}}
				>
					<h3>View on GitHub</h3>
				</div>
			</div>
		);
	}
}
