import React from 'react';
import '../styles/main.css';
import headerBG from '../assets/headerBG.JPG';
import Para from '../assets/ParallaxTest.jpg'
import * as gsap from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class Main extends React.Component {

    state = {
        posts: [
            {
                url: '/projects/cpe487',
                img: 'https://img-a.udemycdn.com/course/750x422/1091582_563e_3.jpg',
                title: 'CPE 487',
                desc: 'Digital System Design with Professor Kevin Lu',
                date: '- Active Project -'
            },
            {
                url: 'https://devpost.com/software/rolodecks',
                img: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/766/295/datas/gallery.jpg',
                title: 'Rolodecks',
                desc: 'DuckHacks 2019',
                date: '02/17/19'
            },
            {
                url: 'https://devpost.com/software/flow-eg4ciu',
                img: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/724/982/datas/gallery.jpg',
                title: 'Flow',
                desc: 'Venture Hacks Fall 2018',
                date: '12/08/18'
            }
        ]
    }

    
    componentDidMount() {
        this.initScrollMagicAnimations()
    }

    initScrollMagicAnimations() {
        var controller = new ScrollMagic.Controller();
        // Header Parallax
        var parallaxScene = new ScrollMagic.Scene({triggerElement: '#header', duration: '150%'})
        .setTween('.headerBGContainer', {y: '30%', ease: gsap.Linear.easeNone})
        //.addIndicators({name: 'parallax'})
        .addTo(controller)
        // Header Text
        var headerTextScene = new ScrollMagic.Scene({triggerElement: '#education', duration: '250'})
        .setTween('.headerTextContainer', {filter: 'blur(10px)', opacity: '0'})
        //.addIndicators({name: 'headerText'})
        .offset(-200)
        .addTo(controller)


        // Education
        var educationTimeline = new gsap.TimelineLite();
        educationTimeline.to('.mainContainer', 1, {backgroundColor: '#A32638'}, 0);
        var educationScene = new ScrollMagic.Scene({ triggerElement: '#education', duration: 400 })
        .setTween(educationTimeline)
        //.addIndicators({name: 'education'})
        .addTo(controller)
        //Text Enter
        var educationTextEnterScene = new ScrollMagic.Scene({ triggerElement: '#education', duration: '95%' })
        .setClassToggle('#education', 'visible')
        .offset(100)
        //.addIndicators({name: 'educationTextEnter'})
        .addTo(controller)


        // Truthable
        var truthableTimeline = new gsap.TimelineLite();
        truthableTimeline.to('.mainContainer', 1, {backgroundColor: '#f5f5f5'}, 0);
        var truthableScene = new ScrollMagic.Scene({ triggerElement: '#truthable', duration: 400 })
        .setTween(truthableTimeline)
        //.addIndicators({name: 'truthable'})
        .addTo(controller)
        //Text Enter
        var truthableTextEnterScene = new ScrollMagic.Scene({ triggerElement: '#truthable', duration: '95%' })
        .setClassToggle('#truthable', 'visible')
        .offset(100)
        //.addIndicators({name: 'educationTextEnter'})
        .addTo(controller)

        // Design Parallax
        var designParallaxScene = new ScrollMagic.Scene({triggerElement: '#design', duration: '150%'})
        .setTween('.designBGContainer', {y: '30%', ease: gsap.Linear.easeNone})
        //.addIndicators({name: 'parallax'})
        .offset(-200)
        .addTo(controller)
        // Design Color Fade
        var designColorTimeline = new gsap.TimelineLite();
        designColorTimeline.to('.mainContainer', 1, {backgroundColor: '#1a1b1b'}, 0);
        var designColorScene = new ScrollMagic.Scene({ triggerElement: '#design', duration: 400 })
        .setTween(designColorTimeline)
        //.addIndicators({name: 'design'})
        .addTo(controller)
        //Text Enter
        var designTextEnterScene = new ScrollMagic.Scene({ triggerElement: '#design', duration: '95%' })
        .setClassToggle('#designTextContainer', 'visible')
        .offset(100)
        //.addIndicators({name: 'designTextEnter'})
        .addTo(controller)


        // Projects
        var projectsTimeline = new gsap.TimelineLite();
        projectsTimeline.to('.mainContainer', 1, {backgroundColor: '#fff'}, 0);
        var projectsScene = new ScrollMagic.Scene({ triggerElement: '#projects', duration: 400 })
        .setTween(projectsTimeline)
        //.addIndicators({name: 'projects'})
        .addTo(controller)
        //Text Enter
        var projectsTextEnterScene = new ScrollMagic.Scene({ triggerElement: '#projects' })
        .setClassToggle('#projects', 'visible')
        .offset(100)
        //.addIndicators({name: 'projectsTextEnter'})
        .addTo(controller)
    }

    render() {
        return (
            <div className='mainContainer'>
                <div id='header' className='headerContainer'>
                    <div id='parallax' className='headerBGContainer' style={{backgroundImage: `url(${headerBG})`}}></div>
                    <div className='headerTextContainer'>
                        <h1 className='headerNameText'>Jayden Pereira</h1>
                        <p className='headerSubtitleText'>Engineer. Designer. Leader.</p>
                    </div>
                </div>
            
                <div id='education'>
                    <div className='educationTextContainer'>
                        <img className='educationLogo' src='https://web.stevens.edu/news/newspoints/brand-logos/Stevens-Apparel-White-R.png'/>
                        <div className='educationText'>
                            <h2>Studying to attain a B.E. in Computer Engineering with an expected graduation of May 2022</h2>
                            <p>Looking to pursue Masters and PhD degrees</p>
                        </div>
                    </div>
                </div>

                <div id='truthable'>
                    <div className='truthableTextContainer'>
                        <img className='truthableLogo' src='https://truthable.ai/static/media/logoBlack.d762bf95.png'/>
                        <div className='truthableText'>
                            <h2>CEO and Founder of Truthable, Inc.</h2>
                            <p>We strive to give people the peace of mind in knowing the information they receive is always true. We build the foundations to seek the truth.</p>
                            <a className='truthableLinkText' href='https://truthable.ai'>Visit our Website</a>
                        </div>
                    </div>
                </div>

                <div id='design'>
                    <div className='designBGContainer' style={{backgroundImage: `url(${Para})`}}></div>
                    <div id='designTextContainer'>
                        <h1 className='designTitleText'>Graphic Design</h1>
                        <p className='designSubtitleText'>I enjoy doing graphic design in my free time. Whether it be football kits, personal/company logos, or designing album covers.</p>
                        <p className='designSubtitleText'><p className='designBoldText'>Monthly Playlist Project</p>I started this project to constantly discover more music and learn new graphic design techniques and express different ideas.</p>
                        <a className='designLinkText' href='https://open.spotify.com/user/1253099173?si=wgx4FKApRi6uwCeg8hYqWA'>Discover my playlists and their album covers here</a>
                    </div>
                </div>

                <div id='projects'>
                    <div className='projectsContainer'>
                        <h1 className='projectsTitleText'>Personal Projects</h1>
                        <p className='projectsSubtitleText'>Click to see more about one of my public projects. Lots of time has been spent towards Truthable, so most are connected in some way to class assignments.</p>
                        <a className='projectsLinkText' href='https://github.com/jpereira99'>My GitHub can be accessed here</a>
                        <div className='projectsGrid'>
                            {this.state.posts.map((post, index) => (
                                <a className='postContainer' href={ post.url }>
                                    <div className='postContent'>
                                        <span className='postImgContainer' style={{backgroundImage: `url(${ post.img })`}}></span>
                                        <div className='postTextContainer'>
                                            <p className='postDate'>{ post.date }</p>
                                            <h1 className='postHeader'>{ post.title }</h1>
                                            <p className='postDesc'>{ post.desc }</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}