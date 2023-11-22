import SearchIcon from '@mui/icons-material/Search'
import { Box, FormControl, FormLabel, Input } from '@mui/joy'

export const Filter = ({ onChange, filter }) => (
  <Box sx={{ borderRadius: 'sm', py: 2, width: 284 }}>
    <FormControl size='sm'>
      <FormLabel>Search for contact</FormLabel>
      <Input
        placeholder='Search'
        value={filter}
        startDecorator={<SearchIcon />}
        onChange={e => onChange(e.target.value.trim())}
      />
    </FormControl>
  </Box>
)
