import './SocialPosts.css';
import { useState } from 'react';
import Post from '../model/Post';
import PostForm from './PostForm';
import PostInList from './PostInList';

function SocialPosts() {

    const [showForm, setShowForm] = useState(false);

    const [ post, setNewPost ] = useState<Post[]>([
        { title: "Question", thought: "What's the most you've ever lost on a coin toss?"},
        { title: "Mishap", thought: "Aw, man. I shot Marvin in the face."},
        { title: "Goodnight", thought: "In case I don't see ya, good afternoon, good evening and goodnight."},
        { title: "Weird Dreams", thought: "You ever have that feeling where you're not sure if you're awake or still dreaming?"},
        { title: "Doctor Visit", thought: "I really need to go to the doctor to have my leg checked."},
    ]);

    function handleFormSubmit(post: Post): void {
        console.log(post);
        setShowForm(false);
    }

    return (
        <div className="SocialPosts">
            <h1 className="HeadingTitle">Thinker Feed </h1>
            <h2>Social media for people with big brains.</h2>
            <div className="ThoughtButton">
                <button className="NewThought" onClick={() => setShowForm(true)}>New Thought</button>
            </div>
            <section className="PostListContainer">
                {post.map((post, i) =>
                <PostInList key={i} post={post} />
                )}
            </section>
            {showForm && <PostForm onFormSubmit={handleFormSubmit}/>}
        </div>
    )
}

export default SocialPosts;