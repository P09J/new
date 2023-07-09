import React from 'react';
import './book.css'; // Import the associated CSS file
import backgroundVideo from '../../assets/video.mp4'

const Book = () => {
    const handleBook = (e) => {
      e.preventDefault();
      // Process booking logic here
      // You can show a confirmation message or redirect to another page
      window.alert('Booking price & package will be mailed, and our customer service will reach out to you.');
    };
  

  return (
    <>
    <div className="book-container">
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
        <div className="booking-card">
          <h2>Book Now</h2>
          <form onSubmit={handleBook}>
            <div className="form-group">
              <label htmlFor="destination">Destination:</label>
              <input type="text" id="destination" name="destination" placeholder="Enter destination" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="people">Number of People:</label>
              <input type="number" id="people" name="people" min="1" required />
            </div>
            <button type="submit">Book</button>
          </form>
        </div>
        
      </div>
    {/* </div> */}

   </>
  );
};

export default Book;
