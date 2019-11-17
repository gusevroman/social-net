import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.dribbble.com/users/103155/screenshots/2495359/hipsterova.jpg'  alt='some pictures from Internet'/>
            </div>
            <div className={s.descriptionBlock} >
            </div>
        </div>
    )
};

export default ProfileInfo;