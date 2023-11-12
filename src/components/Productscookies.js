import React from 'react';
import styles from '@/styles/Products.cookies.module.css';

export default function Productscookies(props) {
  
    return (
        <>
        
        <div className={styles.Cookies}>

        <div className={styles.Cookiesdescrip}>{props.descriptiontwo}</div>

        <div className={styles.Cookiesimage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
        </div>

        </div>
        
        </>
    )
}