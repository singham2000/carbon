import React from 'react'
import HandCam from '../Assets/cam-gadget-handy-svgrepo-com.svg';
const CreateMeeting = () => {
    return (
        <div className='mt-60 flex items-center justify-around gap-5 flex-wrap max-sm:w-screen'>
            <div className='mx-10'>
                <div className='ml-10 mb-10'>
                    <h1 className='text-3xl text-white'>
                        Create a New Video Meeting.
                    </h1>
                </div>
                <div className='flex gap-10 '>
                    <button className='animate-pulse bg-lime-600 px-10 text-white max-sm:rounded-full text-xl flex flex-row items-center gap-3'>
                        <img src={HandCam} alt="handcam" className='h-8 ' />
                        <span className="max-sm:hidden ">
                            New Meeting
                        </span>
                    </button>
                    <div className='bg-cyan-800 p-5 rounded-full'>
                        <input type="text" className='bg-cyan-800 text-xl placeholder:text-white h-9' placeholder='Enter Key to Join' />
                    </div>
                </div>
            </div>
            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" alt="person talking" className='ml-16 max-sm:hidden' />
        </div>
    )
}

export default CreateMeeting