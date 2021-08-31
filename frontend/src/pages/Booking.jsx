import React, { useState, useEffect, createContext, useContext } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
import { addDays } from "date-fns";
import Slider from "react-slick";
import Checkbox from "@material-ui/core/Checkbox";
// import "./Booking.css";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "react-datepicker/dist/react-datepicker.css";

import Helmet from "../components/Helmet";

const DisplayContext = createContext();

const useDate = () => {
  const [today, setDate] = useState(new Date()); // Save the current date to be able
  // to trigger an update
  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that
      // it will stop being called on unmount
    };
  }, []);

  const date = today.getDate()
  const hour = today.getHours();
  const minutes = today.getMinutes();

  return { date, hour, minutes };
};

function Booking() {
  const history = useHistory();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const queryPhone = query.get("phone");
  const querySalonId = query.get("salonId");

  const [input, setInput] = useState({
    salonId: "",
    address: "",
  });

  const [noteValue, setNoteValue] = useState({
    note: "",
  });

  const [location, setLocation] = useState([]);
  const [booking, setBooking] = useState([]);

  const [service, setService] = useState(false);
  const [option, setOption] = useState([""]);
  const [startDate, setStartDate] = useState(new Date());
  const [staff, setStaff] = useState(false);
  const [personnel, setPersonnel] = useState("");
  const [value, setValue] = useState("");
  const [calendar, setCalendar] = useState("");
  const [staffTime, setStaffTime] = useState("");
  const [time, setTime] = useState("");
  const { date, hour, minutes } = useDate();

  var Staffsettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrow: true,
  };

  useEffect(() => {
    fetch("/booking/staff")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonRes) => setPersonnel(jsonRes));
  }, []);

  useEffect(() => {
    value === ""
      ? fetch("/booking/time")
          .then((res) => {
            if (res.ok) return res.json();
          })
          .then((jsonRes) => setCalendar(jsonRes))
      : fetch(`/booking/time?name=${value}`)
          .then((res) => {
            if (res.ok) return res.json();
          })
          .then((jsonRes) => setStaffTime(jsonRes));
  }, [value]);

  function handleServiceClick(event) {
    event.preventDefault();

    setService(true);

    history.push({
      pathname: "/booking",
      search: `phone=${queryPhone}&salonId=${querySalonId}&step=2`,
    });
  }

  function CleaningArr() {
    var cleanOpt = option.filter(function (el) {
      return el;
    })

    return cleanOpt;
  }

  console.log(CleaningArr())

  function StaffClick(event) {
    event.preventDefault();

    if (staff === true) {
      setStaff(false);
    } else {
      setStaff(true);
    }
  }

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const handleClick2 = (event) => {
    if (event.target.value === value) {
      setValue("");
    }
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="location-form" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const compareTime = (timeDisplay) => {
    const components = timeDisplay.split(":");

    if(startDate.getDate() === date) {
      if (components[0] > hour) {
        return true;
      }
      else if (components[0] === hour) {
        if (components[1] > minutes) {
          return true;
        }
        else {
          return false;
        }
      } 
      else {
        return false;
      }
    }
    else {
      return true;
    }
  };

  useEffect(() => {
    fetch("/location")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonRes) => setLocation(jsonRes));

    fetch("/booking")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonRes) => setBooking(jsonRes));
  }, []);

  function handleChange(event, value) {
    if (value !== null) {
      setInput(value);
    }
  }

  function handleNoteChange(event) {
    const { name, value } = event.target;

    setNoteValue((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const newBooking = {
      phone: queryPhone,
      address: input.address,
      note: noteValue.note,
      service: option,
      date: startDate,
      staff: value,
      time: time,
      status: "pending",
    };

    if (input.salonId !== "") {
      console.log("salonId: ", input.salonId);
      axios.post("http://localhost:3001/booking", newBooking);

      setTimeout(() => {
        history.push({
          pathname: "/success",
        });
      }, 500);
    }
  }

  return (
    <Helmet title="Let the world see you">
      <div className="book-container">
        <div className="booking-container">
          <div className="booking-header">
            {booking.map((booking) => (
              <span key="bookingKey">
                {/* Welcome <b> {queryPhone} </b> */}
                BOOKING INFORMATION
              </span>
            ))}
          </div>

          <div className="booking-body-1">
            <div className="booking-title">1. CHOOSE SALON</div>
            <div className="booking-context">
              <Autocomplete
                className="auto-complete"
                autoHighlight
                options={location}
                getOptionLabel={(option) => option.address}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Find our salon"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>

          <div className="booking-body-2">
            <div className="booking-title">Note</div>
            <TextField
              className="text-field"
              multiline
              rows={4}
              placeholder="Write your note here"
              variant="outlined"
              name="note"
              value={noteValue.note}
              onChange={handleNoteChange}
            />
          </div>

          <div className="content">
            {service ? (
              <DisplayContext.Provider
                value={[[setService], [option, setOption]]}
              >
                <DisplayService />
              </DisplayContext.Provider>
            ) : (
              <div className="container-fluid">
                <div style={{ visibility: "hidden" }}>Line</div>
                <div className="body-relative">
                  <div className="booking-title" style={{ paddingTop: "20px" }}>
                    2. CHOOSE SERVICE AND TIME
                  </div>
                  <div className="info_booking">
                    <div className="info_bookingBlock">
                      <button
                        onClick={(e) => handleServiceClick(e)}
                        className="location-form"
                        value="service"
                      >
                        Choose service
                      </button>

                      <div className="service-selected">
                        {Object.keys(CleaningArr()).map((obj) =>
                            <div className="serviceName">
                              <span>{CleaningArr()[obj]}</span>
                            </div>
                        )}
                      </div>

                      {option !== "" ? (
                        <div>
                          <div className="date-picker">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              dateFormat="EEEE, dd-MM"
                              minDate={new Date()}
                              maxDate={addDays(new Date(), 7)}
                              customInput={<CustomInput />}
                            />
                          </div>

                          <div className="staff-personnel">
                            {value === "" ? (
                              <input
                                id="choose-personnel"
                                type="button"
                                onClick={(e) => StaffClick(e)}
                                className="text-btn"
                                value="Choose personnel"
                              ></input>
                            ) : (
                              <input
                                id="choose-personnel"
                                type="button"
                                onClick={(e) => StaffClick(e)}
                                className="text-btn"
                                value={value}
                              ></input>
                            )}

                            {staff ? (
                              <div className="staff-content">
                                <Slider {...Staffsettings}>
                                  {personnel &&
                                    personnel.map((person) => (
                                      <div className="staff-content__slider-item">
                                        <FormControl component="fieldset">
                                          <FormLabel component="legend"></FormLabel>
                                          <RadioGroup
                                            name="staff"
                                            value={value}
                                            onChange={handleChange2}
                                          >
                                            <FormControlLabel
                                              value={person.name}
                                              control={
                                                <Radio onClick={handleClick2} />
                                              }
                                              label={person.name}
                                            />
                                          </RadioGroup>
                                        </FormControl>
                                      </div>
                                    ))}
                                </Slider>
                              </div>
                            ) : null}
                          </div>
                                              
                          <div className="time-picker">
                            {value === ""
                              ? calendar &&
                                calendar.map((calendar) => (
                                  <div className="time-content">
                                    {compareTime(calendar) ? (
                                      <input
                                        type="button"
                                        id="time"
                                        value={calendar}
                                        onClick={(e) => setTime(e.target.value)}
                                      ></input>
                                    ) : (
                                      <input
                                        type="button"
                                        id="time"
                                        value={calendar}
                                        disabled
                                      ></input>
                                    )}
                                  </div>
                                ))
                              : staffTime &&
                                staffTime.map(
                                  (staff) =>
                                    staff.time &&
                                    staff.time.map((time) => (
                                      <div className="time-content">
                                        {compareTime(time) ? (
                                          <input
                                            type="button"
                                            id="time"
                                            value={time}
                                            onClick={(e) =>
                                              setTime(e.target.value)
                                            }
                                          ></input>
                                        ) : (
                                          <input
                                            type="button"
                                            id="time"
                                            value={time}
                                            disabled
                                          ></input>
                                        )}
                                      </div>
                                    ))
                                )}
                          </div>
                        </div>
                      ) : (
                        <span id="warning">Please choose a service</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="booking-body-3">
            <Button
              style={{
                backgroundColor: "#e8e8e8",
                color: "black",
                padding: "10px 150px",
                fontSize: "25px",
              }}
              color="primary"
              type="submit"
              onClick={handleClick}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

function DisplayService() {
  // using Context for render overlay
  const [[setService], [option, setOption]] = useContext(DisplayContext);
  
  // states for passing service that have been chose
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");

  // states for categories render overlay
  const [manicure, setManicure] = useState(false);
  const [pedicure, setPedicure] = useState(false);
  const [combo, setCombo] = useState(false);

  // state for saving choices
  const [value, setValue] = useState([""]);
  const [value2, setValue2] = useState([""]);
  const [count, setCount] = useState(0);

  // function for checkboxes options (set new option & status states)
  const checkboxChange = (event) => {
    if (event.target.checked) {
      setValue([...value, event.target.name]);
    } else {
      setValue((prev) => prev.filter((cur) => cur !== event.target.name));
    }
  };

  const checkboxChange2 = (event) => {
    if (event.target.checked) {
      setValue2([...value2, event.target.name]);
    } else {
      setValue2((prev) => prev.filter((cur) => cur !== event.target.name));
    }
  };

  // function to clear states if cancel any selected choice
  const choicesClick1 = (event) => {
    if (opt1 === event.target.value) {
      setOpt1("");
      setCount(count - 1);
    } else {
      setOpt1(event.target.value);
      if(opt1 === '') {
        setCount(count + 1);
      }
    }
  };

  const choicesClick2 = (event) => {
    if (opt2 === event.target.value) {
      setOpt2("");
      setCount(count - 1);
    } else {
      setOpt2(event.target.value);
      if(opt2 === '') {
        setCount(count + 1);
      }
    }
  };

  const choicesClick3 = (event) => {
    if (opt3 === event.target.value) {
      setOpt3("");
      setCount(count - 1);
    } else {
      setOpt3(event.target.value);
      if(opt3 === '') {
        setCount(count + 1);
      }
    }
  };

  let history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search); // get query string
  }

  let query = useQuery();
  var phone = query.get("phone");
  var salonId = query.get("salonId");

  function CleaningArr(value) {
    var cleanVal = value.filter(function (el) {
      return el;
    })

    return cleanVal;
  }

  const ManiClick = (event) => {
    event.preventDefault();
    setManicure(true);
    setPedicure(false);
    setCombo(false);
  };

  const PediClick = (event) => {
    event.preventDefault();
    setManicure(false);
    setPedicure(true);
    setCombo(false);
  };

  const ComboClick = (event) => {
    event.preventDefault();
    setManicure(false);
    setPedicure(false);
    setCombo(true);
  };

  // function for handling back button
  const handleBackbtnClick = (event) => {
    event.preventDefault();

    setService(false);

    history.push({
      pathname: "/booking",
      search: `phone=${phone}&salonId=${salonId}&step=0`,
    });
  };

  // function for handling passing data with button
  const handlePickClick = (event) => {
    event.preventDefault();

    var newVal = CleaningArr(value)
    var newVal2 = CleaningArr(value2)
    setOption([...option, newVal, newVal2, opt1, opt2, opt3]);

    setService(false);

    history.push({
      pathname: "/booking",
      search: `phone=${phone}&salonId=${salonId}&step=0`,
    });
  };

  return (
    <Helmet title="Let the world see you">
      <div className="content">
        <div className="container-fluid">
          <div className="body-relative">
            <div className="top-navigator">
              <button
                onClick={handleBackbtnClick}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  marginRight: "130px",
                }}
              >
                <i
                  className="bx bx-chevron-left"
                  style={{ fontSize: "30px" }}
                ></i>
              </button>
              <span>Choose service</span>
            </div>

            <form>
              <div className="service">
                <div className="category_tab">
                  <button
                    onClick={(e) => ManiClick(e)}
                    className="cate-btn"
                    value="manicure"
                  >
                    <span>Manicure</span>
                  </button>
                  <button
                    onClick={(e) => PediClick(e)}
                    className="cate-btn"
                    value="pedicure"
                  >
                    <span>Pedicure</span>
                  </button>
                  <button
                    onClick={(e) => ComboClick(e)}
                    className="cate-btn"
                    value="combo"
                  >
                    <span>Combo</span>
                  </button>
                </div>
                <div className="category-content">
                  {manicure ? (
                    <div className="category-content">
                      <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup name="manicure" value={opt1}>
                          <FormControlLabel
                            value="Aura Manicure"
                            control={<Radio onClick={choicesClick1} />}
                            label="Aura Manicure"
                          />
                          <FormControlLabel
                            value="Basic Manicure"
                            control={<Radio onClick={choicesClick1} />}
                            label="Basic Manicure"
                          />
                          <FormControlLabel
                            value="Express manicure"
                            control={<Radio onClick={choicesClick1} />}
                            label="Express Manicure"
                          />
                          <FormControlLabel
                            value="Shellac manicure"
                            control={<Radio onClick={choicesClick1} />}
                            label="Shellac Manicure"
                          />
                          <FormControlLabel
                            value="Signature manicure"
                            control={<Radio onClick={choicesClick1} />}
                            label="Signature Manicure"
                          />
                        </RadioGroup>
                        <FormGroup>
                          <FormControlLabel
                            name="Acrylic or Gel Removal"
                            control={<Checkbox onChange={checkboxChange} />}
                            label="Acrylic or Gel Removal"
                          />
                          <FormControlLabel
                            name="Polish Change"
                            control={<Checkbox onChange={checkboxChange} />}
                            label="Polish Change"
                          />
                          <FormControlLabel
                            name="Fill Pink"
                            control={<Checkbox onChange={checkboxChange} />}
                            label="Fill Pink"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  ) : null}
                  {pedicure ? (
                    <div className="category-content">
                      <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup name="pedicure" value={opt2}>
                          <FormControlLabel
                            value="Island Pedicure"
                            control={<Radio onClick={choicesClick2} />}
                            label="Island Pedicure"
                          />
                          <FormControlLabel
                            value="Orange Peel Pedicure"
                            control={<Radio onClick={choicesClick2} />}
                            label="Orange Peel Pedicure"
                          />
                          <FormControlLabel
                            value="Pumpkin Pedicure"
                            control={<Radio onClick={choicesClick2} />}
                            label="Pumpkin Pedicure"
                          />
                          <FormControlLabel
                            value="Basic Pedicure"
                            control={<Radio onClick={choicesClick2} />}
                            label="Basic Pedicure"
                          />
                          <FormControlLabel
                            value="Express Pedicure"
                            control={<Radio onClick={choicesClick2} />}
                            label="Express Pedicure"
                          />
                          <FormControlLabel
                            value="Little Princess Pedicure"
                            control={<Radio onClick={choicesClick2} />}
                            label="Little Princess Pedicure"
                          />
                        </RadioGroup>
                        <FormGroup>
                          <FormControlLabel
                            name="Acrylic or Gel Removal"
                            control={<Checkbox onChange={checkboxChange2} />}
                            label="Acrylic or Gel Removal"
                          />
                          <FormControlLabel
                            name="Gel Polish Change"
                            control={<Checkbox onChange={checkboxChange2} />}
                            label="Gel Polish Change"
                          />
                          <FormControlLabel
                            name="Fill Pink"
                            control={<Checkbox onChange={checkboxChange2} />}
                            label="Fill Pink"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                  ) : null}
                  {combo ? (
                    <div className="category-content">
                      <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup name="combo" value={opt3}>
                          <FormControlLabel
                            value="Basic Mani / Basic Pedi Combo"
                            control={<Radio onClick={choicesClick3} />}
                            label="Basic Mani / Basic Pedi Combo"
                          />
                          <FormControlLabel
                            value="Basic Mani / Express Pedi Combo"
                            control={<Radio onClick={choicesClick3} />}
                            label="Basic Mani / Exxpress Pedi Combo"
                          />
                          <FormControlLabel
                            value="Orange Peel Pedicure and Basic Manicure"
                            control={<Radio onClick={choicesClick3} />}
                            label="Orange Peel Pedicure and Basic Manicure"
                          />
                          <FormControlLabel
                            value="Shellac Mani / Basic Pedi Combo"
                            control={<Radio onClick={choicesClick3} />}
                            label="Shellac Mani / Basic Pedi Combo"
                          />
                          <FormControlLabel
                            value="Shellac Mani / Express Pedi Combo"
                            control={<Radio onClick={choicesClick3} />}
                            label="Shellac Mani / Express Pedi Combo"
                          />
                          <FormControlLabel
                            value="Little Princess Manicure and Pedicure"
                            control={<Radio onClick={choicesClick3} />}
                            label="Little Princess Manicure and Pedicure"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  ) : null}

                  {count + (value.length - 1) + (value2.length - 1) > 0 ? (
                    count + (value.length - 1) + (value2.length - 1) > 1 ? (
                      <button
                        id="pick-btn"
                        onClick={handlePickClick}
                        className="btn btn-success"
                      >
                        {count + (value.length - 1) + (value2.length - 1)} services
                      </button>
                    ) : (
                      <button
                        id="pick-btn"
                        onClick={handlePickClick}
                        className="btn btn-success"
                      >
                        {count + (value.length - 1) + (value2.length - 1)} service
                      </button>
                    )
                  ) : (
                    <button
                      id="pick-btn"
                      onClick={handlePickClick}
                      disabled
                      className="btn btn-secondary"
                    >
                      {count + (value.length - 1) + (value2.length - 1)} service
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Booking;
