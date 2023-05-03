import React from "react"
import { Link } from "react-router-dom"
import { AiFillHome, AiFillSetting } from "react-icons/ai"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/" className="dashboard-link">
            <AiFillHome />
            Home
          </Link>
          <Link to="/settings" className="dashboard-link">
            <AiFillSetting />
            Settings
          </Link>
        </nav>
      </header>
      <main className="dashboard-main">
        <h2>Welcome to the admin dashboard!</h2>
        <p>
          This is a simple example of an admin dashboard component. You can add
          more content and customize the styles as needed.
        </p>
      </main>
    </div>
  );
};

export default Dashboard

