import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy'
import { useForm } from 'react-hook-form'
import { useSignupMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'

export const RegisterForm = () => {
  const [signup, { isLoading, error }] = useSignupMutation()
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createValidationSchema(['name', 'email', 'password'])) })

  const errorMessage = field =>
    errors[field] && <small className='p-error mt-2'>{errors[field]?.message}</small>

  const onSubmit = data => {
    signup(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='email' name='email' {...register('name')} sx={{ mb: 1 }} />
        {errorMessage('name')}
      </FormControl>
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
        {error && <small className='p-error'>A user with the same email already exists.</small>}
        <Button type='submit' fullWidth loading={isLoading}>
          Sign up
        </Button>
      </Stack>
    </form>
  )
}
