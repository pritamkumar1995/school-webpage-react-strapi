import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const EventImages = ({ selectedEvent, handleImageClick }) => {
  return (
    <div className="event-images">
      {selectedEvent?.collectionImages && (
        <div className="event-image-list">
          {selectedEvent.collectionImages.map((image, index) => (
            <div key={index} className="event-image" onClick={() => handleImageClick(index)}>
              <img src={`http://localhost:1337${image?.url}`} alt={image?.name} />
              <div className="event-image-info">
                <h3 className="text-right">{selectedEvent.title}</h3>
                <p className="text-right"><FaCalendarAlt className="calendar-icon" />{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventImages;
