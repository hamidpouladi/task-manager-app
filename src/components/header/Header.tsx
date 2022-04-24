import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1.6rem 3.2rem',
  backgroundColor: '#0368a6',
  color: '#fff',
  height: '5.0rem',
}));

const Title = styled('span')(() => ({
  fontSize: '1.8rem',
}));

const Header = () => {
  return (
    <Wrapper>
      <Title>Task Management</Title>
    </Wrapper>
  );
};
export default Header;
