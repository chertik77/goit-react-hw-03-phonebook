import { Box } from '@mui/joy'
import { MainList } from './MainList'

export const MainMobile = ({ contacts }) => (
  <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
    {contacts()?.map(item => (
      <MainList key={item.id} item={item} />
    ))}
  </Box>
)
