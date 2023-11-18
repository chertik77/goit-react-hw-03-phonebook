import { useNavigate } from 'react-router-dom'
import { useCreateNewUserMutation } from 'redux/services'

const Register = () => {
  const navigate = useNavigate()
  const [createNewUser] = useCreateNewUserMutation()

  const onSubmit = async e => {
    e.preventDefault()
    const { name, email, password } = e.target.elements
    try {
      await createNewUser({ name: name.value, email: email.value, password: password.value })
      navigate('/contacts')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form autoComplete='off' className='flex flex-col gap-10' onSubmit={onSubmit}>
      <label>
        Username
        <input type='text' name='name' className='text-black' />
      </label>
      <label>
        Email
        <input type='email' name='email' className='text-black' />
      </label>
      <label>
        Password
        <input type='password' name='password' className='text-black' />
      </label>
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
