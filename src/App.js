import React, { useState } from 'react';
import './App.css';

import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firebaseConfig } from './firebase.config'; // Use your own firebase config JSON object

initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
