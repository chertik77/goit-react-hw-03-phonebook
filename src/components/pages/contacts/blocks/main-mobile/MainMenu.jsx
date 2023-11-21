import MoreHorizRounded from '@mui/icons-material/MoreHorizRounded'
import { Box, Divider, Dropdown, IconButton, Menu, MenuButton, MenuItem } from '@mui/joy'

export const MainMenu = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}>
        <MoreHorizRounded />
      </MenuButton>
      <Menu size='sm' sx={{ minWidth: 140 }}>
        <MenuItem>Edit</MenuItem>
        <Divider />
        <MenuItem color='danger'>Delete</MenuItem>
      </Menu>
    </Dropdown>
  </Box>
)
