import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from './containers/Auth/Auth';
import Search from './containers/Search/Search';

class App extends Component {

  render () {
    let content = <Auth />;
    if (this.props.isAuth) {
      content = (
        <Search />
      );
    }

    return content;
  }
};

const mapStateToProps = state => {
  return {
    isAuth: state.isAuthenticate,
    userName: state.userName,
    email: state.email
  };
};

export default connect(mapStateToProps)(App);
