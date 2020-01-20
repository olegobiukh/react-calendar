import "./index.scss";
import React, { Component } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import uid from "uid";

// import "react-times/css/material/default.css";

class EventForm extends Component {
  state = {
    title: "",
    time: new Date(),
    date: new Date(),
    isShowDatePicker: false,
    isEditMode: true
  };

  componentDidMount() {
    const { chosenMonthNumber, chosenYear, day, event } = this.props;
    if (event) {
      this.setState({ ...event, isEditMode: false });
    } else {
      this.setState({
        date: new Date(Date.UTC(chosenYear, chosenMonthNumber, day))
      });
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const { title, time, date, id } = this.state;
    const { handleAddEvent, toggleEventForm } = this.props;

    const newObj = {
      id: id ? id : uid(),
      title,
      time,
      date
    };
    handleAddEvent(newObj);

    toggleEventForm(null);
  };

  render = () => {
    const { title, date, time, isEditMode } = this.state;
    const { toggleEventForm, idEdit, handleDeleteEvent, event } = this.props;

    return (
      <section className={`table-event ${idEdit ? "table-event--edit" : null}`}>
        <AiOutlineCloseCircle
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            fontSize: "20px",
            cursor: "pointer"
          }}
          onClick={() => toggleEventForm()}
        />
        <input
          maxLength="30"
          className={`table-event__input`}
          style={{fontSize: '15px', padding: '5px'}}
          value={title}
          onChange={event => this.handleChange("title", event.target.value)}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            value={date}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            onChange={event => this.handleChange("date", event)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            value={time}
            onChange={event => this.handleChange("time", event)}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </MuiPickersUtilsProvider>
        {!isEditMode ? (
          <section className={`table-event__toolbar`}>
            <button
              className={`table-event__btn`}
              onClick={() => handleDeleteEvent(event.id)}
              disabled={!title}
            >
              discard
            </button>
            <button
              className={`table-event__btn`}
              onClick={() => this.submitForm()}
              disabled={!title}
            >
              edit
            </button>
          </section>
        ) : (
          <section className={`table-event__toolbar`}>
            <button
              className={`table-event__btn ${
                !title
                  ? "table-event__btn--disabled"
                  : "table-event__btn--active"
              }`}
              onClick={() => this.submitForm()}
              disabled={!title}
            >
              save
            </button>
          </section>
        )}
      </section>
    );
  };
}

export default EventForm;
