import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy'
import { useLoginFormValidation } from 'hooks/useLoginFormValidation'
import { useLoginMutation } from 'redux/services'
import { RequestError } from 'utils/ui/Error'
export const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const { reset, handleSubmit, registerEmail, registerPassword, errorMessage } = useLoginFormValidation()

  const onSubmit = data => {
    login(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' name='email' {...registerEmail} sx={{ mb: 1 }} />
        {errorMessage('email')}
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type='password' name='password' {...registerPassword} sx={{ mb: 1 }} />
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
