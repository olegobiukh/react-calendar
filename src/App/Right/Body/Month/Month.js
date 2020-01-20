import "./index.scss";
import React, { Component } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  getDaysInMonth,
  getPrevMonthData,
  getNextMonthData
} from "../functions/date";
import EventForm from "./EventForm";
import Event from "./Event";
import uid from "uid";

class Month extends Component {
  state = {
    eventFormId: null
  };

  toggleEventForm = (value = 100) => {
    this.setState({ eventFormId: value });
  };

  render = () => {
    const {
      chosenMonthNumber,
      chosenYear,
      handleAddEvent,
      monthlyEvents,
      handleDeleteEvent
    } = this.props;

    const { eventFormId } = this.state;

    const daysOfCurrentMonth = getDaysInMonth(chosenMonthNumber, chosenYear);
    const prevMonthData = getPrevMonthData(chosenMonthNumber, chosenYear);
    const nextMonthData = getNextMonthData(
      chosenMonthNumber,
      chosenYear,
      daysOfCurrentMonth
    );

    return (
      <ul className={`table__days`}>
        {prevMonthData.daysOfPrevMonth.map(item => (
          <li className={`table-day table-day--blur`} key={uid()}>
            <p className={`table-day__number`}>{item}</p>
          </li>
        ))}
        {Array.from({ length: daysOfCurrentMonth }, (v, k) => k + 1).map(
          item => {
            const stringItem = item < 10 ? `-0${item}T` : `-${item}T`;
            const dailyEvents = monthlyEvents.filter(event =>
              JSON.stringify(event.date).includes(stringItem)
            );
            return (
              <li className={`table-day`} key={uid()}>
                <p className={`table-day__number`}>
                  <IoIosAddCircleOutline
                    style={{ cursor: "pointer" }}
                    onClick={() => this.toggleEventForm(item)}
                  />
                  <span>{item}</span>
                </p>
                {monthlyEvents.length > 0 &&
                  dailyEvents &&
                  dailyEvents.map(event => (
                    <Event
                      key={uid()}
                      event={event}
                      title={event.title}
                      toggleEventForm={this.toggleEventForm}
                      handleAddEvent={handleAddEvent}
                      day={item}
                      chosenMonthNumber={chosenMonthNumber}
                      chosenYear={chosenYear}
                      handleDeleteEvent={handleDeleteEvent}
                    />
                  ))}
                {item === eventFormId ? (
                  <EventForm
                    toggleEventForm={this.toggleEventForm}
                    handleAddEvent={handleAddEvent}
                    day={item}
                    chosenMonthNumber={chosenMonthNumber}
                    chosenYear={chosenYear}
                  />
                ) : null}
              </li>
            );
          }
        )}
        {nextMonthData.daysOfNextMonth.map(item => (
          <li className={`table-day`} key={uid()}>
            <p className={`table-day__number table-day--blur`}>{item}</p>
          </li>
        ))}
      </ul>
    );
  };
}

export default Month;
