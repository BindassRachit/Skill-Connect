import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const services = [
  { title: "Website Development", color: "bg-success", image: "🖥️" },
  { title: "Video Editing", color: "bg-pink", image: "🎬" },
  { title: "Software Development", color: "bg-warning", image: "💻" },
  { title: "SEO", color: "bg-success", image: "📈" },
  { title: "Architecture & Interior Design", color: "bg-pink", image: "🏠" },
  { title: "Book Design", color: "bg-lime", image: "📘" },
];

export default function PopularServicesSlider() {
  const scrollRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtonVisibility = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtonVisibility);
    updateButtonVisibility();
    return () => el.removeEventListener("scroll", updateButtonVisibility);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="h3 font-weight-bold mb-4">Popular Online Services</h2>

      <div className="position-relative">
        {/* Navigation Arrows */}
        {!isMobile && (
          <>
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="position-absolute top-50 start-0 translate-middle-y z-10 btn btn-light rounded-circle"
                style={{ left: "10px", zIndex: 100 }}
              >
                ⬅️
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="position-absolute top-50 end-0 translate-middle-y z-10 btn btn-light rounded-circle"
                style={{ right: "10px", zIndex: 100 }}
              >
                ➡️
              </button>
            )}
          </>
        )}

        {/* Horizontal Scroll Section */}
        <div
          ref={scrollRef}
          className="d-flex overflow-auto gap-4 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            flexWrap: "nowrap",
          }}
          onScroll={updateButtonVisibility}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`d-flex flex-column justify-content-center align-items-center rounded-3 shadow p-3 text-white text-center ${service.color}`}
              whileHover={{ scale: 1.05 }}
              style={{
                minWidth: isMobile ? "80%" : "250px",
                maxWidth: "220px",
                height: isMobile ? "240px" : "280px",
              }}
            >
              <div className="mb-2" style={{ fontSize: "3rem" }}>
                {service.image}
              </div>
              <h3 className="h6 font-weight-bold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
