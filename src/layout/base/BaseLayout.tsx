import { ReactNode, FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../../components/header';
import theme from '../theme';

type Props = {
  children: ReactNode;
};

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">{children}</Container>
    </ThemeProvider>
  );
};

export default BaseLayout;
