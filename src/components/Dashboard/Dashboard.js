import React from 'react';

import './Dashboard.css';

const dashboard = props => {
    console.log(props.openDashboard);
    return (
        <div className="dashboard">
            <p onClick={props.clickedDashboard}>{props.dashboardName}</p>
            {props.openDashboard ? props.children : null}
            <hr/>
        </div>
    );
};

export default dashboard;