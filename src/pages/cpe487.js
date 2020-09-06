import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import '../styles/cpe487.css';

export default class CPE487 extends React.Component {

    didOpenCollapsibleWithIndex( index ) {
        console.log('firing open')
        var arrayOfCollapsibles = document.getElementsByClassName("Collapsible__contentOuter");
        arrayOfCollapsibles[index].className = "Collapsible__contentOuter is-open";
    }
    didCloseCollapsibleWithIndex( index ) {
        console.log('firing close')
        var arrayOfCollapsibles = document.getElementsByClassName("Collapsible__contentOuter");
        arrayOfCollapsibles[index].className = "Collapsible__contentOuter is-closed";
    }

    render() {
        return(
            <div className='cpe487MainContainer'>
                <h1 className='cpe487Title'>CPE 487</h1>
                <a className='cpe487Subtitle' href='https://github.com/jpereira99/CPE-487'>https://github.com/jpereira99/CPE-487</a>
                <div className='cpe487WeeklyReportContainer'>
                    <Collapsible trigger='Weekly Report #2 | 09/11/20' onOpening={ () => { this.didOpenCollapsibleWithIndex( 0 ) } } onClosing={ () => { this.didCloseCollapsibleWithIndex( 0 ) } }>
                        <p>*In Progress*</p>
                    </Collapsible>

                    <Collapsible trigger='Weekly Report #1 | 09/04/20' onOpening={ () => { this.didOpenCollapsibleWithIndex( 1 ) } } onClosing={ () => { this.didCloseCollapsibleWithIndex( 1 ) } }>
                        <p>Reviewed the syllabus, created a project page on personal webiste with a link to a GitHub repository, and read over some of the textbook (Chapter 1)</p>
                    </Collapsible>

                    
                </div>

                <a href='/#projects' className='cpe487BackButton'>Back to Projects</a>
            </div>
        )
    }
}
