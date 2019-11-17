import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        { id: 0, message: 'Where are you, baby?', likesCount: 12 },
        { id: 1, message: 'What-s time?', likesCount: 8 },
        { id: 2, message: 'Are you ready?', likesCount: 4 },
        { id: 3, message: 'It\'s sound good', likesCount: 3 }
    ]

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} />
                <Post message={postData[3].message} likesCount={postData[3].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts