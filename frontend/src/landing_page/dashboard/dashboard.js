import React from 'react';

const Dashboard = () => {
  return (
    <div className="d-flex min-vh-100 ">
      {/* Sidebar */}
      <div className="bg-white border-end p-3" style={{ width: '250px' }}>
        <div className="text-center mb-4">
          <div
            className="rounded-circle bg-light mx-auto"
            style={{ width: '100px', height: '100px', backgroundImage: 'url(https://via.placeholder.com/100)', backgroundSize: 'cover' }}
          ></div>
          <button className="btn btn-outline-dark btn-sm mt-3 w-100">Edit Profile</button>
        </div>
        <ul className="list-unstyled">
          <li className="mb-2">Add a Gig</li>
          <li className="mb-2">Add a Project</li>
          <li className="mb-2">Orders</li>
          <li className="mb-2">ABC</li>
          <li className="mb-2">XYZ</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {/* Add a Gig */}
        <div className="border rounded p-3 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Add a Gig</h5>
            <button className="btn btn-outline-dark btn-sm">+</button>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="bg-secondary" style={{ height: '100px', borderRadius: '8px' }}></div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bg-secondary" style={{ height: '100px', borderRadius: '8px' }}></div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bg-secondary" style={{ height: '100px', borderRadius: '8px' }}></div>
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className="border rounded p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Project</h5>
            <button className="btn btn-outline-dark btn-sm">+</button>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="bg-secondary" style={{ height: '100px', borderRadius: '8px' }}></div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bg-secondary" style={{ height: '100px', borderRadius: '8px' }}></div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bg-secondary" style={{ height: '100px', borderRadius: '8px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
 