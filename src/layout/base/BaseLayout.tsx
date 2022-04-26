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
      <Container disableGutters maxWidth={false}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default BaseLayout;
