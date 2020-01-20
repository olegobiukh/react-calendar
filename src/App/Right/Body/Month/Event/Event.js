import "./index.scss";
import React, { Component } from "react";
import uid from "uid";
import EventForm from "../EventForm";

class Event extends Component {
  state = {
    showEdit: false
  };

  handleEventEdit = () => {
    const { showEdit } = this.state;
    this.setState({ showEdit: !showEdit });
  };

  render = () => {
    const { showEdit } = this.state;
    const { title } = this.props;

    return (
      <section className={`table-day__event`} key={uid()}>
        {title}
        <button
          type="button"
          className={`table-day__dots`}
          onClick={() => this.handleEventEdit()}
        >
          ...
        </button>
        {showEdit && <EventForm {...this.props} idEdit={true} />}
      </section>
    );
  };
}

export default Event;
