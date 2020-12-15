import React, { useState, useEffect } from 'react';
import { ArticleUl, ArticleLi, Color } from './style';
import { Link } from 'react-router-dom'
import 'whatwg-fetch';

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

export default function () {
  const [ articles, setArticles ] = useState([]);

  function getlistFetch() {
    fetch('/api/list',{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=> response.json())
    .then((data) => {
        let resData = data ? data.articles || [] : []
        setArticles(resData)
        console.log(resData)
    }).catch(e=>{console.log(e);})
  }

  useEffect(() => {
    // getlistFetch()
    fetch('/api/list',{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=> response.json())
    .then((data) => {
        let resData = data ? data.articles || [] : []
        setArticles(resData)
        console.log(resData)
    }).catch(e=>{console.log(e);})
  }, ['resData'])

  return (
    <div className="content-wrap">
      <ArticleList articles={articles} />
    </div>
  );
};