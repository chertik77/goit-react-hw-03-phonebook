import { InfoOutlined } from '@mui/icons-material'
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy'
// import { cloneElement } from 'react'
// import { Controller } from 'react-hook-form'
// import InputMask from 'react-input-mask'

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

// export const FormInputController = ({ label, error, helperText, control }) => {
//   return (
//     <FormControl error={Boolean(error)}>
//       <FormLabel>{label}</FormLabel>
//       <Controller
//         control={control}
//         render={({ field }) => (
//           <InputMask mask='999-999-9999' autoComplete='tel' {...field}>
//             <Input sx={{ width: 284 }} />
//           </InputMask>
//         )}
//       />
//       {error && (
//         <FormHelperText>
//           <InfoOutlined />
//           {helperText}
//         </FormHelperText>
//       )}
//     </FormControl>
//   )
// }
