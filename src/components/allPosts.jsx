import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './post'
import axios from 'axios'

class AllPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: null
    }
    this.getPosts = this.getPosts.bind(this)
  }
   componentDidMount() {
     this.getPosts()
   }

   getPosts() {
     var self = this
     axios({
        url: 'https://bruhbook-api.herokuapp.com',
        mode: 'no-cors'
        })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
    }
  
     render() {
       console.log(this.state.posts)
       if (this.state.posts !== null) {
         return (
           <div className='post-list'>
              {this.state.posts.map(post => <Post id={post.id}
                                             message={post.message}
                                             username={post.username}
                                          created_at={post.created_at}/>
                                            )}
            </div>
         )
       } else {
         return (
         <div></div>
       )
       }
     }
  }
  export default AllPosts