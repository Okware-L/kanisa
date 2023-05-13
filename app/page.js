import React from 'react'
import Nav from './components/Nav'
import Image from 'next/image'
import Picha from '../public/images/hero.jpg'
import Comm from '../public/images/comm.jpg'
import Footer from './components/Footer'
import Card from './components/card'
import Newsletter from './components/Newsletter'

export default function page() {
  return (
    <div>
    <Nav/>
    <div className=' bg-hero bg-cover bg-center bg-fixed bg-no-repeat h-screen '>
    <div className='bg-gray-950/70 mt-3 text-center text-white pt-20 pb-20 h-screen'>
      <span className='text-3xl font-bold tracking-widest'>HELPING EVERYONE EXPERIENCE GRACE</span> 
      <p className='my-10'>BY LOVING AND LEADING OUR CITIES</p>
      <p className='my-20 font-semibold'>SERVICE TIMES:  SUNDAYS 9 AM & 10:30 AM FOR IN-PERSON & ONLINE</p>
    </div>
    </div>

    <div className='m-20 text-center '>
        <span className='m-5'>ABOUT</span>
        <p className='p-5 shadow-inner'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Voluptatibus quia, nulla! Maiores et perferendis eaque, 
        exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Voluptatibus quia, nulla! Maiores et perferendis eaque, 
        exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Voluptatibus quia, nulla! Maiores et perferendis eaque, 
        exercitationem praesentium nihil.
        </p>
    </div>

    <div >
       <Card/>
    </div>

    <div className='grid grid-cols-3 m-20 shadow shadow-inner'>
        <div className='text-center justify-center '>
            <div className='p-20 mt-10'></div>
            <h1 className='my-3'>TITLE</h1>
            <div className='my-5'>
                <p>
                    isidgkcsnhdfugnsvlkjghrtnvksjddhgtrv
                    surktbvsekurgtbvlkiesuhtkbvihestv
                    iiuyetrvbkuwyteb
                </p>   
            </div>
            <span>SEE MORE</span>
        </div>
        
            <div className='m-3 shadow-sm'>
            <Image
            src={Comm}
            alt="fellowship pic"
            />
            </div>
            <div>
            <div className='m-3 mt-10'>
            <Image
            src={Picha}
            alt="fellowship pic"
            />
            </div>
            <div className='m-3'>
            <Image
            src={Picha}
            alt="fellowship pic"
            />
            </div>
            </div>
            
        
    </div>

    <Newsletter />

    <div className='grid grid-cols-2 text-center text-white'>
      <div className='bg-hero bg-cover bg-center p-10'>
        
        <span className=''>Upcoming Events</span>
        <p className='m-5'>
            lorem ipsum nini nini
        </p>
        <span>SEE EVENTS</span>
        
      </div>
      
      <div className='bg-gradient-radial '>
        <h1 className='text-black m-10'>BE OUR GUEST </h1>
      <span className='m-10 text-black '>SCHEDULE A VISIT</span>

      </div>
    </div>
    <Footer/>
    </div>
  )
}
