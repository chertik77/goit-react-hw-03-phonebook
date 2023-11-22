import { Box, CssBaseline, CssVarsProvider, Typography } from '@mui/joy'
import { Header, Main, MainMobile, Sidebar } from 'components/pages/contacts'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useGetContactsQuery } from 'redux/services'

const Contacts = () => {
  const [filter, setFilter] = useState('')
  const { data } = useGetContactsQuery()
  const { pathname } = useLocation()

  const filteredContacts = () =>
    data
      ?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
      )
      .reverse()

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
              <Main items={filteredContacts} filter={filter} setFilter={setFilter} />
              <MainMobile items={filteredContacts} />
            </>
          ) : (
            <Outlet context={[filteredContacts]} />
          )}
        </Box>
      </Box>
    </CssVarsProvider>
  )
}

export default Contacts
