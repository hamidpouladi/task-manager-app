import { useMemo } from 'react';
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';
import { Input, Select, Textarea } from '@/components/form';
import Button from '@/components/button/iconButton';
import { useDispatch, useStore } from '@/store';
import { update as updateTask } from '@/store/actions/task';
import { Status } from '@/types';
import trackTaskHistory from '@/utils/trackTaskHistory';

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
  status: Status;
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('This field is mandatory'),
  description: Yup.string()
    .min(60, 'Description must be at least 60 characters.')
    .required('This field is mandatory'),
});

export default function EditTaskForm() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const redirect = useNavigate();
  const { tasks } = useStore();

  const handleSubmit = async (values: FormValues) => {
    const id = params.get('id');
    if (!id) return;
    const task = {
      id,
      ...values,
    };
    dispatch(updateTask(task));
    redirect('/');
  };

  const task = useMemo(
    () => tasks.find((t) => t.id === params.get('id')),
    [tasks, params]
  );

  if (!task) {
    return <Navigate to="/404" />;
  }

  const taskHistory = trackTaskHistory(task.status);

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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Title>Edit Task</Title>
          <Input name="title" placeholder="Title" />
          <Textarea name="description" placeholder="Description" />
          <Select
            name="status"
            disabled={task.status === Status.Deployed}
            options={taskHistory.map((status) => ({
              label: status,
              value: status,
            }))}
          />
          <Button type="submit">Edit</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
}
