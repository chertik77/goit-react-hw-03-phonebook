import { SearchIcon } from '@mui/icons-material'
import { Box, FormControl, FormLabel, Input } from '@mui/joy'

export const Filter = ({ onChange, filter }) => (
  <Box sx={{ borderRadius: 'sm', py: 2, width: 800, mt: 2 }}>
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
