import { yupResolver } from '@hookform/resolvers/yup'
import { InfoOutlined } from '@mui/icons-material'
import { Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy'
import { Form, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useOutletContext } from 'react-router-dom'
import { useAddNewContactMutation } from 'redux/services'
import { userExistsMessage } from 'utils/helpers/userExistsMessage'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { showConfirmMessage } from 'utils/notifications/confirm'
import { promiseToast } from 'utils/notifications/toast'

export const ContactsForm = () => {
  const [entitites] = useOutletContext()
  const [addNewContact, { isLoading }] = useAddNewContactMutation()
  const {
    control,
    reset,
    register,
    getValues,
    formState: { errors, isValid }
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(createValidationSchema(['name', 'number']))
  })
  console.log(createValidationSchema(['name', 'number']))
  const handleUserAddition = data =>
    promiseToast(addNewContact(data), {
      loading: 'Adding new user...',
      success: ({ data }) => `${data.name} added successfully!`
    })

  const submit = ({ data }) => {
    const userExists = userExistsMessage(entitites(), data)

    if (userExists) {
      showConfirmMessage(userExists).then(() => handleUserAddition(data))
    } else {
      handleUserAddition(data)
    }

    reset()
  }
  console.log(errors)
  console.log(getValues('number'))
  return (
    <Form control={control} autoComplete='on' onSubmit={submit}>
      <FormControl error={Boolean(errors?.name)} sx={{ mb: 1 }}>
        <FormLabel>Name</FormLabel>
        <Input type='text' {...register('name')} autoComplete='given-name' />
        {errors?.name && (
          <FormHelperText>
            <InfoOutlined />
            {errors.name.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={Boolean(errors?.number)}>
        <FormLabel>Number</FormLabel>
        <InputMask mask='999-999-9999' {...register('number')} autoComplete='tel'>
          <Input />
        </InputMask>
        {errors?.number && (
          <FormHelperText>
            <InfoOutlined />
            {errors.number.message}
          </FormHelperText>
        )}
      </FormControl>
      <Stack sx={{ mt: 2, gap: 2 }}>
        <Button type='submit' fullWidth loading={isLoading} disabled={!isValid}>
          Add contact
        </Button>
      </Stack>
    </Form>
  )
}
