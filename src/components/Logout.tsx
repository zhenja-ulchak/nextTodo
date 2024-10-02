
import React from 'react';

import { useTranslations } from 'next-intl';
// @ts-ignore
import { Logout as apiLogout } from '../api/ApiProvaider'
import { Button, } from '@mui/material';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    apiLogout()
    router.push('/');
  };
  const  t  = useTranslations();
  return (
    <Button variant="outlined" onClick={handleLogout}>
      {t('logout.Logout')}
    </Button>
  );
};

export default Logout;
