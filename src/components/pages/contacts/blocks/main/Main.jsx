import { Link, Sheet, Typography } from '@mui/joy'
import { Link as RouteLink } from 'react-router-dom'
import { Filter } from './Filter'
import { ContactsTable } from './Table'

export const Main = ({ items, filter, setFilter }) => (
  <>
    <Filter onChange={setFilter} filter={filter} />
    {items()?.length > 0 ? (
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
    ) : filter === '' ? (
      <Typography variant='h3'>
        Add someone to start by{' '}
        <Link to='create' component={RouteLink}>
          clicking here
        </Link>
      </Typography>
    ) : (
      <Typography variant='h3'>We didnt find any contacts based on your query...</Typography>
    )}
  </>
)
