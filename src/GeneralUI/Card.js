import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
    const cardStyle = props.className ? style.card + ' ' + props.className : style.card
  return (
    <div className={cardStyle}>{props.children}</div>
  )
}

export default Card