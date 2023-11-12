import React from 'react';
import styles from '@/styles/Products.cupcakes.module.css';

export default function Productscupcakes(props) {
  
    return (
        <>
        
        <div className={styles.Cupcakes}>

        <div className={styles.Cupcakesdescrip}>{props.descriptiontwo}</div>

        <div className={styles.Cupcakesimage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
        </div>

        </div>
        
        </>
    )
}