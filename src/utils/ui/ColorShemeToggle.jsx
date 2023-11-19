import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import { IconButton, useColorScheme } from '@mui/joy'

export const ColorSchemeToggle = () => {
  const { mode, setMode } = useColorScheme()

  return (
    <IconButton
      id='toggle-mode'
      size='sm'
      variant='outlined'
      color='neutral'
      aria-label='toggle light/dark mode'
      onClick={() => (mode === 'light' ? setMode('dark') : setMode('light'))}>
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  )
}
