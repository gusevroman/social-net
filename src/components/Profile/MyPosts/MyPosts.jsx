import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div>
            My posts
        <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.postBlock}>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts