import React, { Component } from 'react';
//import {Route, Link} from 'react-router-dom';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

// styling
import './Blog.css';
// components
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

//import axios from "axios";
//import axios from '../../axios';

class Blog extends Component {
    state = {
        auth: false
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{color: "blue", textDecoration:"underline"}}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: '?quick-submit=true' // query params

                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
           
                {/* SWITCH loads only the first Route which matches the criteria and then stop. Route path order matters! */}
                <Switch>
                    {this.state.auth ? <Route path = "/new-post" component={NewPost}/> : null}
                    <Route path = "/posts" component={Posts}/>
                    {/* <Route path = "/:id" exact component={FullPost} /> */}
                    <Redirect from="/" to="/posts" /> {/* out of switch statement use without 'from' */}
                </Switch>
            </div>
        );
    }
}

export default Blog;