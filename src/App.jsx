// src/App.js
import React, { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import './index.css'; // Ensure you import the CSS file

const App = () => {
    const [currentPost, setCurrentPost] = useState(null);

    return (
        <div className="app-container"> {/* Add the class here */}
            <h1>Simple Blog Application</h1>
            <BlogForm currentPost={currentPost} setCurrentPost={setCurrentPost} />
            <BlogList setCurrentPost={setCurrentPost} />
        </div>
    );
};

export default App;
