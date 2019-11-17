import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'


const Dialogs = () => {

    let dialogs = [
        { id: 0, name: 'Goooose' },
        { id: 1, name: 'Wolf' },
        { id: 2, name: 'Martlet' },
        { id: 4, name: 'Pepper' },
        { id: 5, name: 'Squirrel' }
    ]

    let messages = [
        { id: 0, message: 'How do you do' },
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Bla-lallo' }
    ]

    let dialogsElement = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElement = messages.map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
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