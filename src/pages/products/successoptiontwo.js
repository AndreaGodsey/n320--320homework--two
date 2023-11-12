import React from 'react';
import styles from '@/styles/Message.module.css'
export default function ProductsSuccess(){
    return (
        <>


        <h1 className={styles.messageSent}>Thank you for your Purchase!  </h1>
        <h1 className={styles.messageSent}>You have ordered 200 cookies!</h1>
        <h1 className={styles.messageSent}>For:Birthday Party for Riley</h1>
        <h1 className={styles.messageSent}>Kind of Cookies: Chocolate Chip</h1>
        <h1 className={styles.messageSent}>Price:150$</h1>
        <h1 className={styles.messageSent}>Date:December 14th, 2023</h1>
        
      
        </>
    );
}