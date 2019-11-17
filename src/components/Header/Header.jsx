import React from 'react'
import s from './Header.module.css'

const imgSource='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fokcstorm.com%2Fwp-content%2Fuploads%2F2016%2F12%2FBasketball-11.jpg&f=1&nofb=1'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={imgSource} alt='some pictures from Internet'/>
        </header>
    )
}

export default Header