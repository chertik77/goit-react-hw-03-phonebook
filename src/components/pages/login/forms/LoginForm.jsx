import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy'
import { Form, useForm } from 'react-hook-form'
import { useLoginMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { ErrorInputMessage, RequestError } from 'utils/ui/ErrorMessage'

export const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const {
    reset,
    control,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createValidationSchema(['email', 'password'])) })

  return (
    <Form
      control={control}
      onSubmit={({ data }) => {
        login(data)
        reset()
      }}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' name='email' {...register('email')} />
        <ErrorInputMessage errors={errors} field='email' />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type='password' name='password' {...register('password')} />
        <ErrorInputMessage errors={errors} field='password' />
      </FormControl>
      <Stack sx={{ mt: 2, gap: 2 }}>
        <RequestError error={error} type='login' />
        <Button type='submit' fullWidth loading={isLoading}>
          Sign in
        </Button>
      </Stack>
    </Form>
  )
}
