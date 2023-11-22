import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Stack } from '@mui/joy'
import { FormInput } from 'components/pages/FormInput'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { RequestError } from 'utils/ui/ErrorMessage'

export const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange', resolver: yupResolver(createValidationSchema(['email', 'loginpassword'])) })

  const submit = async ({ email, loginpassword: password }) => {
    await login({ email, password })
    reset()
  }

  return (
    <form autoComplete='on' onSubmit={handleSubmit(submit)}>
      <FormInput
        label='Email'
        type='email'
        register={register('email')}
        error={errors?.email}
        helperText={errors?.email?.message}
        autoComplete='email'
      />
      <FormInput
        label='Password'
        type='password'
        register={register('loginpassword')}
        error={errors?.loginpassword}
        helperText={errors?.loginpassword?.message}
        autoComplete='current-password'
      />
      <Stack sx={{ mt: 2, gap: 2 }}>
        <RequestError error={error} type='login' />
        <Button type='submit' fullWidth loading={isLoading} disabled={!isValid}>
          Sign in
        </Button>
      </Stack>
    </form>
  )
}
