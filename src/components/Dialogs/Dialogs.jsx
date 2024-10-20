
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                
                { dialogsElements }                    
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>                
                <div className="newMessage">
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter Your message' ></textarea><br/> 
                    <button onClick={onSendMessageClick}>Send</button>   
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;