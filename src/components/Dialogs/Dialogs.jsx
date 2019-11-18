import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatarImg={dialog.avatarImg} />)

    let messageElement = props.state.messages.map(message => <Message message={message.message} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        let addTextPost = newPostElement.current.value
        alert('You added post: "' + addTextPost + '" , are you sure?')
    }

    return (

        <div className={s.dialogs}>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs