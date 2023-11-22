import { Box, Link, Stack, Typography } from '@mui/joy'
import { useState } from 'react'
import { LoginForm } from '../forms/LoginForm'
import { RegisterForm } from '../forms/RegisterForm'

export const Main = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <Box
      sx={{
        my: 'auto',
        py: 2,
        pb: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 400,
        maxWidth: '100%',
        mx: 'auto',
        borderRadius: 'sm',
        '& form': { display: 'flex', flexDirection: 'column', gap: 2 }
      }}>
      <Stack sx={{ mb: 2, gap: 4 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography level='h3'>{isSignUp ? 'Sign up' : 'Sign in'}</Typography>
          <Typography level='body-sm'>
            {isSignUp ? 'Have an account?' : 'New to PhoneBook?'}{' '}
            <Link level='title-sm' onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign in!' : 'Sign up!'}
            </Link>
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 2, gap: 4 }}>{isSignUp ? <RegisterForm /> : <LoginForm />}</Stack>
    </Box>
  )
}
