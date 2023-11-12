import React from 'react';
import styles from '@/styles/Message.module.css'
export default function ProductsSuccess(){
    return (
        <>


        <h1 className={styles.messageSent}>Thank you for your Purchase!</h1>
        <h1 className={styles.messageSent}>You have ordered 300 cupcakes!</h1>
        <h1 className={styles.messageSent}>For:Open House on Cobb Street</h1>
        <h1 className={styles.messageSent}>Kind of Cupcakes: Chocolate and Strawberry</h1>
        <h1 className={styles.messageSent}>Price:200$</h1>
        <h1 className={styles.messageSent}>Date:November 29th, 2023</h1>
        
      
        </>
    );
}