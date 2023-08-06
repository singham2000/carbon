import React, { useEffect, useRef, useState, createRef, useContext } from 'react'
import { servers, firestore } from "../utils/firebase";
import permissions from '../contexts/permissions';

const VideoContainer = (props) => {
    console.log(servers);
    const pc = new RTCPeerConnection(servers);
    let remoteStream = useRef(null);
    const { perms } = useContext(permissions);
    const [loading, setLoading] = useState(true);
    let localStream = useRef(null);
    const webcamRef = createRef();

    useEffect(() => {
        const camGrab = async () => {
            try {
                localStream.current = await navigator.mediaDevices.getUserMedia({ video: perms.video, audio: perms.audio });
                remoteStream.current = new MediaStream()
                setLoading(false);
                if (webcamRef.current) {
                    webcamRef.current.srcObject = localStream.current;
                }
            } catch (err) {
                console.log(err);
            }
        };
        camGrab();
    }, [webcamRef, perms.video, perms.audio]);


    return (
        <div>
            {perms.video ? loading ? <div className='h-64 max-sm:h-60 w-96 max-sm:w-96 rounded-3xl bg-black border flex items-center justify-center '>

                <span className='text-white bg-slate-800 p-2 rounded-2xl flex gap-1 items-center'>
                    <span>
                        {props.type[0].toUpperCase() + props.type.substring(1)}
                    </span>

                </span>
            </div> : <div className='h-fit max-sm:h-fit w-fit max-sm:w-fit rounded-3xl bg-black border flex items-center justify-center '>
                <video ref={webcamRef} className='h-64 max-sm:h-60 w-96 max-sm:w-96 rounded-3xl' width="320" height="240" src={localStream} autoPlay playsInline></video>
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