

class CustomLink extends React.Component {
    render() {
        console.log("--------props----------");
        console.log(this.props)
        return (
            React.createElement('a',this.props,this.props.linkText)
        )
    }
}


var myLinks = React.createElement('div',null,
    React.createElement(CustomLink,{href:'https://www.google.com',linkText:'Google'}),
    React.createElement(CustomLink,{href:'https://www.linkedin.com',linkText:'LinkedIn'}),
    React.createElement(CustomLink,{href:'https://www.youtube.com',linkText:'Youtube'})
);



var content = document.getElementById('content');
ReactDOM.render(myLinks, content);
