import React from 'react'

const VideoContainer = (props) => {
    return (
        <div>
            <div className='h-96 max-sm:h-60 w-96 max-sm:w-70 rounded-3xl bg-teal-800 border flex items-center justify-center '>
                <span className='text-white bg-slate-800 p-2 rounded-2xl'>
                    {props.type[0].toUpperCase() + props.type.substring(1)}
                </span>
            </div>
        </div>
    )
}

export default VideoContainer