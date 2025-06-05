import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import padiToken from '../../../config/design-token.json';

const themePadi = {
  name: 'Padi',
  ...padiToken,
};

type Props = {
  children: ReactNode;
};

const Themes = (props: Props) => {
  return (
    <ThemeProvider theme={themePadi}>
      <main>{props.children}</main>
    </ThemeProvider>
  );
};

export default Themes;
