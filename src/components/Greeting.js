import React from "react";
import {connect} from "react-redux";
import {getTranslate, setActiveLanguage} from "react-localize-redux";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeLanguage(e) {
        this.props.setActiveLanguage('en');
    }

    render() {
        return (
            <div>
                <button onClick={this.onChangeLanguage.bind(this)}>{ this.props.translate('farwell') }</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale)
});

function mapDispatchToProps(dispatch) {
    return {
        setActiveLanguage: function (language) {
            dispatch(setActiveLanguage(language));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
