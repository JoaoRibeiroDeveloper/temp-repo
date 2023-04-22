// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Posts } from './components/Posts';
import { loadPosts } from '../utils/load-posts';


//componente de class
//stateless
class AppDataFetch extends Component{

  state = {
    posts : []
  };

  async componentDidMount(){
    await this.loadPosts()
    
  }

  loadPosts = async () => {
    const postWithPhotos = await loadPosts();
    this.setState({posts: postWithPhotos})
  }
  
  render(){
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    )
  }
}

export default AppDataFetch;
