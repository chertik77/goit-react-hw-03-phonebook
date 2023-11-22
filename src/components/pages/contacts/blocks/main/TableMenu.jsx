import { MoreHorizRounded } from '@mui/icons-material'
import { Box, Divider, Dropdown, IconButton, Menu, MenuButton, MenuItem } from '@mui/joy'
import { useDeleteContactByIdMutation } from 'redux/services'
import { promiseToast } from 'utils/notifications/toast'

export const TableMenu = ({ itemId }) => {
  const [deleteContactById] = useDeleteContactByIdMutation()

  const handleDelete = id => {
    promiseToast(deleteContactById(id), {
      loading: 'Deleting...',
      success: 'Contact deleted successfully!'
    })
  }

  return (
    <Box>
      <Dropdown>
        <MenuButton slots={{ root: IconButton }}>
          <MoreHorizRounded />
        </MenuButton>
        <Menu size='sm' sx={{ minWidth: 140 }}>
          <MenuItem>Edit</MenuItem>
          <Divider />
          <MenuItem color='danger' onClick={() => handleDelete(itemId)}>
            Delete
          </MenuItem>
        </Menu>
      </Dropdown>
    </Box>
  )
}
