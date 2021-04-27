import React, { Component } from 'react';

import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import ProfileTooltip from '../ProfileTooltip/ProfileTooltip';

import './Header.css';

class Header extends Component {

    state = {
        showProfile: false
    }

    profileClickedHandler = () => {
        this.setState(prevState => {
            return {
                showProfile: !prevState.showProfile
            };
        });
    };

    render() {

        return (
            <div className="Header">
                <div className="Number_Search">
                    <span data-tip="Number of element that matched your search" data-place="right">
                        {this.props.numOfResult > 0 ? this.props.numOfResult : 'ZERO'}
                    </span>
                </div>
                <div onClick={this.profileClickedHandler} 
                    className="Profile"
                    data-tip="Profile"
                    data-place="left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" aria-labelledby="profile"><path d="M14,28A14,14,0,1,1,28,14,14.017,14.017,0,0,1,14,28ZM14,15.26c-2.829,0-8.359,1.522-8.4,4.313a10.081,10.081,0,0,0,16.8,0c-.023-1.56-1.737-2.6-3.17-3.2A14.973,14.973,0,0,0,14,15.26ZM14,4.2a4.2,4.2,0,1,0,4.2,4.2A4.2,4.2,0,0,0,14,4.2Z" fill="#E3E4E5"></path></svg>
                </div>
                {this.state.showProfile && <ProfileTooltip clickedLogout={this.props.onLogout} />}
                <ReactTooltip 
                    delayShow={100} 
                    effect="solid" 
                />
            </div>
        );
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch({type: 'LOGOUT_USER'})
    }
}

export default connect(null, mapDispatchToProps)(Header);