export enum Status {
  ToDo = 'ToDo',
  InProgress = 'InProgress',
  Blocked = 'Blocked',
  InQA = 'InQA',
  Done = 'Done',
  Deployed = 'Deployed',
}
export interface Task {
  description: string;
  id: string;
  status: Status;
  title: string;
}

export interface AppState {
  tasks: Task[];
}
