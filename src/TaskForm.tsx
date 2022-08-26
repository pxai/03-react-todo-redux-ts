import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addTask } from './store/task/task.actions';

const TaskForm = () => {
    const [taskValue, setTaskValue] = useState<string>('');
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addTask({id: Math.round(10000 * Math.random()), name: taskValue}));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleChange} />
            <button onClick={handleSave}>Create task</button>
        </div>
    );
};

export default TaskForm;