import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { reviews } from "../data";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider); //cleanup
  }, [index]);

  return (
    <section className="review-section">
      <div className="review-title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="review-section-center">
        {reviews.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextReviewSlide";
          if (personIndex === index) {
            position = "activeReviewSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === reviews.length - 1)
          ) {
            position = "lastReviewSlide";
          }
          return (
            <article className={`review-article ${position}`} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="review-title">{title}</p>
              <p className="review-text">{quote}</p>
              <FaQuoteRight className="review-icon" />
            </article>
          );
        })}
        <button className="prev-review" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-review" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
