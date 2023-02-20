import React from "react";
import Card from "../../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import { unselectEvent } from "../../store/master";

const SelectedEvents = (props) => {
  const dispatch = useDispatch();
  const { selectedEvents } = useSelector((state) => state.master);
  const unselectEventHandler = (sportsEvent) => {
    dispatch(unselectEvent(sportsEvent));
    console.log(selectedEvents)
  };
  return (
    <div className={props.className}>
      <h1>Selected Events</h1>
      {selectedEvents.map((sportsEvent) => (
        <div key={sportsEvent.id}>
          <Card>
            <div>{sportsEvent.event_name}</div>
            <div>{sportsEvent.event_category}</div>
            <div>{sportsEvent.start_time}</div>
            <div>{sportsEvent.end_time}</div>
            <button
              title="SELECT"
              onClick={() => unselectEventHandler(sportsEvent)}
            >
              REMOVE
            </button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SelectedEvents;
