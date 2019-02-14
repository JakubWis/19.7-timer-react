class Clock extends React.Component {

  render() {
    return (
      <div className="box">
      <div className="clock" id="clock">
        <div className="inner-clock">
          <div className="stopwatch">{this.props.print()}</div>
        </div>
      </div>  
      <ol className='list' id='list'></ol>
      <a href="#" className="button hide" id="delHistory">Delete history</a> 
      </div>
     )
  }
}