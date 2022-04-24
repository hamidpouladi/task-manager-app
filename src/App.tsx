import BaseLayout from './layout/base';
import { Formik, Form } from 'formik';
import './App.css';
import { Input, Select, Textarea } from './components/form';
import Button from './components/Button/iconButton';

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

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <h1> just for test</h1>
        <Formik initialValues={initialValues} onSubmit={() => undefined}>
          <Form>
            <Input name="title" placeholder="Title" />
            <Textarea name="description" placeholder="Description" />
            <Select name="status" />
            <Button type="submit">Add</Button>
          </Form>
        </Formik>
      </BaseLayout>
    </div>
  );
}

export default App;
