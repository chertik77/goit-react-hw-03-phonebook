import SearchIcon from '@mui/icons-material/Search'
import { Box, FormControl, FormLabel, Input } from '@mui/joy'

export const Filter = ({ items, onChange }) => (
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
        disabled={!items()?.length}
        startDecorator={<SearchIcon />}
        onChange={e => onChange(e.target.value)}
      />
    </FormControl>
  </Box>
)
