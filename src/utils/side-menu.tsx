import type { NextRouter } from 'next/router';

export const isActivePath = (path: string, router: NextRouter) => {
  if (router.pathname === path || router.asPath === path) {
    return true;
  }

  if (router.pathname.startsWith(`${path}/`) && path.split('/').length === 2) {
    return false;
  }

  return router.pathname.startsWith(path);
};
