import { Outlet } from 'react-router';
import s from './AuthLayout.module.scss';

export const AuthLayout = () => {
  return (
    <div className={s.auth}>
      <div className={s.container}>
        <Outlet />
      </div>
    </div>
  );
};
