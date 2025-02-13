import React from 'react'
import testimonials from './data'
import TestimonialCards from './TestimonialCards'

const Main = () => {
  return (
    <div className='px-6 md:px-14 md:py-16 py-10 grid gap-4 
    w-[min(100%,86rem)]
    lg:grid-cols-4 lg:grid-rows-2  '>
    <TestimonialCards cardStyle='bg-primary-violet bg-comma bg-no-repeat bg-[right_1.5rem_top]
    lg:col-start-1 lg:col-end-3' imageStyle='border-violet-400'  data={testimonials[0]} /> 
    <TestimonialCards cardStyle='bg-primary-grayishBlue' data={testimonials[1]} /> 
    <TestimonialCards cardStyle='bg-white text-primary-grayishBlue font-bold
    lg:row-start-2 lg:row-end-3' nameStyle='text-primary-grayishBlue'  data={testimonials[2]} /> 
    <TestimonialCards cardStyle='bg-primary-blackishBlue text-white font-normal
    lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-4' imageStyle='border-violet-400'  data={testimonials[3]} /> 
    <TestimonialCards cardStyle='bg-white text-primary-grayishBlue font-bold 
    lg:row-start-1 lg:row-end-3' nameStyle='text-primary-grayishBlue'  data={testimonials[4]} /> 
    </div>
  )
}

export default Main
