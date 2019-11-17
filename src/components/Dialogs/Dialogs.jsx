import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'


const Dialogs = () => {

    let dialogsData = [
        { id: 0, name: 'Goooose' },
        { id: 1, name: 'Wolf' },
        { id: 2, name: 'Martlet' },
        { id: 4, name: 'Pepper' },
        { id: 5, name: 'Squirrel' }
    ]

    let messageData = [
        {id: 0, message: 'How do you do'},
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Bla-lallo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs