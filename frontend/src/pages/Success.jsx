import React, { useEffect, useState } from "react";
import "./Success.css";

function Success() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("/booking")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonRes) => setBooking(jsonRes));
  }, []);

  return (
    <div className="container1">
      <div className="cancel-container">
        <div className="cancel-header">
          <div className="booking-header">
            <span>BOOKING SUCCESSFULLY</span>
          </div>
          {booking &&
            booking.map((booking) => (
              <p>
                <span>This is your booking ID: {booking._id}</span> <br />
                <span>Your phone: {booking.phone}</span>
                <br />
                <span>Your address: {booking.address}</span>
                <br />
                <span>Your note: {booking.note}</span>
                <br />
                <span>Your services: {booking.service}</span> <br />
                <span>Booking date: {booking.date}</span>
                <br />
                <span>Your manicurist: {booking.staff}</span>
                <br />
                <span>Appointment time: {booking.time}</span>
                <br />
                <span>Booking status: {booking.status}</span>
                <br />
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Success;
