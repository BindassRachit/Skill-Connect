import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupPage = () => {
  const [userType, setUserType] = useState("");

  const renderForm = () => {
    if (userType === "normal") {
      return (
       <form className="card p-4 mt-3 shadow">
        <h4 className="mb-3 text-center">Normal User Signup</h4>
        <div className="row mb-3">
            <div className="col-md-6 mb-2 mb-md-0">
            <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Last Name" />
            </div>
        </div>
        <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Location/City" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Signup as User</button>
        </form>

      );
    } else if (userType === "worker") {
      return (
        <form className="card p-4 mt-3 shadow">
          <h4 className="mb-3 text-center">Worker Signup</h4>
        <div className="row mb-3">
            <div className="col-md-6 mb-2 mb-md-0">
            <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Skill (e.g., Electrician, Video Editor)" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Experience (e.g., 2 years)" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Location/City" />
        </div>
        <div className="form-check mb-3">
            <input
                className="form-check-input"
                type="checkbox"
                id="emailTips"
                defaultChecked
            />
            <label className="form-check-label" htmlFor="emailTips">
                Send me emails with tips on how to find talent that fits my needs.
            </label>
        </div>
          <button type="submit" className="btn btn-success w-100">Signup as Worker</button>
        </form>
      );
    } else {
      return null;
    }
  };

  return (
  <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
    <h2 className="text-center mb-4">Create Your Account</h2>
    <div className="d-flex justify-content-center gap-3 mb-4">
      <button
        className={`btn ${userType === "normal" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setUserType("normal")}
      >
        1. I need a Service
      </button>
      <button
        className={`btn ${userType === "worker" ? "btn-success" : "btn-outline-success"}`}
        onClick={() => setUserType("worker")}
      >
        2. I want to Work
      </button>
    </div>
    <div className="w-100" style={{ maxWidth: "500px" }}>
      {renderForm()}
    </div>
  </div>
  );
};

export default SignupPage;
