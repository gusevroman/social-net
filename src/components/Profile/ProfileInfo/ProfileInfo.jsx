import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    let imgSource = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1010079.jpg&f=1&nofb=1';

    return (
        <div>
            <div className={s.img}>
                <img src={imgSource} alt='some pictures from Internet' />
            </div>
            <div className={s.descriptionBlock} >
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"Hi"}/>
            </div>
        </div>
    );
};

export default ProfileInfo;


