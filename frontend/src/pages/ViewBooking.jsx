import React, { useState, useEffect } from "react";
import "./Success.css";
import TextField from "@material-ui/core/TextField";

function ViewBooking() {
  const [input, setInput] = useState({
    phone: "",
  });

  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(`/viewBooking?phone=${input.phone}`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonRes) => setBooking(jsonRes));
  }, [input.phone]);

  function handleChange(event) {
    const { name, value } = event.target;
    const regex = /^0\d*$/;

    if (
      (event.target.value === "" || regex.test(event.target.value)) &&
      event.target.value[1] !== "0"
    ) {
      setInput((prevInput) => {
        return {
          ...prevInput,
          [name]: value,
        };
      });
    }
  }

  return (
    <div className="container1">
      <div className="cancel-container">
        <div className="view-header">
          <span>
            {" "}
            Input your phone number to view all of your appointments{" "}
          </span>
          <TextField
            className="text-field"
            autoComplete="off"
            placeholder="Your phone number"
            variant="outlined"
            name="phone"
            value={input.phone}
            onChange={handleChange}
            inputProps={{ maxLength: 10 }}
          />
        </div>

        {!(input.phone && input.phone.length === 10) ? (
          <div className="view-body"></div>
        ) : (
          <div className="view-body">
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "600",
                padding: "30px",
              }}
            >
              HISTORY BOOKING
            </div>

            {booking &&
              booking.map((booking) => (
                <p>
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
                  <br />
                  <br />
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewBooking;
