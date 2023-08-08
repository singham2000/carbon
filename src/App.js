/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
// eslint-disable-next-line no-unused-vars
import CreateMeeting from "./Components/createMeeting";
import permissions from "./contexts/permissions";
import prefs from "./contexts/prefs";
import Constants from "./utils/Constants";
function App() {
  const [perms, setPerms] = useState({
    audio: false,
    video: true,
  });
  const [callId, setCallId] = useState("");
  const [meet, setMeet] = useState(Constants.INSTANT_MEETING);
  return (
    <>
      <permissions.Provider value={{ perms, setPerms, callId, setCallId }}>
        <prefs.Provider value={{ meet, setMeet }}>
          <Navigation />
          <BrowserRouter>
            <Routes>


              <Route path="/called" element={<div className="h-screen bg-cyan-900"> <Home /> </div>} />

              <Route path="/" element={<div className="h-screen bg-cyan-900">  <CreateMeeting /> </div>} />
            </Routes>
          </BrowserRouter>
        </prefs.Provider>
      </permissions.Provider>
    </>
  );
}

export default App;
