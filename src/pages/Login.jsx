import { useLoginMutation } from 'redux/services'

const Login = () => {
  const [login] = useLoginMutation()
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget
    login({ email: form.elements.email.value, password: form.elements.password.value })
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label>
        Email
        <input type='email' name='email' className='text-black' />
      </label>
      <label>
        Password
        <input type='password' name='password' className='text-black' />
      </label>
      <button type='submit'>Log In</button>
    </form>
  )
}

export default Login
