import React from 'react';
import styles from '@/styles/Callout.cakes.module.css';

export default function Calloutcakes(props) {
  
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