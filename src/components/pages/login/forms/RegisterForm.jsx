import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy'
import { Form, useForm } from 'react-hook-form'
import { useSignupMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { ErrorInputMessage, RequestError } from 'utils/ui/ErrorMessage'
export const RegisterForm = () => {
  const [signup, { isLoading, error }] = useSignupMutation()
  const {
    reset,
    control,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createValidationSchema(['name', 'email', 'password'])) })

  return (
    <Form
      control={control}
      onSubmit={({ data }) => {
        signup(data)
        reset()
      }}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='text' name='name' {...register('name')} />
        <ErrorInputMessage errors={errors} field='name' />
      </FormControl>
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
        <RequestError error={error} type='signup' />
        <Button type='submit' fullWidth loading={isLoading}>
          Sign up
        </Button>
      </Stack>
    </Form>
  )
}
