import React from 'react';
import styles from '@/styles/Products.cakes.module.css';

export default function Productscakes(props) {
  
    return (
        <>
        
        <div className={styles.Cakes}>

        <div className={styles.Cakesdescrip}>{props.descriptiontwo}</div>

        <div className={styles.Cakesimage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
        </div>

        </div>
        
        </>
    )
}