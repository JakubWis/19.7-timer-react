
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.display = props;
    this.reset();
    this.print(this.times);
  }

  times = () => {return [this.state.minutes, this.state.seconds, this.state.miliseconds]}

  reset = () => {
    this.setState({minutes: 0});
    this.setState({seconds: 0});
    this.setState({miliseconds: 0});
    this.print();
  }

  print = () => {
    return this.format(this.times);
  }

  format = (times) => {
     return `${pad0(this.state.minutes)}:${pad0(this.state.seconds)}:${pad0(Math.floor(this.state.miliseconds))}`;
  }

  start = () => {
    if (!this.state.running) {
      this.setState({running: true});
      this.watch = setInterval(() => this.step(), 10);
      document.getElementById('clock').classList.add("shake");
    }
  }

  step = ()  => {
    if (!this.state.running) return;
    this.calculate();
    this.print();
  }

  calculate = () => {
    let ms = this.state.miliseconds;
    let s = this.state.seconds;
    let m = this.state.minutes;
    this.setState({miliseconds: ms +1});
    if(this.state.miliseconds >= 100) {
      this.setState({seconds: s +1});
      this.setState({miliseconds: 0});
    }
    if(this.state.seconds >= 60) {
      this.setState({minutes: m +1});
      this.setState({seconds: 0});
    }
  }

  stop = () => {
    this.setState({running: false});
    clearInterval(this.watch);
    document.getElementById('clock').classList.remove("shake");
  }

  save = () => {
    var li = document.createElement("li");
    li.innerText = this.print();
    document.getElementById('list').appendChild(li);
    document.getElementById('delHistory').classList.remove("hide");
  }


  render() {
    return (
      <div className='app'>
        <nav className="controls">
          <a href="#" className="button" onClick={this.start}>Start</a>
          <a href="#" className="button" onClick={this.stop}>Stop</a>
          <a href="#" className="button" onClick={this.reset}>Reset</a>
          <a href="#" className="button" onClick={this.save}>Save time</a>
        </nav>
        <Clock
        print={this.print}/>
      </div>
    );
  }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}