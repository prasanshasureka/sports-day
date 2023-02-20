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


export { checkEventSelectable };
