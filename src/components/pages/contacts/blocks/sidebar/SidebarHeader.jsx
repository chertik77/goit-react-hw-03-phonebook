import { BadgeRounded } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/joy'
import { ColorSchemeToggle } from 'utils/ui/ColorShemeToggle'

export const SidebarHeader = () => (
  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
    <IconButton color='primary' size='sm'>
      <BadgeRounded />
    </IconButton>
    <Typography level='title-lg'>PhoneBook</Typography>
    <ColorSchemeToggle />
  </Box>
)
