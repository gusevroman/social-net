import React from 'react';
import s from './MyPosts.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, How are you?' LikesCount='5'/>
                <Post message='It\'s my first post!' LikesCount='12'/>
            </div>
        </div>
    )
}

export default MyPosts;