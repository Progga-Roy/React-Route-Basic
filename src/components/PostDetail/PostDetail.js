import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setPost(data))
    }, [postId])
    return (
        <div>
            <h3>Here is all the post details: {postId}</h3>
            <h4>Title: {post.title}</h4>
            <h5>Body: {post.body}</h5>
        </div>
    );
};

export default PostDetail;