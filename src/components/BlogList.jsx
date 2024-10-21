// src/components/BlogList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost} from '../redux/actions'
import BlogItem from './BlogItem';

const BlogList = ({ setCurrentPost }) => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    return (
        <div>
            {posts.map((post) => (
                <BlogItem
                    key={post.id}
                    post={post}
                    deletePost={() => dispatch(deletePost(post.id))}
                    editPost={() => setCurrentPost(post)}
                />
            ))}
        </div>
    );
};

export default BlogList;
