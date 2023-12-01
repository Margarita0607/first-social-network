import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
        <img src='https://sun1.userapi.com/sun1-83/s/v1/ig2/MyT0XT4xhas11LzeruQvgtfr3ayXoNgNLU9xYWfLED3GyvUe2oSJ7zxgBzEwfbrj_Bh8SYB1tbnDQwCobaShh32U.jpg?size=400x400&quality=95&crop=336,0,588,588&ava=1' alt='#'></img>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
    )
}

export default Post;