import { Sheet } from '@mui/joy'

export const SidebarSheet = ({ children }) => (
  <Sheet
    sx={{
      position: { xs: 'fixed', md: 'sticky' },
      transform: {
        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
        md: 'none'
      },
      transition: 'transform 0.4s, width 0.4s',
      zIndex: 10000,
      height: '100dvh',
      width: 'var(--Sidebar-width)',
      top: 0,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderRight: '1px solid',
      borderColor: 'divider'
    }}>
    {children}
  </Sheet>
)
