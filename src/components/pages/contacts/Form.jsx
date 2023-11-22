import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input, Stack } from '@mui/joy'
import { FormInput, FormInputController } from 'components/FormInput'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useAddNewContactMutation } from 'redux/services'
import { userExistsMessage } from 'utils/helpers/userExistsMessage'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { showConfirmMessage } from 'utils/notifications/confirm'
import { promiseToast } from 'utils/notifications/toast'

export const Form = ({ contacts }) => {
  const [addNewContact, { isLoading }] = useAddNewContactMutation()
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(createValidationSchema(['name', 'number']))
  })

  const handleUserAddition = data =>
    promiseToast(addNewContact(data), {
      loading: 'Adding new user...',
      success: ({ data }) => `${data.name} added successfully!`
    })

  const submit = data => {
    const userExists = userExistsMessage(contacts(), data)

    if (userExists) {
      showConfirmMessage(userExists).then(() => handleUserAddition(data))
    } else {
      handleUserAddition(data)
    }

    reset()
  }

  return (
    <form
      autoComplete='on'
      onSubmit={handleSubmit(submit)}
      style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <FormInput
        error={errors?.name}
        label='Name'
        type='text'
        register={register('name')}
        autoComplete='given-name'
        sx={{ width: 284 }}
        helperText={errors?.name?.message}
      />
      <FormInputController
        name='number'
        control={control}
        label='Number'
        error={errors?.number}
        helperText={errors?.number?.message}>
        <InputMask mask='999-999-9999' autoComplete='tel'>
          <Input sx={{ width: 284 }} />
        </InputMask>
      </FormInputController>
      <Stack sx={{ mt: 2, gap: 2 }}>
        <Button type='submit' loading={isLoading} disabled={!isValid} sx={{ width: 284 }}>
          Add contact
        </Button>
      </Stack>
    </form>
  )
}
