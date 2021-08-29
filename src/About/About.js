import React from 'react';

import './About.css';

export default class About extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    };

    render() {
        return (
			<div className="aboutpage"> 
				<p>About us page</p> 
				<img src="https://i.stack.imgur.com/qgNyF.png?s=328&g=1" width="100px" height="100px" alt="potato" />
			</div> 
        )      
    }
} 
