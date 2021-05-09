import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './css/App.css';

//importing high order component...
import Layout from './hoc/layout/layout';
//Importing all the pages from COMPONENT / Mainpages....
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Service from './pages/Service/service';


const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/service' exact component={Service} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/home' exact component={Home} />
            </Switch>
        </Layout>
    );
};

export default Routes;