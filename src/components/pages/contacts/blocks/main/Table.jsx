import { Box, Table, Typography } from '@mui/joy'
import { TableMenu } from './TableMenu'

export const ContactsTable = ({ contacts }) => (
  <Table
    aria-labelledby='tableTitle'
    hoverRow
    sx={{ '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)' }}>
    <thead>
      <tr>
        <th style={{ width: 500, padding: '12px 30px' }}>Name</th>
        <th style={{ width: 500, padding: '12px 6px' }}>Number</th>
        <th style={{ width: 70, padding: '12px 6px' }}>Menu</th>
      </tr>
    </thead>
    <tbody>
      {contacts()?.map(({ id, name, number }) => (
        <tr key={id}>
          <td>
            <Box sx={{ paddingLeft: 3 }}>
              <Typography level='body-cm'>{name}</Typography>
            </Box>
          </td>
          <td>
            <Box>
              <Typography level='body-cm'>{number}</Typography>
            </Box>
          </td>
          <td>
            <TableMenu itemId={id} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)
