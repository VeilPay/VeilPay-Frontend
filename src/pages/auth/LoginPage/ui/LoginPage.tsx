import s from './LoginPage.module.scss';
import { Logo } from '../../../../shared/ui';

export const LoginPage = () => {
  return (
    <div className={s.login}>
      <div className={s.logo}>
        <Logo width={50} />
      </div>
			<h1 className={s.f}></h1>
    </div>
  );
};
