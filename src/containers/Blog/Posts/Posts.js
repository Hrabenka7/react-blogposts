import React, { Component } from 'react';
import axios from '../../../axios'; 
import {Route, Link} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css'
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
        postSelectedId: null,
        error: false
    }

    componentDidMount () {
        console.log("One:" + this.props)
        axios.get('/posts') // error handling if URL is wrong
        .then(response => {
            const posts = response.data.slice(0,4); // first 4 posts
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max' // add author Max to the posts
                }
            });
            this.setState({posts: updatedPosts})
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            this.setState({error: true});
        });
    }


    postSelectedHandler = (id) => {
        this.setState({selectedPostId:id})
        //this.props.history.push('/posts/' + id) Navigating programmatically - add key to Post
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        console.log("Two rendered")
        // no error
        if(!this.state.error) {
            console.log("test")
           posts = this.state.posts.map(post => {
                return (
                    <Link to={'/posts/' + post.id} key={post.id}>   
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={()=> this.postSelectedHandler(post.id) }
                        />
                    </Link> 
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> {/* dynamical nested routing */}
            </div>
        );
    }
}

export default Posts;