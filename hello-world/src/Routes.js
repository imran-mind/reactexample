import React from 'react';
import App from './App';
import About from './About';
import Navbar from './Navbar'; 
import Contact from './Contact';

import createBrowserHistory from 'history/createBrowserHistory';

import {
    BrowserRouter as Router,
    Route,Link
} from 'react-router-dom';

const customHistory = createBrowserHistory();
const CustomRoutes = () => (
    <Router history ={customHistory}>
        <div>
           <Navbar/>
            <hr/>
            <Route exact path='/' component={App} />
            <Route path ='/about' component={About}/>
            <Route path ='/contact/:rollnum' component={Contact}/>
        </div>
    </Router>
)

 export default CustomRoutes;
