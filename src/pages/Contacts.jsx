import { Box, CssBaseline, CssVarsProvider, Typography } from '@mui/joy'
import { Header, Main, MainMobile, Sidebar } from 'components/pages/contacts'
import { Outlet, useLocation } from 'react-router-dom'

const Contacts = ({ entitites, setFilter }) => {
  const { pathname } = useLocation()

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <Box
          component='main'
          className='MainContent'
          sx={{
            px: { xs: 2, md: 6 },
            pt: { xs: 'calc(12px + var(--Header-height))', sm: 'calc(12px + var(--Header-height))', md: 3 },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1
          }}>
          <Box
            sx={{
              display: 'flex',
              my: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}>
            <Typography level='h2'>Contacts</Typography>
          </Box>
          {pathname === '/contacts' ? (
            <>
              <Main items={entitites} filter={setFilter} />
              <MainMobile items={entitites} />
            </>
          ) : (
            <Outlet />
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  )
}

export default Contacts
