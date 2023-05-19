import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="text-white md:py-20 ">
            <div className="text-white md:py-20 md:flex justify-between">
                        <div className="bg-zinc-900 flex-1">
                            <div className="md:py-20 py-10 pl-16 pr-[35px]">
                                <div className="py-4">
                                    <h4 className="text-xl">Working Hour</h4>
                                    <p>Sunday to Saturday <br></br>9:00 AM to 11:00 PM</p>
                                </div>
                                <div className="py-4">
                                    <h4 className="text-xl">Location</h4>
                                    <p>Street - 127, New York <br></br>United States<br></br>546544</p>
                                </div>
                                <div className="py-4">
                                    <h4 className="text-xl">Contact us </h4>
                                    <a className='text-white' href='tel:+123456789'>+123456789</a>
                                    <br></br>
                                    <a className='text-white' href='mailto:hey@yourdomain.com'>hey@yourdomain.com</a>
                                </div>
                            </div>
                        </div>
                    <div>
                        <img className='w-full h-full pb-5' src="./img/Map.png" alt="" />
                    </div>
            </div>
            <a href='/' className='text-center block'>
                <img src="./img/Logo.svg" alt="" />
            </a>
            <div className='text-center'>
                <ul className='flex justify-center md:py-10 pl-0'>
                    <li className='md:mx-2 p-1 list-none text-white'>
                        <a className='no-underline text-base text-white'  href="/">Home</a>
                    </li>
                    <li className='md:mx-2 p-1 list-none'>
                        <a className='no-underline text-base text-white' href="/menu">Menu</a>
                    </li>
                    <li className='md:mx-2 p-1 list-none'>
                        <a className='no-underline text-base text-white' href="/about">About us</a>
                    </li>
                    <li className='md:mx-2 p-1 list-none'>
                        <a className='no-underline text-base text-white' href="/story">Our story</a>
                    </li>
                    <li className='md:mx-2 p-1 list-none'>
                        <a className='no-underline text-base text-white' href="/blog">Blog</a>
                    </li>
                    <li className='md:mx-2 p-1 list-none'>
                        <a className='no-underline text-base text-white' href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='flex pt-5'>
                <p className='w-2/6 text-xs md:text-base'>© 2021 Finsweet | All rights reserved.</p>
                <div className='w-2/6 align-center flex justify-center gap-x-4'>
                    <a href="https://www.facebook.com/"><img src="./img/VectorFB.png" alt="" /></a>
                    <a href="https://twitter.com/?lang=vi"><img src="./img/VectorTwitter.png" alt="" /></a>
                    <a href="https://www.linkedin.com/feed/"><img src="./img/VectorLinkedIn.png" alt="" /></a>
                </div>
                <p className='w-2/6 flex justify-end'>Contact us</p>
            </div>
        </div>
    </div>
  )
}

export default Footer