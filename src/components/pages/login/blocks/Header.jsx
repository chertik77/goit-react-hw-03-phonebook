import { BadgeRounded } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/joy'
import { ColorSchemeToggle } from 'utils/ui/ColorShemeToggle'

export const Header = () => (
  <Box component='header' sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}>
    <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
      <IconButton variant='soft' color='primary' size='sm'>
        <BadgeRounded />
      </IconButton>
      <Typography level='title-lg'>PhoneBook</Typography>
    </Box>
    <ColorSchemeToggle />
  </Box>
)
