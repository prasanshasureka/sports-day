import React from "react";
import Card from "../../GeneralUI/Card";
import EventDate from "../EventDate/EventDate";
import Button from "../../GeneralUI/Button";
import style from "./SportsCard.module.css";

const SportsCard = (props) => {
  const sportsEvent = props.sportsEvent;
  const cardStyle = props.cardStyle;
  return (
    <Card className={cardStyle}>
      <div className={style["event__name_category"]}>
        <div className={style["event-name"]}>{sportsEvent.event_name}</div>
        <div className={style["event-category"]}>
          {sportsEvent.event_category}
        </div>
      </div>
      <EventDate
        startTime={sportsEvent.start_time}
        endTime={sportsEvent.end_time}
      />
      <Button
        onClick={() => props.clickHandler(sportsEvent)}
        title={props.buttonTitle}
        className={props.buttonClass}
      />
    </Card>
  );
};

export default SportsCard;
