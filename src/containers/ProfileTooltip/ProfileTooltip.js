import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard/Dashboard';
import './ProfileTooltip.css';

class ProfileTooltip extends Component {

    state = {
        openDashboard: false,
        openCommodity: false
    }

    handleToggleDashboard = () => this.setState(prevState => ({openDashboard: !prevState.openDashboard}));

    handleToggleCommodity = () => this.setState(prevState => ({openCommodity: !prevState.openCommodity}));

    render () {
        return (
            <div className="profile">
                <h5>{this.props.userName}</h5>
                <h5>{this.props.email}</h5>
                <hr/>
                <Dashboard 
                    dashboardName="Dashboard"
                    openDashboard={this.state.openDashboard}
                    clickedDashboard={this.handleToggleDashboard}
                >
                    <p>Security Condition</p>
                    <p>Login History</p>
                    <p>Setting</p>
                </Dashboard>
                <Dashboard 
                    dashboardName="Commodity"
                    openDashboard={this.state.openCommodity}
                    clickedDashboard={this.handleToggleCommodity}
                >
                    <p>Shoes</p>
                    <p>Blouse</p>
                    <p>Pants</p>
                </Dashboard>
                <p onClick={this.props.clickedLogout}>Log out</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      userName: state.userName,
      email: state.email
    };
};


export default connect(mapStateToProps)(ProfileTooltip);
