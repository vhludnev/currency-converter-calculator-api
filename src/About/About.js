import React from 'react';

import './About.css';

// const About = () => {
export default class About extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    };

    render() {
        return (
            <div> About page </div>   
        )      
    }
} 

//export default About;