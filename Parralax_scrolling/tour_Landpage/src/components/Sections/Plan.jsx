import React, { useState, useRef, useEffect } from 'react';
import './Plan.css';

const Plan = ({ background }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const cards = [
    { title: 'Accommodation', image: '/assets/accommodation.jpg' },
    { title: 'Travel Agents', image: '/assets/travel-agents.jpg' },
    { title: 'On Roads', image: '/assets/roads.jpg' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section plan-section"
      style={{ backgroundImage: `url(/assets/${background})` }}
    >
      <h1 className={`plan-heading ${isSectionVisible ? 'animate' : ''}`}>
        Plan Your Trip
      </h1>
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : cards.length - 3)}>
          <img src="/assets/left-arrow.png" alt="Previous" className="arrow-icon" />
        </button>
        <div 
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={() => setCurrentIndex(prev => prev < cards.length - 3 ? prev + 1 : 0)}>
          <img src="/assets/right-arrow.png" alt="Next" className="arrow-icon" />
        </button>
      </div>
    </section>
  );
};

export default Plan;