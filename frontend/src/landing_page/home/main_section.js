import React from 'react';
import './home.css';


const LandingPage = () => {
  return (
    <div className=" rounded-bottom landing-wrapper text-white d-flex flex-column align-items-center text-center px-3 ">
      {/* Heading & CTA */}
      <div className="mt-5 pt-5">
        <h6 className="text-uppercase text-info mb-2">Advanced marketing system</h6>
        <h1 className="display-5 fw-bold">
          SkillConnect helps you quickly find <br /> 
          trusted professionals near you —  <br />
          anytime, for any service.
        </h1>
        <p className="mt-3 mb-4 fs-5">
        SkillConnect helps you find professionals like plumbers, developers, video editors, and more. We connect you to nearby experts for quick, easy help.
        </p>
        <button className="btn btn-light btn-lg fw-bold">Let's Talk Strategy</button>
      </div>

      {/* Results Section */}
      <div className="container bg-white text-dark rounded shadow mt-5 p-4">
        <h5 className="fw-bold text-start">Results</h5>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <h2>2.2M</h2>
            <p>Total Users</p>
          </div>
          <div className="col-md-4">
            <h2>5.2M</h2>
            <p>Total Pageviews</p>
          </div>
          <div className="col-md-4">
            <h2>34%</h2>
            <p>Conversion Rate</p>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="text-center text-muted mt-5 mb-5">
        <h6 className="mb-3">Trusted by business worldwide</h6>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <div className="d-flex justify-content-center gap-4 flex-wrap"
              style={{ overflowX: "auto", padding: "10px" }}>
                <img
                  src="/media/images/amazon_PNG8.png"
                  style={{ width: "70px" }}
                  alt="Logo3"
                />
                <img
                  src="/media/images/Zepto_Logo.svg.png"
                  style={{ width: "80px" }}
                  alt="Logo4"
                />
              <img
                src="/media/images/microsoft.svg"
                style={{ width: "80px" }}
                alt="Logo1"
              />
              <img
                src="/media/images/Myntra_logo.png"
                style={{ width: "80px" }}
                alt="Logo2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                style={{ width: "80px" }}
                alt="Logo5"
              />
            </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
