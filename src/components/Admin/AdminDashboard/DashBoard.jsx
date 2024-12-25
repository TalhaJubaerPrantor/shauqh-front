import React from 'react';
import "./Dashboard.css";
import Sidebar from './Sidebar/Sidebar';
import OrderHandler from './HomeContnet/OrderHandler';


const DashBoard = () => {
    return (
        <div className='dashboard-container'>
            <div>
            <Sidebar/>
            </div>
            <div>
            <OrderHandler/>
            </div>
        </div>
    );
};

export default DashBoard;
