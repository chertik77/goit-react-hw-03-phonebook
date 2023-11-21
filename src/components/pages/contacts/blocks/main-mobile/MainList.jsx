import Box from '@mui/joy/Box'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import ListItemContent from '@mui/joy/ListItemContent'
import Typography from '@mui/joy/Typography'
import { MainMenu } from './MainMenu'

export const MainList = ({ item: { name, number } }) => (
  <List size='sm' sx={{ '--ListItem-paddingX': 0 }}>
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
      <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
        <div>
          <Typography fontWeight={600} gutterBottom>
            {name}
          </Typography>
          <Typography level='body-xs' gutterBottom>
            {number}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 0.5,
              mb: 1
            }}
          />
          <MainMenu />
        </div>
      </ListItemContent>
    </ListItem>
    <ListDivider />
  </List>
)
