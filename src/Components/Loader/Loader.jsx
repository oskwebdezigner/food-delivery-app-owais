import React from 'react'
import style from './Loader.module.css'

const Loader = (props) => {
  return (
    <div className={style.loadingData}>
        <p>{props.loadingText}</p>
    </div>
  )
}

export default Loader