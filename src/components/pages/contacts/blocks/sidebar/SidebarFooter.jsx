import { LoginRounded } from '@mui/icons-material'
import { Avatar, Box, IconButton, Typography } from '@mui/joy'
import { useAuth } from 'hooks/useAuth'
import { useLogoutMutation } from 'redux/services'

export const SidebarFooter = () => {
  const { user } = useAuth()
  const [logout] = useLogoutMutation()

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Avatar size='sm' />
      <Box sx={{ flex: 1 }}>
        <Typography level='title-sm'>{user.name}</Typography>
      </Box>
      <IconButton size='sm' onClick={() => logout()}>
        <LoginRounded />
      </IconButton>
    </Box>
  )
}
