import React from 'react';
import styles from '@/styles/Callout.cookies.module.css';

export default function Calloutcookies(props) {
  
    return (
        <>
        
        <div className={styles.calloutImage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
            <h4 className={styles.titleCallout}>{props.header}</h4>
            <input className={styles.explorebutton} type="submit" value="Order Now!" />
        </div>
        
        </>
    )
}