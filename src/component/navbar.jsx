import React, {useState} from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Menu', href: '/menu', current: false },
    { name: 'About us', href: '/AboutUs', current: false },
    { name: 'Story', href: '/story', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Contact us', href: '/ContactUs', current: false },
  ]

const Navbar = () => {
    const [open, setOpen] = useState(false) 
    console.log(open);
  return (
    <div className='h-20 flex justify-between items-center sticky top-0 left-0 right-0 bg-zinc-800 px-4'>
        <div className='flex'>
            <a href="/">
                <img src="./img/Logo.svg" alt="" />
            </a>

            <div className=' hidden md:flex ml-8'>
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? ' text-white' 
                            : ' text-gray-400 hover:text-white', 'no-underline text-base mx-2 p-1 list-none'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            
        </div>
        <div className='md:hidden flex'>
            <button onClick={() => setOpen(!open)} type="button" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className=''>
                {open ? (
                    <div className=' block w-full absolute top-[65px] left-0 bg-zinc-800 z-1'>
                    {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? ' text-white' 
                                    : ' text-gray-400 hover:text-white', 'no-underline text-base p-3 list-none w-full block'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                    ))}
                </div>
                ) : (
                    <div className=' hidden'>
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? ' text-white' 
                                : ' text-gray-400 hover:text-white', 'no-underline text-base mx-2 p-1 list-none'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                )}
            </div>
        </div>
        <a className='no-underline text-orange-300 hidden md:block' href="">Clone Project</a>
    </div>
  )
}

export default Navbar