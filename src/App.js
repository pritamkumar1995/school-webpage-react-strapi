import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import Gallery from './components/Gallery';
import EventImages from './components/EventImages';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer'; 
import './App.css';
import './style/style.css';

const App = () => {
  const [schoolContent, setSchoolContent] = useState({});
  const [categoryData, setSelectedCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isGalleryView, setIsGalleryView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchSchoolContent = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/school-contents?populate=*");
        const data = response.data.data;
        setSchoolContent(data[0]);
      } catch (error) {
        console.error("Error fetching school content:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchSchoolContent();
  }, []);

  useEffect(() => {
    const categoryDetails = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/abouts?populate=*");
        const data = response.data.data;
        setSelectedCategoryData(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    categoryDetails();
  }, []);

  const headerStyle = {
    backgroundImage: schoolContent.coverImage ? `url(http://localhost:1337${schoolContent.coverImage.url})` : "none",
  };

  const filteredEvents = selectedCategory === 'All'
    ? categoryData
    : categoryData.filter(event => event.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsGalleryView(true);
    setSelectedEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsGalleryView(false);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCarouselNav = (direction) => {
    const totalImages = selectedEvent?.collectionImages?.length;
    if (direction === 'next') {
      setCurrentImageIndex((currentImageIndex + 1) % totalImages);
    } else {
      setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
    }
  };

  return (
    <div className="app">
      {isLoading && (
        <div className="loading">
          <img src="/loading.gif" alt="Loading..." />
          <h1>Loading....</h1>
        </div>
      )}

      {!isLoading && (
        <>
          <HeaderNav logoUrl={schoolContent.logo.url} />

          <header className="header" style={headerStyle}>
            <h1 className="title">{schoolContent.eventTitle}</h1>
            <p className="title2">{schoolContent.description}</p>
          </header>

          <div className="categories">
            {['All', 'Plantation', 'Annual', 'Sports', 'NCC', 'Science labs', 'Alumni', 'Cleanliness'].map(category => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {isGalleryView ? (
            <Gallery filteredEvents={filteredEvents} handleEventClick={handleEventClick} />
          ) : (
            <EventImages 
              selectedEvent={selectedEvent} 
              handleImageClick={handleImageClick} 
            />
          )}

          <Modal 
            isOpen={isModalOpen} 
            imageData={selectedEvent?.collectionImages} 
            onClose={closeModal} 
            onNavigate={handleCarouselNav} 
            currentIndex={currentImageIndex}
          />

          {isGalleryView && (
            <button className="view-more-btn" onClick={() => console.log("View More clicked")}>View More</button>
          )}

          <Footer logoUrl={schoolContent.logo.url} /> 
        </>
      )}
    </div>
  );
};

export default App;
