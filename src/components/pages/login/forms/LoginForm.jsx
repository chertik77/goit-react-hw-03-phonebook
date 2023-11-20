import { yupResolver } from '@hookform/resolvers/yup'
import { InfoOutlined } from '@mui/icons-material'
import { Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy'
import { Form, useForm } from 'react-hook-form'
import { useLoginMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { RequestError } from 'utils/ui/ErrorMessage'

export const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const {
    reset,
    control,
    register,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange', resolver: yupResolver(createValidationSchema(['email', 'loginpassword'])) })

  return (
    <Form
      control={control}
      autoComplete='on'
      onSubmit={({ data }) => {
        login(data)
        reset()
      }}>
      <FormControl error={Boolean(errors?.email)}>
        <FormLabel>Email</FormLabel>
        <Input type='email' name='email' {...register('email')} autoComplete='email' />
        {errors?.email && (
          <FormHelperText>
            <InfoOutlined />
            {errors.email.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={Boolean(errors?.loginpassword)}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          name='password'
          {...register('loginpassword')}
          autoComplete='current-password'
        />
        {errors?.loginpassword && (
          <FormHelperText>
            <InfoOutlined />
            {errors.loginpassword.message}
          </FormHelperText>
        )}
      </FormControl>
      <Stack sx={{ mt: 2, gap: 2 }}>
        <RequestError error={error} type='login' />
        <Button type='submit' fullWidth loading={isLoading} disabled={!isValid}>
          Sign in
        </Button>
      </Stack>
    </Form>
  )
}
