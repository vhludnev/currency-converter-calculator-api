import React from 'react';

import './Contact.css';

    
export default class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    };

    render() {
        return (
            <div className="contactpage"> <p>Contact page</p> </div>   
        )
    }
}   