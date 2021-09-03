import React, { useContext, useState } from 'react';
import './App.css';

import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firebaseConfig } from './firebase.config'; // Use your own firebase config JSON object

import { AppContext, AppProvider } from './AppContext';

import { SignIn } from './signin/SignIn';
import { ChatRoom } from './chatroom/ChatRoom';

initializeApp(firebaseConfig);

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AppContext.Provider value={{ signedIn, setSignedIn }}>
      <div className="App">
        <header className="App-header">
          Chat Room React + Firebase Demo ({signedIn ? "Signed In" : "Signed Out"})
        </header>
        <section>
          {signedIn ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
    </AppContext.Provider>
  );
}

export default App;