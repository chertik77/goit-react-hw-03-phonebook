import { Sheet } from '@mui/joy'
import { Filter } from './Filter'
import { ContactsTable } from './Table'

export const Main = ({ items, filter }) => (
  <>
    <Filter onChange={filter} />
    <Sheet
      variant='outlined'
      sx={{
        display: { xs: 'none', sm: 'initial' },
        width: '100%',
        borderRadius: 'sm',
        flexShrink: 1,
        overflow: 'auto',
        minHeight: 0
      }}>
      <ContactsTable items={items} />
    </Sheet>
  </>
)
