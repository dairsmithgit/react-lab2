import './PostForm.css';
import { useState } from 'react';
import Post from '../model/Post';

function PostForm() {

    // const [ display, setDisplay ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ thought, setThought ] = useState("");

    return (
        <div className="PostForm">
            <form>
                {/* <i className="fas fa-times-circle" onClick={classForm}></i> */}
                <p>
                    <label>Title<br></br>
                    <input className="title" type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                    </label>
                </p>
                <p>
                    <label>Thought<br></br>
                    <textarea className="thought" value={thought} onChange={e => setThought(e.target.value)}></textarea>
                    </label>
                </p>
                <p>
                    <button type="submit">Add Post</button>
                </p>
            </form>
        </div>
    )
}

export default PostForm;