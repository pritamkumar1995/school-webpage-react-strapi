import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Gallery = ({ filteredEvents, handleEventClick }) => {
  return (
    <div className="gallery">
      {filteredEvents.map(event => (
        <div className="gallery-item" key={event.id} onClick={() => handleEventClick(event)}>
          <img src={`http://localhost:1337${event.image?.url}`} alt={event.title} className="gallery-image" />
          <div className="gallery-info">
            <h3>{event.title}</h3>
            <p><FaCalendarAlt className="calendar-icon" />{event.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
