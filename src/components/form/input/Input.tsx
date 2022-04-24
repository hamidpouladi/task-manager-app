import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useField } from 'formik';
import { styled } from '@mui/material/styles';

const MuInput = styled(TextField)<TextFieldProps>(() => ({
  width: '100%',
  marginBottom: '1.2rem',
  '& input': {
    backgroundColor: '#eee',
    outline: 'none',
    boxShadow: 'none',
    padding: '0.8rem 1.6rem',
    minHeight: '4.8rem',
    borderRadius: '0.6rem 0.6rem 0 0',
    border: '0',
    borderBottom: '0.1rem solid #000',
    width: '100%',
    fontSize: '1.4rem',
    boxSizing: 'border-box',
  },
}));

type Props = {
  name: string;
};

export default function Input({ name, ...props }: Props & TextFieldProps) {
  const [field, meta] = useField(name);

  return (
    <MuInput
      required
      id="filled-required"
      variant="filled"
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}
