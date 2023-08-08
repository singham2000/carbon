/* eslint-disable no-unused-vars */
import React, { useContext, useMemo } from "react";
import HandCam from "../Assets/cam-gadget-handy-svgrepo-com.svg";
import prefs from "../contexts/prefs";
import permissions from "../contexts/permissions";
import { useNavigate } from "react-router-dom";
import { firestore, servers } from "../utils/firebase";
// import Constants from "../utils/Constants";
const CreateMeeting = () => {
  const { meet } = useContext(prefs);
  const navigate = useNavigate();
  const [showSelect, setShowSelect] = React.useState(false);
  const { setCallId } = useContext(permissions);
  const pc = useMemo(() => new RTCPeerConnection(servers), []);

  const createCall = async () => {
    const callDoc = firestore.collection('calls').doc();
    const offerCandidates = callDoc.collection('offerCandidates');
    const answerCandidates = callDoc.collection('answerCandidates');

    setCallId(callDoc.id);


    // यह हम कंडियडटेस ले रहे है । और उन्हे db मे सेव कर रहे हैं । 
    pc.onicecandidate = (event) => {
      event.candidate && offerCandidates.add(event.candidate.toJSON())
    };

    // अब ऑफर क्रीऐट अकरींगे जिससे कोई कल अटेन्ड कर सके । 

    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });

    // यह हम रीमोट सर्वर को पिंग करके रकहीनगे snapshot डाटा लेता रहे app 

    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
    });

    //  अगर ऐन्सर करता है कोई तो candidate को peer मे add कर देना है ।

    answerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.addIceCandidate(candidate);
        }
      })
    })

  };



  return (
    <div className="pt-60 flex items-center justify-around gap-5 flex-wrap max-sm:w-screen">
      <div className="mx-10">
        <div className="ml-10 mb-10">
          <h1 className="text-3xl text-white">Create a New Video Meeting.</h1>
        </div>
        <div className="flex gap-10 flex-wrap">
          <button
            onMouseEnter={() => setShowSelect(true)}
            onMouseLeave={() => setShowSelect(false)}
            className="animate-pulse w-80 bg-lime-600 px-10 text-white max-sm:rounded-full text-xl flex flex-row items-center gap-3"
          >
            <img src={HandCam} alt="handcam" className="h-8 " />
            {!showSelect ? (
              <span className="max-sm:hidden ">Create New Meeting</span>
            ) : (
              ""
            )}
            {showSelect ? (
              // <select
              //   name="meetings"
              //   id="meetings"
              //   className="animate-pulse focus:outline-none bg-lime-600 px-10 text-white max-sm:rounded-full text-xl flex flex-row items-center gap-3"
              //   style={{
              //     WebkitAppearance: "none",
              //     MozAppearance: "none",
              //     textIndent: "1px",
              //     textOverflow: " ",
              //   }}
              // >
              //   <option value={Constants.INSTANT_MEETING}>
              //     Instant Meeting
              //   </option>
              //   <option value={Constants.FOR_LATER}>For Later</option>
              // </select>
              <button onClick={() => { navigate("/called") }} className="animate-pulse focus:outline-none bg-lime-600 px-10 text-white max-sm:rounded-full text-xl flex flex-row items-center gap-3">
                Start Meet
              </button>
            ) : (
              ""
            )}
          </button>

          <div className="bg-cyan-800 p-5 rounded-full">
            <input
              type="text"
              className="bg-cyan-800 text-xl text-white placeholder:text-white h-9 focus:outline-none"
              placeholder="Enter Key to Join"
            />
          </div>
        </div>
      </div>
      <img
        src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
        alt="person talking"
        className="ml-16 max-sm:hidden"
      />
    </div>

  );
};

export default CreateMeeting;
