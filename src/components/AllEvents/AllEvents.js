import React from "react";
import Card from "../../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import { selectEvent } from "../../store/master";
import { checkEventSelectable } from "../../utility/eventUtility";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllEvents = (props) => {
  const notify = (msg) =>
    toast.error(msg, {
      position: "top-center",
      theme: "colored",
    });
  const dispatch = useDispatch();
  const { allEvents, selectedEvents } = useSelector((state) => state.master);
  const selectEventHandler = (sportsEvent) => {
    if (selectedEvents.length >= 3) {
      notify(`Can't select more than 3 events`);
      return
    }
    checkEventSelectable(sportsEvent, selectedEvents)
      ? dispatch(selectEvent(sportsEvent))
      : notify(`Can't select 2 events at the same time`);
  };
  return (
    <div className={props.className}>
      <h1>All Events</h1>
      {allEvents.map((sportsEvent) => (
        <div key={sportsEvent.id}>
          <Card>
            <div>{sportsEvent.event_name}</div>
            <div>{sportsEvent.event_category}</div>
            <div>{sportsEvent.start_time}</div>
            <div>{sportsEvent.end_time}</div>
            <button
              title="SELECT"
              onClick={() => selectEventHandler(sportsEvent)}
            >
              SELECT
            </button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AllEvents;
