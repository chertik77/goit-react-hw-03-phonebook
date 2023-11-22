import { MoreHorizRounded } from '@mui/icons-material'
import { Box, Divider, Dropdown, IconButton, Menu, MenuButton, MenuItem } from '@mui/joy'

export const MainMenu = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <Dropdown>
      <MenuButton slots={{ root: IconButton }}>
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
