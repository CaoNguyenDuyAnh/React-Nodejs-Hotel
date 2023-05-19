import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

const Contact = () => {
  return (
    <div className="bg-black">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto px-2.5 sm:px-5">
            <div className='md:flex gap-20 md:py-20 py-10'>
                <div className='md:w-1/2 pt-4'>
                    <h2 className='text-white'>Have a Question ? <br></br>
                     Get in Touch with us 👋</h2>
                    <p className='text-white py-6'>Fill up the Form  and ou team will get back to within 24 hrs</p>
                    <form className='pt-4'>
                        <div className='flex gap-8'>
                            <input className='text-white bg-black w-full py-[14px] md:px-8 px-4 border-none' type="text" placeholder='Name' />
                            <input className='text-white bg-black w-full py-[14px] md:px-8 px-4 border-none' type="text" placeholder='Email' />
                        </div>
                        <div className=''>
                            <textarea name="" id="" cols="20" rows="10" placeholder='Message' className='text-white my-6 py-[14px] md:px-8 bg-black w-full border-none'></textarea>
                        </div>
                        <button className='py-4 px-7 bg-[#27252D] text-white border-none cursor-pointer' type='submit'>Send Message</button>
                    </form>
                </div>
                <div className="flex justify-around md:justify-between flex-1 mt-5">
                    <div className="w-2/5 h-2/5 md:h-[500px] md:w-[240px]">
                        <img className=" md:pt-16 w-full h-full" src="./img/Contact Image 1.png" alt="" />
                    </div>
                    <div className="w-2/5 h-2/5 md:h-[500px] md:w-[240px]">
                        <img className=" w-full h-full" src="./img/Contact Image 2.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Contact