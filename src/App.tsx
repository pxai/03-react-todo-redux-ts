import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux'; 
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearchForm from './TaskSearchForm';
import './App.css';
import { selectSearchTerm, selectTasks } from './store/task/task.selector';
import Task from './types/task';

function App() {
  const tasks = useSelector(selectTasks);
  const searchTerm = useSelector(selectSearchTerm);

  useCallback(() => {
    console.log("Changed List: ", tasks)
  }, [tasks]);

  const filteredTaskList = useMemo( () => {
    return tasks.filter((task: Task) => {
      return task.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }, [searchTerm, tasks]);

  return (
    <div className="App">
      <TaskSearchForm />
      <TaskForm />
      <TaskList 
        tasks={filteredTaskList} 
      />
    </div>
  );
}

export default App;
