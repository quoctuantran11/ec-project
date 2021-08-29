import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function BookingBtn() {
  const messageRef = useRef();
  const [openBook, setOpenBook] = useState(false);
  const [onHover, setOnHover] = useState(false);

  //   const [input, setInput] = useState({ phone: "", error: "" });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //   const normalizeInput = (value, previousValue) => {
  //     if (!value) return value;
  //     const currentValue = value.replace(/[^\d]/g, "");
  //     const cvLength = currentValue.length;

  //     if (!previousValue || value.length > previousValue.length) {
  //       if (cvLength < 4) return currentValue;
  //       if (cvLength < 7)
  //         return `${currentValue.slice(0, 4)} ${currentValue.slice(4)}`;
  //       return `${currentValue.slice(0, 4)} ${currentValue.slice(
  //         4,
  //         7
  //       )} ${currentValue.slice(7, 10)}`;
  //     }
  //   };

  //   const validateInput = (value) => {
  //     let error = "";

  //     if (!value) error = "Required!";
  //     else if (value.length !== 12)
  //       error = "Invalid phone format. ex: (555) 555-5555";

  //     return error;
  //   };

  //   const handleChange = ({ target: { value } }) => {
  //     setInput((prevState) => ({
  //       phone: normalizeInput(value, prevState.phone),
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     //Prevent reloading browser
  //     e.preventDefault();

  //     const error = validateInput(input.phone);

  //     setInput({ error }, () => {
  //       if (!error) {
  //         setInput("");
  //       }
  //     });

  //     console.log(input.phone, input.error);
  //   };

  const history = useHistory();

  const [input, setInput] = useState({
    phone: "",
  });

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

  function handleSubmit(event) {
    event.preventDefault();

    if (input.phone.length === 10) {
      console.log("phone: ", input.phone);

      history.push({
        pathname: "/booking",
        search: `phone=${input.phone}&salonId=00`,
      });
    }
  }

  return (
    <div
      className="booking-btn"
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        if (openBook) {
          setOnHover(true);
        } else setOnHover(false);
      }}
    >
      <div
        className={
          onHover
            ? "booking-btn__container booking-btn__hover"
            : "booking-btn__container"
        }
        onClick={() => {
          if (messageRef.current)
            messageRef.current.scrollIntoView({ behavior: "smooth" });
          if (openBook) {
            setOpenBook(false);
            setOnHover(false);
          } else {
            setOpenBook(true);
            setOnHover(true);
          }
        }}
      >
        <i className="bx bx-calendar"></i>
      </div>
      <div
        className={openBook ? "booking-box booking-box__hide" : "booking-box"}
      >
        <div className="booking-box__slogan">BOOKING SERVICES IN ADVANCE</div>
        <div className="booking-box__slogan-text">
          Payment after being served. Canceling is no problem
        </div>
        <form className="booking-box__form" onSubmit={handleSubmit} autoComplete="off">
          <div className="booking-box__form-input">
            <input
              placeholder="Enter your phone number"
              type="text"
              name="phone"
              maxLength="10"
              value={input.phone}
              onChange={handleChange}
              ref={inputRef}
            />
          </div>
          <button className="booking-box__form-btn-booking" type="submit">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingBtn;
