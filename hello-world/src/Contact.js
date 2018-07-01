
import React,{Component} from 'react';

class Contact extends Component {

    
    render() {
        let users ={
            123:{
                name:"imran",
                cell:"8871960116"
            },
            124:{
                name:"mohammad",
                cell:"8871960117"
            },
            125:{
                name:"shaikh",
                cell:"8871960118"
            }
        }
        let requiredUser = users[this.props.match.params.rollnum];
        return(
            <div className="App">
                <h1>Inside Contact us page</h1>
                User Name : {requiredUser ? requiredUser.name: "no name"}
                <br/>
                Cell Number :{requiredUser ? requiredUser.cell :"no cell number"}
            </div>
        )
    }
}

export default Contact;