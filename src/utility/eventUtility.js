const convertDateTime = (dateTime) => {
  return new Date(dateTime);
};

const checkEventSelectable = (sportsEvent, selectedEvents) => {
  const currentStartTime = convertDateTime(sportsEvent.start_time);
  const currentEndTime = convertDateTime(sportsEvent.end_time);
  return selectedEvents.every((selectedEvent) => {
    const eventStartTime = convertDateTime(selectedEvent.start_time);
    const eventEndTime = convertDateTime(selectedEvent.end_time);
    return currentStartTime >= eventEndTime || currentEndTime <= eventStartTime
      ? true
      : false;
  });
};

function formatAMPM(date) {
    var hours = new Date(date).getHours();
    var minutes = new Date(date).getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


export { checkEventSelectable, formatAMPM };
