import { LoginRounded } from '@mui/icons-material'
import { Avatar, Box, IconButton, Typography } from '@mui/joy'
import { useAuth } from 'hooks/useAuth'
import { useLogoutMutation } from 'redux/services'
import { promiseToast } from 'utils/notifications/toast'

export const SidebarFooter = () => {
  const { user } = useAuth()
  const [logout] = useLogoutMutation()

  const handleLogout = () =>
    promiseToast(logout(), {
      loading: 'Logging out...',
      success: 'You have been logged out.'
    })

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Avatar size='sm' />
      <Box sx={{ flex: 1 }}>
        <Typography level='title-sm'>{user.name}</Typography>
      </Box>
      <IconButton size='sm' onClick={handleLogout}>
        <LoginRounded />
      </IconButton>
    </Box>
  )
}
