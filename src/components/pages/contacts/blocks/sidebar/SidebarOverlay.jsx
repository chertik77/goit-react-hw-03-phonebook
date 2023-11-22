import { Box } from '@mui/joy'
import { toggleSidebar } from 'utils/helpers/toggleSidebar'

export const SidebarOverlay = () => (
  <Box
    sx={{
      position: 'fixed',
      zIndex: 9998,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      opacity: 1,
      backgroundColor: 'var(--joy-palette-background-backdrop)',
      transition: 'opacity 0.4s',
      transform: {
        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
        lg: 'translateX(-100%)'
      }
    }}
    onClick={() => toggleSidebar()}
  />
)
