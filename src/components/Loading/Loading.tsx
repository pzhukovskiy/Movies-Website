import React from 'react';
import LoadingGif from '/public/images/LoadingGif.gif';
import styles from './Loading.module.scss';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className={styles.main}>
      <Image src={LoadingGif} alt="gif"/>
    </div>
  )
}

export default Loading