import React from 'react';
import Callout from '@/components/Callout';
import { useRouter } from 'next/router';
import Divider from '@/components/Divider';
import Productscookies from '@/components/Productscookies';
import Productscakes from '@/components/Productscakes';
import Productscupcakes from '@/components/Productscupcakes';
import styles from '@/styles/Products.order.module.css';
export default function Products(){

const [fullName, setFullName] = React.useState('Andrea Godsey');
const [email, setEmail] = React.useState('agodsey@iu.edu');
const [phone, setPhone] = React.useState('xxx-xxx-xxxx');
const [address, setAddress] = React.useState('123 Business Address');





    const router = useRouter();

    function orderFormSubmit(e){
        e.preventDefault();
        if(fullName !== '' && email !== '' && phone !== '' && address !== ''){
            router.push('/products/successoptiontwo')
        }
        console.log(fullName, email, phone, address);
    }

    function orderFormSubmitTwo(e){
        e.preventDefault();
        if(fullName !== '' && email !== '' && phone !== '' && address !== ''){
            router.push('/products/successoptionthree')
        }
        console.log(fullName, email, phone, address);
    }

    function orderFormSubmitThree(e){
        e.preventDefault();
        if(fullName !== '' && email !== '' && phone !== '' && address !== ''){
            router.push('/products/successoptionfour')
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
        header='Products'/>

        <Divider titleItems='Cookies'/>

        <Productscookies descriptiontwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.'
        imageURL='/Cookiesmenu.jpg'
        />

        <Divider titleItems='Cakes'/>

        
        <Productscakes descriptiontwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.'
        imageURL='/Cakesmenu.jpg'
        />

        <Divider titleItems='Cupcakes'/>


        <Productscupcakes descriptiontwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.'
        imageURL='/Cupcakesmenu.jpg'
        />

        <Divider titleItems=''/>

        <Callout imageURL='/Originbakery.jpg'
        header='Catering Services'/>

        <Divider titleItems='Order Cookies'/>
       
        <form className={styles.form} onSubmit={orderFormSubmit}>

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
    <label>Street Address of Order:</label>
    <input name='address' type='address' placeholder='123 Business Address'onChange={updateContactInfo} value={address}></input>
</div>

<div className={styles.formField}>
    <input type='submit' value='Send Order'></input>
</div>

</form>

        <Divider titleItems='Order Cakes'/>

        <form className={styles.form} onSubmit={orderFormSubmitTwo}>

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
    <label>Street Address of Order:</label>
    <input name='address' type='address' placeholder='123 Business Address'onChange={updateContactInfo} value={address}></input>
</div>

<div className={styles.formField}>
    <input type='submit' value='Send Order'></input>
</div>

</form>

        <Divider titleItems='Order Cupcakes'/>

        <form className={styles.form} onSubmit={orderFormSubmitThree}>

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
    <label>Street Address of Order:</label>
    <input name='address' type='address' placeholder='123 Business Address'onChange={updateContactInfo} value={address}></input>
</div>

<div className={styles.formField}>
    <input type='submit' value='Send Order'></input>
</div>

</form>

        </>
    )
}