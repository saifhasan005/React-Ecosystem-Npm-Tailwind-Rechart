import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState([false])
    return (
        <nav className='flex justify-between mx-12 mt-8'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>}
                <h3 className='ml-4'>My Navabr</h3>
                <ul className={`md:hidden absolute text-black duration-1000
                 ${open? 'top-8' : '-top-40'}
                    bg-amber-50`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </span>
            <ul className=' md:flex hidden gap-10'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Home</a></li>
            </ul>
            <button className='btn'>Sign In</button>
        </nav>
    );
};

export default Navbar;