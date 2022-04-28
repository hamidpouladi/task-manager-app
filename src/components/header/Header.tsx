import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1.6rem 3.2rem',
  backgroundColor: '#0368a6',
  color: '#fff',
  height: '5.0rem',
  textTransform: 'capitalize',
}));

const Title = styled('span')(() => ({
  fontSize: '1.8rem',
}));

const Header = () => {
  const { pathname } = useLocation();
  const renderTitle = () => {
    const title = pathname.replace(/\//g, '');
    return title.length > 0 ? title : 'Home';
  };
  return (
    <Wrapper>
      <Title>{`task management > ${renderTitle()}`}</Title>
    </Wrapper>
  );
};
export default Header;
