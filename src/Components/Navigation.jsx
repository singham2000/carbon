import React from 'react';
import Phone from '../Assets/phone-rotary-svgrepo-com.svg';
const Navigation = () => {
    return (
        <div className='w-full bg-cyan-800 px-10 py-4 font-light italic gap-4 text-white flex text-center content-center'>
            <img src={Phone} alt="logo" className='h-10 w-10 text-white' />
            <span className='pt-2'>
                Carbon
            </span>
        </div>
    )
}

export default Navigation