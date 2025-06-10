import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const services = [
  { title: "Website <br/> Development", color: "bg-success", image: "/media/ServiceSlider/Website-development.webp" },
  { title: "Video Editing", color: "bg-danger", image: "/media/ServiceSlider/video-editing.webp" },
  { title: "Software Development", color: "bg-warning", image: "/media/ServiceSlider/software-development.webp" },
  { title: "SEO", color: "bg-success", image: "/media/ServiceSlider/seo.webp" },
  { title: "Architecture & Interior Design", color: "bg-danger", image: "/media/ServiceSlider/architecture-design.webp" },
  { title: "Book Design", color: "bg-danger", image: "/media/ServiceSlider/Book Design.webp" },
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
              className={`d-flex flex-column justify-content-between align-items-center rounded-3 shadow p-3 text-white text-center ${service.color}`}
              whileHover={{ scale: 1.05 }}
              style={{
                minWidth: isMobile ? "60%" : "220px",
                maxWidth: "220px",
                height: isMobile ? "240px" : "280px",
              }}
            >
              <h3 
                className="h6 font-weight-bold"
                dangerouslySetInnerHTML={{ __html: service.title }}
              ></h3>
              <div className="mt-auto" style={{ fontSize: "3rem" }}>
                {service.image.endsWith(".webp") ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "200px", objectFit: "contain", }}
                  />
                ) : ( 
                  service.image
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
