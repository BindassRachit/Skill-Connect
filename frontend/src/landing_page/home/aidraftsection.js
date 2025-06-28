import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'; // CSS file we'll define below

const AiDraftSection = () => {
  const text = "I need to create an illustration of a black lotus floating on calm water,";
  const [typedText, setTypedText] = useState("");
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prev) => {
        if (index < text.length) {
          const updated = prev + text[index];
          index++;
          return updated;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 40); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ai-draft-wrapper text-white py-5 px-3 px-md-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 text-primary fw-bold">Fiverr Go</h1>
            <p className="lead text-primary-emphasis

">
              Combine the power of AI with Fiverr freelancers' style to turn your ideas into custom drafts
            </p>
            <button className="btn btn-light fw-semibold px-4 py-2 mt-3">Create a draft →</button>
          </div>

          {/* Right Side */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="ai-card bg-dark text-white p-3 rounded-4 shadow position-relative">
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <div>
                  <div className="fw-bold">Mariam A.</div>
                  <small className="text-warning">★ 4.8 (159)</small>
                </div>
                <span className="badge bg-secondary ms-auto">Digital illustration model</span>
              </div>

              {/* Typing Text Box */}
              <div className="bg-black text-light p-3 rounded-3 mt-2 typing-box">
                <p className="mb-0" style={{ minHeight: "60px" }}>{typedText}<span className="cursor">|</span></p>
              </div>

              {/* Send button */}
              <div className="text-end mt-2">
                <button className="btn btn-sm btn-outline-light rounded-circle">
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDraftSection;
