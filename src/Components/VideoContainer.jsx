import React, { useContext } from 'react'
import permissions from '../contexts/permissions';


const VideoContainer = (props) => {
    const { perms } = useContext(permissions);


    return (
        <div>
            {perms.video ? props.loading ? <div className='h-64 max-sm:h-60 w-96 max-sm:w-96 rounded-3xl bg-black border flex items-center justify-center '>

                <span className='text-white bg-slate-800 p-2 rounded-2xl flex gap-1 items-center'>
                    <span>
                        {props.type[0].toUpperCase() + props.type.substring(1)}
                    </span>

                </span>
            </div> : <div className='h-fit max-sm:h-fit w-fit max-sm:w-fit rounded-3xl bg-black border flex items-center justify-center '>
                <video ref={props.Ref} className='h-64 max-sm:h-60 w-96 max-sm:w-96 rounded-3xl' width="320" height="240" src={props.Stream} autoPlay playsInline></video>
            </div> :
                <div className='h-96 max-sm:h-60 w-96 max-sm:w-96 rounded-3xl bg-black border flex items-center justify-center '>

                    <span className='text-white bg-slate-800 p-2 rounded-2xl flex gap-1 items-center'>
                        <span>
                            {props.type[0].toUpperCase() + props.type.substring(1)}
                        </span>

                    </span>
                </div>
            }
        </div>
    )
}

export default VideoContainer