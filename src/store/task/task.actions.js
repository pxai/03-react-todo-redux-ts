import { TASKS_ACTION_TYPES } from './task.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const addTask = (task) => {
    console.log("Create it: ", task)
    return createAction(TASKS_ACTION_TYPES.ADD_TASK, task);
};

export const removeTask = (id) => {
    return createAction(TASKS_ACTION_TYPES.REMOVE_TASK, id);
};

export const updateTask = (task) => {
    return createAction(TASKS_ACTION_TYPES.UPDATE_TASK, task);
};

export const searchTask = (name) => {
    return createAction(TASKS_ACTION_TYPES.SEARCH_TASK, name);
};