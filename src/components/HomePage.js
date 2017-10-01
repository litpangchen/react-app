import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../actions/auth";
import Greeting from "./Greeting";
import {HomePageTitle} from "../components/style/Style";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        HomePageTitle: "Home Page"
    };

    logout() {
        this.props.logout();
    }

    render() {
        let topNavigation = <div>
            <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
        </div>;
        if (this.props.isAuthenticated) {
            topNavigation = <button className="btn btn-default" onClick={this.logout.bind(this)}>Logout</button>
        }

        return (
            <div style={{textAlign:'center'}}>
                <HomePageTitle>{this.props.HomePageTitle}</HomePageTitle>
                <Greeting />
                {/*<h1 className="Header-title">{this.props.HomePageTitle}</h1> */}
                {topNavigation}
            </div>
        )
    }
}

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: function () {
            dispatch(logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
