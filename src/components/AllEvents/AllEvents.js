import React from "react";
import Card from "../../UI/Card";

const AllEvents = (props) => {
  return (
    <div className={props.className}>
      <h1>All Events</h1>
      {props.data.map((sportsEvent) => (
        <div key={sportsEvent.id}>
          <Card>
            {sportsEvent.event_name}
            {sportsEvent.event_category}
            {sportsEvent.start_time}
            {sportsEvent.end_time}
            <button title="SELECT" onClick={() => props.onSelectionChange(sportsEvent)}>SELECT</button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AllEvents;
