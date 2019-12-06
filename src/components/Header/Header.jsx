import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

const imgSource = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fokcstorm.com%2Fwp-content%2Fuploads%2F2016%2F12%2FBasketball-11.jpg&f=1&nofb=1'

const Header = (props) => {
    return <header className={s.header}>
        <img src={imgSource} alt='some pictures from Internet'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>
                    {props.login} - <button onClick={props.logout}>logout</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>

};

export default Header;