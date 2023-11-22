import { InfoOutlined } from '@mui/icons-material'
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy'
import { cloneElement } from 'react'
import { Controller } from 'react-hook-form'

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

export const FormInputController = ({ name, label, error, helperText, control, children }) => (
  <FormControl error={Boolean(error)}>
    <FormLabel>{label}</FormLabel>
    <Controller
      name={name}
      defaultValue=''
      control={control}
      render={({ field }) => cloneElement(children, { ...field })}
    />
    {error && (
      <FormHelperText>
        <InfoOutlined />
        {helperText}
      </FormHelperText>
    )}
  </FormControl>
)
