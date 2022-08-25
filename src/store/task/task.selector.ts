import { createSelector } from 'reselect';

const selectTaskReducer = (state: any) => state.task;
export const selectSearchTerm = (state: any) => state.task.searchTerm;


export const selectTasks = createSelector(
    [selectTaskReducer],
    (task) => task.tasks
);

export const selectTaskCount = createSelector(
    [selectTaskReducer],
    (tasks) => tasks.length
);
