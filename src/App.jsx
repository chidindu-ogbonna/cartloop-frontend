import React from "react";
import logo from "./assets/logo.svg";
import "./css/App.css";

function App() {
  return (
    <div className="min-h-screen bg-blue-100">
      <main className="">


        
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="w-32 h-32" alt="logo" />
          <img src={logo} className="w-32 h-32" alt="logo" />
          <h1 className="text-2xl text-center">This is Africa</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
