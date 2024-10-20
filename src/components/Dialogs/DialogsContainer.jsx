import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    // let state = props.store.getState().dialogsPage;

    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator());
    // }
    // let onNewMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body));
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };

                return (
                    <Dialogs
                        dialogsPage={state}
                        sendMessage={onSendMessageClick}
                        updateNewMessageBody={onNewMessageChange}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
