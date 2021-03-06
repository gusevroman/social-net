import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    let imgSource = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F2073490.jpg&f=1&nofb=1';

    return (
        <div className={s.item}>
            <img src={imgSource} alt='My avatar' />
            {props.message}
            <div className={s.likeCount}>
                <span>like </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;