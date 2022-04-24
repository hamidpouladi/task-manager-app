import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useField } from 'formik';
import { styled } from '@mui/material/styles';

const MuTextarea = styled(TextField)<TextFieldProps>(() => ({
  width: '100%',
  marginBottom: '1.2rem',
  borderRadius: '0.6rem 0.6rem 0 0',
  '& .MuiFilledInput-root': {
    backgroundColor: '#eee',
    outline: 'none',
    boxShadow: 'none',
    padding: '0.8rem 1.6rem',
    borderRadius: '0.6rem 0.6rem 0 0',
    border: '0',
    width: '100%',
    fontSize: '1.4rem',
    boxSizing: 'border-box',
    '&::before': {
      borderBottom: '0.1rem solid #000',
    },
  },
  '& textarea': {},
}));

type Props = {
  name: string;
};

export default function Textarea({ name, ...props }: Props & TextFieldProps) {
  const [field, meta] = useField(name);

  return (
    <MuTextarea
      required
      id="filled-required"
      variant="filled"
      multiline
      rows={6}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}
