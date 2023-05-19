import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

const About = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <div className="max-w-screen-xl mx-auto px-2.5 sm:px-5">
                
                <div className=" md:py-20 py-10">
                    <h5 className="text-orange-300">KNOW MORE ABOUT US</h5>
                    <div className="md:flex gap-x-24">
                        <div className="md:w-[630px]">
                            <h2 className="md:text-5xl text-4xl py-6 md:leading-[58px] leading-[45px] text-white text-center md:text-left">We source sustainable & line caught Foods</h2>
                            <p className="py-3 leading-7 text-white">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page. </p>
                            <div className="flex md:flex-row flex-col py-7 justify-between items-center text-center md:text-left">
                                <div className="w-[175px] pb-7 md:pb-0">
                                    <span className='text-white'>10+ People</span>
                                    <p className="md:pb-[15px] text-white">We are Small Team</p>
                                    <p className="leading-7 text-white">Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                                <div className="w-[175px] pb-7 md:pb-0">
                                    <span className='text-white' >2014</span>
                                    <p className="md:pb-[15px] text-white">We are From</p>
                                    <p className="leading-7 text-white">Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                                <div className="w-[175px] pb-7 md:pb-0">
                                    <span className='text-white'>200k</span>
                                    <p className="md:pb-[15px] text-white">We are Served</p>
                                    <p className="leading-7 text-white">Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around md:justify-between flex-1 mt-5">
                            <div className="w-2/5 h-2/5 md:h-[500px] md:w-[240px]">
                                <img className=" md:pt-16 w-full h-full" src="./img/Know more Image 2 about (1).png" alt="" />
                            </div>
                            <div className="w-2/5 h-2/5 md:h-[500px] md:w-[240px]">
                                <img className=" w-full h-full" src="./img/Know more Image 2 about (2).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" md:pt-20 pt-5">
                    <img className='w-full h-full' src="./img/ImageAbout1.png" alt="" />
                </div>
                <div className=''>
                    <div className='bg-zinc-900'>
                        <div className='md:p-20 p-10'>
                            <h3 className="pb-16 text-3xl text-white">Our History</h3>
                            <div className='flex md:flex-row flex-col gap-14 border-dashed border-l-0 border-b-0 border-r-0 border border-gray-700'>
                                <div className='pt-8 text-center md:text-left'>
                                    <h3 className='text-[32px] text-white'>1998</h3>
                                    <h4 className='text-xl py-4 text-white'>Milestone One</h4>
                                    <p className='text-white leading-7'>Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                                <div className='pt-8 text-center md:text-left'>
                                    <h3 className='text-[32px] text-white'>2005</h3>
                                    <h4 className='text-xl py-4 text-white'> Milestone Two</h4>
                                    <p className='text-white leading-7'>Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                                <div className='pt-8 text-center md:text-left' >
                                    <h3 className='text-[32px] text-white'>2012</h3>
                                    <h4 className='text-xl py-4 text-white'> Milestone Three</h4>
                                    <p className='text-white leading-7'>Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                                <div className='pt-8 text-center md:text-left'>
                                    <h3 className='text-[32px] text-white'>2021</h3>
                                    <h4 className='text-xl py-4 text-white'> Milestone Four</h4>
                                    <p className='text-white leading-7'>Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" md:pt-20 md:flex gap-4 py-10">
                    <div className='md:w-1/2'>
                        <h2 className='md:text-5xl text-3xl text-white text-center'>Things our company stands for</h2>
                    </div>
                    <div className='md:w-1/2 flex flex-col gap-4 py-10 md:py-0'>
                        <h3 className='md:text-[32px] text-2xl text-white hidden md:block'>Edit this text to make it your own. To edit, simply click directly</h3>
                        <p className='text-white leading-7'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default About