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
import PaymentSucess from './PaymentSuccess';
import MidPay from './MidpayComponent';
import Admin from './Admin';
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
            currentUserEmail: cookies.get('currentUserEmail') || '',
            courseID: cookies.get('courseID') || 0,
        };
        this.loginToggler = this.loginToggler.bind(this);
        this.logoutToggler = this.logoutToggler.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateCourseID = this.updateCourseID.bind(this);
    }

    updateCourseID(cID) {
        const { cookies } = this.props;
        cookies.set('courseID', cID, { path: '/' });
        this.setState({courseID: cID});
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
        console.log("email : " + this.state.currentUserEmail);
    }
    componentDidUpdate() {
        console.log("email : " + this.state.currentUserEmail);
    }

    render(){
        return(
            <div className="Main">
                <Navi isLoggedIn={this.state.isLoggedIn}
                        loginToggler={this.loginToggler}
                        logoutToggler={this.logoutToggler}/>
                <Switch>

                    <Route path="/home" component={Home}/>

                    <Route path="/admin" render={(props) =>
                        <Admin {...props}
                        currentUserEmail={this.state.currentUserEmail}/>}/>

                    <Route exact path="/courses" render={(props) =>
                        <Courses {...props}
                        currentUserEmail={this.state.currentUserEmail}
                        courseID={this.state.courseID}
                        updateCourseID={this.updateCourseID}/>}/>

                    <Route exact path="/about" component={About}/>

                    <Route path="/midpay" render={(props) =>
                        <MidPay {...props}
                        currentUserEmail={this.state.currentUserEmail}/>}/>

                    <Route exact path="/course" render={(props) =>
                        <SingleCourseComponent {...props}
                        currentUserEmail={this.state.currentUserEmail}
                        courseID={this.state.courseID}/>}/>

                    <Route exact path="/paymentsuccess" render={(props) =>
                        <PaymentSucess {...props}
                        currentUserEmail={this.state.currentUserEmail}/>}/>

                    <Route exact path="/signup" render={(props) =>
                        <SignUp {...props} isLoggedIn={this.state.isLoggedIn}
                         loginToggler={this.loginToggler}
                         updateEmail={this.updateEmail}
                         currentUserEmail={this.state.currentUserEmail}
                        />}/>

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