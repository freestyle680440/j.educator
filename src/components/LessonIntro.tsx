import React from 'react';
import './LessonIntro.css';

interface LessonIntroProps {
  onStart: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

const LessonIntro: React.FC<LessonIntroProps> = ({ onStart }) => {
  return (
    <div className="lesson-intro">
      <div className="intro-content">
        <div className="intro-emoji">🎓</div>
        <h2 className="intro-title">Addition Up to 100</h2>
        <p className="intro-description">
          Practice your addition skills! Solve problems and build your confidence.
        </p>

        <div className="difficulty-section">
          <h3 className="difficulty-title">Choose Your Level:</h3>
          <div className="difficulty-options">
            <button
              className="difficulty-btn easy"
              onClick={() => onStart('easy')}
            >
              <span className="difficulty-icon">🌱</span>
              <span className="difficulty-name">Easy</span>
              <span className="difficulty-desc">5 questions</span>
            </button>
            <button
              className="difficulty-btn medium"
              onClick={() => onStart('medium')}
            >
              <span className="difficulty-icon">🔥</span>
              <span className="difficulty-name">Medium</span>
              <span className="difficulty-desc">8 questions</span>
            </button>
            <button
              className="difficulty-btn hard"
              onClick={() => onStart('hard')}
            >
              <span className="difficulty-icon">⚡</span>
              <span className="difficulty-name">Hard</span>
              <span className="difficulty-desc">10 questions</span>
            </button>
          </div>
        </div>

        <div className="tips-section">
          <h4 className="tips-title">💡 Tips for Success:</h4>
          <ul className="tips-list">
            <li>Take your time and think carefully</li>
            <li>Use your fingers to count if needed</li>
            <li>Learn from the working when you make a mistake</li>
            <li>Try again - mistakes help you learn!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LessonIntro;
