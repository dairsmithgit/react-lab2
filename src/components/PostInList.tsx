import './PostInList.css';
import { useState } from 'react';
import Post from '../model/Post';

export interface Props {
    post: Post;
}

function PostInList({post}: Props) {

    const title = post.title;
    const thought = post.thought;

    return (
        <div className="PostInList">
            <h2>{title}</h2>
            <p>{thought}</p>
        </div>
    )
}

export default PostInList;