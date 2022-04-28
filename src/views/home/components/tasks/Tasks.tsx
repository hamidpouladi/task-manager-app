import { styled } from '@mui/material/styles';
import Task from '@/components/task';
import { useStore } from '@/store';

const OuterWrapper = styled('div')(() => ({
  color: '#fff',
  fontSize: '1.3rem',
  borderRadius: '2rem 2rem 0 0',
  backgroundColor: '#0368a6',
  // marginLeft: '-2.4rem',
  // marginRight: '-2.4rem',
}));

const InnerWrapper = styled('div')(() => ({
  gap: '1.6rem',
  display: 'flex',
  padding: '1.6rem 3.2rem',
  flexWrap: 'wrap',
  minHeight: '50vh',
  borderRadius: '2rem 2rem 0 0',
  justifyContent: 'center',
  backgroundColor: '#6eb8e6',
}));

const Title = styled('div')(() => ({
  display: 'flex',
  padding: '1.6rem 3.2rem',
  fontSize: '1.8rem',
  alignItems: 'center',
}));

const EmptyTasks = styled('p')(() => ({
  color: '#000',
  fontSize: '1.8rem',
  lineHeight: '2.8rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));

export default function Tasks() {
  const { tasks } = useStore();
  return (
    <OuterWrapper>
      <Title>Tasks</Title>
      <InnerWrapper>
        {tasks.length > 0 ? (
          tasks.map((task) => <Task key={task.id} {...task} />)
        ) : (
          <EmptyTasks>
            <span>You have nothing to do.</span>
            <span>Go get some sleep.</span>
          </EmptyTasks>
        )}
      </InnerWrapper>
    </OuterWrapper>
  );
}
