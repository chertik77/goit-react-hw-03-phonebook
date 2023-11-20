import { Box, Typography } from '@mui/joy'

export const Footer = () => (
  <Box component='footer' sx={{ py: 3 }}>
    <Typography level='body-xs' textAlign='center'>
      © PhoneBook {new Date().getFullYear()}
    </Typography>
  </Box>
)
