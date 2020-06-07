import React, { Component } from 'react';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './AboutComponent'
import Home from './HomeComponent'
import Navi from './NavComponent';
import SignUp from './SignupComponent';
import Login from './LoginComponent';
import Courses from './CoursesComponent';
import Payment from './PaymentComponent';
import Account from './MyAccountComponent';
import SingleCourseComponent from './SingleCourseComponent';
import { Cookies, withCookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Main extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };

    constructor(props){
        super(props);

        const { cookies } = props;
        this.state = {
            isLoggedIn: cookies.get('isLoggedIn') || false,
            currentUserEmail: cookies.get('currentUserEmail') || ''
        };
        this.loginToggler = this.loginToggler.bind(this)
        this.logoutToggler = this.logoutToggler.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
    }

    updateEmail(em) {
        const { cookies } = this.props;
        cookies.set('currentUserEmail', em, { path: '/' });
        this.setState({currentUserEmail: em});
    }

    loginToggler() {
        const { cookies } = this.props;
        cookies.set('isLoggedIn', true, { path: '/' });
        this.setState({isLoggedIn: true});
    }

    logoutToggler() {
        const { cookies } = this.props;
        cookies.set('isLoggedIn', false, { path: '/' });
        cookies.set('currentUserEmail', '', { path: '/' });
        this.setState({isLoggedIn: false});
        this.setState({currentUserEmail: ''});
    }

    componentDidMount() {
        console.log("email : " + this.state.currentUserEmail)
    }
    componentDidUpdate() {
        console.log("email : " + this.state.currentUserEmail)
    }

    render(){
        return(
            <div className="Main">
                <Navi isLoggedIn={this.state.isLoggedIn}
                        loginToggler={this.loginToggler}
                        logoutToggler={this.logoutToggler}/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/courses" component={Courses}/>
                    <Route exact path="/course" component={SingleCourseComponent}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/signup" render={(props) =>
                        <SignUp {...props} isLoggedIn={this.state.isLoggedIn}/>}/>

                    <Route exact path="/login" render={(props) =>
                        <Login {...props} isLoggedIn={this.state.isLoggedIn}
                         loginToggler={this.loginToggler}
                         updateEmail={this.updateEmail}/>}/>

                    <Route exact path="/payment" render={(props) =>
                        <Payment {...props} isLoggedIn={this.state.isLoggedIn}/>}/>

                    <Route exact path="/account" render={(props) =>
                        <Account {...props} isLoggedIn={this.state.isLoggedIn}
                            currentUserEmail={this.state.currentUserEmail}/>}/>

                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withCookies(Main);