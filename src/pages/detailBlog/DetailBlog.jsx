import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

const DetailBlog = () => {
  return (
    <div className="bg-black">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto px-2.5 sm:px-5">
            
            <div className=' flex flex-col md:gap-20 gap-10 md:py-20 py-10 items-center'>
                <div className='text-center mt-4'>
                    <div className='md:flex mx-auto items-center justify-center pb-14'>
                        <div >
                            <img  src="./img/Ellipse 150.png" alt="" />
                        </div>
                        <p className='text-white px-3'>Andrew Jonson</p>
                        <p className='text-white md:pl-3'>Posted on 27th January 2021</p>
                    </div>
                    <h2 className='text-white md:text-5xl text-3xl'>How to store Tomatoes (and Whether to Refrigerate Them)</h2>
                </div>
                <div>
                    <img className='w-full h-full' src="./img/Blog Image.png" alt="" />
                </div>
                <div className='flex flex-col gap-10 md:w-[842px]'>
                    <div>
                        <h3 className='text-white md:text-[32px] text-2xl pb-6 text-center'>Edit this text to make it your own. To edit, simply click directly on the text.</h3>
                        <div className='flex flex-col gap-4'>
                            <p className='text-white leading-7'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                            <p className='text-white leading-7'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                            <p className='text-white leading-7'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                            <p className='text-white leading-7'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-white text-xl pb-6'>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
                        <p className='text-white leading-7'> 
                            Step 1: Download the plugin from Figma community, search Ghost UXWriter <br/>
                            Step 2: Open the plugin on your artboard<br/>
                            Step 3: Search for your copy or look through the different categories of the copies<br/>
                            Step 4: Select the type of error you are looking for. You will get three different copies for each error<br/>
                            Step 5: Tap on the cards to insert text in your frames<br/>
                            And you are all geared up to make your UX copies more fun and exciting 😎
                        </p>
                    </div>
                    <div>
                        <h3 className='text-white md:text-[32px] text-2xl pb-6'>Your own words. You can move the text by dragging and dropping the text anywhere on the page. </h3>
                        <p className='text-white leading-7'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default DetailBlog