import React from 'react'
import LoadingGif from '../../imgs/LoadingGif.gif'
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.main}>
      <img src={LoadingGif} alt="gif"/>
    </div>
  )
}

export default Loading