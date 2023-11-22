import { InfoOutlined } from '@mui/icons-material'
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy'

export const FormInput = ({ label, error, helperText, register, ...inputProps }) => (
  <FormControl error={Boolean(error)}>
    <FormLabel>{label}</FormLabel>
    <Input {...inputProps} {...register} />
    {error && (
      <FormHelperText>
        <InfoOutlined />
        {helperText}
      </FormHelperText>
    )}
  </FormControl>
)
