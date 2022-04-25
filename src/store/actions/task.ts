import { Task } from '@/types';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export type AddAction = {
  type: typeof ADD_TASK;
  task: Task;
};

export type UpdateAction = {
  type: typeof UPDATE_TASK;
  task: Task;
};

export type TaskActions = AddAction | UpdateAction;

// Add action creator
export const add = (task: Task): AddAction => {
  return { type: ADD_TASK, task };
};

// Update action creator
export const update = (task: Task): UpdateAction => {
  return { type: UPDATE_TASK, task };
};
