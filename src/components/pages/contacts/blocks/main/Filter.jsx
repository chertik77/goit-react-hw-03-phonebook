import SearchIcon from '@mui/icons-material/Search'
import { Box, FormControl, FormLabel, Input } from '@mui/joy'

export const Filter = ({ onChange, filter }) => (
  <Box
    sx={{
      borderRadius: 'sm',
      py: 2,
      display: { xs: 'none', sm: 'flex' },
      flexWrap: 'wrap',
      gap: 1.5,
      '& > *': { minWidth: { xs: '120px', md: '160px' } }
    }}>
    <FormControl sx={{ flex: 1 }} size='sm'>
      <FormLabel>Search for contact</FormLabel>
      <Input
        size='sm'
        placeholder='Search'
        value={filter}
        startDecorator={<SearchIcon />}
        onChange={e => onChange(e.target.value.trim())}
      />
    </FormControl>
  </Box>
)
