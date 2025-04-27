import { useState } from 'react';
import './App.css';

function App() {
  const [goal, setGoal] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleGenerate = () => {
    console.log('Generate tasks for:', goal);
    // Later we'll call backend API here
  };

  return (
    <div className="container">
      <h1>AI Smart Todo</h1>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter your project goal..."
      />
      <button onClick={handleGenerate}>
        Generate Tasks
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
