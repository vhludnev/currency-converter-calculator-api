import React from 'react';

import './Contact.css';

//const Contact = () => {
    
export default class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    };

    render() {
        return (
            <div> Contact page </div>   
        )
    }
}   
//export default Contact;