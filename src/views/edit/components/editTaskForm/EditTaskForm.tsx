import { useMemo } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { styled } from '@mui/material/styles';
import { Input, Select, Textarea } from '@/components/form';
import Button from '@/components/button/iconButton';
import { useDispatch, useStore } from '@/store';
import { update as updateTask } from '@/store/actions/task';

const Wrapper = styled('div')(() => ({
  width: '100%',
  padding: '3.4rem 3.2rem',
  maxWidth: '60rem',
  alignSelf: 'center',
}));

const Title = styled('h1')(() => ({
  fontSize: '1.8rem',
  fontWeight: '500',
  marginBottom: '1.6rem',
}));

type FormValues = {
  title: string;
  description: string;
  status: string;
};

export default function EditTaskForm() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const { tasks } = useStore();

  const handleSubmit = async (values: FormValues) => {
    const id = params.get('id');
    if (!id) return;
    const task = {
      id,
      ...values,
    };
    dispatch(updateTask(task));
  };

  const task = useMemo(
    () => tasks.find((t) => t.id === params.get('id')),
    [tasks, params]
  );

  if (!task) {
    return <Navigate to="/404" />;
  }

  const initialValues: FormValues = useMemo(
    () => ({
      title: task.title,
      description: task.description,
      status: task.status,
    }),

    [task]
  );

  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Title>Edit Task</Title>
          <Input name="title" placeholder="Title" />
          <Textarea name="description" placeholder="Description" />
          <Select name="status" />
          <Button type="submit">Edit</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
}
