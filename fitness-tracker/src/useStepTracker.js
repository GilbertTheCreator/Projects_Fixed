import { useState, useEffect } from 'react';

export const useStepTracker = (initialSteps = 0, initialDistance = 0) => {
  const [steps, setSteps] = useState(initialSteps);
  const [distance, setDistance] = useState(initialDistance);

  useEffect(() => {
    document.title = `Steps: ${steps} Distance: ${distance}`;
  }, [steps, distance]);

  const incrementSteps = () => {
    setSteps(steps + 1);
  };
//handles distance increment
  const incrementDistance = () => {
    setDistance(distance + 0.01);
  };

  return { steps, distance, incrementSteps, incrementDistance };
};