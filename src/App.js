import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Toast from './components/Toast';
import logo from './assets/logo.png';

const electronRemote = window.require('electron').remote;
const {Menu, MenuItem} = electronRemote;
const menu = new Menu ();

export default class App extends Component {

  constructor () {
    super();
    this.state = {
      error: "",
    }

    menu.append (new MenuItem ({role: 'appMenu'}));
    menu.append (new MenuItem ({role: 'fileMenu'}));
    
    Menu.setApplicationMenu(menu);
  }

  render() {

    return (
      <div className="container pt-4">
        <center>
          <img src={logo} alt="logo" width="200px"/>
          <h3>Run server with <pre>yarn dev</pre></h3>
          <h3>Build with <pre>yarn build</pre></h3>
          <h3>Create distributeables with <pre>yarn dist</pre></h3>
          <h3>Or create distributeables for specific platforms with for example <pre>yarn dist --win</pre></h3>
        </center>
        <Toast id="toast-success" title="Success!" body="Printed successfully!" color='green'/>
        <Toast id="toast-error" title="Error!" body={this.state.error} color='brown'/>
      </div>
    );
  }

  showToast() {
    this.setState({error: 'Biiiiig error!'});
    $('#toast-error').toast({delay: 2000}).toast('show');
  }
}