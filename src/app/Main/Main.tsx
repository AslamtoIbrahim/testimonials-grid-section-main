import React from 'react'
import testimonials from './data'
import TestimonialCards from './TestimonialCards'

const Main = () => {
  return (
    <div className='px-6 py-10 grid gap-4 bg-neutral-lightGrayishBlue'>
    <TestimonialCards cardStyle='bg-primary-violet bg-comma bg-no-repeat bg-[right_1.5rem_top]' imageStyle='border-violet-400'  data={testimonials[0]} /> 
    <TestimonialCards cardStyle='bg-primary-grayishBlue' data={testimonials[1]} /> 
    <TestimonialCards cardStyle='bg-white text-primary-grayishBlue font-bold' nameStyle='text-primary-grayishBlue'  data={testimonials[2]} /> 
    <TestimonialCards cardStyle='bg-primary-blackishBlue text-white font-normal' imageStyle='border-violet-400'  data={testimonials[3]} /> 
    <TestimonialCards cardStyle='bg-white text-primary-grayishBlue font-bold' nameStyle='text-primary-grayishBlue'  data={testimonials[4]} /> 
    </div>
  )
}

export default Main
