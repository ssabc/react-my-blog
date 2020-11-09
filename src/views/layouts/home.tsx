import React from 'react';
class Clock extends React.Component {
  timerID: any;
  state = {
    date: new Date()};

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <div>
          <span>It is {this.state.date.toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }
}


  export default function () {
    return <div className="App-home">
      <div className="mian-content">
        <div className="show-tip">
          <div>你好，有缘人！</div>
          <Clock></Clock>
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