import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(updateNewMessageBodyCreator());
        },
        sendMessage: (body) => {
            dispatch(sendMessageCreator(body));
        }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
