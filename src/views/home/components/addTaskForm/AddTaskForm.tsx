import { Formik, Form, FormikHelpers } from 'formik';
import { styled } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { Input, Textarea } from '@/components/form';
import Button from '@/components/button/iconButton';
import { useDispatch } from '@/store';
import { add as addTask } from '@/store/actions/task';
import { Status } from '@/types';

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
};

const initialValues: FormValues = {
  title: '',
  description: '',
};

export default function AddTaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (
    values: FormValues,
    action: FormikHelpers<FormValues>
  ) => {
    const id = uuidv4();
    const task = {
      id,
      status: Status.ToDo,
      ...values,
    };
    dispatch(addTask(task));
    action.resetForm();
    return id;
  };
  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Title>Add a new Task</Title>
          <Input name="title" placeholder="Title" />
          <Textarea name="description" placeholder="Description" />
          <Button type="submit">Add</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
}
