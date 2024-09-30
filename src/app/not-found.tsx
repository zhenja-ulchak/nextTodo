import { getTranslations } from 'next-intl/server'

import Link from 'next/link';

import { Button, Stack, Typography } from '@mui/material'

const NotFound = async () => {
  const t = await getTranslations()
  return (
    <Stack
      direction={'column'}
      gap={3}
      justifyContent={'center'}
      alignContent={'center'}
      width={'100%'}
      height={'100vh'}
      flex={1}
    >
      <Typography variant="h3" component={'h3'} align="center">
        {t('title.notFound')}
      </Typography>

      <Link
        href={'/'}
        passHref
        style={{
          margin: '0 auto',
        }}
      >
        <Button variant="contained">{t('button.dashboard')}</Button>
      </Link>
    </Stack>
  )
}

export default NotFound
