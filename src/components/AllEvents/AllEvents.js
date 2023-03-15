import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEvent } from "../../store/master";
import { checkEventSelectable } from "../../utility/eventUtility";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./AllEvents.module.css";
import SportsCard from "../SportsCard/SportsCard";

const AllEvents = () => {
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
      : notify(`Can't select 2 events scheduled at the same time`);
  };

  return (
    <div className={style['section']}>
      <div className={style['header-div']}><h1>All Events</h1></div>
      <div className={style['events-grid']}>
        {allEvents.map((sportsEvent) => (
          <SportsCard
            key={sportsEvent.id}
            sportsEvent={sportsEvent}
            cardStyle={style.card}
            buttonTitle="Select"
            buttonClass={style['select-button']}
            clickHandler={selectEventHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
