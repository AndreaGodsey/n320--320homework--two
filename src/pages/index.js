import Callout from '@/components/Callout';
import Calloutabout from '@/components/Calloutabout';
import Calloutcatering from '@/components/Calloutcatering';
import Calloutseasonal from '@/components/Calloutseasonal';
import Calloutcontact from '@/components/Calloutcontact';
import styles from '@/styles/Divider.module.css';
import React from 'react';
export default function HOME(){
  return (
    <>
   
   <Callout imageURL='/DessertCallout.jpg'
   header='Home'/>

   <div className={styles.divider}></div>

   <Calloutabout imageURL='/AboutUs.jpg'
   header='Learn More About the Company' Submit='Learn More!'/>


   <div className={styles.divider}></div>
 
   <Calloutcatering imageURL='/CateringServices.jpg'
   header='Learn About Catering Services' Submit='Order Now!'/>

   <div className={styles.divider}></div>
 
   <Calloutseasonal imageURL='/Seasonal.jpg'
   header='Learn About Seasonal Items' Submit='Learn More!'/>
   
   <div className={styles.divider}></div>
 
   <Calloutcontact imageURL='/Contact.jpg'
   header='Questions? Contact Us!' Submit='Contact Us'/>
    </>





  );
}