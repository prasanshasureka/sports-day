import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEvent } from "../../store/master";
import { checkEventSelectable } from "../../utility/eventUtility";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./AllEvents.module.css";
import SportsCard from "../SportsCard/SportsCard";

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
      return;
    }
    checkEventSelectable(sportsEvent, selectedEvents)
      ? dispatch(selectEvent(sportsEvent))
      : notify(`Can't select 2 events at the same time`);
  };
  return (
    <div className={props.className}>
      <h1>All Events</h1>
      <div className={props.gridStyle}>
        {allEvents.map((sportsEvent) => (
          <SportsCard
            key={sportsEvent.id}
            sportsEvent={sportsEvent}
            cardStyle={style.card}
            dateTimeStyle={style.date_time}
            buttonTitle="Select"
            clickHandler={selectEventHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
