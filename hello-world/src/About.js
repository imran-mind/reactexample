
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

    operation(event) {
        console.log("==>", event);
        this.props.history.push('/');
    }


    contact(event) {
        console.log("==>", event);
        this.props.history.push('/contact');
    }

    render() {
        return (
            <div className="App">
                <h1>Inside About us page</h1>
                <button onClick={this.operation.bind(this)}>Home</button>
                <button onClick={this.contact.bind(this)}>Contact</button>

                <ul>
                    <li> <Link to='/contact/123'>123</Link></li>
                    <li> <Link to='/contact/124'>124</Link></li>
                    <li> <Link to='/contact/125'>125</Link></li>
                    <li> <Link to='/contact/456'>456</Link></li>
                </ul>
            </div>
        )
    }
}

export default About;