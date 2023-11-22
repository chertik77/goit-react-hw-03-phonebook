import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Sheet } from '@mui/joy'
import { toggleSidebar } from 'utils/helpers/toggleSidebar'

export const Header = () => (
  <Sheet
    sx={{
      display: { md: 'none' },
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 9995,
      p: 2,
      borderBottom: '1px solid',
      borderColor: 'background.level1',
      boxShadow: 'sm'
    }}>
    <IconButton onClick={() => toggleSidebar()} variant='outlined' size='sm'>
      <MenuIcon />
    </IconButton>
  </Sheet>
)
