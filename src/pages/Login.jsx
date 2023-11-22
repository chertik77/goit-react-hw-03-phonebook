import { Box, CssBaseline, CssVarsProvider, GlobalStyles } from '@mui/joy'
import { Footer, Header, Image, Main } from 'components/pages/login'

const Login = () => (
  <CssVarsProvider defaultMode='system'>
    <CssBaseline />
    <GlobalStyles
      styles={{
        ':root': {
          '--Collapsed-breakpoint': '769px',
          '--Cover-width': '50vw',
          '--Form-maxWidth': '800px',
          '--Transition-duration': '0.4s'
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
        <Header />
        <Main />
        <Footer />
      </Box>
    </Box>
    <Image />
  </CssVarsProvider>
)

export default Login
