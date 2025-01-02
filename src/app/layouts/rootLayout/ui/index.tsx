import { Outlet } from 'react-router';

export const RootLayout = () => {
  // ? added helmet
  return (
    <>
      <Outlet />
    </>
  );
};
