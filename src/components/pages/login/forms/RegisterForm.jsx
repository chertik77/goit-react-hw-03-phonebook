import { yupResolver } from '@hookform/resolvers/yup'
import { InfoOutlined } from '@mui/icons-material'
import { Button, FormControl, FormHelperText, FormLabel, Stack } from '@mui/joy'
import { FormInput } from 'components/FormInput'
import { Controller, useForm } from 'react-hook-form'
import { useSignupMutation } from 'redux/services'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { PasswordMeterInput } from 'utils/password/PasswordMeterInput'
import { RequestError } from 'utils/ui/ErrorMessage'

export const RegisterForm = () => {
  const [signup, { isLoading, error }] = useSignupMutation()
  const {
    reset,
    handleSubmit,
    register,
    control,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(createValidationSchema(['name', 'email', 'signuppassword']))
  })

  const submit = async ({ name, email, signuppassword: password }) => {
    await signup({ name, email, password })
    reset()
  }

  return (
    <form autoComplete='on' onSubmit={handleSubmit(submit)}>
      <FormInput
        error={error?.name}
        label='Name'
        register={register('name')}
        autoComplete='given-name'
        type='text'
        helperText={errors?.name?.message}
      />
      <FormInput
        error={error?.email}
        label='Email'
        register={register('email')}
        autoComplete='email'
        type='email'
        helperText={errors?.email?.message}
      />
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
    </form>
  )
}
