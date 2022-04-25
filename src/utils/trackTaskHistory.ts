import { Status } from '@/types';
const trackTaskHistory = (status: Status) => {
  const { ToDo, InProgress, Blocked, InQA, Done, Deployed } = Status;
  switch (status) {
    case ToDo:
      return [ToDo, InProgress];
    case InProgress:
      return [InProgress, Blocked, InQA];
    case Blocked:
      return [Blocked, ToDo];
    case InQA:
      return [InQA, ToDo, Done];
    case Done:
      return [Done, Deployed];
    case Deployed:
      return [Deployed];
    default:
      return [];
  }
};

export default trackTaskHistory;
