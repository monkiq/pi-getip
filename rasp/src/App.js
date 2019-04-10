import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
                K2P路由WAN口IP
          </p>
          <div id="example"></div>
          <div id="test"></div>
        </header>
      </div>
    );
  }
}
class Refresh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip:[],
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(event){
    this.setState({ip:[]});
    this.getData();
  }
  getData(){
    fetch('http://192.168.6.80:5000',{
      method: 'GET',
    }).then(response => response.json())
    .then(data =>{
      console.log(data);
      this.setState({ ip: data });
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
      <Button variant="primary" id="_ip">
       {this.state.ip['ip']} 
      </Button>
      <Button variant="success" onClick={this.handleClick}>Refresh</Button>
      </div>
    );
  }
}
export default App;
export  {Refresh}
