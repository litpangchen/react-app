import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import "./App.css";
import TopNavigation from "./navigation/TopNavigation";
import HomePage from "./components/HomePage";
import GuestRoute from "./components/routes/GuestRoute";
import LoginForm from "./components/LoginForm";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="App">
                    <div className="container-fluid">
                        <p>
                           
                        </p>
                        {this.props.isAuthenticated && <TopNavigation />}
                        <Route location={this.props.location} path="/" exact component={HomePage}/>
                        <GuestRoute location={this.props.location} path="/login" exact component={LoginForm}/>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email
    }
}

export default connect(mapStateToProps)(App);
