// src/components/BlogForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '../redux/actions';




const BlogForm = ({ currentPost, setCurrentPost }) => {
    const [title, setTitle] = useState(currentPost ? currentPost.title : '');
    const [content, setContent] = useState(currentPost ? currentPost.content : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPost) {
            dispatch(editPost({ ...currentPost, title, content }));
        } else {
            dispatch(addPost({ title, content }));



        }
        setTitle('');
        setContent('');
        setCurrentPost(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">{currentPost ? 'Update Post' : 'Add Post'}</button>
        </form>
    );
};

export default BlogForm;
