import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import '../styles/cpe487.css';

export default class CPE487 extends React.Component {
	didOpenCollapsibleWithIndex(index) {
		console.log('firing open');
		var arrayOfCollapsibles = document.getElementsByClassName('Collapsible__contentOuter');
		arrayOfCollapsibles[index].className = 'Collapsible__contentOuter is-open';
	}
	didCloseCollapsibleWithIndex(index) {
		console.log('firing close');
		var arrayOfCollapsibles = document.getElementsByClassName('Collapsible__contentOuter');
		arrayOfCollapsibles[index].className = 'Collapsible__contentOuter is-closed';
	}

	render() {
		return (
			<div className='cpe487MainContainer'>
				<h1 className='cpe487Title'>CPE 487</h1>
				<a className='cpe487Subtitle' href='https://github.com/jpereira99/CPE-487'>
					Click to View GitHub
				</a>

				<div className='cpe487ButtonContainer'>
					<Link to='/projects/cpe487/FlappyAttila' className='cpe487PageButton'>
						<h2 className='cpe487PageButtonText'>Final Project</h2>
					</Link>
					<Link to='/projects/cpe487/labs' className='cpe487PageButton'>
						<h2 className='cpe487PageButtonText'>Labs</h2>
					</Link>
				</div>
				{/*  
				<div className='cpe487ContributionContainer'>
					<h2 className='cpe487ContributionTitle'>Contributions</h2>
					<iframe
						className='cpe487ContributionDrive'
						src='https://drive.google.com/embeddedfolderview?id=1voJ46JMIQt5edAckD3O_HiIGscM6muPa#grid'
					></iframe>
				</div>
				*/}
				<div className='cpe487WeeklyReportContainer'>
					<Collapsible
						trigger='[2020-10-23] Weekly Report #8'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(0);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(0);
						}}
					>
						<p>Completed Labs 1 and 2</p>
					</Collapsible>

					<Collapsible
						trigger='[2020-10-16] Weekly Report #7'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(1);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(1);
						}}
					>
						<p>Finished reading textbook</p>
					</Collapsible>

					<Collapsible
						trigger='[2020-10-09] Weekly Report #6'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(2);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(2);
						}}
					>
						<p>Read chapters 11 and 12</p>
					</Collapsible>

					<Collapsible
						trigger='[2020-10-02] Weekly Report #5'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(3);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(3);
						}}
					>
						<p>Read chapters 9 and 10.</p>
					</Collapsible>

					<Collapsible
						trigger='[2020-09-25] Weekly Report #4'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(4);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(4);
						}}
					>
						<p>
							Read chapters 7 and 8 in the textbook. Joined Canvas group that had somoene that can get an FPGA so we can
							actually get to work on it through the rest of the semester.
						</p>
					</Collapsible>

					<Collapsible
						trigger='[2020-09-18] Weekly Report #3'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(5);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(5);
						}}
					>
						<p>Read chapters 4, 5, and 6.</p>
					</Collapsible>

					<Collapsible
						trigger='[2020-09-11] Weekly Report #2'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(6);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(6);
						}}
					>
						<p>Set up GHDL and GTKWave. Read Chapters 2 and 3.</p>
					</Collapsible>

					<Collapsible
						trigger='[2020-09-04] Weekly Report #1'
						onOpening={() => {
							this.didOpenCollapsibleWithIndex(7);
						}}
						onClosing={() => {
							this.didCloseCollapsibleWithIndex(7);
						}}
					>
						<p>
							Reviewed the syllabus, created a project page on personal website with a link to a GitHub repository, and read
							over some of the textbook (Chapter 1)
						</p>
					</Collapsible>
				</div>

				<a href='/#projects' className='cpe487BackButton'>
					Back to Projects
				</a>
			</div>
		);
	}
}
