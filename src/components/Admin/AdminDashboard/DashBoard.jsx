import React from 'react';
import "./Dashboard.css";
import "./Sidebar/Sidebar.css"
import Sidebar from './Sidebar/Sidebar';
import OrderHandler from './HomeContnet/OrderHandler';



const DashBoard = () => {

    

    return (
        <div className='dashboard-container'>
            <div>
            <Sidebar/>
            </div>
            <div className='admin-contents'>
            <OrderHandler/>
            </div>
        </div>
    );
};

export default DashBoard;
