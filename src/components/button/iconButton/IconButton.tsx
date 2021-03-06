import MuButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuButton)<ButtonProps>(() => ({
  width: '100%',
  color: '#fff',
  border: '0.1rem solid #0368a6',
  backgroundColor: '#0368a6',
  fontSize: '1.4rem',
  padding: '1.4rem 1.6rem',
  borderRadius: '.5rem',
  '&:hover': {
    backgroundColor: '#01578c',
  },
  '& svg': {
    width: '1.4rem',
    height: '1.4rem',
  },
}));

export default function Button({ ...props }: ButtonProps) {
  return <StyledButton variant="contained" {...props} />;
}
