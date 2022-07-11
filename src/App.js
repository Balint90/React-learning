import React from "react";

const title = "Blog post"
const body = 'This is my blogpost'
const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'}
]

const loading = false
const showComments = false

const commentBlock = (<div className="comments">
<h3>Comments ({comments.length})</h3>
<ul>
    {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>
    ))}
</ul>
</div>)

function App() {
    // return React.createElement("div", {className: 'container'}), React.createElement('h1', {}, 'My App')
    if (loading) return <h1>Loading...</h1>
    return (
    <div className="container">
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

        {showComments && commentBlock}

        
    </div>)
}

export default App