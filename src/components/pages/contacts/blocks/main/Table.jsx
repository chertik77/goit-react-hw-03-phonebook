import { Box, Table, Typography } from '@mui/joy'
import { TableMenu } from './TableMenu'

export const ContactsTable = ({ items }) => (
  <Table
    aria-labelledby='tableTitle'
    stickyHeader
    hoverRow
    sx={{
      '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
      '--Table-headerUnderlineThickness': '1px',
      '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
      '--TableCell-paddingY': '4px',
      '--TableCell-paddingX': '8px'
    }}>
    <thead>
      <tr style={{ overflow: 'hidden' }}>
        <th style={{ width: 500, padding: '12px 30px' }}>Name</th>
        <th style={{ width: 500, padding: '12px 6px' }}>Number</th>
        <th style={{ width: 70, padding: '12px 6px' }}>Menu</th>
      </tr>
    </thead>
    <tbody>
      {items()?.map(({ id, name, number }) => (
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
