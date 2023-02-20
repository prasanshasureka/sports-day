import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
    const cardClass = props.className ? style.card + ' ' + props.className : style.card
  return (
    <div className={cardClass}>{props.children}</div>
  )
}

export default Card