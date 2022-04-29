import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const FriendDetail = () => {
    const location = useLocation();
    console.log(location)
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    useEffect (()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setFriend(data))
    },[])
    return (
        <div>
            <h2>Here , all the details of friend : {friendId} </h2>
            <h3>Name :{friend.name}</h3>
            <h4>Email :{friend.email}</h4>
            <h5>Website: {friend.website}</h5>
            <h6>Address: {friend.address?.city}</h6>
            <p>Lat : {friend.address?.geo?.lat}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;