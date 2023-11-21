import { LoginRounded } from '@mui/icons-material'
import { Avatar, Box, IconButton, Typography } from '@mui/joy'
import { useAuth } from 'hooks/useAuth'
import { useLogoutMutation } from 'redux/services'

export const SidebarFooter = () => {
  const { user } = useAuth()
  const [logout] = useLogoutMutation()
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Avatar
        variant='outlined'
        size='sm'
        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
      />
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography level='title-sm'>{user.name}</Typography>
      </Box>
      <IconButton size='sm' variant='plain' color='neutral' onClick={() => logout()}>
        <LoginRounded />
      </IconButton>
    </Box>
  )
}
