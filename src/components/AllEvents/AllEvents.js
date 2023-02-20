import React from "react";
import Card from "../../UI/Card";
import {useSelector, useDispatch} from 'react-redux'
import { selectEvent } from "../../store/master";

const AllEvents = (props) => {
  const dispatch = useDispatch()
  const { allEvents } = useSelector(
    (state) => state.master
  );
  const selectEventHandler = (sportsEvent) => {
    dispatch(selectEvent(sportsEvent))
  }
  return (
    <div className={props.className}>
      <h1>All Events</h1>
      {allEvents.map((sportsEvent) => (
        <div key={sportsEvent.id}>
          <Card>
            {sportsEvent.event_name}
            {sportsEvent.event_category}
            {sportsEvent.start_time}
            {sportsEvent.end_time}
            <button title="SELECT" onClick={() => selectEventHandler(sportsEvent)}>SELECT</button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AllEvents;
