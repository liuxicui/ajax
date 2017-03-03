import React from 'react';
import axios from 'axios';

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      accesstoken:'',
      user:null
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('https://cnodejs.org/api/v1/accesstoken',
      {accesstoken:this.state.accesstoken})
      .then( res=> {
        this.setState({user:res.data,accesstoken:''}),
        localStorage.setItem('user',JSON.stringify(res.data))
      } )
      .catch( err => alert('登录失败'))
  }
  handleClick(){
     this.setState({ user:{}});
     localStorage.setItem('user',JSON.stringify({}))
  }
  componentWillMount(){
      this.setState({user:JSON.parse(localStorage.getItem('user') || '{}')})
  }
  render(){
    return(
      <div>
        {this.state.user.id ?
            <div>
              <span>欢迎登录:{this.state.user.loginname}</span>
              <button onClick={this.handleClick.bind(this)}>登出</button>
            </div>
          :
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor='accesstoken'>accesstoken</label>
            <input name='accesstoken' value={this.state.accesstoken} onChange={ e=> this.setState({accesstoken:e.target.value})}/>
            <button>登录</button>
          </form>
      }
      </div>
    )
  }
}

export default Header;
