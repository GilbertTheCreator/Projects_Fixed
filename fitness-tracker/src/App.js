import React from 'react';
import { useStepTracker } from './useStepTracker';

function StepTracker() {
  const { steps, distance, incrementSteps, incrementDistance } = useStepTracker(0, 0);
//when button is pressed it increases both steps and distance
  const handleButtonClick = () => {
    incrementSteps();
    incrementDistance();
  };

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <p>Steps Today: {steps}</p>
      <p>Distance Today: {distance} km</p>
      <button onClick={handleButtonClick}>Add Step and Distance</button>
      {steps >= 10 && <p>You've reached your step goal!</p>}
      {distance >= 5 && <p>You've reached your distance goal!</p>}
    </div>
  );
}

export default StepTracker;