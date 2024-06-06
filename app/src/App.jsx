import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/form/Login";
import ChatRoom from "./components/ChatRoom";

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
