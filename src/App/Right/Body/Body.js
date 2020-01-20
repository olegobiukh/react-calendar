import React, { Component } from "react";
import "./index.scss";
import Month from "./Month";
import { Button } from "@material-ui/core";
import {
  getNextMonth,
  getNextMonthYear,
  getPrevMonth,
  getPrevMonthYear
} from "./functions/date";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Body extends Component {
  state = {
    chosenMonthNumber: new Date().getMonth(),
    chosenYear: new Date().getFullYear(),
    events: [],
    monthlyEvents: []
  };

  makeDate = (month, year) => {
    const newMonth = month < 9 ? `0${month + 1}` : month + 1;
    return year + "-" + newMonth;
  };

  getCurrentMonthEvents = (events, month, year) => {
    const stringDate = this.makeDate(month, year);

    const result = events.filter(item => {

      return JSON.stringify(item.date).includes(stringDate);
    });

    return result;
  };

  addEvent = event => {
    const { events, chosenMonthNumber, chosenYear } = this.state;
    const [...copyEvents] = events;
    let newEvents = [];
    const index = events.findIndex(item => item.id === event.id);

    if (index !== -1) {
      copyEvents[index] = event;
      newEvents = copyEvents;
    } else {
      newEvents = [...events, event];
    }

    const monthlyEvents = this.getCurrentMonthEvents(
      newEvents,
      chosenMonthNumber,
      chosenYear
    );

    this.setState({ events: newEvents, monthlyEvents });
  };

  manageChosenDate(monthNumber, year) {
    const { events } = this.state;
    const currentMonthEvents = this.getCurrentMonthEvents(
      events,
      monthNumber,
      year
    );

    this.setState({
      chosenMonthNumber: monthNumber,
      chosenYear: year,
      monthlyEvents: currentMonthEvents
    });
  }

  deleteEvent = id => {
    const { events, chosenMonthNumber, chosenYear } = this.state;
    const newEvents = events.filter(item => item.id !== id);

    this.setState({ events: newEvents });

    this.getCurrentMonthEvents(newEvents, chosenMonthNumber, chosenYear);
  };

  render = () => {
    const { chosenMonthNumber, chosenYear, monthlyEvents } = this.state;

    const currentMonthNumber = new Date().getMonth();
    const currentMonthYear = new Date().getFullYear();

    const nextMonthNumber = getNextMonth(chosenMonthNumber);
    const nextMonthYear = getNextMonthYear(chosenMonthNumber, chosenYear);

    const prevMonthNumber = getPrevMonth(chosenMonthNumber);
    const prevMonthYear = getPrevMonthYear(chosenMonthNumber, chosenYear);
    return (
      <section className={`right-body`}>
        <h1 className={`right-body__title`}>calendar</h1>
        <section className={`calendar__container`}>
          <section className={`calendar__head`}>
            <h2 className={`calendar__title`}>calendar view</h2>
            <section className={`calendar__toolbar`}>
              <Button variant="contained" color="default">
                month
              </Button>
              <Button variant="contained" color="default">
                week
              </Button>
              <Button variant="contained" color="default">
                day
              </Button>
              <Button variant="contained" color="default">
                agenda
              </Button>
            </section>
          </section>
          <section className={`calendar__toolbar-bottom`}>
            <Button
              variant="contained"
              color="default"
              onClick={() =>
                this.manageChosenDate(currentMonthNumber, currentMonthYear)
              }
            >
              today
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() =>
                this.manageChosenDate(prevMonthNumber, prevMonthYear)
              }
            >
              back
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={() =>
                this.manageChosenDate(nextMonthNumber, nextMonthYear)
              }
            >
              next
            </Button>
          </section>
          <section className={`calendar-table`}>
            <h3 className={`calendar__toolbar-title`}>
              {months[chosenMonthNumber]} {chosenYear}
            </h3>
            <Month
              handleAddEvent={this.addEvent}
              chosenMonthNumber={chosenMonthNumber}
              chosenYear={chosenYear}
              manageChosenDate={this.manageChosenDate}
              monthlyEvents={monthlyEvents}
              handleDeleteEvent={this.deleteEvent}
            />
          </section>
        </section>
      </section>
    );
  };
}

export default Body;
