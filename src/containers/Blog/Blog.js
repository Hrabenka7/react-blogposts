import React, { Component } from 'react';
//import {Route, Link} from 'react-router-dom';
import {Route, NavLink} from 'react-router-dom';

// styling
import './Blog.css';
// components
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'

//import axios from "axios";
//import axios from '../../axios';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="my-active" activeStyle={{color: "blue", textDecoration:"underline"}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: '?quick-submit=true' // query params

                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               <Route path = "/" exact  component={Posts}/>
               <Route path = "/new-post" exact  component={NewPost}/>
            </div>
        );
    }
}

export default Blog;