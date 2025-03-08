import React from "react";
import {
  Trophy,
  Target,
  Users,
  Flame,
  Coins,
  UserCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import "./Dashboard.css"; // Import the updated CSS

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="nav flex-column">
          <button
            className="sidebar-link"
            onClick={() => console.log("Dashboard clicked")}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button
            className="sidebar-link"
            onClick={() => console.log("Goals clicked")}
          >
            <Target size={20} />
            Goals
          </button>
          <button
            className="sidebar-link"
            onClick={() => console.log("Rewards clicked")}
          >
            <Trophy size={20} />
            Rewards
          </button>
          <button
            className="sidebar-link"
            onClick={() => console.log("Women for Women clicked")}
          >
            <Users size={20} />
            Women for Women
          </button>
          <button
            className="sidebar-link mt-auto"
            onClick={() => console.log("Logout clicked")}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="navbar-brand">
          <img
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=50&h=50&fit=crop"
            alt="Logo"
            className="me-2"
            style={{ width: "40px", height: "40px", borderRadius: "8px" }}
          />
          <span>Dashboard</span>
        </div>

        <div className="user-stats">
          <div className="stat-item">
            <Flame size={20} color="#e74c3c" />
            <span>15 Days</span>
          </div>
          <div className="stat-item">
            <Coins size={20} color="#f1c40f" />
            <span>2,500</span>
          </div>
          <div className="profile-icon">
            <UserCircle size={24} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4">Welcome back, Sarah!</h2>
            </div>
          </div>

          <div className="row g-4">
            {/* Stats Cards */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Current Streak</h5>
                  <div className="d-flex align-items-center">
                    <Flame size={24} color="#e74c3c" />
                    <h3 className="ms-2 mb-0">15 Days</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Coins</h5>
                  <div className="d-flex align-items-center">
                    <Coins size={24} color="#f1c40f" />
                    <h3 className="ms-2 mb-0">2,500</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Goals Completed</h5>
                  <div className="d-flex align-items-center">
                    <Target size={24} color="#2ecc71" />
                    <h3 className="ms-2 mb-0">8/10</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
