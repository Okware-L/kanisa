import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='grid grid-cols-3 text-white bg-black justify-between text-center p-20'>
        <div className=''>
            <h1 className='mb-10'>SERVICE TIMES</h1>
            <p>SUNDAYS: IN-PERSON & ONLINE <br/>9 AM & 10:30 AM</p>
        </div>
        <div className=''>
            <h1 className='mb-10'> WE ARE ALL ABOUT JESUS </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus quia, nulla! Maiores et perferendis eaque, 
            exercitationem praesentium nihil
            </p>
            
        </div>
        <div>
            <h1 className='mb-10'>LOCATION</h1>
            <p>
            Nairobi, Kenya<br/><br/>
            <span>Get directions </span>

            </p>
        </div>
    </div>

    <div className='text-center'>
        SOCIAL ICONS

        <p>powered by Okware :) </p>
    </div>
    </div>
  )
}

export default Footer