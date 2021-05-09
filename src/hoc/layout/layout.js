import React, { Component } from 'react'

//importing Component...
import Header from '../../components/Navbar/navbar';
//import Footer from '../../components/Footer/footer';

//importing Layout Style..
import '../../css/App.css';

class Layout extends Component {

    // state={
    //     showNav:false
    // }

    // toggleSidenav = (action) => {
    //     this.setState({
    //         showNav:action
    //     })
    // }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Layout;
