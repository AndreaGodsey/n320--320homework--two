import React from 'react';
import styles from '@/styles/Message.module.css'
export default function ProductsSuccess(){
    return (
        <>


        <h1 className={styles.messageSent}>Thank you for your Purchase!</h1>
        <h1 className={styles.messageSent}>You have ordered 3 cakes!</h1>
        <h1 className={styles.messageSent}>For: Sarah;s Retirement Party</h1>
        <h1 className={styles.messageSent}>Kind of Cakes: Chocolate, Vanilla, Strawberry </h1>
        <h1 className={styles.messageSent}>Price:100$</h1>
        <h1 className={styles.messageSent}>Date:December 12th, 2023</h1>
        
      
        </>
    );
}