
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        alert(text);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                
                { dialogsElements }                    
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div className="newMessage">
                    <textarea ref={newPost}></textarea><br/>
                    <button onClick={addPost}>Write Post</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;