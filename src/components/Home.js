import React, {Component} from 'react'
import axios from 'axios'


class Home extends Component {
  state = {
    posts:[]
  }
  componentDidMount() {
    axios.get('https://api.nytimes.com/svc/topstories/v2/food.json?api-key=3014d0ff0ef5478a87cbb3a6bcaacb0b')
       .then(res =>{
         console.log(res)
         this.setState({
           posts: res.data.results.slice(0,10)
         })
    })
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
            <img src={post.multimedia[0].url} alt=""/>
              <span className="card-title">{post.title}</span>
              <p>{post.abstract}</p>
              <a href={post.url} >Link da notícia</a>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">Carregando os posts!</div>
    )
    return (
      <div>
        <div className="container">
          <h4 className="center">Food</h4>
         {postList}
        </div>
      </div>
    )
  } 
}

export default Home