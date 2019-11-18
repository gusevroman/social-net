import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css'


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active + s.img}>
            <NavLink to={path}>
                <div className={s.img}>
                    <img src={props.avatarImg} alt='avka' />
                </div>
                {props.name}
            </NavLink>
        </div>
    )
}


export default DialogItem

