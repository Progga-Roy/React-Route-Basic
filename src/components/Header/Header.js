import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
             <h2>Welcome to my routing website</h2>
             <nav>
                 <CustomLink to={'/'}>Home</CustomLink> 
                 <CustomLink to={"/friend"}>Friend</CustomLink>
                 <CustomLink to={"/about"}>About</CustomLink>
                 <CustomLink to={"/posts"}>Posts</CustomLink>
                 <CustomLink to={"/foods"}>Food</CustomLink>
             </nav>
        </div>
    );
};

export default Header;