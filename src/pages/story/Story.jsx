import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

const Story = () => {
  return (
    <div className="bg-black">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto px-2.5 sm:px-5">
            
            <div className=" md:py-20 md:flex gap-20 py-10">
                <div className='md:w-1/2'>
                    <h1 className='text-white md:text-[56px] text-4xl' >Our Story</h1>
                    <p className='text-white py-6'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
                    <div className="flex justify-around flex-1">
                        <div className='w-1/3'>
                            <img className="md:w-60 md:pt-16 md:h-[500px] w-full h-full" src="./img/Image 1.png" alt="" />
                        </div>
                        <div className='w-1/3'>
                            <img className="md:w-60 md:h-[500px] w-full h-full" src="./img/Image 2.png" alt="" />
                        </div>
                    </div>     
                </div>
                <div className='md:w-1/2 flex flex-col gap-4 py-4 text-center'>
                    <h3 className='text-white text-[32px] '>One of the best cafes in New York.</h3>
                    <p className='text-white py-6'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                    <p className='text-white'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Story