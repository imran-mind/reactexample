import React, { Component } from 'react';

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            allUser: [],
            radioGroup: {
                MEANStack: true,
                MERNStack: false,
                LAMPStack: false
            },
            checkBoxGroup: {
                mongodb: false,
                express: false,
                angular: false,
                node: true
            },
            selectedValue: "node"
        }
        this.formHandler = this.formHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkBoxHandler = this.checkBoxHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
    }

    formHandler(event) {
        console.log(event.target.value);
        console.log('event-------> ', event);
        this.setState({
            username: event.target.value
        })
    }

    clickHandler(event) {
        console.log("--> event.target.value ", this.state.username);
        let currentUser = this.state.allUser;
        currentUser.push(this.state.username);
        this.setState({
            allUser: currentUser,
            username: ""
        });
        console.log("==> allUser : ", this.state.allUser);
    }

    radioHandler(event) {
        console.log(event.target.value);
        let radioGroup = this.state.radioGroup;
        for (let key in radioGroup) {
            radioGroup[key] = false;
        }
        radioGroup[event.target.value] = event.target.checked;
        this.setState({
            radioGroup: radioGroup
        })
    }

    checkBoxHandler(event) {
        console.log("==>checkBoxHandler : ", event.target.value);
        let checkBoxGroup = this.state.checkBoxGroup;
        checkBoxGroup[event.target.value] = event.target.checked;
        this.setState({
            checkBoxGroup: checkBoxGroup
        })
    }

    selectHandler(event) {
        console.log(event.target.value);
        this.setState({
            selectedValue: event.target.value
        })
    }

    emailHandler(event){
        console.log("==> Inside emailHandler : ",this.refs.subscriberEmail.value);
    }
    render() {
        return (
            <div>
                <label>
                    Email : <input type="email" ref="subscriberEmail" />
                </label>
                <button onClick={this.emailHandler}>Subscribe</button>
            </div>
                // <h1>Hello Forms</h1>
                // <input type="text" name="username" value={this.state.username} onChange={this.formHandler} />
                // <button onClick={this.clickHandler}>Save User </button>
                // <br />

                // Developers Option

                // <br /> <br />
                // <label>
                //     MEAN Stack <input type="radio" name="devcategory" value="MEANStack"
                //         checked={this.state.radioGroup['MEANStack']} onChange={this.radioHandler} />
                // </label>
                // <br />
                // <label>
                //     MERN Stack <input type="radio" name="devcategory" value="MERNStack"
                //         checked={this.state.radioGroup['MERNStack']} onChange={this.radioHandler} />
                // </label>
                // <br />
                // <label>
                //     LAMP stack<input type="radio" name="devcategory" value="LAMPStack"
                //         checked={this.state.radioGroup['LAMPStack']} onChange={this.radioHandler} />
                // </label>
                // <br /> <br /> <br />
                // Technologies
                //  <br /><br />
                // <label>
                //     MongoDB<input type="checkbox" name="tech" value="mongodb"
                //         checked={this.state.checkBoxGroup['mongodb']} onChange={this.checkBoxHandler} />
                // </label>
                // <br />
                // <label>
                //     Express <input type="checkbox" name="tech" value="express"
                //         checked={this.state.checkBoxGroup['express']} onChange={this.checkBoxHandler} />
                // </label>
                // <br />
                // <label>
                //     React<input type="checkbox" name="tech" value="angular"
                //         checked={this.state.checkBoxGroup['angular']} onChange={this.checkBoxHandler} />
                // </label>
                // <br />
                // <label>
                //     Node<input type="checkbox" name="tech" value="node"
                //         checked={this.state.checkBoxGroup['node']} onChange={this.checkBoxHandler} />
                // </label>

                // <br /> <br /> <br />

                // <select value={this.state.selectedValue} onChange={this.selectHandler}>
                //     <option value="python">Python</option>
                //     <option value="node">Node</option>
                //     <option value="ruby">Ruby On Rails</option>
                // </select>
            
        )
    }
}

export default Forms;
