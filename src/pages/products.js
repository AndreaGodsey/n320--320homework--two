import React from 'react';
import Callout from '@/components/Callout';
import Calloutcakes from '@/components/Calloutcakes';
import Calloutcupcakes from '@/components/Calloutcupcakes';
import Calloutcookies from '@/components/Calloutcookies';
import Productscookies from '@/components/Productscookies';
import Productscakes from '@/components/Productscakes';
import Productscupcakes from '@/components/Productscupcakes';
import styles from '@/styles/Divider.module.css';
export default function Products(){
    return (
        <>
        
        <Callout imageURL='/DessertCallout.jpg'
        header='Products'/>

        <div className={styles.divider}>Cookies</div>

        <Productscookies descriptiontwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.'
        imageURL='/Cookiesmenu.jpg'
        />

        <div className={styles.divider}>Cakes</div>

        
        <Productscakes descriptiontwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.'
        imageURL='/Cakesmenu.jpg'
        />

        <div className={styles.divider}>Cupcakes</div>


        <Productscupcakes descriptiontwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.bibendum arcu vitae elementum curabitur vitae. Cursus euismod.'
        imageURL='/Cupcakesmenu.jpg'
        />

        <div className={styles.divider}>Catering Services</div>


        <Calloutcookies imageURL='/Cookiesmenu.jpg'
        header='Order Cookies for the next event!' Submit='Order Items!'/>

        <div className={styles.divider}></div>

        <Calloutcakes imageURL='/Cakesmenu.jpg'
        header='Order Cakes for the next event!' Submit='Order Items!'/>

        <div className={styles.divider}></div>

        <Calloutcupcakes imageURL='/Cupcakesmenu.jpg'
        header='Order Cupcakes for the next event!' Submit='Order Items!'/>


        </>
    )
}