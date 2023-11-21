import { Box, Link, List, ListItem, listItemButtonClasses } from '@mui/joy'
import { Link as RouterLink } from 'react-router-dom'
import { toggleSidebar } from 'utils/helpers/toggleSidebar'

export const SidebarList = () => (
  <Box
    sx={{
      minHeight: 0,
      overflow: 'hidden auto',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      [`& .${listItemButtonClasses.root}`]: { gap: 1.5 }
    }}>
    <List
      size='sm'
      sx={{
        gap: 1,
        '--List-nestedInsetStart': '30px',
        '--ListItem-radius': theme => theme.vars.radius.sm
      }}>
      <ListItem sx={{ mt: 0.5 }}>
        <Link
          component={RouterLink}
          to='/contacts'
          onClick={() => toggleSidebar()}
          color='neutral'
          underline='none'
          level='body-sm'>
          All contacts
        </Link>
      </ListItem>
      <ListItem>
        <Link
          component={RouterLink}
          to='create'
          onClick={() => toggleSidebar()}
          color='neutral'
          underline='none'
          level='body-sm'>
          Create a new contact
        </Link>
      </ListItem>
    </List>
  </Box>
)
