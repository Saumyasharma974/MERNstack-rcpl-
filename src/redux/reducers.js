// src/redux/reducers.js
const initialState = {
    posts: [],
};

export const  blogReducer=(state = initialState, action)=> {
    switch (action.type) {
        case 'ADD_POST':
            return { ...state, posts: [...state.posts, action.payload] };
        case 'EDIT_POST':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                ),
            };
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload.id),
            };
        default:
            return state;
    }
}


