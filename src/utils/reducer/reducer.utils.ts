import { Action } from '../../types/action';
import Task from '../../types/task';  
import { TASK_ACTION_TYPES } from '../../store/task/task.types';

export const createAction = (type: TASK_ACTION_TYPES, payload: number | string | Task ) => ({type, payload});