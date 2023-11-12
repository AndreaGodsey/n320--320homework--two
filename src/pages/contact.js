import React from 'react';
import styles from '@/styles/Contact.module.css'
import { useRouter } from 'next/router';
import Callout from '@/components/Callout';
export default function Contact(){
const [fullName, setFullName] = React.useState('Andrea Godsey');
const [email, setEmail] = React.useState('agodsey@iu.edu');
const [phone, setPhone] = React.useState('xxx-xxx-xxxx');
const [address, setAddress] = React.useState('123 Home Address');
// let fullName = 'Andrea Godsey';
// let email = 'agodsey@iu.edu';


const router = useRouter();

    function contactFormSubmit(e){
        e.preventDefault();
        if(fullName !== '' && email !== '' && phone !== '' && address !== ''){
            router.push('/contact/success')
        }
        console.log(fullName, email, phone, address);
    }

    function updateContactInfo(e){
        
        if(e.currentTarget.name === 'fullName') {
            //fullName = e.currentTarget.value;
            setFullName(e.currentTarget.value);
        }

        if(e.currentTarget.name === 'email') {
            // email = e.currentTarget.value;
            setEmail(e.currentTarget.value);
        }

        if(e.currentTarget.name === 'phone') {
            // email = e.currentTarget.value;
            setPhone(e.currentTarget.value);
        }

        if(e.currentTarget.name === 'address') {
            // email = e.currentTarget.value;
            setAddress(e.currentTarget.value);
        }
    }

    return (
        <>

        <Callout imageURL='/DessertCallout.jpg'
        header='Contact'
   />


        <form className={styles.form} onSubmit={contactFormSubmit}>

        <div className={styles.formField}>
            <label>Full Name:</label>
            <input name='fullName' type='text' placeholder='Andrea Godsey' onChange={updateContactInfo} value={fullName}></input>
        </div>

        <div className={styles.formField}>
            <label>Email:</label>
            <input name='email' type='email' placeholder='agodsey@iu.edu'onChange={updateContactInfo} value={email}></input>
        </div>

        <div className={styles.formField}>
            <label>Phone Number:</label>
            <input name='phone' type='phone' placeholder='xxx-xxx-xxxx'onChange={updateContactInfo} value={phone}></input>
        </div>

        <div className={styles.formField}>
            <label>Street Address:</label>
            <input name='address' type='address' placeholder='123 Home Address'onChange={updateContactInfo} value={address}></input>
        </div>

        <div className={styles.formField}>
            <input type='submit' value='Send Contact'></input>
        </div>

        </form>
        
        </>
    )
}