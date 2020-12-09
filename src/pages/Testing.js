import React from 'react';
import '../styles/Landing.css';

export default class Landing extends React.Component {

    render() {
        return(
            <div className='LandingMainContainer'>
                
                <div className='LandingHeader'>
                    <h1>Name</h1>
                </div>

                <div className='LandingContentContainer'>
                    <div className='LandingContentBlock'>
                        <img className='LandingContentImage' src={require('../assets/ParallaxTest.png')}/>
                    </div>

                    <div className='LandingContentBlock'>
                        <h2>Lorem ipsum dalor sit amet.</h2>
                    </div>
                </div>

                <div className='LandingMissionContainer'>
                    <h2>Mission</h2>
                    <p>Lorem ipsum dalor sit amet.</p>
                </div>

            </div>
        )
    }
}