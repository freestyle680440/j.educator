import React from 'react';
import './ProgressTracker.css';

interface ProgressTrackerProps {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentQuestion,
  totalQuestions,
  correctAnswers,
  percentage,
}) => {
  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <div className="progress-info">
          <span className="info-item">
            <span className="info-label">Questions:</span>
            <span className="info-value">
              {currentQuestion} / {totalQuestions}
            </span>
          </span>
          <span className="info-item">
            <span className="info-label">Correct:</span>
            <span className="info-value correct-count">{correctAnswers} ✓</span>
          </span>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="progress-percentage">{Math.round(percentage)}%</span>
      </div>

      <div className="progress-dots">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={`dot ${
              i < currentQuestion
                ? i < correctAnswers
                  ? 'completed'
                  : 'attempted'
                : 'pending'
            }`}
            title={`Question ${i + 1}`}
          >
            {i < correctAnswers && '✓'}
            {i >= correctAnswers && i < currentQuestion && '✗'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
