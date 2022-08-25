import Task from './task';
import { TASK_ACTION_TYPES } from '../store/task/task.types';

export type Action = {
    type: TASK_ACTION_TYPES;
    payload: number | string | Task;
}