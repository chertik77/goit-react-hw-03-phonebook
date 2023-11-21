import { Box, List, ListItem, listItemButtonClasses } from '@mui/joy'
import { Link } from 'react-router-dom'

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
        <Link to='/contacts'>All contacts</Link>
      </ListItem>
      <ListItem>
        <Link to='create'>Create a new contact</Link>
      </ListItem>
    </List>
  </Box>
)
