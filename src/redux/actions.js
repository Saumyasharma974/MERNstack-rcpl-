// src/redux/actions.js
let nextPostId = 1;

export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: { ...post, id: nextPostId++ },
});

export const editPost = (post) => ({
    type: 'EDIT_POST',
    payload: post,
});

export const deletePost = (id) => ({
    type: 'DELETE_POST',
    payload: { id },
});
