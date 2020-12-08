import React from 'react';
class Clock extends React.Component <{
  name ?: string
},
{
  date ?: any
}
>{
  private timerID: any;
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default function () {
    return (
      <div className="content-wrap">
        关于我
        <Clock name="Sara"></Clock>
      </div>
    );
  };