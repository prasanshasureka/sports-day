import React from 'react'
import style from './Card.module.css'

const Card = (props) => {
    const cardClass = style.card + ' ' + props.className
  return (
    <div className={cardClass}>{props.children}</div>
  )
}

export default Card