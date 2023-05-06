import React from 'react';
import VideoContainer from './VideoContainer';
import Answer from '../Assets/phone-call-svgrepo-com.svg';
import Hang from '../Assets/phone-call-cancel-reject-svgrepo-com.svg';

const Home = () => {


    return (
        <div className='h-max bg-cyan-900'>
            <div className='px-5 sm:pt-40 pt-6 flex items-center justify-center gap-10 flex-wrap'>
                <VideoContainer type={"yours"} />
                <VideoContainer type={"remote"} />
            </div>
            <div className='flex items-center justify-center flex-wrap mt-10 gap-5'>
                <div className='w-max bg-cyan-800 flex gap-10 flex-row p-10 rounded-full'>
                    <button className='transition delay-150 duration-300 ease-in-out bg-green-500 hover:bg-green-700 px-7 py-2 rounded-full align-middle text-white flex gap-2'>
                        <img src={Answer} alt="caller" className='w-5 h-5 mt-1' />
                        <span className='max-sm:hidden'>
                            Answer
                        </span>
                    </button>
                    <button className='transition delay-150 duration-300 ease-in-out bg-red-500 hover:bg-red-700 px-7 py-2 rounded-full align-middle  text-white flex gap-2'>
                        <img src={Hang} alt="caller" className='w-5 h-5 mt-1' />
                        <span className='max-sm:hidden'>
                            Hang up
                        </span>
                    </button>
                </div>
              
            </div>
        </div>
    )
}

export default Home