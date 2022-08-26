import tasks from '../../initialTasks';
import { TASK_ACTION_TYPES } from './task.types';
import Task from '../../types/task';
import { Action } from '../../types/action';

const addTaskToTasks = (tasks: Task[], taskToAdd: Task) => {
  return [...tasks, taskToAdd];  
};

const removeTaskFromTasks = (tasks: Task[], idToRemove: number) => {
    return tasks.filter( (task: Task) => task.id !== idToRemove)
};

const updateTaskFromTasks = (tasks: Task[], taskToUpdate: Task) => {
    const filteredTasks = tasks.filter( (task: Task) => task.id !== taskToUpdate.id);

    return [...filteredTasks, taskToUpdate];
}

export type TaskState = {
    taskTotal: number;
    isTasksEmpty: boolean;
    tasks: Task[];
    searchTerm: string;
}

export const initialTaskState: TaskState = {
    taskTotal: 0,
    isTasksEmpty: true,
    tasks,
    searchTerm: '',
}

export const taskReducer = (state: TaskState = initialTaskState, action: Action) => {
    const {type, payload} = action;

    let changedTasks = null;
    switch (type) {
        case TASK_ACTION_TYPES.ADD_TASK:
                changedTasks = addTaskToTasks(state.tasks, payload as Task);
                return {
                    ...state,
                    taskTotal: changedTasks.length,
                    isTasksEmpty: changedTasks.length > 0,
                    tasks: changedTasks,
                };
        case TASK_ACTION_TYPES.UPDATE_TASK:
            changedTasks = updateTaskFromTasks(state.tasks, payload as Task);
            return {
                ...state,
                taskTotal: changedTasks.length,
                isTasksEmpty: changedTasks.length > 0,
                tasks: changedTasks
            };
        case TASK_ACTION_TYPES.REMOVE_TASK:
            changedTasks = removeTaskFromTasks(state.tasks, payload as number);
            return {
                ...state,
                taskTotal: changedTasks.length,
                isTasksEmpty: changedTasks.length > 0,
                tasks: changedTasks
            };
        case TASK_ACTION_TYPES.SEARCH_TASK:
            return {
                ...state,
                searchTerm: payload,
            };
        default:
            return state;
    }
}

