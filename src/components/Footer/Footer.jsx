import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-10 w-full'>
            <footer className='bg-zinc-100 py-20 w-screen -mx-20'>
                <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-wrap gap-y-14'>
                    <div className='flex-3 md:mr-0 mr-10'>
                        <a href="">
                            <h1 className='text-2xl font-bold'>Gr<span className='font-bold text-orange-500 text-2xl'>O</span>cify</h1>
                        </a>

                        <p className='text-zinc-600 mt-6 max-w-87.5'>
                            Bred for a high content of beneficial substances, Our products are all fresh and healthy.
                        </p>

                        <p className='text-zinc-800 mt-6'>
                            2025 &copy; all rights reserved
                        </p>
                    </div>

                    <div className='flex-1 md:mr-0 mr-10'>
                        <ul>
                            <li>
                                <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                            </li>
                            <li className='mt-6'>
                                <a href="#" className='text-zinc-800 hover:text-orange-500'>About</a>
                            </li>
                            <li className='mt-6'>
                                <a href="#" className='text-zinc-800 hover:text-orange-500'>FAQ's</a>
                            </li>
                        </ul>
                    </div>

                    <div className='flex-1 md:mr-0 mr-10'>
                        <ul>
                            <li>
                                <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                            </li>
                            <li className='mt-6'>
                                <a href="#" className='text-zinc-800 hover:text-orange-500'>Support Center</a>
                            </li>
                            <li className='mt-6'>
                                <a href="#" className='text-zinc-800 hover:text-orange-500'>Feedback</a>
                            </li>
                            <li className='mt-6'>
                                <a href="#" className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className=''>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>

                        <p className='mt-6 text-zinc-600'>
                            Questions or Feedback?<br />we'd love to hear from you.
                        </p>

                        <form action="" className='flex bg-white p-2 mt-6'>
                            <input type="email" name="email" id="email" autoComplete='off' placeholder='Email adress' className='pl-5 h-5vh focus:outline-none'/>

                            <button type="submit" className='bg-orange-400 text-white p-2 rounded-lg hover:bg-orange-600 cursor-pointer'>
                                <FaAngleRight />
                            </button>
                        </form>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer
