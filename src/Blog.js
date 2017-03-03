import React from 'react';
import axios from 'axios';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      blog:{}
    }
  }
  componentDidMount(){
    axios.get(`https://cnodejs.org/api/v1/topic/${this.props.params.id}`)
      .then( res => this.setState({blog: res.data.data}) )
  }
  handleClick(){
    this.props.router.push('/');
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>返回首页</button>
        <div dangerouslySetInnerHTML={{__html:this.state.blog.content}} className='blog'></div>
      </div>
    )
  }
}

export default Blog;
