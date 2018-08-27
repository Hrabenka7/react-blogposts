import React, { Component } from 'react';
import './Blog.css';
//import axios from "axios";
import axios from '../../axios';


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
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;