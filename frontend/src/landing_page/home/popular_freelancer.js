import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const freelancers = [
  {
    name: "Joy",
    level: "Level 2",
    image: "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/395681320/original/73b13fce22b08d89451592c813601f44ef3e145c.jpg",
    service: "I will do website development as full stack web developer",
    rating: "4.7 (132)",
    price: "₹8,079",
  },
  {
    name: "Noor Ahmad",
    level: "Top Rated",
    image: "https://source.unsplash.com/400x300/?shopify",
    service: "I will design and develop a professional Shopify store",
    rating: "4.9 (1k+)",
    price: "₹7,181",
  },
  {
    name: "Bhavik C",
    level: "Top Rated",
    image: "https://source.unsplash.com/400x300/?logo,design",
    service: "I will do 3 modern minimalist logo designs",
    rating: "4.8 (1k+)",
    price: "₹4,040",
  },
  {
    name: "Majid A",
    level: "Level 2",
    image: "https://source.unsplash.com/400x300/?store,website",
    service: "I will create Shopify store or redesign one",
    rating: "4.8 (179)",
    price: "₹8,079",
  },
  {
    name: "Bunny",
    level: "Level 2",
    image: "https://source.unsplash.com/400x300/?seo,rank",
    service: "I will create high DR 70+ SEO backlinks",
    rating: "4.6 (374)",
    price: "₹1,347",
  }
];

const PopularFreelancerSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="container py-5 position-relative">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold mb-0">🔥 Popular Freelancers</h2>
        <div>
          <button onClick={scrollLeft} className="btn btn-outline-secondary me-2">←</button>
          <button onClick={scrollRight} className="btn btn-outline-secondary">→</button>
        </div>
      </div>

      <div className="d-flex overflow-auto gap-3 pb-3" ref={sliderRef}>
        {freelancers.map((freelancer, index) => (
          <div key={index} className="card" style={{ minWidth: "250px", maxWidth: "250px" }}>
            <img
              src={freelancer.image}
              className="card-img-top"
              alt={freelancer.name}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h6 className="card-title mb-1">{freelancer.name}</h6>
              <small className="text-muted">{freelancer.level}</small>
              <p className="card-text mt-2" style={{ fontSize: "0.85rem" }}>
                {freelancer.service}
              </p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="text-warning fw-semibold">⭐ {freelancer.rating}</span>
                <span className="fw-bold text-success">From {freelancer.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFreelancerSlider;
