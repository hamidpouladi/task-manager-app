import MuButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuButton)<ButtonProps>(() => ({
  width: '100%',
  color: '#ccc',
  border: '0.1rem solid #ccc',
  backgroundColor: '#fff',
  fontSize: '1.4rem',
  padding: '1.4rem 1.6rem',
  borderRadius: '.5rem',
  '&:hover': {
    backgroundColor: '#0f0f0f0',
    border: '0.1rem solid #ccc',
  },
  '& svg': {
    width: '1.4rem',
    height: '1.4rem',
  },
}));

export default function OutlinedButton({ ...props }: ButtonProps) {
  return <StyledButton variant="outlined" {...props} />;
}
