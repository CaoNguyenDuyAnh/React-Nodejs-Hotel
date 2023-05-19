import React from 'react'
import "../../input.css";
import Footer from '../../component/footer';
import Navbar from '../../component/navbar';
const Menu = () => {
  return (
    <div className="bg-black">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto px-2.5 sm:px-5">
            
            <div className=" py-20">
                <h5 className="text-orange-300">OUR MENU</h5>
                <div className="md:flex items-center gap-x-24">
                    <h2 className="md:text-5xl text-3xl py-6 leading-[58px] text-white">Discover our menu chart</h2>
                    <p className="leading-7 text-base md:w-[880px] text-white hidden md:block">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
                </div>
                <ul className='flex pl-0'>
                    <li className='md:mx-2 p-2 list-none text-white'>
                        <a className='no-underline text-base text-white'  href="">All</a>
                    </li>
                    <li className='md:mx-2 p-2 list-none'>
                        <a className='no-underline text-base text-gray-400' href="">Fast Food</a>
                    </li>
                    <li className='md:mx-2 p-2 list-none'>
                        <a className='no-underline text-base text-gray-400' href="">Cofee</a>
                    </li>
                    <li className='md:mx-2 p-2 list-none'>
                        <a className='no-underline text-base text-gray-400' href="">Cocktails</a>
                    </li>
                    <li className='md:mx-2 p-2 list-none'>
                        <a className='no-underline text-base text-gray-400' href="">Quafe Cake</a>
                    </li>
                    <li className='md:mx-2 p-2 list-none'>
                        <a className='no-underline text-base text-gray-400' href="">Snacks</a>
                    </li>
                </ul>
                    <div className="gap-4 grid md:grid-cols-3 grid-rows-1 py-10">
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/Image.png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Drp Cofee</h4>
                                <p>$08.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/Image (1).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Choco Cup Cake</h4>
                                <p>$4.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/Image (2).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Chicken Burger</h4>
                                <p>$8.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/Image (3).png " alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">French Fries</h4>
                                <p>$7.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/Image (4).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Sandwitch</h4>
                                <p>$3.97</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/Image (5).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Chinese Soup</h4>
                                <p>$8.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/ImageMenu.png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Quafe Brade</h4>
                                <p>$$7.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/ImageMenu(1).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Dalgona Cofee</h4>
                                <p>$4.97</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/ImageMenu(2).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Chowmin Noodle</h4>
                                <p>$8.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/ImageMenu(3).png " alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Coka Cola</h4>
                                <p>$7.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/ImageMenu(4).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Fruit Salad</h4>
                                <p>$3.97</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 pb-5'>
                            <img src="./img/ImageMenu(5).png" alt="" />
                            <div className="flex justify-around my-5 items-center">
                                <h4 className="text-xl">Cocktail</h4>
                                <p>$8.85</p>
                            </div>
                        </a>
                    </div>
                </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Menu