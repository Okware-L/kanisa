import React from 'react'
import Nav from './components/Nav'
import Image from 'next/image'
import Picha from '../public/images/hero.jpg'
import Footer from './components/Footer'

export default function page() {
  return (
    <div>
    <Nav/>
    <div className=' bg-hero bg-cover bg-center bg-fixed bg-no-repeat h-max '>
    <div className='bg-red-950/70 mt-3 text-center text-white'>
      <h1 className='py-20 text-3xl font-bold tracking-widest'>HELPING EVERYONE EXPERIENCE GRACE</h1> 
      <h3 className='my-10'>BY LOVING AND LEADING OUR CITIES</h3>
      <h3 className='my-10 font-semibold'>SERVICE TIMES:  SUNDAYS 9 AM & 10:30 AM FOR IN-PERSON & ONLINE</h3>
      <button className='my-10 p-3 bg-yellow rounded-none'>PLAN YOUR VISIT</button>
    </div>
    </div>

    <div className='grid grid-cols-3 text-center mt-5' >
        <div className='p-3'>
            <Image
            src={Picha}
            alt="fellowship pic"
            />
            <h3>Welcome</h3>
            <p>We’d love to meet you!  Learn more about Grace here. </p>
        </div>
        <div className='p-3'>
            <Image
            src={Picha}
            alt="fellowship pic"
            />
            <h3>Next Steps</h3>
            <p>We’d love to meet you!  Learn more about Grace here. </p>
        </div>
        <div className='p-3'>
            <Image
            src={Picha}
            alt="fellowship pic"
            />
            <h3>Service</h3>
            <p>We’d love to meet you!  Learn more about Grace here. </p>
        </div>
    </div>

    <div className='grid grid-flow-col p-20'>
        <div className='p-10'>
        <Image
            src={Picha}
            alt="fellowship pic"
            />
        </div>
        <div className='p-10'>
        <Image
            src={Picha}
            alt="fellowship pic"
            />
        </div>
    </div>
    <Footer/>
    </div>
  )
}
