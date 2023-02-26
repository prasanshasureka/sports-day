import React from 'react'
import { useSelector } from 'react-redux'
import style from './Error.module.css'

const Error = () => {
    const {error} = useSelector((state) => state.master)
  return (
    <div className={style['error__div']}>{error}</div>
  )
}

export default Error