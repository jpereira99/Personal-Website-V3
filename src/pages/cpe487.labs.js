import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import '../styles/cpe487.css';

export default class CPE487 extends React.Component {
	state = {
		labIndex: 1,
	};

	didChangeIndex(newIndex) {
		this.setState({ labIndex: newIndex });
	}

	render() {
		const labIndex = this.state.labIndex;
		const renderLab = () => {
			if (labIndex === 6) {
				return (
					<div className='cpe487LabContentContainer'>
						<h2>Lab 6: Video Game PONG</h2>
						<h4 className='cpe487LabSubText'>
							Extended the FPGA code developed in Lab 3 (Bouncing Ball) to build a PONG game using a 800x600 Video Graphics
							Array (VGA) display and a 5kΩ potentiometer with an analog-to-digital converter called Pmod ADC connected to the
							top pins of the Pmod port JA
						</h4>
						<div
							className='cpe487LabRepoButton'
							onClick={() => {
								window.open('https://github.com/jpereira99/CPE-487/tree/master/Lab%206', '_blank');
							}}
						>
							<h3>GitHub Folder</h3>
						</div>
						<div className='cpe487LabEmbedContainer'>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/kLFKi4CZRbQ'></iframe>
							<p className='cpe487LabEmbedText'>Intitial demo of lab 6 before modifications were made</p>
							<img className='cpe487LabEmbed' src='https://i.imgur.com/PFffVtH.png' />
							<p className='cpe487LabEmbedText'>
								We modified the code modified in order to use the switches to increase the speed using 3 different switches.
								As you can see we had to set up the ports in order to be able to receive the signal from the switches to
								change the speed of the ball. This required the addition of the leddec16.vhd file and also altering the
								pong.vhd and the ppong.xdc file.
							</p>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/had8vh1Vx_g'></iframe>
							<p className='cpe487LabEmbedText'>
								This is what our lab 6 looked like after we made the modifications, we changed the color of the ball and the
								bat, we also made it so that you can control the speed of the ball with 3 different speeds using the
								switches on the board. There is also a counter on the digit display on the board that counts how many
								consecutive times you successfully make contact with the ball that resets every time you reset the game
							</p>
						</div>
					</div>
				);
			} else if (labIndex === 5) {
				return (
					<div className='cpe487LabContentContainer'>
						<h2>Lab 5: DAC Siren</h2>
						<h4 className='cpe487LabSubText'>
							Programmed the FPGA on the Nexys A7-100T board to generate a wailing audio siren using a digital-to-analog (DAC)
							converter called Pmod Inter-IC Sound (I2S) with a speaker or headphone (WARNING: the siren is loud) connected to
							the top pins of the Pmod port JA
						</h4>
						<div
							className='cpe487LabRepoButton'
							onClick={() => {
								window.open('https://github.com/jpereira99/CPE-487/tree/master/Lab%205', '_blank');
							}}
						>
							<h3>GitHub Folder</h3>
						</div>
						<div className='cpe487LabEmbedContainer'>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/GqyweMygt5E'></iframe>
							<p className='cpe487LabEmbedText'>
								Demo of lab 5 before the modification made and then after the first round of modifications with adding a
								second wail and also changing the wave to square
							</p>
						</div>
					</div>
				);
			} else if (labIndex === 4) {
				return (
					<div className='cpe487LabContentContainer'>
						<h2>Lab 4: Hex Calculator</h2>
						<h4 className='cpe487LabSubText'>
							Programmed the FPGA on the Nexys A7-100T board to function as a simple hexadecimal calculator capable of adding
							and subtracting four-digit hexadecimal numbers using a 16-button keypad module (Pmod KYPD) connected to the Pmod
							port JA
						</h4>
						<div
							className='cpe487LabRepoButton'
							onClick={() => {
								window.open('https://github.com/jpereira99/CPE-487/tree/master/Lab%204', '_blank');
							}}
						>
							<h3>GitHub Folder</h3>
						</div>
						<div className='cpe487LabEmbedContainer'>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/qsAc2pkE_Ck'></iframe>
							<p className='cpe487LabEmbedText'>Displaying Lab 4</p>
							<img
								className='cpe487LabEmbed'
								src='https://lh4.googleusercontent.com/gIspMEACM7j4CuB0EApOdXu5Hfkzezzx-YSDmSJgkJsiA-4y_wxAPIfp3FL-MStVTRH2PFSpXlNcXNhGG3P9wJeutEw59GT3OQJYw01iyWnTnEzya5k=w1280'
							/>
							<p className='cpe487LabEmbedText'>
								We modified the code in order to remove the leading zero's on the display. Brianna was able to do this by
								changing the leddec16.vhd source file.
							</p>
						</div>
					</div>
				);
			} else if (labIndex === 3) {
				return (
					<div className='cpe487LabContentContainer'>
						<h2>Lab 3: Bouncing Ball</h2>
						<h4 className='cpe487LabSubText'>
							Programmed the FPGA to display a "bouncing ball" on a 800x600 Video Graphics Array (VGA) monitor
						</h4>
						<div
							className='cpe487LabRepoButton'
							onClick={() => {
								window.open('https://github.com/jpereira99/CPE-487/tree/master/Lab%203', '_blank');
							}}
						>
							<h3>GitHub Folder</h3>
						</div>
						<div className='cpe487LabEmbedContainer'>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/SjJN-A2eNe8'></iframe>
							<p className='cpe487LabEmbedText'>Displaying Lab 3</p>
							<img
								className='cpe487LabEmbed'
								src='https://lh4.googleusercontent.com/PlsT-tQzQHt1y4cKMVCLxZvsGWuONJTWHAinbBxkbSTABLnJXty34mVZVuVflP2qVCl2zJC4YDmXYPFmJn5Gi4vJ4CtPJr6AjJ4X-tK4UHUVGhsJ3djK=w1280'
							/>
							<p className='cpe487LabEmbedText'>
								This modification is where the code was changed in order to remove the leading zero's on the display. I was
								able to do this by changing the leddec16.vhd source file.
							</p>
						</div>
					</div>
				);
			} else if (labIndex === 2) {
				return (
					<div className='cpe487LabContentContainer'>
						<h2>Lab 2: Four-Digit Hex Counter</h2>
						<h4 className='cpe487LabSubText'>Built a four-digit (16-bit) counter to display its value on 7-segment displays</h4>
						<div
							className='cpe487LabRepoButton'
							onClick={() => {
								window.open('https://github.com/jpereira99/CPE-487/tree/master/Lab%202', '_blank');
							}}
						>
							<h3>GitHub Folder</h3>
						</div>
						<div className='cpe487LabEmbedContainer'>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/QMC2OA2-eXI'></iframe>
							<p className='cpe487LabEmbedText'>Displaying Lab 2</p>
							<img
								className='cpe487LabEmbed'
								src='https://lh6.googleusercontent.com/srltrpaKMs9A-4VDB9nYM9-BdTXsrdL420cCHt5e1Ua-JeeLf-iWsR2uRwTJQKF4dAq7B2BtiS5ZCCMVE6SMQeJw7zjXy_RSgV8wDE7S4W67ZyYk9EQ=w1280'
							/>
							<p className='cpe487LabEmbedText'>Implementation design map</p>
						</div>
					</div>
				);
			} else {
				return (
					<div className='cpe487LabContentContainer'>
						<h2>Lab 1: Seven-Segment Decoder</h2>
						<h4 className='cpe487LabSubText'>
							Built a single-digit (4-bit) hex counter to display its value on both four-digit common anode seven-segment LED
							displays
						</h4>
						<div
							className='cpe487LabRepoButton'
							onClick={() => {
								window.open('https://github.com/jpereira99/CPE-487/tree/master/Lab%201', '_blank');
							}}
						>
							<h3>GitHub Folder</h3>
						</div>
						<div className='cpe487LabEmbedContainer'>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/IvFZWzw4vEM'></iframe>
							<p className='cpe487LabEmbedText'>Displaying Lab 1 Part 1</p>
							<iframe className='cpe487LabEmbed' src='https://www.youtube.com/embed/D8lg9n5QBC4'></iframe>
							<p className='cpe487LabEmbedText'>Displaying Lab 1 Part 2</p>
							<img
								className='cpe487LabEmbed'
								src='https://lh6.googleusercontent.com/v7wMJffAdU0LRWw-X-uxL82adtMUfCkKV-8R9qK1mDbJeMVuGX0r_amWX0pgdLRQfgyO1isYxpZC0IUMXc7yBYOvuwdTr0gItL2C7hcSfQ3A7lOW2Fo=w1280'
							/>
							<p className='cpe487LabEmbedText'>leddec Bitstream Generation success</p>
							<img
								className='cpe487LabEmbed'
								src='https://lh6.googleusercontent.com/yt_cge1Nee1ZsbTb2lShXAo7m0FII3OG2LeQl4P3Z8fhfml-L4QHCgzsrTsyBbSj_ttSJrmSZehzBpz1qR93-cvbrDHH15IRi4pRMz4rDcXt-l_9gII=w1280'
							/>
							<p className='cpe487LabEmbedText'>hexcount Bitstream Generation success</p>
						</div>
					</div>
				);
			}
		};
		return (
			<div className='cpe487MainContainer'>
				<div className='cpe487LabSelectorContainer'>
					<div
						className='cpe487LabSelector'
						onClick={() => {
							this.didChangeIndex(1);
						}}
					>
						<h3 className='cpe487LabSelectorText'>Lab 1</h3>
					</div>
					<div
						className='cpe487LabSelector'
						onClick={() => {
							this.didChangeIndex(2);
						}}
					>
						<h3 className='cpe487LabSelectorText'>Lab 2</h3>
					</div>
					<div
						className='cpe487LabSelector'
						onClick={() => {
							this.didChangeIndex(3);
						}}
					>
						<h3 className='cpe487LabSelectorText'>Lab 3</h3>
					</div>
					<div
						className='cpe487LabSelector'
						onClick={() => {
							this.didChangeIndex(4);
						}}
					>
						<h3 className='cpe487LabSelectorText'>Lab 4</h3>
					</div>
					<div
						className='cpe487LabSelector'
						onClick={() => {
							this.didChangeIndex(5);
						}}
					>
						<h3 className='cpe487LabSelectorText'>Lab 5</h3>
					</div>
					<div
						className='cpe487LabSelector'
						onClick={() => {
							this.didChangeIndex(6);
						}}
					>
						<h3 className='cpe487LabSelectorText'>Lab 6</h3>
					</div>
				</div>

				{renderLab()}
			</div>
		);
	}
}
