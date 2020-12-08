import React, { Component, lazy, Suspense  } from 'react'
import { Router, Switch,Route,Redirect } from 'react-router-dom'
import HeaderComp from '../views/layouts/header'
import FooterComp from '../views/layouts/footer'
import Home from '../views/layouts/home'
import AboutMe from '../views/aboutMe'
import ArticleDetail from '../views/articles/detail'
import Articles from '../views/articles'

import { createHashHistory } from 'history';
const browserHistory = createHashHistory();

class Routes extends Component{
    render(){
        return(
            <div className="App">
                <HeaderComp></HeaderComp>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/aboutMe" component={AboutMe}></Route>
                    <Route path="/article" component={Articles}></Route>
                    <Route path="/detail/:id" component={ArticleDetail}></Route>
                </Switch>
                <FooterComp></FooterComp>
                <div className="video-bg">
                    <video  
                    autoPlay={true}
                    muted={true} 
                    loop={true}
                    poster="//ci.xiaohongshu.com/9e244c50-108b-41df-b649-537f318124a9" 
                    src="https://dc.xhscdn.com/9379abe0-7ad8-11e9-8794-9320f6c9d557/%E8%83%8C%E6%99%AF%E8%A7%86%E9%A2%91.mp4" 
                    preload="auto" className="my-video"></video>
                </div>
            </div>
        )
    }
}
export default Routes