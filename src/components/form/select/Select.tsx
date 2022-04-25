import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useField } from 'formik';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const MuSelect = styled(TextField)<TextFieldProps>(() => ({
  width: '100%',
  marginBottom: '1.2rem',
  '& .MuiSelect-select': {
    backgroundColor: '#eee',
    outline: 'none',
    boxShadow: 'none',
    padding: '0.8rem 1.6rem',
    minHeight: '4.8rem !important',
    borderRadius: '0.6rem 0.6rem 0 0',
    border: '0',
    borderBottom: '0.1rem solid #000',
    width: '100%',
    fontSize: '1.4rem',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
}));

const MuMenuItem = styled(MenuItem)<MenuItemProps>(() => ({
  fontSize: '1.4rem',
}));

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: Option[];
};

export default function Select({
  name,
  options,
  ...props
}: Props & TextFieldProps) {
  const [field, meta] = useField(name);
  return (
    <MuSelect
      id="filled-select"
      select
      variant="filled"
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    >
      {options.map((option) => (
        <MuMenuItem key={option.value} value={option.value}>
          {option.label}
        </MuMenuItem>
      ))}
    </MuSelect>
  );
}
