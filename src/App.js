import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import CreateMeeting from "./Components/createMeeting";
import permissions from "./contexts/permissions";
import prefs from "./contexts/prefs";
import Constants from "./utils/Constants";
function App() {
  const [perms, setPerms] = useState({
    audio: false,
    video: true,
  });
  const [meet, setMeet] = useState(Constants.INSTANT_MEETING);
  return (
    <permissions.Provider value={{ perms, setPerms }}>
      <div className="h-screen bg-cyan-900">
        <Navigation />
        {/* <Home /> */}
        <prefs.Provider value={{ meet, setMeet }}>
          <CreateMeeting />
        </prefs.Provider>
      </div>
    </permissions.Provider>
  );
}

export default App;
