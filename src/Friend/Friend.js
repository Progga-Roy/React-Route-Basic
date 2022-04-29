import React, { useEffect, useState } from 'react';
import SingleFriend from '../components/SingleFriend/SingleFriend';

const Friend = () => {
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setFriends(data))
    },[])
    return (
        <div>
            <h1>Hello friend</h1>
             <h5>Friends number : {friends.length}</h5>
             {
                 friends.map(friend => <SingleFriend friend={friend}></SingleFriend>)
             }
        </div>
    );
};

export default Friend;