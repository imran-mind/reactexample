
import React,{Component} from 'react';

class Method extends Component{

    facebookLink (){
        return "https://www.linkedin.com/imran"
    }

    facebookUser(){
        return "Imran Shaikh"
    }
    render(){
        return (
            <div>
                <p> My Facebook ID is : <a href={this.facebookLink()}> 
                {this.facebookUser()} </a></p>
            </div>
        )
    }
}

export default Method;