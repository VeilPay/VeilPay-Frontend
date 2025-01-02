import { Providers } from './providers';
import './styles/index.scss';
import { AppRouter } from './routes';

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
