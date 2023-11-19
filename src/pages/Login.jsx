import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import CssBaseline from '@mui/joy/CssBaseline'
import Divider from '@mui/joy/Divider'
import { formLabelClasses } from '@mui/joy/FormLabel'
import GlobalStyles from '@mui/joy/GlobalStyles'
import IconButton from '@mui/joy/IconButton'
import Link from '@mui/joy/Link'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import { CssVarsProvider } from '@mui/joy/styles'
import { LoginForm } from 'components/pages/login/LoginForm'
import { useLoginFormValidation } from 'hooks/useLoginFormValidation'
import { useEffect, useState } from 'react'
import { ColorSchemeToggle } from 'utils/ui/ColorShemeToggle'
import GoogleIcon from 'utils/ui/GoogleIcon'

export default function JoySignInSideTemplate() {
  const { reset } = useLoginFormValidation()
  const [isSignUp, setIsSignUp] = useState(false)

  const handleToggle = () => {
    setIsSignUp(!isSignUp)
  }

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <CssVarsProvider defaultMode='dark' disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '50vw', // must be `vw` only
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s' // set to `none` to disable transition
          }
        }}
      />
      <Box
        sx={theme => ({
          width: 'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)'
          }
        })}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: 'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
            maxWidth: '100%',
            px: 2
          }}>
          <Box
            component='header'
            sx={{
              py: 3,
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'space-between'
            }}>
            <Box
              sx={{
                gap: 2,
                display: 'flex',
                alignItems: 'center'
              }}>
              <IconButton variant='soft' color='primary' size='sm'>
                <BadgeRoundedIcon />
              </IconButton>
              <Typography level='title-lg'>PhoneBook</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component='main'
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
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden'
              }
            }}>
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography level='h3'>{isSignUp ? 'Sign up' : 'Sign in'}</Typography>
                <Typography level='body-sm'>
                  {isSignUp ? 'Have an account?' : 'New to PhoneBook?'}{' '}
                  <Link level='title-sm' onClick={handleToggle}>
                    {isSignUp ? 'Sign in!' : 'Sign up!'}
                  </Link>
                </Typography>
              </Stack>

              <Button variant='soft' color='neutral' fullWidth startDecorator={<GoogleIcon />}>
                Continue with Google
              </Button>
            </Stack>
            <Divider
              sx={theme => ({
                [theme.getColorSchemeSelector('light')]: {
                  color: { xs: '#FFF', md: 'text.tertiary' },
                  '--Divider-lineColor': {
                    xs: '#FFF',
                    md: 'var(--joy-palette-divider)'
                  }
                }
              })}>
              or
            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <LoginForm isSignUp={isSignUp} />
            </Stack>
          </Box>
          <Box component='footer' sx={{ py: 3 }}>
            <Typography level='body-xs' textAlign='center'>
              © PhoneBook {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={theme => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)'
          }
        })}
      />
    </CssVarsProvider>
  )
}
