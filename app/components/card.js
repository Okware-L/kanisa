import React from 'react'
import Picha from '../../public/images/hero.jpg'
import Image from 'next/image'

export default function card() {
  return (
    <div className='flex text-center m-10 justify-evenly'>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <Image src={Picha} alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Glory</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">See More</span>
    
    </div>
    </div>


    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <Image src={Picha} alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sunday Service</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">See More</span>
    
    </div>
    </div>


    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <Image src={Picha} alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Welcome !</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">See More</span>
    
    </div>
    </div>
    </div>
  )
}
