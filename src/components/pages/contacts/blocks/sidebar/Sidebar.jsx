import { Divider, GlobalStyles } from '@mui/joy'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'
import { SidebarList } from './SidebarList'
import { SidebarOverlay } from './SidebarOverlay'
import { SidebarSheet } from './SidebarSheet'

export const Sidebar = () => (
  <SidebarSheet>
    <GlobalStyles
      styles={theme => ({
        ':root': {
          '--Sidebar-width': '220px',
          [theme.breakpoints.up('lg')]: { '--Sidebar-width': '240px' }
        }
      })}
    />
    <SidebarOverlay />
    <SidebarHeader />
    <Divider />
    <SidebarList />
    <Divider />
    <SidebarFooter />
  </SidebarSheet>
)
