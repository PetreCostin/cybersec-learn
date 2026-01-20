// App.js
import React from 'react';
import {firebaseConfig} from './config';
import { initializeApp } from "firebase/app";

const App = () => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return <h1>Welcome to CyberSec Learn!</h1>;
};

export default App;