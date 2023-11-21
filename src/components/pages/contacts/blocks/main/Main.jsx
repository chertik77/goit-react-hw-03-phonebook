import { Sheet, Typography } from '@mui/joy'
import { Link } from 'react-router-dom'
import { Filter } from './Filter'
import { ContactsTable } from './Table'

export const Main = ({ items, filter }) => (
  <>
    <Filter onChange={filter} items={items} />
    {items()?.length > 0 ? (
      <>
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
    ) : (
      <>
        <Typography variant='h3'>You dont have any contacts...</Typography>
        <Typography variant='h3'>
          Add someone to start by{' '}
          <Link to='create' className='text-blue-400 underline'>
            clicking here
          </Link>
        </Typography>
      </>
    )}
  </>
)
