import React from 'react';
import { Link } from 'gatsby';


export default function Nav() {
    return (
        <nav>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
        </nav>
    );
}