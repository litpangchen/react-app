import React from "react";
import {setVisibilityFilter} from "../actions/todo";
import Link from "./Link";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;