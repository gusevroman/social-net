import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
// import { addPost } from '../../redux/state';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost} />
        </div>
    )
}

export default Profile