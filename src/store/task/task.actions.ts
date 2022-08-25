
import { createAction } from '../../utils/reducer/reducer.utils';
import Task from '../../types/task';
import { Action } from '../../types/action';
import { TASK_ACTION_TYPES } from './task.types';

export const addTask = (task: Task) => {
    return createAction(TASK_ACTION_TYPES.ADD_TASK, task);
};

export const removeTask = (id: number) => {
    return createAction(TASK_ACTION_TYPES.REMOVE_TASK, id);
};

export const updateTask = (task: Task) => {
    return createAction(TASK_ACTION_TYPES.UPDATE_TASK, task);
};

export const searchTask = (name: string) => {
    return createAction(TASK_ACTION_TYPES.SEARCH_TASK, name);
};

export type DispatchTaskType = (args: Action) => Action