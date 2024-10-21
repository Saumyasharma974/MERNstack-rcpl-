// src/components/BlogItem.js
import React from 'react';

const BlogItem = ({ post, deletePost, editPost }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={editPost}>Edit</button>
            <button onClick={deletePost}>Delete</button>
        </div>
    );
};

export default BlogItem;
