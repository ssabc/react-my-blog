import React from 'react';
import { ArticleUl, ArticleLi, Color } from './style';
import { Link } from 'react-router-dom'
export default function () {
    function ListItem(props) {
      const item = props.item
      let color = Color()
      return (
        <Link to={`/detail/${item.id}`}>
          <ArticleLi style={{boxShadow: `0 0 8px 2px ${color}`}}>
            <div className="title">
              <span style={{color: color}}>{item.title}</span>
            </div>
            <div className="desc"><span>{item.desc}</span></div>
            <div className="date"><span>{item.publishDate}</span></div>
          </ArticleLi>
        </Link>
      )
    }
    
    function ArticleList(props) {
      const list = props.articles
      const listItems = list.map((item) => {
         return <ListItem key={item.id} item={item} />
      })
      return (
        <ArticleUl>
          { listItems }
        </ArticleUl>
      )
    }
    const articles = []
    for(let i=0; i< 10; i++) {
      articles.push({
        id: `${i+1}`,
        title: `我的第${i+1}篇文章`,
        desc: "关于react的一些使用技巧、分享给大家，欢迎大家多多指教！",
        publishDate: "2020-01-23"
      })
    } 
    return (
      <div className="content-wrap">
        <ArticleList articles={articles} />
      </div>
    );
  };