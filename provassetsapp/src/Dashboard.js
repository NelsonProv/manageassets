import React from 'react';
import './Dashboard.css'

function Dashboard() {
  return (
    <div id="dasboardMainContainer">
    <div className="dashboard_sidebar" id="dashboard_sidebar">
        <h3 className="dashboard_logo" id="dashboard_logo">PSS</h3>
        <div className="dashboard_sidebar_user">
            <img src="./user.images/Providence-logo.png" alt="User Image."  id="userImage"/>
            <span class="" id="userName">Providence</span>
        </div>
        <div className="dashboard_sidebar_menus">
            <ul className="dashboard_menu_lists">
                <li id="menuActive">
                    <a href="" ><i className="fa fa-dashboard "></i><span class="menuText">Dashboard</span> </a>
                </li>
                <li>
                    <a href=""><i className="fa fa-bullhorn "></i><span class="menuText">Campaigns</span></a>
                </li>
                <li>
                    <a href=""><i className="fa fa-dollar "></i><span class="menuText">Revenue Manangement</span></a>
                </li>
                <li>
                    <a href=""><i className="fa fa-book "></i><span class="menuText">Accounts Receivable</span></a>
                </li>
                <li>
                    <a href=""><i className="fa fa-gears "></i><span class="menuText">Configuration</span></a>
                </li>
                <li>
                    <a href=""><i className="fa fa-line-chart"></i><span class="menuText">Stats</span></a>
                </li>

            </ul>
        </div>

    </div>
    <div className="dashboard_content_container" id="dashboard_content_container">
        <div className="dashboard_topNav">
            <a href=""  id="toggleBtn"><i class="fa fa-navicon"></i></a>
            <a href="" id="logoutBtn"><i class="fa fa-power-off"></i>Log-out</a>
        </div>
        <div className="dashboard_content">
            <div className="dashboard_content_main">

            </div>
        </div>

    </div>
</div>
  )
}

export default Dashboard