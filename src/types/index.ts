export interface Task {
  description: string;
  id: string;
  status: string;
  title: string;
}

export interface AppState {
  tasks: Task[];
}
