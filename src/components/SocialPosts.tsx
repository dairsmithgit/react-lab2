import './SocialPosts.css';
import { useState } from 'react';
import Post from '../model/Post';
import PostForm from './PostForm';
import PostInList from './PostInList';

function SocialPosts() {

    const [ post, setNewPost ] = useState<Post[]>([
        { title: "Question", thought: "What's the most you've ever lost on a coin toss?"},
        { title: "Mishap", thought: "Aw, man. I shot Marvin in the face."},
        { title: "Goodnight", thought: "In case I don't see ya, good afternoon, good evening and goodnight."},
        { title: "Weird Dreams", thought: "You ever have that feeling where you're not sure if you're awake or still dreaming?"},
        { title: "Doctor Visit", thought: "I really need to go to the doctor to have my leg checked."},
    ]);

    return (
        <div className="SocialPosts">
            <h1 className="HeadingTitle">Thinker Feed </h1>
            <h2>Social media for people with big brains.</h2>
            <div className="ThoughtButton">
                <button className="NewThought">New Thought</button>
            </div>
            <section className="PostListContainer">
                {post.map((post, i) =>
                <PostInList key={i} post={post} />
                )}
            </section>
        </div>
    )
}

export default SocialPosts;