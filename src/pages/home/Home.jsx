import Footer from "../../component/footer";
import Header from "../../component/header";
import Navbar from "../../component/navbar";
import "../../input.css";

const Home = () => {
    return (
        <div className="bg-black">
            <Navbar/>
            <div className="md:max-w-screen-xl mx-auto px-2.5 sm:px-5">
                <div className='md:py-20 py-10 flex md:flex-row flex-col items-center'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='md:text-[56px] text-10 text-white'>We serve high quality foods of all kinds.</h1>
                        <p className='py-4 text-white'>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.</p>
                        <a href='/menu'>
                        <button className='bg-orange-300 text-base py-3 px-6 cursor-pointer '>View Menu</button>
                        </a>
                        <div className='my-8'>
                            <h4 className='text-xl text-white' >Opening Times</h4>
                            <p className='text-base font-thin text-white'>Sunday to Saturday l 09:00 AM to 11:00 PM</p>
                        </div>
                        <div className='my-8'>
                            <h4 className='text-xl text-white' >Location</h4>
                            <p className='text-base font-thin text-white'>Master canteen, BBSR , Odisha 752054</p>
                        </div>
                        <div className='my-8'>
                            <h4 className='text-xl text-white' >Contact us</h4>
                            <a href='tel:+9776462441' className='text-base font-thin text-white'>+9776462441</a><br></br>
                            <a href='mailto:hey@yourdomain.com' className='text-base font-thin text-white'>hey@yourdomain.com</a>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src="./img/HeaderImage.jpg" className='h-full w-full' alt="" />
                    </div>
                </div>
                <div className=" md:py-40 py-5">
                    <h5 className="text-orange-300">KNOW MORE ABOUT US</h5>
                    <div className=" md:flex-row md:flex md:gap-8">
                        <div className="md:w-[630px] text-center md:text-left">
                            <h2 className="md:text-5xl text-3xl py-6 md:leading-[58px] text-white">We source sustainable & line caught Foods</h2>
                            <p className="py-3 leading-7 text-white">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page. </p>
                            <div className="flex md:flex-row flex-col items-center md:gap-8 pb-8 gap-4 text-center md:text-left">
                                <div className="w-[175px]">
                                    <span>10+ People</span>
                                    <p className="pb-[15px] text-white">We are Small Team</p>
                                    <p className="leading-7 text-white">Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                                <div className="w-[175px]">
                                    <span >2014</span>
                                    <p className="pb-[15px] text-white">We are From</p>
                                    <p className="leading-7 text-white" >Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                                <div className="w-[175px]">
                                    <span>200k</span>
                                    <p className="pb-[15px] text-white">We are Served</p>
                                    <p className="leading-7 text-white">Through True Rich Attended does no end it his mother since favourable.</p>
                                </div>
                            </div>
                            <a href="/menu"><button className='bg-orange-300 text-base py-3 px-6 text-center cursor-pointer '>View menu</button></a>
                        </div>
                        <div className="flex justify-around md:justify-between flex-1 mt-5">
                            <div className="w-2/5 h-2/5 md:h-[500px] md:w-[240px]">
                                <img className=" md:pt-16 w-full h-full" src="./img/Know more Image 1.png" alt="" />
                            </div>
                            <div className="w-2/5 h-2/5 md:h-[500px] md:w-[240px]">
                                <img className=" w-full h-full" src="./img/Know more Image 2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-20">
                    <h5 className="text-orange-300">WHAT WE ARE SERVING</h5>
                    <div className="md:flex items-center gap-x-24">
                        <h2 className="md:text-5xl text-3xl py-6 leading-[58px] text-white text-center md:text-left">We all have to eat, so why not do it beautifully?</h2>
                        <p className="leading-7 text-base md:w-[880px] text-white text-center md:text-left">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
                    </div>
                    <div className="flex md:justify-between flex-wrap gap-16 md:my-16 justify-center text-center md:text-left">
                        <div className="w-[298px]">
                            <div className=" py-3">
                                <div className="bottom-[24px] left-[15px]">
                                    <img className="w-5 h-[25px]"  src="./img/vector.png" alt="" />
                                </div>
                            </div>
                            <h3 className="py-3 md:text-[32px] text-2xl text-white">Quafe Cake</h3>
                            <p className="text-white">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                        </div>
                        <div className="w-[298px]">
                            <div className=" py-3">
                                <div className=" bottom-[24px] left-[15px]">
                                    <img  src="./img/vector (1).png" alt="" />
                                </div>
                            </div>
                            <h3 className="py-3 md:text-[32px] text-2xl text-white">Coffee</h3>
                            <p className="text-white">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                        </div>
                        <div className="w-[298px]">
                            <div className=" py-3">
                                <div className=" bottom-[24px] left-[15px]">
                                    <img src="./img/vector (2).png" alt="" />
                                </div>
                            </div>
                            <h3 className="py-3 md:text-[32px] text-2xl text-white">Fast Food</h3>
                            <p className="text-white">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                        </div>
                        <div className="w-[298px]">
                            <div className=" py-3">
                                <div className=" bottom-[26px] left-[18px]">
                                    <img src="./img/vector (3).png" alt="" />
                                </div>
                            </div>
                            <h3 className="py-3 md:text-[32px] text-2xl text-white">Cocktails</h3>
                            <p className="text-white">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                        </div>
                        <div className="w-[298px]">
                            <div className=" py-3">
                                <div className=" bottom-[24px] left-[13px]">
                                    <img src="./img/vector (4).png" alt="" />
                                </div>
                            </div>
                            <h3 className="py-3 md:text-[32px] text-2xl text-white">Grill</h3>
                            <p className="text-white">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                        </div>
                        <div className="w-[298px]">
                            <div className=" py-3">
                                <div className=" bottom-[24px] left-[15px]">
                                    <img src="./img/Vector (6).png" alt="" />
                                    {/* <img className=""  src="./img/vector (5).png" alt="" /> */}
                                </div>
                            </div>
                            <h3 className="py-3 md:text-[32px] text-2xl text-white">Snacks</h3>
                            <p className="text-white">Through True Rich Attended no end it his mother since favourable real had half every him.</p>
                        </div>
                    </div>
                </div>
                <div className="text-white md:py-20 py-10">
                    <h5 className="text-orange-300">OUR MENU</h5>
                    <div className="md:flex items-center gap-x-24">
                        <h2 className="md:text-5xl text-3xl py-6 leading-[58px] text-white">Discover our menu chart</h2>
                        <p className="leading-7 text-base md:w-[880px] text-white text-center md:text-left pb-4  md:pb-0">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</p>
                    </div>
                    <h5 className="md:pb-10">Most Popular Picks</h5>
                    <div className="md:grid grid-cols-3 gap-4 py-10">
                        <a href='' className='text-white no-underline col-span-1 md:block flex items-center'>
                            <div className="w-1/2 md:w-full">
                                <img className="w-full h-full" src="./img/Image.png" alt="" />
                            </div>
                            <div className="md:flex justify-around my-5 items-center w-1/2 text-center">
                                <h4 className="md:text-xl text-lg">Drp Cofee</h4>
                                <p>$08.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 md:block flex items-center'>
                            <div className="w-1/2 md:w-full">
                                <img className="w-full h-full" src="./img/Image (1).png" alt="" />
                            </div>
                            <div className="md:flex justify-around my-5 items-center w-1/2 text-center">
                                <h4 className="md:text-xl text-lg">Choco Cup Cake</h4>
                                <p>$4.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 md:block flex items-center'>
                            <div className="w-1/2 md:w-full">
                                <img className="w-full h-full" src="./img/Image (2).png" alt="" />
                            </div>
                            <div className="md:flex justify-around my-5 items-center w-1/2 text-center">
                                <h4 className="md:text-xl text-lg">Chicken Burger</h4>
                                <p>$8.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 md:block flex items-center'>
                            <div className="w-1/2 md:w-full">
                                <img className="w-full h-full" src="./img/Image (3).png " alt="" />
                            </div>
                            <div className="md:flex justify-around my-5 items-center w-1/2 text-center">
                                <h4 className="md:text-xl text-lg">French Fries</h4>
                                <p>$7.85</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 md:block flex items-center'>
                            <div className="w-1/2 md:w-full">
                                <img className="w-full h-full" src="./img/Image (4).png" alt="" />
                            </div>
                            <div className="md:flex justify-around my-5 items-center w-1/2 text-center">
                                <h4 className="md:text-xl text-lg">Sandwitch</h4>
                                <p>$3.97</p>
                            </div>
                        </a>
                        <a href='' className='text-white no-underline col-span-1 md:block flex items-center'>
                            <div className="w-1/2 md:w-full">
                                <img className="w-full h-full" src="./img/Image (5).png" alt="" />
                            </div>
                            <div className="md:flex justify-around my-5 items-center w-1/2 text-center">
                                <h4 className="md:text-xl text-lg">Chinese Soup</h4>
                                <p>$8.85</p>
                            </div>
                        </a>
                    </div>
                    <div className="text-center">
                    <a href="/menu"><button className='bg-orange-300 text-base py-3 px-6 text-center cursor-pointer'>View menu</button></a>
                    </div>
                </div>
            </div>
            <div className=" md:py-20 md:flex ">
                    <div className="bg-zinc-900 md:h-[668px] items-center flex">
                        <div className="md:ml-40 md:mr-[78px] mx-10">
                            <img className="md:w-[32px] h-[33px] hidden md:block" src="./img/“.png" alt="" />
                            <p className="md:text-[32px] text-6 my-10 text-white">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text</p>
                            <div className="flex justify-between   ">
                                <div className="flex-1 border-solid border-b border-x-0 border-t-0 border-gray-500 pb-5">
                                    <p className="pb-1 text-white">Joheny Andro</p>
                                    <p className="text-xs text-white">Bhubaneswar, Odisha</p>
                                </div>
                                <div className="border-solid border-b-3 border-x-0 border-t-0 border-gray-200 pb-5">
                                    <img src="./img/Image (7).png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="my-10">
                    <img src="./img/Image (6).png" alt="" className="w-full md:w-[925px] md:h-[668px]" />
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-2.5 sm:px-5">
                <div className="text-white md:py-20">
                <h2 className="md:text-5xl text-3xl py-6 leading-[58px] pb-16 text-white">Read Our Lastest Blog</h2>
                    <div className="flex md:flex-row flex-col gap-x-4">
                        <a href="/detailblog" className="no-underline flex md:block flex-row-reverse">
                            <div className=" bg-zinc-900 md:w-[405px] text-center">
                                <div className="md:p-8 pb-4">
                                    <p className="text-sm text-white">21 Jun 2021</p>
                                    <h3 className="p-2 md:text-3xl text-lg text-white md:p-0">Extra Thick Homemad Pizza Sauce</h3>
                                    <p className="pt-2 font-normal text-white hidden md:block">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                </div>
                            </div>
                            <div className="md:pb-0 w-2/3 md:w-full pb-5">
                                <img className="w-full h-full" src="./img/Image (8).png" alt="" />
                            </div>
                        </a>
                        <a href="/detailblog" className="no-underline flex md:block flex-row-reverse">
                        <div className=" bg-zinc-900 md:w-[405px] text-center">
                                <div className="md:p-8 pb-4">
                                    <p className="text-sm text-white">21 Jun 2021</p>
                                    <h3 className="p-2 md:text-3xl text-lg text-white md:p-0">The Best Way to Store Fresh Herbs</h3>
                                    <p className="pt-2 font-normal text-white hidden md:block">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                </div>
                            </div>
                            <div className="md:pb-0 w-2/3 md:w-full pb-5">
                                <img className="w-full h-full" src="./img/Image (9).png" alt=""/>
                            </div>
                        </a>
                        <a href="/detailblog" className="no-underline flex md:block flex-row-reverse">
                        <div className=" bg-zinc-900 md:w-[405px] text-center">
                            <div className="md:p-8 pb-4 ">
                                    <p className="text-sm text-white">21 Jun 2021</p>
                                    <h3 className="p-2 md:text-3xl text-lg text-white md:p-0">5 ways to prepare porridge</h3>
                                    <p className="pt-2 font-normal text-white hidden md:block">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                </div>
                            </div>
                            <div className="md:pb-0 w-2/3 md:w-full pb-5">
                                <img className="w-full h-full" src="./img/Image (10).png" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home