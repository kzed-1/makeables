import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = (state) => ({
    userInfo: {
        username: "",
        email: "",
        password: ""
    },
    errors: state.errors.session,
    formType: "Sign Me Up !",
    navLink: <Link to="/login">Login>></Link>
});


const mdp = (dispatch) => ({
    submitForm: (formUser) => dispatch(signup(formUser))
});

export default connect(msp, mdp)(SessionForm);