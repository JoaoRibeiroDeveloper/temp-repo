import './style.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';

export class Home extends Component{

  state = {
    posts : [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
  };

  async componentDidMount(){
    await this.loadPosts()
    
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state;
    const allPosts = await loadPosts();
    const posts = allPosts.slice(page, postsPerPage);
    this.setState({posts, allPosts})
  }

  loadMorePosts = () => {
    const {posts, allPosts, page, postsPerPage} = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({searchValue: value});
  }
  
  render(){
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      : posts;
      
    return (
      <section className="container">


        <div className='search-container'>
          {!!searchValue && (
            <h1>searchV Value: {searchValue}</h1>
          )}
        
          <InputText
            placeholder={'Digite o título do post'}
            handleChange={this.handleChange}
            searchValue={searchValue}
          />
        </div>


        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Não existem posts =(</p>
        )}
        
        <div className='button-container'>
          {!searchValue && (
            <Button
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    )
  }
}
