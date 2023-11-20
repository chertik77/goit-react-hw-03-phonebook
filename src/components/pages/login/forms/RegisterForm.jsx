import { yupResolver } from '@hookform/resolvers/yup'
import { InfoOutlined } from '@mui/icons-material'
import { Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy'
import { Controller, Form, useForm } from 'react-hook-form'
import { useSignupMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { PasswordMeterInput } from 'utils/password/PasswordMeterInput'
import { RequestError } from 'utils/ui/ErrorMessage'

export const RegisterForm = () => {
  const [signup, { isLoading, error }] = useSignupMutation()
  const {
    reset,
    control,
    register,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(createValidationSchema(['name', 'email', 'signuppassword']))
  })

  return (
    <Form
      autoComplete='on'
      control={control}
      onSubmit={async ({ data: { name, email, signuppassword: password } }) => {
        await signup({ name, email, password })
        reset()
      }}>
      <FormControl error={Boolean(errors?.name)}>
        <FormLabel>Name</FormLabel>
        <Input type='text' {...register('name')} autoComplete='given-name' />
        {errors?.name && (
          <FormHelperText>
            <InfoOutlined />
            {errors.name.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={Boolean(errors?.email)}>
        <FormLabel>Email</FormLabel>
        <Input type='email' {...register('email')} autoComplete='email' />
        {errors?.email && (
          <FormHelperText>
            <InfoOutlined />
            {errors.email.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={Boolean(errors?.signuppassword)}>
        <FormLabel>Password</FormLabel>
        <Controller
          name='signuppassword'
          control={control}
          render={({ field }) => <PasswordMeterInput {...field} />}
        />
        {errors?.signuppassword && (
          <FormHelperText>
            <InfoOutlined />
            {errors.signuppassword.message}
          </FormHelperText>
        )}
      </FormControl>
      <Stack sx={{ mt: 2, gap: 2 }}>
        <RequestError error={error} type='signup' />
        <Button type='submit' fullWidth loading={isLoading} disabled={!isValid}>
          Sign up
        </Button>
      </Stack>
    </Form>
  )
}
