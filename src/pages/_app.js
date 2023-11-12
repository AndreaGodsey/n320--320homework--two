import '@/styles/globals.css';
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  //console.count('App Loaded')
  return (
    <>
    <nav className='naviDecoration'>
    <div className='naviCompany'>The Dessert Shoppe</div>
    <Link className='naviLinksDecoration' href='/'>Home</Link>
    <Link className='naviLinksDecoration' href='/about'>About</Link>
    <Link className='naviLinksDecoration' href='/products'>Products</Link>
    <Link className='naviLinksDecoration' href='/contact'>Contact</Link>
    </nav>

    <Component {...pageProps} />

    <footer className='footer'>
    <div className='copyrighttitle'>The Dessert Shoppe</div>
    <div className='copyright'>©Copyright 2023</div>
    </footer>

    </>
  );
  
}
