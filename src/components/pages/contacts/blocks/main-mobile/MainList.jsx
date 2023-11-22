import { Box, List, ListDivider, ListItem, ListItemContent, Typography } from '@mui/joy'
import { MainMenu } from './MainMenu'

export const MainList = ({ item: { name, number } }) => (
  <List>
    <ListItem>
      <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
        <Box>
          <Typography fontWeight={600} gutterBottom>
            {name}
          </Typography>
          <Typography level='body-xs' gutterBottom>
            {number}
          </Typography>
          <MainMenu />
        </Box>
      </ListItemContent>
    </ListItem>
    <ListDivider />
  </List>
)
