import React, { useState, useEffect } from 'react';
import { ArticleDetailWrap } from './detailStyle'
import { Color } from './style';

const detailData = {
  title: `我的第-篇文章`,
  desc: `关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教关于react的一些使用技巧、分享给大家，欢迎大家多多指教关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教
  关于react的一些使用技巧、分享给大家，欢迎大家多多指教！`,
  publishDate: "2020-01-23"
}
export default function (props) {
  const [detailId, setDetailId] = useState('');

  useEffect(() => {
    setDetailId(props.match.params.id)
    document.title = `第${detailId}篇文章`
  });

  return (
    <ArticleDetailWrap style={{backgroundColor: Color(.3)}}>
      <div className="hd-wrap">
        <span className="title">{`第${detailId}篇文章`}</span>
      </div>
      <div className="desc-wrap">
        <span className="desc">{detailData.desc}</span>
      </div>
      <div className="ft-wrap">
        <span className="date">{detailData.publishDate}</span>
      </div>
    </ArticleDetailWrap>
  );
}