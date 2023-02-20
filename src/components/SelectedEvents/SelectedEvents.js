import React from 'react'
import Card from '../../UI/Card'

const SelectedEvents = (props) => {
  return (
    <div className={props.className}>
        <h1>Selected Events</h1>
        {props.data.map((sportsEvent) => (
        <div key={sportsEvent.id}>
          <Card>
            {sportsEvent.event_name}
            {sportsEvent.event_category}
            {sportsEvent.start_time}
            {sportsEvent.end_time}
            <button title="SELECT">REMOVE</button>
          </Card>
        </div>
      ))}</div>
  )
}

export default SelectedEvents