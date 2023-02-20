import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unselectEvent } from "../../store/master";
import style from "./SelectedEvents.module.css";
import SportsCard from "../SportsCard/SportsCard";

const SelectedEvents = (props) => {
  const dispatch = useDispatch();
  const { selectedEvents } = useSelector((state) => state.master);
  const unselectEventHandler = (sportsEvent) => {
    dispatch(unselectEvent(sportsEvent));
    console.log(selectedEvents);
  };
  return (
    <div className={props.className}>
      <h1>Selected Events</h1>
      <div className={props.gridStyle}>
        {selectedEvents.map((sportsEvent) => (
          <SportsCard
            key={sportsEvent.id}
            sportsEvent={sportsEvent}
            cardStyle={style.card}
            dateTimeStyle={style.date_time}
            buttonTitle="Remove"
            clickHandler={unselectEventHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedEvents;
