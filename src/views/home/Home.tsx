import { styled } from '@mui/material/styles';
import AddTaskForm from './components/addTaskForm';
import Tasks from './components/tasks';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between',
  marginTop: '1rem',
}));

export default function HomePage() {
  return (
    <Wrapper>
      <AddTaskForm />
      <Tasks />
    </Wrapper>
  );
}
