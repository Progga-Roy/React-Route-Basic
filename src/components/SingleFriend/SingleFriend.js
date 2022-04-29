import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleFriend = (props) => {
    const {name, username,id} = props.friend
    const navigate = useNavigate()
    const showFriendsDetail = () =>{
    const path = `/friend/${id}`
    navigate(path)
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/'+ id}>show detail</Link>
            <button onClick={showFriendsDetail}>{username}, id:{id}</button>
        </div>
    );
};

export default SingleFriend;