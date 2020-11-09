import React from 'react';
import {Link} from 'react-router-dom';
export default function () {
    return (
      <div className="App-header">
        <ul className="logo-wrap">
          <li><Link to="/">XX系统</Link></li>
        </ul>
        <ul className="menu-wrap">
          <li><Link to="/article">我的文章</Link></li>
          <li><Link to="/aboutMe">关于我</Link></li>
        </ul>
      </div>
    );
  };