import React from 'react';
import styles from './index.module.css';

const Photo = ({ source }) => {
    return (

        <img className={styles['big-photo']}
            src="./header-photo.png" />

    )
}

export default Photo;
