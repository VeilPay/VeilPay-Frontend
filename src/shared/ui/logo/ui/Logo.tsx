import s from './Logo.module.scss';
import { Link } from 'react-router-dom';
import LogoImg from '../../../../../public/dark.png';
import { PathNames } from '../../../config';
import classNames from '../../../lib/classnames';

const DEFAULT_WIDTH = 100;

export type Props = {
  className?: string;
  width?: number;
  height?: number;
  to?: string;
};

export const Logo = ({ width = DEFAULT_WIDTH, height, className, to }: Props) => {
  return (
    <Link style={{ width, height }} to={to || PathNames.root} className={classNames(s.logo, className)}>
      <img src={LogoImg} alt='Logo' />
    </Link>
  );
};
