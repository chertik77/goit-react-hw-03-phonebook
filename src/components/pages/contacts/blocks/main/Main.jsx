import { Link, Sheet, Typography } from '@mui/joy'
import { Link as RouteLink } from 'react-router-dom'
import { Filter } from '../Filter'
import { ContactsTable } from './Table'

export const Main = ({ contacts, filter, setFilter }) => (
  <>
    <Filter onChange={setFilter} filter={filter} />
    {contacts()?.length > 0 ? (
      <Sheet
        variant='outlined'
        sx={{ display: { xs: 'none', lg: 'initial' }, borderRadius: 'sm', width: 800, mt: 4 }}>
        <ContactsTable contacts={contacts} />
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
