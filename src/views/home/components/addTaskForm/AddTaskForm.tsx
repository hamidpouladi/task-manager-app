import { Formik, Form } from 'formik';
import { styled } from '@mui/material/styles';
import { Input, Select, Textarea } from '@/components/form';
import Button from '@/components/button/iconButton';

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

const initialValues: FormValues = {
  title: '',
  description: '',
  status: 'todo',
};

export default function AddTaskForm() {
  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={() => undefined}>
        <Form>
          <Title>Add a new Task</Title>
          <Input name="title" placeholder="Title" />
          <Textarea name="description" placeholder="Description" />
          <Select name="status" />
          <Button type="submit">Add</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
}
