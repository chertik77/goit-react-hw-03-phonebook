import Box from '@mui/joy/Box'
import { MainList } from './MainList'

export const MainMobile = ({ items }) => {
  return (
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      {items()?.map(item => (
        <MainList key={item.id} item={item} />
      ))}
    </Box>
  )
}
