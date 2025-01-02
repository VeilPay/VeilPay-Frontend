import { Navigate, Outlet } from 'react-router';
import s from './MainLayout.module.scss';
import { PathNames } from '../../../../shared/config'

export const MainLayout = () => {
  const isAuth = false;

  if (!isAuth) return <Navigate to={PathNames.auth} replace/>

  return (
    <div className={s.layout}>
      <header>HEader</header>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
