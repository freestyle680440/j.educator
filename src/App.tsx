import React, { useState } from 'react';
import AdditionLesson from './lessons/AdditionLesson';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎓 J.Educator - Math Lessons</h1>
        <p>Learn addition with fun and interactive exercises!</p>
      </header>
      <main className="app-main">
        <AdditionLesson />
      </main>
    </div>
  );
}

export default App;
