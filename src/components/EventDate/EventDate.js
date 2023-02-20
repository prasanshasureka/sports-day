import style from "./EventDate.module.css";
import { formatAMPM } from "../../utility/eventUtility";
const EventDate = (props) => {
  
  const date = new Date(props.startTime);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  const startTime = formatAMPM(props.startTime);
  const endTime = formatAMPM(props.endTime);
  const divStyle = props.className ? `${style["event-date_time"]} ${props.className}`: style["event-date_time"]

  return (
    <div className={divStyle}>
      <div className="event-date">
        <div className={style["event-date__month"]}>{month}</div>
        <div className={style["event-date__day"]}>{day}</div>
        <div className={style["event-date__year"]}>{year}</div>
      </div>
      <div>
        <div className={style["event-time"]}>{startTime}</div>
        <div className={style["event-time"]}>{endTime}</div>
      </div>
    </div>
  );
};

export default EventDate;
