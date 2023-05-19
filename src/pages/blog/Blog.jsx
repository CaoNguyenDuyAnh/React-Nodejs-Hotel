import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

const Blog = () => {
  return (
    <div className="bg-black">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto px-2.5 sm:px-5">
            
            <div className="md:pt-20 pt-10">
                <h1 className='text-white md:text-5xl text-4xl pb-5 text-center' >Featured Blogs</h1>
                <div className='md:flex gap-8 md:py-16'>
                    <div className='md:w-1/2 relative'>
                        <div>
                            <img className='opacity-50 w-full h-full' src="./img/ImageBlog.png" alt="" />
                        </div>
                        <h1 className='text-white md:text-5xl text-2xl  absolute md:top-[240px] md:left-[90px] w-[420px] top-[150px] left-[50px]' >A guide to Thai Curry</h1>
                        <div className='flex justify-around absolute md:top-[420px] w-full items-center top-[230px]'>
                            <div className='flex'>
                                <div className='w-8 h-8 md:w-[42px] md:h-[44px]'>
                                    <img className='w-full h-full' src="./img/Ellipse 150.png" alt="" />
                                </div>
                                <div className='ml-4'>
                                    <p className='text-white md:text-base text-xs'>Andrew Jonson</p>
                                    <p className='text-white md:text-base text-xs'>27th January 2021</p>
                                </div>
                            </div>
                            <a href='/detailblog' className='text-white no-underline md:text-base text-xs'>Read More</a>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex flex-col md:gap-11'>
                        <a href='/detailblog' className='flex no-underline md:gap-8 py-5 md:py-0'>
                            <div className='w-2/3 h-2/3 md:w-[136px] md:h-[136px]'>
                                <img src="./img/Imageblog1.png" className='w-full h-full aspect-square' alt="" />
                            </div>
                            <div className='md:w-[380px] ml-5 md:ml-0'>
                                <h4 className='text-white py-2 md:text-xl '>You can move the text by dragging and dropping the text </h4>
                                <p className='text-white py-2 md:text-base text-xs'>Writing UX copies can be a little frustrating and confusing, and sometimes</p>
                            </div>
                        </a>
                        <a href='/detailblog' className='flex no-underline md:gap-8 py-5 md:py-0'>
                            <div className='w-2/3 h-2/3 md:w-[136px] md:h-[136px]'>
                                <img src="./img/Imageblog2.png" className='w-full h-full aspect-square' alt="" />
                            </div>
                            <div className='md:w-[380px] ml-5 md:ml-0'>
                                <h4 className='text-white py-2 md:text-xl'>You can move the text by dragging and dropping the text </h4>
                                <p className='text-white py-2 md:text-base text-xs'>Writing UX copies can be a little frustrating and confusing, and sometimes</p>
                            </div>
                        </a>
                        <a href='/detailblog' className='flex no-underline md:gap-8 py-5 md:py-0'>
                            <div className='w-2/3 h-2/3 md:w-[136px] md:h-[136px]'>
                                <img src="./img/Imageblog3 (1).png" className='w-full h-full aspect-square' alt="" />
                            </div>
                            <div className='md:w-[380px] ml-5 md:ml-0'>
                                <h4 className='text-white py-2 md:text-xl'>You can move the text by dragging and dropping the text </h4>
                                <p className='text-white py-2 md:text-base text-xs'>Writing UX copies can be a little frustrating and confusing, and sometimes</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:pt-20 pt-10">
                <h1 className='text-white md:text-5xl text-center'>All Articles</h1>
                <div className='pt-16 grid md:grid-cols-2 grid-rows-1 md:gap-6 gap-5'>
                    <a href='/detailblog' className='flex items-center no-underline'>
                        <div className='w-1/3 h-[135px] md:w-[227px] md:h-[266px]'>
                            <img className='w-full h-full' src="./img/ImageArticle.png" alt="" />
                        </div>
                        <div className='pl-10 w-2/3'>
                            <div className='flex '>
                                <div className='w-8 h-8 md:w-[40px] md:h-[42px]'>
                                    <img className='w-full h-full' src="./img/Ellipse 150.png" alt="" />
                                </div>
                                <div className='pl-4'>
                                    <p className='text-white text-xs md:text-base'>Andrew Jonson</p>
                                    <p className='text-white text-xs md:text-base'>27th January 2021</p>
                                </div>
                            </div>
                            <h4 className='text-white py-2 md:py-6 text-xs md:text-base'>A guide to Thai Curry</h4>
                            <a className='text-white text-xs md:text-base'>Read More</a>
                        </div>
                    </a>
                    <a href='/detailblog' className='flex items-center no-underline'>
                        <div className='w-1/3 h-[135px] md:w-[227px] md:h-[266px]'>
                            <img className='w-full h-full' src="./img/ImageArti.png" alt="" />
                        </div>
                        <div className='pl-10 w-2/3'>
                            <div className='flex '>
                                <div className='w-8 h-8 md:w-[40px] md:h-[42px]'>
                                    <img className='w-full h-full' src="./img/Ellipse 150.png" alt="" />
                                </div>
                                <div className='pl-4'>
                                    <p className='text-white text-xs md:text-base'>Andrew Jonson</p>
                                    <p className='text-white text-xs md:text-base'>27th January 2021</p>
                                </div>
                            </div>
                            <h4 className='text-white py-2 md:py-6 text-xs md:text-base'>The best guacamole recipe with only 4 ingredients</h4>
                            <a className='text-white text-xs md:text-base'>Read More</a>
                        </div>
                    </a>
                    <a href='/detailblog' className='flex items-center no-underline'>
                        <div className='w-1/3 h-[135px] md:w-[227px] md:h-[266px]'>
                            <img className='w-full h-full' src="./img/ImageArti (1).png" alt="" />
                        </div>
                        <div className='pl-10 w-2/3'>
                            <div className='flex '>
                                <div className='w-8 h-8 md:w-[40px] md:h-[42px]'>
                                    <img className='w-full h-full' src="./img/Ellipse 150.png" alt="" />
                                </div>
                                <div className='pl-4'>
                                    <p className='text-white text-xs md:text-base'>Andrew Jonson</p>
                                    <p className='text-white text-xs md:text-base'>27th January 2021</p>
                                </div>
                            </div>
                            <h4 className='text-white py-2 md:py-6 text-xs md:text-base'>How to store Tomatoes (and Whether to Refrigerate Them)</h4>
                            <a className='text-white text-xs md:text-base'>Read More</a>
                        </div>
                    </a>
                    <a href='/detailblog' className='flex items-center no-underline'>
                        <div className='w-1/3 h-[135px] md:w-[227px] md:h-[266px]'>
                            <img className='w-full h-full' src="./img/ImageArti (2).png" alt="" />
                        </div>
                        <div className='pl-10 w-2/3' >
                            <div className='flex '>
                                <div className='w-8 h-8 md:w-[40px] md:h-[42px]'>
                                    <img className='w-full h-full' src="./img/Ellipse 150.png" alt="" />
                                </div>
                                <div className='pl-4'>
                                    <p className='text-white text-xs md:text-base'>Andrew Jonson</p>
                                    <p className='text-white text-xs md:text-base'>27th January 2021</p>
                                </div>
                            </div>
                            <h4 className='text-white py-2 md:py-6 text-xs md:text-base'>The Absolute Best Way to Cook French Fries</h4>
                            <a className='text-white text-xs md:text-base'>Read More</a>
                        </div>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Blog