import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { RequestError } from 'utils/ui/error'

export const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createValidationSchema(['email', 'password'])) })

  const errorMessage = field =>
    errors[field] && <small className='p-error mt-2'>{errors[field]?.message}</small>

  const onSubmit = data => {
    login(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' name='email' {...register('email')} sx={{ mb: 1 }} />
        {errorMessage('email')}
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type='password' name='password' {...register('password')} sx={{ mb: 1 }} />
        {errorMessage('password')}
      </FormControl>
      <Stack sx={{ mt: 0.5, gap: 2 }}>
        <RequestError error={error} />
        <Button type='submit' fullWidth loading={isLoading}>
          Sign in
        </Button>
      </Stack>
    </form>
  )
}
