import  { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hoursOfSupport, setHoursOfSupport] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);

  useEffect(() => {
    const countTo = {
      satisfiedClients: 150,
      projects: 250,
      hoursOfSupport: 4000,
      teamMembers: 20
    };

    const duration = 2000; 
    const interval = 50; // Interval in milliseconds
    const steps = duration / interval; // Number of steps to reach the target
    
    const increment = (setter, target) => {
      let count = 0;
      const stepValue = target / steps; // Increment value for each step
      const timer = setInterval(() => {
        count += stepValue;
        setter(Math.min(Math.round(count), target)); // Ensure count does not exceed target
        if (count >= target) clearInterval(timer);
      }, interval);
    };

    increment(setSatisfiedClients, countTo.satisfiedClients);
    increment(setProjects, countTo.projects);
    increment(setHoursOfSupport, countTo.hoursOfSupport);
    increment(setTeamMembers, countTo.teamMembers);
  }, []);

  return (
    <div className="counter-container container" id='counter'>
      <div className="counter-item">
        <h3>Satisfied Clients</h3>
        <p className="counter-number">{satisfiedClients}</p>
      </div>
      <div className="counter-item">
        <h3>Projects</h3>
        <p className="counter-number">{projects}</p>
      </div>
      <div className="counter-item">
        <h3>Hours Of Support</h3>
        <p className="counter-number">{hoursOfSupport}</p>
      </div>
      <div className="counter-item">
        <h3>Team Members</h3>
        <p className="counter-number">{teamMembers}</p>
      </div>
    </div>
  );
};

export default Counter;
