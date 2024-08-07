import React from "react";
import { TbBasketPlus, TbTruckDelivery } from "react-icons/tb";
import { BsBagXFill } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Order from "./Order.js";
import FeedbackList from "./FeedbackList.js";
import BarChartComponent from "./BarChartComponent.js";
import PieChart from "./PieChart.js";

const Dashboard = () => {
  const orders = [
    { id: "154678", customer: "John Doe", status: "Delivered", amount: 124.0 },
    {
      id: "898474",
      customer: "Jane Smith",
      status: "Cancelled",
      amount: 150.9,
    },
    {
      id: "374644",
      customer: "Michael Brown",
      status: "Pending",
      amount: 200.0,
    },
    {
      id: "997878",
      customer: "Emily White",
      status: "Delivered",
      amount: 250.08,
    },
    { id: "874874", customer: "Ben B", status: "Pending", amount: 678.0 },
    {
      id: "263663",
      customer: "Richard Snow",
      status: "Delivered",
      amount: 900.08,
    },
  ];
  return (
    <div className="DashboardLayout">
      <Sidebar />
      <div className="MainContent">
        <Toolbar />
        <div className="DashboardContainer">
          <div className="Header">
            <h1>Dashboard</h1>
          </div>
          <div className="Summary">
            <div className="Card">
              <TbBasketPlus size={38} />
              <h3>Total Orders</h3>
              <p>75</p>
            </div>
            <div className="Card">
              <TbTruckDelivery size={38} />
              <h3>Total Delivered</h3>
              <p>70</p>
            </div>
            <div className="Card">
              <BsBagXFill size={38} />
              <h3>Total Cancelled</h3>
              <p>70</p>
            </div>
            <div className="Card">
              <FaSackDollar size={38} />
              <h3>Total Revenue</h3>
              <p>$12k</p>
            </div>
            <div className="LastCard">
              <div style={{padding:"0px 20px 0px 0px"}}>
                <h3>Net Profit</h3>
                <p style={{ fontSize: "28px", fontWeight:"bold" }}>$6759.25</p>
              </div>
              <div style={{padding:"0px 20px 0px 0px"}}>
                <PieChart />
              </div>
            </div>
          </div>
          <div className="Lower">
            <div className="Activity">
              <h2 style={{textAlign:"left"}}>Activity</h2>
              <BarChartComponent />
            </div>
            <div className="ListMenu">
              <div className="MenueList">
                <div className="menu-item">
                  <div className="icon goals-icon"></div>
                  <span>Goals</span>
                  <div className="arrow">&gt;</div>
                </div>
                <div className="menu-item">
                  <div className="icon dishes-icon"></div>
                  <span>Popular Dishes</span>
                  <div className="arrow">&gt;</div>
                </div>
                <div className="menu-item">
                  <div className="icon menus-icon"></div>
                  <span>Menus</span>
                  <div className="arrow">&gt;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Lower">
            <div className="RecentOrders">
              <h2 className="text">Recent Orders</h2>
              <Order orders={orders} />
            </div>
            <div className="Feedback">
              <h2 className="text">Customer's Feedback</h2>
              <FeedbackList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
