import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/UI/Card';
import './Auth.css';

const userApp = [
  {userName:'mojtaba', email: 'mojtabaas95@gmail.com'},
  {userName: 'example', email: 'example@example.com'},
  {userName:'sample', email: 'sample@sample.com'}
];
const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


class Auth extends Component {

  state = {
    disabledLogin: true,
    isValid: false,
    error: null
  }

  checkValidity = (userName, email) => {
    if (
        userName.trim() !== '' &&
        email.trim !== '' &&
        pattern.test(email)
      ) {
        this.setState({isValid: true, disabledLogin: false, error: null});
      }
  };

  nameChangeHandler = (event) => {
    this.setState({error: null});
    this.props.onSetUserName(event.target.value);
    this.checkValidity(event.target.value, this.props.email);
  };
  
  emailChangeHandler = (event) => {
    this.setState({error: null});
    this.props.onSetEmail(event.target.value);
    this.checkValidity(this.props.userName, event.target.value);
  };

  LoginHandler = (event) => {
    event.preventDefault();
    for (const user of userApp) {
      if (
          this.props.userName.trim().toLowerCase() === user.userName &&
          this.props.email.trim() === user.email &&
          this.state.isValid
        ) {
          this.props.onAuthenticate();
        } else {
          this.setState({error: 'This information is not allowed to enter'});
          this.setState({disabledLogin: true});
        }
    }
  };

  render () {
    return (
      <div className="auth">
        <Card>
          <h2>You are not Login!</h2>
          <form onSubmit={event => this.LoginHandler(event)}>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="your name"
                     value={this.props.userName}
                     onChange={event => this.nameChangeHandler(event)}/>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your mail"
                     value={this.props.email}
                     onChange={event => this.emailChangeHandler(event)}/>
            </div>
            <button disabled={this.state.disabledLogin}>Log In</button>
            {this.state.error && <p style={{color: 'red', fontSize: '14px'}}>{this.state.error}</p>}
          </form>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuth: state.isAuthenticate,
    userName: state.userName,
    email: state.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthenticate: () => dispatch({type: 'AUTH_SUCCESS'}),
    onSetUserName: (userName) => dispatch({type: 'SET_USERNAME', userName: userName}),
    onSetEmail: (email) => dispatch({type: 'SET_EMAIL', email: email })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
