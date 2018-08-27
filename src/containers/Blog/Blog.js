import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from "axios";


class Blog extends Component {
    state = {
        posts: [],
        postSelectedId: null,
        error: false
    }

    componentDidMount () {
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
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        // no error
        if(!this.state.error) {
           posts = this.state.posts.map(post => {
                return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={()=> this.postSelectedHandler(post.id) }
                 />;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;