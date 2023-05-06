import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import CreateMeeting from './Components/createMeeting';
import permissions from './contexts/permissions';
function App() {
  const [perms, setPerms] = React.useState({
    audio: false,
    video: true
  })
  return (
    <permissions.Provider value={{ perms, setPerms }}>
      <div className="h-screen bg-cyan-900">
        <Navigation />
        {/* <Home /> */}
        <CreateMeeting />
      </div>
    </permissions.Provider>
  );
}

export default App;
