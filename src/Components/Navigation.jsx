import React, { useContext, useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import Permissions from '../contexts/permissions';

import Phone from '../Assets/phone-rotary-svgrepo-com.svg';
import mic from '../Assets/mic-svgrepo-com.svg';
import miclose from '../Assets/mic-off-svgrepo-com.svg';
import cam from '../Assets/cam-svgrepo-com.svg';
import camclose from '../Assets/cam-disabled-svgrepo-com.svg';

const Navigation = () => {
    // eslint-disable-next-line no-unused-vars
    const [date, setDate] = useState("Fetching...")
    const { perms, setPerms } = useContext(Permissions);
    useEffect(() => {
        var date = { currentTime: new Date().toLocaleString() };
        setDate(date.currentTime);
    }, [])

    return (

        <div className='w-screen bg-cyan-800 px-10 py-4 font-light italic gap-4 text-white flex text-center items-center justify-between'>
            <div className='flex text-center content-center'>
                <img src={Phone} alt="logo" className='h-10 w-10 text-white' />
                <span className='pt-2'>
                    Carbon
                </span>
            </div>
            <div className='flex gap-5'>
                {perms.audio ?
                    <button onClick={() => { setPerms({ ...perms, audio: false }) }} className='rounded-full bg-green-600 text-gray-900 w-32 max-sm:w-14 h-14 flex items-center justify-center'>
                        <img src={mic} className='h-10' alt="mic-on" />
                        <span className='max-sm:hidden font-bold text-white'>Mic on</span>
                    </button> :
                    <button onClick={() => { setPerms({ ...perms, audio: true }) }} className='rounded-full bg-red-600 text-gray-900 w-32 max-sm:w-14 h-14 flex items-center justify-center'>
                        <img src={miclose} className='h-10' alt="mic-on" />
                        <span className='max-sm:hidden font-bold text-white'>Mic Off</span>
                    </button>}
                {perms.video ?
                    <button onClick={() => { setPerms({ ...perms, video: false }) }} className='rounded-full bg-green-600 text-gray-900 w-32 max-sm:w-14 h-14 flex items-center justify-center'>
                        <img src={cam} className='h-10' alt="mic-on" />
                        <span className='max-sm:hidden font-bold text-white'>Cam on</span>
                    </button> :
                    <button onClick={() => { setPerms({ ...perms, video: true }) }} className='rounded-full bg-red-600 text-gray-900 w-32 max-sm:w-14 h-14 flex items-center justify-center'>
                        <img src={camclose} className='h-10' alt="mic-on" />
                        <span className='max-sm:hidden font-bold text-white'>Cam Off</span>
                    </button>}
            </div>
            <div className='text-white text-xl max-sm:text-lg'>
                <Clock format={'HH:mm:ss'} ticking={true} blinking={true} timezone={'Asia/Calcutta'} />
            </div>
        </div>
    )
}

export default Navigation