import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { Input, Textarea } from '@/components/form';
import IconButton from '@/components/button/iconButton';
import { useDispatch } from '@/store';
import { add as addTask } from '@/store/actions/task';
import { Status } from '@/types';
import AddIcon from '@/assets/icons/add-white.svg?component';

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

const validationSchema = Yup.object().shape({
  title: Yup.string().required('This field is mandatory'),
  description: Yup.string()
    .min(60, 'Description must be at least 60 characters.')
    .required('This field is mandatory'),
});

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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Title>Add a new Task</Title>
          <Input name="title" placeholder="Title" />
          <Textarea name="description" placeholder="Description" />
          <IconButton startIcon={<AddIcon />} type="submit">
            Add
          </IconButton>
        </Form>
      </Formik>
    </Wrapper>
  );
}
