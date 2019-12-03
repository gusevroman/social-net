import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 1519
        }
        this.props.getUserProfile(userID);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

