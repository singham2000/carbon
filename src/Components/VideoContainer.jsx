import React from 'react'

const VideoContainer = (props) => {
    return (
        <div>
            <div className='h-96 max-sm:h-60 w-96 max-sm:w-70 rounded-3xl bg-teal-800 border flex items-center justify-center '>
                <span className='text-white bg-slate-800 p-2 rounded-2xl flex gap-1 items-center'>
                    <span>
                        {props.type[0].toUpperCase() + props.type.substring(1)}
                    </span>
                    <iframe src="https://giphy.com/embed/XaejLonqk19jDugJbq" width="20" height="20" class="giphy-embed" allowFullScreen></iframe>
                </span>
            </div>
        </div>
    )
}

export default VideoContainer