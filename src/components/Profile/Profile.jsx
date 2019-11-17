import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div className={s.img}>
                <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1010079.jpg&f=1&nofb=1' alt='some pictures from Internet' />
            </div>
            <div>
                ava+description
        </div>
            <MyPosts />
        </div>
    )
}

export default Profile