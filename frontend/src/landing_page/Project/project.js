import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const freelancerProjects = [
  {
    name: "Neha Sharma",
    skill: "Fashion Designer",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/78d6447eb01affb81a600a7dd36b55aa-1745931231/1B293B5A-707A-4143-9DDC-D562722E1987.jpeg",
  },
  {
    name: "Amit Raj",
    skill: "Interior Designer",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/8e573c38c01f1c92dbd16a7c499af099-1746456412/F_1.jpg",
  },
  {
    name: "Priya Das",
    skill: "Illustrator",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/eeae474aac512018f2c9ac92d1b2eaa8-1746453927/EAC3AAD8-E0A3-4CB3-87B6-78A947F6B80C.jpeg",
  },
  {
    name: "Rohit Mehra",
    skill: "Comic Artist",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/dd1efab28772f25a7b6f2afb7ed1078d-1745575388/P21.jpg",
  },
  {
    name: "Tanvi Gupta",
    skill: "Animator",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c8855e3e099dc16b8be385ffb9e4c890-1745823182/Alex%20and%20Josh.jpg",
  }
];

const FreelancerFeed = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">📸 Freelancer Feed</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {freelancerProjects.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={item.image} className="card-img-top" alt={item.skill} style={{ objectFit: "cover", height: "300px" }} />
              <div className="card-body">
                <h5 className="card-title mb-1">{item.name}</h5>
                <p className="card-text text-muted">{item.skill}</p>
                <button className="btn btn-outline-primary btn-sm">Follow</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancerFeed;
