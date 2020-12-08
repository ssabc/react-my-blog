import React from 'react';
import { Link } from 'react-router-dom'
export default class HeaderComp extends React.Component {
  state = {
    name: 'zs'
  }

  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <div className="App-header">
        <ul className="logo-wrap">
          <li><Link to="/">XX系统</Link></li>
        </ul>to
        <ul className="menu-wrap">
          <li><Link to="/article">我的文章{this.state.name}</Link></li>
          <li><Link to="/aboutMe">关于我</Link></li>
        </ul>
      </div>
    );
  }
}