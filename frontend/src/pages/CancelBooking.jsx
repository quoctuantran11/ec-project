import React, { useState } from "react";
import "./Success.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CancelBooking() {
  const history = useHistory();
  const [input, setInput] = useState({
    bookingId: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const newBooking = {
      _id: input.bookingId,
    };

    axios.post("http://localhost:3001/cancel", newBooking);

    setTimeout(() => {
      history.push({
        pathname: "/viewBooking",
      });
    }, 500);
  }

  return (
    <div className="container2">
      <div className="cancel-container">
        <div className="cancel-header">
          <div
            className="test1"
            style={{
              paddingTop: "30px",
              background: "white",
              marginBottom: "50px",
              fontSize: "20px",
            }}
          >
            <span className="cancel-span">
              Write your booking ID to cancel an appointment
            </span>
          </div>

          <div className="test2">
            <TextField
              className="text-field"
              placeholder="Your booking ID"
              variant="outlined"
              name="bookingId"
              value={input.bookingId}
              onChange={handleChange}
            />
          </div>
          <div className="test3">
            <Button
              className="button-click"
              color="primary"
              type="submit"
              onClick={handleClick}
              style={{
                padding: "10px 30px",
                marginTop: "30px",
                fontSize: "20px",
                background: "#e8e8e8",
                color: "black",
              }}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancelBooking;
