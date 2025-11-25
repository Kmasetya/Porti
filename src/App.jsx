// src/App.js

import React from "react";
import Profil from "./components/Profile"; // Impor komponen Profil
import Skills from "./components/Skills"; // Impor komponen Skills

function App() {
  return (
    <div className="min-h-screen py-10 px-4 md:px-8">
      <div className="App">
        {/* Tampilkan komponen Profil */}
        <Profil />
      </div>
      <div className="Skil">
        {/* Tampilkan komponen Skills */}
        <Skills />
      </div>
    </div>
  );
}

export default App;
