import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearchForm from './TaskSearchForm';
import './App.css';
import { selectSearchTerm, selectTasks } from './store/task/task.selector';
import { addTask, updateTask, removeTask, searchTask } from './store/task/task.actions';
import Task from './types/task';

function App() {
  const tasks = useSelector(selectTasks);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  useCallback(() => {
    console.log("Changed List: ", tasks)
  }, [tasks]);

  const handleDelete =(id: number) => {
    dispatch(removeTask(id));
  };

  const handleUpdate = (updatedTask: Task)=> {
    dispatch(updateTask(updatedTask));
  };

  const handleCreate = (name: string) => {
    dispatch(addTask({id: Math.round(10000 * Math.random()), name}))
  };

  const handleSearch = (name: string) => {
    dispatch(searchTask(name))
  };

  const filteredTaskList = useMemo( () => {
    console.log("Lets see tasks: ", tasks)
    return tasks.filter((task: Task) => {
      return task.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }, [searchTerm, tasks]);

  return (
    <div className="App">
      <TaskSearchForm handleSearch={handleSearch}/>
      <TaskForm handleCreate={handleCreate}/>
      <TaskList 
        tasks={filteredTaskList} 
        handleDelete={handleDelete} 
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
