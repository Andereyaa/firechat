import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/form/Login";
import ChatRoom from "./components/ChatRoom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <ChatRoom />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
