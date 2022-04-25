import { styled } from '@mui/material/styles';
import EditTaskForm from './components/editTaskForm';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between',
  marginTop: '1rem',
}));

export default function EditPage() {
  return (
    <Wrapper>
      <EditTaskForm />
    </Wrapper>
  );
}
