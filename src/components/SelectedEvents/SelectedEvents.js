import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unselectEvent } from "../../store/master";
import style from "./SelectedEvents.module.css";
import SportsCard from "../SportsCard/SportsCard";

const SelectedEvents = () => {
  const dispatch = useDispatch();
  const { selectedEvents } = useSelector((state) => state.master);
  const unselectEventHandler = (sportsEvent) => {
    dispatch(unselectEvent(sportsEvent));
  };
  return (
    <div className={style['section']}>
      <div className={style['header-div']}><h1>Selected Events</h1></div>
      <div className={style['events-grid']}>
        {selectedEvents.length>=1 ? selectedEvents.map((sportsEvent) => (
          <SportsCard
            key={sportsEvent.id}
            sportsEvent={sportsEvent}
            cardStyle={style.card}
            buttonTitle="Remove"
            buttonClass={style['remove-button']}
            clickHandler={unselectEventHandler}
          />
        )) : <h3>No Events Selected!</h3>}
      </div>
    </div>
  );
};

export default SelectedEvents;
