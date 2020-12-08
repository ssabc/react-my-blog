import React, { useState, useEffect }from 'react';
function Example() {
  let timerID = null
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    timerID = setInterval(
      () =>{
        setDate(new Date())
      },
      1000
    );
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <div>
        <div>
          <span>It is {date.toLocaleTimeString()}</span>
        </div>
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
  export default function () {
    return <div className="App-home">
      <div className="mian-content">
        <div className="show-tip">
          <div>你好，有缘人！</div>
          <Example></Example>
        </div>
        <div className="leave leave-1"></div>
        <div className="leave leave-2"></div>
        <div className="leave leave-3"></div>
        <div className="leave leave-4"></div>
        <div className="ops-wrap">
            <div className="button"> 文章</div>
            <div className="button"> 我</div>
        </div>
      </div>
    </div>
  }